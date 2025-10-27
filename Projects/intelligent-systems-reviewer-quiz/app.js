// ===========================
// STATE MANAGEMENT
// ===========================
let currentFlashcardIndex = 0;
let flashcards = [...flashcardsData];
let flashcardStats = {
    recalled: new Set(),
    notRecalled: new Set()
};

let quizState = {
    currentQuestionIndex: 0,
    questions: [],
    userAnswers: [],
    startTime: null,
    correctCount: 0,
    incorrectCount: 0
};

// ===========================
// THEME MANAGEMENT
// ===========================
function initTheme() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeButtons(savedTheme);
}

function updateThemeButtons(activeTheme) {
    document.querySelectorAll('.theme-button').forEach(btn => {
        const isActive = btn.dataset.themeOption === activeTheme;
        btn.setAttribute('aria-pressed', isActive);
    });
}

function switchTheme(themeName) {
    document.body.setAttribute('data-theme', themeName);
    localStorage.setItem('selectedTheme', themeName);
    updateThemeButtons(themeName);
}

// ===========================
// LOCAL STORAGE FUNCTIONS
// ===========================
function saveStats() {
    localStorage.setItem('flashcardStats', JSON.stringify({
        recalled: Array.from(flashcardStats.recalled),
        notRecalled: Array.from(flashcardStats.notRecalled)
    }));
}

function loadStats() {
    const saved = localStorage.getItem('flashcardStats');
    if (saved) {
        const data = JSON.parse(saved);
        flashcardStats.recalled = new Set(data.recalled);
        flashcardStats.notRecalled = new Set(data.notRecalled);
    }
}

function saveQuizHistory(score, correct, incorrect, timeTaken) {
    let history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    history.push({
        score,
        correct,
        incorrect,
        timeTaken,
        date: new Date().toISOString()
    });
    localStorage.setItem('quizHistory', JSON.stringify(history));
}

function getQuizHistory() {
    return JSON.parse(localStorage.getItem('quizHistory') || '[]');
}

// ===========================
// NAVIGATION
// ===========================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.target.closest('.nav-link').dataset.section;
        
        // Update nav active state
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        e.target.closest('.nav-link').classList.add('active');
        
        // Show appropriate section
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
        document.getElementById(`${section}-section`).classList.add('active');
        
        // Update stats if viewing stats section
        if (section === 'stats') {
            updateStatsDisplay();
        }
    });
});

// ===========================
// FLASHCARD FUNCTIONALITY
// ===========================
function displayFlashcard() {
    const flashcard = flashcards[currentFlashcardIndex];
    const flashcardElement = document.getElementById('flashcard');
    
    flashcardElement.classList.remove('flipped');
    
    document.getElementById('flashcard-question').textContent = flashcard.question;
    document.getElementById('flashcard-answer').textContent = flashcard.answer;
    
    const cardNumber = `${currentFlashcardIndex + 1} / ${flashcards.length}`;
    document.getElementById('card-number').textContent = cardNumber;
    document.getElementById('card-number-back').textContent = cardNumber;
    
    updateFlashcardProgress();
}

function updateFlashcardProgress() {
    const total = flashcards.length;
    const reviewed = flashcardStats.recalled.size + flashcardStats.notRecalled.size;
    const percentage = (reviewed / total) * 100;
    
    document.getElementById('flashcard-progress').style.width = `${percentage}%`;
    document.getElementById('progress-text').textContent = `${reviewed} / ${total}`;
}

// Flip flashcard
document.getElementById('flashcard').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

// Rating buttons
document.getElementById('recalled').addEventListener('click', () => {
    const currentCard = flashcards[currentFlashcardIndex];
    flashcardStats.recalled.add(JSON.stringify(currentCard));
    flashcardStats.notRecalled.delete(JSON.stringify(currentCard));
    saveStats();
    nextFlashcard();
});

document.getElementById('not-recalled').addEventListener('click', () => {
    const currentCard = flashcards[currentFlashcardIndex];
    flashcardStats.notRecalled.add(JSON.stringify(currentCard));
    flashcardStats.recalled.delete(JSON.stringify(currentCard));
    saveStats();
    nextFlashcard();
});

// Navigation buttons
document.getElementById('prev-card').addEventListener('click', () => {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        displayFlashcard();
    }
});

