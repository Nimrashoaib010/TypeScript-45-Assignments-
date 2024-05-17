// Array of Current Users
var current_users = ["nimra", "Laiba", "samra", "Rameen", "Hiba Noor"];
// Array of New Users
var new_users = ["Amreen", "Shoaib", "Nimra", "Husnain", "Hiba Noor"];
// Loop through new_users to check for usernames avaiblity
new_users.forEach(function (new_one_user) {
    // Making a Condition for username already exit and save in our_condition variavle
    var our_condition = (current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); }));
    // Print Differrent messages using If-Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
