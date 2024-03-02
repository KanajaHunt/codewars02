// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// my solution
function reverses(str){
    // split is used for strings, and w/o the space inside "" it takes the char NOT whole word
    return str.split("").reverse().join("")
}