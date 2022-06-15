function countDown(num) {
    if(num === 0) return;   // <-- Base case
    console.log(num - 1);
    countDown(num - 1);     // <-- Recursion
}

countDown(5);