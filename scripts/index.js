// JavaScript 101 Exercises

// Hello, you!
// function hello(name="world") {
//     console.log(`Hello, ${name}!`)
//   }
//   hello();

// Hello, you! Par 2
// function madlib(name, subject) {
//     return (`${name}'s favorite subject in school is ${subject}.`)
// }
// console.log(madlib("Eric", "JS"));

// // Tip Calculator
// function tipAmount(bill, service) {
//     if (service === "good") {
//         return (bill * .20)
//     } else if (service === "fair") {
//         return (bill * .15) 
//     } else if (service === "bad") {
//         return (bill * .10)
//     }
// }
// console.log(tipAmount(100, "bad"))

// Tip Calculator 2
// function totalAmount(bill, service) {
//     if (service === "good") {
//         return (bill + (bill * .20))
//     } else if (service === "fair") {
//         return (bill + (bill * .15)) 
//     } else if (service === "bad") {
//         return (bill + (bill * .10))
//     }
// }
// console.log(totalAmount(100, "good"))

// Tip Calculator 3
// function splitAmount(bill, service, numPatrons) {
//     let tipPerc
//     if (service === "good") {
//         tipPerc = .20
//     } else if (service === "fair") {
//         tipPerc = .15
//     } else if (service === "bad") {
//         tipPerc = .10
//     }
//     let tip = (tipPerc * bill)
//     let totalBill = (tip + bill)
//     let cpp = (totalBill / numPatrons)
//     return (`Total: ${bill}
// Tip: ${tip}
// Cost Per Person ${cpp}`)
// }
// console.log(splitAmount(300, "good", 3))

// Print Numbers
// function printNumbers(startNum, endNum) {
//     for(let i = startNum; i <= endNum; i++) {
//         console.log(i);
//     }
// }
// printNumbers(1, 10);

// Print a Square
// function printSquare(size) {
//     let square = '';
//     for ( let i = 0; i < size; i++ ) {
//         square += '*';
//     }
//     for ( let i = 0; i < size; i++ ) {
//         console.log( square );
//     }
// }
// printSquare(5);

// Print a Box
// function printBox(width, height) {
//     let box = '';
//     for ( let i = 0; i < height; i++ ) {
//         for (let j = 0; j < width; j++) {
//             if (i === 0 || i === (height - 1) || j === 0 || j === (width - 1)) {
//                 box += '*';
//             } else { 
//                 box += ' ';
//             }
    
//         }
//     box += "\n";   
//     }
//     return box
// }
// console.log(printBox(5, 5));

// Print a Banner
// function printBanner(text) {
//     const bannerLength = text.length + 4;
//     const star = '*';
//     const starBar = star.repeat(bannerLength);
//     return (`${starBar}\n${star} ${text} ${star}\n${starBar}`)
// }
// console.log(printBanner("Potato Head Dance"))

// Factor a Number
// function factorANumber (num) {
//     console.log(`Print factors of ${num}:`)
//     for (let i = 0; i <= num; i++) {
//         if (num % i === 0) {
//             console.log(i) ;
//         }
//     }
// }
// factorANumber(220);

// Caesar Cipher
// function mod(n, p)
// {
//     if ( n < 0 )
//         n = p - Math.abs(n) % p;

//     return n % p;
// }

// function cipher(string, offset) {
//     const alpha = 'abcdefghijklmnopqrstuvwxyz ';
//     let encryptedCode = "";
    
//     for(let i = 0; i < string.length; i++) {
//         let letter = string.charCodeAt(i);
//         if (letter >= 65 && letter <= 65 + 26 - 1)
//         {
//             letter -=65;
//             letter = mod(letter + offset, 26);
//             letter += 65;
//         }

//         encryptedCode += String.fromCharCode(letter);
        
        
//     }
//     return encryptedCode;
// }

// console.log(cipher('Genius without education is like silver in the mine', 13))

// Leetspeak
// function leetspeak(string) {
//     let leetspeakString = '';
//     for (let i = 0; i < string.length; i++) {
        
//         let letter = string.charAt(i).toUpperCase();
//         if (letter === "A") {
//             leetspeakString += "4";
//         } else if (letter === "E") { 
//             leetspeakString += "3";
//         } else if (letter === "G") {
//             leetspeakString += "6";
//         } else if (letter === "I") {
//             leetspeakString += "1";
//         } else if (letter === "O") {
//             leetspeakString += "0";
//         } else if (letter === "S") {
//             leetspeakString += "5";
//         } else if (letter === "T") {
//             leetspeakString += "7";
//         } else {
//             leetspeakString += letter;
//         }
//     }
//     return leetspeakString;
// }
// console.log(leetspeak('Firey Grill Set'));

// Long-long Vowels
// function extendVowels(string) {
//     let newString = '';
//     for (let i = 0; i < string.length; i++) {
//         if ((i + 1) < string.length) {
//             if (string[i] === string[i+1]) {
//                 newString += string[i].repeat(4);
//             } else if (i === string.length - 1) {
//                 newString += string[i];
//             } else { 
//                 newString += string[i];
//             }
//         } else { 
//             newString += string[i];
//         }
//     }
//     return newString
// }

// console.log(extendVowels("Duude"));

// Sum the Numbers
// const arr = [1, 12, 8];
// let sum = 0;
// arr.forEach(function (element) {
//     sum += element;
//     return sum;
// }
// );
// console.log(sum);

// Just the Positives

// const arr = [1, -3, 44, 0, -2, 3, 2, 6];
// let posArr = [];

// arr.forEach(function (element) {
//     if (element > 0) {
//         posArr.push(element);
//     }
//     return posArr;
// }
// );
// console.log(posArr);

// Matrix Addition

const matrix = [
    [[2, 4], [3, 4]], 
    [[5, 2], [3, 1]]
];

function matrixAdd(arr) {
    let addedMatrix = [];
    for (let i = 0; i < arr.length; i ++) {
        addedMatrix.push([])
        // console.log(addedMatrix);
        for (let j = 0; j < addedMatrix.length; j++) {
            addedMatrix[i].push(Number(j) + Number(j))
        }
    }
    return addedMatrix;
}

console.log(matrixAdd(matrix));