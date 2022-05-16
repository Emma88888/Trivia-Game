// Functions
// 1) click start, get axios, first question appears and start timer (one function??)
// 2) player presses correct answer, score increases, next question begins, question # changes, timer restarts || player presses wrong answer, score decreases, next question is loaded, question # changes and timer restarts  || time runs out, next question loads, question # changes, and timer restarts
// 3) All questions are answered, prompt with final score appears
// 4) Try again button?

let question = document.querySelector(".question")

let answers = document.querySelectorAll(".answer-box")

// let timer = document.querySelector(".timer")
//     setInterval(function(){
//         console.log("Called!");
//         setTimeout(timerCount, 10000);
//             if (timeLeft === 10) {
//                 console.log(timeLeft--)
//             } else if (timeLeft === 0) {
//                  window.alert("Out of time!");
//             }
// })

// let timer= setInterval(function() {
//     if (timeLeft === 10) {
//         timeLeft -= 1;
//     }
// })
// console.log(timer)

// function timer() {
//     let seconds = 10;
//     let timer = setInterval(function() {
//         document.querySelector(".timer").innerHTML="0"+sec;
//         sec--;
//         if (sec < 0) {
//             clearInterval(timer);
//         }
//     }, 1000);
//     console.log(timer)
// }



document.querySelector("#start-button").addEventListener("click", (event) => {
    axios({
        method: "get",
        url: "https://opentdb.com/api.php?amount=20&category=22&difficulty=easy&type=multiple"
    })
    .then((response) => {
        console.log(response.data.results[0].question);
        function responses(questions) {
            responses.forEach(x => console.log(x));
        } 
    })
    .catch((error) => {
        console.log(error);
    })
    function timer() {
        let seconds = 10;
        let timer = setInterval(function() {
            // console.log(timer)
            document.querySelector(".timer").innerHTML="0"+sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
})

