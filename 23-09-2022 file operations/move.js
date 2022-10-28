var fs=require("fs");

fs.readFile('c1.txt','utf8',function(err,data)
{
	fs.move('c2.txt',data,function(err)
	{
	if(err)
		console.log(err);
	else
		console.log("content copied go and check copy2.txt");
	                                                                                                                                                                                                                                                                                                                                                                                                                                      
	}); 
});
