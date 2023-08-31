// ❓ DESCRIPTION:
// Return a new array consisting of elements which are
// multiple of their own index in input array (length > 1).
//
// ✅ SOLUTION:
function multipleOfIndex(array) {
    let newArray = [];
    for (let index in array) {
        if (array[0] === 0) newArray[0] = 0;
        if (array[index]%index === 0) newArray.push(array[index]);
    }
    console.log(newArray);
}

multipleOfIndex([0, 22, -6, 32, 82, 9, 25]);