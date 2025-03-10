// Your code goes here
const rapid = (string) => {
    let newString = "";
    let vowels = "aeiouAEIOU";

    for (let letter of string){

        if (!vowels.includes(letter)){
            newString += letter;
        }
        
    }
    return newString.toUpperCase();
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
