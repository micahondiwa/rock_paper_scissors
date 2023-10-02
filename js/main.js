// A function that will randomly pick either 'Rock', 'Paper', or 'Scissors'.

function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

