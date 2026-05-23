(function() {
  var data = window.GAS_QUIZ_DATA;
  if (!data) return;

  var currentMode = 'mc';
  var activeQuestions = [];
  var currentIndex = 0;
  var score = 0;
  var answered = false;
  var fillPlaced = [];
  var fillUsedOptionToBlank = [];

  function $(id) {
    return document.getElementById(id);
  }

  function shuffleArray(arr) {
    var out = arr.slice();
    for (var i = out.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = out[i];
      out[i] = out[j];
      out[j] = tmp;
    }
    return out;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function showScreen(id) {
    ['screenMode', 'screenStart', 'screenQuiz', 'screenResults'].forEach(function(screenId) {
      $(screenId).classList.remove('screen--active');
    });
    $(id).classList.add('screen--active');
  }

  function buildMcQuestions() {
    return data.mc.map(function(sourceQuestion) {
      var choiceItems = sourceQuestion.choices.map(function(choiceText, choiceIndex) {
        return {
          text: choiceText,
          isCorrect: choiceIndex === sourceQuestion.answer
        };
      });

      choiceItems = shuffleArray(choiceItems);

      var correctIndex = 0;
      for (var i = 0; i < choiceItems.length; i++) {
        if (choiceItems[i].isCorrect) {
          correctIndex = i;
          break;
        }
      }

      return {
        type: 'mc',
        q: sourceQuestion.q,
        choices: choiceItems.map(function(item) { return item.text; }),
        answer: correctIndex
      };
    });
  }

  function buildFillQuestions() {
    return data.fill.map(function(sourceQuestion) {
      return {
        type: 'fill',
        q: 'Fill in the blank(s) using the option box.',
        sentence: sourceQuestion.sentence,
        answers: sourceQuestion.answers.slice(),
        options: shuffleArray(sourceQuestion.options)
      };
    });
  }

  function configureStartScreen() {
    var isMc = currentMode === 'mc';
    var total = isMc ? data.mc.length : data.fill.length;
    $('startTitle').textContent = isMc ? 'Knowledge Quiz' : 'Fill in the Blanks';
    $('startDesc').textContent = isMc
      ? 'Multiple choice quiz focused on key definitions, examples, and lesson statements.'
      : 'Click options in order to fill blanks. Click a placed option again to return it to the option box.';
    $('modeCode').textContent = (isMc ? 'MC - ' : 'FIB - ') + total + ' Questions';
  }

  function initFillState(question) {
    fillPlaced = [];
    for (var i = 0; i < question.answers.length; i++) fillPlaced.push('');
    fillUsedOptionToBlank = [];
    for (var j = 0; j < question.options.length; j++) fillUsedOptionToBlank.push(-1);
  }

  function renderFillQuestion(question) {
    var sentenceParts = question.sentence.split('__BLANK__');
    var sentenceHtml = '';

    for (var i = 0; i < sentenceParts.length; i++) {
      sentenceHtml += escapeHtml(sentenceParts[i]);
      if (i < question.answers.length) {
        var value = fillPlaced[i];
        sentenceHtml += '<span class="fill-blank' + (value ? ' fill-blank--filled' : '') + '">' +
          escapeHtml(value || '______') +
          '</span>';
      }
    }

    $('fillSentence').innerHTML = sentenceHtml;
    $('fillBank').innerHTML = question.options.map(function(optionText, optionIndex) {
      var used = fillUsedOptionToBlank[optionIndex] !== -1;
      return '<button class="fill-chip' + (used ? ' fill-chip--used' : '') + '" data-option-idx="' + optionIndex + '">' +
        escapeHtml(optionText) +
      '</button>';
    }).join('');

    $('fillBank').querySelectorAll('.fill-chip').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (answered) return;
        toggleFillOption(parseInt(this.getAttribute('data-option-idx'), 10));
      });
    });

    $('fillCheckBtn').disabled = fillPlaced.indexOf('') !== -1 || answered;
  }

  function toggleFillOption(optionIndex) {
    var question = activeQuestions[currentIndex];
    var assignedBlank = fillUsedOptionToBlank[optionIndex];

    if (assignedBlank !== -1) {
      fillPlaced[assignedBlank] = '';
      fillUsedOptionToBlank[optionIndex] = -1;
    } else {
      var firstEmpty = fillPlaced.indexOf('');
      if (firstEmpty === -1) return;
      fillPlaced[firstEmpty] = question.options[optionIndex];
      fillUsedOptionToBlank[optionIndex] = firstEmpty;
    }

    renderFillQuestion(question);
  }

  function loadQuestion() {
    answered = false;
    var question = activeQuestions[currentIndex];
    var total = activeQuestions.length;

    $('questionNum').textContent = 'Question ' + (currentIndex + 1);
    $('questionText').textContent = question.q;
    $('progressLabel').textContent = 'Question ' + (currentIndex + 1) + ' of ' + total;
    $('scoreLabel').textContent = 'Score: ' + score;
    $('progressFill').style.width = (currentIndex / total * 100) + '%';

    $('feedback').style.display = 'none';
    $('feedback').className = 'feedback';
    $('nextBtn').style.display = 'none';

    if (question.type === 'mc') {
      $('fillWrap').style.display = 'none';
      $('optionsList').style.display = 'grid';
      var letters = ['A', 'B', 'C', 'D'];
      $('optionsList').innerHTML = question.choices.map(function(choiceText, i) {
        return '<li><button class="option-btn" data-idx="' + i + '">' +
          '<span class="option-btn__letter">' + letters[i] + '</span>' +
          '<span>' + escapeHtml(choiceText) + '</span>' +
        '</button></li>';
      }).join('');

      $('optionsList').querySelectorAll('.option-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          if (answered) return;
          selectMcAnswer(parseInt(this.getAttribute('data-idx'), 10));
        });
      });
    } else {
      $('optionsList').style.display = 'none';
      $('optionsList').innerHTML = '';
      $('fillWrap').style.display = 'block';
      initFillState(question);
      renderFillQuestion(question);
    }
  }

  function selectMcAnswer(idx) {
    answered = true;
    var question = activeQuestions[currentIndex];
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) { btn.disabled = true; });

    if (idx === question.answer) {
      score++;
      buttons[idx].classList.add('option-btn--correct');
      $('feedback').className = 'feedback feedback--correct';
      $('feedbackLabel').textContent = 'Correct!';
      $('feedbackText').textContent = '';
    } else {
      buttons[idx].classList.add('option-btn--wrong');
      buttons[question.answer].classList.add('option-btn--correct');
      $('feedback').className = 'feedback feedback--wrong';
      $('feedbackLabel').textContent = 'Incorrect';
      $('feedbackText').textContent = 'Correct answer: ' + question.choices[question.answer];
    }

    finishAnsweredQuestion();
  }

  function checkFillAnswer() {
    if (answered) return;
    answered = true;
    var question = activeQuestions[currentIndex];
    var isCorrect = true;

    for (var i = 0; i < question.answers.length; i++) {
      if (fillPlaced[i] !== question.answers[i]) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      score++;
      $('feedback').className = 'feedback feedback--correct';
      $('feedbackLabel').textContent = 'Correct!';
      $('feedbackText').textContent = '';
    } else {
      $('feedback').className = 'feedback feedback--wrong';
      $('feedbackLabel').textContent = 'Incorrect';
      $('feedbackText').textContent = 'Correct answer: ' + question.answers.join(' | ');
    }

    document.querySelectorAll('.fill-chip').forEach(function(btn) { btn.disabled = true; });
    $('fillCheckBtn').disabled = true;
    finishAnsweredQuestion();
  }

  function finishAnsweredQuestion() {
    $('feedback').style.display = 'block';
    $('scoreLabel').textContent = 'Score: ' + score;
    $('nextBtn').style.display = 'inline-flex';
    $('nextBtn').textContent = currentIndex === activeQuestions.length - 1 ? 'See Results' : 'Next';
  }

  function startQuiz() {
    activeQuestions = currentMode === 'mc' ? buildMcQuestions() : buildFillQuestions();
    currentIndex = 0;
    score = 0;
    showScreen('screenQuiz');
    loadQuestion();
  }

  function showResults() {
    showScreen('screenResults');
    var total = activeQuestions.length;
    var pct = Math.round(score / total * 100);
    $('scorePct').textContent = pct + '%';
    $('scoreRing').style.setProperty('--pct', pct + '%');
    $('resultsTitle').textContent = pct >= 90 ? 'Outstanding!' : pct >= 75 ? 'Great Job!' : pct >= 60 ? 'Good Effort!' : 'Keep Studying!';
    $('resultsSub').textContent = 'You scored ' + score + ' out of ' + total + ' (' + pct + '%)';
  }

  document.querySelectorAll('.mode-card').forEach(function(btn) {
    btn.addEventListener('click', function() {
      currentMode = this.getAttribute('data-mode');
      configureStartScreen();
      showScreen('screenStart');
    });
  });

  $('startBtn').addEventListener('click', startQuiz);
  $('retryBtn').addEventListener('click', startQuiz);
  $('modeBackBtn').addEventListener('click', function() { showScreen('screenMode'); });
  $('changeModeBtn').addEventListener('click', function() { showScreen('screenMode'); });
  $('fillCheckBtn').addEventListener('click', checkFillAnswer);
  $('nextBtn').addEventListener('click', function() {
    currentIndex++;
    if (currentIndex < activeQuestions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  });
  $('backBtn').addEventListener('click', function() {
    sessionStorage.setItem('spa-redirect', 'quiz');
    window.location.href = '../../../';
  });
})();
