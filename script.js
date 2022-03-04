console.log('Script linked correctly');

// Stores users guess
let answer = [
    's',
    't',
    'e',
    'r',
    'n'
]

let userInput = [];

let wordOneArr = [
    'wordOneCharOne',
    'wordOneCharTwo',
    'wordOneCharThree',
    'wordOneCharFour',
    'wordOneCharFive',
];

let wordTwoArr = [
    'wordTwoCharOne',
    'wordTwoCharTwo',
    'wordTwoCharThree',
    'wordTwoCharFour',
    'wordTwoCharFive',
];

let wordThreeArr = [
    'wordThreeCharOne',
    'wordThreeCharTwo',
    'wordThreeCharThree',
    'wordThreeCharFour',
    'wordThreeCharFive',
];

let wordFourArr = [
    'wordFourCharOne',
    'wordFourCharTwo',
    'wordFourCharThree',
    'wordFourCharFour',
    'wordFourCharFive',
];

let wordFiveArr = [
    'wordFiveCharOne',
    'wordFiveCharTwo',
    'wordFiveCharThree',
    'wordFiveCharFour',
    'wordFiveCharFive',
];

let wordSixArr = [
    'wordSixCharOne',
    'wordSixCharTwo',
    'wordSixCharThree',
    'wordSixCharFour',
    'wordSixCharFive',
];

let userGuessWord = [
    wordOneArr,
    wordTwoArr,
    wordThreeArr,
    wordFourArr,
    wordFiveArr,
    wordSixArr,
];

let letterPosition = 0;
let userAttempts = 0;
let userGuessPosition = userGuessWord[userAttempts];
let userSuccess;
let j = 0;


// Change HTML based on correctness
function changeLetters(testCondition) {
    document.getElementById(userGuessPosition[j]).classList.add(testCondition);
    document.getElementById(userGuessPosition[j]).classList.remove("children-border");
}

// Logic checks of users guess
function checkLetters() {
    if(userInput.length != answer.length) {
        alert('Not enough letters');
        return false;
    } else {
        do {
            let guessCheck = (userInput[j] === answer[j]) ? changeLetters("correct"):
                             (answer.indexOf(userInput[j]) !== -1) ? changeLetters("in-word"):
                             changeLetters("incorrect");

            j++;
            
        } while (j < 5);

    j = 0;
    }
}

function checkAnswer() {
    for (let i = 0; i < answer.length; i++) {
        if (userInput[i] !== answer[i]) {
            userSuccess = false;
        } else {
            userSuccess = true;
        }
    }
}

// DOM manipulation of users guess
function changeUserInput(event) {
    if (event.key === 'Backspace') {
        userInput.pop(letterPosition - 1);
    } else if (event.key === 'Enter') {
        return false;
    } else {
        userInput.push(event.key);
    }
}

function logKey(event) {
    if (event.key === 'Backspace') {
        document.getElementById(userGuessPosition[letterPosition - 1]).innerHTML = '';
        letterPosition--;
    } else if (event.key === 'Enter') {
        checkAnswer();
        checkLetters();
        userInput.length = 0;
        userAttempts++;
        letterPosition = 0;
        if (userAttempts === 6) {
            document.getElementById("wordReveal").innerHTML = "The word was stern";
        }
    } else {
        document.getElementById(userGuessPosition[letterPosition]).innerHTML = userInput[letterPosition];
        letterPosition++;
    }
}

window.onkeydown = userKeyPress;

function userKeyPress(event) {
    changeUserInput(event);
    logKey(event);
    userGuessPosition = userGuessWord[userAttempts];
}