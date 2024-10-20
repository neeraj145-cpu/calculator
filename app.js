const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentNumber = '';
            previousNumber = '';
            operation = '';
            display.value = '';
        } else if (value === 'DEL') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        } else if (['+', '-', '*', '/'].includes(value)) {
            previousNumber = currentNumber;
            currentNumber = '';
            operation = value;
        } else if (value === '=') {
            const result = calculate(previousNumber, currentNumber, operation);
            display.value = result;
            previousNumber = '';
            currentNumber = result;
            operation = '';
        } else {
            currentNumber += value;
            display.value = currentNumber;
        }
    });
});

function calculate(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return '';
    }
}