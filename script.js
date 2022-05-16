//click start, get axios questions
let question = document.querySelector(".question")

let answers = document.querySelectorAll(".answer-box")

let timeLeft = 10;

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
})