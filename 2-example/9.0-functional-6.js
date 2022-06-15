const add = (n1) => (n2) => n1 + n2;
const mul = (n1) => (n2) => n1 * n2;
const pow2 = (n) => n * n;
const log = (val) => {
    console.log("Value is: " + val);
    return val;
}

function pipeline(...functions) {
    function interalWorker(_functions, _value) {
        if(_functions.length === 0) return _value;
        const copy = _functions.slice();
        const func = copy.shift();
        const val = func(_value);
        return interalWorker(copy, val);
    }
    return (value) => interalWorker(functions, value)
}

const add_l = pipeline(add(2), log);
const mul_l = pipeline(mul(3), log);
const pow2_l = pipeline(pow2, log);

const work = pipeline( log, add_l, mul_l, pow2_l );
work(2);