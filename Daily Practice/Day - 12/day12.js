class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("width must be a positive number");
        }
    }
    get width(){
        return this._width;
    }
}

const rectangle1 = new Rectangle(7, "thrishank")
rectangle1.width = 8;

// console.log(rectangle1.width);

// _______________________________________

let timerId;

function startTimer(){
    if(timerId){
        clearInterval(timerId);
    }
    let count = 0;
    timerId = setInterval(() => {
        console.log(count);
        count++;
    },1000);
}


function stopTimer(){
    clearInterval(timerId);
    timerId = null;
}