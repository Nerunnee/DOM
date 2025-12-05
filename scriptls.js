// Lesson bodlogo

// Bodlogo 1.

const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 20 },
  { name: "Jack", age: 18 },
];

const peopleAge = people.filter((people) => {
  if (people.age >= 18) {
    return true;
  } else {
    return false;
  }
});

const age = peopleAge.map((peopleAge) => {
  return peopleAge.name;
});

console.log(age);

// Bodlogo 2.

const nums = [-5, 3, -1, 7, 0];

const positiveNums = nums.filter((num) => num > 0);

console.log(positiveNums);

// Bodlogo 3.

const words = ["hi", "hello", "yo", "world"];

const newWords = words.filter((word) => word.length > 3);

console.log(newWords);

// Bodlogo 4.

const numbers = [1, 2, 3, 4, 5];

const oddNumbers = numbers.filter((number) => number % 2 !== 0);

const newOddNumbers = oddNumbers.map((oddNumber) => oddNumber * 2);

console.log(newOddNumbers);

// Bodlogo 5.

const students = [
  { firstName: "John", lastName: "Doe", passed: true },
  { firstName: "Jane", lastName: "Smith", passed: false },
  { firstName: "Alice", lastName: "Jones", passed: true },
];

const passedStudents = students.filter((student) => {
  if (student.passed == true) {
    return true;
  } else {
    return false;
  }
});

const firstName = passedStudents.map((passedStudent) =>
  passedStudent.firstName.toUpperCase()
);

console.log(firstName);

// Bodlogo 6.

const classStudents = [
  { name: "A", score: 88 },
  { name: "B", score: 95 },
  { name: "C", score: 72 },
  { name: "D", score: 99 },
  { name: "E", score: 91 },
];

let top3Student = [{ name: "", score: 0 }];

for (let i = 0; i < classStudents.length; i++) {
  const classStudent = classStudents[i];

  if (top3Student[0].score < classStudent.score) {
    top3Student[1] = top3Student[0];
    top3Student[0] = classStudent;
  } else {
    top3Student[2] = top3Student[1];
    top3Student[1] = classStudent;
  }
}

console.log(top3Student);

// const maxScore = classStudents.filter((classStudent) => {
//   //   const top3 = classStudents.filter((x) => x.score > classStudent.score).length;
//   //   return top3 < 3;
// });

// const top3Class = maxScore.map((topClass) => topClass.name);

// console.log(top3Class, "top3Class,");

// Bodlogo 7.

const carts = [
  { name: "Book", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 },
  { name: "Notebook", price: 5, quantity: 3 },
];

const allPrice = carts.reduce(
  (value, cart) => cart.price * cart.quantity + value,
  0
);

console.log(allPrice);

// Bodlogo 8.

const stringWords = ["hello", "world", "typescript", "js"];

const longWord = stringWords.filter((stringWord) => {
  longWord = stringWord[i];
});

console.log(maxWord);
