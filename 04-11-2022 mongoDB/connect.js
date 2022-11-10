const express=require('express');

const app=express();

const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1/sam",(err)=>{
if(err)
console.log(err);
else
console.log("db connected");
});


