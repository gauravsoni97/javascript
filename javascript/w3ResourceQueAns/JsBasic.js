// --------------------------------------------------------------------------------------------------

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Ans: FOR DAY

// const weekday = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// const dt = new Date();
// let day = weekday[dt.getDay()];

// console.log(`Today is: ${day}.`);

// Ans: FOR TIME

// const dt = new Date();
// let hrs = dt.getHours();

// console.log(hrs);

// let timeZone;
// let hrsHand;

// if (hrs > 12 && hrs < 24) {
//   timeZone = "PM";
//   hrsHand = hrs - 12;
// } else {
//   timeZone = "AM";
//   hrsHand = hrs;
// }

// console.log(
//   `Current time is: ${hrsHand} ${timeZone} : ${dt.getMinutes()} : ${dt.getSeconds()} `
// );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

// // Define the lengths of the three sides of a triangle
// var side1 = 5;
// var side2 = 6;
// var side3 = 7;

// // Calculate the semi-perimeter of the triangle
// var s = (side1 + side2 + side3) / 2;

// // Use Heron's formula to calculate the area of the triangle
// var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

// // Log the calculated area to the console
// console.log(area);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// ----------  Rotate an array element by k times

// const arr = [2, 3, 3, 4];

// function RotateArr(curr, k) {
//   for (let i = 0; i < k; i++) {
//     curr.unshift(curr.pop());
//   }

//   return curr;
// }

// console.log(RotateArr([...arr], 3));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// function GuessNum() {
//   const randomNum = Math.floor(Math.random() * 10);
//   console.log(randomNum);
//   const inputVal = document.getElementById("textBox").value;
//   if (inputVal === randomNum) {
//     alert("Good Work");
//   } else {
//     alert("Not matched");
//   }
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

// My answer -----

// let RandomStr = "PyrandomString";

// function PyChecker(str) {
//   if (str != "") {
//     if (str.charAt(0) === "P" && str.charAt(1) === "y") {
//       return str;
//     } else {
//       return `Py${str}`;
//     }
//   }
// }

// console.log(PyChecker(RandomStr));

// Right Approach

// let RandomStr = "PsdfyrandomString";

// function PyChecker(str) {
//   if (str != "" && str.substring(0, 2) === "Py") {
//     return str;
//   } else {
//     return `Py${str}`;
//   }
// }

// console.log(PyChecker(RandomStr));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 51. Write a JavaScript application that transforms a provided numerical value into hours and minutes.

// function timeConverter(num) {
//   let hour = Math.round(num / 60);
//   let min = Math.round(num % 60);

//   return `${hour}hrs:${min}mins`;
// }

// console.log(timeConverter(122));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.

// function capitalizeString(str) {
//   return str
//     .split(" ")
//     .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1))
//     .join(" ");
// }

// console.log(capitalizeString("this is String"));

// 52. Write a JavaScript program to convert letters of a given string alphabetically.

// function sortString(str) {
//   return str
//     .split("")
//     .sort()
//     .filter((ele) => ele !== " ");
// }

// console.log(sortString("this is String"));

// 54. Write a JavaScript program to count the number of vowels in a given string.

