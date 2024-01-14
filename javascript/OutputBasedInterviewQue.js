// 1. Write a JavaScript function to calculate the sum of two numbers.

// function sumOf(a, b) {
//   return a + b;
// }
// console.log(sumOf(2, 5));

// =====================================================================

// 2. Write a JavaScript program to find the maximum number in an array.

// let arr = [2, 5, 6, 73, 636, 6];

// // - Easy Solution

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// // Without prebuilt fuctions / methods

// let minVal = arr[0];
// let maxVal = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxVal) {
//     maxVal = arr[i];
//   }
//   if (arr[i] < minVal) {
//     minVal = arr[i];
//   }
// }
// console.log(minVal);
// console.log(maxVal);

// =====================================================================

// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// function palNum(str) {
//   return str === +str.toString().split("").reverse().join("");
// }

// console.log(palNum(12321));

// =====================================================================

// 4. Write a JavaScript program to reverse a given string.
// "Hello World" => "olleH dlroW"

// let str = "Hello World";

// const updated = str
//   .split(" ")
//   .map((ele) => ele.split("").reverse().join(""))
//   .join(" ");

// console.log(updated);

// for simple string without any space use   => split("").reverse().join("")

// =====================================================================

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// function IsEven(arr) {
//   return arr.filter((ele) => ele % 2 === 0);
// }

// console.log(IsEven([3, 2, 4, 3, 5]));

// =====================================================================

// 6. Write a JavaScript program to calculate the factorial of a given number.

// answer: A factorial number is the product of all positive integers, which are equal to or less than the given number.

// function factorial(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// }

// console.log(factorial(3));

// ==================================================================

// 7. Write a JavaScript function to check if a given number is prime.

// answer: To check if a given number is prime, loop from 2 to the square root of the number. If any integer evenly divides it, the number is not prime.

// function isPrime(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }

// console.log(isPrime(2));

// =====================================================================

// 8. Write a JavaScript program to find the largest element in a nested array.

// - EASY SOLUTION

// function findLargest(arr) {
//   let FlatArr = arr.flat(Infinity);
//   console.log(Math.max(...FlatArr));
// }

// console.log(findLargest([2, [3, 55, [4, 5, 666]], 5, 6]));
