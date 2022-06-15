/*
 * A monad is a Functor which can also support flatMap
 *
 * FlatMap means that you map a functor to return a value of the same functor, 
 * which is then flattened to the containing value.
 */

Array.prototype.flatMap = function(func) { 
    return Array.prototype.concat.apply([], this.map(func)); 
};

const arr1 = [1,2,3].map(x => [x, x+1]);
const arr2 = [1,2,3].flatMap(x => [x, x+1]);
console.log(arr1);
console.log(arr2);