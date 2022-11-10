const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/sam",(err)=>{
    // where sam is database name
    if(!err)
        console.log("db connected");
    else
        console.log("db error");
});

const ns = new mongoose.Schema({
    name: String,
    age: Number
});

const old_name = {name: 'joel'};
const new_name = {name: 'joel depuri'};

// students is collection name
const nm = new mongoose.model("students",ns); 

nm.updateMany(old_name,new_name,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("updated");
    }
});