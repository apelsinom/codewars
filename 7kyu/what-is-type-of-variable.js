// ❓ DESCRIPTION:
// Create a function to return true type of variable, i.e.
//
// type([]) == 'array'
// type({}) == 'object'
// type('') == 'string'
// type(NaN) == 'number'

// ✅ SOLUTION:
function type(value) {
    if (Array.isArray(value)) {
        return 'array';
    } else if (value instanceof Date) {
        return 'date';
    } else if (value === null) {
        return "null";
    }else {
        return typeof value;
    }
}

console.log(type([]))
console.log(type({}))
console.log(type(''))
console.log(type(NaN))
console.log(type([].join()))
console.log(type(new Date()))