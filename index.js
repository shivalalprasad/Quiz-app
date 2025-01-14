const questions = [
  {
    question: "What is 2 + 2?",
    options: [3, 4, 5, 6],
    correct: 4
  },
  { question: "What is the capital of France?",
    options: ["Paris", "Rome", "Berlin", "Madrid"],
    correct: "Paris"
  },
  {
    question: "What is 5 x 3?",
    options: [15, 20, 25, 30],
    correct: 15
  },
  {
    question: "What color is the sky?",
    options: ["Blue", "Green", "Red", "Yellow"],
    correct: "Blue"
  },
  {
    question: "How many days are in a week?",
    options: [5, 6, 7, 8],
    correct: 7
  },
  {
    question: "What is 10 - 4?",
    options: [4, 6, 8, 10],
    correct: 6
  },
  {
    question: "What is 3 x 3?",
    options: [6, 9, 12, 15],
    correct: 9
  },
  {
    question: "What is the boiling point of water?",
    options: [50, 70, 90, 100],
    correct: 100
  },
  {
    question: "How many continents are there?",
    options: [5, 6, 7, 8],
    correct: 7
  },
  {
    question: "What is the square root of 16?",
    options: [2, 3, 4, 5],
    correct: 4
  },
  {
    question: "What is 2 + 2?",
    options: [3, 4, 5, 6],
    correct: 4,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correct: "Mars",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    question: "Which language is primarily used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    correct: "JavaScript",
  },
  {
    question: "What is 5 * 3?",
    options: [8, 10, 15, 20],
    correct: 15,
  },
  {
    question: "What is the boiling point of water?",
    options: ["50°C", "100°C", "150°C", "200°C"],
    correct: "100°C",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    correct: "William Shakespeare",
  },
  {
    question: "What is the smallest prime number?",
    options: [1, 2, 3, 5],
    correct: 2,
  },
  {
    question: "Which is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Shark", "Dinosaur"],
    correct: "Blue Whale",
  },
  {
    question: "What is the square root of 16?",
    options: [2, 4, 8, 16],
    correct: 4,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const resultContainer = document.getElementById('result-container');
const finalScoreElement = document.getElementById('final-score');
const restartButton = document.getElementById('restart-btn');
const quizContainer = document.getElementById('quiz-container');

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}: ${currentQuestion.question}`;

  optionsContainer.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('w-full', 'bg-gray-200', 'py-2', 'rounded', 'hover:bg-gray-300');
    button.addEventListener('click', () => selectAnswer(button, option));
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(button, selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedOption === currentQuestion.correct) {
    button.classList.add('correct');
    score++;
    scoreElement.textContent = score;
  } else {
    button.classList.add('incorrect');
  }

  Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);
}

function showResult() {
  quizContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');
  finalScoreElement.textContent = `Your final score is ${score}/${questions.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.textContent = score;
  quizContainer.classList.remove('hidden');
  resultContainer.classList.add('hidden');
  loadQuestion();
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showResult();
  }
});

restartButton.addEventListener('click', restartQuiz);

loadQuestion();
