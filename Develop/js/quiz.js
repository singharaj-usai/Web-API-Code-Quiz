const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const timeLeft = document.querySelector("#time-left");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

/* the following presents the questions */

let questions = [
    {
        question: 'What does HTML stand for?',
        choice1: 'hypertext markup links',
        choice2: 'hypertext markup language',
        choice3: 'hypertext markup list',
        choice4: 'have to make list',
        answer: 2,
    },
    {
        question: 'What does CSS stand for?',
        choice1: 'cascading style sheets',
        choice2: 'cascading super style',
        choice3: 'combining simple signs',
        choice4: 'computing style sheet',
        answer: 1,
    },
    {
        question: 'What is a <p> tag?',
        choice1: 'picture',
        choice2: 'pixels',
        choice3: 'paragraph',
        choice4: 'party',
        answer: 3,
    },
    {
        question: 'Which HTML tag does not need a pair that closes that particular tag?',
        choice1: '<p>',
        choice2: '<br>',
        choice3: '<body>',
        choice4: '<head>',
        answer: 2,
    },
    {
        question: 'The main content of a webpage is kept inside which tag in an HTML file?',
        choice1: 'inside the head section',
        choice2: 'after the closing tag',
        choice3: 'before the head section',
        choice4: 'inside the body section',
        answer: 4,
    },
    {
        question: 'A line break can be added in HTML file by using',
        choice1: '<space>',
        choice2: '<br>',
        choice3: '<break>',
        choice4: '<lb>',
        answer: 2,
    },
    {
        question: 'The title tag is found in what section in HTML file?',
        choice1: '<body>',
        choice2: '<p>',
        choice3: '<head>',
        choice4: '<footer>',
        answer: 3,
    },
    {
        question: 'Where do you link a Javascript file inside an HTML file?',
        choice1: 'inside the head tag',
        choice2: 'at the very bottom of the body section',
        choice3: 'inside of a paragraph tag',
        choice4: 'you do not need to link your javascript file',
        answer: 2,
    },
    {
        question: 'What is the latest evolution/current version of HTML?',
        choice1: 'HTML5',
        choice2: 'HTML4',
        choice3: 'HTML7',
        choice4: 'HTML3',
        answer: 1,
    },
    {
        question: 'Choose the proper ending paragraph tag',
        choice1: '<p>',
        choice2: '/<p>',
        choice3: '<p/>',
        choice4: '</p>',
        answer: 4,
    }
]

const SCORE_POINTS = 100 
const MAX_QUESTIONS = 10
let countDown = 100;           /* the countdown controls time left on the timer */

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuesion()
}

function countdown() {         /* this function controls the timer and takes you back to the home screen when time is out */
    let timeInterval = setInterval(function() {
      if (countDown > 1) {
        timeLeft.textContent = "Timer : " + countDown;
        countDown--;
      } else {
        timeLeft.textContent = 'Time is up!';
        clearInterval(timeInterval);
        return window.location.assign("end.html");
        }
    }, 1000);
}

getNewQuesion = () => {      
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)     /*this randomizes the choices so the quiz isnt the same each time */
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
 }

 choices.forEach(choice => {
     choice.addEventListener('click', e => {
         if(!acceptingAnswers) return
         acceptingAnswers = false
         const selectedChoice = e.target
         const selectedAnswer = selectedChoice.dataset['number']

         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

         if(classToApply === 'correct') {
             incrementScore(SCORE_POINTS)
         } else {
             countDown-=10;
             timeLeft.textContent = "Timer : " + countDown;
         }

         selectedChoice.parentElement.classList.add(classToApply)

         setTimeout(() => {
             selectedChoice.parentElement.classList.remove(classToApply)
             getNewQuesion()

         }, 1000)
     })
 })

 incrementScore = num => {
     score +=num
     scoreText.innerText = score
 }

countdown();
 startGame();