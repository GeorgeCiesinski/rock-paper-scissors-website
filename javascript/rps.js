// Rock Paper Scissors

let gameOver = false;
let roundOver = false;  // Toggles if round ends
let currentRound = 1;  // Start from round 1
let playerScore = 0;
let computerScore = 0;
let tieGame = false;  // Toggles if round ties
let computerChoice;  // Global computer choice variable

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
    computerChoice = (
        randNum == 1 ? "rock" : 
        randNum == 2 ? "paper" : 
        randNum == 3 ? "scissors" : 
        null
    );
}

// Makes player selection
function makePlayerSelection(playerChoice) {
    if (!roundOver) {
        updatePlayerIcon(playerChoice);
        getComputerChoice();
        checkWinner(playerChoice, computerChoice);
        roundOver = true;  // Ends the round
    } else {
        console.log("The round has ended! Click Next Round!"); 
    }
}

function updatePlayerIcon(playerChoice) {
    document.getElementById("player-selection").src = "images/" + playerChoice + ".png";
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

function nextRound() {
    // If round ends and the game isn't tied, check how many rounds played
    if (roundOver && !tieGame) {
        // If fewer than 5 rounds played, increment rounds and reset images/variables
        if (currentRound < 5) {
            currentRound += 1;
            document.getElementById("current-round").innerHTML = currentRound;
            document.getElementById("player-selection").src = "images/transparent.png";
            roundOver = false;
        // If 5 or more rounds played
        } else if (currentRound >= 5) {
            endGame();
        }
    // If game tied, reset round
    } else if (tieGame) {
        tieGame = false;
        roundOver = false;
    } else {
        console.log("The round is not over yet, plebian!");
    }
}

function endGame() {
    gameOver = true;
    if (playerScore > computerScore) {
        document.getElementById("player-selection").src = "images/crown.png";
        document.getElementById("computer-selection").src = "images/skull.png";
    } else {
        document.getElementById("player-selection").src = "images/skull.png";
        document.getElementById("computer-selection").src = "images/crown.png";
    }
}

function reset() {
    console.log("Reset game.");
    playerScore = 0;  // Reset Scores
    document.getElementById("player-score").innerHTML = playerScore;
    computerScore = 0;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("current-round").innerHTML = 1;  // Reset Rounds
    roundOver = false;
    gameOver = false;
    document.getElementById("player-selection").src = "images/transparent.png";  // Reset player selection image
}

let computerImage = 1;

function rotateComputerImages() {
    if (!roundOver && !gameOver) {
        if (computerImage == 1) {
            document.getElementById("computer-selection").src = "images/rock.png";
            computerImage++;
        } else if (computerImage == 2) {
            document.getElementById("computer-selection").src = "images/paper.png";
            computerImage++;
        } else {
            document.getElementById("computer-selection").src = "images/scissors.png";
            computerImage = 1;
        }
    } else if (roundOver && !gameOver) {
        document.getElementById("computer-selection").src = "images/" + computerChoice + ".png";
    }
}

// Rotate images per interval
setInterval(rotateComputerImages, 100);
