var l=[1,3,2,5,7];
var ps=require('prompt-sync');
var prompt=ps();
var key=Number(prompt("enter key number "));
function linearSearch(l,key)
{
	for(i=0;i<l.length;i++)
	{
		if(l[i]==key)
		{
			return i;
		}
	}
	
}

var pos=linearSearch(l,key);
if(pos>=0)
{
	console.log("element is found at "+pos+" position");
}
else{
	console.log("element not found");
}

