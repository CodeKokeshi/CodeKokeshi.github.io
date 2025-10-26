const topicFilter = document.getElementById("topicFilter");
const searchInput = document.getElementById("searchInput");
const flashcardEl = document.getElementById("flashcard");
const progressStatsEl = document.getElementById("progressStats");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const flipBtn = document.getElementById("flipBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const againBtn = document.getElementById("againBtn");
const goodBtn = document.getElementById("goodBtn");
const easyBtn = document.getElementById("easyBtn");
const modeSimpleBtn = document.getElementById("modeSimpleBtn");
const modeFullBtn = document.getElementById("modeFullBtn");
const modeHighlightBtn = document.getElementById("modeHighlightBtn");

const STORAGE_KEY = "intelligent-systems-flashcard-progress";

let activeDeck = [...flashcards];
let currentIndex = 0;
let isFlipped = false;
let progress = loadProgress();
let displayMode = "simple";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.error("Failed to load progress", error);
    return {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Failed to save progress", error);
  }
}

function initFilterOptions() {
  const topics = Array.from(new Set(flashcards.map(card => card.topic)));
  const fragment = document.createDocumentFragment();
  const allOption = document.createElement("option");
  allOption.value = "__all";
  allOption.textContent = "All topics";
  fragment.appendChild(allOption);
  topics.forEach(topic => {
    const opt = document.createElement("option");
    opt.value = topic;
    opt.textContent = topic;
    fragment.appendChild(opt);
  });
  topicFilter.appendChild(fragment);
  topicFilter.value = "__all";
}

function filterDeck() {
  const topicValue = topicFilter.value;
  const searchValue = searchInput.value.trim().toLowerCase();

  activeDeck = flashcards.filter(card => {
    const matchesTopic = topicValue === "__all" || card.topic === topicValue;
    if (!matchesTopic) {
      return false;
    }
    if (!searchValue) {
      return true;
    }
    const corpus = [card.question, card.simple, card.full, (card.keywords || []).join(" ")]
      .join(" ")
      .toLowerCase();
    return corpus.includes(searchValue);
  });

  if (activeDeck.length === 0) {
      flashcardEl.innerHTML = `
        <div class="flashcard-inner">
          <div class="flashcard-face front no-results">
            <h2>No cards found</h2>
            <p>Try adjusting your topic or search filters.</p>
          </div>
        </div>
      `;
      flashcardEl.classList.remove("flipped");
    progressStatsEl.textContent = "";
    currentIndex = 0;
    return;
  }

  currentIndex = 0;
  renderCurrentCard();
  updateProgressStats();
}

function renderCurrentCard() {
  const card = activeDeck[currentIndex];
  if (!card) {
    return;
  }
  const progressEntry = progress[card.id] || {};
  const highlights = card.full.replace(/<mark>(.*?)<\/mark>/g, "<span class=\"highlight\">$1</span>");

  const frontContent = `
    <div class="flashcard-face front" aria-hidden="${isFlipped}">
      <h3>${card.topic}</h3>
      <h2>${card.question}</h2>
      <p class="progress-tag">Last score: ${progressEntry.lastScore || "―"}</p>
    </div>
  `;

  const bodyContent = displayMode === "full" ? card.full : displayMode === "highlighted" ? highlights : card.simple;

  const backContent = `
    <div class="flashcard-face back" aria-hidden="${!isFlipped}">
      <h3>${card.topic}</h3>
      <div class="answer-body">${bodyContent}</div>
    </div>
  `;

  flashcardEl.innerHTML = frontContent + backContent;
  flashcardEl.classList.toggle("flipped", isFlipped);
}

function updateProgressStats() {
  if (!activeDeck.length) {
    progressStatsEl.textContent = "";
    return;
  }

  const seen = activeDeck.filter(card => progress[card.id]).length;
  const againCount = activeDeck.filter(card => (progress[card.id] || {}).lastScore === "again").length;
  const easyCount = activeDeck.filter(card => (progress[card.id] || {}).lastScore === "easy").length;

  progressStatsEl.innerHTML = `
    <strong>${seen}/${activeDeck.length}</strong> reviewed · <span class="again">Again: ${againCount}</span> · <span class="easy">Easy: ${easyCount}</span>
  `;
}

function flipCard() {
  isFlipped = !isFlipped;
  renderCurrentCard();
}

function showNext() {
  if (!activeDeck.length) {
    return;
  }
  currentIndex = (currentIndex + 1) % activeDeck.length;
  isFlipped = false;
  renderCurrentCard();
}

function showPrev() {
  if (!activeDeck.length) {
    return;
  }
  currentIndex = (currentIndex - 1 + activeDeck.length) % activeDeck.length;
  isFlipped = false;
  renderCurrentCard();
}

function shuffleDeck() {
  for (let i = activeDeck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [activeDeck[i], activeDeck[j]] = [activeDeck[j], activeDeck[i]];
  }
  currentIndex = 0;
  isFlipped = false;
  renderCurrentCard();
}

function resetProgress() {
  if (!confirm("Reset review progress for this deck?")) {
    return;
  }
  progress = {};
  saveProgress();
  updateProgressStats();
  renderCurrentCard();
}

function recordProgress(score) {
  const card = activeDeck[currentIndex];
  progress[card.id] = {
    lastScore: score,
    timestamp: Date.now()
  };
  saveProgress();
  updateProgressStats();
}

function setDisplayMode(mode) {
  displayMode = mode;
  modeSimpleBtn.classList.toggle("active", mode === "simple");
  modeFullBtn.classList.toggle("active", mode === "full");
  modeHighlightBtn.classList.toggle("active", mode === "highlighted");
  renderCurrentCard();
}

function handleKeydown(event) {
  if (event.target.tagName === "INPUT" || event.target.tagName === "SELECT" || event.target.tagName === "TEXTAREA") {
    return;
  }
  if (event.code === "Space") {
    event.preventDefault();
    flipCard();
  } else if (event.code === "ArrowRight") {
    showNext();
  } else if (event.code === "ArrowLeft") {
    showPrev();
  }
}

initFilterOptions();
filterDeck();
renderCurrentCard();
updateProgressStats();

flashcardEl.addEventListener("click", flipCard);
flashcardEl.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    flipCard();
  }
});

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);
flipBtn.addEventListener("click", flipCard);
shuffleBtn.addEventListener("click", shuffleDeck);
resetProgressBtn.addEventListener("click", resetProgress);

againBtn.addEventListener("click", () => recordProgress("again"));
goodBtn.addEventListener("click", () => recordProgress("good"));
easyBtn.addEventListener("click", () => recordProgress("easy"));

modeSimpleBtn.addEventListener("click", () => setDisplayMode("simple"));
modeFullBtn.addEventListener("click", () => setDisplayMode("full"));
modeHighlightBtn.addEventListener("click", () => setDisplayMode("highlighted"));

topicFilter.addEventListener("change", filterDeck);
searchInput.addEventListener("input", () => {
  filterDeck();
});

document.addEventListener("keydown", handleKeydown);
