(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {

          // ...add an HTML radio button
          answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

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

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "What is the most current Street Figher title?",
      answers: {
        a: "Street Fighter II",
        b: "Street Fighter III",
        c: "Street Fighter IV",
        d: "Street Fighter V"
      },
      correctAnswer: "d",
    },
    {
      question: "Who does not have the \"Hadouken\" move?",
      answers: {
        a: "Ken",
        b: "Ryu",
        c: "Guile",
        d: "Akuma"
      },
      correctAnswer: "c",
    },
    {
      question: "Street Fighter was first released in what year?",
      answers: {
        a: "1986",
        b: "1987",
        c: "1988",
        d: "1989"
      },
      correctAnswer: "b",
    },
    {
      question: "Which genre does Street Fighter belong in?",
      answers: {
        a: "Fighting",
        b: "Role-playing",
        c: "Survival",
        d: "Shooter"
      },
      correctAnswer: "a",
    },
    {
      question: "Street Fighter was developed by: ",
      answers: {
        a: "Sega",
        b: "Capcom",
        c: "Namco",
        d: "Playstation"
      },
      correctAnswer: "b",
    },
    {
      question: "Who were the creators of Street Fighter?",
      answers: {
        a: "Chunli & Cammie",
        b: "Ken & Ryu",
        c: "Takashi Nishiyama & Hiroshi Matsumoto",
        d: "Balrog & Vega"
      },
      correctAnswer: "c",
    },
    {
      question: "Who played Guile in the Street Fighter live action game and movie?",
      answers: {
        a: "Bruce Willis",
        b: "Jean-Claude Van Damme",
        c: "Brad Pitt",
        d: "Tom Cruise"
      },
      correctAnswer: "b",
    },
    {
      question: "Street Fighter V is available on: ?",
      answers: {
        a: "Playstation",
        b: "Xbox One",
        c: "PC",
        d: "All of the above"
      },
      correctAnswer: "d",
    },
    {
      question: "Who has the \"Shoryuken\" as a special move?",
      answers: {
        a: "Ken",
        b: "Ryu",
        c: "A and B",
        d: "None of these characters"
      },
      correctAnswer: "c",
    },
    {
      question: "Which move will execute with \"quarter Circle Backwards + Kick / Down – Back – Kick\" for Ryu?",
      answers: {
        a: "Tatsumaki Senpukyaku",
        b: "Hadouken",
        c: "Shoryuken",
        d: "Super"
      },
      correctAnswer: "a",
    },
  ];

  // Kick things off
  // confirm user is ready to start quiz and present question 1
  do {
    var startQuiz = confirm("Are you ready to take the quiz?");
    if (startQuiz === true) {
      countdown();
    }
  } while (startQuiz === false);
  buildQuiz();

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
})();




// countdown section
var timerEl = document.getElementById('countdown');

var message =
  'Game over! You ran out of time';

// Timer that counts down from 5
function countdown() {
  var timeLeft = 90;

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
// end of countdown section