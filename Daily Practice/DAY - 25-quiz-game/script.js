const startScreenCont = document.getElementById("startScreen")
const startQuizBtn = document.getElementById('startQuizBtn')
const quizScreenCont = document.getElementById('quizScreen')

const scoreSpan = document.getElementById('score')

const totalQuestions = document.getElementById('totalQuestions')
const maxiScore = document.getElementById('maxiScore')

const currentQuestionSpan = document.getElementById('currentQuestion')
const progressBar = document.getElementById('progress')

const answersContainer = document.getElementById('answersContainer')

const questionText = document.getElementById('questionText')

const resultScreen = document.getElementById('resultScreen')
const finalScoreSpan = document.getElementById('result')


const resultMessage = document.getElementById('resultMessage')
const quizQuestions = [
    {
        question: "What is the capital of India",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "How many days are there in a week?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Which is the largest ocean",
        answers: [
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Which is the fastest land animal?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Tiger", correct: false },
            { text: "Horse", correct: false },
            { text: "Cheetah", correct: true }
        ]
    }, {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    }, {
        question: "Which gas do humans need to breathe?",
        answers: [
            { text: "Carbon dioxide", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Hydrogen", correct: false },
            { text: "Helium", correct: false }
        ]
    }, {
        question: "Which is the largest land animal?",
        answers: [
            { text: "Giraffe", correct: false },
            { text: "Elephant", correct: true },
            { text: "Rhino", correct: false },
            { text: "Hippo", correct: false }
        ]
    }, {
        question: "Which star is closest to Earth?",
        answers: [
            { text: "Sirius", correct: false },
            { text: "The Sun", correct: true },
            { text: "Polaris", correct: false },
            { text: "Vega", correct: false }
        ]
    }, {
        question: "How many legs does a spider have?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    }, {
        question: "What do bees make?",
        answers: [
            { text: "Milk", correct: false },
            { text: "Honey", correct: true },
            { text: "Juice", correct: false },
            { text: "Butter", correct: false }
        ]
    }
]

// Quiz state vars
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false

totalQuestions.textContent = quizQuestions.length
maxiScore.textContent = quizQuestions.length

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;

    startScreenCont.classList.remove('active')
    resultScreen.classList.remove('active');
    quizScreenCont.classList.add('active')

    showQuestion()
}
startQuizBtn.addEventListener('click', startQuiz)

function showQuestion() {
    answersDisabled = false

    const currentQuestion = quizQuestions[currentQuestionIndex]
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100
    progressBar.style.width = progressPercent + "%";

    answersContainer.innerHTML = "";

    questionText.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const buttonEl = document.createElement('button')
        buttonEl.classList.add('answer-btn')
        buttonEl.textContent = answer.text;
        buttonEl.dataset.correct = answer.correct
        buttonEl.addEventListener('click', selectAnswer);
        answersContainer.appendChild(buttonEl)
    })
}

function selectAnswer(event) {
    if (answersDisabled) return;
    answersDisabled = true

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true"
    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
    })
    if (isCorrect) {
        score++;
        scoreSpan.textContent = score
    } else {
        selectedButton.classList.add('incorrect')
    }
    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion()
        } else {
            showResults()
        }
    }, 1000)
}

function showResults() {
    quizScreenCont.classList.remove('active')
    resultScreen.classList.add('active')

    finalScoreSpan.textContent = score
    maxiScore.textContent = quizQuestions.length

    const percentage = (score / quizQuestions.length) * 100
    if (percentage === 100) {
        resultMessage.textContent = "Perfect! you're a genius!"
    }
    else if (percentage >= 80) {
        resultMessage.textContent = "Great job! You know your stuff!"
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good effort! keep learning!"
    } else if (percentage >= 40) {
        resultMessage.textContent = "Not bad! Try again to improve!";
    } else {
        resultMessage.textContent = "Keep studying! You'll get better!"
    }

}

function restartQuiz() {
    resultScreen.classList.remove('active');

    startQuiz()
}