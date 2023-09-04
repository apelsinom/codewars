// ❓ DESCRIPTION:
// Find the mean (average) of a list of numbers in an array.

// ✅ SOLUTION:
const findAverage = (nums) => (nums.reduce((total, num) => total + num, 0)/nums.length);
console.log(findAverage([1, 3, 5, 7]))