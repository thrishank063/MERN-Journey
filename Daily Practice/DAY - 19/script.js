//----------------------EVENT LISTENER-------------------------


const innerBox = document.getElementById("innerBox");
innerBox.addEventListener("click", event => {
    innerBox.textContent = "OCH! 😮";
    innerBox.style.backgroundColor = "tomato";

})

innerBox.addEventListener("mouseover", event => {
    innerBox.textContent = "Don't Touch Me😡";
    innerBox.style.backgroundColor = "yellow";
})

innerBox.addEventListener("mouseout", event => {
    innerBox.textContent = "Click me☺️";
    innerBox.style.backgroundColor = "aquamarine";
})

document.addEventListener('keydown', event => {
    innerBox.textContent = "Don't Touch Me😡";
    innerBox.style.backgroundColor = "yellow";
})
document.addEventListener('keyup', event => {
    innerBox.textContent = "Click me☺️";
    innerBox.style.backgroundColor = "aquamarine";
})

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener('keydown', event => {
    if (event.key.startsWith('Arrow')) {
        event.preventDefault();
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;

                break;
        }
        innerBox.style.top = `${y}px`;
        innerBox.style.left = `${x}px`;
    }
})


const boxBtn = document.getElementById('boxBtn');
boxBtn.addEventListener("click", () => {
    if (innerBox.style.visibility !== "hidden") {
        innerBox.style.visibility = "hidden";
        boxBtn.textContent = "Show";
    }
    else {
        innerBox.style.visibility = "visible";
        boxBtn.textContent = "Hide";
    }
})


let buttons = document.querySelectorAll('.allBtns')
console.log(buttons);
buttons.forEach(button =>{
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll('.allBtns')
        console.log(buttons);
    })
})