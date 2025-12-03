// filter bodlogo

// filter bodlogo 1.

const numbers = [1, 2, 3, 4, 5, 6];

// numbers.filter((number) => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log("filter bodlogo 1.", evenNumbers);

// filter bodlogo 2.

let nums = [1, 2, 3, 4, 5];

const oddNumbers = nums.filter((num) => num % 2 !== 0);

console.log("filter bodlogo 2.", oddNumbers);

// filter bodlogo 3.

nums = [3, 12, 8, 30];

const arvaasIhnums = nums.filter((num) => num > 10);

console.log("filter bodlogo 3.", arvaasIhnums);

// filter bodlogo 4.

const words = ["hi", "hello", "winter", "cat"];

const fiveWords = words.filter((word) => word.length >= 5);

console.log("filter bodlogo 4.", fiveWords);

// filter bodlogo 5.

const ners = ["bat", "dorj", "amar", "suren"];

const aners = ners.filter((ner) => ner.includes("a"));

console.log("filter bodlogo 5.", aners);

// filter bodlogo 6.

nums = [-3, 0, 5, -1, 10];

const tigeesIhNums = nums.filter((num) => num > 0);

console.log("filter bodlogo 6.", tigeesIhNums);

// filter bodlogo 7.

nums = [3, 4, 9, 10, 12];

const threeDivNums = nums.filter((num) => num % 3 === 0);

console.log("filter bodlogo 7.", threeDivNums);

// filter bodlogo 8.

const booleans = [true, false, true, false];

const trueBoolean = booleans.filter((boolean) => {
  if (boolean === true) {
    return true;
  }
});

console.log("filter bodlogo 8.", trueBoolean);

// filter bodlogo 9.

const ugnuud = ["snow", "cat", "sun", "dark", "us"];

const newUgnuud = ugnuud.filter((ug) => ug[0].includes("s"));

console.log("filter bodlogo 9.", newUgnuud);

// filter bodlogo 10.

const letters = ["a", "b", "a", "c", "b"];

const temp = [];

const newLetters = letters.filter((letter) => {
  if (!temp.includes(letter)) {
    temp.push(letter);
    return false;
  } else {
    return true;
  }
});

console.log("filter bodlogo 10.", newLetters);
