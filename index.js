// function accum(param) {
//   if (typeof param !== "string") {
//     console.error("Input must be a string");
//     return;
//   }

//   let result = "";
//   for (let i = 0; i < param.length; i++) {
//     // result = result + param[i].toUpperCase() + param[i].toLowerCase().repeat(i) + "-";
//     result += param[i].toUpperCase() + param[i].toLowerCase().repeat(i) + "-";
//   }

//   // Удаляем последний символ "-"
//   result = result.slice(0, -1);

//   return result;
// }

// // Пример использования
// const inputString = "ApPccAwr";
// const outputString = accum(inputString);
// console.log(outputString); //A-Pp-Ppp-Cccc-Ccccc-Aaaaaa-Wwwwwww-Rrrrrrrr

// function accum2(param) {
//   if (typeof param !== "string") {
//     console.error("Input must be a string");
//     return;
//   }

//   const resultArray = param.split("").map((char, index) => {
//     return char.toUpperCase() + char.toLowerCase().repeat(index);
//   });

//   return resultArray.join("-");
// }

// // Пример использования
// const inputS = "ApPcc";
// const outputS = accum2(inputString);
// console.log(outputS);

// function calc(x) {
//   return (
//     x
//       .split("")
//       .map((char) => char.charCodeAt())
//       .join("")
//       .split("")
//       .filter((item) => +item === 7).length * 6
//   );
// }

// console.log(calc("AaaaaaBCcccc"));

// const sumCube = (number) =>
//   Array(number)
//     .fill(null)
//     .reduce((acc, _, index) => acc + (index + 1) ** 3, 0);

// console.log(sumCube(10));

// function filterArr(arrays) {
//   return arrays.filter(
//     (arr) => arr.length && arr.every((item) => typeof item === typeof arr[0])
//   );
// }
// console.log([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8],
// ]);

// const s = (n, pattern) => {
//     return pattern === 'function' ? Array(n).fill(null).map(pattern) : Array(n).fill(pattern)
// }

// console.log(Array(5, 5))

// function getCount(str) {
//   const vowels = ["a", "e", "i", "o", "u"];

//   let acc = 0;

//   for(i = 0; i <= str.length; i++){
//     if(vowels.includes(str[i])){
//       acc++;
//     }
//   }

//   return acc;
// }

// console.log(getCount("abracadabra"))

// function getCount(str) {
//  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }

// function disemvowel(str) {
//   return str.replace(/a,e,o,u,i/, '');
// }

// function squareDigits(num){

//   return String(num).split('').reduce((acc, item) => acc * item ** 2);
// }

// console.log(squareDigits(123))

function squareDigits(num) {
const srt = String(num).split('').map((item) => item ** 2).join('')
console.log(srt)
let strToNum = new Number(str)
console.log(strToNum)
}

console.log(squareDigits(3212));
