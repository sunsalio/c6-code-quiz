
var startScreen = document.getElementById("start-screen");
var timerEl = document.getElementById("time");
var questionsContainer = document.getElementById("questions");
var choicesContainer = document.getElementById("choices");
var feedbackContainer = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen");
var finalScoreEl = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
// create variable for start button
var startButton = document.getElementById("start");

// Add an evenlistener to the start quiz button

startButton.addEventListener("click", startQuiz);

// set initial time variable
var timeLeft = 60;
// current question variable that equals to zero
var currentQuestionIndex = 0;
var timerInterval;

// Write the startquiz function that will run  when start button is clicked

function startQuiz() {
//    start screen needs to disappear and 
    startScreen.style.display = "none";
//    set interval 
    timerInterval = setInterval(function () {
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
        choiceButton.addEventListener("click", checkAnswer);
        choicesContainer.appendChild(choiceButton);
    };
}



// function that checks answer
function checkAnswer(event) {
//  store user selected answer
    var selectedAnswer = event.target.textContent;
//  correct answer   
    var correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
//  if statement that compares selected anser to correct answer
    if (selectedAnswer === correctAnswer) {
        feedbackContainer.textContent = "Correct!";
//  if incorrect - 10 seconds
    } else {
        feedbackContainer.textContent = "Incorrect!";
        timeLeft -= 10;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex === quizQuestions.length) {
        endQuiz();
    } else {
//  move to next question        
        showQuestion();
    }
}



// function that ends quiz 
function endQuiz() {
//   stop the timer by clearinterval   
    clearInterval(timerInterval);
//   hide the questions from screen    
    questionsContainer.classList.add("hide");
//   show end screen
    endScreen.classList.remove("hide");
//   save users intials and score
    finalScoreEl.textContent = timeLeft;

    var initials = initialsInput.value;
    saveScore(initials, timeLeft);
}




// function that saves score
function saveScore() {
//   initialise array to save high scores  = empty array
    var highscores = [];
//   addd new score
    highscores.push({initials: initials, score: score});
//   save highscore to local storage
    localStorage.setItem("highscores", JSON.stringify(highscores));
}


//   save highscore to local storage


// function that displays highscore
//   establish container for highscore
//   clear existingcontent
//   retieve highscore from local storage