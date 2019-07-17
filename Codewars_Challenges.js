//STRIP COMMENTS - LVL 4
//https://www.codewars.com/kata/51c8e37cee245da6b40000bd
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

//SIMPLE PIG LATIN - LVL 5
//https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
      if (/[a-zA-Z]/.test(str[i])) {
        str[i] = str[i].slice(1) + str[i][0] + "ay";
      }
    }
    return str.join(" ");
}

//DECODE - LVL 6
//
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
    if(n % i === 0) {
      return false;
    }
  }
  return true;
}

function primeProduct(n) {
  for (let i = Math.floor(n / 2); i > 1; i--) {
    if (isPrime(i) && isPrime(n - i)) {
      return i * (n-i);
    }
  }
  return 0;
}

//POSITIONS AVERAGE - LVL 6
//
function posAverage(s) {
  let array = s.split(", ");
  let arrayCopy = JSON.parse(JSON.stringify(array));
  let sLength = array.length;
  let totalPossibleCombinations = ((sLength * (sLength - 1)) / 2);
  let totalPossiblePositions = (totalPossibleCombinations * array[0].length);
  let count = 0;

  array.forEach((substring1, index1) => {
    arrayCopy.shift();
    arrayCopy.forEach((substring2, index2) => {
      let substring2Array = substring2.split('');
      substring2Array.forEach((number, i) => {
        if (number === substring1[i]) {
          count += 1;
        }
      })
    });
  });
  return count/totalPossiblePositions * 100;
}
console.log(posAverage("444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490"));

//SORT THE ODD - LVL 6
//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/solutions/javascript

let array = [3, 2, 5, 4, 1];

function sortArray (array) {
  let odds = array.filter((element) => element % 2 !== 0).sort((a, b) => a - b);
  return array.map(element => {
    if (element % 2 !== 0) {
      return odds.shift();
    }
    else {
      return element;
    }
  });
}

console.log(sortOddsOnly(array));

//HIGHEST WORD - LVL 6
//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

let key = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
  "w", "x", "y", "z"
];

