function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnElement = document.querySelector(".change-color");
const spanElement = document.querySelector(".color");
const bodyElement = document.querySelector("body");

btnElement.addEventListener("click", onChangeColorClick);

function onChangeColorClick() {
  const randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;
  spanElement.textContent = randomColor;
}


