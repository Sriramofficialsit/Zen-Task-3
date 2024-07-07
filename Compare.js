function areObjectsEqual(obj1, obj2) {
const keys1 = Object.keys(obj1);
const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };
console.log(areObjectsEqual(obj1, obj2));
