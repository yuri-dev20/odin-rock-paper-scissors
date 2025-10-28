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
        return "Scissor";
    }
}

let getHumanChoice = () => {
    let humanChoice = prompt("Please enter a choice (Rock, Paper or Scissors)");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
}

console.log(getHumanChoice());

// function playRound(humanChoice, computerChoice) {
    
// }