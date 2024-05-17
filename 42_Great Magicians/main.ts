// Define the function to show magicians names
function show_magician(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}


// Function to make magician great through .map() it will modify array 
function make_great(magicians: string[]) {
    return magicians.map(name => `The Great ${name}`);
}


// Define an array of magicians names
let magician_names = ["Harry poter", "Husnain", "Shoaib"];


// Call make_great function to modify magicians names
let great_magicians = make_great(magician_names)


// console.log(great_magicians);


// Call show_magicians that show modified list of magicians
show_magician(great_magicians);