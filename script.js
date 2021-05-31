// variables
let playerScore = 0;
let computerScore = 0;

// Determines computer choice
function computerPlay() {
    compChoices = ["Rock", "Paper", "Scissors"];
    let randomThree = Math.floor(Math.random() * 3);
    return compChoices[randomThree];
}

// Displays score
function displayScore(playerScore, computerScore) {
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
}

// Determines player choice
function playerPlay() {
    let playerChoice = "";
    let choice = false;
    do {
        playerChoice = prompt("Please enter Rock, Paper, or Scissors!");
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        if (playerChoice == "Rock" || playerChoice == "Paper" || playerChoice == "Scissors") {
            choice = true;
        }
    } 
    while (choice === false)
    return playerChoice;
}

// Compares player and computer choice and determines winner of a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock") {
            playerScore++;
            alert(`Congrats! ${playerSelection} beats ${computerSelection}!`)
            displayScore(playerScore, computerScore);
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Scissors" && computerSelection === "Rock" ||
        playerSelection === "Paper" && computerSelection === "Scissors") {
            computerScore++;
            alert(`Sorry! ${computerSelection} beats ${playerSelection}.`)
            displayScore(playerScore, computerScore);
    } else {
        alert (`It's a tie!`)
        displayScore(playerScore, computerScore);
    }
}

// Game logic
function game() {
    do {
        let player = playerPlay();
        let computer = computerPlay();
        playRound(player, computer);
    } while (playerScore < 5 && computerScore < 5)
    if (playerScore > computerScore) {
        alert("Congrats! You won!")
    } else {
        alert("Sorry! You lost!")
    }
}

// Game command
game();