// ❓ DESCRIPTION:
// I love Fibonacci numbers in general, but I must admit I love
// some more than others.
// I would like for you to write me a function that, when given
// a number n (n >= 1 ),
// returns the nth number in the Fibonacci Sequence.

// ✅ SOLUTION:
function nthFibo(n) {
    let prev = 0;
    let curr = 1;
    
    if (n === 1) {
      return prev;
    }
    
    for (let i = 2; i <= n; i++) {
      let next = prev + curr;
      prev = curr;
      curr = next;
    }
    
    return prev;
}

console.log(nthFibo(4))