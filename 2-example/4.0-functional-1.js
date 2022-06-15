function add(n1, n2) { 
    return n1 + n2
};

function mul(n1, n2) { 
    return n1 * n2 
};

function pow2(n) { 
    return n * n 
};

function log(val) {
    console.log("Value is: " + val);
    return val;
}

log( pow2( log( mul(3, log( add(2, log(2) ))))));