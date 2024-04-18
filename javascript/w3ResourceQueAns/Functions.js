console.log("----- Function Que Ans -------");
// ======================================================

// const num = 1234;

// function NumReverse(number) {
//   return number.toString().split("").reverse().join("");
// }

// console.log(NumReverse(num));

// ======================================================

// Write a JavaScript function that checks whether a passed string is a palindrome or not?

// let str = "343";

// function PalindromeChecker(str) {
//   const reverseString = str.toString().split("").reverse().join("");
//   if (str === reverseString) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(PalindromeChecker(str));

// ======================================================

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// Test the function
// const inputString = "dog";

// function generateCombinations(str) {
//   const combinations = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       combinations.push(str.slice(i, j));
//     }
//   }
//   return combinations;
// }

// console.log(generateCombinations(inputString));


// ======================================================

// Que :  if n = 3 or multiple of 3 then print Fizz 
//        if n = 5 or multiple of 5 then print Buzz 
//         else print counting numbers 

// let n = 20;

// function func(n) {
//   let output = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       output.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       output.push("Fizz");
//     } else if (i % 5 === 0) {
//       output.push("Buzz");
//     } else {
//       output.push(i);
//     }
//   }
//   return output;
// }

// console.log(func(n));


// ======================================================

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '