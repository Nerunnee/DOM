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

const nums = [10, 15, 20, 25, 30];

sum = 0;

function sumEven(num) {
  if (a % 2 === 0) {
    sum += num;
  }
}

nums.forEach(sumEven);

console.log(sum);
