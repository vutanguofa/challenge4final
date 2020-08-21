// initial score for quiz
var score = 0;

// object for questions, choices, and answer
var questions = [
    {
        question: "1. What is the most current Street Figher title?",
        choices: ["Street Fighter II", "Street Fighter III", "Street Fighter IV", "Street Fighter V"],
        correctAnswer: 3,
    },
    {
        question: "2. Who does not have the \"Hadouken\" move?",
        choices: ["Ken", "Ryu", "Guile", "Akuma"],
        correctAnswer: 2,
    },
    {
        question: "3. Street Fighter was first released in what year?",
        choices: ["1986", "1987", "1988", "1989"],
        correctAnswer: 1,
    },
    {
        question: "4. What genre is Street Fighter classified as?",
        choices: ["Fighting", "Role-playing", "Survival", "Shooter"],
        correctAnswer: 0,
    },
    {
        question: "5. Street Fighter was developed by: ",
        choices: ["Sega", "Capcom", "Namco", "Playstation"],
        correctAnswer: 1,
    },
    {
        question: "6. Who was the creators of Street Fighter?",
        choices: ["Chunli & Cammie", "Ken & Ryu", "Takashi Nishiyama & Hiroshi Matsumoto", "Balrog & Vega"],
        correctAnswer: 2,
    },
    {
        question: "7. Who played Guile in the Street Fighter live action game?",
        choices: ["Bruce Willis", "Jean-Claude Van Damme", "Brad Pitt", "Tom Cruise"],
        correctAnswer: 1,
    },
    {
        question: "8. Street Fighter V is available on: ?",
        choices: ["Playstation", "Xbox One", "PC", "All of the above"],
        correctAnswer: 3,
    },
    {
        question: "9. Who has the Shoryuken as a special move?",
        choices: ["Ken", "Ryu", "A and B", "None of these characters"],
        correctAnswer: 2,
    },
    {
        question: "10. Which move will execute with \"Quarter Circle Backwards + Kick / Down – Back – Kick\"?",
        choices: ["Tatsumaki Senpukyaku", "Hadouken", "Shoryuken", "Super"],
        correctAnswer: 0,
    },
];

/*
for (var i = 0; i < questions.length; i++) {
    // Logs the animal at index position i to the console. This code is executed each we go through the loop.
    console.log(questions[i]);
}
*/

// function to display questions
function questionsList() {
    for (var i = 0; i < questions.length; i++) {
        // Display current question to user and ask OK/Cancel
        var displayQuestion = questions[i].question;
        console.log("Question: " + displayQuestion);
    }
};

// function to display choices
function choicesList() {
    for (var i = 0; i < questions.length; i++) {
        // Display current question to user and ask OK/Cancel
        var displayChoices = questions[i].choices;
        console.log("Choices: " + displayChoices);
    }
};


// function to display answers
function answersList() {
    for (var i = 0; i < questions.length; i++) {
        // Display current question to user and ask OK/Cancel
        var correctAnswer = questions[i].correctAnswer;
        console.log("Correct answer : " + correctAnswer);
    }
};


questionsList();
choicesList();
answersList();