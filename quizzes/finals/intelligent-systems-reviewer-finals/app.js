(() => {
  const state = {
    currentPart: null,
    currentActivity: 0,
    score: 0,
    activityResults: [], // Track each activity: {activityNum, correct, skipped}
    selectedNodeId: null,
    selectedLabel: null,
    nodeLabels: new Map(),
    lockedDepth: null,
  };

  const TOTAL_ACTIVITIES = 7;

  const correct = {
    treeLabels: {
      n1: "root",
      n2: "internal",
      n3: "internal",
      n4: "leaf",
      n5: "leaf",
      n6: "leaf",
      n7: "leaf",
    },
    termsMatch: new Map([
      ["def-root", "term-root"],
      ["def-branches", "term-branches"],
      ["def-internal", "term-internal"],
      ["def-leaf", "term-leaf"],
      ["def-pruning", "term-pruning"],
    ]),
    mcqAlgorithms: new Set(["ID3", "C4.5", "CART"]),
    fill: {
      blankRoot: "Root node",
      blankLeaf: "Leaf nodes",
      blankPruning: "Pruning",
    },
    ensembleSort: {
      bagging: new Set(["bagging", "bagging-line-1", "bagging-line-2"]),
      boosting: new Set(["boosting", "boosting-line-1"]),
    },
    baggingOrder: ["step1", "step2", "step3", "step4"],
    overfitDepthAcceptable: new Set([4, 5]),
  };

  function $(selector, root = document) {
    return root.querySelector(selector);
  }

  function $all(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function disableActivityButtons(activityNum) {
    const activity = $(`#activity-${activityNum}`);
    if (!activity) return;
    const submitBtn = activity.querySelector(`[data-submit="${activityNum}"]`);
    const giveUpBtn = activity.querySelector(`[data-giveup="${activityNum}"]`);
    if (submitBtn) submitBtn.disabled = true;
    if (giveUpBtn) giveUpBtn.disabled = true;
  }

  function setResult(id, text, ok = null) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = text;
    el.className = "activity-result";
    if (ok === true) el.classList.add("success");
    if (ok === false) el.classList.add("error");
  }

  function updateScoreboard() {
    const scoreText = $("#scoreText");
    const currentActivity = $("#currentActivity");
    if (scoreText) scoreText.textContent = `${state.score} / ${TOTAL_ACTIVITIES}`;
    if (currentActivity) currentActivity.textContent = `${state.currentActivity} / ${TOTAL_ACTIVITIES}`;
  }

  function showScreen(screenId) {
    const screens = ["partSelection", "part1Container"];
    screens.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.hidden = id !== screenId;
    });
  }

  function showActivity(num) {
    // Hide all activities and summary
    for (let i = 1; i <= TOTAL_ACTIVITIES; i++) {
      const el = $(`#activity-${i}`);
      if (el) el.hidden = true;
    }
    const summary = $("#summaryScreen");
    if (summary) summary.hidden = true;

    // Show requested activity
    const targetActivity = $(`#activity-${num}`);
    if (targetActivity) {
      targetActivity.hidden = false;
      state.currentActivity = num;
      updateScoreboard();
      
      // Clear result message
      setResult(`result-${num}`, "");
      
      // Re-enable buttons for this activity
      const submitBtn = targetActivity.querySelector(`[data-submit="${num}"]`);
      const giveUpBtn = targetActivity.querySelector(`[data-giveup="${num}"]`);
      if (submitBtn) submitBtn.disabled = false;
      if (giveUpBtn) giveUpBtn.disabled = false;
      
      // Randomize activity content
      randomizeActivity(num);
    }
  }

  function showSummary() {
    // Hide all activities
    for (let i = 1; i <= TOTAL_ACTIVITIES; i++) {
      const el = $(`#activity-${i}`);
      if (el) el.hidden = true;
    }

    const summary = $("#summaryScreen");
    if (summary) {
      summary.hidden = false;
      
      // Update final score
      const finalScore = $("#finalScore");
      if (finalScore) finalScore.textContent = state.score;

      // Build breakdown
      const breakdown = $("#summaryBreakdown");
      if (breakdown) {
        breakdown.innerHTML = "<h3>Activity Breakdown</h3>";
        for (let i = 1; i <= TOTAL_ACTIVITIES; i++) {
          const result = state.activityResults.find(r => r.activityNum === i);
          const item = document.createElement("div");
          item.className = "summary-item";
          
          if (result) {
            if (result.correct) {
              item.innerHTML = `<span class="summary-icon success">✓</span> <span>Activity ${i}</span> <span class="summary-status success">Correct</span>`;
            } else if (result.skipped) {
              item.innerHTML = `<span class="summary-icon skip">—</span> <span>Activity ${i}</span> <span class="summary-status skip">Skipped</span>`;
            } else {
              item.innerHTML = `<span class="summary-icon error">✗</span> <span>Activity ${i}</span> <span class="summary-status error">Incorrect</span>`;
            }
          } else {
            item.innerHTML = `<span class="summary-icon skip">—</span> <span>Activity ${i}</span> <span class="summary-status skip">Not Attempted</span>`;
          }
          
          breakdown.appendChild(item);
        }
      }
    }
  }

  function recordActivity(activityNum, correct, skipped = false) {
    // Remove existing record for this activity
    state.activityResults = state.activityResults.filter(r => r.activityNum !== activityNum);
    
    // Add new record
    state.activityResults.push({ activityNum, correct, skipped });
    
    if (correct && !skipped) {
      state.score++;
    }
    
    updateScoreboard();
  }

  function nextActivity() {
    if (state.currentActivity < TOTAL_ACTIVITIES) {
      showActivity(state.currentActivity + 1);
    } else {
      showSummary();
    }
  }

  function randomizeActivity(num) {
    switch (num) {
      case 2: randomizeActivity2(); break;
      case 3: randomizeActivity3(); break;
      case 5: randomizeActivity5(); break;
      case 6: randomizeActivity6(); break;
    }
  }

  function randomizeActivity2() {
    const root = $("#activity-2");
    if (!root) return;

    // Randomize term cards order
    const bank = $(".dnd-bank", root);
    if (bank) {
      const cards = $all(".dnd-card", bank);
      const shuffled = shuffle(cards);
      bank.innerHTML = "";
      shuffled.forEach(card => bank.appendChild(card));
    }

    // Randomize definition slots order
    const matchGrid = $(".match-grid", root);
    if (matchGrid) {
      const items = $all(".match-item", matchGrid);
      const shuffled = shuffle(items);
      matchGrid.innerHTML = "";
      shuffled.forEach(item => matchGrid.appendChild(item));
    }
  }

  function randomizeActivity3() {
    const fieldset = $("#activity-3 .mcq");
    if (!fieldset) return;

    const legend = $("legend", fieldset);
    const labels = $all("label.mcq-opt", fieldset);
    const shuffled = shuffle(labels);
    
    fieldset.innerHTML = "";
    if (legend) fieldset.appendChild(legend);
    shuffled.forEach(label => {
      // Clear checked state
      const input = $("input", label);
      if (input) input.checked = false;
      fieldset.appendChild(label);
    });
  }

  function randomizeActivity5() {
    const root = $("#activity-5");
    if (!root) return;

    const bank = $(".dnd-bank", root);
    if (bank) {
      const cards = $all(".dnd-card", bank);
      const shuffled = shuffle(cards);
      bank.innerHTML = "";
      shuffled.forEach(card => bank.appendChild(card));
    }

    // Clear drop zones
    $all(".drop-list", root).forEach(list => {
      list.innerHTML = "";
    });
  }

  function randomizeActivity6() {
    const list = $("#baggingOrder");
    if (!list) return;

    const items = $all(".order-item", list);
    const shuffled = shuffle(items);
    list.innerHTML = "";
    shuffled.forEach(item => list.appendChild(item));
  }

  // ============ Activity 1: Tree Labeling ============

  function renderNodeBadges() {
    $all(".tree-node").forEach((btn) => {
      const nodeId = btn.dataset.node;
      const label = state.nodeLabels.get(nodeId);
      const existing = btn.querySelector(".badge");
      if (existing) existing.remove();
      if (!label) return;
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = label.toUpperCase();
      btn.appendChild(badge);
    });
  }

  function setPickedLabel(label) {
    state.selectedLabel = label;
    $all(".chip[data-pick]").forEach((chip) => {
      chip.setAttribute("aria-pressed", chip.dataset.pick === label ? "true" : "false");
    });
  }

  function selectNode(nodeId) {
    state.selectedNodeId = nodeId;
    $all(".tree-node").forEach((n) => n.classList.toggle("is-selected", n.dataset.node === nodeId));
  }

  function applyLabelToSelectedNode() {
    if (!state.selectedNodeId || !state.selectedLabel) return;
    state.nodeLabels.set(state.selectedNodeId, state.selectedLabel);
    renderNodeBadges();
  }

  function clearNodeLabels() {
    state.nodeLabels.clear();
    renderNodeBadges();
    setResult("result-1", "Cleared.");
  }

  function checkActivity1() {
    disableActivityButtons(1);
    for (const [nodeId, expected] of Object.entries(correct.treeLabels)) {
      const got = state.nodeLabels.get(nodeId);
      if (got !== expected) {
        setResult("result-1", `Incorrect. Expected: ${nodeId.toUpperCase()} should be ${expected}.`, false);
        recordActivity(1, false);
        
        // Show correct answer
        setTimeout(() => nextActivity(), 2000);
        return;
      }
    }
    setResult("result-1", "Correct!", true);
    recordActivity(1, true);
    setTimeout(() => nextActivity(), 1500);
  }

  function giveUpActivity1() {
    disableActivityButtons(1);
    setResult("result-1", "Skipped. Moving to next activity...", null);
    recordActivity(1, false, true);
    setTimeout(() => nextActivity(), 1500);
  }

  // ============ Activity 2: Terms Match ============

  function setupMatchDnD() {
    let dragging = null;
    const root = $("#activity-2");
    if (!root) return;

    const bank = $(".dnd-bank", root);
    if (!bank) return;

    $all(".dnd-card", root).forEach((card) => {
      card.addEventListener("dragstart", (e) => {
        dragging = card;
        e.dataTransfer?.setData("text/plain", card.dataset.card || "");
        e.dataTransfer?.setDragImage(card, 10, 10);
      });

      card.addEventListener("dragend", () => {
        dragging = null;
        $all(".match-slot", root).forEach((slot) => slot.classList.remove("is-over"));
      });
    });

    $all(".match-slot", root).forEach((slot) => {
      slot.addEventListener("dragover", (e) => {
        e.preventDefault();
        slot.classList.add("is-over");
      });

      slot.addEventListener("dragleave", () => slot.classList.remove("is-over"));

      slot.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("is-over");
        if (!dragging) return;
        slot.textContent = "";
        slot.appendChild(dragging);
      });
    });

    bank.addEventListener("dragover", (e) => e.preventDefault());
    bank.addEventListener("drop", (e) => {
      e.preventDefault();
      if (!dragging) return;
      bank.appendChild(dragging);
    });
  }

  function checkActivity2() {
    disableActivityButtons(2);
    const root = $("#activity-2");
    if (!root) return;

    const errors = [];
    for (const [slotKey, expectedCardKey] of correct.termsMatch.entries()) {
      const slot = $(`.match-slot[data-slot="${slotKey}"]`, root);
      const card = slot ? $(".dnd-card", slot) : null;
      const got = card?.dataset.card;
      if (got !== expectedCardKey) {
        errors.push(slotKey);
      }
    }

    if (errors.length > 0) {
      setResult("result-2", `Incorrect. Check your matches.`, false);
      recordActivity(2, false);
      setTimeout(() => nextActivity(), 2000);
      return;
    }

    setResult("result-2", "Correct!", true);
    recordActivity(2, true);
    setTimeout(() => nextActivity(), 1500);
  }

  function giveUpActivity2() {
    disableActivityButtons(2);
    setResult("result-2", "Skipped. Moving to next activity...", null);
    recordActivity(2, false, true);
    setTimeout(() => nextActivity(), 1500);
  }

  // ============ Activity 3: MCQ ============

  function checkActivity3() {
    const picked = new Set(
      $all('#activity-3 input[name="algos"]:checked').map((i) => i.value),
    );

    if (picked.size === 0) {
      setResult("result-3", "Please select at least one option.", false);
      return;
    }

    disableActivityButtons(3);
    const ok = setsEqual(picked, correct.mcqAlgorithms);
    if (ok) {
      setResult("result-3", "Correct! ID3, C4.5, and CART.", true);
      recordActivity(3, true);
      setTimeout(() => nextActivity(), 1500);
    } else {
      setResult("result-3", "Incorrect. Expected: ID3, C4.5, and CART.", false);
      recordActivity(3, false);
      setTimeout(() => nextActivity(), 2000);
    }
  }

  function giveUpActivity3() {
    disableActivityButtons(3);
    setResult("result-3", "Skipped. Moving to next activity...", null);
    recordActivity(3, false, true);
    setTimeout(() => nextActivity(), 1500);
  }

  function setsEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const item of a) {
      if (!b.has(item)) return false;
    }
    return true;
  }

  // ============ Activity 4: Fill in the Blanks ============

  function normalizeAnswer(s) {
    return (s || "").trim().replace(/\s+/g, " ");
  }

  function checkActivity4() {
    disableActivityButtons(4);
    const root = normalizeAnswer($("#blankRoot")?.value);
    const leaf = normalizeAnswer($("#blankLeaf")?.value);
    const pruning = normalizeAnswer($("#blankPruning")?.value);

    const okRoot = root.toLowerCase() === correct.fill.blankRoot.toLowerCase();
    const okLeaf = leaf.toLowerCase() === correct.fill.blankLeaf.toLowerCase();
    const okPruning = pruning.toLowerCase() === correct.fill.blankPruning.toLowerCase();

    if (okRoot && okLeaf && okPruning) {
      setResult("result-4", "Correct!", true);
      recordActivity(4, true);
      setTimeout(() => nextActivity(), 1500);
    } else {
      setResult("result-4", "Incorrect. Expected: Root node / Leaf nodes / Pruning.", false);
      recordActivity(4, false);
      setTimeout(() => nextActivity(), 2000);
    }
  }

  function giveUpActivity4() {
    disableActivityButtons(4);
    setResult("result-4", "Skipped. Moving to next activity...", null);
    recordActivity(4, false, true);
    setTimeout(() => nextActivity(), 1500);
  }

  // ============ Activity 5: Ensemble Sort ============

  function setupEnsembleDnD() {
    let dragging = null;
    const root = $("#activity-5");
    if (!root) return;

    $all(".dnd-card", root).forEach((card) => {
      card.addEventListener("dragstart", (e) => {
        dragging = card;
        e.dataTransfer?.setData("text/plain", card.dataset.card || "");
        e.dataTransfer?.setDragImage(card, 10, 10);
      });

      card.addEventListener("dragend", () => {
        dragging = null;
        $all(".drop-zone", root).forEach((z) => z.classList.remove("is-over"));
      });
    });

    $all(".drop-zone", root).forEach((zone) => {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        zone.classList.add("is-over");
      });

      zone.addEventListener("dragleave", () => zone.classList.remove("is-over"));

      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.classList.remove("is-over");
        if (!dragging) return;
        const list = zone.querySelector(".drop-list");
        if (list) list.appendChild(dragging);
      });
    });
  }

  function checkActivity5() {
    disableActivityButtons(5);
    const root = $("#activity-5");
    if (!root) return;

    const baggingList = $(".drop-list[data-list='bagging']", root);
    const boostingList = $(".drop-list[data-list='boosting']", root);

    const baggingCards = new Set($all(".dnd-card", baggingList).map(c => c.dataset.card));
    const boostingCards = new Set($all(".dnd-card", boostingList).map(c => c.dataset.card));

    const okBagging = setsEqual(baggingCards, correct.ensembleSort.bagging);
    const okBoosting = setsEqual(boostingCards, correct.ensembleSort.boosting);

    if (okBagging && okBoosting) {
      setResult("result-5", "Correct!", true);
      recordActivity(5, true);
      setTimeout(() => nextActivity(), 1500);
    } else {
      setResult("result-5", "Incorrect. Check your sorting.", false);
      recordActivity(5, false);
      setTimeout(() => nextActivity(), 2000);
    }
  }

  function giveUpActivity5() {
    disableActivityButtons(5);
    setResult("result-5", "Skipped. Moving to next activity...", null);
    recordActivity(5, false, true);
    setTimeout(() => nextActivity(), 1500);
  }

  // ============ Activity 6: Bagging Order ============

  function setupBaggingOrderDnD() {
    let dragging = null;
    const list = $("#baggingOrder");
    if (!list) return;

    $all(".order-item", list).forEach((item) => {
      item.addEventListener("dragstart", (e) => {
        dragging = item;
        item.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
      });

      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
        dragging = null;
      });

      item.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (!dragging || dragging === item) return;

        const rect = item.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        const insertBefore = e.clientY < midY;

        if (insertBefore) {
          list.insertBefore(dragging, item);
        } else {
          list.insertBefore(dragging, item.nextSibling);
        }
      });
    });
  }

  function checkActivity6() {
    disableActivityButtons(6);
    const list = $("#baggingOrder");
    if (!list) return;

    const items = $all(".order-item", list);
    const order = items.map(item => item.dataset.step);

    const isCorrect = JSON.stringify(order) === JSON.stringify(correct.baggingOrder);

    if (isCorrect) {
      setResult("result-6", "Correct!", true);
      recordActivity(6, true);
      setTimeout(() => nextActivity(), 1500);
    } else {
      setResult("result-6", "Incorrect. Expected order: Step 1 → Step 2 → Step 3 → Step 4.", false);
      recordActivity(6, false);
      setTimeout(() => nextActivity(), 2000);
    }
  }

  function giveUpActivity6() {
    disableActivityButtons(6);
    setResult("result-6", "Skipped. Moving to next activity...", null);
    recordActivity(6, false, true);
    setTimeout(() => nextActivity(), 1500);
  }

  // ============ Activity 7: Overfitting Slider ============

  function setupDepthSlider() {
    const slider = $("#depthSlider");
    const depthValue = $("#depthValue");
    const trainFill = $("#trainFill");
    const testFill = $("#testFill");
    const trainVal = $("#trainVal");
    const testVal = $("#testVal");

    if (!slider) return;

    slider.addEventListener("input", () => {
      const depth = parseInt(slider.value, 10);
      if (depthValue) depthValue.textContent = depth;

      // Simulate accuracy curves
      let trainAcc, testAcc;
      if (depth <= 2) {
        trainAcc = 50 + depth * 7;
        testAcc = 55 + depth * 8;
      } else if (depth <= 5) {
        trainAcc = 64 + (depth - 2) * 4;
        testAcc = 71 + (depth - 2) * 1.5;
      } else {
        trainAcc = 76 + (depth - 5) * 4;
        testAcc = 76 - (depth - 5) * 3;
      }

      trainAcc = Math.round(trainAcc);
      testAcc = Math.round(testAcc);

      if (trainFill) trainFill.style.width = `${trainAcc}%`;
      if (testFill) testFill.style.width = `${testAcc}%`;
      if (trainVal) trainVal.textContent = `${trainAcc}%`;
      if (testVal) testVal.textContent = `${testAcc}%`;

      state.lockedDepth = depth;
    });
  }

  function checkActivity7() {
    if (state.lockedDepth === null) {
      setResult("result-7", "Please adjust the slider.", false);
      return;
    }

    disableActivityButtons(7);
    const ok = correct.overfitDepthAcceptable.has(state.lockedDepth);

    if (ok) {
      setResult("result-7", "Correct! Depth 4 or 5 gives the best test accuracy.", true);
      recordActivity(7, true);
      setTimeout(() => nextActivity(), 1500);
    } else {
      setResult("result-7", `Incorrect. You selected depth ${state.lockedDepth}. Optimal is 4 or 5.`, false);
      recordActivity(7, false);
      setTimeout(() => nextActivity(), 2000);
    }
  }

  function giveUpActivity7() {
    disableActivityButtons(7);
    setResult("result-7", "Skipped. Moving to next activity...", null);
    recordActivity(7, false, true);
    setTimeout(() => nextActivity(), 1500);
  }

  // ============ Initialization ============

  function init() {
    // Part selection buttons
    $all("[data-select-part]").forEach(btn => {
      btn.addEventListener("click", () => {
        const part = btn.dataset.selectPart;
        if (part === "part-1") {
          state.currentPart = part;
          showScreen("part1Container");
          showActivity(1);
        }
      });
    });

    // Submit buttons
    $all("[data-submit]").forEach(btn => {
      btn.addEventListener("click", () => {
        const activityNum = parseInt(btn.dataset.submit, 10);
        switch (activityNum) {
          case 1: checkActivity1(); break;
          case 2: checkActivity2(); break;
          case 3: checkActivity3(); break;
          case 4: checkActivity4(); break;
          case 5: checkActivity5(); break;
          case 6: checkActivity6(); break;
          case 7: checkActivity7(); break;
        }
      });
    });

    // Give Up buttons
    $all("[data-giveup]").forEach(btn => {
      btn.addEventListener("click", () => {
        const activityNum = parseInt(btn.dataset.giveup, 10);
        switch (activityNum) {
          case 1: giveUpActivity1(); break;
          case 2: giveUpActivity2(); break;
          case 3: giveUpActivity3(); break;
          case 4: giveUpActivity4(); break;
          case 5: giveUpActivity5(); break;
          case 6: giveUpActivity6(); break;
          case 7: giveUpActivity7(); break;
        }
      });
    });

    // Summary buttons
    const backToPartBtn = $("#backToPartSelection");
    if (backToPartBtn) {
      backToPartBtn.addEventListener("click", () => {
        // Reset state
        state.currentPart = null;
        state.currentActivity = 0;
        state.score = 0;
        state.activityResults = [];
        state.nodeLabels.clear();
        state.lockedDepth = null;
        showScreen("partSelection");
      });
    }

    const retryBtn = $("#retryPart1");
    if (retryBtn) {
      retryBtn.addEventListener("click", () => {
        // Reset state
        state.currentActivity = 0;
        state.score = 0;
        state.activityResults = [];
        state.nodeLabels.clear();
        state.lockedDepth = null;
        showActivity(1);
      });
    }

    // Activity 1: Tree labeling
    $all(".chip[data-pick]").forEach(chip => {
      chip.addEventListener("click", () => {
        setPickedLabel(chip.dataset.pick);
      });
    });

    $all(".tree-node").forEach(node => {
      node.addEventListener("click", () => {
        selectNode(node.dataset.node);
        applyLabelToSelectedNode();
      });
    });

    const clearBtn = $("#clearNodeLabels");
    if (clearBtn) {
      clearBtn.addEventListener("click", clearNodeLabels);
    }

    // Activity 2: Terms matching
    setupMatchDnD();

    // Activity 5: Ensemble sort
    setupEnsembleDnD();

    // Activity 6: Bagging order
    setupBaggingOrderDnD();

    // Activity 7: Depth slider
    setupDepthSlider();

    // Show part selection screen initially
    showScreen("partSelection");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
