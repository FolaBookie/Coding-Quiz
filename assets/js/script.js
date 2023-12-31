let questionIndex = 0;
let timer;
let remainingTime = 60;
let userScore = 0;
const questionSection = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const optionsContainer = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitBtn = document.getElementById("submit");

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

// Function to start the quiz
function startTimer() {
  const timerEl = document.getElementById("time");
  if (timer) {
    clearInterval(timer);
  }
  timerEl.innerText = remainingTime;
  timer = setInterval(function () {
    if (remainingTime <= 0) {
      clearInterval(timer);
      return;
    }
    remainingTime--;
    timerEl.innerText = remainingTime;
  }, 1000);
}

// Creating a function to check if answer is correct
function checkAnswer() {
  const allOptions = document.getElementsByName("answerOptions");
  let userAnswer;
  for (let i = 0; i < allOptions.length; i++) {
    if (allOptions[i].checked) {
      userAnswer = allOptions[i].value;
    }
    allOptions[i].setAttribute("disabled", "true");
  }
  const currentQuestion = questionsArray[questionIndex];
  const isUserCorrect = userAnswer === currentQuestion.answer;
  const displayUserResult = document.createElement("em");
  if (isUserCorrect) {
    displayUserResult.innerText = "Correct!";
    userScore++;
  } else {
    displayUserResult.innerText = "Wrong!";
    remainingTime -= 2;
  }
  questionSection.append(displayUserResult);
  setTimeout(function () {
    if (questionIndex === questionsArray.length - 1) {
      stopQuestion();
    } else {
      nextQuestion();
    }
    displayUserResult.remove();
  }, 2000);
}

function nextQuestion() {
  questionIndex++;
  getQuestion();
}

function stopQuestion() {
  clearInterval(timer);
  questionSection.classList.add("hide");
  endScreen.classList.remove("hide");
  finalScore.innerText = userScore;
}

function generateOptions(options) {
  optionsContainer.innerHTML = "";
  options.forEach(function (option, index) {
    const optionId = option.split(" ").join("-") + index;
    const optionBox = document.createElement("div");
    optionBox.classList.add("form-check");

    const optionInput = document.createElement("input");
    optionInput.classList.add("form-check-input");
    optionInput.classList.add("hide");
    optionInput.setAttribute("type", "radio");
    optionInput.setAttribute("name", "answerOptions");
    optionInput.setAttribute("value", option);
    optionInput.onchange = checkAnswer;
    optionInput.id = optionId;

    const optionLabel = document.createElement("label");
    optionLabel.classList.add("form-check-label");
    optionLabel.setAttribute("for", optionId);
    optionLabel.innerText = option;

    optionBox.append(optionInput);
    optionBox.append(optionLabel);
    optionsContainer.append(optionBox);
  });
}

//Creating a function to get quiz questions
function getQuestion() {
  const question = questionsArray[questionIndex];
  questionTitle.innerText = question.question;
  generateOptions(question.options);
}

// Initials and score get stored in local storage
submitBtn.addEventListener("click", function () {
  const userInitials = initialsInput.value;
  if (userInitials.trim()) {
    let allUserSCores = JSON.parse(localStorage.getItem("highscores"));
    if (!allUserSCores) {
      allUserSCores = [];
    }
    allUserSCores.push({ initials: userInitials, score: userScore });
    localStorage.setItem("highscores", JSON.stringify(allUserSCores));
    initialsInput.value = "";
    window.location.href = "highscores.html";
  }
});

// Creating an event
function init() {
  const startButton = document.getElementById("start");
  startButton.addEventListener("click", function () {
    const startScreen = document.getElementById("start-screen");
    startScreen.classList.add("hide");
    questionSection.classList.remove("hide");
    getQuestion();
    startTimer();
  });
}
init();
