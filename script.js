let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 0;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
};

function compareGuesses(human, computer, target) {
    const humanDiff = Math.abs(human - target);
    const computerDiff = Math.abs(computer - target);

    if (humanDiff >= computerDiff) {
        return true;
    } else {
        return false;
    };
};

compareGuesses(1, 3, generateTarget());

function updateScore(winner) {
    if (winner === 'human') {
        ++humanScore;
    } else if (winner === 'computer') {
        ++computerScore;
    } else {
        console.log('Something went wrong.');
    };
};

updateScore('human');

function advanceRound() {
    currentRoundNumber += 1;
    return currentRoundNumber;
};

advanceRound();