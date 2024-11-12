// Quiz data
const questions = [
    {
        question: "Where is Glasgow?",
        options: ["Germany", "Spain", "Scotland", "England"],
        answer: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "Who am I?",
        options: ["The Danger", "Heisenberg", "Walter Heartwell White", "The One who Knocks"],
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