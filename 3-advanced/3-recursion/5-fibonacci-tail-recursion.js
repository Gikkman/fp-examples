// Bad
function fib1(num) {
    if(num === 0) return 0;
    if(num === 1) return 1;
    return fib1(num - 1) + fib1(num - 2);
}

console.log("Fib 1")
console.log( fib1(42) );

// Good
function fib2(num) {
    function recursive(acc, a, b) {
        if(acc === 0) return a;
        if(acc === 1) return b;
        return recursive(acc - 1, b, a + b);
    }
    return recursive(num, 0, 1);
}

console.log("Fib 2")
console.log( fib2(100) );