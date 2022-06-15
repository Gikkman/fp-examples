const head = (len) => (str) => str.substr(0, len);
const tail = (len) => (str) => str.substr(str.length - len, str.length);
const up = (str) => str.toUpperCase();


const pipeline = (func1, func2) => (val) => func2(func1(val));

const first2upper = pipeline(up, head(2));
const last3upper = pipeline(up, tail(3));


const name = "bertil";
const n1 = first2upper(name);
const n2 = last3upper(name);

console.log(n1);
console.log(n2);