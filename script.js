const btns = document.querySelectorAll("button");
const roundResults = document.querySelector("#roundResults")
const humanRoundScore = document.querySelector("#humanRoundScore")
const computerRoundScore = document.querySelector("#computerRoundScore")
const winner = document.querySelector("#winner")

let computerScore = 0;
let humanScore = 0;

let getComputerChoice = () => {
    // Returns either 0, 1 or 2
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        return "Rock";

    } else if (computerChoice == 1) {
        return "Paper";
    
    } else {
        return "Scissors";
    }
}

function checkWinner() {
    if (humanScore === 5) {
        winner.textContent = "You win!";
        computerScore = 0;
        humanScore = 0;
        humanRoundScore.textContent = `Human Score: ${humanScore}`
        computerRoundScore.textContent = `Computer Score: ${computerScore}`

    } else if (computerScore === 5) {
        winner.textContent = "The computer wins the game!";
        computerScore = 0;
        humanScore = 0;
        humanRoundScore.textContent = `Human Score: ${humanScore}`
        computerRoundScore.textContent = `Computer Score: ${computerScore}`
    }

}

function playRound(humanChoice, computerChoice) {
    // Rock segment   
    if (computerChoice === "Rock" && humanChoice === "Scissors") {
        computerScore++;
        computerRoundScore.textContent = `Computer Score: ${computerScore}`
        roundResults.textContent = "The computer won! Rock beats Scissors."

    } else if (computerChoice === "Rock" && humanChoice === "Paper") {
        humanScore++;
        humanRoundScore.textContent = `Human Score: ${humanScore}`
        roundResults.textContent = "The human won! Paper beats Rock."
        
    } else if (computerChoice === "Rock" && humanChoice === "Rock") {
        roundResults.textContent = "It's a tie! The computer and the human choose Rock."

    // Paper segment
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        computerScore++;
        computerRoundScore.textContent = `Computer Score: ${computerScore}`
        roundResults.textContent = "The computer won! Paper beats Rock."

    } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
        humanScore++;
        humanRoundScore.textContent = `Human Score: ${humanScore}`
        roundResults.textContent = "The human won! Scissors beats Paper."

    } else if (computerChoice === "Paper" && humanChoice === "Paper") {
        roundResults.textContent = "It's a tie! The computer and the human choose Paper."

    } 

    // Scissors segment
    else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;
        computerRoundScore.textContent = `Computer Score: ${computerScore}`
        roundResults.textContent = "The computer won! Scissors beats Paper."

    } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
        humanScore++;
        humanRoundScore.textContent = `Human Score: ${humanScore}`
        roundResults.textContent = "The human won! Rock beats Scissors."
        
    } else {
        roundResults.textContent = "It's a tie! The computer and the human choose Scissors."

    }

    checkWinner();
}

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        playRound(e.target.textContent, getComputerChoice());
    });
});
