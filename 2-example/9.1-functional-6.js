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

const logged = func => pipeline(func, log);

const add_l = num => logged(add(num));
const mul_l = num => logged(mul(num));
const pow2_l = logged(pow2);

const work = pipeline( log, add_l(2), mul_l(3), pow2_l );
work(2);