// MAP, FILTER, REDUCE HW

// Bodlogo 1.

let nums = [1, 2, 3, 4, 5, 6];

const evenNums = nums.filter((num) => num % 2 === 0);

const doubleEvenNums = evenNums.reduce(
  (acc, secondValue) => secondValue ** 2 + acc,
  0
);

console.log("HW Bodlogo 1.", doubleEvenNums);

// Bodlogo 2.

nums = [2, 6, 4, 10];

const fiveIh = nums.filter((num) => num > 5);

const sumTher = fiveIh.reduce((acc, secondValue) => secondValue * 3 + acc, 0);

console.log("HW Bodlogo 2.", sumTher);

// Bodlogo 3.

nums = [3, 4, 6, 7, 9];

const threeDiv = nums.filter((num) => num % 3 === 0);

const sumDiv = threeDiv.reduce((acc, secondValue) => secondValue ** 2 + acc, 0);

console.log("HW Bodlogo 3.", sumDiv);

// Bodlogo 4.

nums = [2, 5, 12, 7];

const tenBaga = nums.filter((num) => num < 10);

const sumCub = tenBaga.reduce((acc, secondValue) => secondValue ** 3 + acc, 0);

console.log("HW Bodlogo 4.", sumCub);

// Bodlogo 5.

nums = [-2, 3, 0, 5, -1];

const zeroIh = nums.filter((num) => num > 0);

const sumZero = zeroIh.reduce((acc, secondValue) => secondValue * 2 + acc, 0);

console.log("HW Bodlogo 5.", sumZero);

// Bodlogo 6.

nums = [2, 5, 8, 10];

const twoDiv = nums.filter((num) => num % 2 === 0);

const sumTwo = twoDiv.reduce(
  (acc, secondValue) => acc + secondValue / twoDiv.length,
  0
);

console.log("HW Bodlogo 6.", sumTwo);

// Bodlogo 7.

nums = [3, 4, 6, 7, 9];

const threeHuv = nums.filter((num) => num % 3 === 0);

const sumThre = threeHuv.reduce(
  (acc, secondValue) => acc + secondValue / threeDiv.length,
  0
);

console.log("HW Bodlogo 7.", sumThre);

// Bodlogo 8.

nums = [2, 6, 4, 10, 7];

const tavaasIh = nums.filter((num) => num > 5 && num % 2 === 0);

const sumTavaasIh = tavaasIh.reduce((acc, secondValue) => acc + secondValue, 0);

console.log("HW Bodlogo 8.", sumTavaasIh);

// Bodlogo 9.

nums = [1, 2, 3, 4, 5];

const gurvaasBaga = nums.filter((num) => num < 3);

const sumGurvaasBaga = gurvaasBaga.reduce(
  (acc, secondValue) => acc * secondValue,
  1
);

console.log("HW Bodlogo 9.", sumGurvaasBaga);

// Bodlogo 10.

nums = [1, 2, 3, 6, 7];

const doubleFive = nums.filter((num) => num < 5);

const sumDoubleFive = doubleFive.reduce(
  (acc, secondValue) => secondValue ** 2 + acc,
  0
);

console.log("HW Bodlogo 10.", sumDoubleFive);

// Bodlogo 11.

nums = [5, 12, 8, 20, 3];

const doubleTen = nums.filter((num) => num > 10);

const sumDoubleTen = doubleTen.reduce(
  (acc, secondValue) => secondValue ** 2 + acc,
  0
);

console.log("HW Bodlogo 11.", sumDoubleTen);

// Bodlogo 12.

nums = [1, 2, 3, 4, 5, 6];

const evenTri = nums.filter((num) => num % 2 === 0);

const sumEvenTri = evenTri.reduce(
  (acc, secondValue) => secondValue ** 3 + acc,
  0
);

console.log("HW Bodlogo 12.", sumEvenTri);

// Bodlogo 13.

nums = [3, 4, 6, 7, 9];

const threTri = nums.filter((num) => num % 3 === 0);

const sumThreeTri = threTri.reduce(
  (acc, secondValue) => secondValue ** 3 + acc,
  0
);

console.log("HW Bodlogo 13.", sumThreeTri);

// Bodlogo 14.

nums = [-5, 0, 4, 7, -1];

const tigeesIh = nums.filter((num) => num > 0);

const sumTigeesIh = tigeesIh.reduce(
  (acc, secondValue) => secondValue ** 2 + acc,
  0
);

console.log("HW Bodlogo 14.", sumTigeesIh);

// Bodlogo 15.

nums = [8, 12, 15, 5];

const arvaasIh = nums.filter((num) => num > 10);

const sumArvaasIh = arvaasIh.reduce(
  (acc, secondValue) => secondValue * 2 + acc,
  0
);

console.log("HW Bodlogo 15.", sumArvaasIh);

// Bodlogo 16.

nums = [2, 6, 4, 10, 7];

const fiveesIh = nums.filter((num) => num > 5);

const sumFiveesIh = fiveesIh.reduce(
  (acc, secondValue) => (secondValue % 3) + acc,
  0
);

console.log("HW Bodlogo 16.", sumFiveesIh);

// Bodlogo 17.

nums = [1, 2, 3, 6, 7];

const tavaasBaga = nums.filter((num) => num < 5);

const sumTavaasBaga = tavaasBaga.reduce(
  (acc, secondValue) => (secondValue % 2) + acc,
  0
);

console.log("HW Bodlogo 17.", sumTavaasBaga);

// Bodlogo 18.

nums = [3, 4, 6, 7, 9];

const guravtHuv = nums.filter((num) => num % 3 === 0);

const sumGuravtHuv = guravtHuv.reduce(
  (acc, secondValue) => (secondValue ** 2 + acc) % 10,
  0
);

console.log("HW Bodlogo 18.", sumGuravtHuv);

// Bodlogo 19.

nums = [5, 12, 8, 20, 3];

const teneesIh = nums.filter((num) => num > 10);

const sumTeneesIh = teneesIh.reduce(
  (acc, secondValue) => (secondValue ** 2 + acc) % 7,
  0
);

console.log("HW Bodlogo 19.", sumTeneesIh);

// Bodlogo 20.

const words = ["hi", "hello", "hey", "world", "javascript"];

const fiveWords = words.filter((word) => word.length >= 5);

const sumFiveWords = fiveWords.reduce(
  (acc, secondValue) => acc + secondValue.length,
  0
);

console.log("HW Bodlogo 20.", sumFiveWords);
