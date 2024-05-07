const str = "hi bro / ayusuh";
const words = str.split(/\s+/); // Split the string into words based on whitespace
const joinedString = words.join(""); // Join the words together without spaces
const replacedSlash = joinedString.replaceAll("/", "-"); // Replace '/' with '-'
console.log(replacedSlash); // Output: "hibro-ayusuh"