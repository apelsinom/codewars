// ❓ DESCRIPTION:
// The function pickIt accepts 1 parameter, arr,
// which is an array of numbers. We need to traverse arr
// by using a for loop. If an element is an odd number,
// push it to the odd array, and if it's an even number,
// push it to the evenarray.

// ✅ SOLUTION:
function pickIt(arr){
    let odd=[],even=[];
    for(let i=0; i<arr.length; i++) {
        arr[i]%2===0 ? even.push(arr[i]) : odd.push(arr[i])
    }
    return [odd,even];
}

console.log(pickIt([3,2,1]));