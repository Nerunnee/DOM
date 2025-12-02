// HW Map Bodlogo.

// HW Map Bodlogo 1.

const num = [1, 2, 3, 4, 5];

function twoPlus(a) {
  if (a % 2 === 0) {
    return a * 2;
  } else {
    return a;
  }
}

const result = num.map(twoPlus);

console.log("HW Map Bodlogo 1.", result);

// HW Map Bodlogo 2.

const ner = ["bat", "dorj", "suren"];

function threeWord(string) {
  let firstLetter = "";

  if (string.length <= 3) {
    return string;
  }

  for (let i = 0; i < string.length; i++) {
    if (i === 0 && string.length > 3) {
      firstLetter += string[i].toUpperCase();
    } else {
      firstLetter += string[i];
    }
  }

  return firstLetter;
}

const resultNer = ner.map(threeWord);

console.log("HW Map Bodlogo 2.", resultNer);

// HW Map Bodlogo 3.

const nums = [1, 2, 3, 4, 5];

function evenOdd(a) {
  if (a % 2 === 0) {
    return a ** 2;
  } else {
    return 0;
  }
}

const resultEvenOdd = nums.map(evenOdd);

console.log("HW Map Bodlogo 3.", resultEvenOdd);

// HW Map Bodlogo 4.

let numbers = [10, 15, 20, 25];

function tenZero(a) {
  ten = a - 10;

  if (ten < 10) {
    return 0;
  } else {
    return ten;
  }
}

const resultTenZero = numbers.map(tenZero);

console.log("HW Map Bodlogo 4.", resultTenZero);

// HW Map Bodlogo 5.

numbers = [1, 2, 3, 4, 5];

function moduliTwo(a) {
  return a % 2;
}

const resultModuliTwo = numbers.map(moduliTwo);

console.log("HW Map Bodlogo 5.", resultModuliTwo);

// HW Map Bodlogo 6.

const words = ["hi", "hello", "hey"];

// function newWord(string) {
//   first = string.charAt[0];

//   for (let i = string.length - 1; i >= 0; i--) {
//     char = string[i];
//   }

//   firstLastLetter = first + char;

//   return firstLastLetter;
// }

// resultFirstLast = word.map(newWord);

// console.log("HW Map Bodlogo 6.", resultFirstLast);

function startEndWord(word) {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    newWord = word[0];
    if (i === word.length - 1) {
      newWord += word[i];
    }
  }
  return newWord;
}

const firstEndChar = words.map(startEndWord);

console.log("HW Map Bodlogo 6.", firstEndChar);

// HW Map Bodlogo 7.

numbers = [1, 2, 3, 4];

function oneZero(a) {
  if (a % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
}

const resultOneZero = numbers.map(oneZero);

console.log("HW Map Bodlogo 7.", resultOneZero);

// HW Map Bodlogo 8.

numbers = [100, 200, 300];

function threeDiv(a) {
  return a % 3;
}

const resultThreeDiv = numbers.map(threeDiv);

console.log("HW Map Bodlogo 8.", resultThreeDiv);

// HW Map Bodlogo 9.

numbers = [1, 2, 3, 4, 5, 6];

function twoTen(a) {
  two = a * 2;

  if (two > 10) {
    return 10;
  } else {
    return null;
  }
}

const resultTwoTen = numbers.map(twoTen);

console.log(resultTwoTen);

// HW Map Bodlogo 10.

const personNames = ["bat", "dorj", "suren", "amaraa"];

function longShort(name) {
  if (name.length > 5) {
    return "LONG";
  } else {
    return "SHORT";
  }
}

resultLongShort = personNames.map(longShort);

console.log(resultLongShort);
