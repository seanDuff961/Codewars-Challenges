// function dup(s) {
//   let final = [];
//   for (let i = 0; i < s.length; i++) {
//     let word = s[i];
//     let oneWord = '';
//     for (let j = 0; j < word.length; j++) {
//       if (word[j] !== word[j + 1]) {
//         oneWord += word[j];
//       }
//       else {
//         continue;
//       }
//     }
//     final.push(oneWord);
//   }
//   return final;
// }
// console.log(dup(["kelless","keenness"]));

// function dup(s) {
//   return s.map(x => x.replace(/(.)\1+/g,'$1'))
// }
// console.log(dup(["kelless","keenness"]));

function replace (s) {
  let myArray = s.split(' ');
  let final = [];
  for (let i = 0; i < myArray.length; i++) {
    let segment = myArray[i];
    console.log('finallll', final);
    if (segment.match(/[.]/g)) {
      final.push(segment.replace(/\(?(\d{3})[-.)]\d{3}[-.]\d{4}/g, '$1.XXX.XXXX'));
      continue;
    }
    if (segment.match(/[-]/g)) {
      final.push(segment.replace(/\(?(\d{3})[-.)]\d{3}[-.]\d{4}/g, '$1-XXX-XXXX'));
      continue;
    }
    if (segment.match(/[(]/g)) {
      final.push(segment.replace(/\(?(\d{3})[-.)]\d{3}[-.]\d{4}/g, '($1) XXX-XXXX'));
      continue;
    }
    else {
      final.push(segment);
    }
  }
  return final.join(' ');
}

console.log(replace('917-555-1234 something 646.555.1234 something (212) 867-5509'));