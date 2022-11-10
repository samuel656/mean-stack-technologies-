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

nm.deleteOne({name:'samuel'}).then(function(){
console.log("data record deleted")
}).catch(function(error){
console.log(error)
});

