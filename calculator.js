const display = document.querySelector(".display");
// new things
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "+", "-", "*", "/", "="];
let output = "";

// add eventlisteners to the buttons to call the calculate button. 
// define function to calculate based on button clicked
const calculate = (btnValue) => {

    if (btnValue === "=" && output !== "") {
        // if output has "%" then replace "%" with "/100" before evaluating. 
        // eval() method is used to execute the code after replacing "%" with "/100".
        // without eval() method the line will not be executed just will be replaced.
        output = eval(output.replace("%", "/100"));
        // console.log(output); 
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        // if DEL button is clicked, the last characters will be deleted from the output.  
        // output = output.toString().slice(0, -1); same as exactly
        output = output.toString().slice(0, output.length - 1);
        // if output is empty and button is special characters then return 
    } else if (output === "" && specialChars.includes(btnValue)) {
        return;

    } else {
        // otherwise btnvalue will be added to the output value. 
        output += btnValue;
    }
    // this line will be executed at last after reviewing above conditions. 
    display.value = output;
}

buttons.forEach((button) => {
    // button click listener calls calculate function with the dataset value as arguments 
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})