function longest(str) {
  const alphabet = {
    'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8,
    'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16,
    'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25
  };
  let longest = str[0];
  let word = '';
  let longestWords = [];
  for (let i = 1; i < str.length; i++) {
    // console.log('charrrr', str[i]);
    // console.log('alphabet[str[i]]', alphabet[str[i]]);
    // console.log('alphabet[str[i - 1]]', alphabet[str[i - 1]]);
    if (i === 1) {
      word = str[0];
    }
    if (alphabet[str[i]] > alphabet[str[i - 1]] || alphabet[str[i]] === alphabet[str[i - 1]]) {
      word += str[i];
    }
    else {
      word = str[i];
    }
    if (word.length > longest.length) {
      longest = word;
      longestWords.push(longest);
    }
    // console.log('worddddd', word);
    // console.log('longestttt', longest);
  }
  return longest;
}

console.log(longest('zjmibuzcimfrpriciuspkfvybkusdjeymcbrkozvdquc'));

//aaaabbbbctt