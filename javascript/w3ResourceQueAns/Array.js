console.log("Array Que Ans");

// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

// Ans:-

// function CheckIsArray(params) {
//   if (Array.isArray(params)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(CheckIsArray(["this"]));

// ```````````````````````````````````````````````````````````````````

// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// function array_Clone(params) {
//     return params.slice(0)
// }

// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const input = [2, 2, 0, 2, 3, 3, 0, 0, 1, 1];

// const result = input.filter((i, idx) => input[idx - 1] !== i);

// console.log(result);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 5. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// const arr = ["Red", "Green", "White", "Black"];

// // Using the toString method to convert the array to a string
// console.log(arr.toString());

// // Using the default join method to concatenate array elements into a string separated by commas
// console.log(arr.join());

// // Using the join method with a custom separator ('+') to concatenate array elements into a string
// console.log(arr.join('+'));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

// function insertDashes(number) {
//     // Convert number to string and split it into an array of digits
//     let numArray = number.toString().split('');

//     // Use map method to iterate over each digit
//     numArray.map((digit, index, array) => {
//         // Check if the digit is even and the next digit is also even
//         if (parseInt(digit) % 2 === 0 && parseInt(array[index + 1]) % 2 === 0) {
//             // Insert a dash after the current digit
//             array.splice(index + 1, 0, '-');
//         }
//     });
//     // Join the array back into a string
//     return numArray.join('');
// }

// // Example usage
// let inputNumber = 25468;
// console.log(insertDashes(inputNumber)); // Output: 0-254-6-8

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// function swapCase(str) {
//     return str.split('').map(char => {
//       if (char === char.toUpperCase()) {
//         return char.toLowerCase();
//       } else {
//         return char.toUpperCase();
//       }
//     }).join('');
//   }

//   // Example usage:
//   const inputString = 'The Quick Brown Fox';
//   const swappedString = swapCase(inputString);
//   console.log(swappedString); // Output: tHE qUICK bROWN fOX

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // *8. Write a JavaScript program to find the most frequent item in an array.
// //*  Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// // *  Sample Output : a ( 5 times );

// let arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// let uniqueVal = [...new Set(arr)];

// let maxVal = 0;
// let Char = null;

// for (let i = 0; i < uniqueVal.length; i++) {
//   let length = arr.filter((ele) => ele == uniqueVal[i]).length;

//   if (maxVal < length) {
//     maxVal = length;
//     Char = uniqueVal[i];
//   }
// }

// console.log(maxVal, Char);

// 14. Write a JavaScript program to remove duplicate items from an array

