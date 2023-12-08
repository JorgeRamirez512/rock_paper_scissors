function getPlayerChoice() {
    let validChoices = ["rock", "paper", "scissors"];
    let playerChoice = prompt("rock, paper, or scissor?").toLowerCase();

    while (!validChoices.includes(playerChoice)) {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        playerChoice = prompt("rock, paper, or scissor?").toLowerCase();
    }

    return playerChoice;
}



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
        return `${lose} ${computerSelection} beats ${playerSelection}`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }
}

playGame();
alert("Done")
