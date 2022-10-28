var ps=require('prompt-sync');
var prompt=ps();
var num=prompt("enter a number ");
var n=Number(num);
var count=0;
for(i=1;i<=n;i++)
{
	if(n%i==0)
	{
	count=count+1;
	}
}
if(count==2)
{
console.log(n+" is a prime number");
}
else
{
console.log(n+" is not a prime number");	
}