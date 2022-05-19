// Functions
// 1) click start, get axios, first question appears and start timer (one function??)
// 2) player presses correct answer, score increases, next question begins, question # changes, timer restarts || player presses wrong answer, score decreases, next question is loaded, question # changes and timer restarts  || time runs out, next question loads, question # changes, and timer restarts
// 3) All questions are answered, prompt with final score appears
// 4) Try again button?

// Things I want/need to work on: timer speeding up and going negative, questions looping correctly?, win/lose screen, better styling


const score = document.querySelector(".score");
const answers = document.querySelectorAll(".answer-box");
const answer1 = document.querySelector("#answer1")
const answer2 = document.querySelector("#answer2")
const answer3 = document.querySelector("#answer3")
const answer4 = document.querySelector("#answer4")
const timer = document.querySelector(".timer")
const question = document.querySelector(".question")
const questionNum = document.querySelector(".question-number")
let fetchedQuestions = [];
let scoreTrack = 0;
let seconds = 15;
let second = 0;
let questionNumber = 1;


function shuffle(arr) {
    Array.sort(() => Math.random());
}

document.querySelector("#start-button").addEventListener("click", (event) => {
    axios({
        method: "get",
        url: "https://opentdb.com/api.php?amount=20&category=22&difficulty=easy&type=multiple"
    })
    .then((response) => {
        fetchedQuestions = response.data.results;
        // console.log(fetchedQuestions) 
        // document.querySelector(".question-number").innerText = String(questionNum);
        populateQuestion(fetchedQuestions);
        }).catch((error) => {
            console.log(error);
        })
    interval = setInterval(function() {
        timer.innerHTML = (seconds - second) + ' seconds left';
            if (second >= seconds) {
                console.log("Stop the timer");
                clearInterval(interval);
            }
            second++;
        }, 1000);
    document.getElementById("questionnumber").innerText = String(questionNumber++);
    second = 0;
    })

    function populateQuestion(questions){
        questions.forEach((element, index, array) => {
            let questionAPI = element.question;
            // questionNum = parseInt(document.querySelector(".question-number").innerText);
            // element = fetchedQuestions[questionNum];
            let correctAnswer = element.correct_answer;
            let incorrect1 = element.incorrect_answers[0];
            let incorrect2 = element.incorrect_answers[1];
            let incorrect3 = element.incorrect_answers[2];
            question.innerText = questionAPI;
            answer1.innerText = correctAnswer;
            answer2.innerText = incorrect1;
            answer3.innerText = incorrect2;
            answer4.innerText = incorrect3;
            // questionNum++;
            // document.querySelector.innerText = String(questionNum);
        });
    }

function checkanswer(obj) {
    if (obj.innerText == answer1.innerText) {
        scoreTrack++;
        document.getElementById("scorediv").innerText = String(scoreTrack);
        clearInterval(interval);
    }
    else {
        scoreTrack--;
        document.getElementById("scorediv").innerText = String(scoreTrack);
        clearInterval(interval);
    }
    document.querySelector("#start-button").click();
}