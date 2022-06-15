/*
 * Closure variables aren't constants unless you specify them as such
 * 
 * This can allow you to make effective private variables, since it isn't possible to reach a
 * closure'd scope from outside of it
 */

function scope(a) {
    let num = 0;
    return () => {
        console.log(a,++num);
        if(num === 2) a = "B";
    }
}

const f = scope("A");
f();
f();
f();
f();

/*
 * This can allow you to make effective private variables, since it isn't possible to reach a
 * closure'd scope from outside of it
 */
function mkObj() {
    let priv = 1;
    return {
        get() { return priv; },
        inc() { priv++ },
    }
}
const obj = mkObj();

console.log("obj.priv:", obj.priv );
console.log("obj.get():", obj.get() );
obj.inc()
console.log("obj.get():", obj.get() );