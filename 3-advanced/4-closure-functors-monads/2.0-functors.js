/*
 * A functor is the name for something that wraps one or more valus
 * and implements the map() function.
 * 
 * Arrays and Promises in JS are functors, as are Java Optionals and Streams 
 */


const functor = (...values) => {
    const m = (acc, mapper, arr)=> {
        if(arr.length === 0) return functor(...acc);
        const e = arr[0];
        const val = mapper(e);
        return r([...acc, val], mapper, arr.slice(1, arr.length) );
    }
    return {
        map: (mapper) => m([], mapper, values)
    }
}

functor(1,2,3).map(n => n * 2).map(n => "Nr: " + n).map(console.log);

/**
 * The thing about functors is that they have no knowledge of what data they contain,
 * just that they do contain something and can map it.
 * They can, of course, have more methods on them
 */