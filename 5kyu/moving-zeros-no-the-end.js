// ❓ DESCRIPTION:
// Write an algorithm that takes an array and moves all of
// the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// ✅ SOLUTION:
function moveZeros(arr) {
    const result = [];
    let zerosCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 || arr[i] === +0) {
            zerosCount++;
        } else {
            result.push(arr[i]);
        }
    }

    for (let i = 0; i < zerosCount; i++) {
        result.push(0);
    }

    return result;
}

console.log(moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]))