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

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.

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
