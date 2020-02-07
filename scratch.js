// function repeatingChar(str){
//   const result = [];
//   const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
//   if (strArr != null) {
//     strArr.forEach((elem) => {
//       result.push(elem[0]);
//     });
//   }
//   return result;
// }

// function blocks(s) {
//   if (s.length === 0) {
//     return '';
//   }
//   if (!/(.).*\1/.test(s) === true) {
//     let lower = s.match(/[a-z]/g).join('');
//     let upper = s.match(/[A-Z]/g).join('');
//     let numbers = s.match(/[\d]/g).sort().join('');
//     return lower + upper + numbers;
//   }
//   if (!/(.).*\1/.test(s) === false) {
//     let repeatChar = (repeatingChar(s)[0]);
//     let repeatRegex = new RegExp(repeatingChar(s)[0]);
//     let repeatCount = s.match(/[repeatRegex]/gi).length;
//     let nonAChars = s.match(/[^a]/gi).join('');
//     function getPosition(string, subString, index) {
//       return s.split(repeatChar, index).join(repeatChar).length;
//     }
//     let index = getPosition(s, repeatChar, 2);
//     // console.log('indexxxxx', index);
//     return s.slice(0, index) + nonAChars.slice(1) + ('-' + repeatChar).repeat(repeatCount - 1);
//   }
// }
// console.log(blocks('abacad'));

function sumOfMinimums(arr) {
  // your code here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    sum += el.sort((a, b) => a - b)[0];
  }
  return sum;
}




