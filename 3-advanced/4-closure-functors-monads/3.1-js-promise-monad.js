/**
 * JS Promises are a funny monad, since it mashes map and flatMap 
 * together into the "then" method. But it does what a monad is 
 * designed to do: 
 * 
 * > it can map a value a => b
 * > it can flatten a map a => Promise<b>
 * 
 */

const log = (n = 0) => { 
    console.log("Hello! " + n); 
    return n + 1; 
};

const wait = func => n => {
    return new Promise(res => {
        setTimeout(() => {
            res(func(n));    
        }, 1000);
    });
}

waitToLog = wait( log );

waitToLog()
.then( waitToLog )
.then( waitToLog )
.then( waitToLog )
.then( () => log(999) )
.then( waitToLog )
