// Not separate
const data = {
    a: 1,
    b: 2,
    add: function(a, b) {
        return a + b;
    }
}
console.log( data.add( data.a, data.b ) );