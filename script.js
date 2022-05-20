const startGame = document.querySelector("#start-button");
const timerElement = document.querySelector(".timer");
const questionElement = document.querySelector(".question");
const answerElements = [
  document.querySelector("#answer1"),
  document.querySelector("#answer2"),
  document.querySelector("#answer3"),
  document.querySelector("#answer4")
];
const scoreElement = document.querySelector("#scorediv");

let questions = [];
let interval = 0;
let timer = 0;
let questionId = 0;
let points = 0;

startGame.addEventListener("click", function () {
  axios
    .get(
      "https://opentdb.com/api.php?amount=20&category=22&difficulty=easy&type=multiple"
    )
    .then(function (response) {
      return response.data.results;
    })
    .then(function (apiQuestions) {
      questions = [];
      for (let i = 0; i < apiQuestions.length; i++) {
        const currentQuestion = apiQuestions[i];
        questions.push({
          question: currentQuestion.question,
          answers: [
            ...currentQuestion.incorrect_answers,
            currentQuestion.correct_answer
          ].sort(),
          correctAnswer: currentQuestion.correct_answer
        });
      }
    })
    .then(() => {
      questionId = 0;
      points = 0;
      goToNextQuestion();
      timerElement.innerText = "Time Remaining: " + timer;
      if (interval !== 0) {
        clearInterval(interval);
      }
      interval = setInterval(timerTick, 1000);
    });
});

function timerTick() {
  timer--;
  if (timer <= 0) {
    goToNextQuestion();
  }
  timerElement.innerText = "Time Remaining: " + timer;
}

function goToNextQuestion() {
  timer = 15;
  questionId++;
  if (questions.length <= questionId) {
    endQuiz();
    return;
  }

  const currentQuestion = questions[questionId];
  questionElement.innerText = currentQuestion.question;
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    answerElements[i].innerText = currentQuestion.answers[i];
  }
}

function checkAnswer(i) {
  const currentQuestion = questions[questionId];
  if (currentQuestion.answers[i] === currentQuestion.correctAnswer) {
    changePoints(-1);
  } else {
    changePoints(1);
  }
  goToNextQuestion();
}

function changePoints(amount) {
  points -= amount;
  scoreElement.innerText = "Your score is " + points;
}

function endQuiz() {
  timer = 0;
  clearInterval(interval);
  timerElement.innerText = "";
  questionElement.innerText = "";
  for (let i = 0; i < 4; i++) {
    answerElements[i].innerText = "";
  }
  alert("Your final score is " + points + "!");
}