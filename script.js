const btns = document.querySelectorAll("button");

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

let getHumanChoice = () => {
    let humanChoice = prompt("Please enter a choice (Rock, Paper or Scissors)");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
}

function playRound(humanChoice, computerChoice) {
    // Rock segment   
    if (computerChoice === "Rock" && humanChoice === "Scissors") {
        computerScore++;
        console.log(`The computer won! Rock beats Scissors.`);

    } else if (computerChoice === "Rock" && humanChoice === "Paper") {
        humanScore++;
        console.log(`The human won! Paper beats Rock.`);
        
    } else if (computerChoice === "Rock" && humanChoice === "Rock") {
        console.log(`It's a tie! The computer and the human choose Rock.`);

    // Paper segment
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        computerScore++;
        console.log(`The computer won! Paper beats Rock.`);

    } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
        humanScore++;
        console.log(`The human won! Scissors beats Paper.`);

    } else if (computerChoice === "Paper" && humanChoice === "Paper") {
        console.log(`It's a tie! The computer and the human choose Paper.`);

    } 

    // Scissors segment
    else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;
        console.log(`The computer won! Scissors beats Paper.`);

    } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
        humanScore++;
        console.log(`The human won! Rock beats Scissors.`);
        
    } else {
        console.log(`It's a tie! The computer and the human choose Scissors.`);
    }
}

function playGame(round) {
    // for (let i = 0; i < 5; i++) {
    //     round(getHumanChoice(), getComputerChoice());
    // }

    // if (humanScore > computerScore){
    //     console.log(`Human won! \n Human score: ${humanScore} \n Computer score: ${computerScore}`)
    // } else {
    //     console.log(`Computer won! \n Human score: ${humanScore} \n Computer score: ${computerScore}`)
    // }
    console.log("Play Game function!")
}

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.target.textContent);
    });
});

playGame(playRound);