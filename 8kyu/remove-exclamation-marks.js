// ❓ DESCRIPTION:
// Write function RemoveExclamationMarks which removes
// all exclamation marks from a given string.

// ✅ SOLUTION:
const removeExclamationMarks = s => s.replace(/!/g, '');


console.log(removeExclamationMarks("Hello World!"))