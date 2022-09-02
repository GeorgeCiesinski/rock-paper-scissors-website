// Round and Score
let currentRound = 1;  // Start from round 1
let playerScore = 0;
let computerScore = 0;

// Toggles
let gameOver = false;  // Toggles end game state
let roundOver = false;  // Toggles if round ends
let tieGame = false;  // Toggles if round ties

let computerChoice;  // Global computer choice variable

// Get Buttons
let btnRock = document.getElementById("rock");
let btnPaper = document.getElementById("paper");
let btnScissors = document.getElementById("scissors"); 
let btnNext = document.getElementById("next-round");
let btnReset = document.getElementById("reset");

// Get Elements
let playerScoreEl = document.getElementById("player-score");
let computerScoreEl = document.getElementById("computer-score");
let vsEl = document.getElementById("vs-space");

// Add event listeners to buttons
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

// Update player selection image with selected option
let updatePlayerIcon = (playerChoice) => document.getElementById("player-selection").src = "images/" + playerChoice + ".png";

// Determine the winner and alter score
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        tieGame = true;
        vsEl.innerHTML = "Tied";
    } else if (  // Player Wins
        (playerChoice == "rock" && computerChoice == "scissors") || 
        (playerChoice == "paper" && computerChoice == "rock") || 
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        playerScore += 1;
        playerScoreEl.innerHTML = playerScore;
        vsEl.innerHTML = '<i class="fa-solid fa-2x fa-hand-point-left"></i>';
    } else if (  // Computer Wins
        (playerChoice == "rock" && computerChoice == "paper") || 
        (playerChoice == "paper" && computerChoice == "scissors") || 
        (playerChoice == "scissors" && computerChoice == "rock")
    ) {
        computerScore += 1;
        computerScoreEl.innerHTML = computerScore;
        vsEl.innerHTML = '<i class="fa-solid fa-2x fa-hand-point-right"></i>';
    }

    changeNextButton();
}

function changeNextButton() {
    btnNext.classList.add("bold-button");
    if (currentRound >= 5 && playerScore + computerScore == 5) {
        btnNext.innerHTML = "Result";
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
        document.getElementById("player-selection").src = "images/transparent.png";
    }

    vsEl.innerHTML = "vs";
    btnNext.classList.remove("bold-button");
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
    playerScoreEl.innerHTML = playerScore;
    computerScore = 0;
    computerScoreEl.innerHTML = computerScore;
    document.getElementById("current-round").innerHTML = 1;  // Reset Rounds
    currentRound = 1;
    roundOver = false;
    gameOver = false;
    document.getElementById("player-selection").src = "images/transparent.png";  // Reset player selection image
    btnNext.innerHTML = "Next Round";
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

document.getElementById("current-round").innerHTML = currentRound;  // Update page with current round
setInterval(rotateComputerImages, 100);  // Rotate images per interval
