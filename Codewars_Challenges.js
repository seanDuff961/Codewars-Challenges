//STRING BREAKERS - LVL 6

function stringBreakers(n, string){
  string = string.replace(/\s/g,'');
  let chunks = [];
  for (let i = 0, charsLength = string.length; i < charsLength; i += n) {
      chunks.push(string.substring(i, i + n));
  }
  let finalString = '';
  for (let j = 0; j < chunks.length; j++) {
      finalString += chunks[j] + '\n';
  }
  return finalString;
}
console.log(stringBreakers(5, 'This is an example string'));

//CONSECUTIVE COUNT - LVL 6

function getConsectiveItems(items, key){
  items = String(items);
  key = String(key);
  console.log('itemsss', items);
  let longest = '';
  let littleLongest = '';
  for (let i = 0; i < items.length; i++) {
      if (items[i] === key) {
          littleLongest += key;
      }
      else {
          littleLongest = '';
      }
      if (littleLongest.length > longest.length) {
          longest = littleLongest;
      }
  }
  return longest.length;
}

console.log("abcdaaadse", "a");

//SIMPLE CONSECUTIVE PAIRS - LVL 7

function pairs(ar){
  let chunks = [];
  let count = 0;
  for (let i = 0; i < ar.length; i += 2) {
      chunks.push([ar[i], ar[i+1]]);
  }
  for (let j = 0; j < chunks.length; j++) {
      let pair = chunks[j];
      if (pair[0] + 1 === pair[1] || pair[0] - 1 === pair[1]){
          count++;
      }
  }
  return count;
};

console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));

//ROTATE TO THE MAX - LVL 7

const rotateToMax = n => {
  return Number(String(n).split('').map(Number).sort((a, b) => {
      return b - a;
  }).join(''));
}

console.log(rotateToMax('123'));

//heggeleggleggo - LVL 7

function heggeleggleggo(word){
  let newWord= '';
  for (let i = 0; i < word.length; i++) {
      //if character is a vowel
      if (word[i].match(/[aeiou]/ig)){
          newWord += word[i];
      }
      //if character is a consonant
      if (word[i].match(/[^aeiou ]/ig)) {
          newWord += word[i] + 'egg';
      }
      //if character is a space 
      if (word[i] === ' ') {
          newWord += ' ';
      }
  }
  return newWord;
}

console.log(heggeleggleggo('code here'));

//SUM EVEN NUMBERS - LVL 7

function sumEvenNumbers(input) {
  return input.filter((a, b) => a % 2 === 0).reduce((c, d) => c + d);
}
console.log(sumEvenNumber([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]));

//UNIQUE STRING CHARACTERS - LVL 7

function solve(a,b){
  let differences = '';
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      differences += a[i];
    }
  }
  for (let k = 0; k < b.length; k++) {
    if (!a.includes(b[k])) {
      differences += b[k];
    }
  }
  return differences;
};

//INTERVIEW QUESTION (EASY) - LVL 7

function getStrings(city){
  let array = city.split('')
  .map((el, i) => el = el.toLowerCase())
  .filter((el, i) => el.match(/^[a-z]+$/));
  let map = {};
  array.forEach((el, i) => {
      if (!map[el]) {
          map[el] = 0;
      }
      map[el] += 1;
  })
  console.log('mappp', map);
  let finalString = JSON.stringify(map)
  .replace(/["']/g, "")
  .replace(/[\{\}]/g, "")
  .replace(/\d+/g, m => '*'.repeat(+m));
  return finalString;
}
console.log(getStrings('Las Vegas'));

//DOMINANT ARRAY ELEMENTS - LVL 7

function solve(arr){
  let final = [];
    for (let i = 0; i < arr.length; i++) {
      let thisArr = arr.slice(i + 1);
      let el = arr[i];
      if (thisArr.every((e => e < el))) {
        final.push(el);
      }
    }
    return final; 
};

console.log(solve([1,21,4,7,5]));

//MIRROR MIRROR - LVL 7

function mirror(data) {
  let copy = data.slice();
  let final = [];
  let sorted = copy.sort((a, b) => a - b);
  let second = [sorted.slice(0, sorted.length - 1).reverse()];
  final.push(sorted, second);
  return final.flat(Infinity);
}

//Highetst and Lowest - LVL 7

function highAndLow(numbers) {
  let myArray = numbers
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  return String(myArray.slice(-1).pop()) + " " + String(myArray[0]);
}

console.log(highAndLow("1 9 3 4 -5"));

//Eviternity Numbers - LVL 7

function solve(a, b) {
  let eviternityNumbers = [];
  for (let i = a; i < b; i++) {
    if (!String(i).match(/[^358]/)) {
      eviternityNumbers.push(i);
    }
  }
  eviternityNumbers = eviternityNumbers.filter((a) => String(a).match(/[8]/));
  let final = [];
  for (let j = 0; j < eviternityNumbers.length; j++) {
    let number = eviternityNumbers[j];
    let eightCount = 0;
    let fiveCount = 0;
    let threeCount = 0;
    for (let k = 0; k < String(number).length; k++) {
      let digit = String(number)[k];
      if (digit === "8") {
        eightCount++;
      }
      if (digit === "5") {
        fiveCount++;
      }
      if (digit === "3") {
        threeCount++;
      }
    }
    if (eightCount >= fiveCount && fiveCount >= threeCount) {
      final.push(number);
    }
  }
  return final.length;
}

console.log(solve(0, 100));

//String Doubles - LVL 7

function doubles(s) {
  const result = [];
  s.split("").forEach((c) => {
    if (result[result.length - 1] === c) {
      result.pop();
    } else {
      result.push(c);
    }
  });
  return result.join("");
}

console.log(doubles("abbcccdddda"));

//Sum of Array Singles - LVL 7

function repeats(arr) {
  let map = {};
  let myArray = String(arr).split(",");
  myArray.forEach((v, i) => {
    if (!map[v]) {
      map[v] = 0;
    }
    map[v] += 1;
  });
  let singles = [];
  for (let key in map) {
    if (map[key] === 1) {
      singles.push(key);
    }
  }
  return singles.reduce((a, b) => Number(a) + Number(b), 0);
}

console.log(repeats([4, 5, 7, 5, 4, 8]));

//LET'S RECYCLE! - LVL 6

function recycle(array) {
  let paper = [];
  let glass = [];
  let organic = [];
  let plastic = [];
  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    if (obj.material === "paper") {
      paper.push(obj.type);
    }
    if (obj.material === "glass") {
      glass.push(obj.type);
    }
    if (obj.material === "organic") {
      organic.push(obj.type);
    }
    if (obj.material === "plastic") {
      plastic.push(obj.type);
    }
    if (obj.secondMaterial === "paper") {
      paper.push(obj.type);
    }
    if (obj.secondMaterial === "glass") {
      glass.push(obj.type);
    }
    if (obj.secondMaterial === "organic") {
      organic.push(obj.type);
    }
    if (obj.secondMaterial === "plastic") {
      plastic.push(obj.type);
    }
  }
  return [paper, glass, organic, plastic];
}

console.log(
  recycle([
    {
      type: "bottle",
      material: "glass",
      secondMaterial: "paper",
    },
  ])
);

//STRING ARRAY DUPLICATES - LVL 6

function dup(s) {
  let final = [];
  for (let i = 0; i < s.length; i++) {
    let word = s[i];
    let oneWord = "";
    for (let j = 0; j < word.length; j++) {
      if (word[j] !== word[j + 1]) {
        oneWord += word[j];
      } else {
        continue;
      }
    }
    final.push(oneWord);
  }
  return final;
}

console.log(dup(["kelless", "keenness"]));

//SIMPLE EQUATION REVERSAL - LVL 7

function solve(eq) {
  let arrayOfThings = [];
  let segment = "";
  for (let i = 0; i < eq.length; i++) {
    let operator = "";
    if (eq[i].match(/[*+/-]/g)) {
      operator += eq[i];
      arrayOfThings.push(segment);
      arrayOfThings.push(operator);
      segment = "";
    } else {
      segment += eq[i];
    }
    if (i === eq.length - 1) {
      arrayOfThings.push(segment);
    }
  }
  return arrayOfThings.reverse().join().replace(/[,]/g, "");
}

console.log(solve("a+b-c/d*30"));

//or

function solve(eq) {
  return eq
    .split(/([*\+\-\/])/)
    .reverse()
    .join("");
}

console.log(solve("a+b-c/d*30"));

//DUBSTEP - LVL 6

function songDecoder(song) {
  return song
    .split("WUB")
    .filter((e, i) => e !== "")
    .join(" ");
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));

