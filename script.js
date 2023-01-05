let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
};

function compareGuesses(human, computer, target) {
    if (Math.abs(human - target) > Math.abs(computer - target)) {
        return true;
    } else if (Math.abs(human - target) < Math.abs(computer - target)) {
        return false;
    } else if (Math.abs(human - target) === Math.abs(computer - target)) {
        return true;
    } else {
        console.log('Something went wrong.');
    };
};

console.log(compareGuesses(1, 3, generateTarget()));

function updateScore(winner) {
    if (winner === 'human') {
       return ++humanScore + `${winner}`;
    } else if (winner === 'computer') {
        return ++computerScore + `${winner}`;
    } else {
        console.log('Something went wrong.');
    };
};

console.log(updateScore('computer'));