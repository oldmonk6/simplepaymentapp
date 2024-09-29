const express=require('express');
const router=express.Router();
const zod=require('zod');
const jwt=require("jsonwebtoken");
const {JWT_SECRET} =require('../controllers/config');
const User = require('../models/user');
const {authMiddleware} =require( "../controllers/usermiddleware");
const Account = require('../models/account');

const signupbody=zod.object({
    username:zod.string().email(),
    firstname:zod.string(),
    lastname:zod.string(),
    password:zod.string()

})
router.post("/signup",async(req,res)=>{
    const success=signupbody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"email already taken/incorrect inputs"
        })
    }
    const existing= await User.findOne({
        username:req.body.username
    })
    if(existing){
        return res.status(411).json({
            message:"email already taken/incorrect inputs"
        })
    }
    const user1=await User.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname,

    }
    )
    const userid=user1._id;
    await Account.create({
        userid,
        balance:1+Math.random()*1000

    })
    const token=jwt.sign({
        userid
    },JWT_SECRET)
    res.json({
        message:"user created succesfully ",
        token :token
    })
})
const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user1 = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user1) {
        const token = jwt.sign({
            userid: user1._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})
const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/update", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }
      try{
		await User.updateOne({ _id: req.userid }, req.body);
      }catch(err){
    res.json({
        message: "Updated successfully"
    })
}
})
router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })

    res.json({
         user: users.map(user1 => ({
            username: user1.username,
            firstName: user1.firstname,
            lastName: user1.lastname,
            _id: user1._id
        }))
    })
})
module.exports=router;