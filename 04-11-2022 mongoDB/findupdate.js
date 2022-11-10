const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1/sam",(err)=>{
if(!err)
console.log("db connected");
else
console.log(err);
});

const ns=new mongoose.Schema({
name:String,
age:Number
});

const nm=new mongoose.model("students",ns);

let old={ name:'swetha' }
let new1={ name:'swetha mocherla' };

nm.findOneAndUpdate(old,new1,(err)=>{
if(err){
console.log(err);
}
else 
{
console.log("updated");
}
});

