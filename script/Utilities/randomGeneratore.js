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
//-------------------------flag-------------------------------
// let isNumber = false;
// let isLowLetter = false;
// let isUpLetter = true;
// let isSign = true;
// false default


//[up 0, low 1, num 2, sign 3, max 4, min 5]
export function GenerateRandomFild(
  isUpLetter,
  isLowLetter,
  isNumber,
  isSign,
  inputMaxChar,
  inputMinChar
) {
  let finishCondition = false;
  //--------------------------length of filter---------------------
  let counter = 0;
  //--------------------array condition method------------------------
  let contains = [];
  let result = [];
  let All = [];
  let lengthCar = 0 ;
  //condition method
  // const AddLowLetter = () => {
  //   if (isLowLetter) {
  //     result.push(lowletter[Math.floor(Math.random() * 26)]);
  //     isLowLetter = false;
  //   }
  // };
  // const AddUpLetter = () => {
  //   if (isUpLetter) {
  //     result.push(upletter[Math.floor(Math.random() * 26)]);
  //     isUpLetter = false;
  //   }
  // };
  // const AddSign = () => {
  //   if (isSign) {
  //     result.push(sign[Math.floor(Math.random() * 16)]);
  //     isSign = false;
  //   }
  // };
  // const AddNumber = () => {
  //   if (isNumber) {
  //     result.push(Mah.floor(Math.random() * 10));
  //     isNumber = false;
  //   }
  // };
  if (isNumber) {
    All.push(...numbers);
    contains.push(Math.floor(Math.random() * 10));
    counter++;
  }
  if (isSign) {
    All.push(...sign);
    contains.push(sign[Math.floor(Math.random() * 16)]);
    counter++;
  }
  if (isLowLetter) {
    All.push(...lowletter);
    contains.push(lowletter[Math.floor(Math.random() * 26)]);
    counter++;
  }
  if (isUpLetter) {
    All.push(...upletter);
    contains.push(upletter[Math.floor(Math.random() * 26)]);
    counter++;
  }

  const minChar = inputMinChar;
  const maxChar = inputMaxChar;


  //----------------length of char fild-----------------------
  lengthCar = Math.floor(Math.random() * (maxChar - minChar + 1)) + minChar - counter;
  //---------------Loop-------------------
  for (let i = 0; i <= lengthCar; i++) {
    if (!finishCondition) {
      contains.sort(() => Math.random() - 0.5);
      for (let i = 0; i < contains.length; i++) {
        result.push(contains[i]);
      }
      finishCondition = true;
    } else {
      result.push(All[Math.floor(Math.random() * All.length)]);
    }
  }
  finishCondition = false;
  
  
  return result;
}
