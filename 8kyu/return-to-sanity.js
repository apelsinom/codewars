// ❓ DESCRIPTION:
// This function should return an object, but it's not doing what's intended.
// What's wrong?
// function mystery() {
//     var results =
//         {sanity: 'Hello'};
//     return
//     results;
// }

// ✅ SOLUTION:
function mystery() {
    return {sanity: 'Hello'};
}

console.log(mystery())