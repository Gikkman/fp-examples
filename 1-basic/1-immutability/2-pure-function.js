/* eslint-disable fp/no-mutation */
function log(person, updatedPerson) {
    console.log("-------------------------------------------------")
    console.log("Before: ", person);
    console.log("After: ", updatedPerson);
    console.log("-------------------------------------------------")
}


// Pure function
function changeName_pure(person, name) {
    return {
        ...person, 
        name: name 
    };
}

const p1 = {name: "Adam", age: 23 };
const p1Update = changeName_pure(p1, "Bert");
log(p1, p1Update);



// Not pure function
function changeName_unpure(person, name) {
    person.name = name;
    return person;
}

const p2 = {name: "Adam", age: 23 };
const p2Update = changeName_unpure(p2, "Bert");
log(p2, p2Update);