//SIMPLE FREQUENCY SORT - LVL 6

function solve(data) {
  let frequency = data.reduce((r, e) => {
    if (!r[e]) r[e] = 1;
    else r[e]++;
    return r;
  }, {});

  return [...data].sort((a, b) => {
    return frequency[b] - frequency[a] || a - b;
  });
}

console.log(solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]));

//LONGEST ALPHABETICAL SUBSTRING - LVL 6

function longest(str) {
  const alphabet = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
  let longest = str[0];
  let word = "";
  for (let i = 1; i < str.length; i++) {
    if (i === 1) {
      word = str[0];
    }
    if (
      alphabet[str[i]] > alphabet[str[i - 1]] ||
      alphabet[str[i]] === alphabet[str[i - 1]]
    ) {
      word += str[i];
    } else {
      word = str[i];
    }
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(longest("zjmibuzcimfrpriciuspkfvybkusdjeymcbrkozvdquc"));

//THE VOWEL CODE - LVL 6

function encode(string) {
  let myList = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let myString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[aeiou]/g)) {
      myString += myList[string[i]];
    } else {
      myString += string[i];
    }
  }
  return myString;
}

function decode(string) {
  let myList = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
  let myString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[0-9]/g)) {
      myString += myList[string[i]];
    } else {
      myString += string[i];
    }
  }
  return myString;
}

//REPLACEMENT - LVL 6

function replacement(a) {
  let sorted = a.sort((a, b) => a - b);
  if (sorted[sorted.length - 1] === 1) {
    sorted.pop();
    sorted.push(2);
    return sorted;
  }
  sorted.unshift(1);
  return sorted.slice(0, sorted.length - 1);
}

//ARRAY.DIFF - LVL 6

function arrayDiff(a, b) {
  let aCopy = [...a];
  let bCopy = [...b];
  if (
    String(aCopy.sort((a, b) => a - b)) === String(bCopy.sort((a, b) => a - b))
  ) {
    return [];
  }
  let final = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      final.push(a[i]);
    }
  }
  return final;
}
console.log(
  arrayDiff(
    [
      6,
      -8,
      -6,
      10,
      -1,
      -4,
      -8,
      13,
      14,
      15,
      17,
      -20,
      14,
      14,
      -17,
      -19,
      16,
      9,
      -15,
    ],
    [-15, -4, -6, 15, 6]
  )
);

//DIFFERENCE OF TWO - LVL 6

function twosDifference(input) {
  let sorted = input.sort((a, b) => a - b);
  let pairs = [];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] - sorted[i + 1] === -2) {
      pairs.push([sorted[i], sorted[i + 1]]);
    }
    if (sorted[i] - sorted[i + 2] === -2) {
      pairs.push([sorted[i], sorted[i + 2]]);
    }
  }
  return pairs;
}

console.log(twosDifference([4, 3, 1, 5, 6]));

//BLOCKS - LVL 6

function blocks(s) {
  if (s.length === 0) {
    return "";
  }
  if (!/(.).*\1/.test(s) === true) {
    let lower = s.match(/[a-z]/g).join("");
    let upper = s.match(/[A-Z]/g).join("");
    let numbers = s.match(/[\d]/g).join("");
    return lower + upper + numbers;
  }
  if (!/(.).*\1/.test(s) === false) {
  }
}

console.log(blocks("21AxBz"));

//MULTIPLES OF 3 OR 5 - LVL 6

function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10));

//IS INTEGER ARRAY? - LVL 6

function isIntArray(arr) {
  if (arr === undefined || arr === null || arr !== arr || arr === "")
    return false;
  if (arr === []) return true;
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) return false;
  }
  return true;
}
console.log(isIntArray([1, 2, 3, NaN]));

//Break camelCase - LVL 6

function solution(string) {
  let arrayOfWords = string.split(/[A-Z]/);
  let arrayOfUppers = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[A-Z]/)) {
      arrayOfUppers.push(string[i]);
    }
  }
  let final = [];
  final.push(arrayOfWords[0]);
  for (let i = 1; i < arrayOfWords.length; i++) {
    final.push(arrayOfUppers[i - 1] + arrayOfWords[i]);
  }
  return final.join(" ");
}

//MORE ZEROS THAN ONES - LVL 6

function moreZeros(s) {
  let initial = s.split("");

  let arrayOfBinaries = s.split("").map(function (char) {
    return char.charCodeAt(0).toString(2);
  });

  let second = [];

  for (let i = 0; i < arrayOfBinaries.length; i++) {
    let el = arrayOfBinaries[i];
    let zeroCount = 0;
    let oneCount = 0;
    for (let j = 0; j < el.length; j++) {
      if (el[j] === "0") {
        zeroCount++;
      }
      if (el[j] === "1") {
        oneCount++;
      }
    }
    if (zeroCount > oneCount) {
      second.push(el);
    }
  }

  let indexes = [];

  for (let k = 0; k < arrayOfBinaries.length; k++) {
    if (second.includes(arrayOfBinaries[k])) {
      indexes.push(k);
    }
  }

  let final = [];

  for (let l = 0; l < s.length; l++) {
    if (indexes.includes(l)) {
      final.push(s[l]);
    }
  }

  return Array.from(new Set(final));
}

//HALVING SUM - LVL 7

function halvingSum(n) {
  let sum = n;
  while (n > 0) {
    sum += Math.floor(n / 2);
    n = Math.floor(n / 2);
  }
  return sum;
}

//RESPONSIBLE DRINKING - LVL 7

function hydrate(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/^\d+$/)) {
      total += Number(s[i]);
    }
  }
  if (total === 1) return "1 glass of water";
  else {
    return `${total}` + " glasses of water";
  }
}

//esreveR - LVL 7

reverse = function (array) {
  let newArray = [];
  while (array.length) {
    newArray.push(array.pop());
  }
  return newArray;
};

//FIND THE AREA OF THE RECTANGLE! - LVL 7

function area(d, l) {
  if (d <= l) return "Not a rectangle";
  let diagonal = Math.pow(d, 2);
  let side = Math.pow(l, 2);
  let otherSide = Math.sqrt(diagonal - side);
  let final = otherSide * l;
  return Number(final.toFixed(2));
}
console.log(area(83, 22));

//FIND ALL OCCURRENCES OF AN ELEMENT IN AN ARRAY - LVL 7

const findAll = (array, n) => {
  let indexes = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      indexes.push(i);
    }
  }
  return indexes;
};

//ODD OR EVEN - LVL 7

function oddOrEven(array) {
  if (array.reduce((a, b) => a + b, 0) % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddOrEven([1023, 1, 2]));

//SUM OF MINIMUMS - LVL 7

function sumOfMinimums(arr) {
  // your code here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    sum += el.sort((a, b) => a - b)[0];
  }
  return sum;
}
console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);

