var fs=require("fs");
var result;
fs.readFile('copy1.txt','utf8',function(err,data)
{
	result=data;
	fs.readFile('copy2.txt','utf8',function(err,data)
	{
	result=result+' '+data;
		fs.appendFile('merge.txt',result,function(err)
		{
		if(err)
		console.log(err);
		else
		console.log("content merged go and check merge.txt");
	                                                                                                                                                                                                                                                                                                                                                                                                                                 
	     });                                                                                                                                                                                                                                                                                                                                                                                                                                  
	}); 
});
var http=require("http");
var ser=http.createServer(function(req,res)
	{
		res.write(result);
		res.end();
	});
	ser.listen(0708);
