// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


// solution
String.prototype.isUpperCase = function(){
    // use "this" bc its an object
    // not rlly sure why we use == instead of ===
    // == ex:     // ex: const num = 10;
    // const str = "10";

    // console.log(num == str); // true 
    // console.log(num === str); // false
    return this == this.toUpperCase();
}