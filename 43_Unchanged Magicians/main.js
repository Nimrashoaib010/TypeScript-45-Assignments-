// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magician great through .map() it will modify array 
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magician_names = ["Harry poter", "Husnain", "Shoaib"];
// Making a copy of original array throigh .slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_magician_names);
// Show both arrays Original and Copied
// Original
console.log("Original Array\n");
show_magicians(magician_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
