function f(a, b) {
    return a + b;
}

function g(a) {
    return a * a;
}

function h(a, b) {
    const x = f(a,b);
    const y = g(x);
    return y;
}

const sum = h(2,3);