//SQUARE EVERY DIGIT - LVL 7

function squareDigits(num) {
  let digits = String(num).split("");
  return Number(digits.map((el, i) => el * el).join(""));
}
console.log(squareDigits(9119));

//ABSENT VOWEL - LVL 7

function absentVowel(x) {
  let vowelList = "";
  let vowels = ["a", "e", "i", "o", "u"];
  let indexes = { a: 0, e: 1, i: 2, o: 3, u: 4 };
  for (let i = 0; i < x.length; i++) {
    if (x[i].match(/[aeiou]/gi)) {
      vowelList += x[i];
    }
  }
  vowelList = vowelList.split("").filter((v, i) => vowelList.indexOf(v) === i);
  let missing = vowels.filter((x) => !vowelList.includes(x))[0];
  return indexes[missing];
}
console.log(absentVowel("John Doe hs seven red pples under his bsket"));

//YOUR ORDER, PLEASE - LVL 6

function order(words) {
  return words
    .split(" ")
    .sort((a, b) => {
      if (a.match(/[1-9]/gi) < b.match(/[1-9]/gi)) {
        return -1;
      }
      if (a.match(/[1-9]/gi) > b.match(/[1-9]/gi)) {
        return 1;
      }
      return 0;
    })
    .join(" ");
}
console.log("is2 Thi1s T4est 3a");

//DAVE'S GAMBLE - LVL 7

function horses(n) {
  if (typeof n !== "number") return undefined;
  if (n < 3) return n;
  let first = n;
  let second = n - 1;
  let third = n - 2;
  return first * second * third;
}

console.log(horses(15));

//BACKSPACES IN STRING - LVL 6

function cleanString(s) {
  let string = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      string += s[i];
    } else {
      string = string.slice(0, string.length - 1);
    }
  }
  return string;
}

console.log(cleanString("abc#d##c"));

//SUM DIGITS OF A NUMBER - LVL 7

function sumDigits(number) {
  let numbers = String(number).split("");
  if (numbers[0] === "-") {
    return Number(numbers.slice(1).reduce((a, b) => Number(a) + Number(b)));
  } else {
    return Number(numbers.reduce((a, b) => Number(a) + Number(b)));
  }
}

console.log(sumDigits(-32));

//COUNT DEAF RATS - LVL 6

var countDeafRats = function (town) {
  town = town.replace(/[ ]/g, "");
  let deafCount = 0;
  let rats = town.split("P").map((segment) => segment.match(/.{2}/g) || []);
  let leftRats = rats[0];
  let rightRats = rats[1];
  for (let k = 0; k < leftRats.length; k++) {
    if (leftRats[k] === "O~") {
      deafCount++;
    }
  }
  for (let l = 0; l < rightRats.length; l++) {
    if (rightRats[l] === "~O") {
      deafCount++;
    }
  }
  return deafCount;
};

console.log(countDeafRats("~O~O P ~O~O"));

//STRIP COMMENTS - LVL 4

function solution(input, markers) {
  let newString = "";
  for (let i = 0; i < input.length; i++) {
    let character = input[i];
    if (markers.includes(character)) {
      // move i to just before the end of the current line
      i = input.indexOf("\n", i) - 1;
      // Remove the white space that we already added at the end
      newString = newString.trimRight();
      // If no newline character at end of last line: break
      if (i < 0) break;
      // Skip rest of this iteration
      continue;
    }
    newString += input[i];
  }
  return newString.toString();
}

console.log(
  solution("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
);

//VALID PARENTHESES - LVL 5

function validParentheses(parens) {
  let stack = 0;
  for (let i = 0; i < parens.length && stack >= 0; i++) {
    if (parens[i] == "(") {
      stack += 1;
    } else {
      stack -= 1;
    }
  }
  return stack == 0;
}

console.log(validParentheses(")(()))"));

//SIMPLE PIG LATIN - LVL 5

function pigIt(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      str[i] = str[i].slice(1) + str[i][0] + "ay";
    }
  }
  return str.join(" ");
}

console.log(pigIt("Pig latin is cool"));

//CHARACTER WITH LONGEST CONSECUTIVE REPETITION - LVL 6

function longestRepetition(str) {
  if (str.length === 0) {
    return ["", 0];
  }
  let longest = "";
  let chunk = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      if (str[i] === str[i + 1]) {
        chunk += str[i];
      }
    }
    if (i > 0) {
      if (str[i] === str[i - 1]) {
        chunk += str[i];
      }
      if (str[i] !== str[i - 1]) {
        chunk = str[i];
      }
      if (chunk.length > longest.length) {
        longest = chunk;
      }
    }
  }
  return [longest[0], longest.length];
}

console.log(longestRepetition("bbbaaabaaaa"));

//SUM OF TWO INTEGERS - LVL 6

function add(a, b) {
  if (b == 0) {
    return a;
  } else {
    return add(a ^ b, (a & b) << 1);
  }
}

console.log(add(23, 17));

//MEXICAN WAVE - LVL 6

function wave(string) {
  let firstArray = string.split("");
  let finalArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] === " ") {
      continue;
    }
    if (i === 0) {
      finalArray.push(firstArray[i].toUpperCase() + firstArray.slice(i + 1));
    }
    if (i > 0) {
      finalArray.push(
        firstArray.slice(0, i) +
          firstArray[i].toUpperCase() +
          firstArray.slice(i + 1)
      );
    }
  }
  return finalArray.map((el) => el.replace(/[,]/gi, ""));
}

console.log(wave("This is a few words"));

//CAMELCASE METHOD - LVL 6

String.prototype.camelCase = function () {
  let array = this.split(" ");
  let final = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == undefined) continue;
    final.push(array[i][0].toUpperCase() + array[i].slice(1));
  }
  return final.join("");
};

//NUMERICALS OF A STRING - LVL 6

function numericals(s) {
  let array = s.split("");
  let map = {};
  let final = "";
  array.forEach((value) => {
    if (!map[value]) {
      map[value] = 0;
    }
    final += map[value] += 1;
  });
  return final;
}

console.log(numericals("Hello, World!"));

//PRIMORIAL OF A NUMBER - LVL 6

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function numPrimorial(k) {
  let x = 2;
  let primesFound = 0;
  let primes = [];
  while (primesFound !== k) {
    if (isPrime(x)) {
      primes.push(x);
      primesFound++;
    }
    x++;
  }
  return primes.reduce((a, b) => a * b);
}

console.log(numPrimorial(5));

//FIND THE MISSING LETTER - LVL 6

function findMissingLetter(array) {
  if (array[0].match(/[A-Z]/)) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const startIdx = alphabet.indexOf(array[0]);
    const regex = alphabet.slice(startIdx, startIdx + (array.length + 1));
    return regex.filter((x) => !array.includes(x)).join("");
  }
  if (array[0].match(/[a-z]/)) {
    const alphabet2 = "abcdefghijklmnopqrstuvwxyz".split("");
    const startIdx2 = alphabet2.indexOf(array[0]);
    const regex2 = alphabet2.slice(startIdx2, startIdx2 + (array.length + 1));
    return regex2.filter((x) => !array.includes(x)).join("");
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));

//PERSISTENCE - LVL 6

function persistence(num) {
  let array = String(num).split("").map(Number);
  let count = 0;
  while (array.length > 1) {
    array = String(array.reduce((a, b) => a * b))
      .split("")
      .map(Number);
    count++;
  }
  return count;
}

//STRING TRANSFORMER - LVL 6

