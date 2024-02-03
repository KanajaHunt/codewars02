// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

// solution
function stringToNumber(nums){
    // parseFloat() is a built in obj that turns string to floats
    return nums.map((item) => parseFloat(item));
}
// another way to solve
// function stringToNumber(stringArray){
//     return stringArray.map(Number);

// }