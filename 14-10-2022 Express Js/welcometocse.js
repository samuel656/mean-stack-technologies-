var express=require('express');
var app=express();
app.get('/cse',function(req,res){
	res.send("WELCOME TO CSE!!");
});
app.listen(0708);