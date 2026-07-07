
let ageInputEl = document.getElementById('ageInput');
let submitBtnEl1 = document.getElementById('submitBtn1');
let resultEl1 = document.getElementById('result1');

submitBtnEl1.addEventListener('click', function () {
    let valueEl1 = Number(ageInputEl.value);
    if(valueEl1 === 0) {
        resultEl1.textContent = `You can't Enter, you were just Born.`;
    }
    else if (valueEl1 >= 100){
        resultEl1.textContent = `You are too Old to enter this Site.`;
    }
    else if (valueEl1 >= 18){
        resultEl1.textContent =`You are Old enough to  enter this Site.`;
    }
     else if (valueEl1 <= 0){
        resultEl1.textContent =`You are age can't be below zero.`;
    }
    else{
        resultEl1.textContent = `You must be 18+ to enter the site.`
    }
    ageInputEl.value = "";
})

const cardEl = document.getElementById('card');
const visabtnEl = document.getElementById('visabtn');
const masterbtnEl = document.getElementById('masterbtn');
const paypalbtnEl = document.getElementById('paypalbtn');
const rupaybtnEl = document.getElementById('rupaybtn');
const submitBtnEl2 = document.getElementById('submitBtn2');
const result2El = document.getElementById('result2');
const result3El = document.getElementById('result3');

let statement = `You selected card type is `
submitBtnEl2.onclick = function(){
    if (cardEl.checked){
        result2El.textContent = `You are Selected Card Payment`;
    }else result2El.textContent = `You are Not Selected Card Payment`;
    if (visabtnEl.checked){
        statement += `Visa Card`;
    }
    else if (masterbtnEl.checked) statement += `Master Card`;
    else if (paypalbtnEl.checked) statement += `PayPal Card`;
    else if (rupaybtnEl.checked) statement += `Rupay Card`;
    else statement = `Select the card`;
    result3El.textContent = statement;
}


// completed Ternary and switch case

//Array = list of items
let skills = ["HTML", "CSS", "JavaScript", "React"];
console.log(skills.length);
console.log(skills[0]);
skills.push("Node.js");
let lastElement = skills.pop();


for(let i = 0; i < skills.length ; i++){
    console.log(skills[i]);
}
for(let eachSkill of skills){
    console.log(eachSkill)
}