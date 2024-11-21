// Test the quiz functionality
function testQuiz() {
    const startButton = document.getElementById('startQuizButton');
    const quizSection = document.getElementById('quizSection');
    const quizResults = document.getElementById('quizResults');
    const quizQuestion = document.getElementById('quizQuestion');
    const quizOptions = document.querySelectorAll('.quiz-option');
    const resultsText = document.getElementById('resultsText');
    const retryButton = document.getElementById('retryButton');

    console.log("=== Testing Quiz Application ===");

    // Simulate clicking the start button
    console.log("Starting the quiz...");
    startButton.click();

    // Check if quizSection is displayed
    if (quizSection.style.display !== 'block') {
        console.error("Quiz did not start");
        return;
    }
    console.log("Quiz started");

    // Test answering questions
    questions.forEach((q, index) => {
        console.log(`Answering Question ${index + 1}: "${q.question}"`);

        // Verify the question text
        if (quizQuestion.textContent !== q.question) {
            console.error(`Question text mismatch for Question ${index + 1}`);
            return;
        }
        console.log(`Question ${index + 1} displayed correctly`);

        // Simulate answering the correct option
        const correctOptionButton = quizOptions[q.answer];
        correctOptionButton.click();

        // Check if feedback is correct
        const feedback = document.getElementById('quizFeedback').textContent;
        if (feedback !== "Correct!") {
            console.error(`Incorrect feedback for Question ${index + 1}`);
            return;
        }
        console.log(`Feedback for Question ${index + 1} is correct`);
    });

    // Wait for results to display
    setTimeout(() => {
        console.log("Verifying results...");
        if (quizResults.style.display !== 'block') {
            console.error("Results did not display");
            return;
        }
        console.log("Results displayed");

        // Verify score
        const expectedScore = `You scored ${questions.length} out of ${questions.length}`;
        if (resultsText.textContent !== expectedScore) {
            console.error("Final score is incorrect");
            return;
        }
        console.log("Final score is correct");

        // Test retry functionality
        console.log("Testing retry functionality...");
        retryButton.click();

        // Check if quiz resets
        if (startButton.style.display !== 'block' || quizResults.style.display === 'block') {
            console.error("Retry button did not reset the quiz");
            return;
        }
        console.log("Retry functionality works");

        console.log("=== Quiz Application Test Completed ===");
    }, (questions.length + 1) * 1000); // Wait for all questions to finish
}

// Run the test
testQuiz();