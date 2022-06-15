function add(a, b) {
    return a + b;
}

const f = add;

const sum = f(1, 2);
// sum = 3