document.getElementById('next-card').addEventListener('click', () => {
    nextFlashcard();
});

function nextFlashcard() {
    if (currentFlashcardIndex < flashcards.length - 1) {
        currentFlashcardIndex++;
        displayFlashcard();
    } else {
        alert('You\'ve reached the end! Click "Previous" to review or "Shuffle" for a new order.');
    }
}

// Shuffle flashcards
document.getElementById('shuffle-btn').addEventListener('click', () => {
    flashcards = shuffleArray([...flashcardsData]);
    currentFlashcardIndex = 0;
    displayFlashcard();
});

// Reset flashcards
document.getElementById('reset-flashcards').addEventListener('click', () => {
    if (confirm('Reset all flashcard progress?')) {
        flashcardStats.recalled.clear();
        flashcardStats.notRecalled.clear();
        saveStats();
        currentFlashcardIndex = 0;
        displayFlashcard();
    }
});

// ===========================
// QUIZ FUNCTIONALITY
// ===========================
document.getElementById('start-quiz').addEventListener('click', () => {
    document.getElementById('quiz-setup').classList.remove('d-none');
    document.getElementById('quiz-container').classList.add('d-none');
    document.getElementById('quiz-results').classList.add('d-none');
});

document.getElementById('begin-quiz').addEventListener('click', () => {
    const includeMCQ = document.getElementById('include-mcq').checked;
    const includeMultiSelect = document.getElementById('include-multiselect').checked;
    const includeFillBlank = document.getElementById('include-fillblank').checked;
    const includeAbbreviation = document.getElementById('include-abbreviation').checked;
    const numQuestions = parseInt(document.getElementById('num-questions').value);
    
    if (!includeMCQ && !includeMultiSelect && !includeFillBlank && !includeAbbreviation) {
        alert('Please select at least one question type!');
        return;
    }
    
    // Generate quiz questions
    let allQuestions = [];
    if (includeMCQ) allQuestions.push(...quizQuestions.multipleChoice.map(q => ({...q, type: 'mcq'})));
    if (includeMultiSelect) allQuestions.push(...quizQuestions.multiSelect.map(q => ({...q, type: 'multiselect'})));
    if (includeFillBlank) allQuestions.push(...quizQuestions.fillInTheBlank.map(q => ({...q, type: 'fillblank'})));
    if (includeAbbreviation) allQuestions.push(...quizQuestions.abbreviations.map(q => ({...q, type: 'abbreviation'})));
    
    allQuestions = shuffleArray(allQuestions);
    quizState.questions = allQuestions.slice(0, Math.min(numQuestions, allQuestions.length));
    quizState.currentQuestionIndex = 0;
    quizState.userAnswers = [];
    quizState.correctCount = 0;
    quizState.incorrectCount = 0;
    quizState.startTime = Date.now();
    
    document.getElementById('quiz-setup').classList.add('d-none');
    document.getElementById('quiz-container').classList.remove('d-none');
    
    displayQuestion();
});

function displayQuestion() {
    const question = quizState.questions[quizState.currentQuestionIndex];
    const progress = ((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100;
    
    document.getElementById('quiz-progress').style.width = `${progress}%`;
    document.getElementById('quiz-progress-text').textContent = 
        `Question ${quizState.currentQuestionIndex + 1} / ${quizState.questions.length}`;
    
    // Set question type badge
    const badges = {
        'mcq': 'Multiple Choice',
        'multiselect': 'Multi-Select',
        'fillblank': 'Fill in the Blank',
        'abbreviation': 'Define Abbreviation'
    };
    document.getElementById('question-type-badge').textContent = badges[question.type];
    
    // Display question
    if (question.type === 'abbreviation') {
        document.getElementById('quiz-question').textContent = `What does "${question.question}" stand for?`;
    } else {
        document.getElementById('quiz-question').textContent = question.question;
    }
    
    // Display options
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    if (question.type === 'mcq') {
        question.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'form-check';
            div.innerHTML = `
                <input class="form-check-input" type="radio" name="quiz-option" id="option-${index}" value="${index}">
                <label class="form-check-label" for="option-${index}">${option}</label>
            `;
            optionsContainer.appendChild(div);
        });
    } else if (question.type === 'multiselect') {
        question.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'form-check';
            div.innerHTML = `
                <input class="form-check-input" type="checkbox" id="option-${index}" value="${index}">
                <label class="form-check-label" for="option-${index}">${option}</label>
            `;
            optionsContainer.appendChild(div);
        });
    } else if (question.type === 'fillblank' || question.type === 'abbreviation') {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.id = 'fill-answer';
        input.placeholder = 'Type your answer here...';
        optionsContainer.appendChild(input);
        
        // Focus on input
        setTimeout(() => input.focus(), 100);
        
        // Allow Enter key to submit
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('submit-answer').click();
            }
        });
    }
    
    // Reset buttons
    document.getElementById('submit-answer').classList.remove('d-none');
    document.getElementById('next-question').classList.add('d-none');
    document.getElementById('quiz-feedback').classList.add('d-none');
}

