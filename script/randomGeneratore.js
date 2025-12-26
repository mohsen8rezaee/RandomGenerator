// func random(isnumber ,isLowLetter,isUpLetter ,isSign , max , min )
const upletter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowletter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const sign = [
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
  "!",
  "+",
  "-",
  "=",
  "_",
  "?",
  "/",
  ";",
  ".",
  "^",
];
let All = [];
//-------------------------flag-------------------------------
let isNumber = false;
let isLowLetter = false;
let isUpLetter = true;
let isSign = true;
// false default
let finishCondition = false;
//--------------------------length of filter---------------------
let counter = 0;
//--------------------array condition method------------------------
const contains = [];
let result = [];

//condition method
const AddLowLetter = () => {
  if (isLowLetter) {
    result.push(lowletter[Math.floor(Math.random() * 26)]);
    isLowLetter = false;
  }
};
const AddUpLetter = () => {
  if (isUpLetter) {
    result.push(upletter[Math.floor(Math.random() * 26)]);
    isUpLetter = false;
  }
};
const AddSign = () => {
  if (isSign) {
    result.push(sign[Math.floor(Math.random() * 16)]);
    isSign = false;
  }
};
const AddNumber = () => {
  if (isNumber) {
    result.push(Math.floor(Math.random() * 10));
    isNumber = false;
  }
};

export function GenerateRandomFild(params) {
    if (isNumber) {
        All.push(...numbers);
        contains.push(AddNumber);
        counter++;
      }
      if (isSign) {
        All.push(...sign);
        contains.push(AddSign);
        counter++;
      }
      if (isLowLetter) {
        All.push(...lowletter);
        contains.push(AddLowLetter);
        counter++;
      }
      if (isUpLetter) {
        All.push(...upletter);
        contains.push(AddUpLetter);
        counter++;
      }
      const inputMinChar = 16;
      const inputMaxChar = 32;
      const minChar = inputMinChar;
      const maxChar = inputMaxChar;
      
      let output = [];
      
      //----------------length of char fild-----------------------
      const lengthCar =
        Math.floor(Math.random() * (maxChar - minChar + 1)) + minChar - counter;
      //---------------Loop-------------------
      for (let i = 0; i <= lengthCar; i++) {
        if (!finishCondition) {
          contains.sort(() => Math.random() - 0.5);
          for (let i = 0; i < contains.length; i++) {
            contains[i]();
          }
          finishCondition = true;
        } else {
          result.push(All[Math.floor(Math.random() * All.length)]);
        }
      }
      
      console.log(result);
}
