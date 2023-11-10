
var startScreen = document.getElementById("start-screen");
var timerEl = document.getElementById("time");
var questionsContainer = document.getElementById("questions");
var submitButton = document.getElementById("submit");
// create variable for start button
var startButton = document.getElementById("start");

// Add an evenlistener to the start quiz button

startButton.addEventListener("click", startQuiz);

// Add another event listener so that when the submit button is clicked the score is saved

submitButton.addEventListener("click", setTimer);

// set initial time variable
var timeLeft = 60;
// current question variable that equals to zero
var currentQuestionIndex = 0;
var timerInterval;

// Write the startquiz function that will run  when start button is clicked

function startQuiz() {
//    start screen needs to disappear and 
    startButton.style.display = "none";
//    set interval 
    var timerInterval = setInterval(function () {
//    time should be decreasing
        timeLeft--;
//    updates time left       
        timerEl.textContent = timeLeft;
//  if statement so if time left is equal to 0 or question index reaches .length the quiz ends ->function
        if (timeLeft <= 0 || currentQuestionIndex === quizQuestions.length) {
            endQuiz();
        }
//   time decreases every 1000 ms
    }, 1000);
// call function that shows questions
    showQuestion();
}


// function that displays a question
function showQuestion() {
    // retieve current question, its answers and the correct answer from the questions array
        var currentQuestion = quizQuestions[currentQuestionIndex];
        questionsContainer.classList.remove("hide");
    // SHows current question's title
        document.getElementById("question-title").textContent = currentQuestion.question;
    //   remove choices from prev questions
        choicesContainer.innerHTML = "";
    //   for loop that creates button for each answer choice
        for (var i = 0; i < currentQuestion.answers.length; i++) {
            var choiceButton = document.createElement("button");
            choiceButton.textContent = currentQuestion.answers[i];
    
        }
    }



// function that checks answer
//  store user selected answer
//  correct answer
//  if statement that compares selected anser to correct answer
//  if incorrect - 10 seconds
//  move to next question


// function that ends quiz 
//   stop the timer by clearinterval
//   hide the questions from screen
//   show end screen
//   time left is the score 
//   save users intials and score
//   

// function that saves score
//   initialise array to save high scores  = empty array
//   addd new score
//   save highscore to local storage


// function that displays highscore
//   establish container for highscore
//   clear existingcontent
//   retieve highscore from local storage