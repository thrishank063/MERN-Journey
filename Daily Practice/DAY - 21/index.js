const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// intializeslide()
document.addEventListener('DOMContentLoaded', intializeslide);
function intializeslide() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide')
        intervalId = setInterval(nextSlide, 5000)
    }


}

function showSlide(index) {
    // console.log(slideIndex);
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    // console.log(slideIndex);
    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    })
    slides[slideIndex].classList.add('displaySlide')

}
function prevSlide() {
    clearInterval(intervalId);
    slideIndex -= 1;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}


//--------------CALLBACK HELL ------------------------

function task1(callBack) {
    setTimeout(() => {
        console.log(`Task 1 is completed`);
        callBack();
    }, 3000)
}

function task2(callBack) {
    setTimeout(() => {
        console.log(`Task 2 is completed`);
        callBack();
    }, 1000)
}

function task3(callBack) {
    setTimeout(() => {
        console.log(`Task 3 is completed`);
        callBack();
    }, 2000)
}

function task4(callBack) {
    setTimeout(() => {
        console.log(`Task 4 is completed`);
        callBack();
    }, 5000)
}

function task5(callBack) {
    setTimeout(() => {
        console.log(`Task 5 is completed`);
        callBack();
    }, 4000)
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => console.log(`All Tasks are completed`))
            })
        })
    })
})


//---------------PROMISES-------------------
function walkDog() {
    return new Promise((resolve, reject) => {
        let dogWalk = true;
        if (dogWalk) {
            setTimeout(() => {
                resolve(`Take the dog to the walk`)
            }, 1000);
        } else {
            reject(`You didn't take out the dog`)
        }
    })
}

function coding() {
    return new Promise((resolve, reject) => {
        if (doneCoding) {
            setTimeout(() => {
                resolve(`Spend the time on coding`)
            }, 2500)
        } else {
            reject(`you Not yet done the coding`);
        }
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        let trashOut = false;
        if (trashOut) {
            setTimeout(() => {
                resolve(`take the trash out `);

            }, 500)
        } else {
            reject(`you didn't take the trash out`)
        }
    })
}


walkDog().then(value => {
    console.log(value)
    takeOutTrash()
})
.then(ans => { 
    console.log(ans)
 })
 .catch(err => console.error(err))
