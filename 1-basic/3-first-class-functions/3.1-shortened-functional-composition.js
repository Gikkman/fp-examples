function f(a, b) {
    return a + b;
}

function g(a) {
    return a * a;
}

function h(a, b) {
    return g(f(a,b));
}

const sum = h(2,3);