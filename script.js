let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById('submit');
const userInput = document.getElementById('guessField')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const Para = document.createElement('p');

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    });
}

function validateGuess(guess) {

    if (isNaN(guess)) {
        alert('Please enter a Valid Number')
    } else if (guess < 1) {
        alert('Please enter a Valid Number more than 1')
    } else if (guess > 100) {
        alert('Please enter a Valid Number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over... Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {

    if (guess === randomNumber) {
        displayMessage(`Your guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is too Low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is too High`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {

    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function endGame() {

    userInput.value = ''
    userInput.setAttribute('disabled', '')
    Para.classList.add('button')
    Para.innerHTML = `<h3 id="newGame">Start New Game</h3>`;
    Para.style.cursor = 'pointer'
    StartOver.appendChild(Para)
    playGame = false;
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        StartOver.removeChild(Para)
        playGame = true;
    })
}

