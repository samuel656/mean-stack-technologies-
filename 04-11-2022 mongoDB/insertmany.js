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
nm.insertMany([
{ name:'sampath',age:21},
{ name: 'swetha',age:19},
{ name: 'joel',age:22}
]).then(function(){
console.log("data inserted")
}).catch(function(error){
console.log(error)
});

