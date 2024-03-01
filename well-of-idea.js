// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.

// solution
function wellIdeas(x){
    // u use length bc it will tell u how many times it's used in the arr
    const goodIdeas = x.filter((item) => item === "good").length;
    return goodIdeas === 1 || goodIdeas === 2 ? "Publish!" : goodIdeas > 2 ? "I smell a series!" : "Fail!";
}

// OR
// const well = x => {
    // u use length bc it will tell u how many times it's used in the arr
//     const goodIdeas = x.filter((item) => item === "good").length;
//     return goodIdeas === 1 || goodIdeas === 2 ? "Publish!" : goodIdeas > 2 ? "I smell a series!" : "Fail!";
// }