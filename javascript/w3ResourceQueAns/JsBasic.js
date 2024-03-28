console.log(
  "~~~~~~~~~~~~~~~~~~~~  Javascript Basic Questions  ~~~~~~~~~~~~~~~~~~"
);

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
