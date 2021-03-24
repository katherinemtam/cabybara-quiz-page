import { isYes } from './utils.js';

const randomButton = document.getElementById('random-button')
const playButton = document.getElementById('play-button');
const finalScore = document.getElementById('final-score');

randomButton.addEventListener('click', () => {
    
}


playButton.addEventListener('click', () => {
    alert('Welcome to the Capybara Quiz!');
    const takeQuiz = confirm('Would you like to take the quiz?');
    if (!takeQuiz) {
    alert("It's okay! Come back when you're ready to play!");
    return;
    }
    const name = prompt('What is your name?');
    console.log(name);
    let gameScore = 0;

    const firstAnswer = prompt('Are capybaras rodents?');
    const secondAnswer = prompt('Are capybaras social?');
    const thirdAnswer = prompt('Are capybaras a threatened species?');

    if(isYes(firstAnswer)) gameScore++;
    if(isYes(secondAnswer)) gameScore++;
    if(isYes(thirdAnswer)) gameScore++;
    console.log(gameScore);

    const scoreMessage = `${name}, you got ${gameScore} correct out of 3!`;
    console.log(scoreMessage);
    finalScore.textContent = scoreMessage;
})