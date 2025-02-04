// Your code goes here
const rapid = (str) => {
    let vowels = "aeiouAEIOU"
    let strNew = "";
    for (i=0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            strNew += str[i].toUpperCase();
    }   }
    return strNew;
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
