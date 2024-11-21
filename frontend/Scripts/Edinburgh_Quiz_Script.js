// Quiz data
const questions = [
    {
            question: "What is the oldest part of Edinburgh Castle?",
            options: ["St. Giles' Cathedral", "David's Tower", "St. Margaret's Chapel", "The Great Hall"],
            answer: 2
        },
        {
            question: "Holyrood Palace was originally founded as what type of building?",
            options: ["Castle", "Abbey", "Manor", "Fort"],
            answer: 1
        },
        {
            question: "Which monarch ordered the construction of Holyrood Palace as a royal residence?",
            options: ["Robert the Bruce", "Mary, Queen of Scots", "James IV", "William Wallace"],
            answer: 2
        },
        {
            question: "In what century was Edinburgh Castle built?",
            options: ["9th century", "12th century", "14th century", "16th century"],
            answer: 1
        },
        {
            question: "The 'Stone of Destiny,' which is part of Edinburgh Castle's history, was used in the coronation of Scottish kings. Where is it now?",
            options: ["Westminster Abbey", "St. Giles' Cathedral", "Holyrood Palace", "In a museum in Stirling"],
            answer: 0
        },
        {
            question: "What is the name of the oldest known building in Edinburgh?",
            options: ["Holyrood Palace", "St. Giles' Cathedral", "Edinburgh Castle", "St. Margaret’s Chapel"],
            answer: 3
        },
        {
            question: "Which famous queen lived at Holyrood Palace during part of her reign?",
            options: ["Mary, Queen of Scots", "Queen Victoria", "Queen Elizabeth I", "Queen Anne"],
            answer: 0
        },
        {
            question: "Edinburgh Castle sits on an extinct volcano known as what?",
            options: ["Castle Hill", "Calton Hill", "Arthur’s Seat", "The Mound"],
            answer: 0
        },
        {
            question: "Who famously held court at Holyrood Palace in the 16th century?",
            options: ["Queen Elizabeth I", "King Henry VIII", "Mary, Queen of Scots", "King James I"],
            answer: 2
        },
        {
            question: "What military ceremony is held daily at Edinburgh Castle?",
            options: [
                "The Changing of the Guard",
                "The Firing of the One O'Clock Gun",
                "The Ceremonial Sword Presentation",
                "The Bagpipe Procession"
            ],
            answer: 1
        },
        {
            question: "The Royal Mile stretches between which two iconic Edinburgh landmarks?",
            options: [
                "Edinburgh Castle and Calton Hill",
                "Holyrood Palace and St. Giles' Cathedral",
                "Edinburgh Castle and Holyrood Palace",
                "The Mound and Calton Hill"
            ],
            answer: 2
        },
        {
            question: "Which king of Scotland was born at Edinburgh Castle?",
            options: ["King James I", "King Robert the Bruce", "King James VI", "King David II"],
            answer: 2
        },
        {
            question: "What is the purpose of the Great Hall in Edinburgh Castle?",
            options: [
                "It served as a courtroom",
                "It was used for grand banquets and ceremonies",
                "It was a private chapel",
                "It housed prisoners"
            ],
            answer: 1
        },
        {
            question: "Who was murdered at Holyrood Palace in 1566, reportedly in front of Mary, Queen of Scots?",
            options: ["King Henry VIII", "David Rizzio", "Lord Darnley", "James IV"],
            answer: 1
        },
        {
            question: "Which part of Edinburgh Castle served as a prison for captured soldiers?",
            options: ["The Great Hall", "The Vaults", "St. Margaret's Chapel", "Crown Square"],
            answer: 1
        },
        {
            question: "What significant artifact related to Scottish royalty can be found at Edinburgh Castle?",
            options: [
                "The Scottish Crown Jewels",
                "The Magna Carta",
                "The Sword of State",
                "The Spear of Destiny"
            ],
            answer: 0
        },
        {
            question: "What marks the end of the Royal Mile in Edinburgh?",
            options: ["Edinburgh Castle", "Holyrood Palace", "St. Giles' Cathedral", "Calton Hill"],
            answer: 1
        },
        {
            question: "Holyrood Abbey, located next to Holyrood Palace, was founded by which king?",
            options: ["David I", "Alexander III", "James VI", "Robert the Bruce"],
            answer: 0
        },
        {
            question: "Which king of England captured Edinburgh Castle in 1296?",
            options: ["Edward I", "Richard the Lionheart", "Henry V", "William the Conqueror"],
            answer: 0
        },
        {
            question: "Edinburgh Castle was a prominent stronghold during which historical conflict?",
            options: [
                "The Hundred Years' War",
                "The Wars of Scottish Independence",
                "The Jacobite Rebellion",
                "The English Civil War"
            ],
            answer: 1
        }
];

let currentQuestionNumber = 0;
let score = 0;

// Initialisation
const startQuizButton = document.getElementById('startQuizButton');
const quizSection = document.getElementById('quizSection');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.querySelectorAll('.quiz-option');
const quizFeedback = document.getElementById('quizFeedback');
const quizResults = document.getElementById('quizResults');
const resultsText = document.getElementById('resultsText');
const retryButton = document.getElementById('retryButton');

// Start quiz event listener
startQuizButton.addEventListener('click', startQuiz);

function startQuiz() {
    startQuizButton.style.display = 'none';
    quizSection.style.display = 'block';
    currentQuestionNumber = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    quizFeedback.textContent = '';
    const currentQuestion = questions[currentQuestionNumber];
    quizQuestion.textContent = currentQuestion.question;
    quizOptions.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.disabled = false;
    });
}

// Option buttons event listener
quizOptions.forEach(button => {
    button.addEventListener('click', (e) => {
        const selectedOption = parseInt(e.target.dataset.index);
        checkAnswer(selectedOption);
    });
});

function checkAnswer(selectedOption) {
    const correctOption = questions[currentQuestionNumber].answer;
    if (selectedOption === correctOption) {
        quizFeedback.textContent = "Correct!";
        score++;
    } else {
        quizFeedback.textContent = "Wrong!";
    }

    quizOptions.forEach(button => button.disabled = true);

    setTimeout(() => {
        currentQuestionNumber++;
        if (currentQuestionNumber < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    quizSection.style.display = 'none';
    quizResults.style.display = 'block';
    resultsText.textContent = `You scored ${score} out of ${questions.length}`;
}

// Retry button event listener
retryButton.addEventListener('click', () => {
    quizResults.style.display = 'none';
    startQuizButton.style.display = 'block';
});