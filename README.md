# Trivia-Game
### A game of general geography trivia using a free API. Answer 20 questions with fifteen seconds each, see how many you can get correct!

## Wire frame and images

![1f831d80-d2db-11ec-8c05-e8fdcf18cdf8](https://user-images.githubusercontent.com/103523822/169522107-75520872-64f8-433e-a0ab-af8bf7a99827.jpg)
<img width="1589" alt="Screen Shot 2022-05-20 at 7 47 19 AM" src="https://user-images.githubusercontent.com/103523822/169522131-1cbd738c-6aa2-4e77-9529-8874f503d56b.png">
<img width="1530" alt="Screen Shot 2022-05-20 at 7 47 26 AM" src="https://user-images.githubusercontent.com/103523822/169522136-933ceffa-fb58-414a-a2c8-c55334c582a0.png">
<img width="1573" alt="Screen Shot 2022-05-20 at 7 47 39 AM" src="https://user-images.githubusercontent.com/103523822/169522144-eb2f44c2-9ad9-4ee6-8d4d-3edcec038f69.png">

## Technologies used

1. HTML
2. CSS
3. Javascript
4. API retrieved with Axios

## Installation instructions:

Simply open the game, press start, and play!
Game link: https://emmastriviagame.netlify.app

## User stories

1. As a user, I want adequate time to answer each question so I don't feel rushed.
2. As a user, I want to be able to restart, and replay without refreshing.
3. As a user, I want my final score to pop up at the end.
4. As a user, I want the display to be clear, engaging and accessible so I'm not confused while trying to answer questions.
5. As a user, I want to be able to always see my score and which question number I'm currently on.

## Unsolved problems

The code for my scoring is somwhow reversed, and I couldn't figure it out; originally, if you got a question right the score would go down and vice versa. As a quick fix, I switched the code so that if you get a question correct you lose a point (which translates somehow to gaining a point), and vice versa. I would love to fix this  correctly eventually:

`
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
`

I would also love to make better, more modern styling using CSS.
Another hurdle was my original code - it was basically only readable to me. I spent hours refactoring it, using basically the same logic, to create clearer, more readable code.

## Resources & credits
Google, MDN, W3, Stackoverflow, my lovely brother, Leo and Greg. Temani Afif for more advanced CSS colorings and styles, the earth animation from The Pragmatick on Stackoverflow, and Luke Embrey for the h1 styling. Thank you all <3
