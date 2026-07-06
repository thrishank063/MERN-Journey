window.onload = function(){
    console.log(`Portfolio loaded!`)
    console.log(`Welcome To Thrishank Portfolio`)
}
let nameEl = document.getElementById('name');
let emailEl = document.getElementById('Email');
let submitbtnEl = document.getElementById('submitBtn');
submitbtnEl.addEventListener('click',function(){
    alert(`Thank You Message Receieved`)
})