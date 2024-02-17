// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

// my solution
function scrollingText(text){
    return text.toUpperCase(Math.random(text));
  }

// correct solution
function scrollingText(text){
    let upperText = text.toUpperCase();
    // _ in this instance means to ignore the first param
    return [...upperText].map((_, i) => upperText.slice(i) + upperText.slice(0, i));
  }
