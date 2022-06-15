const add = (n1, n2) =>  n1 + n2;

const mul = (n1, n2) => n1 * n2;

const pow2 = (n) => n * n ;

const log = (val) => {
    console.log("Value is: " + val);
    return val;
}

log( pow2( log( mul(3, log( add(2, log(2) ))))));

/*
    Now go do:
    /3-advanced/1-high-order-functions
    /3-advanced/2-partial-application
*/