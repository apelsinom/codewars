// ❓ DESCRIPTION:
// Pete likes to bake some cakes. He has some recipes and ingredients.
// Unfortunately he is not good in maths. Can you help him to find out,
// how many cakes he could bake considering his recipes?
// Write a function cakes(), which takes the recipe (object) and the
// available ingredients (also an object) and returns the maximum number
// of cakes Pete can bake (integer). For simplicity there are no units
// for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.

// ✅ SOLUTION:
function howManydays(month){
    let days;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days=31;
            break;
        case 2:
            days=28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days=30;
            break;
    }
    return days;
}

console.log(howManydays(10))