function stringTransformer(str) {
  let newString = [];
  let array = str.split(" ");
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    let newWord = "";
    for (let j = 0; j < word.length; j++) {
      if (word[j].match(/[a-z]/)) {
        newWord += word[j].toUpperCase();
      }
      if (word[j].match(/[A-Z]/)) {
        newWord += word[j].toLowerCase();
      }
    }
    newString.push(newWord);
  }
  newString = newString.reverse();
  return newString.join(" ");
}

//WHAT'S IN A NAME - LVL 6

function nameInStr(str, name) {
  let nameregex = new RegExp(".*" + name.split("").join(".*") + ".*", "i");
  return nameregex.test(str);
}

//WHO LIKES IT - LVL 6

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

//CONSECUTIVE STRINGS - LVL 6

function longestConsec(strarr, k) {
  let result = [];
  let longest = "";
  if (k === 0 || k > strarr.length) {
    return "";
  }
  if (k === 1) {
    for (let l = 0; l < strarr.length; l++) {
      result.push(`${strarr[l]}`);
    }
  }
  if (k > 1) {
    let initialWindow = "";

    for (let i = 0; i < k; i++) {
      initialWindow += strarr[i];
    }
    result.push(initialWindow);
    for (let i = k; i < strarr.length; i++) {
      initialWindow = initialWindow.slice(strarr[i - k].length) + strarr[i];
      result.push(initialWindow);
    }
  }
  for (let i = 0; i < result.length; i++) {
    let word = result[i];
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

//SEPARATE THE WHEAT FROM THE CHAFF - LVL 6

function lastIndexOf(arr, pred, start) {
  start = start || arr.length - 1;
  for (let i = start; i >= 0; i--) {
    if (pred(arr[i])) return i;
  }
  return -1;
}

function indexOf(arr, pred, start = 0) {
  for (let length = arr.length, i = start; i < length; i++) {
    if (pred(arr[i])) return i;
  }
  return Infinity;
}

function wheatFromChaff(values) {
  let firstPos = indexOf(values, (x) => x > 0);
  let lastNeg = lastIndexOf(values, (x) => x < 0);

  while (firstPos < lastNeg) {
    let a = values[firstPos];
    let b = values[lastNeg];
    values[firstPos] = b;
    values[lastNeg] = a;

    firstPos = indexOf(values, (x) => x > 0, firstPos);
    lastNeg = lastIndexOf(values, (x) => x < 0, lastNeg);
  }
  return values;
}

//SIMPLE SIMPLE SIMPLE STRING EXPANSION - LVL 6

function stringExpansion(s) {
  s = Array.from(s);
  let array = [];
  let number = [];
  for (let i = 0; i < s.length; i++) {
    //if the last item is a number
    if (s[s.length - 1].match(/[0-9]/)) {
      s.pop();
    }
    //if it's a valid number
    if (s[i].match(/[0-9]/) && (s[i + 1] || "").match(/[a-zA-Z]/)) {
      number.push(Number(s[i]));
    }
    //if it's a letter
    if (s[i].match(/[a-zA-Z]/)) {
      array.push(Array(number[number.length - 1]).fill(s[i]));
    }
  }
  let newArray = [];
  //loop to flatten array, since .flat() is not supported
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (Array.isArray(element)) {
      for (let j = 0; j < element.length; j++) {
        newArray.push(element[j]);
      }
    }
  }
  return newArray.join("");
}
console.log(stringExpansion("a2bcde"));

//DECODE - LVL 6

function decode(str) {
  const result = [];
  const array = Array.from(str);

  for (let i = 0; i < array.length; i++) {
    const char = array[i];
    let nChars = 1;
    let str = "";
    const moreThanOne = char === "\\";
    if (moreThanOne) {
      i++;
      let number = "";
      while (!isNaN(array[i])) {
        number += array[i++];
      }
      nChars = +number;
    }
    for (let j = 0; j < nChars; j++) {
      str += array[i + j];
    }
    if (moreThanOne) {
      i += nChars - 1;
    }
    result.push(str);
  }
  return result;
}
console.log(decode("abc\5defghi\2jkl"));

//SIMPLE FUN - PRIME PRODUCT - LVL 6
//DETERMINE MAXIMUM PRODUCT OF TWO PRIMES, WHICH ADD UP TO N

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function primeProduct(n) {
  for (let i = Math.floor(n / 2); i > 1; i--) {
    if (isPrime(i) && isPrime(n - i)) {
      return i * (n - i);
    }
  }
  return 0;
}

//POSITIONS AVERAGE - LVL 6

function posAverage(s) {
  let array = s.split(", ");
  let arrayCopy = JSON.parse(JSON.stringify(array));
  let sLength = array.length;
  let totalPossibleCombinations = (sLength * (sLength - 1)) / 2;
  let totalPossiblePositions = totalPossibleCombinations * array[0].length;
  let count = 0;

  array.forEach((substring1, index1) => {
    arrayCopy.shift();
    arrayCopy.forEach((substring2, index2) => {
      let substring2Array = substring2.split("");
      substring2Array.forEach((number, i) => {
        if (number === substring1[i]) {
          count += 1;
        }
      });
    });
  });
  return (count / totalPossiblePositions) * 100;
}
console.log(
  posAverage(
    "444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490"
  )
);

//SORT THE ODD - LVL 6

let array = [3, 2, 5, 4, 1];

function sortArray(array) {
  let odds = array.filter((element) => element % 2 !== 0).sort((a, b) => a - b);
  return array.map((element) => {
    if (element % 2 !== 0) {
      return odds.shift();
    } else {
      return element;
    }
  });
}

console.log(sortOddsOnly(array));

//HIGHEST WORD - LVL 6

let key = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function wordScore(word) {
  let score = 0;
  for (let j = 0; j < word.length; j++) {
    let char = word[j];
    score += key.indexOf(char) + 1;
  }
  return score;
}

function high(x) {
  let bestWord = "";
  let bestScore = 0;
  words = x.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let score = wordScore(word);
    if (score > bestScore) {
      bestScore = score;
      bestWord = word;
    }
  }
  return bestWord;
}

//NEW CASHIER DOES NOT KNOW ABOUT SPACE OR SHIFT - LVL 6

function getOrder(input) {
  let menu = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
  ];
  let output = [];
  menu.forEach((value) => {
    output.push(
      ...Array((input.match(RegExp(value, "gi")) || []).length).fill(value)
    );
  });
  return output.join(" ");
}
console.log(
  getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
);

//GOOD VS EVIL - LVL 6

function goodVsEvil(good, evil) {
  good = good.split(" ");
  evil = evil.split(" ");

  //hobbits, men, elves, etc
  let goodWorth = [1, 2, 3, 3, 4, 10];
  //orcs, men, wargs, etc
  let evilWorth = [1, 2, 2, 2, 3, 5, 10];

  let goodArmyPoints = [];
  //multiply goodWorth by type:
  for (let i = 0; i < goodWorth.length; i++) {
    goodArmyPoints.push(good[i] * goodWorth[i]);
  }

  goodArmyPoints = goodArmyPoints.reduce(function (sum, value) {
    return sum + value;
  });

  let evilArmyPoints = [];
  for (let j = 0; j < evilWorth.length; j++) {
    evilArmyPoints.push(evil[j] * evilWorth[j]);
  }

  evilArmyPoints = evilArmyPoints.reduce(function (sum, value) {
    return sum + value;
  });

  if (evilArmyPoints < goodArmyPoints) {
    return "Battle Result: Good triumphs over Evil";
  } else if (evilArmyPoints > goodArmyPoints) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
}

//FOOTBALL - YELLOW AND RED CARDS - LVL 6

