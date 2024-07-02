let number = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let chances = 0;
let guess;

do {
    let input = prompt('Enter a number between 1 and 100');
    if (input === null) { // User pressed cancel
        alert('Game cancelled');
        break;
    }
    
    guess = parseInt(input, 10);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100');
        continue;
    }

    chances += 1;

    if (guess < number) {
        alert('Your guess is less than the number');
    } else if (guess > number) {
        alert('Your guess is greater than the number');
    } else {
        alert(`Your guess is correct, and the chances you took are ${chances}`);
    }
} while (guess !== number);
