// Absolutely not separate
const data = {
    a: 1,
    b: 2,
    add: function() {
        return this.a + this.b;
    }
}
console.log( data.add() );