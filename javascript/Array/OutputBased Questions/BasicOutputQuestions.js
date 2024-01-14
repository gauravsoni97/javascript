// Basic Array Operations:----------------------------------------------------------------------

// Given an array [1, 2, 3, 4, 5], what would be the result after adding 10 to each element?

// let arr = [1, 2, 3, 4, 5];

// => By using for each we dont get new array

// const updatedArr = arr.forEach((ele) => console.log(ele + 10));

// => By USING MAP = This will return new array

// const updatedArr = arr.map((ele) => ele + 10);
// console.log(updatedArr);

// ===========================================================================

// Q=> Array Indexing: In the array [10, 20, 30, 40, 50], what is the value at index 2?

// let arr = [10, 20, 30, 40, 50];

// console.log(arr[2]);

// ===========================================================================

// Array Slicing: If you have an array [1, 2, 3, 4, 5], what would be the result of slicing it to get elements from index 1 to 3?

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.slice(1,3));

// ===========================================================================
// Array Manipulation:

// Given the array [5, 10, 15, 20, 25], what would be the array after removing the element at index 2?

// let arr = [5, 10, 15, 20, 25];

// const updated = arr.splice(2,1)

// console.log(arr);

// = NOTE => This will manipulate original array

// ===========================================================================

// Multi-dimensional Arrays:

// For a 2D array [[1, 2, 3], [4, 5, 6], [7, 8, 9]], what is the value at the position (2, 3)?

// ===========================================================================

// Conditional Array Operations:

// Create an array containing the squares of numbers from 1 to 5.

// let arr = [];

// for (let i = 0; i < 5; i++) {

//   arr.push(i * i)
// }

// console.log(arr);

// ===========================================================================

// Array Concatenation:

// Concatenate the arrays [1, 2, 3] and [4, 5, 6] to form a new array.

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// console.log(arr1.concat(arr2));

// ===========================================================================

// Finding Array Max and Min:

// Determine the maximum and minimum values in the array [12, 5, 23, 8, 17].

// let arr = [12, 5, 23, 8, 17];
// let min = arr[0];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(min, max);

// -----------------------------------------------------------------

// Array Filtering:

// Given the array [2, 4, 6, 8, 10], create a new array containing only the even numbers.

// let arr = [2, 4, 6, 8, 3 ,10];

// const oddNumberArray = arr.filter((ele) => ele % 2);
// const evenNumberArray = arr.filter((ele) => ele % 2 === 0);

// console.log(oddNumberArray, evenNumberArray);

// --------------------------------------------------------------------

// Using a loop, print each element of the array [3, 7, 11, 15] on a new line.

// let arr = [3, 7, 11, 15];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
