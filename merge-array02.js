// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// notes: had a harder time with this codewar, but made it work

// solution
function mergeArray(arr1, arr2){
    const newMergeArray = [...arr1, ...arr2].sort((a,b) => a - b);
    // this needs to be returned as an arr -> Array.from
    return Array.from(new Set(newMergeArray));
}