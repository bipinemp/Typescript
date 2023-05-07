"use strict";
let stringArr = ["one", "two", "three"];
let guitars = ["strat", "lest paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "john";
guitars[0] = 142;
let test = [];
let bands = [];
bands.push("bipin");
// Tuple
let myTuple = ["Bipin", 22, true];
let mixed = ["john", 1, false];
myTuple[1] = 2;
// Objects
let myObj;
myObj = [];
// console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Bipin",
    prop2: true,
};
exampleObj.prop1 = "John";
let evh = {
    name: "John cena",
    active: false,
    albums: [1988, 1921, "1892"],
};
let jp = {
    name: "jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}.`;
    }
    return "hello";
};
console.log(greetGuitarist(evh));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
