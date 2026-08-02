const screen = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let currentInput = "0";
let firstNumber = null;
let operator = null;
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.classList.contains("clear-button")) {
            currentInput = "0";
            firstNumber = null;
            operator = null;
            screen.textContent = currentInput;
            return;
        }
        if (button.classList.contains("equal-button")) {
            let result;
            if (operator == "+")
                result = firstNumber + Number(currentInput);
            else if (operator == "−")
                result = firstNumber - Number(currentInput);
            else if (operator == "×")
                result = firstNumber * Number(currentInput);
            else if (operator == "÷") {
                if (currentInput === "0")
                    result = "UNDEFINED";
                else
                    result = firstNumber / Number(currentInput);
            }
            currentInput = String(result);
            screen.textContent = currentInput;
            return;
        }
        if (button.classList.contains("operator")) {
            firstNumber = Number(currentInput);
            operator = button.textContent;
            currentInput = "0";
            return;
        }
        if (button.textContent === "." && currentInput.includes("."))
            return;
        if (currentInput === "0")
            currentInput = button.textContent;
        else
            currentInput += button.textContent;
        screen.textContent = currentInput;
    });
});