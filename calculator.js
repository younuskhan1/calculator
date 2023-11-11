const display = document.querySelector(".display");
// new things
const buttons = document.querySelectorAll("button");
const specialchars = ["%", "+", "-", "*", "/", "="];
let output = "";

// add eventlisteners to the buttons to call the calculate button. 
// define function to calculate based on button clicked
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        // if output has "%" then replace "%" with "/100" before evaluating. 
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        // if DEL button is clicked, the last characters will be deleted from the output.  
        output = output.toString().slice(0, -1);
        // if output is empty and button is special characters then return 
    } else if (output === "" && specialchars.includes(btnValue)) {
        return;

    } else {
        output += btnValue;
    }
    display.value = output;
}
buttons.forEach((button) => {
    // button click listener calls calculate function with the dataset value as arguments 
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})