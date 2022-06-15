function addFactory() {
    return function(a, b) {
        return a + b;
    }
};

const sum = addFactory()(1, 2); 
console.log(sum);