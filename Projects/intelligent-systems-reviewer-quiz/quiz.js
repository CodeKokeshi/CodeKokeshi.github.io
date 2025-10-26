const topicSelect = document.getElementById("topicSelect");
const questionCountInput = document.getElementById("questionCount");
const includeMultipleChoice = document.getElementById("includeMultipleChoice");
const includeFillBlank = document.getElementById("includeFillBlank");
const includeMultiSelect = document.getElementById("includeMultiSelect");
const startQuizBtn = document.getElementById("startQuizBtn");
const restartQuizBtn = document.getElementById("restartQuizBtn");
const quizSetup = document.getElementById("quizSetup");
const quizContainer = document.getElementById("quizContainer");
const quizResults = document.getElementById("quizResults");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const questionTypeBadge = document.getElementById("questionTypeBadge");
const questionTopic = document.getElementById("questionTopic");
const questionText = document.getElementById("questionText");
const multipleChoiceOptions = document.getElementById("multipleChoiceOptions");
const fillBlankContainer = document.getElementById("fillBlankOptions");
const blankSentenceEl = document.getElementById("blankSentence");
const wordBankEl = document.getElementById("wordBank");
const submitAnswerBtn = document.getElementById("submitAnswerBtn");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const feedbackEl = document.getElementById("feedback");
const finalScoreEl = document.getElementById("finalScore");
const totalQuestionsEl = document.getElementById("totalQuestions");
const scorePercentageEl = document.getElementById("scorePercentage");
const correctCountEl = document.getElementById("correctCount");
const incorrectCountEl = document.getElementById("incorrectCount");
const mcCorrectEl = document.getElementById("mcCorrect");
const fibCorrectEl = document.getElementById("fibCorrect");
const msCorrectEl = document.getElementById("msCorrect");
const reviewQuizBtn = document.getElementById("reviewQuizBtn");
const newQuizBtn = document.getElementById("newQuizBtn");
const reviewSection = document.getElementById("reviewSection");
const reviewList = document.getElementById("reviewList");

const questionBank = flashcards
  .filter(card => card.quiz)
  .map(card => ({
    id: card.id,
    topic: card.topic,
    question: card.question,
    ...card.quiz
  }));

const questionTypeLabels = {
  multiple: "Multiple Choice",
  fill: "Fill in the Blank",
  "multi-select": "Multi-Select"
};

let quizQuestions = [];
let currentQuestionIndex = 0;
let selectedOption = null;
let selectedOptions = new Set();
let fillSelection = null;
let activeWordChip = null;
let responses = [];
let score = 0;
let typeStats = {
  multiple: { correct: 0, total: 0 },
  fill: { correct: 0, total: 0 },
  "multi-select": { correct: 0, total: 0 }
};
let isQuestionAnswered = false;

function shuffle(source) {
  const array = [...source];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initTopics() {
  const topics = Array.from(new Set(questionBank.map(item => item.topic))).sort();
  topics.forEach(topic => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    topicSelect.appendChild(option);
  });
}

function resetState() {
  selectedOption = null;
  selectedOptions = new Set();
  fillSelection = null;
  activeWordChip = null;
  isQuestionAnswered = false;
  submitAnswerBtn.disabled = true;
  nextQuestionBtn.style.display = "none";
  feedbackEl.style.display = "none";
  feedbackEl.className = "feedback";
  multipleChoiceOptions.innerHTML = "";
  blankSentenceEl.innerHTML = "";
  wordBankEl.innerHTML = "";
  multipleChoiceOptions.style.display = "none";
  fillBlankContainer.style.display = "none";
}

function startQuiz() {
  const allowedTypes = new Set();
  if (includeMultipleChoice.checked) {
    allowedTypes.add("multiple");
  }
  if (includeFillBlank.checked) {
    allowedTypes.add("fill");
  }
  if (includeMultiSelect.checked) {
    allowedTypes.add("multi-select");
  }

  if (allowedTypes.size === 0) {
    alert("Select at least one question type to begin.");
    return;
  }

  let filtered = questionBank.filter(item => allowedTypes.has(item.type));
  const selectedTopic = topicSelect.value;
  if (selectedTopic !== "all") {
    filtered = filtered.filter(item => item.topic === selectedTopic);
  }

  if (!filtered.length) {
    alert("No questions available with the current filters.");
    return;
  }

  const desiredCount = Math.min(
    Math.max(parseInt(questionCountInput.value, 10) || 5, 1),
    filtered.length
  );

  quizQuestions = shuffle(filtered).slice(0, desiredCount);
  currentQuestionIndex = 0;
  responses = [];
  score = 0;
  typeStats = {
    multiple: { correct: 0, total: 0 },
    fill: { correct: 0, total: 0 },
    "multi-select": { correct: 0, total: 0 }
  };

  quizSetup.style.display = "none";
  quizResults.style.display = "none";
  reviewSection.style.display = "none";
  reviewList.innerHTML = "";
  quizContainer.style.display = "flex";

  renderQuestion();
  updateProgress();
}

