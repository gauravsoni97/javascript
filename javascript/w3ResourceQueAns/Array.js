console.log("Array Ques Ans");
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
QUE 1. Write a JavaScript function to check whether an `input` is an array or not.
 Test Data :
 console.log(is_array('w3resource'));
 console.log(is_array([1, 2, 4, 0]));
 false
 true
 
 Ans:-------
 
 function is_array(params) {
   return Array.isArray(params);
 }
 
 console.log(is_array("w3resource"));
 console.log(is_array([1, 2, 4, 0]));
 */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* 2. Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]


Ans:----------------

function array_Clone(params) {
  return params.slice(0);
}
console.log(array_Clone([1, 2, 0]));

*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.


function insertDashes(num) {
    var numStr = num.toString().split("");
    
    var result = numStr
    .map((digit, index, array) => {
        // Check if the digit is even
        
        if (parseInt(digit) % 2 === 0) {
            // If the digit is even and it's not the first digit
            // and the previous digit is also even, add a dash
            if (index > 0 && parseInt(array[index - 1]) % 2 === 0) {
                return "-" + digit;
            }
        }
    return digit;
})
.join("");

return result;
}

// Example usage:
var inputNumber = 253468;
var dashedNumber = insertDashes(inputNumber);
console.log(dashedNumber); // Output: "2-534-68"

*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*


// . Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, [2], [3, [[4]]], [5, 6]];

// function arrayDiffChecker(arr1, arr2) {
//   const flatArr1 = arr1.flat(Infinity);
//   const flatArr2 = arr2.flat(Infinity);

//   return flatArr1.filter(item => !flatArr2.includes(item))
//     .concat(flatArr2.filter(item => !flatArr1.includes(item)));
// }

// console.log(arrayDiffChecker(arr1, arr2));



*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

let uniqueVal = [...new Set(arr)];

let maxTime = 0;
let char = null;

for (let i = 0; i < uniqueVal.length; i++) {
  const occured = arr.filter((ele) => ele === uniqueVal[i]).length;

  if (maxTime < occured) {
    maxTime = occured;
    char = uniqueVal[i];
  }
}

console.log(char, maxTime + " times");

// */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// \14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
// let array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// let updatedArr = [];

// for (let i = 0; i < array.length; i++) {
//   let isDuplicate = false;
//   for (let j = 0; j < updatedArr.length; j++) {
//     if (array[i] === updatedArr[j]) {
//       isDuplicate = true;
//     }
//   }
//   if (!isDuplicate) {
//     updatedArr.push(array[i]);
//   }
// }

// console.log(updatedArr);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 17. Write a JavaScript program to shuffle an array.

// let arr = ["a", "b", "c", "d", "e"];

// let shuffleCount = Math.floor(Math.random() * 10);

// for (let i = 0; i < shuffleCount; i++) {
//   let randomIndex = Math.floor(Math.random() * arr.length);
//   let randomElem = arr.splice(randomIndex, 1)[0];
//   let insertIndex = Math.floor(Math.random() * arr.length);
//   arr.splice(insertIndex, 0, randomElem);
// }

// console.log(arr);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];

// let array1 = [1, 0, 2, 3, 4];
// let array2 = [3, 5, 6, 7, 8, 13];

// const outputArr = [];

// // Determine the maximum length of the two arrays
// let maxLength = Math.max(array1.length, array2.length);

// // Iterate through the arrays up to the maximum length
// for (let i = 0; i < maxLength; i++) {
//     // Get the value from array1 at index i (if it exists)
//     let value1 = array1[i] || 0;
//     // Get the value from array2 at index i (if it exists)
//     let value2 = array2[i] || 0;
//     // Push the sum of the values into outputArr
//     outputArr.push(value1 + value2);
// }

// console.log(outputArr);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 20. Write a JavaScript program to find duplicate values in a JavaScript array.

// let array1 = [1, 2, 3, 3, 2, 3, 4, 4, 5, 6, 7, 7];

// let uniq = [...new Set(array1)];

// let duplicateElem = [];

// for (let i = 0; i < uniq.length; i++) {
//   let uniqElemCount = array1.filter((ele) => ele === uniq[i]).length;

//   if (uniqElemCount > 1) {
//     duplicateElem.push(uniq[i]);
//   }
// }

// console.log(duplicateElem);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

// let arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];

// let updatedArr = arr.filter(
//   (ele) =>
//     !isNaN(ele) &&
//     ele !== false &&
//     ele !== "" &&
//     ele !== undefined &&
//     ele !== null &&
//     ele !== 0
// );

