// Creating character sets

// String.fromCharCode() function is used to create a string from the given sequence of UTF-16 code units.

const getUpperCase = () => String.fromCharCode(Math.floor(Math.random()*26)+ 65);

console.log(getUpperCase());

const getLowerCase = () => String.fromCharCode(Math.floor(Math.random()*26)+ 97);

console.log(getLowerCase());

const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random()*10)+ 48);

console.log(getRandomNumber());

const getRandomSymbol = () => {
    let symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random()*symbol.length)];
}
console.log(getRandomSymbol());