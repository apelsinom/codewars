// ❓ DESCRIPTION:
// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their
// length-values are consecutive.
// But one array is missing!
// You have to write a method, that return the length of the missing array.
// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
// If the array of arrays is null/nil or empty, the method should return 0.
// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always
// between the given arrays.
// Have fun coding it and please don't forget to vote and rank this kata! :-)
// I have created other katas. Have a look if you like coding and challenges.

// ✅ SOLUTION:
function getLengthOfMissingArray(arrayOfArrays) {
  // Проверяем, является ли переданный аргумент массивом
  if (!Array.isArray(arrayOfArrays)) {
    return 0;
  }

  // Проверяем, есть ли в массиве пустые или null под-массивы
  if (arrayOfArrays.some(subArray => !subArray || subArray.length === 0)) {
    return 0;
  }

  // Создаем новый массив, содержащий длины всех под-массивов
  const lengths = arrayOfArrays.map(subArray => subArray.length);

  // Сортируем массив длин в порядке возрастания
  lengths.sort((a, b) => a - b);

  // Перебираем отсортированный массив и проверяем наличие пропущенной длины
  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i + 1] - lengths[i] > 1) {
      return lengths[i] + 1;
    }
  }

  // Если в массиве нет пропущенных длин, то недостающая длина равна 0
  return 0;
}