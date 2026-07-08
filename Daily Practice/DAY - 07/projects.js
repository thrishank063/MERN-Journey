
//---------------Login Page ----------------------------------------------------//

let userNameEl = document.getElementById('userName');
let passwordEl = document.getElementById('password');
let loginbtnEl = document.getElementById('loginbtn');
let result1 = document.getElementById('result1');

function login() {
    if (userNameEl.value === "Thrishank" && passwordEl.value === "Thri") {
        result1.textContent = "You are loged in. ";
        result1.classList.add("logedinColor");
    }
    else {
        result1.textContent = "Enter Username & password";
        result1.classList.remove("logedinColor");
    }
}

loginbtnEl.addEventListener("click", login);

//-------------------Number Guessing----------------------------------------//

let guesedNumEl = document.getElementById("guesedNum");
let submitbtnEl = document.getElementById("submitbtn");
let result2El = document.getElementById("result2");

const min = 1;
const max = 100;
const randomNumber = Math.round(Math.random() * (max - min +1) + min);
submitbtnEl.addEventListener("click", function () {
    let guess = Number(guesedNumEl.value);
    console.log(randomNumber);
    if ((guess < min) || (guess > max)) {
        result2El.textContent = `Enter the value between ${min} - ${max}`;
    }
    else {
        if (guess < randomNumber) {
            result2El.textContent = `Your Number is low`;
            console.log(`This is ${guess}`);
        }
        else if (guess > randomNumber) {
            result2El.textContent = `Your Number is High`;
            console.log(`This is ${guess}`);
        }
        else if (guess === randomNumber){
            result2El.textContent = "yeah!! You entered the correct Number";
        }
    }
})
//---------------------------Temperature Conversion-----------------------------------

let tempValueEl = document.getElementById("tempValue");
let CelciusToFahrenheitEl = document.getElementById("CelciusToFahrenheit");
let FahrenheitToCelciusEl = document.getElementById("FahrenheitToCelcius");
let calculateBtnEl = document.getElementById("calculateBtn");
let result3El = document.getElementById("result3");


function convertTemp(){
    let temp = Number(tempValueEl.value);
    if(CelciusToFahrenheitEl.checked){
        temp = temp * 9 / 5 + 32;
        console.log(temp)
        result3El.textContent = temp.toFixed(1) + "°F";
    }
    else if(FahrenheitToCelciusEl.checked){
        temp = (temp - 32) * (5 / 9);
        console.log(temp)
        result3El.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result3El.textContent = "Select the Unit";
    }
}

calculateBtnEl.addEventListener("click",convertTemp);

