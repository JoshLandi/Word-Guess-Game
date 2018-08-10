
var scriptTest = document.getElementById("scriptTest")

document.onkeyup = function(event) {

    scriptTest.textContent = event.key;
    console.log(scriptTest);

};