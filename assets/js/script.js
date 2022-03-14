var startBtn = document.getElementById("start-quiz");
var cardPointer = document.getElementById("quiz");
var quizForm = document.getElementById("quiz-form");

var question = document.getElementById("question");
var userAnswer = document.getElementById("user-Answer");
var questions = document.getElementById("questions");

var timerDisplay = document.getElementById("timer");

var highScoreForm = document.getElementById("high-score-form");
var highScoreBtn = document.getElementById("high-score")




var endScreenHeader = document.createElement("h2");
var endScreen = document.createElement("p");

var restartBtn = document.createElement("button");
// set bootstrapping for the restart btn
restartBtn.setAttribute("class", "btn btn-outline-success");
// set type attribute for the restart btn
restartBtn.setAttribute("type", "button");

var questionArray = [

    {
        prompt: "Inside which HTML element do we put the JavaScript?",
        choices: ["<scripting>", "<javascript>", "<script>", "<js>"],
        answer: "<script>"
    },

    {
        prompt: "Where is the correct place to insert the JavaScript?",
        choices: ["The <head> section", "both the <head> section and the <body> section are correct", "the <body> section", "A <p> element"],
        answer: "the <body> section" 
    },

    {
        prompt: "What is the correct syntax for referring to an external script called `xxx.js`?",
        choices: ["<script name=`xxx.js`", "<script src=`xxx.js`>", "<script href=`xxx.js`>", "<script rel=`xxx.js`"],
        answer:  "<script src=`xxx.js`>"
    },

    {
        prompt: "The external JavaScript file must contain the <script> tag.",
        choices: ["true", "false"],
        answer: "false"
    }

];



var countdown;
var timer = 120;
var q = 0;
var game = false;
var playerScore;

var startQuiz = function() {



};

function endGame(win) {

    game = false;
    quizForm.setAttribute("style", "display: none");
    clearInterval(countdown);
    document.getElementById("timer-name").setAttribute("style", "display: none");

    if(win) {
        endScreenHeader.textContent = "Winner!";
        endScreen.textContent = "Your score is " + timer;
        document.getElementById("win").append(endScreenHeader);
        document.getElementById("win").append(endScreen);
        playerScore = timer;
        highScoreForm.setAttribute("style", "display: inline");
    }

    else {
        endScreenHeader.textContent = "Times up";
        endScreen.textContent = "try again to get the high score!";
        document.getElementById("win").append(endScreenHeader);
        document.getElementById("win").append(endScreen);
        playerScore = timer;
        highScoreForm.setAttribute("style", "display: inline");
    }

};

function checkAnswer() {

     //If the user's answer is correct, increment q and call the startQuiz main function, which will load the next question
    if(quizForm.answer.value === "correct") {
        q++;
        startQuiz();
    }

    else {
        timer -= 10;
        document.getElementById("user-answer").setAttribute("class", "btn btn-danger")

        var flashRed = setTimeout(function() {
            document.getElementById("user-answer").setAttribute("class", "btn btn-primary")

        }, 250)

    }

}

function startTimer() {

    countdown = setInterval(() => {
        timer--;
        timerDisplay.textContent = timer;

        if(timer <= 0) {
            clearInterval(countdown);
            timer = 0;
            timerDisplay.textContent = timer;
            endGame(false);

        }

    }, 1000);

}

function postScore() {
    // stores user input [key] and score [value] in local storage
    localStorage.setItem(highScoreForm.pname.value, playerScore);
    // reload page to try again or check highscores
    location.reload();
}

function loadHighScoreTable() {
    document.getElementById("timer-name").setAttribute("style", "display: none");

    // fetch scores from local storage
    var allHighScores = {...localStorage};
    var orderedHighScores = [];

    // for/in loop to iterate through the object properties and create key:value array
    for (var scores in allHighScores) {
        orderedHighScores.push([scores, allHighScores[scores]]);

    }

    // sorts scores in ascending order
    orderedHighScores.sort(function(a, b) {
        return a[1] - b[1];
    });

    // hide start and highScoreBtn
    startBtn.setAttribute("style", "display: none");
    highScoreBtn.setAttribute("style", "display: none");

    // append the high scores h2
    endScreenHeader.textContent = "High Scores";
    cardPointer.append(endScreenHeader);

    // initiate counter at 1
    var k = 1
    
    // iterate backwards to list highest first
    for(var i = orderedHighScores.length-1; i >= 0; i--) {

        // limits high score list to 5 inputs
        if(k < 6) {
            // create <p> element and add player name and score
            var j = document.createElement("p");
            j.textContent = k + orderedHighScores[i][0] + orderedHighScores[i][1];

             // add bootstrapping to <p> element
            j.setAttribute("class", "border m1 rounded border-success");
            //  append <p> element to high score table
            cardPointer.append(j);

            k++;

        }

    }

    restartBtn.textContent = "Go back";
    cardPointer.append(restartBtn);

}

// event listeners for highscore, start quiz btn, and restart button(or go back)

highScoreBtn.addEventListener("click", loadHighScoreTable);
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", function() {
    location.reload();

});

