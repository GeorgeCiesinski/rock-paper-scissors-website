// Rock Paper Scissors

let roundOver = false;
let currentRound = 1;  // Start from round 1

// Get Buttons
let btnRock = document.getElementById("rock");
let btnPaper = document.getElementById("paper");
let btnScissors = document.getElementById("scissors"); 

// Add event listeners
btnRock.addEventListener("click", makePlayerSelection.bind(this, "rock"));
btnPaper.addEventListener("click", makePlayerSelection.bind(this, "paper"));
btnScissors.addEventListener("click", makePlayerSelection.bind(this, "scissors"));   

// Get the computer choice - return rock, paper or scissors
function getComputerChoice() {
    randNum = Math.floor((Math.random() * 3) + 1);
    let computerChoice = (
        randNum == 1 ? "rock" : 
        randNum == 2 ? "paper" : 
        randNum == 3 ? "scissors" : 
        null
    );
    return computerChoice;
}

// Makes player selection
function makePlayerSelection(playerChoice) {
    if (!roundOver) {
        computerChoice = getComputerChoice();
        checkWinner(playerChoice, computerChoice);
        endRound();
    }
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        // Tie
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") || 
        (playerChoice == "paper" && computerChoice == "rock") || 
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        // Win
    } else if (
        (playerChoice == "rock" && computerChoice == "paper") || 
        (playerChoice == "paper" && computerChoice == "scissors") || 
        (playerChoice == "scissors" && computerChoice == "rock")
    ) {
        // Lose
    }
}

function endRound() {
    roundOver = true;
}

// When Next Round clicked
function newRound() {

}




// Round - playerSelection and computerSelection

// Game - Calls round function - play 5 rounds