function wordScore(word) {
  let score = 0;
  for (let j = 0; j < word.length; j++) {
    let char = word[j];
    score += (key.indexOf(char) + 1);
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
//
function getOrder(input) {
  let menu = ['Burger','Fries','Chicken','Pizza','Sandwich','Onionrings','Milkshake','Coke'];
  let output = [];
  menu.forEach((value) => {
    output.push(...Array((input.match(RegExp(value, "gi")) || []).length).fill(value));
  });
  return output.join(' ');
}
console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"));

//GOOD VS EVIL - LVL 6
//https://www.codewars.com/kata/52761ee4cffbc69732000738
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
  
    goodArmyPoints = goodArmyPoints.reduce(function(sum, value) {
      return sum + value;
    });
  
    let evilArmyPoints = [];
    for (let j = 0; j < evilWorth.length; j++) {
      evilArmyPoints.push(evil[j] * evilWorth[j]);
    }
  
    evilArmyPoints = evilArmyPoints.reduce(function(sum, value) {
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
//https://www.codewars.com/kata/5cde4e3f52910d00130dc92c

function menStillStanding(cards) {
    const teams = [
      Array(11).fill(1),
      Array(11).fill(1)
    ];
  
    for (let card of cards) {
      const [team, player, cardColor] = card.split(/([0-9]+)/);
      const teamIndex = team === 'A' ? 0 : 1;
      const teamPlayers = teams[teamIndex];
  
      if (cardColor === 'Y') {
        teamPlayers[player - 1] -= 0.5;
      } else {
        teamPlayers[player - 1] -= 1;
      }
  
      if(getNumberOfPlayers(teamPlayers) < 7) {
        break;
      }
    }
  
    return [getNumberOfPlayers(teams[0]), getNumberOfPlayers(teams[1])];
  }
  
  function getNumberOfPlayers(team) {
    return team.filter(player => player > 0).length;
} 

//A STRING OF SORTS - LVL 6
//https://www.codewars.com/kata/536c6b8749aa8b3c2600029a

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
//https://www.codewars.com/kata/55f8370b0229d3dad000007a

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
    return array.map(pair => ({ state: pair[0], count: pair[1] }));
}

//CHECK IF BRACES ARE VALID - LVL 6
//https://www.codewars.com/kata/valid-braces
function validBraces(braces){
  const tracer = [];
  for (let i = 0; i < braces.length; i++){
    let element = braces[i];
    if (element === "(" || element === "{" || element === "[") {
      tracer.push(element)
    } 
    else {
      if (tracer.length === 0) return false;
      let lastTracerValue = tracer[tracer.length-1];
      console.log(tracer);
      if ((element === ']' && lastTracerValue === '[') || (element === '}' && lastTracerValue === '{') || (element === ')' && lastTracerValue === '(')) {
        tracer.pop()
      } 
      else {
        break;
      }
    }
  }
  if (tracer.length === 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(validBraces("[{[{}]}]"));

//STOP GNINNIPS MY SDROW! - LVL 6
//https://www.codewars.com/kata/5264d2b162488dc400000001

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
//https://www.codewars.com/kata/5ce399e0047a45001c853c2b

function partsSums(ls) {
    let result = [0];
    let last = ls.length - 1;
    for (let i = last; i >= 0; i--) {
      result.push(ls[i] + result[last - i]);
    }
    return result.reverse();
}

//SORT ODD AND EVEN NUMBERS IN DIFFERENT ORDER - LVL 6
//https://www.codewars.com/kata/5a1cb5406975987dd9000028

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
//https://www.codewars.com/kata/5274e122fc75c0943d000148

function groupByCommas(n) {
    try {
      n = n
        .toString()
        .split("")
        .reverse()
        .join("");
      return n
        .replace(/\d{3}/g, (match, i) => {
          if (!n[i + 3]) return match;
          return `${match},`;
        })
        .split(",")
        .map(i =>
          i
            .split("")
            .reverse()
            .join("")
        )
        .reverse()
        .join(",");
    } catch (error) {
      console.error(error.messaage);
    }
  }
  
  //ALPHABETIZED  - LVL 6
  //https://www.codewars.com/kata/5970df092ef474680a0000c9
  
  function alphabetized(s) {
    s = s.replace(/\s+|\W+|\d+|[_]+/g, "");
    return s
      .split("")
      .map(function(x, i) {
        return [x, i];
      })
      .sort(function([a, i], [b, j]) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a == b) return i - j;
        else if (a < b) return -1;
        else return 1;
      })
      .map(function([x, i]) {
        return x;
      })
      .join("");
  }
  
//MEETING - LVL 6
//https://www.codewars.com/kata/59df2f8f08c6cec835000012
  
  function meeting(string) {
    let newString = string.split(";");
    let newArray = newString.map(entry => {
      const [first, last] = entry.toUpperCase().split(":");
      return `(${last}, ${first})`;
    });
    newArray = newArray.sort().join("");
    return newArray;
  }

//TAKE A 10 MINUTE WALK - LVL 6
//https://www.codewars.com/kata/54da539698b8a2ad76000228
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
//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
  
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
//https://www.codewars.com/kata/517abf86da9663f1d2000003

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
//https://www.codewars.com/kata/55eeddff3f64c954c2000059
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
//https://www.codewars.com/kata/526571aae218b8ee490006f4

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
//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

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
//https://www.codewars.com/kata/54da5a58ea159efa38000836
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
//https://www.codewars.com/kata/545cedaa9943f7fe7b000048
function isPangram(string) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let lowerCaseString = string.toLowerCase();
  
    for (let i = 0; i < letters.length; i++) {
      if (lowerCaseString.indexOf(letters[i]) == -1) return false;
    }
    return true;
}

//ARRAY LEADERS(ARRAY SERIES #3) - LVL 7

function arrayLeaders (numbers) {  
  let leaders = [];
  while (numbers.length > 1) {
    let first = numbers[0];
    numbers = numbers.splice(1, numbers.length -1); 
    let rest = numbers.reduce((a, b) => a + b);
    if (first > rest) {
      leaders.push(first);
    }
    if (numbers.length === 1) {
      if (numbers[0] > 0) {
        leaders.push(numbers[0])
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
  return first.map(element => element / parentArrLength);
}

//FIND THE STRAY NUMBER - LVL 7

function stray(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  if (numbers[0] !== numbers[1]) {
    return numbers[0];
  }
  else {
    return numbers[numbers.length - 1];
  }
}
console.log([17, 17, 3, 17, 17, 17, 17]);

//CHECK IF NUMBER IS DISARIUM - LVL 7
//https://www.codewars.com/kata/5a53a17bfd56cb9c14000003

function disariumNumber(n) {
  let originalN = n;
  n = String(n)
    .split("")
    .map(Number);
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
//https://www.codewars.com/kata/56a4872cbb65f3a610000026

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
//https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3

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
//https://www.codewars.com/kata/5558cc216a7a231ac9000022

function duplicates(arr) {
  let counts = new Map();
  return arr.filter(n => {
    let count = counts.get(n);
    counts.set(n, count ? count + 1 : 1);
    return count === 1;
  });
}

//CHECK IF YEAR IS A LEAP YEAR - LVL 7
//https://www.codewars.com/kata/526c7363236867513f0005ca

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
//https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe

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
//https://www.codewars.com/kata/51c89385ee245d7ddf000001

function solution(value) {
    let string = "Value is " + "0000" + value;
    let array = Array.from(string);
    while (array.length > 5) {
      array.shift();
    }
    return "Value is " + array.join("");
}

//BUILD A SQUARE - LVL 7
//https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

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
//https://www.codewars.com/kata/5822d89270ca28c85c0000f3

function scramble(string, array) {
    let newArray = [];
    array.forEach((value, index) => {
      newArray[value] = string[index];
    });
    return newArray.join("");
  }
  
  //SUM OF ALL THE MULTIPLES OF 3 OR 5 - LVL 7
  //https://www.codewars.com/kata/57f36495c0bb25ecf50000e7
  
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
//https://www.codewars.com/kata/54ff3102c1bad923760001f3
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
//https://www.codewars.com/kata/5ce6728c939bf80029988b57
function solve(s) {
    s = s
      .trim()
      .split("")
      .sort()
      .join(""); // remove white spaces, split to sort and then join again
    for (let i = 0; i < s.length - 1; i++) {
      if (s.charCodeAt(i + 1) - s.charCodeAt(i) !== 1) {
        return false;
      }
    }
    return true;
}

//STRING PREFIX AND SUFFIX - LVL 7
//https://www.codewars.com/kata/5ce969ab07d4b7002dcaa7a1
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
//https://www.codewars.com/kata/5bdc191306a8a678f6000187

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
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e
  var isSquare = function(n) {
    if (n === 0) {
      return true;
    }
  
    return n > 0 && Math.sqrt(n) % 1 === 0;
};
  
//BY 3, OR NOT BY 3? THAT IS THE QUESTION... - LVL 7
//https://www.codewars.com/kata/59f7fc109f0e86d705000043
  function divisibleByThree(str) {
    let number = str.split("").map(Number);
    let sum = number.reduce((a, b) => a + b);
  
    if (sum % 3 === 0) {
      return true;
    }
    return false;
}
  
//GET THE MIDDLE CHARACTER - LVL 7
//https://www.codewars.com/kata/56747fd5cb988479af000028
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
//https://www.codewars.com/kata/558fc85d8fd1938afb000014
function sumTwoSmallestNumbers(numbers) {
    let newArray = numbers.sort((a, b) => a - b);
    return newArray[0] + newArray[1];
}
  
//POWER OF TWO - LVL 7
//https://www.codewars.com/kata/534d0a229345375d520006a0
function isPowerOfTwo(n) {
    if (n && (n & (n - 1)) === 0) {
      return true;
    }
  
    return false;
}

//ULTIMATE ARRAY REVERSER - LVL 7
//https://www.codewars.com/kata/5c3433a4d828182e420f4197
function ultimateReverse(array) {
    const lengths = array.map(({ length }) => length);
    let reversedStr = [...array.join("")].reverse().join("");
    const result = [];
    lengths.forEach(length => {
      result.push(reversedStr.slice(0, length));
      reversedStr = reversedStr.slice(length);
    });
    return result;
}

//JAVASCRIPT ARRAY FILTER - LVL 7
//https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
    return numbersArray.filter(num => num % 2 == 0);
  }
  
//THE OFFICE I - OUTED - LVL 7
//https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1
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
//https://www.codewars.com/kata/56541980fa08ab47a0000040

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
//https://www.codewars.com/kata/59f7a0a77eb74bf96b00006a
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
//https://www.codewars.com/kata/57efcb78e77282f4790003d8
  
function howManyTimes(annualPrice, individualPrice) {
    let number = annualPrice / individualPrice;
    let roundedNumber = Math.ceil(number);
    return roundedNumber;
}

//BEGINNER SERIES #3 SUM OF NUMBERS - LVL 7
//https://www.codewars.com/kata/55f2b110f61eb01779000053

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
//https://www.codewars.com/kata/56f3a1e899b386da78000732
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
//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
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
  //https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
  function filter_list(l) {
    let newArray = [];
    for (let i = 0; i < l.length; i++) {
      if (typeof l[i] === "number") newArray.push(l[i]);
    }
    return newArray;
  }
  
  //FIND THE NEXT PERFECT SQUARE - LVL 7
  //https://www.codewars.com/kata/56269eb78ad2e4ced1000013
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
  //https://www.codewars.com/kata/55908aad6620c066bc00002a
  
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
//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

function monkeyCount(n) {
  return [...Array(n)].map((value, index) => index + 1);
}

//COUNT BY X - LVL 8
//https://www.codewars.com/kata/5513795bd3fafb56c200049e

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

//REMOVE THE FIRST AND LAST CHARACTER - LVL 8
//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str) {
  let array = str.split("");
  array.splice(0, 1);
  array.pop();
  return array.join("");
}

//SUM OF POSITIVES - LVL 8
//https://www.codewars.com/kata/5715eaedb436cf5606000381

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
//https://www.codewars.com/kata/51c8991dee245d7ddf00000e

function reverseWords(str) {
  let array = str.split(" ");
  array.reverse();
  return array.join(" ");
}

//GET CHARACTER FROM ASCII - LVL 8
//https://www.codewars.com/kata/55ad04714f0b468e8200001c

function getChar(c) {
  return String.fromCharCode(c);
}

//SQUARE(N) SUM - LVL 8
//https://www.codewars.com/kata/515e271a311df0350d00000f

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
//https://www.codewars.com/kata/57f781872e3d8ca2a000007e
function maps(x) {
  return x.map(value => value * 2);
}

//WILL THERE BE ENOUGH SPACE - LVL 8
//https://www.codewars.com/kata/5875b200d520904a04000003
function enough(cap, on, wait) {
  if (on + wait > cap) {
    return on - (cap - wait);
  } else {
    return 0;
  }
}

//FIND OUT WHETHER THE SHAPE IS A CUBE - LVL 8
//https://www.codewars.com/kata/58d248c7012397a81800005c
var cubeChecker = function(volume, side) {
  if (side <= 0) {
    return false;
  }

  if (side * side * side === volume && Number.isInteger(side) === true) {
    return true;
  }

  return false;
};

//THIRD ANGLE OF A TRIANGLE - LVL 8
//https://www.codewars.com/kata/5a023c426975981341000014
function otherAngle(a, b) {
  let c = 180 - (a + b);
  return c;
}

//TOTAL AMOUNF OF POINTS - LVL 8
//https://www.codewars.com/kata/5bb904724c47249b10000131
function points(games) {
  let points = 0;

  games.map(game => {
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
//https://www.codewars.com/kata/57eaeb9578748ff92a000009
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
//https://www.codewars.com/kata/56453a12fcee9a6c4700009c
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
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
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
//https://www.codewars.com/kata/57f780909f7e8e3183000078
function grow(x) {
  let number = 1;

  for (let i = 0; i < x.length; i++) {
    let item = x[i];
    number = number * item;
  }
  return number;
}

//PLURAL - LVL 8
//https://www.codewars.com/kata/52ceafd1f235ce81aa00073a
function plural(n) {
  if (n === 1) {
    return false;
  }
  return true;
}

//EVEN OR ODD - LVL 8
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

//SUM ARRAYS - LVL 8
//https://www.codewars.com/kata/53dc54212259ed3d4f00071c
function sum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

//CAN WE DIVIDE IT? - LVL 8
//https://www.codewars.com/kata/5a2b703dc5e2845c0900005a

function isDivideBy(number, a, b) {
  if (number % a == 0 && number % b == 0) {
    return true;
  }

  return false;
}

//REMOVE THE TIME - LVL 8
//https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e
function shortenToDate(longDate) {
  let newDate = longDate.substring(0, longDate.indexOf(","));

  return newDate;
}

//FIND WHAT CENTURY A YEAR IS FROM - LVL 8
//https://www.codewars.com/kata/century-from-year

function centuryFromYear(year) {
  return Math.floor((year - 1) / 100) + 1;
}

console.log(centuryFromYear(1908));




  
  
