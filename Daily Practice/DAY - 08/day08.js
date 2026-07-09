//create array and loop it
let days = ["Monday", "Tuesday", "Wednessday", "Friday", "Saturday", "Sunday"];
days.forEach(day => { console.log(day) });

//create an object
let me = { name: "Thrishank", goal: "MERN Developer" };
console.log(me.name);

//Array of objects
let skills = [{ name: "HTML", done: true }, { name: "CSS", done: true }, { name: "React", done: false }];
skills.forEach(s => console.log(s.name, s.done))


//--------------------------------------------------------------------------------------------------//

const numberInputEl = document.getElementById("numberInput");
const pwdGenerateBtnEl = document.getElementById("pwdGenerateBtn");
const passwordEl = document.getElementById("password");

function generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChar = "~!@#$%^&*_+=/?.,";

    let append = "";
    let pwd = "";
    append += includeLowerCase ? lowerCaseChars : "";
    append += includeUpperCase ? upperCaseChars : "";
    append += includeNumbers ? numberChars : "";
    append += includeSymbols ? symbolsChar : "";

    for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * append.length);
        pwd += append[randomNum];
    }

    return pwd;
}

function initiate(passwordLength) {
    const includeLowerCase = true;
    const includeUpperCase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    let passwordOP = generatePassword(
        passwordLength,
        includeLowerCase,
        includeUpperCase,
        includeNumbers,
        includeSymbols
    );
    passwordEl.textContent = passwordOP;
}

pwdGenerateBtnEl.addEventListener("click", function () {
    let pwdLength = Number(numberInputEl.value);
    if (pwdLength !== 0) {
        initiate(pwdLength);
    }
    numberInputEl.value = "";
});