function menStillStanding(cards) {
  const teams = [Array(11).fill(1), Array(11).fill(1)];

  for (let card of cards) {
    const [team, player, cardColor] = card.split(/([0-9]+)/);
    const teamIndex = team === "A" ? 0 : 1;
    const teamPlayers = teams[teamIndex];

    if (cardColor === "Y") {
      teamPlayers[player - 1] -= 0.5;
    } else {
      teamPlayers[player - 1] -= 1;
    }

    if (getNumberOfPlayers(teamPlayers) < 7) {
      break;
    }
  }

  return [getNumberOfPlayers(teams[0]), getNumberOfPlayers(teams[1])];
}

function getNumberOfPlayers(team) {
  return team.filter((player) => player > 0).length;
}

//A STRING OF SORTS - LVL 6

function sortString(string, ordering) {
  const orderingArray = [];

  for (let i = 0; i < ordering.length; i++) {
    const char = ordering[i];
    const expr = new RegExp(char, "g");
    const match = string.match(expr);

    if (match) {
      orderingArray.push(char.repeat(match.length));
      string = string.replace(expr, "");
    }
  }
  return orderingArray.join("") + string;
}

//COUNT ADDRESSES GROUPED BY STATE - LVL 6

function count(addresses) {
  let stateMap = {};
  addresses.forEach((value, index) => {
    let state = value.state;
    if (state === undefined) {
      throw "Error: state is not defined";
    }
    if (!stateMap[state]) {
      stateMap[state] = 0;
    }
    stateMap[state] += 1;
  });
  let array = Object.entries(stateMap);
  return array.map((pair) => ({ state: pair[0], count: pair[1] }));
}

//CHECK IF BRACES ARE VALID - LVL 6
//FIRST WAY
function validBraces(braces) {
  const tracer = [];
  for (let i = 0; i < braces.length; i++) {
    let element = braces[i];
    if (element === "(" || element === "{" || element === "[") {
      tracer.push(element);
    } else {
      if (tracer.length === 0) return false;
      let lastTracerValue = tracer[tracer.length - 1];
      console.log(tracer);
      if (
        (element === "]" && lastTracerValue === "[") ||
        (element === "}" && lastTracerValue === "{") ||
        (element === ")" && lastTracerValue === "(")
      ) {
        tracer.pop();
      } else {
        break;
      }
    }
  }
  if (tracer.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(validBraces("[{[{}]}]"));

//SECOND WAY
function validBraces(braces) {
  let tracer = [];
  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
      tracer.push(braces[i]);
    } else {
      if (tracer.length === 0) {
        return false;
      }
      if (braces[i] === ")" && tracer[tracer.length - 1] === "(") {
        tracer.pop();
        continue;
      }
      if (braces[i] === "}" && tracer[tracer.length - 1] === "{") {
        tracer.pop();
        continue;
      }
      if (braces[i] === "]" && tracer[tracer.length - 1] === "[") {
        tracer.pop();
        continue;
      } else {
        break;
      }
    }
  }
  return tracer.length === 0;
}
console.log(validBraces("(){}[]"));

//STOP GNINNIPS MY SDROW! - LVL 6

function spinWords(string) {
  let array = string.split(" ");
  let newArray = [];
  array.forEach((value, integer) => {
    if (value.length >= 5) {
      value = value.split("").reverse();
      newArray.push(value.join(""));
    } else {
      newArray.push(value);
    }
  });
  return newArray.join(" ");
}

//SUM OF PARTS - LVL 6

function partsSums(ls) {
  let result = [0];
  let last = ls.length - 1;
  for (let i = last; i >= 0; i--) {
    result.push(ls[i] + result[last - i]);
  }
  return result.reverse();
}

//SORT ODD AND EVEN NUMBERS IN DIFFERENT ORDER - LVL 6

function sortArray(array) {
  let evenArray = [];
  let oddArray = [];
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i]);
    }
    if (array[i] % 2 !== 0) {
      oddArray.push(array[i]);
    }
  }
  oddArray.sort((a, b) => a - b);
  evenArray.sort((a, b) => b - a);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(evenArray[0]);
      evenArray.shift();
    }
    if (array[i] % 2 !== 0) {
      newArray.push(oddArray[0]);
      oddArray.shift();
    }
  }
  return newArray;
}

//GROUPED BY COMMAS - LVL 6

function groupByCommas(n) {
  try {
    n = n.toString().split("").reverse().join("");
    return n
      .replace(/\d{3}/g, (match, i) => {
        if (!n[i + 3]) return match;
        return `${match},`;
      })
      .split(",")
      .map((i) => i.split("").reverse().join(""))
      .reverse()
      .join(",");
  } catch (error) {
    console.error(error.messaage);
  }
}

//ALPHABETIZED  - LVL 6

function alphabetized(s) {
  s = s.replace(/\s+|\W+|\d+|[_]+/g, "");
  return s
    .split("")
    .map(function (x, i) {
      return [x, i];
    })
    .sort(function ([a, i], [b, j]) {
      a = a.toLowerCase();
      b = b.toLowerCase();
      if (a == b) return i - j;
      else if (a < b) return -1;
      else return 1;
    })
    .map(function ([x, i]) {
      return x;
    })
    .join("");
}

//MEETING - LVL 6

function meeting(string) {
  let newString = string.split(";");
  let newArray = newString.map((entry) => {
    const [first, last] = entry.toUpperCase().split(":");
    return `(${last}, ${first})`;
  });
  newArray = newArray.sort().join("");
  return newArray;
}

//TAKE A 10 MINUTE WALK - LVL 6

function isValidWalk(walk) {
  //initiate person starting point
  let person = [0, 0];
  //establish what the ending point must be
  let finalDestination = [0, 0];

  if (walk.length !== 10) return false;

  for (let i = 0; i <= 10; i++) {
    if (walk[i] === "n") {
      person[0]++;
    }
    if (walk[i] === "e") {
      person[1]++;
    }
    if (walk[i] === "s") {
      person[0]--;
    }
    if (walk[i] === "w") {
      person[1]--;
    }
  }

  if (person[0] === finalDestination[0] && person[1] === finalDestination[1]) {
    return true;
  } else {
    return false;
  }
}

//COUNTING DUPLICATES - LVL 6

function duplicateCount(text) {
  text = text.toLowerCase();
  let letters = text.split("");
  let map = {};
  let matches = 0;
  letters.forEach((value, index) => {
    if (!map[value]) {
      map[value] = 0;
    }
    map[value] += 1;
  });
  for (let value in map) {
    if (map[value] >= 2) {
      matches++;
    }
  }
  return matches;
}

//CONVERT STRING TO CAMEL CASE - LVL 6

function toCamelCase(str) {
  if (str === "") {
    return "";
  }

  if (str.includes("-") === true) {
    str = str.split(/[-]/);
  }
  if (str.includes("_") === true) {
    str = str.split(/[_]/);
  }

  let newArray = [];

  for (let i = 0; i < str.length; i++) {
    let word = str[i];
    newArray.push(word[0].toUpperCase() + word.slice(1, word.length));
  }
  //if first character is lowercase, keep it lowercase
  if (/[A-Z]/.test(str[0][0]) === false) {
    let string = newArray.join("");
    let newString = string.slice(1, string.length);
    let firstChar = newArray[0].slice(0, 1).toLowerCase();
    return firstChar + newString;
  }
  return newArray.join("");
}

//SUM CONSECUTIVES - LVL 6

function sumConsecutives(array) {
  let result = [];
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      temp += array[i];
    } else if (array[i] !== array[i + 1]) {
      console.log(array[i]);
      result.push(temp + array[i]);
      temp = 0;
    }
  }
  return result;
}

//BIT COUNTING - LVL 6

