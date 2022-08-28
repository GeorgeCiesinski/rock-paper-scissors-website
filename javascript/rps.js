// Rock Paper Scissors

// When window loads, add event listeners to player choices
window.onload=function(){
    document.getElementById("rock").addEventListener("click", makePlayerSelection.bind(this, "rock"));
    document.getElementById("paper").addEventListener("click", makePlayerSelection.bind(this, "paper"));
    document.getElementById("scissors").addEventListener("click", makePlayerSelection.bind(this, "scissors"));    
}

// Get the computer choice - return rock, paper or scissors
function getComputerChoice() {
    // Select random number between 1-3
    randNum = Math.floor((Math.random() * 3) + 1);
    // Pick selection depending on random number
    let computerSelection = (
        randNum == 1 ? "rock" : 
        randNum == 2 ? "paper" : 
        randNum == 3 ? "scissors" : 
        null
    );
    return computerSelection;
}

// Makes player selection
function makePlayerSelection(choice) {
    console.log(choice);
}

function playRound() {
    computerSelection = getComputerChoice();

}

// Output computer choice (temp)
console.log(getComputerChoice());


// Round - playerSelection and computerSelection

// Game - Calls round function - play 5 rounds