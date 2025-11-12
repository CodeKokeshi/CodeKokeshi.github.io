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
    incorrectCount: 0,
    draggedElement: null
};

// ===========================
// THEME MANAGEMENT
// ===========================
function initTheme() {
    const savedTheme = localStorage.getItem('hci_selectedTheme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButtons(savedTheme);
}

function updateThemeButtons(activeTheme) {
    document.querySelectorAll('.theme-button').forEach(btn => {
        const isActive = btn.dataset.themeOption === activeTheme;
        btn.setAttribute('aria-pressed', isActive);
    });
}

function switchTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('hci_selectedTheme', themeName);
    updateThemeButtons(themeName);
}

// ===========================
// LOCAL STORAGE FUNCTIONS
// ===========================
function saveStats() {
    localStorage.setItem('hci_flashcardStats', JSON.stringify({
        recalled: Array.from(flashcardStats.recalled),
        notRecalled: Array.from(flashcardStats.notRecalled)
    }));
}

function loadStats() {
    const saved = localStorage.getItem('hci_flashcardStats');
    if (saved) {
        const data = JSON.parse(saved);
        flashcardStats.recalled = new Set(data.recalled);
        flashcardStats.notRecalled = new Set(data.notRecalled);
    }
}

function saveQuizHistory(score, correct, incorrect, timeTaken) {
    let history = JSON.parse(localStorage.getItem('hci_quizHistory') || '[]');
    history.push({
        score,
        correct,
        incorrect,
        timeTaken,
        date: new Date().toISOString()
    });
    // Keep only last 10 quiz attempts
    if (history.length > 10) history = history.slice(-10);
    localStorage.setItem('hci_quizHistory', JSON.stringify(history));
}

function getQuizHistory() {
    return JSON.parse(localStorage.getItem('hci_quizHistory') || '[]');
}

