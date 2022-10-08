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

function questionone(){
  showQuestions.textContent  = "Which of the following best describes a Web API?"
  questionBody.children[0].textContent = "(Correct) "
  
  
}

questionone();
countdown();


