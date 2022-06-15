/*
 * Closure means that a child scope can access local variables of a parent scope,
 * even after the parent scope seems to have been terminated.
 */

function outer(number) {
    const str = "abc";
    const inner = function() {
        return str + number;
    }
    return inner;
}

const scoped = outer(123);
console.log( scoped() );
/*
 * Have you ever wondered how the scoped method can "know" of the number passed to the outer()
 * method, and of str, both which were part of the outer method's scope?
 * 
 * That's because the returned method, inner() has created a closure containing the parent scope
 */