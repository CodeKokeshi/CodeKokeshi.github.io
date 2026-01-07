// IoT Finals Exam Part 2 - App Logic
// Covers Lessons 7-8: Fog Computing & IoT in Practice

let currentQuestions = [];
let userAnswers = {};
let shuffledOptionsMap = {};

// Initialize the exam
function initExam() {
  // Filter questions for Lessons 7-8 only
  currentQuestions = examQuestions.filter(q => 
    q.lesson === "Lesson 7" || q.lesson === "Lesson 8"
  );
  
  // Shuffle options for each question and store mapping
  currentQuestions.forEach(q => {
    const originalOptions = [...q.options];
    const shuffledOptions = shuffleArray([...q.options]);
    
    // Find the new index of the correct answer after shuffling
    const correctAnswerText = originalOptions[q.correct];
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswerText);
    
    shuffledOptionsMap[q.id] = {
      options: shuffledOptions,
      correctIndex: newCorrectIndex
    };
  });
  
  userAnswers = {};
  
  document.getElementById('total-questions').textContent = currentQuestions.length;
  document.getElementById('score-total').textContent = '/' + currentQuestions.length;
  
  renderQuestions();
  updateProgress();
}

// Render all questions
function renderQuestions() {
  const container = document.getElementById('questions-container');
  container.innerHTML = '';
  
  currentQuestions.forEach((q, index) => {
    const shuffledData = shuffledOptionsMap[q.id];
    const questionHTML = `
      <div class="question-card" data-question-id="${q.id}">
        <div class="question-header">
          <span class="question-number">Question ${index + 1} of ${currentQuestions.length}</span>
          <span class="question-topic">${q.topic}</span>
        </div>
        <p class="question-text">${q.question}</p>
        <div class="options-container">
          ${shuffledData.options.map((option, optIndex) => `
            <div class="option-item" onclick="selectOption(${q.id}, ${optIndex})">
              <input type="radio" name="q${q.id}" id="q${q.id}_opt${optIndex}" value="${optIndex}">
              <label for="q${q.id}_opt${optIndex}">${option}</label>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    container.innerHTML += questionHTML;
  });
}

// Handle option selection
function selectOption(questionId, optionIndex) {
  userAnswers[questionId] = optionIndex;
  
  // Update radio button
  document.getElementById(`q${questionId}_opt${optionIndex}`).checked = true;
  
  updateProgress();
}

// Update progress indicator
function updateProgress() {
  const answered = Object.keys(userAnswers).length;
  const total = currentQuestions.length;
  const progressText = document.getElementById('progress-text');
  const submitBtn = document.getElementById('submit-btn');
  
  progressText.textContent = `Answered: ${answered} / ${total}`;
  
  if (answered === total) {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Exam';
  } else {
    submitBtn.disabled = false; // Allow submission even if not all answered
    submitBtn.textContent = `Submit Exam (${total - answered} unanswered)`;
  }
}

// Handle exam submission
function handleSubmit() {
  const unanswered = currentQuestions.length - Object.keys(userAnswers).length;
  
  if (unanswered > 0) {
    if (!confirm(`You have ${unanswered} unanswered question(s). Are you sure you want to submit?`)) {
      return;
    }
  }
  
  calculateAndShowResults();
}

// Calculate and display results
function calculateAndShowResults() {
  let correct = 0;
  let wrong = 0;
  let unanswered = 0;
  
  currentQuestions.forEach(q => {
    const shuffledData = shuffledOptionsMap[q.id];
    const userAnswer = userAnswers[q.id];
    
    if (userAnswer === undefined) {
      unanswered++;
    } else if (userAnswer === shuffledData.correctIndex) {
      correct++;
    } else {
      wrong++;
    }
  });
  
  const total = currentQuestions.length;
  const percentage = Math.round((correct / total) * 100);
  
  // Update score display
  document.getElementById('score-value').textContent = correct;
  document.getElementById('score-percentage').textContent = percentage + '%';
  document.getElementById('correct-count').textContent = correct;
  document.getElementById('wrong-count').textContent = wrong;
  document.getElementById('unanswered-count').textContent = unanswered;
  
  // Set score circle color based on performance
  const scoreCircle = document.getElementById('score-circle');
  scoreCircle.className = 'score-circle';
  if (percentage >= 90) {
    scoreCircle.classList.add('excellent');
  } else if (percentage >= 75) {
    scoreCircle.classList.add('good');
  } else if (percentage >= 50) {
    scoreCircle.classList.add('fair');
  } else {
    scoreCircle.classList.add('poor');
  }
  
  renderDetailedResults();
  
  // Switch screens
  document.getElementById('exam-screen').style.display = 'none';
  document.getElementById('results-screen').style.display = 'block';
  window.scrollTo(0, 0);
}

