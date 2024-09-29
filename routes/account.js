const express=require("express");
const router=express.Router();
const mongoose=require("mongoose")
const {authMiddleware}  = require("../controllers/usermiddleware");
const Account= require("../models/account");
router.get("/balance",authMiddleware,async(req,res)=>{
    const account=await Account.findOne({userid:req.userid})
    res.json({
        Balance:account.balance
    })
})
router.post("/tranfer",authMiddleware,async(req,res)=>{
    const session=await mongoose.startSession();
    session.startTransaction();
    const {amount,to}=req.body;
    const account=await Account.findOne({userid:req.userid}).session(session);
    if(!account || account.balance<amount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"insufficient balance"
        })
    }
    const toAccount = await Account.findOne({ userid: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userid: req.userid }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userid: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });

})

module.exports=router;