// ❓ DESCRIPTION:
// This time we want to write calculations using functions and get the results.
// Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations:
// plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner
// function represents the right operand
// Division should be integer division. For example, this should return 2,
// not 2.666666...:
// eight(dividedBy(three()));

// ✅ SOLUTION:
function zero(operator) {
    if (!operator) return 0;
    return operator(0);
}
function one(operator) {
    if (!operator) return 1;
    return operator(1);
}
function two(operator) {
    if (!operator) return 2;
    return operator(2);
}
function three(operator) {
    if (!operator) return 3;
    return operator(3);
}
function four(operator) {
    if (!operator) return 4;
    return operator(4);
}
function five(operator) {
    if (!operator) return 5;
    return operator(5);
}
function six(operator) {
    if (!operator) return 6;
    return operator(6);
}
function seven(operator) {
    if (!operator) return 7;
    return operator(7);
}
function eight(operator) {
    if (!operator) return 8;
    return operator(8);
}
function nine(operator) {
    if (!operator) return 9;
    return operator(9);
}

function plus(number) {
    return function (num) {
        return num + number
    }
}
function minus(number) {
    return function (num) {
        return num - number
    }
}
function times(number) {
    return function (num) {
        return num * number
    }
}
function dividedBy(number) {
    return function (num) {
        return Math.floor(num / number)
    }
}

console.log(one(plus(two())))