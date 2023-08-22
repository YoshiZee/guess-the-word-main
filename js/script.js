const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remaingingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector("play-again");

const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
}

wordInProgress.innerText = placeholderLetters.join("");

};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const attempt = letterInput.value;
    const validGuess = inputValidation(attempt);

    if (validGuess) {
        makeGuess(attempt);
    }

    letterInput.value = "";
});

const inputValidation = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please input a single letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    }
};

const makeGuess = function (attempt) {
    attempt = attempt.toUpperCase();
    if (guessedLetters.includes(attempt)) {
        message.innerText = "You already guessed that letter, silly. Try again.";
    } else {
        guessedLetters.push(attempt);
        console.log(guessedLetters);
    }
};