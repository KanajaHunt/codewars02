// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

// solution
function firstLastChar(string) {
    //   split is string method that makes a substring w/out messing w org string and turns the str to arr which allows us to use pop and shift
      const newString = string.split(",");
      newString.pop();
      newString.shift();
    //   shows the length/elements of the arr w first, last and makes them individual nums -> ex "1", "2", "3"
    //   join removes the individual num and makes it look like "1 2 3"
      return newString.length ? newString.join(" ") : null;
    }
