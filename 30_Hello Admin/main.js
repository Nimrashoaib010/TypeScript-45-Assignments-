// Creating a Array
var useerNames = ["Nimra", "Laiba", "Samra", "Admin", "Hiba Noor"];
// Using ForEach Loop on Array
useerNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",thank you for logging in again."));
    }
});
