function solve(data) {
  let frequency = data.reduce((r, e) => {
    if (!r[e]) r[e] = 1;
    else r[e]++;
    return r;
  }, {})

  return [...data].sort((a, b) => {
    return frequency[b] - frequency[a] || a - b
  })
}

console.log(solve([1,2,3,0,5,0,1,6,8,8,6,9,1]));

//https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e/train/javascript

function encode(text) {
  let asciiArray = [];
  for (let i = 0; i < text.length; i++) {
    asciiArray += text[i].charCodeAt();
  }
  let binaryString = '';
  for (let j = 0; j < asciiArray.length; j++) {
    binaryString += asciiArray[j].toString(2);
  }
  let finalString = '';
  for (let k = 0; k < binaryString.length; k++) {
    if (binaryString[k] === '0') {
      finalString += '000';
    }
    if (binaryString[k] === '1') {
      finalString += '111';
    }
    else {
      finalString += binaryString[k];
    }
  }
  return finalString;
}

function decode(bits) {
  return text;
}