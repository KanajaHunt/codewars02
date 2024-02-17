// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// solution
function xo (str){
    // this will search for x and o in the param (str) and gi (global index) will search for cap and lower case
    const x = str.match(/x/gi);
    const o = str.match(/o/gi);
    // the () have to be here for the code to run
    return (x && x.length) === (o && o.length);
}