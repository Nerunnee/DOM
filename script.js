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

list = [
  "Тараг (Yogurt)",
  "Сүү (Milk)",
  "Тахианы мах (Chicken)",
  "Жимс (Friuts)",
];

let listElement = `<h1>Авах зүйлсийн жагсаалт</h1>`;

let ul = "<ul>";

for (let i = 0; i < list.length; i++) {
  const item = list[i];

  const element = `<li>${item}</li>`;

  ul += element;
}

ul += "</ul>";

listElement += ul;

document.body.innerHTML = listElement;
