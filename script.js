let playerSelection = prompt("rock, paper, or scissor?").toLowerCase();
let computerSelection = getComputerChoice();

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomItem = choices[Math.floor(Math.random() * choices.length)];
    return randomItem;
}

function playRound(playerSelection, computerSelection) {
    let win = "You win!";
    let lose = "You lose.";
    let tie = "Tie.";

    if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return `${win} ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == computerSelection) {
        return tie;
    } else if (
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")
    ) {
        return `${lose} Computer selected ${computerSelection}`;
    } else if (!["rock", "paper", "scissors"].includes(playerSelection)) {
        return "You selected an invalid choice";
    }
}

console.log(playRound(playerSelection, computerSelection));
