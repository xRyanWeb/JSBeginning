let firstName = "Ryan";
let lastName = "James";

let title = "Software Developer"

let fullName = firstName + " " + lastName;
// fullName = `My Full Name is: ${firstName} ${lastName}`

console.log(fullName);
let bio = "Line1\nLine2\nLine3\n";

console.log(bio);
let upperName = fullName.toUpperCase();
let lowerName = fullName.toLowerCase();
console.log(upperName);
console.log(lowerName);

let index1 = fullName.indexOf("Rya");
let index2 = fullName.indexOf("an");
let index3 = fullName.indexOf("xyz");
console.log(index1);
console.log(index2);
console.log(index3);

let containsString = fullName.includes("Ryan");
console.log(containsString);