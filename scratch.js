// function replace (s) {
//   let myArray = s.split(' ');
//   let final = [];
//   for (let i = 0; i < myArray.length; i++) {
//     let segment = myArray[i];
//     console.log('finallll', final);
//     if (segment.match(/[.]/g)) {
//       final.push(segment.replace(/\(?(\d{3})[-.)]\d{3}[-.]\d{4}/g, '$1.XXX.XXXX'));
//       continue;
//     }
//     if (segment.match(/[-]/g)) {
//       final.push(segment.replace(/\(?(\d{3})[-.)]\d{3}[-.]\d{4}/g, '$1-XXX-XXXX'));
//       continue;
//     }
//     if (segment.match(/[(]/g)) {
//       final.push(segment.replace(/\(?(\d{3})[-.)]\d{3}[-.]\d{4}/g, '($1) XXX-XXXX'));
//       continue;
//     }
//     else {
//       final.push(segment);
//     }
//   }
//   return final.join(' ');
// }
// console.log(replace('917-555-1234 something 646.555.1234 something (212) 867-5509'));


