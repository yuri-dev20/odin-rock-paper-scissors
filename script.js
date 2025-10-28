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
    return prompt("Please enter a choice (Rock, Paper or Scissors)");
}

