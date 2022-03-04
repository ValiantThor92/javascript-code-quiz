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
    [],
    [],
    [],
    [],
];

var answerArray = [
    [],
    [],
    [],
    [],
];

function startQuiz(){
    
}