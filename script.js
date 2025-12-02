// const mydiv = document.getElementById("my-div");

// console.log(mydiv);

// mydiv.innerHTML = '<h1 id="my-h1">dom</h1>';

// const task1 = document.getElementById("title");

// DOM task 1.

// task1.innerHTML = '<h1 id="my-h1">Авах зүйлсийн жагсаалт</h1>';

// const task2 = document.getElementById("list");

// task2.innerHTML = `<ul>
// <li id="my-h1">Тараг (Yogurt)</li>
// <li id="my-h1">Сүү (Milk)</li>
// <li id="my-h1">Тахианы мах (Chicken)</li>
// <li id="my-h1">Жимс (Friuts)</li>
// </ul>`;

// list = [
//   "Тараг (Yogurt)",
//   "Сүү (Milk)",
//   "Тахианы мах (Chicken)",
//   "Жимс (Friuts)",
// ];

// let listElement = `<h1>Авах зүйлсийн жагсаалт</h1>`;

// let ul = "<ul>";

// for (let i = 0; i < list.length; i++) {
//   const item = list[i];

//   const element = `<li>${item}</li>`;

//   ul += element;
// }

// ul += "</ul>";

// listElement += ul;

// document.body.innerHTML = listElement;

// const input = document.getElementById("input");

// function submit() {
//   const inputValue = input.value;

//   if (inputValue <= 10 && inputValue > 0) {
//     text.innerHTML = "valid";
//   } else {
//     text.innerHTML = "not valid";
//   }
// }

const input = document.getElementById("input");

const text = document.getElementById("text");

const submitBtn = document.getElementById("submit-btn");

oroldlogo = 0;

function startGame() {
  inputNumbers = [];

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  let inputValue = input.value;

  oroldlogo++;

  if (!inputValue) {
    text.innerHTML = "Та зөвхөн тоо оруулна уу?";
  }

  //   if (inputNumbers.includes(inputValue)) {
  //     text.innerHTML = "Давтагдсан тоо байна, Та өөр тоо оруулна уу?";
  //   }

  inputNumbers.push(inputValue);

  if (randomNumber === inputValue) {
    text.innerHTML = `${randomNumber} , ${inputValue} тэнцүү байна. 🎉 Баяр хүргэе! Та Зөв таалаа! Нийт оролдлого: ${oroldlogo}`;
  }

  if (randomNumber > inputValue) {
    text.innerHTML = `Оролдлого ${oroldlogo}: ${randomNumber} нь ${inputValue}-аас их байна.`;
  }

  if (randomNumber < inputValue) {
    text.innerHTML = `Оролдлого ${oroldlogo}: ${randomNumber} нь ${inputValue}-аас бага байна.`;
  }

  inputValue = "";

  if (oroldlogo === 5) {
    text.innerHTML = `Та нийт ${oroldlogo} оролдлого хийснээр тоглоом дууслаа. ☹️ Та дахин оролдоно уу?`;
    submitBtn.disable = true;
  }

  // text.innerHTML = ("Таны оруулсан нийт утга:", inputNumbers);
}
