// A function that will randomly pick either 'Rock', 'Paper', or 'Scissors'.
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * options.length);
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
      return 'Player';
    } else if (
      (computerSelection === 'rock' && playerSelection === 'scissors') ||
      (computerSelection === 'paper' && playerSelection === 'rock') ||
      (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
      return 'Computer';
    } else {
      return 'Draw';
    }
  }
  
  // Get references to HTML elements
  const rockButton = document.getElementById('rock');
  const paperButton = document.getElementById('paper');
  const scissorsButton = document.getElementById('scissors');
  const scoreDisplay = document.getElementById('score');
  const winnerDisplay = document.getElementById('winner');
  
  let playerScore = 0;
  let computerScore = 0;
  
  // Function to update the score and check for a winner
  function updateScoreAndCheckWinner() {
    scoreDisplay.textContent = `Score: Player ${playerScore} - Computer ${computerScore}`;
    if (playerScore >= 5) {
      winnerDisplay.textContent = 'You Won!';
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;
    } else if (computerScore >= 5) {
      winnerDisplay.textContent = 'Computer Won!';
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;
    }
  }
  
  // Event listeners for the game buttons
  rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const roundResult = playRound('rock', computerSelection);
    if (roundResult === 'Player') {
      playerScore++;
    } else if (roundResult === 'Computer') {
      computerScore++;
    }
    updateScoreAndCheckWinner();
  });
  
  paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const roundResult = playRound('paper', computerSelection);
    if (roundResult === 'Player') {
      playerScore++;
    } else if (roundResult === 'Computer') {
      computerScore++;
    }
    updateScoreAndCheckWinner();
  });
  
  scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const roundResult = playRound('scissors', computerSelection);
    if (roundResult === 'Player') {
      playerScore++;
    } else if (roundResult === 'Computer') {
      computerScore++;
    }
    updateScoreAndCheckWinner();
  });
  