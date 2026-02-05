/**
 * Author: Lincoln Bunker
 * Date: 3 February 2026
 * Purpose: Console Quiz Challenge
 */

"use strict";

//create quiz questions and their correct answers
//website of help that I used: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
let quiz = [
    {
        question: "1. What is the main purpose of a climbing harness?",
        answers: [
            'a. To improve grip',
            'b. To attach the climber safely to the rope',
            'c. To help climb faster',
            'd. To protect hands from dirt'
        ],
        correctAnswer: 'b'
    },
    {
        question: "2. What is chalk mainly used for in climbing?",
        answers: [
            'a. To mark the route',
            'b. To warm up muscles',
            'c. To protect the rocks',
            'd. To improve grip by drying hands'
        ],
        correctAnswer: 'd'
    },
    {
        question: "3. What does 'belaying' mean?",
        answers: [
            'a. Holding the rope for a climber',
            'b. Setting up climbing routes',
            'c. Climbing without ropes',
            'd. Wearing safety gear'
        ],
        correctAnswer: 'a'
    },
    {
        question: "4. Which type of climbing is usually done on short walls without ropes?",
        answers: [
            'a. Ice Climbing',
            'b. Bouldering',
            'c. Sport Climbing',
            'd. Aid Climbing'
        ],
        correctAnswer: 'b'
    },
    {
        question: "5. What should a climber always do before starting a climb?",
        answers: [
            'a. Skip the warm-up',
            'b. Climb as fast as possible',
            'c. Check knots and safety systems',
            'd. Take off safety gear'
        ],
        correctAnswer: 'c'
    }
];

//Variable for counting correct answers
let correctCount = 0;

//Event listeners for Start Quiz and Restart Quiz Buttons:
document.getElementById('startQuiz').addEventListener('click', startQuiz);
document.getElementById('restartQuiz').addEventListener('click', restartQuiz);

//Start quiz
function startQuiz() {
    correctCount = 0 //set count to 0

    //loop through the quiz array
    for (let i = 0; i < quiz.length; i++) {
        //for each quiz question, call function for displaying questions and answers
        displayQuestion(quiz[i]);

        //for each quiz question, call function for getting input
        displayPrompt(quiz[i]);
        console.log(""); //space between questions
    }
    console.log('You scored ' + (correctCount / 5) * 100 + "%") //calculate the average

    //logic for end of quiz feedback
    if (correctCount === 5) {
        console.log('You scored full points! Nice Job!');
    } else if (correctCount === 4 || correctCount === 3 || correctCount === 2) {
        console.log("Keep at it, you'll get there!");
    } else {
        console.log("Study more! You got this!");
    }

}

//Restart quiz
function restartQuiz() {
    console.clear(); //clear the console
    correctCount = 0 //set count to 0
    startQuiz(); //re-call the startQuiz() function
}

//Create a function to display quiz questions one by one
function displayQuestion(question) {
    //display question
    console.log(question.question);

    //loop through the nexted 'answers', display each answer
    for (let i = 0; i < question.answers.length; i++) {
        console.log(question.answers[i]);
    }
}

//Create a function to prompt user to answer the current question
function displayPrompt(question) {
    let transformedInput; // need to declare this variable to prevent a 'null' error

    while (true) {
        try {
            let input = prompt("Enter your answer (a, b, c, d):");
            if (!input) throw "No input provided"; // user pressed cancel

            transformedInput = input.toLowerCase();

            //throw error if input is not a-d
            if (transformedInput !== 'a' && transformedInput !== 'b' && transformedInput !== 'c' && transformedInput !== 'd') {
                throw "Invalid input";
            }

            //input is valid, break to exit out
            break;

        } catch (error) {
            console.log("Error: " + error + ". Please type a, b, c, or d."); //display error to console
        }
    }

    //check if answer is correct, give feedback
    if (transformedInput === question.correctAnswer) {
        correctCount += 1;
        alert("You are correct! Good job.");
    } else {
        alert("Incorrect, study more next time!");
    }
}
