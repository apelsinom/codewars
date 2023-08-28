// ❓ DESCRIPTION:
// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
// Например:
// Учитывая [34, 15, 88, 2], ваше решение вернет 2
// Учитывая [34, -345, -1, 100], ваше решение вернет -345.
// Для целей этого ката вы можете предположить,
// что предоставленный массив не будет пустым.

// ✅ SOLUTION:
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}
const finder = new SmallestIntegerFinder();

console.log('Should return the smallest int:', finder.findSmallestInt([5,-9,7,4,2,-10]))