// console.log(updatedArr);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3

// let numbers = [10, 20, 30, 10, 40, 50, 60, 70];
// let target = 50;

// let pairs = [];

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] + numbers[j] === target)
//       pairs.push([numbers[i], numbers[j]]);
//   }
// }
// console.log(pairs);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 30. Write a JavaScript function that merges two arrays and removes all duplicate elements.

// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];

// function merge_array(arr1, arr2) {
//   let mergedArr = [...arr1]; // Make a copy of array1

//   // Iterate over array2
//   for (let i = 0; i < arr2.length; i++) {
//     // Check if the current element of array2 is not already present in mergedArr
//     if (!mergedArr.includes(arr2[i])) {
//       // If not present, push it to mergedArr
//       mergedArr.push(arr2[i]);
//     }
//   }

//   return mergedArr; // Return the merged and de-duplicated array
// }

// console.log(merge_array(array1, array2));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 31. Write a JavaScript function to remove a specific element from an array.

// // Test data :
// function remove_array_element(arr, target) {
//   let indexOfTarget = arr.findIndex((e) => e === target);

//   if (indexOfTarget !== -1) {
//     // Check if the target element exists in the array
//     arr.splice(indexOfTarget, 1); // Remove the element at the found index
//     return arr; // Return the modified array
//   } else {
//     return arr; // If the target element is not found, return the original array
//   }
// }

// console.log(remove_array_element([2, 5, 9, 6], 5)); // Output: [2, 9, 6]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 34. Write a JavaScript function to get the nth largest element from an unsorted array.

// Test Data :

// function nthlargest(arr, target) {
//   let MaxNum = 0;

//   let sliceUptoTarget = arr.slice(0, target);
//   sliceUptoTarget.filter((ele) => (ele > MaxNum ? (MaxNum = ele) : ele));

//   return MaxNum;
// }

// console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 36. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.

// Test Data :

// function array_filled(arrLength, elem) {
//   return Array(arrLength).fill(elem);
// }

// console.log(array_filled(6, "asdf"));
// console.log(array_filled(4, 11));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 40. Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

// Test Data :
// function array_range(start, length) {
//   let newArr = [];
//   for (let i = 0; i < length; i++) {
//     newArr.push(start + i);
//   }
//   return newArr;
// }

// console.log(array_range(1, 4));  // Output: [1, 2, 3, 4]
// console.log(array_range(-6, 4)); // Output: [-6, -5, -4, -3]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 48. Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

// Test Data :
// ([2,3,5,7]) -> true
// ([2,3,5,7,8]) -> false

// let arr = [2, 3, 5];

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function areAllPrimes(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!isPrime(arr[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(areAllPrimes(arr)); // Output: false

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 49. Write a JavaScript program that takes an array of numbers and returns the third smallest number.

// Test Data :
// (2,3,5,7,1) -> 3
// (2,3,0,5,7,8,-2,-4) -> 0

// let arr = [2, 3, 0, 5, 7, 8, -2, -4];

// function NumChecker(arr) {
//   return arr.sort()[2];
// }

// console.log(NumChecker(arr));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 50. Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25

// let arr = [2, 3, 0, 5, 7, 8, true, false, NaN];

// function NumChecker(arr) {
//   return arr
//     .filter((ele) => typeof ele === "number" && !isNaN(ele))
//     .reduce((acc, curr) => acc + curr, 0);
// }

// console.log(NumChecker(arr));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 52. Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

// Test Data :
// ([2, NaN, 8, 16, 32]) -> [1]
// ([2, 4, NaN, 16, 32, NaN]) -> [2,5]
// ([2, 4, 16, 32]) ->[]

// const arr = [2, NaN, 8, 16, NaN, 32];

// function NanIndexAt(arr) {
//   let indOfNan = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i])) {
//       indOfNan.push(i);
//     }
//   }
//   return indOfNan;
// }
// console.log(NanIndexAt(arr));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 53. Write a JavaScript program to count the number of arrays inside a given array.

// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

// Expected Output:
// Number of arrays inside the said array: 2
// Number of arrays inside the said array: 3

// const arr = [2,8,[6,3,3],[4],5,[3,4,[5,4]]];

// function ArrayChecker(arr) {
//   let arrayCounter = []; 
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       arrayCounter.push(arr[i]);
//     }
//   }
//   return arrayCounter.length;
// }

// console.log(ArrayChecker(arr));

