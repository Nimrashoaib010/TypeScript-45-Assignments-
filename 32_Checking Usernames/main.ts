// Array of Current Users
let current_users = ["nimra", "Laiba", "samra", "Rameen", "Hiba Noor"]

// Array of New Users
let new_users = ["Amreen", "Shoaib", "Nimra", "Husnain", "Hiba Noor"]

// Loop through new_users to check for usernames avaiblity

new_users.forEach(new_one_user => {

    // Making a Condition for username already exit and save in our_condition variavle
    let our_condition = (current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase()))

    // Print Differrent messages using If-Else statements
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`)
    } else {
        console.log(`This username ${new_one_user} is available`)
    }

})