function updateProgress() {
  const total = quizQuestions.length || 1;
  const position = currentQuestionIndex + 1;
  const answeredCount = isQuestionAnswered ? position : currentQuestionIndex;
  progressText.textContent = `Question ${position} of ${total}`;
  progressFill.style.width = `${(answeredCount / total) * 100}%`;
}

function renderQuestion() {
  resetState();

  const question = quizQuestions[currentQuestionIndex];
  if (!question) {
    return;
  }

  questionTypeBadge.textContent = questionTypeLabels[question.type] || "Question";
  questionTopic.textContent = question.topic;
  
  if (question.type === "multi-select" && question.requiredSelections) {
    questionText.textContent = `${question.prompt || question.question} (Select ${question.requiredSelections} answers)`;
  } else {
    questionText.textContent = question.prompt || question.question;
  }

  if (question.type === "multiple") {
    renderMultipleChoice(question);
  } else if (question.type === "multi-select") {
    renderMultiSelect(question);
  } else if (question.type === "fill") {
    renderFill(question);
  }

  updateProgress();
}

function renderMultipleChoice(question) {
  multipleChoiceOptions.style.display = "flex";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mc-option";
    button.textContent = option.label;
    button.dataset.value = option.value;
    button.addEventListener("click", () => {
      if (isQuestionAnswered) {
        return;
      }
      selectedOption = option.value;
      Array.from(multipleChoiceOptions.children).forEach(child => {
        child.classList.toggle("selected", child === button);
      });
      submitAnswerBtn.disabled = false;
    });
    multipleChoiceOptions.appendChild(button);
  });
}

function renderMultiSelect(question) {
  multipleChoiceOptions.style.display = "flex";
  const required = question.answers.length;
  question.requiredSelections = required;
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mc-option multi";
    button.textContent = option.label;
    button.dataset.value = option.value;
    button.addEventListener("click", () => {
      if (isQuestionAnswered) {
        return;
      }
      if (selectedOptions.has(option.value)) {
        selectedOptions.delete(option.value);
        button.classList.remove("selected");
      } else {
        selectedOptions.add(option.value);
        button.classList.add("selected");
      }
      submitAnswerBtn.disabled = selectedOptions.size < 1;
    });
    multipleChoiceOptions.appendChild(button);
  });
}

function renderFill(question) {
  fillBlankContainer.style.display = "block";
  const htmlSentence = (question.sentence || "").replace(
    /___/g,
    "<span class=\"blank-slot\" id=\"blankSlot\">___</span>"
  );
  blankSentenceEl.innerHTML = htmlSentence;
  const blankSlot = blankSentenceEl.querySelector(".blank-slot");
  if (blankSlot) {
    blankSlot.addEventListener("click", () => {
      if (isQuestionAnswered) {
        return;
      }
      fillSelection = null;
      if (activeWordChip) {
        activeWordChip.classList.remove("selected");
      }
      blankSlot.textContent = "___";
      blankSlot.classList.remove("filled", "correct", "incorrect");
      submitAnswerBtn.disabled = true;
    });
  }

  question.wordBank.forEach(word => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "word-chip";
    chip.textContent = word;
    chip.addEventListener("click", () => {
      if (isQuestionAnswered) {
        return;
      }
      fillSelection = word;
      if (activeWordChip) {
        activeWordChip.classList.remove("selected");
      }
      chip.classList.add("selected");
      activeWordChip = chip;
      if (blankSlot) {
        blankSlot.textContent = word;
        blankSlot.classList.add("filled");
      }
      submitAnswerBtn.disabled = false;
    });
    wordBankEl.appendChild(chip);
  });
}

