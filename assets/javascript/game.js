// Potential words to guess.
var wordOptions = ["Buffalo", "Hot Sauce", "Juicy", "Mango Habenaro", "Delicious" ]


// Logging player letter entry.
var letterEntry = document.getElementById("letterEntry")

document.onkeyup = function(event) {

    letterEntry.textContent = event.key;
    console.log(letterEntry);

};