function clearAllStats() {
    if (confirm('Are you sure you want to clear all statistics? This cannot be undone.')) {
        localStorage.removeItem('hci_flashcardStats');
        localStorage.removeItem('hci_quizHistory');
        flashcardStats = { recalled: new Set(), notRecalled: new Set() };
        updateFlashcardProgress();
        updateStatsDisplay();
        alert('All statistics cleared!');
    }
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

function nextFlashcard() {
    if (currentFlashcardIndex < flashcards.length - 1) {
        currentFlashcardIndex++;
    } else {
        currentFlashcardIndex = 0; // Loop back
    }
    displayFlashcard();
}

function prevFlashcard() {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
    } else {
        currentFlashcardIndex = flashcards.length - 1; // Go to last
    }
    displayFlashcard();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
document.getElementById('prev-card').addEventListener('click', prevFlashcard);
document.getElementById('next-card').addEventListener('click', nextFlashcard);

// Shuffle button
document.getElementById('shuffle-btn').addEventListener('click', () => {
    flashcards = shuffleArray([...flashcardsData]);
    currentFlashcardIndex = 0;
    displayFlashcard();
});

// Reset flashcards
document.getElementById('reset-flashcards').addEventListener('click', () => {
    if (confirm('Reset all flashcard progress?')) {
        flashcardStats = { recalled: new Set(), notRecalled: new Set() };
        saveStats();
        updateFlashcardProgress();
    }
});

// ===========================
// QUIZ FUNCTIONALITY
// ===========================

// Start quiz button - show setup
document.getElementById('start-quiz').addEventListener('click', () => {
    document.getElementById('quiz-setup').classList.remove('d-none');
    document.getElementById('quiz-container').classList.add('d-none');
    document.getElementById('quiz-results').classList.add('d-none');
    document.getElementById('start-quiz').classList.add('d-none');
});

// Begin quiz
document.getElementById('begin-quiz').addEventListener('click', () => {
    const selectedTypes = [];
    if (document.getElementById('include-mcq').checked) selectedTypes.push('multiple-choice');
    if (document.getElementById('include-multiselect').checked) selectedTypes.push('multi-select');
    if (document.getElementById('include-fillblank').checked) selectedTypes.push('fill-in-blank');
    if (document.getElementById('include-dragmatch').checked) selectedTypes.push('drag-match');
    if (document.getElementById('include-categorization').checked) selectedTypes.push('categorization');
    
    if (selectedTypes.length === 0) {
        alert('Please select at least one question type!');
        return;
    }
    
    const numQuestions = parseInt(document.getElementById('num-questions').value);
    
    // Filter and shuffle questions
    let filteredQuestions = quizQuestionsData.filter(q => selectedTypes.includes(q.type));
    filteredQuestions = shuffleArray(filteredQuestions);
    quizState.questions = filteredQuestions.slice(0, Math.min(numQuestions, filteredQuestions.length));
    
    if (quizState.questions.length === 0) {
        alert('No questions available for selected types!');
        return;
    }
    
    // Reset quiz state
    quizState.currentQuestionIndex = 0;
    quizState.userAnswers = new Array(quizState.questions.length).fill(null);
    quizState.startTime = Date.now();
    quizState.correctCount = 0;
    quizState.incorrectCount = 0;
    
    // Show quiz container
    document.getElementById('quiz-setup').classList.add('d-none');
    document.getElementById('quiz-container').classList.remove('d-none');
    
    loadQuizQuestion();
});

function loadQuizQuestion() {
    const question = quizState.questions[quizState.currentQuestionIndex];
    const optionsContainer = document.getElementById('quiz-options');
    
    document.getElementById('quiz-question').textContent = question.question;
    document.getElementById('question-type-badge').textContent = getQuestionTypeBadge(question.type);
    document.getElementById('quiz-feedback').classList.add('d-none');
    
    optionsContainer.innerHTML = '';
    
    switch (question.type) {
        case 'multiple-choice':
            renderMCQ(question, optionsContainer);
            break;
        case 'multi-select':
            renderMultiSelect(question, optionsContainer);
            break;
        case 'fill-in-blank':
            renderFillBlank(question, optionsContainer);
            break;
        case 'drag-match':
            renderDragMatch(question, optionsContainer);
            break;
        case 'categorization':
            renderCategorization(question, optionsContainer);
            break;
    }
    
    updateQuizProgress();
    document.getElementById('submit-answer').classList.remove('d-none');
    document.getElementById('next-question').classList.add('d-none');
}

function getQuestionTypeBadge(type) {
    const badges = {
        'multiple-choice': 'Multiple Choice',
        'multi-select': 'Multi-Select',
        'fill-in-blank': 'Fill in the Blank',
        'drag-match': '🎮 Drag & Match',
        'categorization': '🎯 Categorization'
    };
    return badges[type] || type;
}

function renderMCQ(question, container) {
    question.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'form-check';
        div.innerHTML = `
            <input class="form-check-input" type="radio" name="quiz-option" id="opt-${index}" value="${option}">
            <label class="form-check-label" for="opt-${index}">${option}</label>
        `;
        container.appendChild(div);
    });
}

function renderMultiSelect(question, container) {
    question.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'form-check';
        div.innerHTML = `
            <input class="form-check-input" type="checkbox" name="quiz-option" id="opt-${index}" value="${option}">
            <label class="form-check-label" for="opt-${index}">${option}</label>
        `;
        container.appendChild(div);
    });
}

function renderFillBlank(question, container) {
    const blankId = 'fill-blank-input';
    const div = document.createElement('div');
    div.className = 'mb-3';
    div.innerHTML = `
        <label class="form-label">Your Answer:</label>
        <input type="text" class="form-control" id="${blankId}" placeholder="Type your answer here">
    `;
    container.appendChild(div);
}

