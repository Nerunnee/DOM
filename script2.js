// forEach Bodlogo.

// forEach Bodlogo 1.

let num = [1, 2, 3];

function print(a) {
  console.log("forEach Bodlogo 1.", a);
}

num.forEach(print);

// forEach Bodlogo 2.

num = [1, 2, 3, 4];

let sum = 0;

function niilber(a) {
  sum += a;
}

num.forEach(niilber);

console.log("forEach Bodlogo 2.", sum);

// forEach Bodlogo 3.

num = [1, 6, 3, 8];

newNum = [];

function newNumPush(a) {
  if (a > 5) {
    newNum.push(a);
  }
}

num.forEach(newNumPush);

console.log("forEach Bodlogo 3.", newNum);

// forEach Bodlogo 4.

num = [1, 2, 3];

num.forEach(checkNum);

function checkNum(a) {
  if (a % 2 === 0) {
    console.log("forEach Bodlogo 4.", "odd");
  } else {
    console.log("forEach Bodlogo 4.", "even");
  }
}

// forEach Bodlogo 5.

num = [1, 2, 3];

newPushNum = [];

function urjver(a) {
  newNum = a * 2;

  newPushNum.push(newNum);
}

num.forEach(urjver);

console.log("forEach Bodlogo 5.", newPushNum);

// forEach Bodlogo 6.

const arr = ["Bold", "Suren"];

function student(string) {
  const newArr = string + "-student";

  console.log("forEach Bodlogo 6.", newArr);
}

arr.forEach(student);

// forEach Bodlogo 7.

const array = ["a", "b", "c", "b", "b", "b", "b"];

function count(sum) {
  sum = array.length;

  console.log("forEach Bodlogo 7.", sum);
}

array.forEach(count);

// forEach Bodlogo 8.

const ner = ["bat", "dorj", "amar"];

function aletter(a) {
  if (a.includes("a")) {
    console.log("forEach Bodlogo 8.", a);
  }
}
ner.forEach(aletter);

// forEach Bodlogo 9.

const numbers = [3, -2, 5, -10];

function negativeNum(a) {
  if (a < 0) {
    console.log("forEach Bodlogo 9.", a);
  }
}

numbers.forEach(negativeNum);

// forEach Bodlogo 10.

const animal = ["dog", "cat"];

function firstLetter(a) {
  ehniiUseg = a.charAt(0);

  console.log("forEach Bodlogo 10.", ehniiUseg);
}

animal.forEach(firstLetter);
