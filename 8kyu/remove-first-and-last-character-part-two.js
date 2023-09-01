// ❓ DESCRIPTION:
// You are given a string containing a sequence of character
// sequences separated by commas.
// Write a function which returns a new string containing the same
// character sequences except the first and the last ones but this
// time separated by spaces.
// If the input string is empty or the removal of the first and
// last items would cause the resulting string to be empty,
// return an empty value (represented as a generic value NULL in the examples below).

// ✅ SOLUTION:
function array(string) {
    const arr = string.split(',');
    arr.shift();
    arr.pop();
    return arr.length > 0 ? arr.join(' ') : null;
}
console.log(array('A1,B2,C3,D4,E5'))