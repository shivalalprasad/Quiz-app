const questions = [
  {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1 // Index of the correct answer in the options array
  },
  {
        question: "What is 10 - 5?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 2
    },
    {
        question: "What is 3 x 3?",
        options: ["3", "6", "9", "12"],
        correctAnswer: 2
    },
    {
        question: "What is 20 / 4?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1
    },
    {
        question: "What is 2^3?",
        options: ["3", "4", "5", "8"],
        correctAnswer: 3
    }
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;


function loadQuestion() {
  const questionData = questions[currentQuestion];
  document.getElementById('question-text').textContent = questionData.question;

  for (let i = 0; i < questionData.options.length; i++) {
      const optionElement = document.getElementById(`option${i + 1}`);
      optionElement.nextElementSibling.textContent = questionData.options[i];
  }
}

const nextButton = document.getElementById('next-button');

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const selectedAnswerIndex = Array.from(selectedOption.parentElement.parentElement.children).indexOf(selectedOption.parentElement);

        if (selectedAnswerIndex === questions[currentQuestion]?.correctAnswer) { // Use optional chaining here
            score++;
            document.getElementById('result-message').textContent = "Correct!";
        } else {
            document.getElementById('result-message').textContent = "Incorrect!";
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            // End of quiz
            document.getElementById('question-container').style.display = 'none';
            document.getElementById('result-message').textContent = `Quiz Completed! Your Score: ${score}/${questions.length}`;
            nextButton.textContent = "Restart";
            nextButton.addEventListener('click', () => {
                currentQuestion = 0;
                score = 0;

                if (questions[currentQuestion]) { // Check if the question exists
                    loadQuestion();
                    document.getElementById('question-container').style.display = 'block';
                    document.getElementById('result-message').textContent = "";
                    nextButton.textContent = "Next";
                } else {
                    // Handle the case where there are no questions
                    console.error("No questions found for restart.");
                    document.getElementById('result-message').textContent = "No questions found.";
                }
            });
        }

        document.getElementById('score-display').textContent = `Score: ${score}`;
    } else {
        alert("Please select an answer.");
    }
});
loadQuestion();
