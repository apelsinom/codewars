// ❓ DESCRIPTION:
// Ваша задача — найти ближайшее квадратное число,
// Nearest_sq(n) или NearestSq(n), положительного целого числа n.
// Например, если n = 111, то ближайшее \_sq(n) (nearestSq(n)) равно 121,
// поскольку 111 ближе к 121, квадрату 11, чем 100, квадрату 10.
// Если n уже является точным квадратом (например, n = 144, n = 81 и т. д.),
// вам нужно просто вернуть n.

// ✅ SOLUTION:
function nearestSq(n) {
    let sqrt = Math.sqrt(n);
    if (sqrt === Math.floor(sqrt)) {
        return n;
    }
    return ((Math.sqrt(n)).toFixed(0))**2;
}

console.log('the nearest square number:', nearestSq(200));