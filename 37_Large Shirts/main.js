"use strict";
// Making a function
function make_shirt(size = "Large", printMessage = "I Love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirts.`);
}
// Calling a function with by-default values
make_shirt();
// Calling a function now with Medium size and default message
make_shirt("Medium");
// Calling a function now with small size and Different Print Message
make_shirt("Small", "I Love JavaScript");