function countBits(int) {
  let binary = (int >>> 0).toString(2);
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      count++;
    }
  }
  return count;
}

//SPLIT STRINGS - LVL 6

function solution(str) {
  let array = str.split("");
  let lastChar = array.slice(-1);
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let block = [];
    if (i % 2 !== 0) {
      block.push(array[i], array[i - 1]);
      block = block.reverse().join("");
      newArray.push(block);
    }
  }

  if (array.length % 2 !== 0) {
    newArray.push(lastChar + "_");
  }
  return newArray;
}

//FIND THE ODD INT - LVL 6

function findOdd(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return array[i];
    }
  }
}

//DETECT PANGRAM - LVL 6

function isPangram(string) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let lowerCaseString = string.toLowerCase();

  for (let i = 0; i < letters.length; i++) {
    if (lowerCaseString.indexOf(letters[i]) == -1) return false;
  }
  return true;
}

//STRONG N Strong Number (Special Numbers Series #2)

function factorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
function strong(n) {
  let newNum = String(n).split("").map(Number);
  let sum = 0;
  newNum.forEach((value, index) => {
    sum += factorial(value);
  });
  if (sum === n) {
    return "STRONG!!!!";
  } else {
    return "Not Strong !!";
  }
}

//MOST MONEY - LVL 6

function mostMoney(students) {
  let array = [];
  if (students.length === 1) {
    return students[0].name;
  }
  students.forEach((value, index) => {
    let total = 5 * value.fives + 10 * value.tens + 20 * value.twenties;
    array.push([total, value.name]);
  });
  array = array.sort((a, b) => b[0] - a[0]);
  if (array.every((el, i, array) => el[0] === array[0][0])) {
    return "all";
  } else {
    return array[0][1];
  }
}

//INDEXED CAPITALIZATION - LVL 7

function capitalize(s, arr) {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(i)) {
      newString += s[i].toUpperCase();
    } else {
      newString += s[i];
    }
  }
  return newString;
}

//REMOVE URL ANCHOR - LVL 7

function removeUrlAnchor(url) {
  if (!url.includes("#")) {
    return url;
  }
  return url.slice(0, url.indexOf("#"));
}

console.log(removeUrlAnchor("www.codewars.com/katas/#23"));

//FIND THE COMBINATION - LVL 7

var countCombinations = function (string, key) {
  return string.split(new RegExp(key, "gi")).length - 1;
};

console.log(countCombinations("GrEggreGGREGgREG", "greg"));

//LOVE VS FRIENDSHIP - LVL 7

const alphabet = {
  a: 1,
  c: 3,
  b: 2,
  e: 5,
  d: 4,
  g: 7,
  f: 6,
  i: 9,
  h: 8,
  k: 11,
  j: 10,
  m: 13,
  l: 12,
  o: 15,
  n: 14,
  q: 17,
  p: 16,
  s: 19,
  r: 18,
  u: 21,
  t: 20,
  w: 23,
  v: 22,
  y: 25,
  x: 24,
  z: 26,
};

function wordsToMarks(string) {
  let array = string.split("");
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    let letter = array[i];
    if (alphabet.hasOwnProperty(letter)) {
      total += alphabet[letter];
    }
  }
  return total;
}

console.log(wordsToMarks("attitude"));

//FACTORIAL - LVL 7

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("");
  }
  let array = Array(n)
    .fill(0)
    .map((e, i) => i + 1);
  if (array.length) return array.reduce((a, b) => a * b);
  else {
    return 1;
  }
}

console.log(factorial(5));

//FIZZBUZZ - LVL 7

function fizzbuzz(n) {
  let final = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      final.push("FizzBuzz");
    }
    if (i % 3 === 0 && i % 5 !== 0) {
      final.push("Fizz");
    }
    if (i % 5 === 0 && i % 3 !== 0) {
      final.push("Buzz");
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      final.push(i);
    }
  }
  return final;
}

console.log(fizzBuzz(100));

//SPACIFY - LVL 7

function spacify(str) {
  let final = "";
  for (let i = 0; i < str.length; i++) {
    final += str[i] + " ";
  }
  return final.trimRight();
}
console.log(spacify("hello world"));

//STRING ENDS WITH? - LVL 7

function solution(str, ending) {
  return str.slice(str.length - ending.length) === ending;
}
console.log(solution("abcde", "cde"));

//MAX MULTIPLE - LVL 7

function maxMultiple(divisor, bound) {
  let array = [];
  for (let i = 0; i <= bound; i++) {
    if (i % divisor === 0) {
      array.push(i);
    }
  }
  return array[array.length - 1];
}

console.log(maxMultiple(2, 7));

//ODD ONES OUT - LVL 7

function oddOnesOut(nums) {
  let map = {};
  nums.forEach((value) => {
    if (!map[value]) {
      map[value] = 0;
    }
    map[value] += 1;
  });
  let final = nums.filter((element) => map[element] % 2 === 0);
  return final;
}

console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]));

//FIND SCREEN SIZE - LVL 7

function findScreenHeight(width, ratio) {
  ratio = ratio.split(":").map(Number);
  const height = (width * ratio[1]) / ratio[0];
  return `${String(width)}x${String(height)}`;
}

console.log(findScreenHeight(1024, "4:3"));

//SUM OF ODD NUMBERS IN ROW IN ODD PYRAMID - LVL 7

function rowSumOddNumbers(n) {
  let first = n * n - (n - 1);
  let array = [first];
  while (n > 1) {
    array.push((first += 2));
    n--;
  }
  return array.reduce((a, b) => a + b);
}
console.log(rowSumOddNumbers(3));

//ALTERNATE CAPITALIZATION - LVL 7

function capitalize(s) {
  let first = "";
  let second = "";
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      first += s[i].toUpperCase();
    } else {
      first += s[i];
    }
  }
  for (let j = 0; j < s.length; j++) {
    if (j % 2 !== 0) {
      second += s[j].toUpperCase();
    } else {
      second += s[j];
    }
  }
  result.push(first, second);
  return result;
}

//MINIMIZE SUM OF ARRAY (ARRAY SERIES #1) - LVL 7

function minSum(arr) {
  let sums = [];
  let array = arr.sort((a, b) => a - b);
  while (arr.length) {
    sums.push(arr[0] * arr[arr.length - 1]);
    arr = arr.slice(1, arr.length - 1);
  }
  return sums.reduce((a, b) => a + b);
}
console.log(minSum([12, 6, 10, 26, 3, 24]));

//ARRAY LEADERS(ARRAY SERIES #3) - LVL 7

function arrayLeaders(numbers) {
  let leaders = [];
  while (numbers.length > 1) {
    let first = numbers[0];
    numbers = numbers.splice(1, numbers.length - 1);
    let rest = numbers.reduce((a, b) => a + b);
    if (first > rest) {
      leaders.push(first);
    }
    if (numbers.length === 1) {
      if (numbers[0] > 0) {
        leaders.push(numbers[0]);
      }
    }
  }
  return leaders;
}
console.log(arrayLeaders([5, 2, -1]));

//MAXIMUM PRODUCT - LVL 7

function adjacentElementsProduct(array) {
  let products = [];
  for (let i = 0; i < array.length - 1; i++) {
    products.push(array[i] * array[i + 1]);
  }
  products = products.sort((a, b) => b - a);
  return products[0];
}
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]));

//AVERAGE ARRAY - LVL 7

function avgArray(parentArr) {
  const parentArrLength = parentArr.length;
  const first = parentArr.shift();
  parentArr.forEach((value) => {
    value.forEach((element, index) => {
      first[index] += element;
    });
  });
  return first.map((element) => element / parentArrLength);
}

