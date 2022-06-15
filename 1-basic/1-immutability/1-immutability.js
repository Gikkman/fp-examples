/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

// Not immutable
console.log("****************** Mutable ****************** ")

function mutable() {
    let x = 5;
        x = 6;
    console.log("X: " + x)

    let name = "Adam";
        name = "Bertil";
    console.log("Name: " + name)

    const obj = {a: 1, b: 2};
        obj.a = 3;
    console.log("Obj.a: " + obj.a)

    const arr = [1, 2, 3, 4];
        arr[0] = 5;
    console.log("Arr[0] " + arr[0])


    const freeze = Object.freeze({a: 1, b:2, c:{val: 3}});
    freeze.c.val = 4;
    console.log("Freeze.c.val " + freeze.c.val)
};
mutable();


// Immutable
console.log("****************** Immutable ****************** ")
function immutableX() {
    const x = 5;
        x = 6;
    console.log("X: " + x)
}
try { immutableX(); } catch(e) { console.log("Error in immutableX", e) }

function immutableName() {
    const name = "Adam";
    name = "Bertil";
    console.log("Name: " + name)
}
try { immutableName(); } catch(e) { console.log("Error in immutableName", e) }

function immutablObj() {
    const obj = Object.freeze({a: 1, b: 2});
    obj.a = 3;
    console.log("Obj.a: " + obj.a)
}
try { immutablObj(); } catch(e) { console.log("Error in immutablObj", e) }

function immutablArr() {
    const arr = Object.freeze([1, 2, 3, 4]);
    arr[0] = 5;
    console.log("Arr[0] " + arr[0])
}
try { immutablArr(); } catch(e) { console.log("Error in immutablArr", e) }