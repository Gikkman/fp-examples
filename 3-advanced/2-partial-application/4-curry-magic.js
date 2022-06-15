/**
 * It is not super adviced to use this, since it is better to write curry supportive
 * methods from the beginning, and clearly communicate intent
 */

// Tiny, recursive autocurry
const curry = (f, arr = []) => (...args) => 
        (a => a.length === f.length ? f(...a) : curry(f, a))([...arr, ...args]);

const addFactory = (a,b,c) => a + b + c;

const caf = curry(addFactory);
console.log("caf(1,2,3):", caf(1,2,3) )
console.log("caf(1,2)(3):", caf(1,2)(3) )
console.log("caf(1)(2,3):", caf(1)(2,3) )
console.log("caf(1)(2)(3):", caf(1)(2)(3) )

const cl = curry( (a,b) => a * b );
console.log("cl(1,2)", cl(1,2))
console.log("cl(1)(2)", cl(1)(2))
