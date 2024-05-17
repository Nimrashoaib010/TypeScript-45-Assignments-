var guestList = ["Nimra", "Amreen", "Husnain", "Hiba Noor"];
var dontCome = guestList[0];
console.log(dontCome, "Nh Ahh Skti");
guestList.splice(0, 1, "Shoaib");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to Dinner with me?")); });
