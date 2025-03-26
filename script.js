// quiz questions and options
const quizQuestions = [
  {
    question: "which is the largest animal in the world??",
    options: ["blue-whale", "shark", "star fish", "lion"],
    answer: 0
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: 0
  },
  {
    question: "Who is the CEO of Tesla?",
    options: ["Elon Musk", "Jeff Bezos", "Mark Zuckerberg", "Bill Gates"],
    answer: 0
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: 0
  },
  {
    question: "where is it situated in kanha kisli national park?",
    options: ["madhya pradesh", "uttrakhand", "manipuram", "uttarpradesh"],
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
