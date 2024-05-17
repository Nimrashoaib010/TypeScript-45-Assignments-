// creating a Guest List array
let guestList = ["Nimra", "Amreen", "Hiba Noor", "Husnain"];

//making variable for those guest who cant come
let dontCome = guestList[0];

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
let middleIndex: number = Math.floor(guestList.length / 2);

// Adidng a new guest to middle index of array 
guestList.splice(middleIndex, 0, "Hasan")

// Print Message of Updated List
console.log("Updated List of our Guests");

// Sending a invitation mesage to our gests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));

// Inform that only two Guests can be invited for dinner 
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Gusts to dinner with me")
 
// using while loop to remove guests from the array until only two names remain
while(guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest} I can't invite you to dinner`);
}

// Sending a invitations to the last two guest on the list 
console.log("Invitations to the last 2 Gusts");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// Removing last two Guest fromt the list
guestList.pop();
guestList.pop()

console.log("Empty List:", guestList)