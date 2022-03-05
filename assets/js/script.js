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
    ["<scripting>", "<javascript>", "<script>", "<js>"],
    ["The <head> section", "both the <head> section and the <body> section are correct", "the <body> section", "A <p> element"],
    ["<script name=`xxx.js`", "<script src=`xxx.js`>", "<script href=`xxx.js`>", "<script rel=`xxx.js`"],
    ["true", "false"],
];

var countdown;
var timer = 120;
var q = 0;
var game = false;
var playerScore;

function startQuiz(){
    if(!game){
    highScoreBtn.setAttribute("style", "display: none");
    game = true;
    q = 0;
    timer = 120;
    startBtn.setAttribute("style", "display: none");
    quizForm.setAttribute("style", "display: inline");
    timerDisplay.textContent = timer;
    startTimer();
    }


}