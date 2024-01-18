// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// solution
function sqrtOrSquare(arr){
    return arr.map(num => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num);
}
// thought process
// 1. we want a new arr -> .map()
// 2. have to check to see if the sqrt of a # is an int -> Number.isInteger(inside checks if its an int) 
// so we know tht it CAN be sqrt, if not we know to square it