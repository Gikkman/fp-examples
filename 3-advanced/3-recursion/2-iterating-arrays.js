const itr = (func) => (array) => {
    const recursive = (arr) => {
        if(arr.length === 0) return;
        
        const elem = arr[0];
        func(elem);
        
        const newArray = arr.slice(1, arr.length);
        recursive(newArray);
    };
    
    recursive(array);
}

const log = (e) => console.log("Value:", e);
const printArray = itr(log);

printArray([1,2,3,"A","B", [98,99], {f: "f", g: "g"}])