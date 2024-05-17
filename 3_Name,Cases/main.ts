let personName: string = "NimRa ShoAib";

console.log(personName.toLowerCase());

console.log(personName.toUpperCase());

// console.log(personName.replace(/\b\w/g, (c) => c.toUpperCase()));
function toTittleCase(str: string) {
    const tittleCasestring = str;
    return tittleCasestring;
}
personName = toTittleCase(personName);
console.log(personName);