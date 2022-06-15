// Separate
function add(a, b) {
    return a + b;
}

function objectAdder(obj) {
    return add(obj.a, obj.b);
}

const data = {a: 1, b: 2};
console.log( objectAdder( data ) );