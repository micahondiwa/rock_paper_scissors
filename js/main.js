// A function that will randomly pick either 'Rock', 'Paper', or 'Scissors'.

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

// a function that plays a single round
function playRound(playerSelection, computerSelection) {
    if ((computerSelection == 'rock'.toLowerCase() &&
        playerSelection == 'paper'.toLowerCase()) ||
        (computerSelection == 'paper'.toLowerCase() &&
            playerSelection == 'scissors'.toLowerCase()) ||
        (computerSelection == 'scissors'.toLowerCase() &&
            playerSelection == 'rock'.toLowerCase())) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if
        ((computerSelection == 'rock'.toLowerCase() &&
            playerSelection == 'scissors'.toLowerCase()) ||
        (computerSelection == 'paper'.toLowerCase() &&
            playerSelection == 'rock'.toLowerCase()) ||
        (computerSelection == 'scissors'.toLowerCase() &&
            playerSelection == 'paper'.toLowerCase())) {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
        return `You Draw!`;
    }
}
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

