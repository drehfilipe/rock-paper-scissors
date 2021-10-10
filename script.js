// Create function for the computer, should randomly return either rock, paper or scissors
// Create function that plays a single round, should take 2 parameters - the player and computer selection. Then return the winner.
// Join all functions inside a new function called game, this should play 5 rounds keeping score and report who wins or loses.

let choices = ["rock", "paper", "scissors"];
let humanCounter = 0;
let computerCounter = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerPlay() {
    return prompt("Select rock, paper or scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerPlay();

    //Round Rules
    if (playerSelection === computerSelection) {
        return "it's a draw";
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        humanCounter += 1;
        return "You win! Rock beat Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        humanCounter += 1;
        return "You win! Scissors beat Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        humanCounter += 1;
        return "You win! Paper beat Rock";
    } else if (!playerSelection){
        return "Please select your move"
    } else if (!(playerSelection == "rock" || playerSelection == "scissors" || playerSelection == "paper")){
        return "Invalid value"
    }else {
        computerCounter += 1;
        return "You lose! " + computerSelection + " beat " + playerSelection;
    }
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
        console.log("Human Score: " + humanCounter + " | Computer Score " + computerCounter) ;
    }

    if (humanCounter > computerCounter) {
        humanCounter = 0;
        computerCounter = 0;
        return "You win the game!"
    } else if (computerCounter > humanCounter) {
        humanCounter = 0;
        computerCounter = 0;
        return "Computer win the game!"
    } else {
        humanCounter = 0;
        computerCounter = 0;
        return "It's a Tie!"
    }
    
}