// Creating a Array
let useerNames = ["Nimra", "Laiba", "Samra", "Admin", "Hiba Noor"];

// Using ForEach Loop on Array

useerNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    } else {
        console.log(`Hello ${oneUser},thank you for logging in again.`)
    }
})