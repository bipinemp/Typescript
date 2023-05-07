"use strict";
// Literal types
let myName;
let userName;
userName = "Dave";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello");
// logMsg(add(1, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
// logMsg(multiply(3, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumALl = (a = 2, b, c = 2) => {
    return a + b + c;
};
// logMsg(addAll(1, 2, 3));
// logMsg(addAll(1, 2));
// logMsg(sumALl(1, 2));
// logMsg(sumALl(undefined, 2)); we have to send undefined if we use a default as first parameter otherwise it is used in last same for optional
// Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
// logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const isString = (value) => {
    return typeof value === "string" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (isString(value))
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen");
};
logMsg(numberOrString("67"));