document.getElementById('submit-answer').addEventListener('click', () => {
    const question = quizState.questions[quizState.currentQuestionIndex];
    let userAnswer, isCorrect;
    
    if (question.type === 'mcq') {
        const selected = document.querySelector('input[name="quiz-option"]:checked');
        if (!selected) {
            alert('Please select an answer!');
            return;
        }
        userAnswer = parseInt(selected.value);
        isCorrect = userAnswer === question.correct;
    } else if (question.type === 'multiselect') {
        const selected = Array.from(document.querySelectorAll('#quiz-options input:checked'))
            .map(input => parseInt(input.value));
        if (selected.length === 0) {
            alert('Please select at least one answer!');
            return;
        }
        userAnswer = selected;
        isCorrect = arraysEqual(selected.sort(), question.correct.sort());
    } else if (question.type === 'fillblank' || question.type === 'abbreviation') {
        userAnswer = document.getElementById('fill-answer').value.trim();
        if (!userAnswer) {
            alert('Please enter an answer!');
            return;
        }
        
        const correctAnswer = question.answer.toLowerCase();
        const userAnswerLower = userAnswer.toLowerCase();
        
        if (question.alternativeAnswers) {
            isCorrect = correctAnswer === userAnswerLower || 
                       question.alternativeAnswers.some(alt => alt.toLowerCase() === userAnswerLower);
        } else {
            isCorrect = correctAnswer === userAnswerLower;
        }
    }
    
    // Save answer
    quizState.userAnswers.push({
        question: question,
        userAnswer: userAnswer,
        isCorrect: isCorrect
    });
    
    if (isCorrect) {
        quizState.correctCount++;
    } else {
        quizState.incorrectCount++;
    }
    
    // Show feedback
    const feedbackElement = document.getElementById('quiz-feedback');
    feedbackElement.classList.remove('d-none', 'alert-success', 'alert-danger');
    
    if (isCorrect) {
        feedbackElement.classList.add('alert-success');
        feedbackElement.innerHTML = `<strong>✓ Correct!</strong> ${question.explanation}`;
    } else {
        feedbackElement.classList.add('alert-danger');
        let correctAnswerText;
        if (question.type === 'mcq') {
            correctAnswerText = question.options[question.correct];
        } else if (question.type === 'multiselect') {
            correctAnswerText = question.correct.map(i => question.options[i]).join(', ');
        } else {
            correctAnswerText = question.answer;
        }
        feedbackElement.innerHTML = `<strong>✗ Incorrect.</strong> The correct answer is: <strong>${correctAnswerText}</strong><br>${question.explanation}`;
    }
    
    // Disable inputs
    document.querySelectorAll('#quiz-options input').forEach(input => input.disabled = true);
    
    // Show next button or finish
    document.getElementById('submit-answer').classList.add('d-none');
    document.getElementById('next-question').classList.remove('d-none');
});

document.getElementById('next-question').addEventListener('click', () => {
    quizState.currentQuestionIndex++;
    
    if (quizState.currentQuestionIndex < quizState.questions.length) {
        displayQuestion();
    } else {
        showQuizResults();
    }
});

function showQuizResults() {
    const timeTaken = Math.floor((Date.now() - quizState.startTime) / 1000);
    const score = Math.round((quizState.correctCount / quizState.questions.length) * 100);
    
    // Save to history
    saveQuizHistory(score, quizState.correctCount, quizState.incorrectCount, timeTaken);
    
    // Display results
    document.getElementById('quiz-container').classList.add('d-none');
    document.getElementById('quiz-results').classList.remove('d-none');
    
    document.getElementById('final-score').textContent = `${score}%`;
    document.getElementById('score-fraction').textContent = 
        `${quizState.correctCount} / ${quizState.questions.length}`;
    document.getElementById('correct-count').textContent = quizState.correctCount;
    document.getElementById('incorrect-count').textContent = quizState.incorrectCount;
    document.getElementById('time-taken').textContent = formatTime(timeTaken);
}

