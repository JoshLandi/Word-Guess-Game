//Global Variables
    //Arrays
    var wordOptions = ["buffalo", "hotsauce", "juicy", "habenaro", "delicious" ];
    var selectedWord = "";
    var lettersInWord = [];
    var numBlanks = 0;
    var blanksAndSuccesses = [];
    var wrongLetters = [];

    //Game Counters
    var winCount = 0;
    var lossCount = 0;
    var guessesLeft = 7;

//Functions

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    //Reset
    guessesLeft = 7;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    // Change HTML
    document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ")
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winTotal").innerHTML = winCount;
    document.getElementById("lossTotal").innerHTML = lossCount;

    //Testing
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

    function checkLetters(letter) {
        var isLetterInWord = false;

        for (var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                isLetterInWord = true;
            }
        }

        //Where letter exists in word
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    //Wrong Guess
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }
    console.log(blanksAndSuccesses);
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);
    //Update Html
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guessEntries").innerHTML = wrongLetters.join(" ");
    //Check for win
    if (lettersInWord.toString() == blanksAndSuccesses.toString()){
        winCount++;
        alert("That's some nice sauce you got there.");

        document.getElementById("winTotal").innerHTML = winCount;
        startGame();
    }
    //Check for loss
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You lose. No sauce for you!")
        document.getElementById("lossTotal").innerHTML = lossCount;

       startGame();
    }
}

//Main Process

// First code start
startGame();

// Key clicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    console.log(letterGuessed);
}
