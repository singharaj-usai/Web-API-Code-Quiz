const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

var timerEl = document.getElementById('timer');

var showQuestions = document.getElementById('questions-title');
var questionBody = document.getElementById('question-body');

let questionsIndex = 0;

burger.addEventListener('click', () =>{
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})

// Timer that counts down from 5
function countdown() {
  var timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}


const correct = ()=>{
  showQuestions.textContent  = "Correct!"
}

//TODO: Make it so when you select a choice, the card colors changes indicating correct and wrong choices

function questionone(){
  showQuestions.textContent  = "Which function of an Array object calls a function for each element in the array?"
  questionBody.getElementsByClassName('question-title')[0].textContent = "map()"
  questionBody.getElementsByClassName('question-title')[1].textContent = "forEach()"
  questionBody.getElementsByClassName('question-title')[2].textContent = "every()"
  
  questionBody.addEventListener("click", function() {
  
    questiontwo();
  });
}

function questiontwo(){
  showQuestions.textContent  = "Inside which HTML element do we put the JavaScript?"
  questionBody.getElementsByClassName('question-title')[0].textContent = "<head>"
  questionBody.getElementsByClassName('question-title')[1].textContent = "<body>"
  questionBody.getElementsByClassName('question-title')[2].textContent = "<script>"
  
  questionBody.addEventListener("click", function() {
  
    questionthree();
  });
}

function questionthree(){
  showQuestions.textContent  = "Which Variables cannot be reassigned and not accessible before they appear within the code?"
  questionBody.getElementsByClassName('question-title')[0].textContent = "Var"
  questionBody.getElementsByClassName('question-title')[1].textContent = "Const"
  questionBody.getElementsByClassName('question-title')[2].textContent = "Let"
  
  questionBody.addEventListener("click", function() {
  
    questionfour();
  });
}

function questionfour(){
  showQuestions.textContent  = "Which String method extracts a section of a string and returns it as a new string?"
  questionBody.getElementsByClassName('question-title')[0].textContent = "slice()"
  questionBody.getElementsByClassName('question-title')[1].textContent = "split()"
  questionBody.getElementsByClassName('question-title')[2].textContent = "match()"
  
  questionBody.addEventListener("click", function() {
  
    questionfive();
  });
}

questionone();
countdown();


