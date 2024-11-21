// Quiz data
const questions = [
    {
            question: "What river runs through Glasgow and has played a key role in its history?",
            options: ["River Clyde", "River Tay", "River Tweed", "River Dee"],
            answer: 0
        },
        {
            question: "Which architect designed the Glasgow School of Art?",
            options: ["Sir Robert Rowand Anderson", "Charles Rennie Mackintosh", "Alexander Thomson", "Norman Foster"],
            answer: 1
        },
        {
            question: "The Glasgow Necropolis was inspired by which famous cemetery?",
            options: ["Père Lachaise in Paris", "Highgate in London", "Arlington in Washington, D.C.", "Mount Auburn in Cambridge, MA"],
            answer: 0
        },
        {
            question: "Kelvingrove Art Gallery and Museum opened in which year?",
            options: ["1851", "1901", "1925", "1950"],
            answer: 1
        },
        {
            question: "What style is the Kelvingrove Art Gallery and Museum known for?",
            options: ["Gothic Revival", "Neoclassical", "Spanish Baroque", "Art Deco"],
            answer: 2
        },
        {
            question: "Which important industry helped Glasgow prosper in the 19th century?",
            options: ["Textile", "Shipbuilding", "Coal Mining", "Agriculture"],
            answer: 1
        },
        {
            question: "What year was the University of Glasgow founded?",
            options: ["1351", "1451", "1551", "1651"],
            answer: 1
        },
        {
            question: "Who is buried in the Glasgow Necropolis?",
            options: ["Alexander Thomson", "Thomas Telford", "Charles Rennie Mackintosh", "William Wallace"],
            answer: 0
        },
        {
            question: "The statue of which Scottish historical figure stands at the main entrance of the Glasgow Necropolis?",
            options: ["Robert Burns", "William Wallace", "John Knox", "Mary, Queen of Scots"],
            answer: 2
        },
        {
            question: "What was the primary function of Glasgow’s St. Mungo’s Cathedral in medieval times?",
            options: ["Marketplace", "Parish church", "University", "Fortress"],
            answer: 1
        },
        {
            question: "What is notable about the architecture of St. Mungo’s Cathedral?",
            options: [
                "It is built in the Renaissance style",
                "It is a rare example of a medieval church that survived the Reformation intact",
                "It was built entirely of steel",
                "It has no stained glass windows"
            ],
            answer: 1
        },
        {
            question: "Kelvingrove Art Gallery is famous for housing which iconic painting by Salvador Dalí?",
            options: [
                "The Persistence of Memory",
                "Christ of Saint John of the Cross",
                "The Last Supper",
                "The Sacrament of the Last Supper"
            ],
            answer: 1
        },
        {
            question: "What nickname is commonly used for Glasgow?",
            options: ["The Granite City", "The Flower of Scotland", "The City of Love", "The Dear Green Place"],
            answer: 3
        },
        {
            question: "Which Glasgow landmark was gifted to the city by the shipbuilding magnate Lord Provost Sir James Campbell?",
            options: ["The People’s Palace", "Kelvingrove Park", "The Mitchell Library", "St. Mungo’s Cathedral"],
            answer: 1
        },
        {
            question: "Glasgow was designated as a European City of Culture in which year?",
            options: ["1985", "1990", "1995", "2000"],
            answer: 1
        },
        {
            question: "The Glasgow Necropolis is often referred to as what?",
            options: ["The City of the Dead", "The Land of Lost Souls", "The Valley of Rest", "The Hill of Ancestors"],
            answer: 0
        },
        {
            question: "Who was the first woman to have a statue in Kelvingrove Park?",
            options: ["Queen Victoria", "Florence Nightingale", "Mary Barbour", "Helen Crawfurd"],
            answer: 2
        },
        {
            question: "Which Victorian architectural style is Glasgow Central Station known for?",
            options: ["Gothic Revival", "Art Nouveau", "Romanesque", "Baroque"],
            answer: 1
        },
        {
            question: "What famous ship was built in Glasgow and became the longest-serving Cunard ocean liner?",
            options: ["Titanic", "Queen Mary", "Queen Elizabeth 2", "Lusitania"],
            answer: 2
        },
        {
            question: "Which event, celebrated by a massive exposition at Kelvingrove Park, took place in Glasgow in 1888?",
            options: [
                "The Glasgow Industrial Exhibition",
                "The International Exhibition",
                "The British Empire Exhibition",
                "The Scottish World’s Fair"
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