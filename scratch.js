// function addArrays(array1, array2) {
//   let arrayToNumber1 = parseInt(array1.join(""));
//   let arrayToNumber2 = parseInt(array2.join(""));
//   if (arrayToNumber1 === [] && arrayToNumber2 === []) {
//     return [];
//   }
//   let number = arrayToNumber1 + arrayToNumber2;
//   let numberArray = String(number).split("");
//   let finalArray = [];
//   //account for negatives
//   if (numberArray[0] === "-") {
//     let firstNumber = "";
//     firstNumber += numberArray[0] + numberArray[1];
//     finalArray.push(firstNumber);
//     finalArray.push(numberArray.join("").slice(2).split(""));
//     return finalArray.reduce((acc, val) => acc.concat(val), []).map(Number);
//   } else {
//     return String(number).split("").map(Number);
//   }
// }
// console.log(addArrays([3, 2, 6, 6], [-7, 2, 2, 8]));


