const str = "mozart";

function shortenAndUppercase(str) {
    const shorterStr = str.substr(0, str.length - 1);
    const upperStr = shorterStr.toUpperCase();
    return upperStr;
}

function reverseString(str) {
    let newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function process(str) {
    const s1 = shortenAndUppercase(str);
    const s2 = reverseString(s1);
    return s2;
}

console.log( process(str) );