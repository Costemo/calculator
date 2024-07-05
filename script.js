console.log("hello")

document.addEventListener('DOMContentLoaded', function() {
let screenValue = '0';
let pendingOperation = '';
let previousValue = '';

const screen = document.querySelector("#screen");

function appendToScreen(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/'){
        if (pendingOperation !== '') {
            calculate()
;        }
        pendingOperation = value;
        previousValue = screenValue;
        screenValue = '0';
    } else {
        if (screenValue === '0' && value !== '.') {
            screenValue = value;
        } else {
            screenValue += value;
        }
    }
    screen.value = screenValue;
}

function clearScreen() {
    screenValue = '0';
    pendingOperation = '';
    previousValue = '';
    screen.value = screenValue;
}

function calculate() {
    if (pendingOperation !== '') {
        let result;
        switch (pendingOperation) {
            case '+': result = parseFloat(previousValue) + parseFloat(screenValue);
            break;
            case '-': result = parseFloat(previousValue) - parseFloat(screenValue);
            break;
            case '*': result = parseFloat(previousValue) * parseFloat(screenValue);
            break;
            case '/': result = parseFloat(previousValue) / parseFloat(screenValue);
            break;
            default: break;
        }
        screenValue = result.toString();
        screen.value = screenValue;
        previousValue = '';
        pendingOperation = '';
    }
}
document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", function() {
        appendToScreen(button.textContent);
    })
})
document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", function() {
        appendToScreen(button.textContent);
    })
})
document.querySelector("#clear").addEventListener("click", function() {
    clearScreen();
});
document.querySelector("#equals").addEventListener("click", function() {
    calculate();
})});