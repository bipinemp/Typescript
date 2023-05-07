let stringArr = ["one", "two", "three"];
let guitars = ["strat", "lest paul", 5150];
let mixedData = ["EVH", 1984, true];

stringArr[0] = "john";

guitars[0] = 142;

let test = [];
let bands: string[] = [];
bands.push("bipin");

// Tuple
let myTuple: [string, number, boolean] = ["Bipin", 22, true];

let mixed = ["john", 1, false];

myTuple[1] = 2;

// Objects
let myObj: object;
myObj = [];
// console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Bipin",
  prop2: true,
};

exampleObj.prop1 = "John";

// type Guitarist = {
//   name: String;
//   active?: boolean;
//   albums: (string | number)[];
// };

interface Guitarist {
  name?: String;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "John cena",
  active: false,
  albums: [1988, 1921, "1892"],
};

let jp: Guitarist = {
  name: "jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}.`;
  }
  return "hello";
};

console.log(greetGuitarist(evh));

// Enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
