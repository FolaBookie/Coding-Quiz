//Creating an array of the quiz questions
var questionsArray = [
  {
    question: "What does 'NaN' stand for in JavaScript?",
    options: [
      "Not a Name",
      "Not a Null",
      "Not a Number",
      "Neverending Analysis",
    ],
    answer: "Not a Number",
  },
  {
    question:
      "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["let", "var", "const", "static"],
    answer: "const",
  },
  {
    question:
      "What is the purpose of the 'splice()' method in JavaScript arrays?",
    options: [
      "To add elements to the beginning of an array",
      "To remove elements from an array",
      "To sort the elements of an array",
      "To join two arrays together",
    ],
    answer: "To remove elements from an array",
  },
  {
    question: "What does the 'typeof' operator in JavaScript do?",
    options: [
      "Returns the data type of a value",
      "Checks if a value is defined or not",
      "Returns the length of a string",
      "Converts a value to a boolean",
    ],
    answer: "Returns the data type of a value",
  },
  {
    question: "Which event is triggered when a user clicks on an HTML element?",
    options: ["onchange", "onsubmit", "onclick", "onmouseover"],
    answer: "onclick",
  },
];
// Each question needs the following:
// Question text
// Set of answers
// Which answer is correct

// Landing page:
// Explanation of the quiz
// Start button

// Click the start button:
// Landing page goes away
// Timer starts
// The first question appears (with its answers)

// For each question:
// User clicks an answer
// Their choice is compared to the correct answer as stored in the question's object
// If correct, tell them
// If incorrect, tell them AND subtract time from the timer
// Optional: play a sound for correct or incorrect
// Either way, the question disappears after a few seconds and the next question appears

// After the last question:
// Timer stops
// Question disappears
// Form appears for user to enter their initials
// Display their score

// User submits form
// Initials and score get stored in local storage
// User is taken to the high scores page
// High scores are listed, sorted highest to lowest
// User has option to take the quiz again
