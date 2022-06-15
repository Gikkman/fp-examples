const person = {
    name: "Adam",
    age: 12,
    makeOlder: () => {
        const newAge = this.age + 1;
        return newAge;
    }
};
person.makeOlder();
person.age = 13;
console.log("Person:" + person);

const arr = [1, 3, 2];
arr.pop();
arr[0] = 4;