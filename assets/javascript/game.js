// Potential words to guess.
var wordOptions = ["Buffalo", "Hot Sauce", "Juicy", "Mango Habenaro", "Delicious" ];

// Player's max amount of guesses.
const MaxTries = 6;

// Stored guessed letters.
var guessEntries = [];        

// Index of the current word in the array.
var currentWordIndex;    

// Built word to match current word.
var wordToGuess = [];          

// Remaining tries for the player.
var remainingTries = 0;       

// Flag to tell if the game has started.
var startedGame = false;     

// Var for 'press any key to try again' 
var hasFinished = false;        

// Amount player has won.
var wins = 0;                   


function restart() {
    remainingTries = MaxTries;
    startedGame = false;

    currentWordIndex = Math.floor(Math.random() * wordOptions.length);

    guessEntries = [];
    wordToGuess = [];

    for (var i = 0; i < wordOptions[currentWordIndex].length; i++) {
        wordToGuess.push("_");
    }

    document.getElementById("pressKeyTryAgain").style.cssText= "display: none";

    updateDisplay();
}

// Logging player letter entry.
var letterEntry = document.getElementById("letterEntry")

document.onkeyup = function(event) {

    letterEntry.textContent = event.key;
    console.log(letterEntry);

};


