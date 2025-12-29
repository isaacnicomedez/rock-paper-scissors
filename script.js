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

console.log(getComputerChoice());