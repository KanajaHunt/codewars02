// Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

// Python / JavaScript: The function has to work for strings and lists.

// Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

// replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]

// solution
function replaceAll(seq, find, replace) {
    // isArray -> is seq an arr? if yes, iterate through the seq to create a new arr (map)
    // the value of item is the nums in the seq (arr) -> if the num in the arr === find (the number u want), replace it w the new parameter (replace)
    // if not, keep the number the same
    return Array.isArray(seq) ? seq.map(item => item === find ? replace : item) : seq.split(find).join(replace);
  }