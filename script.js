// Pseudo code
// Create function for the computer, should randomly return either rock, paper or scissors
// Create function that plays a single round, should take 2 parameters - the player and computer selection. Then return the winner.
// Join all functions inside a new function called game, this should play 5 rounds keeping score and report who wins or loses.

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLocaleLowerCase();
    console.log("computer plays " + computerSelection)
    playerSelection = prompt("Select rock, paper or scissors").toLocaleLowerCase();

    if (playerSelection === computerSelection) {
        alert("it's a draw")
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        alert("You win! Rock beats Scissors")
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert("You win! Scissors beat Paper")
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("You win! Paper beat rock")
    } else {
        alert ("You lose! " + computerSelection + " beat " + playerSelection)
    }
}

function game() {

}