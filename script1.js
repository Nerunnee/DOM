// Map bodlogo

// Map bodlogo 1.

let numbers = [1, 2, 3];

function squared(a) {
  return a ** 2;
}

const squaredNum = numbers.map(squared);

console.log("Map bodlogo 1.", squaredNum);

// Map bodlogo 2.

function evenOdd(a) {
  if (a % 2 === 0) return "Тэгш";
  if (a % 2 !== 0) return "Сондгой";
}

const value = numbers.map(evenOdd);

console.log("Map bodlogo 2.", value);

// Map bodlogo 3.

let arr = ["hi", "ok"];

function anhaar(string) {
  return string + "!";
}

const strAnhaar = arr.map(anhaar);

console.log("Map bodlogo 3.", strAnhaar);

// Map bodlogo 4.

const year = [1995, 1999, 2000, 2005];

function age(a) {
  return 2025 - a + "age";
}

const yearAge = year.map(age);

console.log("Map bodlogo 4.", yearAge);

// Map bodlogo 5.

function capa(word) {
  let firstLetter = "";

  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      firstLetter += word[i].toUpperCase();
    } else {
      firstLetter += word[i];
    }
  }

  return firstLetter;
}

const upperCase = arr.map(capa);

console.log("Map bodlogo 5.", upperCase);

// Map bodlogo 6.

function length(word) {
  return word.length;
}

const lengthNum = arr.map(length);

console.log("Map bodlogo 6.", lengthNum);

// Map bodlogo 7.

function tenPro(value) {
  return value * 0.1 + value;
}

const price = numbers.map(tenPro);

console.log("Map bodlogo 7.", price);

// Map bodlogo 8.

const numPrice = [1200];

function string(a) {
  return "₮" + a;
}

const priceStr = numPrice.map(string);

console.log("Map bodlogo 8.", priceStr);

// Map bodlogo 9.

function yesNo(a) {
  if (a % 2 === 0) {
    console.log(true);
    return "Тийм";
  } else {
    console.log(false);
    return "Үгүй";
  }
}

const boolean = numbers.map(yesNo);

console.log("Map bodlogo 9.", boolean);

// Map bodlogo 10.

function add(a) {
  return a + 1;
}

const addPlus = numbers.map(add);

console.log("Map bodlogo 10.", addPlus);
