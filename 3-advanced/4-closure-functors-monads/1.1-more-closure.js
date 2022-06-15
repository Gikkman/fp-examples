/*
 * Closure is the reason why currying works, the partially applied
 * functions has access to the enclosing scope, which allows it to
 * utilize those values
 */

const chain = (a) => (b) => (c) => console.log(a,b,c);

function same(a) {
    return function(b) {
        return function(c) {
            console.log(a,b,c);
        }
    }
}

chain(1)(2)(3);
same(1)(2)(3);