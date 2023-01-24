let maximum = parseInt(prompt('Please enter a value between 1 to 100'));
while (!maximum || maximum < 1 || maximum > 100) {
    maximum = parseInt(prompt('Try again!  Please enter a valid number [1-100]:'));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt(`Enter your first guess, from 1-${maximum} or use "q" to quit!`);
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum)
        guess = prompt(`Too high!  Enter a new guess from 1-${maximum}`);
    else
        guess = prompt(`Too low.  Enter a new guess in the range 1-${maximum}:`);
}

if (guess === 'q') {
    console.log('Okay, quitter!');
} else {
    console.log('A winner is you!');
    console.log(`You took ${attempts} guesses to get it!`);
}