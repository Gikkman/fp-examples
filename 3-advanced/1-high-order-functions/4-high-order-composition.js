const head = (str) => str.substr(0, 2);
const tail = (str) => str.substr(str.length - 2, str.length);
const up = (str) => str.toUpperCase();


const name = "bertil";
const pipeline = (func1, func2) => () => func2(func1(name));

const work1 = pipeline(up, tail);
const work2 = pipeline(up, head);


console.log(work1());
console.log(work2());