// Define a function with a rest parameter that accept items arguments represting our sandwich

function makeSandwich(...items: string[]) {
    console.log("\nMaking a sandwich with the following item: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 items with 3 different number of arguments 

makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato"); 