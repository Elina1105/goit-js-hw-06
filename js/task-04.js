const counterValue = document.querySelector("#value");
let newValue = 0;

const buttonUp = document.querySelector(`button[ data-action = "increment"]`);
const buttonDown = document.querySelector(`button[ data-action = "decreentm"]`);

buttonUp.addEventListener("click", onBtnUpClick);
buttonDown.addEventListener("click", onBtnDownClick);

function onBtnUpClick() {
    newValue += 1;
    counterValue.textContent = newValue;
}

function onBtnDownClick() {
    newValue -= 1;
    counterValue.textContent = newValue;
}