function submitAnswer() {
  if (isQuestionAnswered) {
    return;
  }
  const question = quizQuestions[currentQuestionIndex];
  const result = {
    id: question.id,
    topic: question.topic,
    prompt: question.prompt || question.question,
    type: question.type
  };
  let isCorrect = false;

  if (question.type === "multiple") {
    result.userAnswer = selectedOption;
    result.correctAnswer = question.answer;
    isCorrect = selectedOption === question.answer;
    evaluateMultiple(question, isCorrect);
  } else if (question.type === "multi-select") {
    const requiredAnswers = new Set(question.answers);
    const userSelection = Array.from(selectedOptions);
    result.userAnswer = userSelection;
    result.correctAnswer = question.answers;
    if (userSelection.length === requiredAnswers.size) {
      isCorrect = userSelection.every(value => requiredAnswers.has(value));
    } else {
      isCorrect = false;
    }
    evaluateMultiSelect(question, isCorrect);
  } else if (question.type === "fill") {
    const answer = (question.answer || "").trim().toLowerCase();
    const user = (fillSelection || "").trim().toLowerCase();
    result.userAnswer = fillSelection;
    result.correctAnswer = question.answer;
    isCorrect = answer.length > 0 && answer === user;
    evaluateFill(question, isCorrect);
  }

  score += isCorrect ? 1 : 0;
  typeStats[question.type].total += 1;
  if (isCorrect) {
    typeStats[question.type].correct += 1;
  }

  result.isCorrect = isCorrect;
  result.explanation = question.explanation;
  responses.push(result);

  showFeedback(isCorrect, question);

  isQuestionAnswered = true;
  submitAnswerBtn.disabled = true;
  nextQuestionBtn.style.display = "inline-flex";
  nextQuestionBtn.focus();
  updateProgress();
}

function evaluateMultiple(question, isCorrect) {
  Array.from(multipleChoiceOptions.children).forEach(button => {
    const value = button.dataset.value;
    button.classList.add("disabled");
    if (value === question.answer) {
      button.classList.add("correct");
    }
    if (value === selectedOption && !isCorrect) {
      button.classList.add("incorrect");
    }
  });
}

function evaluateMultiSelect(question, isCorrect) {
  const answerSet = new Set(question.answers);
  Array.from(multipleChoiceOptions.children).forEach(button => {
    const value = button.dataset.value;
    button.classList.add("disabled");
    if (answerSet.has(value)) {
      button.classList.add("correct");
    }
    if (selectedOptions.has(value) && !answerSet.has(value)) {
      button.classList.add("incorrect");
    }
  });
}

function evaluateFill(question, isCorrect) {
  const blankSlot = blankSentenceEl.querySelector(".blank-slot");
  Array.from(wordBankEl.children).forEach(chip => {
    chip.classList.add("used");
  });
  if (blankSlot) {
    blankSlot.classList.add(isCorrect ? "correct" : "incorrect");
    blankSlot.textContent = question.answer;
  }
}

function showFeedback(isCorrect, question) {
  feedbackEl.style.display = "block";
  feedbackEl.classList.toggle("correct", isCorrect);
  feedbackEl.classList.toggle("incorrect", !isCorrect);
  feedbackEl.innerHTML = `${isCorrect ? "✅ Correct!" : "❌ Not quite."}`;

  const answerBlock = document.createElement("div");
  answerBlock.className = "feedback-answer";
  const correctAnswer = question.type === "multi-select"
    ? formatArray(question.answers, question.options)
    : escapeHtml(question.type === "fill" ? question.answer : getOptionLabel(question, question.answer));

  answerBlock.innerHTML = `<div><strong>Answer:</strong> ${correctAnswer}</div>`;
  if (question.explanation) {
    answerBlock.innerHTML += `<div>${escapeHtml(question.explanation)}</div>`;
  }
  feedbackEl.appendChild(answerBlock);
}

