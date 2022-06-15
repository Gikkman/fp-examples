const add = (n1) => (n2) => n1 + n2;
const mul = (n1) => (n2) => n1 * n2;
const pow2 = (n) => n * n;
const log = (val) => {
    console.log("Value is: " + val);
    return val;
}

function pipeline(value, ...functions) {
    let v = value;
    for(const f of functions) {
        const res = f(v);
        v = res;
    };
};

const work = pipeline(2, log, add(2), log, mul(3), log, pow2, log );