//FIND THE STRAY NUMBER - LVL 7

function stray(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  if (numbers[0] !== numbers[1]) {
    return numbers[0];
  } else {
    return numbers[numbers.length - 1];
  }
}
console.log([17, 17, 3, 17, 17, 17, 17]);

//CHECK IF NUMBER IS DISARIUM - LVL 7

function disariumNumber(n) {
  let originalN = n;
  n = String(n).split("").map(Number);
  let newArray = [];
  for (let i = 0; i < n.length; i++) {
    let digit = n[i];
    newArray.push(Math.pow(digit, i + 1));
  }
  let sum = newArray.reduce((a, b) => a + b);
  if (sum === originalN) {
    return "Disarium !!";
  } else {
    return "Not !!";
  }
}

//ROTATE FOR MAX - LVL 7

function maxRot(n) {
  let listOfNums = [];
  let array = Array.from(n.toString());
  let num = 0;
  while (num < array.length - 1) {
    let number = array.splice(num, 1);
    array.push(Number(number));
    listOfNums.push(Number(array.join("")));
    num++;
  }
  listOfNums.unshift(n);
  listOfNums.sort((a, b) => b - a);
  return listOfNums[0];
}

//FIND ALL PAIRS - LVL 7

function duplicates(array) {
  let map = {};
  array.forEach((value, index) => {
    if (!map[value]) {
      map[value] = 0;
    }
    map[value] += 1;
  });
  let count = 0;
  for (let key in map) {
    if (map[key] > 2) {
      count += Math.floor(map[key] / 2);
    }
    if (map[key] === 2) {
      count += 1;
    }
  }
  return count;
}

//FIND DUPLICATES - LVL 7

function duplicates(arr) {
  let counts = new Map();
  return arr.filter((n) => {
    let count = counts.get(n);
    counts.set(n, count ? count + 1 : 1);
    return count === 1;
  });
}

//CHECK IF YEAR IS A LEAP YEAR - LVL 7

function isLeapYear(year) {
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  if (year % 400 === 0) {
    return true;
  }
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

//ODDS INDEX - LVL 7

function oddBall(arr) {
  let oddIndex;
  arr.forEach((value, index) => {
    if (value === "odd") {
      oddIndex = index;
    }
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oddIndex) {
      return true;
    }
  }
  return false;
}

//SUBSTITUTING VARIABLES INTO STRINGS - LVL 7

function solution(value) {
  let string = "Value is " + "0000" + value;
  let array = Array.from(string);
  while (array.length > 5) {
    array.shift();
  }
  return "Value is " + array.join("");
}

//BUILD A SQUARE - LVL 7

function generateShape(num) {
  let shape = "";
  // create rows
  for (let i = 0; i < num; i++) {
    // create columns
    for (let j = 0; j < num; j++) {
      shape += "+";
    }
    shape += "\n";
  }
  shape = shape.slice(0, -1);
  return shape;
}

//STRING SCRAMBLE - LVL 7

function scramble(string, array) {
  let newArray = [];
  array.forEach((value, index) => {
    newArray[value] = string[index];
  });
  return newArray.join("");
}

//SUM OF ALL THE MULTIPLES OF 3 OR 5 - LVL 7

function findSum(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

//VOWEL COUNT - LVL 7

function getCount(str) {
  var vowelsCount = 0;
  let vowels = /[aeiou]/;
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    console.log(character);
    if (character.match(vowels)) {
      vowelsCount++;
      console.log(vowelsCount);
    }
  }
  return vowelsCount;
}

//CONSECUTIVE LETTERS - LVL 7

function solve(s) {
  s = s.trim().split("").sort().join(""); // remove white spaces, split to sort and then join again
  for (let i = 0; i < s.length - 1; i++) {
    if (s.charCodeAt(i + 1) - s.charCodeAt(i) !== 1) {
      return false;
    }
  }
  return true;
}

//STRING PREFIX AND SUFFIX - LVL 7

function solve(string) {
  for (let i = Math.floor(string.length / 2); i > 0; i--) {
    let prefix = string.slice(0, i);
    let suffix = string.slice(-i);

    if (prefix == suffix) {
      return i;
    }
  }
  return 0;
}

//SHIFT LEFT - LVL 7

function shiftLeft(s, t) {
  let counter = 0;

  while (Math.min(s.length, t.length) > 0) {
    if (s === t) {
      return counter;
    }

    if (s !== t && s.length > t.length) {
      s = s.substring(1);
      counter += 1;
    }

    if (s !== t && t.length > s.length) {
      t = t.substring(1);
      counter += 1;
    }

    if (s !== t && t.length === s.length) {
      s = s.substring(1);
      t = t.substring(1);
      counter += 2; //shouldn't this be 2 instead of 1?
    }
  }

  return counter;
}

//YOU'RE A SQUARE! - LVL7

var isSquare = function (n) {
  if (n === 0) {
    return true;
  }

  return n > 0 && Math.sqrt(n) % 1 === 0;
};

//BY 3, OR NOT BY 3? THAT IS THE QUESTION... - LVL 7

function divisibleByThree(str) {
  let number = str.split("").map(Number);
  let sum = number.reduce((a, b) => a + b);

  if (sum % 3 === 0) {
    return true;
  }
  return false;
}

//FORM THE MINIMUM - LVL 7

function minValue(values) {
  values = [...new Set(values)];
  values = values.sort((a, b) => a - b);
  return Number(values.join(""));
}
console.log(minValue());

//GET THE MIDDLE CHARACTER - LVL 7

function getMiddle(s) {
  if (s.length % 2 === 0) {
    let firstIndexValue = s.length / 2;
    let secondIndexValue = firstIndexValue - 1;

    return s[secondIndexValue] + s[firstIndexValue];
  } else if (s.length % 2 !== 0) {
    let oddIndexValue = Math.floor(s.length / 2);
    return s[oddIndexValue];
  }
}

//SUM OF TWO LOWEST POSITIVE INTEGERS - LVL 7

function sumTwoSmallestNumbers(numbers) {
  let newArray = numbers.sort((a, b) => a - b);
  return newArray[0] + newArray[1];
}

//POWER OF TWO - LVL 7

function isPowerOfTwo(n) {
  if (n && (n & (n - 1)) === 0) {
    return true;
  }

  return false;
}

//ULTIMATE ARRAY REVERSER - LVL 7

function ultimateReverse(array) {
  const lengths = array.map(({ length }) => length);
  let reversedStr = [...array.join("")].reverse().join("");
  const result = [];
  lengths.forEach((length) => {
    result.push(reversedStr.slice(0, length));
    reversedStr = reversedStr.slice(length);
  });
  return result;
}

//JAVASCRIPT ARRAY FILTER - LVL 7

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((num) => num % 2 == 0);
}

//THE OFFICE I - OUTED - LVL 7

function outed(meet, boss) {
  let values = [];

  for (let i in meet) {
    let score = meet[i];

    if (i === boss) {
      values.push(score * 2);
    } else {
      values.push(score);
    }
  }

  let sumOfValues = values.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  let happinessRating = sumOfValues / values.length;

  if (happinessRating <= 5) {
    return "Get Out Now!";
  }
  return "Nice Work Champ!";
}

//PRINTER ERRORS - LVL 7

function printerError(s) {
  let errorCount = 0;
  let stringLength = s.length;

  for (let i = 0; i < s.length; i++) {
    let character = s[i];
    let regex = /[a-mA-M]/;
    if (regex.test(character) === false) {
      errorCount += 1;
      console.log(errorCount);
    }
  }
  errorCount.toString();

  return errorCount + "/" + stringLength;
}

//WHAT'S MY GOLF SCORE - LVL 7

