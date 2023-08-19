const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remaingingGuessesSpan = document.querySelector("span");
const message = document.querySelector(".message");
const playAgain = document.querySelector("play-again");
const word = "magnolia";

const proxyLetters = function (word) {
    const correctLetters = [];
    for (const letter of word) {
        console.log(letter);
        correctLetters.push("●");
}

wordInProgress.innerText = correctLetters.join("");

};

proxyLetters(word);

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const attempt = letterInput.value;
    console.log(attempt);
    letterInput.value = "";
});
