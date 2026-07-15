let expDisplayEl = document.getElementById("expDisplay");
let resultDisplayEl = document.getElementById("resultDisplay");

let expresion = ""
function clearDisplay() {
    expresion = "";
    resultDisplayEl.value = "";
    expDisplayEl.value = "";
}

function appendToDisplay(input) {
    expresion += input;
    resultDisplayEl.value = expresion;
}

function delLastElement() {
    expresion = expresion.toString().slice(0, -1);
    resultDisplayEl.value = expresion;
}

function calculate() {
    try {
        expDisplayEl.value = resultDisplayEl.value;
        let result = eval(expresion);
        resultDisplayEl.value = result;
        expresion = String(result);

    } catch(error){
        expDisplayEl.value = expresion;
        resultDisplayEl.value = `error`;
        expresion = "";
        
    }
}