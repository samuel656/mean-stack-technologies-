var ps=require('prompt-sync');
var prompt=ps();
var a=Number(prompt("enter first number "));
var b=Number(prompt("enter second number "));



function gcd(a,b)
{
	if(a==0)
	{
	console.log("gcd of two numbers is "+b);
	}
	else if(b==0)
	{
	console.log("gcd of two numbers is "+a);
	}
	else
	{
	gcd(b,a%b);
	}
}

gcd(a,b);