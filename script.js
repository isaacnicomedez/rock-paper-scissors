let humanScore = 0; 
let computerScore = 0;
let ties = 0;

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
    let choiceValue = prompt(`Choose (Rock / Paper / Scissors): `);
    choiceValue = choiceValue.toLowerCase();
    return choiceValue;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        ties++;
        return `Tie!\nBoth move is ${computerChoice}!`;
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            humanScore++;
            return `You win!\n${humanChoice} beats ${computerChoice}!`;
        } else {
            computerScore++;
            return `You lose.\n${computerChoice} beats ${humanChoice}.`;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            humanScore++;
            return `You win!\n${humanChoice} beats ${computerChoice}!`;
        } else {
            computerScore++;
            return `You lose.\n${computerChoice} beats ${humanChoice}.`;
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'paper') {
            humanScore++;
            return `You win!\n${humanChoice} beats ${computerChoice}!`;
        } else {
            computerScore++;
            return `You lose.\n${computerChoice} beats ${humanChoice}.`;
        }
    }
}

function playGame() {
    for (let i = 0; i < 10; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection,computerSelection));
    }
    console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}\nTies: ${ties}`);
}