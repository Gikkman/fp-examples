function add(a) {
    return function(b) {
        return a + b;
    }
}

const addTo5 = add(5);

const addTo10 = add(10);

console.log(addTo5(1));
console.log(addTo5(2));
console.log(addTo10(2));