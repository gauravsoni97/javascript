// Frequently Asked Javascript Output Based Question

// 1. Most Frequently occured element in an array

// let arr = [1, 2, 3, 4, 4, 5, 3, 4];

// let elem = [];
// let maxCount = 0;

// let uniq = [...new Set(arr)];

// function reverseArr(arr) {
//   for (let i = 0; i < uniq.length; i++) {
//     let count = arr.filter((ele) => ele === uniq[i]).length;

//     if (maxCount < count) {
//       maxCount = count;
//       elem = [uniq[i]];
//     }
//   }
//   return elem;
// }

// console.log(reverseArr(arr));

// --------------------------------------------------------------------

// 2. Delete Duplicate element from array || Polyfill of new Set()

// Answer: let arr = [1, 2, 5, 3, 4, 4, 5, 3, 4];
// let uniqueArr = arr.filter(
//   (value, index, self) => self.indexOf(value) === index
// );
// console.log(uniqueArr);
// --------------------------------------------------------------------

// 3. Palindrome number

// 4. Rotate Array by k times

// function rotateArray(arr, k) {
//     const n = arr.length;
//     const rotations = k % n; // Handle cases where k > n
//     const rotatedArray = [...arr.slice(rotations), ...arr.slice(0, rotations)];
//     return rotatedArray;
// }

// // Example usage:
// const array = [1, 2, 3, 4, 5];
// const k = 2;
// const rotatedArray = rotateArray(array, k);
// console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]

// --------------------------------------------------------------------

// 5. Reverse Array without using revese keyword
// let arr = [1, 24, 3, 4];

// function reverseArr(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   }
//   return arr;
// }

// console.log(reverseArr(arr));

// ==================================================================

// 6. fibonacci series
// function fibonacciSeries(numTerms) {
//     let series = [0, 1]; // Initialize the series with the first two terms

//     for (let i = 2; i < numTerms; i++) {
//         // Calculate the next term by adding the last two terms
//         let nextTerm = series[i - 1] + series[i - 2];
//         series.push(nextTerm);
//     }

//     return series;
// }

// // Example usage:
// const numTerms = 10; // Change this number to generate Fibonacci series with different lengths
// const series = fibonacciSeries(numTerms);
// console.log("Fibonacci series up to", numTerms, "terms:", series);

// =========================

// function concatArraysByIndex(arr1, arr2) {
//     return arr1.map((element, index) => element + arr2[index] || '').join('');
// }

// // Example usage:
// const arr1 = ['1', '2', '3'];
// const arr2 = ['A', 'B', 'C'];
// const result = concatArraysByIndex(arr1, arr2);
// console.log("Concatenated string:", result);

// ===============================

// closure example

// function outerFunction() {
//   let outerVariable = "I am from the outer function";

//   function innerFunction() {
//     return outerVariable; // innerFunction has access to outerVariable
//   }

//   return innerFunction;
// }

// let closureFunc = outerFunction(); // innerFunction is returned
// console.log(closureFunc()); // This will log: "I am from the outer function"


// =====================================


// debouncing 

// const inputField = document.getElementById("inputField");

// function debounceFunc(cb, d) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb();
//     }, d);
//   };
// }

// inputField.addEventListener(
//   "input",
//   debounceFunc(() => {
//     console.log(inputField.value);
//   }, 1000)
// );
