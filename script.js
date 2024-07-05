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

document.querySelectorAll(".number, .operator").forEach(button => {
    button.addEventListener("click", function() {
        animateText(button);
        appendToScreen(button.textContent);
        console.log("Button clicked.", button.textContent);
    });
});

// function animateText(button) {
//     const textNode = button.firstChild;
//     const originalText = button.textContent;

//     const span = document.createElement("span");
//     span.textContent = originalText;

//     button.textContent = '';
//     button.appendChild(span);

//     span.offsetHeight;

//     span.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-out";
//     span.style.transform = "scale(1.5)";
//     span.style.opacity = 0.7;

//     setTimeout(function() {
//         span.style.transform = "";
//         span.style.opacity = "";
//         button.removeChild(span);
//         button.textContent = originalText;
//     }, 300);
// }

function animateText(button) {
    const originalText = button.textContent;

    // Create a span element for animation
    const span = document.createElement("span");
    span.textContent = originalText;
    span.className = "animated-text";

    // Replace the button's text content with the span
    button.textContent = '';
    button.appendChild(span);

    // Trigger reflow to apply initial styles
    span.offsetHeight;

    // Apply animation styles
    span.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-out";
    span.style.transform = "scale(7)";
    span.style.opacity = 0;

    // After the animation completes, restore the original text
    setTimeout(function() {
        // span.style.transform = "";
        // span.style.opacity = "";
        button.removeChild(span);
        button.textContent = originalText;
    }, 300); // Adjusted timeout to match transition duration
}


document.querySelector("#clear").addEventListener("click", function() {
    clearScreen();
});
document.querySelector("#equals").addEventListener("click", function() {
    calculate();
})});