document.getElementById('retake-quiz').addEventListener('click', () => {
    document.getElementById('start-quiz').click();
});

document.getElementById('review-answers').addEventListener('click', () => {
    const reviewContainer = document.getElementById('review-container');
    const answerReview = document.getElementById('answer-review');
    
    reviewContainer.innerHTML = '';
    
    quizState.userAnswers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        
        let questionText = answer.question.question;
        if (answer.question.type === 'abbreviation') {
            questionText = `What does "${answer.question.question}" stand for?`;
        }
        
        let userAnswerText, correctAnswerText;
        
        if (answer.question.type === 'mcq') {
            userAnswerText = answer.question.options[answer.userAnswer];
            correctAnswerText = answer.question.options[answer.question.correct];
        } else if (answer.question.type === 'multiselect') {
            userAnswerText = answer.userAnswer.map(i => answer.question.options[i]).join(', ');
            correctAnswerText = answer.question.correct.map(i => answer.question.options[i]).join(', ');
        } else {
            userAnswerText = answer.userAnswer;
            correctAnswerText = answer.question.answer;
        }
        
        div.innerHTML = `
            <h5>Question ${index + 1}: ${answer.isCorrect ? '✓' : '✗'}</h5>
            <p><strong>Q:</strong> ${questionText}</p>
            <div class="review-answer user">
                <strong>Your Answer:</strong> ${userAnswerText}
            </div>
            ${!answer.isCorrect ? `
                <div class="review-answer correct-answer">
                    <strong>Correct Answer:</strong> ${correctAnswerText}
                </div>
            ` : ''}
            <p class="mt-2"><small>${answer.question.explanation}</small></p>
        `;
        
        reviewContainer.appendChild(div);
    });
    
    answerReview.classList.remove('d-none');
    answerReview.scrollIntoView({ behavior: 'smooth' });
});

// ===========================
// STATS FUNCTIONALITY
// ===========================
function updateStatsDisplay() {
    // Flashcard stats
    const totalReviewed = flashcardStats.recalled.size + flashcardStats.notRecalled.size;
    const recallRate = totalReviewed > 0 
        ? Math.round((flashcardStats.recalled.size / totalReviewed) * 100) 
        : 0;
    
    document.getElementById('total-reviewed').textContent = totalReviewed;
    document.getElementById('total-recalled').textContent = flashcardStats.recalled.size;
    document.getElementById('total-not-recalled').textContent = flashcardStats.notRecalled.size;
    document.getElementById('recall-rate').textContent = `${recallRate}%`;
    
    // Quiz stats
    const history = getQuizHistory();
    const quizzesTaken = history.length;
    const avgScore = quizzesTaken > 0 
        ? Math.round(history.reduce((sum, h) => sum + h.score, 0) / quizzesTaken) 
        : 0;
    const bestScore = quizzesTaken > 0 
        ? Math.max(...history.map(h => h.score)) 
        : 0;
    const totalQuestions = history.reduce((sum, h) => sum + h.correct + h.incorrect, 0);
    
    document.getElementById('quizzes-taken').textContent = quizzesTaken;
    document.getElementById('average-score').textContent = `${avgScore}%`;
    document.getElementById('best-score').textContent = `${bestScore}%`;
    document.getElementById('total-questions').textContent = totalQuestions;
}

document.getElementById('reset-stats').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset ALL statistics? This cannot be undone!')) {
        localStorage.clear();
        flashcardStats.recalled.clear();
        flashcardStats.notRecalled.clear();
        updateStatsDisplay();
        alert('All statistics have been reset!');
    }
});

// ===========================
// UTILITY FUNCTIONS
// ===========================
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ===========================
// INITIALIZATION
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadStats();
    displayFlashcard();
    updateStatsDisplay();
    
    // Theme switcher event listeners
    document.querySelectorAll('.theme-button').forEach(button => {
        button.addEventListener('click', () => {
            switchTheme(button.dataset.themeOption);
        });
    });
});

