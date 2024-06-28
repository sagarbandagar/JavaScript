let number = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let chances = 0;
let guess;

do {
    guess = parseInt(prompt('Enter the number'), 10);
    chances += 1;

    if (guess < number) {
        console.log('Your guess is less than the number');
    } else if (guess > number) {
        console.log('Your guess is greater than the number');
    } else if (guess === number) {
        document.write(`Your guess is correct, and the chances you took are ${chances}`);
    }
} while (guess !== number);
