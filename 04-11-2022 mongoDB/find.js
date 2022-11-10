const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/sam",(err)=>{
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

nm.find({},function(err,docs){
if(err){
console.log(err);
}
else{
console.log(docs);
}
});

