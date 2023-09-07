// ❓ DESCRIPTION:
// Functional closures can get overly attached. Set them straight!
//     Why doesn't greet_abe() actually greet Abe?
// let name = 'Abe';
// const greet_abe = function() {
//     return "Hello, " + name + '!';
// };
// name = 'Ben';
// const greet_ben = function() {
//     return "Hello, " + name + '!';
// };
// console.log(greet_abe())
// console.log(greet_ben())

// ✅ SOLUTION:
let name = 'Abe';
const greet_abe = function() {
    return "Hello, " + name + '!';
};
const greet_ben = function() {
    name = 'Ben';
    return "Hello, " + name + '!';
};
console.log(greet_abe())
console.log(greet_ben())