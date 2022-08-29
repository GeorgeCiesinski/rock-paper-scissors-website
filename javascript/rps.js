// Rock Paper Scissors

let roundOver = false;
let currentRound = 1;  // Start from round 1
let playerScore = 0;
let computerScore = 0;
let tieGame = false;

// Get Buttons
let btnRock = document.getElementById("rock");
let btnPaper = document.getElementById("paper");
let btnScissors = document.getElementById("scissors"); 
let btnNext = document.getElementById("next-round");
let btnReset = document.getElementById("reset");

// Add event listeners
btnRock.addEventListener("click", makePlayerSelection.bind(this, "rock"));
btnPaper.addEventListener("click", makePlayerSelection.bind(this, "paper"));
btnScissors.addEventListener("click", makePlayerSelection.bind(this, "scissors"));   
btnNext.addEventListener("click", nextRound);
btnReset.addEventListener("click", reset);

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
    } else {
        console.log("The round has ended! Click Next Round!"); 
    }
}

// Determine the winner and alter score
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log("The game is a tie!");
        tieGame = true;
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") || 
        (playerChoice == "paper" && computerChoice == "rock") || 
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        console.log("Player won!");
        playerScore += 1;
        document.getElementById("player-score").innerHTML = playerScore;
    } else if (
        (playerChoice == "rock" && computerChoice == "paper") || 
        (playerChoice == "paper" && computerChoice == "scissors") || 
        (playerChoice == "scissors" && computerChoice == "rock")
    ) {
        console.log("Player Lost!");
        computerScore += 1;
        document.getElementById("computer-score").innerHTML = computerScore;
    }
}

function endRound() {
    roundOver = true;
}

function nextRound() {
    if (roundOver) {
        if (!tieGame) {
            currentRound += 1;
            document.getElementById("current-round").innerHTML = currentRound;
            tieGame = false;
        }
        roundOver = false;
    } else {
        console.log("The round is not over yet, plebian!");
    }
    
}

function reset() {
    console.log("Reset game.");
    // Reset Scores
    document.getElementById("player-score").innerHTML = 0;
    document.getElementById("computer-score").innerHTML = 0;
    // Reset Rounds
    document.getElementById("current-round").innerHTML = 1;
    roundOver = false;
}