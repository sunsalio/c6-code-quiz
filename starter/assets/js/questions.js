

var quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript file?",
        answers: ["<javascript>", "js", "<scripting>", "<script>"],
        correctAnswer: "<script>"
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: ["<head> section", "<body> section", "both"],
        correctAnswer: "both"
    },

    {
        question: "Arrays in JavaScript can be used to store",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "Is JavaScript case-sensitive",
        answers: ["yes", "no"],
        correctAnswer: "yes"
    },
    {
        question: "Can arrays store heterogeneous data?",
        answers: ["yes", "no"],
        correctAnswer: "no"
    },
];

// Export the questions array so it can be imported in the logic javascript file
export {quizQuestions};