const questions = [
  {
    question: "Which Indian space mission reached the L1 point in January 2024 to study the Sun?",
    options: ["Chandrayaan-3", "Mangalyaan", "Aditya-L1", "Gaganyaan"],
    correct: "Aditya-L1",
  },
  {
    question: "As of November 2024, what was India's total installed renewable energy capacity?",
    options: ["150 GW", "180 GW", "214 GW", "250 GW"],
    correct: "214 GW",
  },
  {
    question: "Which Indian space agency successfully launched the European Space Agency's Proba-3 satellites in December 2024?",
    options: ["DRDO", "ISRO", "NASA", "SpaceX"],
    correct: "ISRO",
  },
  {
    question: "What was the projected nominal economic growth rate for India in the fiscal year 2024-2025?",
    options: ["8.5%", "9.7%", "10.3%", "11.0%"],
    correct: "10.3%",
  },
  {
    question: "Which Indian festival, known as the festival of lights, was celebrated in November 2024?",
    options: ["Holi", "Diwali", "Eid-Ul-Fitr", "Christmas"],
    correct: "Diwali",
  },
  {
    question: "In 2024, which Indian mission was dedicated to studying X-ray emissions from celestial sources?",
    options: ["XPoSat", "Aditya-L1", "Mangalyaan", "Chandrayaan-3"],
    correct: "XPoSat",
  },
  {
    question: "Which Indian festival, marking the Tamil harvest season, was celebrated in mid-January 2024?",
    options: ["Pongal", "Onam", "Bihu", "Navratri"],
    correct: "Pongal",
  },
  {
    question: "Which Indian mission, planned for 2024, aims to send humans to space for the first time?",
    options: ["Chandrayaan-3", "Gaganyaan", "Mangalyaan", "Aditya-L1"],
    correct: "Gaganyaan",
  },
  {
    question: "Which Indian festival, known for its vibrant colors, was celebrated in March 2024?",
    options: ["Diwali", "Holi", "Eid-Ul-Fitr", "Christmas"],
    correct: "Holi",
  },
  {
    question: "Which Indian festival, dedicated to Lord Shiva, was celebrated in March 2024?",
    options: ["Mahashivratri", "Janmashtami", "Ganesh Chaturthi", "Navratri"],
    correct: "Mahashivratri",
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
