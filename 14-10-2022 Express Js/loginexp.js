var express=require('express');
var app=express();
app.get('/',function(req,res){
	var uname=req.query.uname;
	var pwd=req.query.pwd;
	res.send("HELLO "+uname);
});
app.listen(0708);