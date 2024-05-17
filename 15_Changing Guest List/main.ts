let guestList = ["Nimra", "Amreen", "Husnain", "Hiba Noor"];

let dontCome = guestList[0];

console.log(dontCome, "Nh Ahh Skti");

guestList.splice(0, 1, "Shoaib");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to Dinner with me?`));