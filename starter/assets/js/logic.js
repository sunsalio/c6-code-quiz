var startScreen = document.getElementById("#start-screen");

var questionsDiv = document.getElementById("#questions");

// create variable for start button

var startButton = document.getElementById("#start");

// Add an evenlistener to the start quiz button

startButton.addEventListener("click", startQuiz);

// Add another event listener so that when the submit button is clicked the score is saved
var submitButton = document.getElementById("#submit");
submitButton.addEventListener("click", setTimer);

// set initial time variable
// current question variable that equals to zero

// Write the startquiz function that will run  when start button is clicked

function startQuiz() {

}
//    start screen needs to disappear and 

//    set interval
//    time should be decreasing
//    updates time left
//    text that shows time left

//  if statement so if time left is equal to 0 or question index reaches .length the quiz ends ->function
//   time decreases every 1000 ms
// call function that shows questions



// function that displays a question
//   retieve current question, its answers and the correct answer from the questions array
//   remove choices from prev questions
//   for loop that creates button for each anser choice




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