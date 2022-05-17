// Functions
// 1) click start, get axios, first question appears and start timer (one function??)
// 2) player presses correct answer, score increases, next question begins, question # changes, timer restarts || player presses wrong answer, score decreases, next question is loaded, question # changes and timer restarts  || time runs out, next question loads, question # changes, and timer restarts
// 3) All questions are answered, prompt with final score appears
// 4) Try again button?

// const question = document.querySelector(".question")
const score = document.querySelector(".score");
const answers = document.querySelectorAll(".answer-box");
const timer = document.querySelector(".timer")
const question = document.querySelector(".question")
const questionNum = document.querySelector(".question-number")


function shufle(aray) {
    Array.sort(() => Math.random());
}



document.querySelector("#start-button").addEventListener("click", (event) => {
    axios({
        method: "get",
        url: "https://opentdb.com/api.php?amount=20&category=22&difficulty=easy&type=multiple"
    })
    .then((response) => {
        console.log(response.data.results[0].question);
        let results = (`${response.data.results[0].question}`);
        question.innerText = results;
        question.setAttribute(question, results);
        results.appendChild(question);
        questionNum = 1
        questionNum++
        })
    })
    .catch((error) => {
        console.log(error);
    })
    let timeLeft = 10
    timer.setInterval(function(){
        if(timeLeft <= 0){
        clearInterval(downloadTimer);
        timer.innerHTML = "Out of time!";
        } else {
        timer.innerHTML = timeLeft + " seconds left";
  }
  timeLeft -= 1;
}, 1000);
    


