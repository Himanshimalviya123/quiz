// quiz questions and options
const quizQuestions = [
  {
    question: "what does html stand for ?",
    options: [" A.hypertext markup language", 
      " B.hyper text multiple language",
       " C.home text multi language",
       " D.hyper text multi language"],
    answer: 0
  },
  {
    question: "what does css stand for?",
    options: [" A.cascading style sheet",
              " B.cute style sheet",
              " C.computer style sheet",
               " D.codehal style sheet"],
    answer: 0
  },
  {
    question: "what does php stand for?",
    options: [" A.hypertext preprocessor",
              " B.hometext programming",
              " C.gypertext programming",
              " D.programming hypertext preprocessor"],
    answer: 0
  },
  {
    question: "what does sql stand for?",
    options: [" A.structured query language",
               " B.Strength query language",
                 " C.stylesheet query language",
                 " D.science question language"],
    answer: 0
  },
  {
    question :"what does xml stand for?",
    options: ["A.extensible markup language", 
              "B.explore multiple language",
                 "C.extra markup language", 
                 "D.excellent multiple language"],
    answer: 0
  }
];

// current question index
let currentQuestionIndex = 0;

// display current question and options
function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");

  questionElement.textContent = quizQuestions[currentQuestionIndex].question;

  optionsElement.innerHTML = "";
  quizQuestions[currentQuestionIndex].options.forEach((option, index) => {
    const optionElement = document.createElement("li");
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => {
      submitAnswer(index);
    });
    optionsElement.appendChild(optionElement);
  });
}

// submit answer and check if correct
function submitAnswer(answerIndex) {
  const correctAnswerIndex = quizQuestions[currentQuestionIndex].answer;
  const resultElement = document.getElementById("result");

  if (answerIndex === correctAnswerIndex) {
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = `Incorrect. The correct answer is ${quizQuestions[currentQuestionIndex].options[correctAnswerIndex]}.`;
  }

  // move to next question after 2 seconds
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= quizQuestions.length) {
      // display final result
      resultElement.textContent = "Quiz complete!";
      document.getElementById("submit-btn").style.display = "none";
    } else {
      displayQuestion();
    }
  }, 2000);
}
// start quiz
displayQuestion();

// submit button event listener
document.getElementById("submit-btn").addEventListener("click", () => {
  submitAnswer();
});