function formatArray(values, options) {
  const map = new Map((options || []).map(opt => [opt.value, opt.label]));
  const entries = values.map(value => escapeHtml(map.get(value) || value));
  return `<ul>${entries.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function getOptionLabel(question, value) {
  if (question.type === "fill") {
    return value;
  }
  const option = (question.options || []).find(opt => opt.value === value);
  return option ? option.label : value;
}

function escapeHtml(input) {
  return String(input || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function goToNextQuestion() {
  if (!isQuestionAnswered) {
    return;
  }
  currentQuestionIndex += 1;
  if (currentQuestionIndex >= quizQuestions.length) {
    showResults();
    return;
  }
  renderQuestion();
}

function showResults() {
  quizContainer.style.display = "none";
  quizResults.style.display = "flex";

  const total = quizQuestions.length;
  const incorrect = total - score;

  finalScoreEl.textContent = score;
  totalQuestionsEl.textContent = total;
  scorePercentageEl.textContent = `${Math.round((score / total) * 100)}%`;
  correctCountEl.textContent = score;
  incorrectCountEl.textContent = incorrect;

  mcCorrectEl.textContent = `${typeStats.multiple.correct}/${typeStats.multiple.total}`;
  fibCorrectEl.textContent = `${typeStats.fill.correct}/${typeStats.fill.total}`;
  msCorrectEl.textContent = `${typeStats["multi-select"].correct}/${typeStats["multi-select"].total}`;
}

function buildReview() {
  reviewList.innerHTML = "";
  responses.forEach(entry => {
    const item = document.createElement("div");
    item.className = `review-item ${entry.isCorrect ? "correct" : "incorrect"}`;

    const questionEl = document.createElement("div");
    questionEl.className = "review-question";
    questionEl.textContent = `${entry.topic} · ${entry.prompt}`;

    const details = document.createElement("div");
    details.className = "review-details";

    const userRow = document.createElement("div");
    const userLabel = document.createElement("span");
    userLabel.className = "review-label";
    userLabel.textContent = "Your answer";
    const userValue = document.createElement("span");
    userValue.className = `review-value ${entry.isCorrect ? "correct" : "incorrect"}`;
    userValue.innerHTML = formatReviewValue(entry.userAnswer, entry);
    userRow.appendChild(userLabel);
    userRow.appendChild(userValue);

    const correctRow = document.createElement("div");
    const correctLabel = document.createElement("span");
    correctLabel.className = "review-label";
    correctLabel.textContent = "Correct";
  const correctValue = document.createElement("span");
  correctValue.className = "review-value correct";
  correctValue.innerHTML = formatReviewValue(entry.correctAnswer, entry);
    correctRow.appendChild(correctLabel);
    correctRow.appendChild(correctValue);

    details.appendChild(userRow);
    details.appendChild(correctRow);

    if (entry.explanation) {
      const explanationRow = document.createElement("div");
      const explanationLabel = document.createElement("span");
      explanationLabel.className = "review-label";
      explanationLabel.textContent = "Why";
      const explanationValue = document.createElement("span");
      explanationValue.className = "review-value";
      explanationValue.textContent = entry.explanation;
      explanationRow.appendChild(explanationLabel);
      explanationRow.appendChild(explanationValue);
      details.appendChild(explanationRow);
    }

    item.appendChild(questionEl);
    item.appendChild(details);
    reviewList.appendChild(item);
  });
}

function formatReviewValue(value, entry) {
  const sourceQuestion = quizQuestions.find(q => q.id === entry.id);
  if (entry.type === "multi-select") {
    const map = new Map(((sourceQuestion && sourceQuestion.options) || []).map(opt => [opt.value, opt.label]));
    const values = Array.isArray(value) ? value : [];
    if (!values.length) {
      return "―";
    }
    return `<ul>${values.map(item => `<li>${escapeHtml(map.get(item) || item)}</li>`).join("")}</ul>`;
  }
  if (!value) {
    return "―";
  }
  if (entry.type === "fill") {
    return escapeHtml(value);
  }
  if (!sourceQuestion) {
    return escapeHtml(value);
  }
  const option = (sourceQuestion.options || []).find(opt => opt.value === value);
  if (option) {
    return escapeHtml(option.label);
  }
  return escapeHtml(value);
}

function resetToSetup() {
  quizContainer.style.display = "none";
  quizResults.style.display = "none";
  reviewSection.style.display = "none";
  reviewList.innerHTML = "";
  quizSetup.style.display = "flex";
  progressFill.style.width = "0%";
  progressText.textContent = "";
}

startQuizBtn.addEventListener("click", startQuiz);
restartQuizBtn.addEventListener("click", () => {
  if (quizContainer.style.display === "flex" && !isQuestionAnswered && quizQuestions.length) {
    if (!confirm("Restart quiz and lose current progress?")) {
      return;
    }
  }
  resetToSetup();
});

submitAnswerBtn.addEventListener("click", submitAnswer);
nextQuestionBtn.addEventListener("click", goToNextQuestion);

reviewQuizBtn.addEventListener("click", () => {
  if (reviewSection.style.display === "none" || reviewSection.style.display === "") {
    buildReview();
    reviewSection.style.display = "block";
  } else {
    reviewSection.style.display = "none";
  }
});

newQuizBtn.addEventListener("click", resetToSetup);

initTopics();
resetToSetup();
