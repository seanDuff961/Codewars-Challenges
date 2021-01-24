// function nonsense(str) {
//     let newString = str.replace(/trex/g, '').replace(/raptor/g, '');
//     let finalString = '';
//     for (let i = 0; i < newString.length; i++) {
//         if (newString[i].match(/0/)) {
//             finalString += 'a';
//         }
//         if (newString[i].match(/1/)) {
//             finalString += 'e';
//         }
//         if (newString[i].match(/2/)) {
//             finalString += 'i';
//         }
//         if (newString[i].match(/3/)) {
//             finalString += 'o';
//         }
//         if (newString[i].match(/4/)) {
//             finalString += 'u';
//         }
//         else {
//             finalString += newString[i];
//         }
//     }
//     finalString = finalString.replace(/\d/g, '')
//     .charAt(0).toUpperCase() + finalString.slice(1)
//     .replace(/[A-Z][a-z]*/g, str => str.toLowerCase())
//     .replace(/ i /g, ' I ')
//     .replace(/trex/g, '')
//     .replace(/raptor/g, '')
//     .replace(/[0-4]/g, '');
//     finalString = finalString + '.';
//     if (finalString[finalString.length-1] === "." && finalString[finalString.length-2] === "."){
//         finalString = finalString.substring(0, finalString.length - 1);
//         return finalString.replace(/ i /g, ' I ')
//     }
//     else {
//         return finalString.replace(/ i /g, ' I ')
//     }
// }

// console.log(nonsense('i think therefore i am i'));

// function replaceStandalone (string) {
//     return string.replace(/ i /g, ' I ');
// }

// console.log(replaceStandalone('i think therefore i am i '));

// function apparently(string) {
//     return string.replace(/and/g, 'and apparently').replace(/but/g, 'but apparently');
// }

// console.log(apparently('It was great and I have never been on live television before but sometimes I dont watch this.'));


