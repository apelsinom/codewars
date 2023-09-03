// ❓ DESCRIPTION:
// Write a method, that will get an integer array as parameter
// and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
//     Example
//     [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers,
// and will never be empty or null.

// ✅ SOLUTION:
function squareOrSquareRoot(array) {
    let arraySquare = [];
    for (let num of array) {
        Math.sqrt(num)===Math.floor(Math.sqrt(num)) ? num=Math.sqrt(num) : num=Math.pow(num, 2)
        arraySquare.push(num)
    }
    return arraySquare;
}

console.log(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ]))