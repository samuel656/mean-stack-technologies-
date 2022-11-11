var price = 699;
var Status = "Available";
var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["Gold"] = 699] = "Gold";
    MobilePrice[MobilePrice["pink"] = 650] = "pink";
    MobilePrice[MobilePrice["silver"] = 712] = "silver";
})(MobilePrice || (MobilePrice = {}));
;
var x = MobilePrice.Gold;
var y = MobilePrice.pink;
var z = MobilePrice.silver;
document.getElementById("pPrice").innerHTML = price;
document.getElementById("pAvailable").innerHTML = Status;
document.getElementById("gold").innerHTML = x;
document.getElementById("pinkgold").innerHTML = y;
document.getElementById("silver").innerHTML = z;
