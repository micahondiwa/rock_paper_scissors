/*
A function that will randomly pick either 
'Rock', 'Paper', or 'Scissors'.
*/
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() *
        options.length);
    return options[choice];
}

// A function that plays a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (
        (computerSelection === 'rock' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'rock')
    ) {
        return 'Player'; // Player wins
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        return 'Computer'; //Computer wins
    } else {
        return 'Draw'; //it is a draw
    }
}

// A function that plays 5 rounds and records a winner
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice: rock, paper, or scissors').
            toLowerCase();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        if (roundResult === 'Player') {
            playerScore++;
        } else if (roundResult === 'Computer') {
            computerScore++;
        }

        console.log(`Round ${i + 1}: ${roundResult}`);
    }

    if (playerScore > computerScore) {
        console.log('Player wins!');
    } else if (playerScore < computerScore) {
        console.log('Computer wins!');
    } else {
        console.log('It\'s a draw!');
    }
}

// Start the game
game();
