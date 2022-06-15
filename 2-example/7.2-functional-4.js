const add = (n1) => (n2) => n1 + n2;
const mul = (n1) => (n2) => n1 * n2;
const pow2 = (n) => n * n;
const log = (val) => {
    console.log("Value is: " + val);
    return val;
}

function pipeline(...functions) {
    return (val) => {
        let v = val;
        for(const f of functions) {
            const res = f(v);
            v = res;
        };
    }
};

const work = pipeline(log, add(2), log, mul(3), log, pow2, log );
work(2);

/*
    Now go do:
    /3-advanced/3-recursion
*/