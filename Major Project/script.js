let displayValue = '';

function appendValue(value) {
    displayValue += value;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
