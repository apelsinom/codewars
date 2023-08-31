// ❓ DESCRIPTION:
// Define a function that removes duplicates from an array
// of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.

// ✅ SOLUTION:
function distinct(a) {
    return [...new Set(a)];
}

console.log(distinct([1,1,2,44,44,5,6,8,8,1,1,44,5]));