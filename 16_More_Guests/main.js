// creating a Guest List array
var guestList = ["Nimra", "Amreen", "Hiba Noor", "Husnain"];
//making variable for those guest who cant come
var dontCome = guestList[0];
//Print the name of guest who cant come
console.log(dontCome, "Nahi Aahh Skti hai");
// Add or Remove values from Guest List Array
guestList.splice(0, 1, "Shoaib");
// Message Print for Bigegr table
console.log("Good Newa! We have Found a Bigger Table for Dinner.");
// Adding anew guest at starting index of array
guestList.unshift("Khadija");
// Adding a new guest at ending index of array
guestList.push("Nima");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adidng a new guest to middle index of array 
guestList.splice(middleIndex, 0, "Hasan");
// Print Message of Updated List
console.log("Updated List of our Guests");
// Sending a invitation mesage to our gests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