function renderDragMatch(question, container) {
    const matchContainer = document.createElement('div');
    matchContainer.className = 'matching-container';
    matchContainer.innerHTML = `
        <div class="matching-column">
            <h5>Items</h5>
            <div id="match-items"></div>
        </div>
        <div class="matching-column">
            <h5>Drop Here</h5>
            <div id="match-zones"></div>
        </div>
    `;
    container.appendChild(matchContainer);
    
    // Render draggable items
    const itemsContainer = matchContainer.querySelector('#match-items');
    const shuffledMatches = shuffleArray([...question.pairs.map(p => p.match)]);
    
    shuffledMatches.forEach((match, index) => {
        const item = document.createElement('div');
        item.className = 'draggable-match-item';
        item.textContent = match;
        item.draggable = true;
        item.dataset.match = match;
        item.dataset.id = `match-${index}`;
        
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', match);
            quizState.draggedElement = item;
            item.classList.add('dragging');
        });
        
        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
            quizState.draggedElement = null;
        });
        
        itemsContainer.appendChild(item);
    });
    
    // Render drop zones
    const zonesContainer = matchContainer.querySelector('#match-zones');
    question.pairs.forEach((pair, index) => {
        const zone = document.createElement('div');
        zone.className = 'drop-zone-match';
        zone.dataset.stem = pair.stem;
        zone.innerHTML = `<div class="stem-text">${pair.stem}</div>`;
        
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            
            // Check if zone already has an item
            const existing = zone.querySelector('.dropped-item');
            if (existing && quizState.draggedElement) {
                // Return the existing item to the items container
                const oldItem = document.createElement('div');
                oldItem.className = 'draggable-match-item';
                oldItem.draggable = true;
                oldItem.textContent = existing.dataset.match;
                oldItem.dataset.match = existing.dataset.match;
                
                // Re-add drag listeners to the returned item
                oldItem.addEventListener('dragstart', (e) => {
                    quizState.draggedElement = oldItem;
                    oldItem.classList.add('dragging');
                });
                oldItem.addEventListener('dragend', () => {
                    oldItem.classList.remove('dragging');
                });
                
                itemsContainer.appendChild(oldItem);
                existing.remove();
            }
            
            // Add new dropped item
            if (quizState.draggedElement) {
                const droppedItem = document.createElement('div');
                droppedItem.className = 'dropped-item';
                droppedItem.textContent = quizState.draggedElement.dataset.match;
                droppedItem.dataset.match = quizState.draggedElement.dataset.match;
                
                // Make it clickable to remove
                droppedItem.addEventListener('click', () => {
                    const returnItem = document.createElement('div');
                    returnItem.className = 'draggable-match-item';
                    returnItem.draggable = true;
                    returnItem.textContent = droppedItem.dataset.match;
                    returnItem.dataset.match = droppedItem.dataset.match;
                    
                    // Re-add drag listeners
                    returnItem.addEventListener('dragstart', (e) => {
                        quizState.draggedElement = returnItem;
                        returnItem.classList.add('dragging');
                    });
                    returnItem.addEventListener('dragend', () => {
                        returnItem.classList.remove('dragging');
                    });
                    
                    itemsContainer.appendChild(returnItem);
                    droppedItem.remove();
                });
                
                zone.appendChild(droppedItem);
                quizState.draggedElement.remove();
            }
        });
        
        zonesContainer.appendChild(zone);
    });
}

function renderCategorization(question, container) {
    const catContainer = document.createElement('div');
    
    // Items pool
    const poolDiv = document.createElement('div');
    poolDiv.innerHTML = '<h6 class="mb-2">Items to sort:</h6>';
    const pool = document.createElement('div');
    pool.className = 'draggable-items-pool';
    pool.id = 'cat-items-pool';
    
    const shuffledItems = shuffleArray([...question.items]);
    shuffledItems.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'draggable-item';
        itemEl.textContent = item.text;
        itemEl.draggable = true;
        itemEl.dataset.text = item.text;
        itemEl.dataset.id = `cat-item-${index}`;
        
        itemEl.addEventListener('dragstart', (e) => {
            quizState.draggedElement = itemEl;
            itemEl.classList.add('dragging');
        });
        
        itemEl.addEventListener('dragend', () => {
            itemEl.classList.remove('dragging');
        });
        
        pool.appendChild(itemEl);
    });
    
    poolDiv.appendChild(pool);
    catContainer.appendChild(poolDiv);
    
    // Category buckets
    const bucketsDiv = document.createElement('div');
    bucketsDiv.className = 'categorization-container mt-3';
    
    question.categories.forEach(category => {
        const bucket = document.createElement('div');
        bucket.className = 'drop-bucket';
        bucket.dataset.category = category;
        bucket.innerHTML = `<h6>${category}</h6>`;
        
        bucket.addEventListener('dragover', (e) => {
            e.preventDefault();
            bucket.classList.add('drag-over');
        });
        
        bucket.addEventListener('dragleave', () => {
            bucket.classList.remove('drag-over');
        });
        
        bucket.addEventListener('drop', (e) => {
            e.preventDefault();
            bucket.classList.remove('drag-over');
            if (quizState.draggedElement) {
                bucket.appendChild(quizState.draggedElement);
            }
        });
        
        bucketsDiv.appendChild(bucket);
    });
    
    // Allow dropping back to pool
    pool.addEventListener('dragover', (e) => {
        e.preventDefault();
        pool.classList.add('drag-over');
    });
    
    pool.addEventListener('dragleave', () => {
        pool.classList.remove('drag-over');
    });
    
    pool.addEventListener('drop', (e) => {
        e.preventDefault();
        pool.classList.remove('drag-over');
        if (quizState.draggedElement) {
            pool.appendChild(quizState.draggedElement);
        }
    });
    
    catContainer.appendChild(bucketsDiv);
    container.appendChild(catContainer);
}