function golfScoreCalculator(parList, scoreList) {
  let difference = 0;
  result = 0;

  for (let i = 0; i < parList.length; i++) {
    difference = scoreList[i] - parList[i];
    //console.log(difference);
    result += difference;
  }
  return result;
}

//HOW MANY TIMES SHOULD I GO? - LVL 7

function howManyTimes(annualPrice, individualPrice) {
  let number = annualPrice / individualPrice;
  let roundedNumber = Math.ceil(number);
  return roundedNumber;
}

//BEGINNER SERIES #3 SUM OF NUMBERS - LVL 7

function GetSum(a, b) {
  let lowestNumber = Math.min(a, b);

  let highestNumber = Math.max(a, b);

  let sum = 0;

  if (lowestNumber === highestNumber) {
    return a;
  } else {
    for (let i = lowestNumber; i <= highestNumber; i++) {
      sum = i + sum;
    }

    return sum;
  }
}

//PARTS OF A LIST - LVL 7

function partlist(arr) {
  let splits = [];
  for (let i = 1; i < arr.length; i++) {
    let pair = [];
    pair.push(arr.slice(0, i).join(" "));
    pair.push(arr.slice(i).join(" "));
    splits.push(pair);
  }
  return splits;
}

//CATEGORIZE NEW MEMBER - LVL 7

function openOrSenior(data) {
  let newArray = [];

  for (let i = 0; i < data.length; i++) {
    let dataElement = data[i];

    if (dataElement[0] >= 55 && dataElement[1] > 7) {
      newArray.push("Senior");
    } else newArray.push("Open");
  }
  return newArray;
}

//LIST FILTERING - LVL 7

function filter_list(l) {
  let newArray = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") newArray.push(l[i]);
  }
  return newArray;
}

//FIND THE NEXT PERFECT SQUARE - LVL 7

function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise

  let sqrt_num = Math.sqrt(sq);
  console.log(sqrt_num);
  if (sqrt_num % 1 === 0) {
    sqrt_num += 1;
    return sqrt_num * sqrt_num;
  } else return -1;
}

//EXES AND OHS - LVL 7

function XO(str) {
  let xLength = str.replace(/[^x || X]/g, "").length;
  let oLength = str.replace(/[^o || O]/g, "").length;

  if (xLength === oLength) {
    return true;
  } else {
    return false;
  }
}

//COUNT THE MONKEYS! - LVL 8

function monkeyCount(n) {
  return [...Array(n)].map((value, index) => index + 1);
}

//COUNT BY X - LVL 8

function countBy(x, n) {
  var z = [];
  let initial = x;
  while (n > 0) {
    z.push(x);
    x += initial;
    n--;
  }
  return z;
}

//TAKE THE DERIVATIVE - LVL 8

function derive(coefficient,exponent) {
  return String(coefficient * exponent) + "x^" + String(exponent-1);
}
console.log((derive(7, 8)));

//REMOVE THE FIRST AND LAST CHARACTER - LVL 8

function removeChar(str) {
  let array = str.split("");
  array.splice(0, 1);
  array.pop();
  return array.join("");
}

//SUM OF POSITIVES - LVL 8

function positiveSum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let positives = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        positives.push(arr[i]);
      }
    }
    if (positives.length === 0) {
      return 0;
    } else {
      return positives.reduce((value, integer) => {
        return value + integer;
      });
    }
  }
}

//REVERSED WORDS - LVL 8

function reverseWords(str) {
  let array = str.split(" ");
  array.reverse();
  return array.join(" ");
}

//GET CHARACTER FROM ASCII - LVL 8

function getChar(c) {
  return String.fromCharCode(c);
}

//SQUARE(N) SUM - LVL 8

function squareSum(numbers) {
  let newArray = [];
  numbers.forEach((value, index) => {
    newArray.push(value * value);
  });
  let sum = 0;
  for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }
  return sum;
}

//BEGINNER - LOST WITHOUT A MAP - LVL 8

function maps(x) {
  return x.map((value) => value * 2);
}

//WILL THERE BE ENOUGH SPACE - LVL 8

function enough(cap, on, wait) {
  if (on + wait > cap) {
    return on - (cap - wait);
  } else {
    return 0;
  }
}

//FIND OUT WHETHER THE SHAPE IS A CUBE - LVL 8

var cubeChecker = function (volume, side) {
  if (side <= 0) {
    return false;
  }

  if (side * side * side === volume && Number.isInteger(side) === true) {
    return true;
  }

  return false;
};

//THIRD ANGLE OF A TRIANGLE - LVL 8

function otherAngle(a, b) {
  let c = 180 - (a + b);
  return c;
}

//TOTAL AMOUNF OF POINTS - LVL 8

function points(games) {
  let points = 0;

  games.map((game) => {
    let item = game.split(":");
    let x = item[0];
    let y = item[1];
    //compare x values against y values in items
    if (x > y) {
      points += 3;
    }
    if (x < y) {
      points += 0;
    }
    if (x === y) {
      points += 1;
    }
  });
  return points;
}

//SUM MIXED ARRAY - LVL 8

function sumMix(x) {
  let newArray = [];
  for (let i = 0; i < x.length; i++) {
    let item = x[i];
    if (typeof item === "string") {
      newArray.push(parseInt(item));
    } else {
      newArray.push(item);
    }
  }
  return newArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}

//COMPARE WITH MARGIN - LVL 8

function closeCompare(a, b, margin) {
  if (margin === undefined) {
    margin = 0;
  }

  if (Math.abs(a - b) <= margin) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
}

//ABBREVIATE A TWO WORD NAME - LVL 8

function abbrevName(name) {
  let names = name.split(" ");

  let initials = [];

  for (let i = 0; i < names.length; i++) {
    initials.push(names[i][0]);
  }

  initials = initials.join(".");

  return initials.toUpperCase();
}

//BEGINNER - REDUCE BUT GROW - LVL 8

function grow(x) {
  let number = 1;

  for (let i = 0; i < x.length; i++) {
    let item = x[i];
    number = number * item;
  }
  return number;
}

//PLURAL - LVL 8

function plural(n) {
  if (n === 1) {
    return false;
  }
  return true;
}

//EVEN OR ODD - LVL 8

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

//SUM ARRAYS - LVL 8

function sum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

//CAN WE DIVIDE IT? - LVL 8

function isDivideBy(number, a, b) {
  if (number % a == 0 && number % b == 0) {
    return true;
  }

  return false;
}

//REMOVE THE TIME - LVL 8

function shortenToDate(longDate) {
  let newDate = longDate.substring(0, longDate.indexOf(","));

  return newDate;
}

//FIND WHAT CENTURY A YEAR IS FROM - LVL 8

function centuryFromYear(year) {
  return Math.floor((year - 1) / 100) + 1;
}

console.log(centuryFromYear(1908));

//FIND NEAREST SQUARE NUMBER - LVL 8

function nearestSq(n) {
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}

//IS STRING UPPERCASE - LVL 8

String.prototype.isUpperCase = function () {
  const str = this.toString();

  let array = Array.from(str);
  let upperCase = array.map((element) => element.toUpperCase());
  let string1 = JSON.stringify(array);
  let string2 = JSON.stringify(upperCase);

  // return this.toString() === this.toString().toUpperCase();

  return string1 === string2;
};

//GRASSHOPPER - CREATE THE ROOMS

var rooms = {
  myRoom1: {
    name: "room1",
    description: "this is the first room",
    completed: "yes",
  },
  myRoom2: {
    name: "room2",
    description: "this is the second room",
    completed: "yes",
  },
  myRoom3: {
    name: "room3",
    description: "this is the third room",
    completed: "no",
  },
};
