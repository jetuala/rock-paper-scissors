// variables
let playerScore = 0;
let computerScore = 0;
let rockBtn = document.getElementById("Rock");
let paperBtn = document.getElementById("Paper");
let scissorsBtn = document.getElementById("Scissors");
let playerScoreSpan = document.getElementById("playerScore");
let computerScoreSpan = document.getElementById("computerScore");

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
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

// Compares player and computer choice and determines winner of a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock") {
            playerScore++;
            alert(`Congrats! ${playerSelection} beats ${computerSelection}!`)
            displayScore(playerScore, computerScore);
            if (playerScore === 5) {
                alert("Congrats! You won this game!");
                game();
            }
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Scissors" && computerSelection === "Rock" ||
        playerSelection === "Paper" && computerSelection === "Scissors") {
            computerScore++;
            alert(`Sorry! ${computerSelection} beats ${playerSelection}.`)
            displayScore(playerScore, computerScore);
            if (computerScore === 5) {
                alert("Sorry, you lost this game!");
                game();
            }
    } else {
        alert (`It's a tie!`)
        displayScore(playerScore, computerScore);
    }
}

// Game logic
function game() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    if (confirm("Welcome to Rock Paper Scissors! Start a new game?")) {
        playerScore = 0;
        computerScore = 0;
        playerScoreSpan.textContent = 0;
        computerScoreSpan.textContent = 0;
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
    } else {
        alert("....Why are you here then?")
    }

}

// Game command
game();