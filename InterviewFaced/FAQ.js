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

