// Creating character sets

//* String.fromCharCode() function is used to create a string from the given sequence of UTF-16 code units.


// Generating Random Uppercase Letters
const getUpperCase = () => String.fromCharCode(Math.floor(Math.random()*26)+ 65);

console.log(getUpperCase());

// Generating Random Lowercase Letters
const getLowerCase = () => String.fromCharCode(Math.floor(Math.random()*26)+ 97);

console.log(getLowerCase());

// Generating Randome Number
const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random()*10)+ 48);

console.log(getRandomNumber());

// Generating Random Numbers
const getRandomSymbol = () => {
    let symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random()*symbol.length)];
}
console.log(getRandomSymbol());

// Communication with the DOM
let userAnswer = document.getElementById("answer")
let userLength = document.getElementById("length")
let userNumber = document.getElementById("number")
let userUpper = document.getElementById("upper")
let userLower = document.getElementById("lower")
let userSymbol = document.getElementById("symbol")
let copy = document.getElementById("copy")
let generate = document.getElementById("generate")

//* declaring a constant object where random values generated are stored
const randomFunctions = {
    upper:getUpperCase,
    lower: getLowerCase,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Generating Events
generate.addEventListener('click', () => {
    const length = userLength.value;
    const hasUpper = userUpper.checked;
    const hasLower = userLower.checked;
    const hasNumber = userNumber.checked;
    const hasSymbol = userSymbol.checked;

    //* .innerText simply means any thing this function returns would be displayed in the DOM in the answer field
    return answer.innerHTML = generatePsswd(hasUpper, hasLower, hasSymbol, hasUpper, length, hasNumber)
})

// Generating Password

const generatePsswd = (upper, lower, number, symbol, length) => {
    let generatedPsswd = "";

    const typesCount = upper + lower + number + symbol;

    // console.log(typesCount)

    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0])

    if(typesCount === 0) {
        return ''
    }

    for(let i =0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPsswd += randomFunctions[funcName]()
        });
    }

    const finalPsswd = generatedPsswd.slice(0, length)

    return finalPsswd;
}