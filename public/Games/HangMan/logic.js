// Arrays and variables for holding data
var wordOptions = ["luffy", "ace", "zoro", "whitebeard", "blackbeard", "shanks", "akainu", "kaido", "usopp", "kuzan", "jinbe", "garp", "arlong", "enel", "rayleigh", "fujitora", "vivi", "crocodile", "buggy", "smoker", "law", "kuma", "doflamingo", "kizaru", "crocodile", "hatchan", "wapol", "smoker", "brook", "nami", "chopper", "sanji", "franky", "robin", "sabo", "sengoku", "coby", "boa", "aokiji", "mihawk", ];

var selectedWord = " ";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; //------
var wrongLetters = [];
//game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Function (reuseable blocks of code that I will/callupon when needed)
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Populate blanks and successes with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    //Change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    //Testing
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses)

}

function checkLetters(letter) {
    // check if letter exist in code at all

    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    // check where in the word the letter exists, the populate out blanksAndSuccesses array
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }

    console.log(blanksAndSuccesses);

}

function roundComplete() {
    console.log("Win Count: " + winCount + "|Loss Count: " + lossCount + "|Guesses Left: " + guessesLeft);

    //Update the HTML to reflect the most recent count stats
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");
    //Check if user wins
    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("YOu Won! The word was " + selectedWord);
        // Update the win COunter in the HTML
        document.getElementById("winCounter").innerHTML = winCount;
        startGame();
        
    }
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You Lost! Unfortunately, the word was "+ selectedWord);

        //Update the HTML
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
        
    }

}


//MainProcess
// ----------------------------------------

// Initiates the code the first time
startGame();

// Register key clicks
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    // testing// debugging
    console.log(letterGuessed);
}