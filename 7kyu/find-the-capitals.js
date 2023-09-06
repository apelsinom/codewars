// ❓ DESCRIPTION:
// Write a function that takes a single string (word) as argument. 
// The function must return an ordered list containing the indexes of all capital letters in the string.

// ✅ SOLUTION:
const capitals = function (word) {
	// Write your code here
    let arr = [];
    let i = 0;
    while (i < word.length) {
        if (word[i] === word[i].toUpperCase()) {
            arr.push(i);
        }
        i += 1;
    }
    return arr;
}
console.log(capitals('CodEWaRs'))