// Type Aliases
type StringOrNumber = string | number;
type StringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: String;
  active: boolean;
  albums: StringOrNumberArray;
};

type UserId = StringOrNumber;

// Literal types
let myName: "Bipin";

let userName: "Dave" | "John" | "Amy";
userName = "Dave";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("hello");
// logMsg(add(1, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

// logMsg(subtract(3, 1));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

// logMsg(multiply(3, 2));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default param value
const sumALl = (a: number = 2, b: number, c: number = 2): number => {
  return a + b + c;
};

// logMsg(addAll(1, 2, 3));
// logMsg(addAll(1, 2));
// logMsg(sumALl(1, 2));

// logMsg(sumALl(undefined, 2)); we have to send undefined if we use a default as first parameter otherwise it is used in last same for optional

// Rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

// logMsg(total(1, 2, 3, 4));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
const isString = (value: any): boolean => {
  return typeof value === "string" ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
  if (isString(value)) return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen");
};

logMsg(numberOrString("67"));
