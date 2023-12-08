// Function to get the player's choice, ensuring it's valid
function getPlayerChoice() {
    // Valid choices for the game
    let validChoices = ["rock", "paper", "scissors"];
    // Prompt the user for their choice and convert it to lowercase
    let playerChoice = prompt("rock, paper, or scissor?").toLowerCase();

    // Keep prompting until a valid choice is entered
    while (!validChoices.includes(playerChoice)) {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        playerChoice = prompt("rock, paper, or scissor?").toLowerCase();
    }

    // Return the valid player's choice
    return playerChoice;
}

// Function to get the computer's random choice
function getComputerChoice() {
    // Choices available to the computer
    let choices = ["rock", "paper", "scissors"];
    // Randomly select a choice from the array
    let randomItem = choices[Math.floor(Math.random() * choices.length)];
    // Return the computer's choice
    return randomItem;
}

// Function to determine the result of a single round
function playRound(playerSelection, computerSelection) {
    // Possible outcomes
    let win = "You win!";
    let lose = "You lose.";
    let tie = "Tie.";

    // Check conditions for each outcome and return the result
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

// Function to play the game for a specified number of rounds
function playGame() {
    // Loop for 5 rounds
    for (let i = 0; i < 5; i++) {
        // Get player and computer choices
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        // Display the result of the round
        alert(playRound(playerSelection, computerSelection));
    }
}

// Call the function to play the game
playGame();
// Display "Done" when the game is finished
alert("Done");
