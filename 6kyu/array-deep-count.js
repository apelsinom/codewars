// ❓ DESCRIPTION:
// You are given an array. Complete the function that returns the
// number of ALL elements within an array,
// including any nested arrays.

// ✅ SOLUTION:
function deepCount(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    count++;
    if (Array.isArray(a[i])) {
      count += deepCount(a[i]);
    }
  }
  return count;
}

console.log(deepCount([1, 2, [3, 4, [5]]]))