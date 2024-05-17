// Define Variable
var alienColor = "green";
// Using If and Else-If Statements
// Version 1
if (alienColor === "green") {
    console.log("(Version 1) You shot down green alien you have earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("You shot down yellow alien you have earned 10 points.");
}
else if (alienColor === "red") {
    console.log("You shot down red alien you have earned 15 points.");
}
// Version 2
var alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("You shot down green alien you have earned 5 points.");
}
else if (alienColor2 === "yellow") {
    console.log("(Version 2) You shot down yellow alien you have earned 10 points.");
}
else if (alienColor2 === "red") {
    console.log("You shot down red alien you have earned 15 points.");
}
// Version 3
var alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("You shot down green alien you have earned 5 points.");
}
else if (alienColor3 === "yellow") {
    console.log("You shot down yellow alien you have earned 10 points.");
}
else if (alienColor3 === "red") {
    console.log("(Version 3) You shot down red alien you have earned 15 points.");
}
