// que1 - Longest word in the string

// function getLongestWord(str) {
//   return str.split(" ").sort((a, b) => b.length - a.length)[0];
// }

// console.log(getLongestWord("this is String aingString"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// que2 - Hash tag generator from a string

// function GenerateHashtag(str) {
//   return `${
//     "#" +
//     str
//       .split(" ")
//       .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1))
//       .join("")
//   }`;
// }
// console.log(GenerateHashtag("this is my hashtag "));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// que3 - Character counter

function CharCounter(str, k) {
  if (str != "") {
    let counter = str
      .toLowerCase()
      .split("")
      .filter((ele) => ele == k).length;

    if (counter > 0) {
      return counter;
    } else {
      alert(" no match found ");
    }
  } else {
    alert("No String to match");
  }
}

console.log(CharCounter("IdidIii", "i"));
