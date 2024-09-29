const express = require("express");
const cors=require('cors');


const mainrouter = require("./routes/index");
const userrouter=require("./routes/user")
const accountrouter=require("./routes/account")
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/v1",mainrouter)
app.use("/api/v1/account",accountrouter)
app.use("/api/v1/user",userrouter)
app.listen(3000,()=>{
    console.log("listening on port");
});


