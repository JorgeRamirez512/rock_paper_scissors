// Create a container div for the game
const div = document.createElement('div');
document.body.appendChild(div);

// Create a result display element 
const resultDisplay = document.createElement('p')
div.appendChild(resultDisplay);

// Create button element for rock
const rock = document.createElement('button');
const rockImg = document.createElement('img')
// set the scr and alt attributes of the 'rock' svg image to the rock button
rock.src = "/svgimages/rock.svg";
rockImg.alt = "Rock";
// Set the SVG image as the content of the 'rock' button
rock.innerHTML = '<img src="/svgimages/rock.svg" alt="Rock">';


// Create button elements for paper
const paper = document.createElement('button');
const paperImg = document.createElement('img')
// set the scr and alt attributes of the 'paper' svg image to the paper button
paper.src = "/svgimages/paperplane.svg";
paper.alt = "Paper plane";
// Set the SVG image as the content of the 'rock' button
paper.innerHTML = '<img src="/svgimages/paperplane.svg" alt="Paper plane">';


// Create button elements for scissors
const scissors = document.createElement('button');
const scissorImg = document.createElement('img')
// set the scr and alt attributes of the 'scissors' svg image to the paper button
scissors.src = "/svgimages/scissors.svg";
scissors.alt = "scissors";
// Set the SVG image as the content of the 'rock' button
scissors.innerHTML = '<img src="/svgimages/scissors.svg" alt="scissors">';


// Append the buttons to the container div
div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);


// Variables for player and computer scores
let playerScore = 0;
let computerScore = 0; 
let result;


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

    // Capitalize the first letter of the player's choice
    const formattedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    // Capitalize the first letter of the computer's choice
    const formattedComputerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    // Check conditions for each outcome and return the result
    if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        playerScore++;
        result = `${win} ${formattedPlayerSelection} beats ${computerSelection}`;
    } else if (playerSelection == computerSelection) {
        return tie;
    } else if (
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")
    ) {
        computerScore++
        result =  `${lose} ${formattedComputerSelection} beats ${playerSelection}`;
    }

    return result
}



// Function to display the result in the DOM
function displayResult(result) {
    resultDisplay.textContent = `${result} | Player: ${playerScore} | Computer: ${computerScore}`;
    checkwinner();
}


// Function to check for a winner
function checkwinner() {
    if (playerScore === 5) {
        alert("Congradulations! You win the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Computer wins. Better luck next time!");
        resetGame();
    }
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultDisplay.textContent = "Game reset. Click a button to play again.";
}

// Event listener for the 'rock' button
rock.addEventListener('click', function() {
    // Call playRound with 'rock' as playerSelection and getComputerChoice() for computerSelection
    displayResult(playRound('rock', getComputerChoice()));
});

// Event listener for the 'paper' button
paper.addEventListener('click', function() {
    // Call playRound with 'paper' as playerSelection and getComputerChoice() for computerSelection
    displayResult(playRound('paper', getComputerChoice()));
});

// Event listener for the 'scissors' button
scissors.addEventListener('click', function() {
    // Call playRound with 'scissors' as playerSelection and getComputerChoice() for computerSelection
    displayResult(playRound('scissors', getComputerChoice()));
});

