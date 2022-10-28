var http=require("http");
var ser=http.createServer(function(req,res)
		{
		res.writeHead(200,{'content-type':'text/html'});
		//res.writeHead(200,{'content-type':'text/plain'});
		res.write("<h1>hello world</h1>");
		res.end();
		});
		
		ser.listen(2002);
		console.log("server started localhost:2002");