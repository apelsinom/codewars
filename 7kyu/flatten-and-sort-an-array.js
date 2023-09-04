// ❓ DESCRIPTION:
// Challenge:
// Given a two-dimensional array of integers, return the flattened
// version of the array with all the integers in the sorted (ascending) order.
// Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function
// should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// ✅ SOLUTION:
function flattenAndSort(array) {
    const arrayNum = [];
    for (let i of array) {
        for (let j of i) {
            arrayNum.push(j)
        }
    }
    return arrayNum.sort((a,b)=>(a-b));
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))