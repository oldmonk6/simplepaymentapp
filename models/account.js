const express=require("express");
const mongoose=require('mongoose')
const User=require('./user')
const accountSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});
const Account = mongoose.model('Account', accountSchema)
module.exports=Account