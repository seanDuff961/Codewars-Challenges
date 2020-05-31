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

/* function sumOfMinimums(arr) {
  // your code here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    sum += el.sort((a, b) => a - b)[0];
  }
  return sum;
} */


//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
function rot13(message){
  //your code here
  const alphabet1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
  const alphabet2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];  
  let indexes = [];
  //get indexes
  for (let i = 0; i < message.length; i++) {
    if (message[i].match(/[a-z]/)) {
      indexes.push(alphabet1.indexOf(message[i]));
    }
    if (message[i].match(/[A-Z]/)) {
      indexes.push(alphabet2.indexOf(message[i]));
    }
    else {
      indexes.push(' ');
    }
  }
  console.log('indexessss', indexes);
  let newIndexes = [];
  //get indexes after rotating
  while (indexes.length) {
    let element = indexes.shift();
    console.log('elementttt', element);
    if (element + 13) 
    //let newIndex = (indexes.shift() + 13);
    if (element > 26) {
      element = element - 26;
    }
    newIndexes.push(element);
  }
  console.log('newIndexessss', newIndexes);
  //create final string with new indexes
  let finalString = '';
  for (let j = 0; j < message.length; j++) {
    if (message[j].match(/[a-z]/)) {
      finalString += alphabet1[newIndexes[j]];
    }
    if (message[j].match(/[A-Z]/)) {
      finalString += alphabet2[[newIndexes[j]]]
    }
    if (message[j].match(/[!@#$%^&*(),.?":{}|<>+=]/)) {
      finalString += message[j];
    }
    if (message[j].match(/[\d]/)) {
      finalString += message[j];
    }
    if (message[j] === ' ') finalString += ' ';
  }
  return finalString;
}
console.log(rot13("10+2 is twelve."));

//t == 19
// + 13 
//g == 6




