const choices = ["rock", "paper", "scissors"];
const playerOption = document.getElementById('playerOption');
const computerOption = document.getElementById('computerOption');
const resultDispaly = document.getElementById('resultDisplay');
let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let computerScoreDisplay = document.getElementById('ComputerScoreDisplay');

let playerScore = 0;
let computerScore = 0;

function playerChoice(option) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice)
    console.log(option);
    let result = "";
    if (computerChoice === option) {
        result = "IT'S A TIE!!";
    } 
    else {
        switch (option) {
            case 'rock':
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;
            case 'paper':
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case 'scissors':
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;
        }
    }
    
    playerOption.textContent = `PLAYER: ${option}`;
    computerOption.textContent = `COMPUTER: ${computerChoice}`;
    
    resultDispaly.classList.remove("greenText", "redText");
    switch(result){
        case 'You Win!':
            resultDispaly.classList = 'greenText';
            playerScore += 1;
            break;
        case "You Lose!":
            resultDispaly.classList = "redText";
            computerScore += 1;
            break;
    }

    resultDispaly.textContent = result;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}