// Render detailed results for each question
function renderDetailedResults() {
  const container = document.getElementById('detailed-results');
  container.innerHTML = '';
  
  currentQuestions.forEach((q, index) => {
    const shuffledData = shuffledOptionsMap[q.id];
    const userAnswer = userAnswers[q.id];
    const isCorrect = userAnswer === shuffledData.correctIndex;
    const isUnanswered = userAnswer === undefined;
    
    let statusClass, statusIcon, statusText;
    if (isUnanswered) {
      statusClass = 'unanswered';
      statusIcon = '?';
      statusText = 'Unanswered';
    } else if (isCorrect) {
      statusClass = 'correct';
      statusIcon = '✓';
      statusText = 'Correct';
    } else {
      statusClass = 'wrong';
      statusIcon = '✗';
      statusText = 'Wrong';
    }
    
    const resultHTML = `
      <div class="result-card ${statusClass}">
        <div class="result-header">
          <div class="result-status">
            <span class="status-icon ${statusClass}">${statusIcon}</span>
            <span class="status-text ${statusClass}">${statusText}</span>
          </div>
          <span class="result-number">Question ${index + 1}</span>
        </div>
        <span class="result-topic">${q.topic}</span>
        <p class="result-question-text">${q.question}</p>
        <div class="result-answers">
          ${shuffledData.options.map((option, optIndex) => {
            let optionClass = '';
            let iconHTML = '';
            let labelHTML = '';
            
            const isThisCorrect = optIndex === shuffledData.correctIndex;
            const isUserChoice = optIndex === userAnswer;
            
            if (isThisCorrect && isUserChoice) {
              optionClass = 'user-correct-answer';
              iconHTML = '<span class="answer-icon correct">✓</span>';
              labelHTML = '<span class="answer-label correct">Your Answer (Correct)</span>';
            } else if (isThisCorrect) {
              optionClass = 'correct-answer';
              iconHTML = '<span class="answer-icon correct">✓</span>';
              labelHTML = '<span class="answer-label correct">Correct Answer</span>';
            } else if (isUserChoice) {
              optionClass = 'user-wrong-answer';
              iconHTML = '<span class="answer-icon wrong">✗</span>';
              labelHTML = '<span class="answer-label wrong">Your Answer</span>';
            }
            
            return `
              <div class="result-answer-option ${optionClass}">
                ${iconHTML}
                <span class="answer-text">${option}</span>
                ${labelHTML}
              </div>
            `;
          }).join('')}
        </div>
        <div class="result-explanation">
          <strong>Explanation:</strong> ${q.explanation}
        </div>
      </div>
    `;
    container.innerHTML += resultHTML;
  });
}

// Handle reset (back to menu)
function handleReset() {
  window.location.href = 'index.html';
}

// Handle retake
function handleRetake() {
  document.getElementById('results-screen').style.display = 'none';
  document.getElementById('exam-screen').style.display = 'block';
  initExam();
  window.scrollTo(0, 0);
}

// Event listeners
document.getElementById('submit-btn').addEventListener('click', handleSubmit);
document.getElementById('reset-btn').addEventListener('click', handleReset);
document.getElementById('retake-btn').addEventListener('click', handleRetake);

// Initialize on page load
document.addEventListener('DOMContentLoaded', initExam);
