var price:any = 699;
var Status:any = "Available";

enum MobilePrice{Gold=699,pink=650,silver=712};
let x:any=MobilePrice.Gold;
let y:any=MobilePrice.pink;
let z:any=MobilePrice.silver;

document.getElementById("pPrice").innerHTML = price;
document.getElementById("pAvailable").innerHTML = Status;
document.getElementById("gold").innerHTML = x;
document.getElementById("pinkgold").innerHTML = y;
document.getElementById("silver").innerHTML = z;