// Submit answer
document.getElementById('submit-answer').addEventListener('click', () => {
    const question = quizState.questions[quizState.currentQuestionIndex];
    let userAnswer = null;
    
    // Collect user answer based on type
    switch (question.type) {
        case 'multiple-choice':
            const selected = document.querySelector('input[name="quiz-option"]:checked');
            userAnswer = selected ? selected.value : null;
            break;
        case 'multi-select':
            const selectedOptions = document.querySelectorAll('input[name="quiz-option"]:checked');
            userAnswer = Array.from(selectedOptions).map(opt => opt.value);
            break;
        case 'fill-in-blank':
            userAnswer = document.getElementById('fill-blank-input').value.trim().toUpperCase();
            break;
        case 'drag-match':
            userAnswer = {};
            document.querySelectorAll('.drop-zone-match').forEach(zone => {
                const dropped = zone.querySelector('.dropped-item');
                userAnswer[zone.dataset.stem] = dropped ? dropped.dataset.match : null;
            });
            break;
        case 'categorization':
            userAnswer = {};
            question.categories.forEach(cat => {
                const bucket = document.querySelector(`.drop-bucket[data-category="${cat}"]`);
                const items = bucket.querySelectorAll('.draggable-item');
                userAnswer[cat] = Array.from(items).map(item => item.dataset.text);
            });
            break;
    }
    
    quizState.userAnswers[quizState.currentQuestionIndex] = userAnswer;
    
    // Check answer
    const isCorrect = checkAnswer(question, userAnswer);
    if (isCorrect) {
        quizState.correctCount++;
    } else {
        quizState.incorrectCount++;
    }
    
    // Show feedback
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('d-none', 'alert-success', 'alert-danger');
    feedback.classList.add(isCorrect ? 'alert-success' : 'alert-danger');
    feedback.textContent = isCorrect ? '✓ Correct!' : `✗ Incorrect. ${getCorrectAnswerText(question)}`;
    
    // Update buttons
    document.getElementById('submit-answer').classList.add('d-none');
    document.getElementById('next-question').classList.remove('d-none');
    
    // Disable inputs
    document.querySelectorAll('input, .draggable-item, .drop-bucket').forEach(el => {
        el.disabled = true;
        if (el.classList.contains('draggable-item')) {
            el.draggable = false;
        }
    });
});

function checkAnswer(question, userAnswer) {
    if (!userAnswer) return false;
    
    switch (question.type) {
        case 'multiple-choice':
        case 'fill-in-blank':
            return userAnswer === question.answer || userAnswer === question.answer.toUpperCase();
        case 'multi-select':
            if (!Array.isArray(userAnswer) || userAnswer.length !== question.answer.length) return false;
            return question.answer.every(ans => userAnswer.includes(ans));
        case 'drag-match':
            return question.pairs.every(pair => userAnswer[pair.stem] === pair.match);
        case 'categorization':
            return question.items.every(item => 
                userAnswer[item.category] && userAnswer[item.category].includes(item.text)
            );
    }
    return false;
}

function getCorrectAnswerText(question) {
    switch (question.type) {
        case 'multiple-choice':
        case 'fill-in-blank':
            return `Correct answer: ${question.answer}`;
        case 'multi-select':
            return `Correct answers: ${question.answer.join(', ')}`;
        case 'drag-match':
        case 'categorization':
            return 'Check the correct pairings above.';
    }
    return '';
}

// Next question
document.getElementById('next-question').addEventListener('click', () => {
    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
        quizState.currentQuestionIndex++;
        loadQuizQuestion();
    } else {
        showQuizResults();
    }
});

