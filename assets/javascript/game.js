// Potential words to guess.
var wordOptions = ["Buffalo", "Hot Sauce", "Juicy", "Mango Habenaro", "Delicious" ]

// Player's max amount of guesses
const MaxTries = 10

// Logging player letter entry.
var letterEntry = document.getElementById("letterEntry")

document.onkeyup = function(event) {

    letterEntry.textContent = event.key;
    console.log(letterEntry);

};
