var startBtn = document.getElementById("start-quiz");
var quiz = document.getElementById("quiz");
var quizForm = document.getElementById("quiz-form");

var question = document.getElementById("question");
var userAnswer = document.getElementById("user-Answer");
var questions = document.getElementById("questions");

var timer = document.getElementById("timer");

var highScoreForm = document.getElementById("high-score-form");
var highScoreBtn = document.getElementById("high-score")

var allRadios = document.getElementById("answer");
var allLabels = document.getElementById("radios").querySelectorAll("label");

var endScreenHeader = document.createElement("h2");
var endScreen = document.createElement("p");

var restartBtn = document.createElement("button");
// set bootstrapping for the restart btn
restartBtn.setAttribute("class", "btn btn-outline-success");
// set type attribute for the restart btn
restartBtn.setAttribute("type", "button");

var questionArray = [
    "Inside which HTML element do we put the JavaScript?",
    "Where is the correct place to insert a JavaScript?",
    "What is the correct syntax for referring to an external script called `xxx.js`?",
    "The external JavaScript file must contain the <script> tag."
];

var answerArray = [
    ["<scripting>", "<javascript>", "<script>", "<js>", "</script>"],
    ["The <head> section", "both the <head> section and the <body> section are correct", "the <body> section", "A <p> element", "the <body> section" ],
    ["<script name=`xxx.js`", "<script src=`xxx.js`>", "<script href=`xxx.js`>", "<script rel=`xxx.js`", "<script src=`xxx.js`>"],
    ["true", "false", "false"],
];

var countdown;
var timer = 120;
var q = 0;
var game = false;
var playerScore;

function startQuiz() {

    if(!game) {
        highScoreBtn.setAttribute("style", "display: none");
        game = true;
        q = 0;
        timer = 120;

        startBtn.setAttribute("style", "display: none");
        quizForm.setAttribute("style", "display: inline");
        timerDisplay.textContent = timer;

        startTimer();
    }
    
    if(q < questionArray.length) {

        question.textContent = questionArray[q];

        for(var i=0; i < allRadios.length; i++) {
            allLabels.item(i).textContent = answerArray[q][i];
            if(answerArray[q][i] === answerArray[q][4]) {
                allRadios.item(i).setAttribute("value", "correct");
            }
            
            else {
                allRadios.item(i).setAttribute("value", "incorrect");
            }

        }

        userAnswer.addEventListener("click", checkAnswer);

    }

    else {
        endGame(true);
    }

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