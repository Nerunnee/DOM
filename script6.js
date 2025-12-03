// Reduce bodlogo

// Reduce bodlogo 1.

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);

console.log("Reduce bodlogo 1.", result);

// Reduce bodlogo 2.

let nums = [2, 3, 4];

const urjver = nums.reduce((accumulator, num) => {
  return accumulator * num;
}, 1);

console.log("Reduce bodlogo 2.", urjver);

// Reduce bodlogo 3.

nums = [10, 30, 5, 22];

const maxNum = nums.reduce((value, num) => {
  if (value > num) {
    return value;
  } else {
    return (value = num);
  }
}, 0);

console.log("Reduce bodlogo 3.", maxNum);

// Reduce bodlogo 4.

nums = [10, 3, 7, 20];

// const minNum = nums.reduce((value, num, index) => {
//   if (index === 0) {
//     return num;
//   }

//   if (value > num) {
//     return num;
//   } else {
//     return value;
//   }
// }, 0);

const minNum = nums.reduce((value, num) => {
  if (value > num) {
    return num;
  } else {
    return value;
  }
});

// const minNum = nums.reduce((value, num) => Math.min(value, num));

console.log("Reduce bodlogo 4.", minNum);

// Reduce bodlogo 5.

const words = ["hi", "hello", "hey"];

const text = words.reduce((value, word) => value + word);

console.log("Reduce bodlogo 5.", text);

// Reduce bodlogo 6.

const stringSum = words.reduce((value, word) => value + word.length, 0);

console.log("Reduce bodlogo 6.", stringSum);
