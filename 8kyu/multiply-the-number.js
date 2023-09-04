// ❓ DESCRIPTION:
//Jack really likes his number five: the trick here is
// that you have to multiply each number by 5 raised to
// the number of digits of each numbers, so, for example:

// ✅ SOLUTION:
multiply = n => n*Math.pow(5, String(Math.abs(n)).length)

console.log(multiply(-10))
