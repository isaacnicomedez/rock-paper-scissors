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

function playRound() {

}

function getHumanChoice() {
    const choiceValue = prompt(`Choose (Rock / Paper / Scissors): `);
    return choiceValue;
}

getHumanChoice;
console.log(getComputerChoice());