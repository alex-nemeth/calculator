const text = document.querySelector(".text");
text.textContent = "";
const subText = document.querySelector(".subtext");
subText.textContent = "";
const button = document.querySelector("button");
//button.addEventListener("click", number());
let num1;
let num2;
let operator;
let clearHelper = 0;
let firstCheck = 0;

function number(num) {
    if (clearHelper === 1) {
        text.textContent = "";
        clearHelper--;
    }

    text.textContent += num;
}

function operate(op) {
    subText.textContent = `${text.textContent} ${op}`;
    operator = op;
    num1 = text.textContent;
    clearHelper++;
    firstCheck++;
}

function calculate() {
    subText.textContent += ` ${text.textContent}`;
    if (firstCheck === 1) {
        num2 = text.textContent;
        firstCheck--;
    }
    if (operator === "+") {
        text.textContent = Number(num1) + Number(num2);
    }
}
