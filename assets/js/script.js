const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "1. What is the most current Street Figher title?",
    answers: {
      a: "Street Fighter II",
      b: "Street Fighter III",
      c: "Street Fighter IV",
      d: "Street Fighter V"
    },
    correctAnswer: "d",
  },
  {
    question: "2. Who does not have the \"Hadouken\" move?",
    answers: {
      a: "Ken",
      b: "Ryu",
      c: "Guile",
      d: "Akuma"
    },
    correctAnswer: "c",
  },
  {
    question: "3. Street Fighter was first released in what year?",
    answers: {
      a: "1986",
      b: "1987",
      c: "1988",
      d: "1989"
    },
    correctAnswer: "b",
  },
  {
    question: "4. Which genre does Street Fighter belong in?",
    answers: {
      a: "Fighting",
      b: "Role-playing",
      c: "Survival",
      d: "Shooter"
    },
    correctAnswer: "a",
  },
  {
    question: "5. Street Fighter was developed by: ",
    answers: {
      a: "Sega",
      b: "Capcom",
      c: "Namco",
      d: "Playstation"
    },
    correctAnswer: "b",
  },
  {
    question: "6. Who were the creators of Street Fighter?",
    answers: {
      a: "Chunli & Cammie",
      b: "Ken & Ryu",
      c: "Takashi Nishiyama & Hiroshi Matsumoto",
      d: "Balrog & Vega"
    },
    correctAnswer: "c",
  },
  {
    question: "7. Who played Guile in the Street Fighter live action game and movie?",
    answers: {
      a: "Bruce Willis",
      b: "Jean-Claude Van Damme",
      c: "Brad Pitt",
      d: "Tom Cruise"
    },
    correctAnswer: "b",
  },
  {
    question: "8. Street Fighter V is available on: ?",
    answers: {
      a: "Playstation",
      b: "Xbox One",
      c: "PC",
      d: "All of the above"
    },
    correctAnswer: "d",
  },
  {
    question: "9. Who has the \"Shoryuken\" as a special move?",
    answers: {
      a: "Ken",
      b: "Ryu",
      c: "A and B",
      d: "None of these characters"
    },
    correctAnswer: "c",
  },
  {
    question: "10. Which move will execute with \"quarter Circle Backwards + Kick / Down – Back – Kick\" for Ryu?",
    answers: {
      a: "Tatsumaki Senpukyaku",
      b: "Hadouken",
      c: "Shoryuken",
      d: "Super"
    },
    correctAnswer: "a",
  },
];

// function to create quiz
function quiz() {
  const output = [];
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      output.push(
        `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
      );
    }
  );
  quizContainer.innerHTML = output.join('');
}

// function to show results
function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
    } else if (userAnswer !== currentQuestion.correctAnswer) {
      deduct();
    }
    else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  var playerScore = resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  localStorage.setItem("score", playerScore);
  alert(resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`);
  enterPlayerDetails();
}

// function to create slide show
function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if (currentSlide === 0) {
    previousButton.style.display = 'none';
  }
  else {
    previousButton.style.display = 'inline-block';
  }
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

// confirm user is ready to start quiz and present question 1
do {
  var startQuiz = confirm("Are you ready to take the quiz?");
  if (startQuiz === true) {
    countdown();
  }
} while (startQuiz === false);
quiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

// Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// function to deduct time for wrong answers
function deduct() {
  timeLeft -= 5;
  document.getElementById('countdown').innerHTML = '00:' + timeLeft;
};

// countdown section
var timerEl = document.getElementById('countdown');
var timeLeft = 90;
var message = 'Game over! You ran out of time';

// function to set/start countdown from 90
function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      alert(message);
    }
  }, 1000);
};

//function to store details to local storage
function enterPlayerDetails() {
  var playerName = prompt("Enter in your name.");
  localStorage.setItem("player", playerName);
  previousScore();
}

// store score to local storage
var playerInput = document.querySelector("#player");
var scoreInput = document.querySelector("#score");
var submitScore = document.querySelector("#submit-score");
var msgDiv = document.querySelector("#msg");
var playerSpan = document.querySelector("#playerInitials");
var scoreSpan = document.querySelector("#playerScore");

//function to display previous score
function previousScore() {
  var email = localStorage.getItem("player");
  var password = localStorage.getItem("score");

  if (email && password === null) {
    return;
  }

  playerSpan.textContent = email;
  scoreSpan.textContent = password;
}

previousScore();

// function to display message to player
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}