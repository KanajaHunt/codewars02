// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// solution
function arrNums(x){
    //   parseFloat used bc it will return a whole and dec num, whereas parseInt would have just shown a whole number 
    //   not sure why we needed to make c positive
    return parseFloat(x.reduce((acc,c) => acc + (+c), 0));
}