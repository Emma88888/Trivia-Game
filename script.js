// Functions
// 1) click start, get axios, first question appears and start timer (one function??)
// 2) player presses correct answer, score increases, next question begins, question # changes, timer restarts || player presses wrong answer, score decreases, next question is loaded, question # changes and timer restarts  || time runs out, next question loads, question # changes, and timer restarts
// 3) All questions are answered, prompt with final score appears
// 4) Try again button?

// Things I want/need to work on: timer, questions appearing and changing after timer ends, score being kept, win/lose screen, better styling


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

// let timeLeft = 10;
// timer.setInterval(function(){
//     if(timeLeft <= 0){
//     clearInterval(downloadTimer);
//     timer.innerHTML = "Out of time!";
//     } else {
//     timer.innerHTML = timeLeft + " seconds left";
//  }
// timeLeft -= 1;
// }, 1000);


function shuffle(arr) {
    Array.sort(() => Math.random());
}

// make an array of the questions to shuffle them? how to get the questions to randomly go into each answer box without it being the same choice every time


document.querySelector("#start-button").addEventListener("click", (event) => {
    axios({
        method: "get",
        url: "https://opentdb.com/api.php?amount=20&category=22&difficulty=easy&type=multiple"
    })
    .then((response) => {
        fetchedQuestions = response.data.results;
        console.log(fetchedQuestions) 
        populateQuestion(fetchedQuestions);
        //question.setAttribute(question, results);
        //results.appendChild(question);
        }).catch((error) => {
            console.log(error);
        })
    })

    function populateQuestion(questions){
        questions.forEach((element, index, array) => {
            let questionAPI = element.question;
            let correctAnswer = element.correct_answer;
            let incorrect1 = element.incorrect_answers[0];
            let incorrect2 = element.incorrect_answers[1];
            let incorrect3 = element.incorrect_answers[2];

            question.innerText = questionAPI;
            answer1.innerText = correctAnswer;
            answer2.innerText = incorrect1;
            answer3.innerText = incorrect2;
            answer4.innerText = incorrect3;

        });
    };


    


// let rightAnswer = (`${response.data.results[0].correct_answer}`)
//         answers.innerText = rightAnswer
    
// let wrongAnswers = (`${response.data.results[0].incorrect_answers}`)





