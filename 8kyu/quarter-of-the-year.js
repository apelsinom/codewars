// DESCRIPTION:
// Учитывая месяц как целое число от 1 до 12, верните,
// к какому кварталу года он принадлежит, как целое число.
// Например: месяц 2 (февраль) является частью первого квартала;
// 6-й месяц (июнь) является частью второго квартала;
// и месяц 11 (ноябрь) является частью четвертого квартала.


// SOLUTION:
function quarterOf(month) {
    if (month < 4) {
        return `1 quarter`;
    } else if (month > 3 && month < 7) {
        return `2 quarter`;
    } else if (month > 6 && month < 10) {
        return `3 quarter`;
    } else if (month > 9) {
        return `4 quarter`;
    };
}
console.log(quarterOf(7))