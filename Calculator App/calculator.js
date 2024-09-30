
let currentInput = "";  // String to hold the current input
let result = 0;         // Number to store the result
let isCalculated = false;  // Boolean to track if calculation has been done

// Function to append a number to the input string
function appendNumber(number) {
    if (isCalculated) {
        currentInput = "";  // Clear input if calculation was done
        isCalculated = false;
    }
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

// Function to append an operator to the input string
function appendOperator(operator) {
    if (!isCalculated) {
        currentInput += operator;
        document.getElementById('display').value = currentInput;
    }
}

// Function to clear the display and reset the input
function clearDisplay() {
    currentInput = "";
    result = 0;
    isCalculated = false;
    document.getElementById('display').value = "";
}

// Function to calculate the result of the expression
function calculate() {
    try {
        result = eval(currentInput);  // Evaluate the expression (eval used for simplicity)
        document.getElementById('display').value = result;
        isCalculated = true;  // Mark that the calculation is done
    } catch (error) {
        document.getElementById('display').value = "Error";
    }
}
