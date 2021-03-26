import { isYes } from './utils.js';

// const randomButton = document.getElementById('random-button');
const playButton = document.getElementById('play-button');
const finalScore = document.getElementById('final-score');
const fact1 = document.getElementById('fact-1');
const fact2 = document.getElementById('fact-2');
const fact3 = document.getElementById('fact-3');

// event for changing different pics of capybara
// randomButton.addEventListener('click', () => {
// }

playButton.addEventListener('click', () => {
    alert('Welcome to the Capybara Quiz!');
    const name = prompt('What is your name?');
    const takeQuiz = confirm(`Hi ${name}! Would you like to take the quiz?`);
    if (!takeQuiz) {
        alert("It's okay! Come back when you're ready to play!");
        return;
    }

    let gameScore = 0;

    const firstAnswer = prompt('Are capybaras rodents?');
    const secondAnswer = prompt('Are capybaras social?');
    const thirdAnswer = prompt('Are capybaras a threatened species?');

    if (isYes(firstAnswer)) gameScore++;
    if (isYes(secondAnswer)) gameScore++;
    if (isYes(thirdAnswer)) gameScore++;

    if (gameScore === 0) {
        alert(`Oof! ${name}, you got ${gameScore} correct out of 3! Read the fun facts highlighted in yellow and come back later to try again!`);
    } else if (gameScore === 1) {
        alert(`Oof! ${name}, you got ${gameScore} correct out of 3! Read the fun facts highlighted in yellow and come back later to try again!`);
    } else if (gameScore === 2) {
        alert(`So close! ${name}, you got ${gameScore} correct out of 3! Read the fun fact highlighted in yellow and come back later to try to get that perfect score!`);
    } else {
        alert(`Wow ${name}! You really know your stuff! You got ${gameScore} correct out of 3!`);
    }

    if (!isYes(firstAnswer)) fact1.classList.add('fact-1');
    if (!isYes(secondAnswer)) fact2.classList.add('fact-2');
    if (!isYes(thirdAnswer)) fact3.classList.add('fact-3');

    const score = Math.round((gameScore / 3) * 100);
    finalScore.textContent = `You scored ${score}%`;
});
