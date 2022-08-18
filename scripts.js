const caracteres = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const idColorText = document.querySelector(".id-color");

function changeColor() {
  const color = createColor();
  idColorText.innerHTML = `background-color: ${color}`;
  document.body.style.background = color;
}

function createGradient() {
  const color1 = createColor();
  const color2 = createColor();
  idColorText.innerHTML = `linear-gradient(to right, ${color1}, ${color2})`;
  document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

function createColor() {
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    color += caracteres[index];
  }
  return color;
}
