let humanScore = 2;
let computerScore = 5;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
};

generateTarget();

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

console.log(compareGuesses(humanScore, computerScore, generateTarget()));