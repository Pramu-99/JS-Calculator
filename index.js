//calculator functionality
const display = document.getElementById("display");

//function to display items
function appendToDisplay(input) {
    display.value += input;
}

//function to calculate
function clearDisplay() {
    display.value = "";
}

//function to clear out the display
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}