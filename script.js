// variables
let playerScore = 0;
let computerScore = 0;
let rockBtn = document.getElementById("Rock");
let paperBtn = document.getElementById("Paper");
let scissorsBtn = document.getElementById("Scissors");

// event listeners
rockBtn.addEventListener("click", function() {
    playRound("Rock", computerPlay())
})
paperBtn.addEventListener("click", function() {
    playRound("Paper", computerPlay())
})
scissorsBtn.addEventListener("click", function() {
    playRound("Scissors", computerPlay())
})

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
    console.log("game() function called");
    if (playerScore > computerScore) {
        alert("Congrats! You won!")
    } else {
        alert("Sorry! You lost!")
    }
}

// Game command