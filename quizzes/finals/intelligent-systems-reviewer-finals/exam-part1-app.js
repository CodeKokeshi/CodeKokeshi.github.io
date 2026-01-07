(() => {
  // Filter questions for Part 1 (Lessons 6-7)
  const part1Questions = examQuestions.filter(q => 
    q.lesson === "Lesson 6" || q.lesson === "Lesson 7"
  );

  // Exam State
  const examState = {
    userAnswers: {},
    shuffledQuestions: [],
    isSubmitted: false
  };

  function initExam() {
    examState.shuffledQuestions = part1Questions.map(q => {
      const optionIndices = q.options.map((_, index) => index);
      const shuffledIndices = shuffleArray(optionIndices);
      
      const shuffledOptions = shuffledIndices.map(originalIndex => ({
        text: q.options[originalIndex],
        originalIndex: originalIndex
      }));
      
      return {
        ...q,
        shuffledOptions: shuffledOptions,
        correctShuffledIndex: shuffledIndices.indexOf(q.correct)
      };
    });

    renderQuestions();
    attachEventListeners();
  }

  function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    if (!container) return;

    container.innerHTML = '';

    examState.shuffledQuestions.forEach((q, index) => {
      const questionCard = document.createElement('div');
      questionCard.className = 'question-card';
      questionCard.id = `question-${q.id}`;

      const questionHeader = document.createElement('div');
      questionHeader.className = 'question-header';
      questionHeader.innerHTML = `
        <span class="question-number">Question ${index + 1} of ${examState.shuffledQuestions.length}</span>
        <span class="question-topic">${q.lesson} - ${q.topic}</span>
      `;

      const questionText = document.createElement('div');
      questionText.className = 'question-text';
      questionText.textContent = q.question;

      const optionsContainer = document.createElement('div');
      optionsContainer.className = 'options-container';

      q.shuffledOptions.forEach((option, optionIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option-item';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question-${q.id}`;
        input.id = `q${q.id}-opt${optionIndex}`;
        input.value = optionIndex;
        input.dataset.questionId = q.id;
        
        if (examState.userAnswers[q.id] === optionIndex) {
          input.checked = true;
        }

        const label = document.createElement('label');
        label.htmlFor = `q${q.id}-opt${optionIndex}`;
        label.textContent = option.text;

        optionDiv.appendChild(input);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);
      });

      questionCard.appendChild(questionHeader);
      questionCard.appendChild(questionText);
      questionCard.appendChild(optionsContainer);
      container.appendChild(questionCard);
    });

    updateProgress();
  }

  function attachEventListeners() {
    const container = document.getElementById('questionsContainer');
    if (container) {
      container.addEventListener('change', (e) => {
        if (e.target.type === 'radio') {
          const questionId = parseInt(e.target.dataset.questionId);
          const selectedOption = parseInt(e.target.value);
          examState.userAnswers[questionId] = selectedOption;
          updateProgress();
          
          const currentQuestion = document.getElementById(`question-${questionId}`);
          const nextQuestion = currentQuestion?.nextElementSibling;
          if (nextQuestion) {
            setTimeout(() => {
              nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 200);
          }
        }
      });
    }

    const submitBtn = document.getElementById('submitExamBtn');
    const submitBtn2 = document.getElementById('submitExamBtn2');
    if (submitBtn) submitBtn.addEventListener('click', handleSubmit);
    if (submitBtn2) submitBtn2.addEventListener('click', handleSubmit);

    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) resetBtn.addEventListener('click', handleReset);

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    const retakeBtn = document.getElementById('retakeBtn');
    if (retakeBtn) retakeBtn.addEventListener('click', handleRetake);
  }

  function updateProgress() {
    const answeredCount = Object.keys(examState.userAnswers).length;
    const totalCount = examState.shuffledQuestions.length;
    const progressText = document.getElementById('progressText');
    const totalQuestions = document.getElementById('totalQuestions');
    
    if (progressText) {
      progressText.textContent = `${answeredCount} / ${totalCount} answered`;
    }
    if (totalQuestions) {
      totalQuestions.textContent = totalCount;
    }
  }

  function handleSubmit() {
    const answeredCount = Object.keys(examState.userAnswers).length;
    const totalCount = examState.shuffledQuestions.length;
    
    if (answeredCount < totalCount) {
      const unanswered = totalCount - answeredCount;
      const confirmSubmit = confirm(
        `You have ${unanswered} unanswered question(s). Are you sure you want to submit?`
      );
      if (!confirmSubmit) return;
    }

    examState.isSubmitted = true;
    calculateAndShowResults();
  }

  function calculateAndShowResults() {
    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;

    const results = examState.shuffledQuestions.map(q => {
      const userAnswer = examState.userAnswers[q.id];
      const isCorrect = userAnswer === q.correctShuffledIndex;
      const isAnswered = userAnswer !== undefined;

      if (isAnswered) {
        if (isCorrect) correctCount++;
        else wrongCount++;
      } else {
        unansweredCount++;
      }

      return {
        question: q,
        userAnswer: userAnswer,
        isCorrect: isCorrect,
        isAnswered: isAnswered
      };
    });

    document.getElementById('scoreValue').textContent = correctCount;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
    document.getElementById('unansweredCount').textContent = unansweredCount;
    
    const percentage = ((correctCount / examState.shuffledQuestions.length) * 100).toFixed(1);
    document.getElementById('scorePercentage').textContent = `${percentage}%`;

    const scoreCircle = document.querySelector('.score-circle');
    if (scoreCircle) {
      scoreCircle.className = 'score-circle';
      if (percentage >= 90) scoreCircle.classList.add('excellent');
      else if (percentage >= 75) scoreCircle.classList.add('good');
      else if (percentage >= 60) scoreCircle.classList.add('fair');
      else scoreCircle.classList.add('poor');
    }

    renderDetailedResults(results);

    document.getElementById('examScreen').hidden = true;
    document.getElementById('resultsScreen').hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderDetailedResults(results) {
    const container = document.getElementById('detailedResults');
    if (!container) return;

    container.innerHTML = '';

    results.forEach((result, index) => {
      const q = result.question;
      const resultCard = document.createElement('div');
      resultCard.className = 'result-card';
      
      if (result.isCorrect) {
        resultCard.classList.add('correct');
      } else if (result.isAnswered) {
        resultCard.classList.add('wrong');
      } else {
        resultCard.classList.add('unanswered');
      }

      const header = document.createElement('div');
      header.className = 'result-header';
      
      const statusIcon = result.isCorrect ? '✓' : result.isAnswered ? '✗' : '—';
      const statusClass = result.isCorrect ? 'correct' : result.isAnswered ? 'wrong' : 'unanswered';
      const statusText = result.isCorrect ? 'Correct' : result.isAnswered ? 'Wrong' : 'Unanswered';
      
      header.innerHTML = `
        <div class="result-status">
          <span class="status-icon ${statusClass}">${statusIcon}</span>
          <span class="status-text ${statusClass}">${statusText}</span>
        </div>
        <span class="result-number">Question ${index + 1}</span>
      `;

      const questionDiv = document.createElement('div');
      questionDiv.className = 'result-question';
      questionDiv.innerHTML = `
        <div class="result-topic">${q.lesson} - ${q.topic}</div>
        <div class="result-question-text">${q.question}</div>
      `;

      const answersDiv = document.createElement('div');
      answersDiv.className = 'result-answers';

      q.shuffledOptions.forEach((option, optionIndex) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'result-answer-option';
        
        const isUserAnswer = result.userAnswer === optionIndex;
        const isCorrectAnswer = optionIndex === q.correctShuffledIndex;

        if (isCorrectAnswer) {
          answerDiv.classList.add('correct-answer');
        }
        if (isUserAnswer && !isCorrectAnswer) {
          answerDiv.classList.add('user-wrong-answer');
        }
        if (isUserAnswer && isCorrectAnswer) {
          answerDiv.classList.add('user-correct-answer');
        }

        let prefix = '';
        if (isCorrectAnswer) {
          prefix = '<span class="answer-icon correct">✓</span>';
        } else if (isUserAnswer) {
          prefix = '<span class="answer-icon wrong">✗</span>';
        }

        let label = '';
        if (isCorrectAnswer && isUserAnswer) {
          label = '<span class="answer-label correct">Your Answer (Correct)</span>';
        } else if (isCorrectAnswer) {
          label = '<span class="answer-label correct">Correct Answer</span>';
        } else if (isUserAnswer) {
          label = '<span class="answer-label wrong">Your Answer</span>';
        }

        answerDiv.innerHTML = `
          ${prefix}
          <span class="answer-text">${option.text}</span>
          ${label}
        `;

        answersDiv.appendChild(answerDiv);
      });

      const explanationDiv = document.createElement('div');
      explanationDiv.className = 'result-explanation';
      explanationDiv.innerHTML = `
        <strong>Explanation:</strong> ${q.explanation}
      `;

      resultCard.appendChild(header);
      resultCard.appendChild(questionDiv);
      resultCard.appendChild(answersDiv);
      resultCard.appendChild(explanationDiv);
      container.appendChild(resultCard);
    });
  }

  function handleReset() {
    const confirmReset = confirm('Are you sure you want to reset the exam? All your answers will be lost.');
    if (!confirmReset) return;

    examState.userAnswers = {};
    renderQuestions();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleRetake() {
    examState.userAnswers = {};
    examState.isSubmitted = false;
    
    examState.shuffledQuestions = part1Questions.map(q => {
      const optionIndices = q.options.map((_, index) => index);
      const shuffledIndices = shuffleArray(optionIndices);
      
      const shuffledOptions = shuffledIndices.map(originalIndex => ({
        text: q.options[originalIndex],
        originalIndex: originalIndex
      }));
      
      return {
        ...q,
        shuffledOptions: shuffledOptions,
        correctShuffledIndex: shuffledIndices.indexOf(q.correct)
      };
    });

    renderQuestions();
    
    document.getElementById('examScreen').hidden = false;
    document.getElementById('resultsScreen').hidden = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExam);
  } else {
    initExam();
  }
})();
