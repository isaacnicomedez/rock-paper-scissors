let humanScore = computerScore = 0;

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
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection,computerSelection));