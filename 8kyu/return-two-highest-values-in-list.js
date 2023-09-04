// ❓ DESCRIPTION:
// In this kata, your job is to return the two distinct highest
// values in a list. If there're less than 2 unique values,
// return as many of them, as possible.
// The result should also be ordered from highest to lowest.
// Examples:
// [4, 10, 10, 9]  =>  [10, 9]
//     [1, 1, 1]  =>  [1]
//     []  =>  []

// ✅ SOLUTION:
function twoHighest(arr) {
    if (arr.length===0 || arr.length===1) return arr;
    const arrRevers = arr.sort((a,b) => (b-a))
    const arrMax = [];
    arrMax.push(arrRevers[0])
    for (let i=1; i<arrRevers.length; i++) {
        if (arrRevers[i]!==arrRevers[0]) {
            arrMax.push(arrRevers[i]);
            return arrMax;
        }
    }
}

console.log(twoHighest([15, 20, 20, 17]))