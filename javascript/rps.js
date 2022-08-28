// Rock Paper Scissors

// getComputerChoice - return rock, paper or scissors
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

console.log(getComputerChoice());


// Round - playerSelection and computerSelection

// Game - Calls round function - play 5 rounds