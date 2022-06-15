const add = (n1) => (n2) => n1 + n2;
const mul = (n1) => (n2) => n1 * n2;
const pow2 = (n) => n * n;
const log = (val) => {
    console.log("Value is: " + val);
    return val;
}

function pipeline(...functions) {
    const interalWorker = (_functions, _value) => {
        if(_functions.length === 0) return;
        const copy = _functions.slice();
        const func = copy.shift();
        const val = func(_value);
        interalWorker(copy, val);
    }
    return (value) => interalWorker(functions, value)
}

const work = pipeline( log, add(2), log, mul(3), log, pow2, log );
work(2);