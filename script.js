let humanScore = 0; 
let computerScore = 0;

function getComputerChoice() {
    const randomValue = Math.floor((Math.random() * 3));

    if (randomValue === 0 && randomValue < 1) {
        return 'rock';
    }
    else if (randomValue === 1 && randomValue < 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function getHumanChoice() {
    const choiceValue = prompt(`Choose (Rock / Paper / Scissors): `);
    return choiceValue;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); 
    
    if (humanChoice === computerChoice) {
        return "Tie!";
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            humanScore++;
            return "You win!";
        } else {
            computerScore++;
            return "You lose!";
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            humanScore++;
            return "You win!";
        } else {
            computerScore++;
            return "You lose!";
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'paper') {
            humanScore++;
            return "You win!";
        } else {
            computerScore++;
            return "You lose!";
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection,computerSelection));