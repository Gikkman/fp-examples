// Bad
function factorial1(num) {
    if(num === 1) return num;
    return num * factorial1(num - 1);   // <-- Requires operation post recersive call
}

console.log("Factorial 1")
console.log( factorial1(10) );

// Good
function factorial2(num) {
    function recursive(acc, num) {
        if(num === 0) return acc;
        return recursive(acc * num, num - 1); // <-- Return just the result of the recursive call
    }
    return recursive(1, num);
}

console.log("Factorial 2")
console.log( factorial2(10) );