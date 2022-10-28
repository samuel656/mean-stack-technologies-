var val=require("./validate");
var result=val.authenticate("admin","admin");
var http=require("http");
var ser=http.createServer(function(req,res)
	{
		if(result==1)
		{
			res.write("valid user");
		}
		else{
			res.write("invalid user");
		}
		res.end();
	});
	ser.listen(7070);