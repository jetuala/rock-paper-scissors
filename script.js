// variables
let playerScore = 0;
let computerScore = 0;
let currentPlayer = "";
let rockBtn = document.getElementById("Rock");
let paperBtn = document.getElementById("Paper");
let scissorsBtn = document.getElementById("Scissors");
let playerScoreSpan = document.getElementById("playerScore");
let computerScoreSpan = document.getElementById("computerScore");
let chooseFighter = document.getElementById("chooseFighter");

// event listeners
// fighters
    document.getElementById("ryu").addEventListener("click", function() {
        let currentPlayer = "ryu";
        closeModal(currentPlayer);
    })
    document.getElementById("ken").addEventListener("click", function() {
        let currentPlayer = "ken";
        closeModal(currentPlayer);
    })
    document.getElementById("chunli").addEventListener("click", function() {
        let currentPlayer = "chunli";
        closeModal(currentPlayer);
    })
// buttons
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

// Determines opponent
function opponent() {
    opponents = ["vega", "sagat", "mbison"];
    let randomThree = Math.floor(Math.random() * opponents.length);
    return opponents[randomThree];
}

// Displays score
function displayScore(playerScore, computerScore) {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

// Open modal window
function openModal() {
    chooseFighter.style.display = "block";
}

// Close modal window & set backgrounds
function closeModal(currentPlayer) {
    chooseFighter.style.display = "none";
    document.getElementById("background").style.display = "block";
    document.getElementById("playerBackgroundImg").src = "graphics/" + currentPlayer + "-background.png";
    document.getElementById("opponentBackgroundImg").src = "graphics/" + opponent() + "-background.png";
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
    if (confirm("Welcome to Rock Paper Scissors: Street Fighter Edition! Start a new game?")) {
        playerScore = 0;
        computerScore = 0;
        playerScoreSpan.textContent = 0;
        computerScoreSpan.textContent = 0;
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
        openModal();
    } else {
        alert("....Why are you here then?")
    }

}

// Game command
game();