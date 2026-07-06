console.log(`Hello World!`);
console.log(`I like Coding`);

// window.alert(`This is an alert!`);
// window.alert(`I LOVE EATING!`);

document.getElementById('myH1').textContent = `Welcome`;
let student = 30;
student = student ** 3;

document.getElementById('myP').textContent = student + ` it is power symbol`;

// username = window.prompt(`Enter Your Username`);
// document.getElementById('uName').textContent = username;


let username = document.getElementById('UserName');
let submitbtn = document.getElementById('submitBtn');
let resultEle = document.getElementById('result');
submitbtn.onclick = function () {
    if (username.value === "") alert('Enter a Username');
    
    else {
        resultEle.textContent = 'Welcome ' + username.value;
    }
}

let radiusEl = document.getElementById('radius');
let result1El = document.getElementById('result1');
const pi = 3.14
function calculate() {
    if (radiusEl.value === "") alert('Enter a Value');
    else {
        let value = Number(radiusEl.value);
        result1El.textContent = 2 * pi * value;
        radiusEl.value = "";
    }
}

let result2El = document.getElementById('result2');
let currValue = Number(result2El.textContent);
function increment(){
    result2El.textContent = currValue + 1;
    currValue = Number(result2El.textContent);
}
function reset(){
    result2El.textContent = 0;
    currValue = 0;
}
function decrement(){
    result2El.textContent = currValue - 1;
    currValue = Number(result2El.textContent);
}