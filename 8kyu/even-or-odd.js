// ❓ DESCRIPTION:
// Создайте функцию, которая принимает целое число в качестве аргумента
// и возвращает «Even» для четных чисел или «Odd» для нечетных чисел.

// ✅ SOLUTION:
function evenOrOdd(number) {
    return number % 2 ? "Odd" : "Even"
}

console.log(evenOrOdd(-5))