function addFactory() {
    return (a, b) => a + b;
};
// const addFactory = () => (a, b) => a + b;

const sum = addFactory()(1, 2); 
console.log(sum);

