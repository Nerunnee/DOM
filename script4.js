// HW forEach Bodlogo

// HW forEach Bodlogo 1.

const numbers = [1, 2, 3, 4, 5, 6];

function evenOdd(number) {
  if (number % 2 === 0) {
    console.log("HW forEach Bodlogo 1.", "Odd");
  } else {
    console.log("HW forEach Bodlogo 1.", "Even");
  }
}

numbers.forEach(evenOdd);

// HW forEach Bodlogo 2.

let nums = [10, 15, 20, 25, 30];

sum = 0;

function sumEven(num) {
  if (num % 2 === 0) {
    sum += num;
  }
}

nums.forEach(sumEven);

console.log("HW forEach Bodlogo 2.", sum);

// HW forEach Bodlogo 3.

nums = [1, 2, 3, 4, 5];

let newNum = [];

function boolean(num) {
  if (num % 2 === 0 && true) {
    num = true;
  } else {
    num = false;
  }

  newNum.push(num);
}

nums.forEach(boolean);

console.log("HW forEach Bodlogo 3.", newNum);

// HW forEach Bodlogo 4.

nums = [3, 6, 9, 12];

newNum = [];

function threeDiv(num) {
  if (num % 3 === 0) {
    num++;
  }

  newNum.push(num);
}

nums.forEach(threeDiv);

console.log("HW forEach Bodlogo 4.", newNum);

// HW forEach Bodlogo 5.

const arr = ["hi", "hello", "hey", "hola"];

function fiveLetter(string) {
  if (string.length > 5) {
    console.log("HW forEach Bodlogo 5.", string);
  } else {
    console.log("HW forEach Bodlogo 5.", "baihgui baina");
  }
}

arr.forEach(fiveLetter);

// HW forEach Bodlogo 6.

nums = [1, 2, 3, 4, 5];

function bigSmall(num) {
  const value = num * 2;

  if (value > 5) {
    console.log("HW forEach Bodlogo 6.", "BIG");
  } else {
    console.log("HW forEach Bodlogo 6.", "SMALL");
  }
}

nums.forEach(bigSmall);

// HW forEach Bodlogo 7.