function updateQuizProgress() {
    const percentage = ((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100;
    document.getElementById('quiz-progress').style.width = `${percentage}%`;
    document.getElementById('quiz-progress-text').textContent = 
        `Question ${quizState.currentQuestionIndex + 1} / ${quizState.questions.length}`;
}

function showQuizResults() {
    const timeTaken = Math.floor((Date.now() - quizState.startTime) / 1000);
    const percentage = Math.round((quizState.correctCount / quizState.questions.length) * 100);
    
    document.getElementById('quiz-container').classList.add('d-none');
    document.getElementById('quiz-results').classList.remove('d-none');
    
    document.getElementById('final-score').textContent = `${percentage}%`;
    document.getElementById('score-fraction').textContent = 
        `${quizState.correctCount} / ${quizState.questions.length}`;
    document.getElementById('correct-count').textContent = quizState.correctCount;
    document.getElementById('incorrect-count').textContent = quizState.incorrectCount;
    document.getElementById('time-taken').textContent = formatTime(timeTaken);
    
    // Save to history
    saveQuizHistory(percentage, quizState.correctCount, quizState.incorrectCount, timeTaken);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Retake quiz
document.getElementById('retake-quiz').addEventListener('click', () => {
    document.getElementById('quiz-results').classList.add('d-none');
    document.getElementById('start-quiz').classList.remove('d-none');
});

// Review answers
document.getElementById('review-answers').addEventListener('click', () => {
    const reviewContainer = document.getElementById('review-container');
    const answerReview = document.getElementById('answer-review');
    
    reviewContainer.innerHTML = '';
    quizState.questions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        const isCorrect = quizState.userAnswers[index] !== null && checkAnswer(q, quizState.userAnswers[index]);
        card.innerHTML = `
            <div class="card-body">
                <h6 class="text-${isCorrect ? 'success' : 'danger'}">
                    ${isCorrect ? '✓' : '✗'} Question ${index + 1}
                </h6>
                <p>${q.question}</p>
                <p class="mb-0"><strong>Category:</strong> ${q.category}</p>
            </div>
        `;
        reviewContainer.appendChild(card);
    });
    
    answerReview.classList.toggle('d-none');
});

// ===========================
// STATS FUNCTIONALITY
// ===========================
function updateStatsDisplay() {
    const history = getQuizHistory();
    const totalQuizzes = history.length;
    const avgScore = totalQuizzes > 0 
        ? Math.round(history.reduce((sum, q) => sum + q.score, 0) / totalQuizzes)
        : 0;
    
    document.getElementById('total-studied').textContent = 
        flashcardStats.recalled.size + flashcardStats.notRecalled.size;
    document.getElementById('total-quizzes').textContent = totalQuizzes;
    document.getElementById('avg-score').textContent = `${avgScore}%`;
    document.getElementById('mastered-cards').textContent = flashcardStats.recalled.size;
    
    // Recent scores
    const recentScoresEl = document.getElementById('recent-scores');
    if (history.length === 0) {
        recentScoresEl.innerHTML = '<p class="text-muted">No quizzes taken yet.</p>';
    } else {
        recentScoresEl.innerHTML = history.slice(-5).reverse().map((q, i) => `
            <div class="d-flex justify-content-between align-items-center mb-2 p-2 border-bottom">
                <span>Quiz ${history.length - i}</span>
                <span class="badge bg-${q.score >= 70 ? 'success' : 'danger'}">${q.score}%</span>
            </div>
        `).join('');
    }
    
    // Category performance (if quiz history exists)
    const catPerformanceEl = document.getElementById('category-performance');
    if (totalQuizzes === 0) {
        catPerformanceEl.innerHTML = '<p class="text-muted">Complete quizzes to see category performance.</p>';
    } else {
        catPerformanceEl.innerHTML = '<p class="text-muted">Category performance coming soon!</p>';
    }
}

document.getElementById('clear-stats').addEventListener('click', clearAllStats);

// ===========================
// THEME BUTTONS
// ===========================
document.querySelectorAll('.theme-button').forEach(btn => {
    btn.addEventListener('click', () => {
        switchTheme(btn.dataset.themeOption);
    });
});

// ===========================
// INITIALIZATION
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadStats();
    displayFlashcard();
    updateStatsDisplay();
});
