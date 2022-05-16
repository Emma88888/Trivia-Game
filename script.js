//click start, get axios questions

document.querySelector("#start-button").addEventListener("click", (event) => {
    axios({
        method: "get",
        url: "https://opentdb.com/api.php?amount=20&category=22&difficulty=easy&type=multiple"
    })
    .then((response) => {
        console.log(response.data.results[0].question);
        function responses(questions) {
            responses.forEach( x => console.log(x));
        } 
    })
    .catch((error) => {
        console.log(error);
    })
})