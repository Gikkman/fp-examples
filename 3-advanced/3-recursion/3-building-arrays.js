const buildArray = (from) => (to) => {
    const recursive = (val, arr) => {
        if(val > to) return arr;

        const newArray = [...arr, val];
        return recursive(val + 1, newArray);
    };

    return recursive(from, []);
}

const sequence = buildArray(3)(6);
console.log(sequence);