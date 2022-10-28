var fs=require("fs");
var data="write operation is performed";
fs.writeFile('file2.txt',data,function(err)
{
	if(err)
		console.log(err);
	else
		console.log("content added go and check file2.txt");
	                                                                                                                                                                                                                                                                                                                                                                                                                                      
});