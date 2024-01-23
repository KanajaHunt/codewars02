// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// solution
function sumPositive(arr){
    // c = current value - this would be the individual nums in the arr checking if its neg or not
    return arr.reduce((acc,c) => acc + (c > 0 ? c : 0),0);
}