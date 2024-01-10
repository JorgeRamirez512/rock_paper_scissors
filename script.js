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


const rock = document.createElement('button');
rock.textContent = 'Rock';

const paper = document.createElement('button');
paper.textContent = 'Paper';

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

// Event listener for the 'rock' button
rock.addEventListener('click', function() {
    // Call playRound with 'rock' as playerSelection and getComputerChoice() for computerSelection
    console.log(playRound('rock', getComputerChoice()));
});

// Event listener for the 'paper' button
paper.addEventListener('click', function() {
    // Call playRound with 'paper' as playerSelection and getComputerChoice() for computerSelection
    console.log(playRound('paper', getComputerChoice()));
});

// Event listener for the 'scissors' button
scissors.addEventListener('click', function() {
    // Call playRound with 'scissors' as playerSelection and getComputerChoice() for computerSelection
    console.log(playRound('scissors', getComputerChoice()));
});


// Call the function to play the game
playGame();
// Display "Done" when the game is finished
alert("Done");
