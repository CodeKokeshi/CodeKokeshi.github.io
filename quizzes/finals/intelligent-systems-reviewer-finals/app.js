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
    // Part 2 specific state
    selectedUsers: new Set(),
    avgSelected: null,
    norm1Selected: null,
    distanceSelected: null,
  };

  const TOTAL_ACTIVITIES = 7;
  const TOTAL_ACTIVITIES_PART2 = 12;

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

  const correctPart2 = {
    cfLogicOrder: ["cf-step1", "cf-step2", "cf-step4", "cf-step3"],
    recSystemTypes: {
      "collab-filter": new Set(["rec-cf", "rec-cf2"]),
      "content-based": new Set(["rec-cb", "rec-cb2", "rec-cb3"]),
    },
    cfTypes: new Set(["Memory-Based", "Model-Based", "Hybrid", "Deep Learning"]),
    similarUsers: new Set(["user2"]), // User 2 has similar high rating on Movie 2 and moderate on Movie 4
    rounding: {
      round1: "1",
      round2: "0",
      round3: "1",
      round4: "0",
    },
    normalize: {
      avg: "3.67",
      norm1: "0.33",
    },
    knnBasics: new Set(["supervised", "non-parametric", "lazy", "distance"]),
    distanceMetrics: new Map([
      ["def-euclidean", "metric-euclidean"],
      ["def-manhattan", "metric-manhattan"],
      ["def-minkowski", "metric-minkowski"],
    ]),
    euclideanResult: "5",
    knnStepsOrder: ["knn-step1", "knn-step2", "knn-step3", "knn-step4"],
    knnApplications: new Map([
      ["app-def-medical", "app-medical"],
      ["app-def-recommend", "app-recommend"],
      ["app-def-fraud", "app-fraud"],
      ["app-def-image", "app-image"],
    ]),
    knnAdvDis: {
      advantages: new Set(["adv-simple", "adv-complex", "adv-notrain"]),
      disadvantages: new Set(["dis-compute", "dis-scaling", "dis-curse"]),
    },
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
    const screens = ["partSelection", "part1Container", "part2Container"];
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
              item.innerHTML = `<span class="summary-icon success">✓</span> <div><strong>Activity ${i}</strong> <span class="summary-status success">Correct</span></div>`;
            } else if (result.skipped) {
              item.innerHTML = `<span class="summary-icon skip">—</span> <div><strong>Activity ${i}</strong> <span class="summary-status skip">Skipped</span></div>`;
            } else {
              let detailHTML = `<span class="summary-icon error">✗</span> <div><strong>Activity ${i}</strong> <span class="summary-status error">Incorrect</span>`;
              if (result.details) {
                detailHTML += `<br><span class="summary-detail">${result.details}</span>`;
              }
              detailHTML += `</div>`;
              item.innerHTML = detailHTML;
            }
          } else {
            item.innerHTML = `<span class="summary-icon skip">—</span> <div><strong>Activity ${i}</strong> <span class="summary-status skip">Not Attempted</span></div>`;
          }
          
          breakdown.appendChild(item);
        }
      }
    }
  }

  function recordActivity(activityNum, correct, skipped = false, details = null) {
    // Remove existing record for this activity
    state.activityResults = state.activityResults.filter(r => r.activityNum !== activityNum);
    
    // Add new record
    state.activityResults.push({ activityNum, correct, skipped, details });
    
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
      case 4: randomizeActivity4(); break;
      case 5: randomizeActivity5(); break;
      case 6: randomizeActivity6(); break;
      case 7: randomizeActivity7(); break;
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

  function randomizeActivity4() {
    // Clear fill-in-the-blank inputs
    const root = $("#blankRoot");
    const leaf = $("#blankLeaf");
    const pruning = $("#blankPruning");
    if (root) root.value = "";
    if (leaf) leaf.value = "";
    if (pruning) pruning.value = "";
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

  function randomizeActivity7() {
    // Reset slider to default and clear locked state
    state.lockedDepth = null;
    const slider = $("#depthSlider");
    if (slider) {
      slider.value = "4";
      // Trigger input event to update display
      slider.dispatchEvent(new Event('input'));
    }
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
    for (const [nodeId, expected] of Object.entries(correct.treeLabels)) {
      const got = state.nodeLabels.get(nodeId);
      if (got !== expected) {
        const details = `Expected: ${nodeId.toUpperCase()} should be ${expected}.`;
        setResult("result-1", `Incorrect. ${details}`, false);
        recordActivity(1, false, false, details);
        
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
        
        // If slot already has a card, return it to bank first
        const existingCard = slot.querySelector(".dnd-card");
        if (existingCard && bank) {
          bank.appendChild(existingCard);
        }
        
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
    const root = $("#activity-2");
    if (!root) return;

    const errors = [];
    const termNames = {
      "term-root": "Root Node",
      "term-branches": "Branches",
      "term-internal": "Internal Nodes",
      "term-leaf": "Leaf Nodes",
      "term-pruning": "Pruning"
    };
    const slotNames = {
      "def-root": "starting point/whole dataset",
      "def-branches": "lines connecting nodes",
      "def-internal": "decision points",
      "def-leaf": "end points/final decision",
      "def-pruning": "removal of subnodes"
    };

    for (const [slotKey, expectedCardKey] of correct.termsMatch.entries()) {
      const slot = $(`.match-slot[data-slot="${slotKey}"]`, root);
      const card = slot ? $(".dnd-card", slot) : null;
      const got = card?.dataset.card;
      if (got !== expectedCardKey) {
        errors.push(`${slotNames[slotKey]} → should be ${termNames[expectedCardKey]}`);
      }
    }

    if (errors.length > 0) {
      const details = errors.join("; ");
      setResult("result-2", `Incorrect. ${details}.`, false);
      recordActivity(2, false, false, details);
      setTimeout(() => nextActivity(), 3000);
      return;
    }

    setResult("result-2", "Correct! All terms matched.", true);
    recordActivity(2, true);
    setTimeout(() => nextActivity(), 1500);
  }

  function giveUpActivity2() {
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
      const activity = $("#activity-3");
      if (activity) {
        const submitBtn = activity.querySelector('[data-submit="3"]');
        const giveUpBtn = activity.querySelector('[data-giveup="3"]');
        if (submitBtn) submitBtn.disabled = false;
        if (giveUpBtn) giveUpBtn.disabled = false;
      }
      return;
    }

    const ok = setsEqual(picked, correct.mcqAlgorithms);
    if (ok) {
      setResult("result-3", "Correct! ID3, C4.5, and CART.", true);
      recordActivity(3, true);
      setTimeout(() => nextActivity(), 1500);
    } else {
      const expected = Array.from(correct.mcqAlgorithms).sort();
      const selected = Array.from(picked).sort();
      const details = `You selected: ${selected.join(", ") || "none"}. Correct: ${expected.join(", ")}`;
      setResult("result-3", `Incorrect. ${details}.`, false);
      recordActivity(3, false, false, details);
      setTimeout(() => nextActivity(), 3000);
    }
  }

  function giveUpActivity3() {
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
    const root = normalizeAnswer($("#blankRoot")?.value);
    const leaf = normalizeAnswer($("#blankLeaf")?.value);
    const pruning = normalizeAnswer($("#blankPruning")?.value);

    // More forgiving matching: accepts partial answers like "root" for "root node"
    const rootLower = root.toLowerCase();
    const leafLower = leaf.toLowerCase();
    const pruningLower = pruning.toLowerCase();
    
    const okRoot = rootLower.includes("root") && (rootLower.includes("node") || rootLower === "root");
    const okLeaf = leafLower.includes("leaf") && (leafLower.includes("node") || leafLower === "leaf");
    const okPruning = pruningLower.includes("prun");

    if (okRoot && okLeaf && okPruning) {
      setResult("result-4", "Correct! All blanks filled correctly.", true);
      recordActivity(4, true);
      setTimeout(() => nextActivity(), 1500);
    } else {
      const errors = [];
      if (!okRoot) errors.push(`Blank 1: "${correct.fill.blankRoot}"`);
      if (!okLeaf) errors.push(`Blank 2: "${correct.fill.blankLeaf}"`);
      if (!okPruning) errors.push(`Blank 3: "${correct.fill.blankPruning}"`);
      const details = `Correct answers: ${errors.join(", ")}`;
      setResult("result-4", `Incorrect. ${details}.`, false);
      recordActivity(4, false, false, details);
      setTimeout(() => nextActivity(), 3000);
    }
  }

  function giveUpActivity4() {
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
    const root = $("#activity-5");
    if (!root) return;

    const baggingList = $(".drop-list[data-list='bagging']", root);
    const boostingList = $(".drop-list[data-list='boosting']", root);

    const baggingCards = new Set($all(".dnd-card", baggingList).map(c => c.dataset.card));
    const boostingCards = new Set($all(".dnd-card", boostingList).map(c => c.dataset.card));

    const okBagging = setsEqual(baggingCards, correct.ensembleSort.bagging);
    const okBoosting = setsEqual(boostingCards, correct.ensembleSort.boosting);

    if (okBagging && okBoosting) {
      setResult("result-5", "Correct! All cards sorted properly.", true);
      recordActivity(5, true);
      setTimeout(() => nextActivity(), 1500);
    } else {
      const errors = [];
      if (!okBagging) {
        errors.push("Bagging should contain: Bagging (Bootstrap Aggregating), independent training, and averaging/voting");
      }
      if (!okBoosting) {
        errors.push("Boosting should contain: Boosting and sequential training with error correction");
      }
      const details = errors.join(". ");
      setResult("result-5", `Incorrect. ${details}.`, false);
      recordActivity(5, false, false, details);
      setTimeout(() => nextActivity(), 3500);
    }
  }

  function giveUpActivity5() {
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
    const list = $("#baggingOrder");
    if (!list) return;

    const items = $all(".order-item", list);
    const order = items.map(item => item.dataset.step);

    const isCorrect = JSON.stringify(order) === JSON.stringify(correct.baggingOrder);

    if (isCorrect) {
      setResult("result-6", "Correct! Steps in proper order.", true);
      recordActivity(6, true);
      setTimeout(() => nextActivity(), 1500);
    } else {
      const stepLabels = {
        "step1": "Create subsets",
        "step2": "Create base models",
        "step3": "Learn in parallel",
        "step4": "Combine predictions"
      };
      const yourOrder = order.map((s, i) => `${i+1}. ${stepLabels[s]}`).join("; ");
      const correctOrder = correct.baggingOrder.map((s, i) => `${i+1}. ${stepLabels[s]}`).join("; ");
      const details = `Your order: ${yourOrder}. Correct: ${correctOrder}`;
      setResult("result-6", `Incorrect. ${details}.`, false);
      recordActivity(6, false, false, details);
      setTimeout(() => nextActivity(), 4000);
    }
  }

  function giveUpActivity6() {
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

      // Simulate accuracy curves with slight randomness
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

      // Add small random variation to make it less obvious
      const noise = Math.random() * 3 - 1.5;
      trainAcc = Math.round(trainAcc + noise);
      testAcc = Math.round(testAcc + noise);

      if (trainFill) trainFill.style.width = `${trainAcc}%`;
      if (testFill) testFill.style.width = `${testAcc}%`;
      // Hide exact percentages - show only bars
      if (trainVal) trainVal.textContent = "";
      if (testVal) testVal.textContent = "";

      state.lockedDepth = depth;
    });
  }

  function checkActivity7() {
    if (state.lockedDepth === null) {
      setResult("result-7", "Please adjust the slider.", false);
      const activity = $("#activity-7");
      if (activity) {
        const submitBtn = activity.querySelector('[data-submit="7"]');
        const giveUpBtn = activity.querySelector('[data-giveup="7"]');
        if (submitBtn) submitBtn.disabled = false;
        if (giveUpBtn) giveUpBtn.disabled = false;
      }
      return;
    }

    const ok = correct.overfitDepthAcceptable.has(state.lockedDepth);

    if (ok) {
      setResult("result-7", "Correct! Depth 4 or 5 gives the best test accuracy.", true);
      recordActivity(7, true);
      setTimeout(() => nextActivity(), 1500);
    } else {
      const details = `You selected depth ${state.lockedDepth}. Optimal: 4 or 5 (highest test accuracy)`;
      setResult("result-7", `Incorrect. ${details}.`, false);
      recordActivity(7, false, false, details);
      setTimeout(() => nextActivity(), 3000);
    }
  }

  function giveUpActivity7() {
    setResult("result-7", "Skipped. Moving to next activity...", null);
    recordActivity(7, false, true);
    setTimeout(() => nextActivity(), 1500);
  }

  // ============ PART 2: Collaborative Filtering & KNN ============

  let dragging2 = null;

  function disableActivityButtonsPart2(activityNum) {
    const activity = $(`#activity2-${activityNum}`);
    if (!activity) return;
    const submitBtn = activity.querySelector(`[data-submit="${20 + activityNum}"]`);
    const giveUpBtn = activity.querySelector(`[data-giveup="${20 + activityNum}"]`);
    if (submitBtn) submitBtn.disabled = true;
    if (giveUpBtn) giveUpBtn.disabled = true;
  }

  function updateScoreboardPart2() {
    const scoreText = $("#scoreText2");
    const currentActivity = $("#currentActivity2");
    if (scoreText) scoreText.textContent = `${state.score} / ${TOTAL_ACTIVITIES_PART2}`;
    if (currentActivity) currentActivity.textContent = `${state.currentActivity} / ${TOTAL_ACTIVITIES_PART2}`;
  }

  function showActivityPart2(num) {
    for (let i = 1; i <= TOTAL_ACTIVITIES_PART2; i++) {
      const el = $(`#activity2-${i}`);
      if (el) el.hidden = true;
    }
    const summaryEl = $("#summaryScreen2");
    if (summaryEl) summaryEl.hidden = true;

    state.currentActivity = num;
    const activity = $(`#activity2-${num}`);
    if (activity) {
      activity.hidden = false;
      const submitBtn = activity.querySelector(`[data-submit]`);
      const giveUpBtn = activity.querySelector(`[data-giveup]`);
      if (submitBtn) submitBtn.disabled = false;
      if (giveUpBtn) giveUpBtn.disabled = false;
      randomizeActivityPart2(num);
    }
    updateScoreboardPart2();
  }

  function showSummaryPart2() {
    for (let i = 1; i <= TOTAL_ACTIVITIES_PART2; i++) {
      const el = $(`#activity2-${i}`);
      if (el) el.hidden = true;
    }

    const summaryScreen = $("#summaryScreen2");
    if (summaryScreen) {
      summaryScreen.hidden = false;
      const finalScore = $("#finalScore2");
      if (finalScore) finalScore.textContent = state.score;

      const breakdown = $("#summaryBreakdown2");
      if (breakdown) {
        breakdown.innerHTML = "<h3>Activity Breakdown</h3>";
        for (let i = 1; i <= TOTAL_ACTIVITIES_PART2; i++) {
          const result = state.activityResults.find(r => r.activityNum === i);
          const item = document.createElement("div");
          item.className = "summary-item";
          
          if (result) {
            if (result.correct) {
              item.innerHTML = `<span class="summary-icon success">✓</span> <div><strong>Activity ${i}</strong> <span class="summary-status success">Correct</span></div>`;
            } else if (result.skipped) {
              item.innerHTML = `<span class="summary-icon skip">—</span> <div><strong>Activity ${i}</strong> <span class="summary-status skip">Skipped</span></div>`;
            } else {
              let detailHTML = `<span class="summary-icon error">✗</span> <div><strong>Activity ${i}</strong> <span class="summary-status error">Incorrect</span>`;
              if (result.details) {
                detailHTML += `<br><span class="summary-detail">${result.details}</span>`;
              }
              detailHTML += `</div>`;
              item.innerHTML = detailHTML;
            }
          } else {
            item.innerHTML = `<span class="summary-icon skip">—</span> <div><strong>Activity ${i}</strong> <span class="summary-status skip">Not Attempted</span></div>`;
          }
          
          breakdown.appendChild(item);
        }
      }
    }
  }

  function recordActivityPart2(activityNum, correct, skipped = false, details = null) {
    state.activityResults = state.activityResults.filter(r => r.activityNum !== activityNum);
    state.activityResults.push({ activityNum, correct, skipped, details });
    if (correct && !skipped) {
      state.score++;
    }
    updateScoreboardPart2();
  }

  function nextActivityPart2() {
    if (state.currentActivity < TOTAL_ACTIVITIES_PART2) {
      showActivityPart2(state.currentActivity + 1);
    } else {
      showSummaryPart2();
    }
  }

  function randomizeActivityPart2(num) {
    switch (num) {
      case 1: randomizeCFLogicOrder(); break;
      case 2: randomizeRecSystemTypes(); break;
      case 10: randomizeKNNStepsOrder(); break;
      default: break;
    }
  }

  // Activity 1: CF Logic Order
  function randomizeCFLogicOrder() {
    const list = $("#cfLogicOrder");
    if (!list) return;
    const items = shuffle($all(".order-item", list));
    list.innerHTML = "";
    items.forEach(item => list.appendChild(item));
    setupOrderListDnD("cfLogicOrder");
  }

  function checkActivity21() {
    const list = $("#cfLogicOrder");
    if (!list) return;
    const order = $all(".order-item", list).map(item => item.dataset.step);
    const isCorrect = JSON.stringify(order) === JSON.stringify(correctPart2.cfLogicOrder);

    if (isCorrect) {
      setResult("result2-1", "Correct! The collaborative filtering logic flows perfectly.", true);
      recordActivityPart2(1, true);
      setTimeout(() => nextActivityPart2(), 1500);
    } else {
      const correctFlow = "1. An item liked by both → 2. They are similar users → 3. Alice likes new item → 4. Recommend to Bob";
      const details = `Correct flow: ${correctFlow}`;
      setResult("result2-1", `Incorrect. ${details}.`, false);
      recordActivityPart2(1, false, false, details);
      setTimeout(() => nextActivityPart2(), 3000);
    }
  }

  function giveUpActivity21() {
    setResult("result2-1", "Skipped. Moving to next activity...", null);
    recordActivityPart2(1, false, true);
    setTimeout(() => nextActivityPart2(), 1500);
  }

  // Activity 2: Rec System Types
  function randomizeRecSystemTypes() {
    const bank = $(".dnd-bank", $("#activity2-2"));
    if (!bank) return;
    const cards = shuffle($all(".dnd-card", bank));
    bank.innerHTML = "";
    cards.forEach(card => bank.appendChild(card));
    setupRecSystemDnD();
  }

  function setupRecSystemDnD() {
    const root = $("#activity2-2");
    if (!root) return;

    const bank = $(".dnd-bank", root);
    if (!bank) return;

    $all(".dnd-card", root).forEach(card => {
      card.addEventListener("dragstart", (e) => {
        dragging2 = card;
        e.dataTransfer?.setData("text/plain", card.dataset.card || "");
        e.dataTransfer?.setDragImage(card, 10, 10);
      });

      card.addEventListener("dragend", () => {
        dragging2 = null;
        $all(".drop-zone", root).forEach(zone => zone.classList.remove("is-over"));
      });
    });

    $all(".drop-zone", root).forEach(zone => {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        zone.classList.add("is-over");
      });

      zone.addEventListener("dragleave", () => zone.classList.remove("is-over"));

      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.classList.remove("is-over");
        if (!dragging2) return;
        const list = zone.querySelector(".drop-list");
        if (list) list.appendChild(dragging2);
      });
    });

    bank.addEventListener("dragover", (e) => e.preventDefault());
    bank.addEventListener("drop", (e) => {
      e.preventDefault();
      if (!dragging2) return;
      bank.appendChild(dragging2);
    });
  }

  function checkActivity22() {
    const root = $("#activity2-2");
    if (!root) return;

    const errors = [];
    const cfZone = root.querySelector('[data-zone="collab-filter"] .drop-list');
    const cbZone = root.querySelector('[data-zone="content-based"] .drop-list');

    const cfCards = new Set($all(".dnd-card", cfZone).map(c => c.dataset.card));
    const cbCards = new Set($all(".dnd-card", cbZone).map(c => c.dataset.card));

    const okCF = setsEqual(cfCards, correctPart2.recSystemTypes["collab-filter"]);
    const okCB = setsEqual(cbCards, correctPart2.recSystemTypes["content-based"]);

    if (okCF && okCB) {
      setResult("result2-2", "Correct! Both recommendation types categorized properly.", true);
      recordActivityPart2(2, true);
      setTimeout(() => nextActivityPart2(), 1500);
    } else {
      if (!okCF) errors.push("Collaborative Filtering should have: similarity measures and the term itself");
      if (!okCB) errors.push("Content-Based should have: supervised ML, classifier, and the term itself");
      const details = errors.join(". ");
      setResult("result2-2", `Incorrect. ${details}.`, false);
      recordActivityPart2(2, false, false, details);
      setTimeout(() => nextActivityPart2(), 3000);
    }
  }

  function giveUpActivity22() {
    setResult("result2-2", "Skipped. Moving to next activity...", null);
    recordActivityPart2(2, false, true);
    setTimeout(() => nextActivityPart2(), 1500);
  }

  // Activity 3: 4 Types of CF
  function checkActivity23() {
    const picked = new Set();
    $all('input[name="cf-types"]:checked').forEach(input => picked.add(input.value));

    if (picked.size === 0) {
      setResult("result2-3", "Please select at least one option.", false);
      const activity = $("#activity2-3");
      if (activity) {
        const submitBtn = activity.querySelector('[data-submit="23"]');
        const giveUpBtn = activity.querySelector('[data-giveup="23"]');
        if (submitBtn) submitBtn.disabled = false;
        if (giveUpBtn) giveUpBtn.disabled = false;
      }
      return;
    }

    const ok = setsEqual(picked, correctPart2.cfTypes);
    if (ok) {
      setResult("result2-3", "Correct! Memory-Based, Model-Based, Hybrid, and Deep Learning.", true);
      recordActivityPart2(3, true);
      setTimeout(() => nextActivityPart2(), 1500);
    } else {
      const expected = Array.from(correctPart2.cfTypes).sort();
      const selected = Array.from(picked).sort();
      const details = `You selected: ${selected.join(", ")}. Correct: ${expected.join(", ")}`;
      setResult("result2-3", `Incorrect. ${details}.`, false);
      recordActivityPart2(3, false, false, details);
      setTimeout(() => nextActivityPart2(), 3000);
    }
  }

  function giveUpActivity23() {
    setResult("result2-3", "Skipped. Moving to next activity...", null);
    recordActivityPart2(3, false, true);
    setTimeout(() => nextActivityPart2(), 1500);
  }

  // Activity 4: Similarity Measurement
  function checkActivity24() {
    const ok = setsEqual(state.selectedUsers, correctPart2.similarUsers);

    if (ok) {
      setResult("result2-4", "Correct! User 2 has similar high ratings.", true);
      recordActivityPart2(4, true);
      setTimeout(() => nextActivityPart2(), 1500);
    } else {
      const details = "User 2 has similar pattern (high rating on Movie 2, moderate on Movie 4)";
      setResult("result2-4", `Incorrect. ${details}.`, false);
      recordActivityPart2(4, false, false, details);
      setTimeout(() => nextActivityPart2(), 3000);
    }
  }

  function giveUpActivity24() {
    setResult("result2-4", "Skipped. Moving to next activity...", null);
    recordActivityPart2(4, false, true);
    setTimeout(() => nextActivityPart2(), 1500);
  }

  // Activity 5: Data Rounding
  function checkActivity25() {
    const r1 = ($("#round1")?.value || "").trim();
    const r2 = ($("#round2")?.value || "").trim();
    const r3 = ($("#round3")?.value || "").trim();
    const r4 = ($("#round4")?.value || "").trim();

    const ok1 = r1 === correctPart2.rounding.round1;
    const ok2 = r2 === correctPart2.rounding.round2;
    const ok3 = r3 === correctPart2.rounding.round3;
    const ok4 = r4 === correctPart2.rounding.round4;

    if (ok1 && ok2 && ok3 && ok4) {
      setResult("result2-5", "Correct! All rounding values match the rule.", true);
      recordActivityPart2(5, true);
      setTimeout(() => nextActivityPart2(), 1500);
    } else {
      const errors = [];
      if (!ok1) errors.push("5 stars → 1 (above 3)");
      if (!ok2) errors.push("2 stars → 0 (below 3)");
      if (!ok3) errors.push("4 stars → 1 (above 3)");
      if (!ok4) errors.push("1 star → 0 (below 3)");
      const details = `Correct: ${errors.join(", ")}`;
      setResult("result2-5", `Incorrect. ${details}.`, false);
      recordActivityPart2(5, false, false, details);
      setTimeout(() => nextActivityPart2(), 3000);
    }
  }

  function giveUpActivity25() {
    setResult("result2-5", "Skipped. Moving to next activity...", null);
    recordActivityPart2(5, false, true);
    setTimeout(() => nextActivityPart2(), 1500);
  }

  // Activity 6: Normalizing Calculation
  function checkActivity26() {
    if (!state.avgSelected || !state.norm1Selected) {
      setResult("result2-6", "Please complete both steps.", false);
      const activity = $("#activity2-6");
      if (activity) {
        const submitBtn = activity.querySelector('[data-submit="26"]');
        const giveUpBtn = activity.querySelector('[data-giveup="26"]');
        if (submitBtn) submitBtn.disabled = false;
        if (giveUpBtn) giveUpBtn.disabled = false;
      }
      return;
    }

    const okAvg = state.avgSelected === correctPart2.normalize.avg;
    const okNorm = state.norm1Selected === correctPart2.normalize.norm1;

    if (okAvg && okNorm) {
      setResult("result2-6", "Correct! Average = 3.67, Normalized Movie 1 = 0.33.", true);
      recordActivityPart2(6, true);
      setTimeout(() => nextActivityPart2(), 1500);
    } else {
      const errors = [];
      if (!okAvg) errors.push("Average should be 3.67");
      if (!okNorm) errors.push("Normalized Movie 1 should be 0.33");
      const details = errors.join(". ");
      setResult("result2-6", `Incorrect. ${details}.`, false);
      recordActivityPart2(6, false, false, details);
      setTimeout(() => nextActivityPart2(), 3000);
    }
  }

  function giveUpActivity26() {
    setResult("result2-6", "Skipped. Moving to next activity...", null);
    recordActivityPart2(6, false, true);
    state.avgSelected = null;
    state.norm1Selected = null;
    setTimeout(() => nextActivityPart2(), 1500);
  }

  // Activity 7: KNN Basics
  function checkActivity27() {
    const picked = new Set();
    $all('input[name="knn-basics"]:checked').forEach(input => picked.add(input.value));

    if (picked.size === 0) {
      setResult("result2-7", "Please select at least one option.", false);
      const activity = $("#activity2-7");
      if (activity) {
        const submitBtn = activity.querySelector('[data-submit="27"]');
        const giveUpBtn = activity.querySelector('[data-giveup="27"]');
        if (submitBtn) submitBtn.disabled = false;
        if (giveUpBtn) giveUpBtn.disabled = false;
      }
      return;
    }

    const ok = setsEqual(picked, correctPart2.knnBasics);
    if (ok) {
      setResult("result2-7", "Correct! All KNN fundamentals identified.", true);
      recordActivityPart2(7, true);
      setTimeout(() => nextActivityPart2(), 1500);
    } else {
      const expected = Array.from(correctPart2.knnBasics).sort();
      const selected = Array.from(picked).sort();
      const details = `Correct: supervised, non-parametric, lazy learner, distance-based prediction`;
      setResult("result2-7", `Incorrect. ${details}.`, false);
      recordActivityPart2(7, false, false, details);
      setTimeout(() => nextActivityPart2(), 3000);
    }
  }

  function giveUpActivity27() {
    setResult("result2-7", "Skipped. Moving to next activity...", null);
    recordActivityPart2(7, false, true);
    setTimeout(() => nextActivityPart2(), 1500);
  }

  // Activity 8: Distance Metrics Matching
  function setupDistanceMetricsDnD() {
    const root = $("#activity2-8");
    if (!root) return;

    const bank = $(".dnd-bank", root);
    if (!bank) return;

    $all(".dnd-card", root).forEach(card => {
      card.addEventListener("dragstart", (e) => {
        dragging2 = card;
        e.dataTransfer?.setData("text/plain", card.dataset.card || "");
        e.dataTransfer?.setDragImage(card, 10, 10);
      });

      card.addEventListener("dragend", () => {
        dragging2 = null;
        $all(".match-slot", root).forEach(slot => slot.classList.remove("is-over"));
      });
    });

    $all(".match-slot", root).forEach(slot => {
      slot.addEventListener("dragover", (e) => {
        e.preventDefault();
        slot.classList.add("is-over");
      });

      slot.addEventListener("dragleave", () => slot.classList.remove("is-over"));

      slot.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("is-over");
        if (!dragging2) return;

        const existingCard = slot.querySelector(".dnd-card");
        if (existingCard && bank) {
          bank.appendChild(existingCard);
        }

        slot.textContent = "";
        slot.appendChild(dragging2);
      });
    });

    bank.addEventListener("dragover", (e) => e.preventDefault());
    bank.addEventListener("drop", (e) => {
      e.preventDefault();
      if (!dragging2) return;
      bank.appendChild(dragging2);
    });
  }

  function checkActivity28() {
    const root = $("#activity2-8");
    if (!root) return;

    const errors = [];
    for (const [slotId, expectedCard] of correctPart2.distanceMetrics) {
      const slot = root.querySelector(`[data-slot="${slotId}"]`);
      const card = slot?.querySelector(".dnd-card");
      const gotCard = card?.dataset.card;
      if (gotCard !== expectedCard) {
        errors.push(slotId.replace("def-", ""));
      }
    }

    if (errors.length === 0) {
      setResult("result2-8", "Correct! All distance metrics matched.", true);
      recordActivityPart2(8, true);
      setTimeout(() => nextActivityPart2(), 1500);
    } else {
      const details = `Check: ${errors.join(", ")}. Euclidean=straight line, Manhattan=grid, Minkowski=family`;
      setResult("result2-8", `Incorrect. ${details}.`, false);
      recordActivityPart2(8, false, false, details);
      setTimeout(() => nextActivityPart2(), 3000);
    }
  }

  function giveUpActivity28() {
    setResult("result2-8", "Skipped. Moving to next activity...", null);
    recordActivityPart2(8, false, true);
    setTimeout(() => nextActivityPart2(), 1500);
  }

  // Activity 9: Distance Calculation
  function checkActivity29() {
    if (!state.distanceSelected) {
      setResult("result2-9", "Please select a distance.", false);
      const activity = $("#activity2-9");
      if (activity) {
        const submitBtn = activity.querySelector('[data-submit="29"]');
        const giveUpBtn = activity.querySelector('[data-giveup="29"]');
        if (submitBtn) submitBtn.disabled = false;
        if (giveUpBtn) giveUpBtn.disabled = false;
      }
      return;
    }

    const ok = state.distanceSelected === correctPart2.euclideanResult;
    if (ok) {
      setResult("result2-9", "Correct! √25 = 5.", true);
      recordActivityPart2(9, true);
      setTimeout(() => nextActivityPart2(), 1500);
    } else {
      const details = `Correct calculation: √((4-1)² + (6-2)²) = √(9+16) = √25 = 5`;
      setResult("result2-9", `Incorrect. ${details}.`, false);
      recordActivityPart2(9, false, false, details);
      setTimeout(() => nextActivityPart2(), 3000);
    }
  }

  function giveUpActivity29() {
    setResult("result2-9", "Skipped. Moving to next activity...", null);
    recordActivityPart2(9, false, true);
    state.distanceSelected = null;
    setTimeout(() => nextActivityPart2(), 1500);
  }

  // Activity 10: KNN Steps Order
  function randomizeKNNStepsOrder() {
    const list = $("#knnStepsOrder");
    if (!list) return;
    const items = shuffle($all(".order-item", list));
    list.innerHTML = "";
    items.forEach(item => list.appendChild(item));
    setupOrderListDnD("knnStepsOrder");
  }

  function checkActivity210() {
    const list = $("#knnStepsOrder");
    if (!list) return;
    const order = $all(".order-item", list).map(item => item.dataset.step);
    const isCorrect = JSON.stringify(order) === JSON.stringify(correctPart2.knnStepsOrder);

    if (isCorrect) {
      setResult("result2-10", "Correct! KNN steps in proper order.", true);
      recordActivityPart2(10, true);
      setTimeout(() => nextActivityPart2(), 1500);
    } else {
      const correctFlow = "1. Choose K → 2. Calculate distances → 3. Find K nearest → 4. Classify/Regress";
      const details = `Correct order: ${correctFlow}`;
      setResult("result2-10", `Incorrect. ${details}.`, false);
      recordActivityPart2(10, false, false, details);
      setTimeout(() => nextActivityPart2(), 3000);
    }
  }

  function giveUpActivity210() {
    setResult("result2-10", "Skipped. Moving to next activity...", null);
    recordActivityPart2(10, false, true);
    setTimeout(() => nextActivityPart2(), 1500);
  }

  // Activity 11: KNN Applications
  function setupKNNApplicationsDnD() {
    const root = $("#activity2-11");
    if (!root) return;

    const bank = $(".dnd-bank", root);
    if (!bank) return;

    $all(".dnd-card", root).forEach(card => {
      card.addEventListener("dragstart", (e) => {
        dragging2 = card;
        e.dataTransfer?.setData("text/plain", card.dataset.card || "");
        e.dataTransfer?.setDragImage(card, 10, 10);
      });

      card.addEventListener("dragend", () => {
        dragging2 = null;
        $all(".match-slot", root).forEach(slot => slot.classList.remove("is-over"));
      });
    });

    $all(".match-slot", root).forEach(slot => {
      slot.addEventListener("dragover", (e) => {
        e.preventDefault();
        slot.classList.add("is-over");
      });

      slot.addEventListener("dragleave", () => slot.classList.remove("is-over"));

      slot.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("is-over");
        if (!dragging2) return;

        const existingCard = slot.querySelector(".dnd-card");
        if (existingCard && bank) {
          bank.appendChild(existingCard);
        }

        slot.textContent = "";
        slot.appendChild(dragging2);
      });
    });

    bank.addEventListener("dragover", (e) => e.preventDefault());
    bank.addEventListener("drop", (e) => {
      e.preventDefault();
      if (!dragging2) return;
      bank.appendChild(dragging2);
    });
  }

  function checkActivity211() {
    const root = $("#activity2-11");
    if (!root) return;

    const errors = [];
    for (const [slotId, expectedCard] of correctPart2.knnApplications) {
      const slot = root.querySelector(`[data-slot="${slotId}"]`);
      const card = slot?.querySelector(".dnd-card");
      const gotCard = card?.dataset.card;
      if (gotCard !== expectedCard) {
        errors.push(slotId.replace("app-def-", ""));
      }
    }

    if (errors.length === 0) {
      setResult("result2-11", "Correct! All applications matched.", true);
      recordActivityPart2(11, true);
      setTimeout(() => nextActivityPart2(), 1500);
    } else {
      const details = `Check: ${errors.join(", ")}. Medical=tumors, Recommend=movies, Fraud=transactions, Image=objects`;
      setResult("result2-11", `Incorrect. ${details}.`, false);
      recordActivityPart2(11, false, false, details);
      setTimeout(() => nextActivityPart2(), 3000);
    }
  }

  function giveUpActivity211() {
    setResult("result2-11", "Skipped. Moving to next activity...", null);
    recordActivityPart2(11, false, true);
    setTimeout(() => nextActivityPart2(), 1500);
  }

  // Activity 12: Advantages vs Disadvantages
  function setupAdvDisDnD() {
    const root = $("#activity2-12");
    if (!root) return;

    const bank = $(".dnd-bank", root);
    if (!bank) return;

    $all(".dnd-card", root).forEach(card => {
      card.addEventListener("dragstart", (e) => {
        dragging2 = card;
        e.dataTransfer?.setData("text/plain", card.dataset.card || "");
        e.dataTransfer?.setDragImage(card, 10, 10);
      });

      card.addEventListener("dragend", () => {
        dragging2 = null;
        $all(".drop-zone", root).forEach(zone => zone.classList.remove("is-over"));
      });
    });

    $all(".drop-zone", root).forEach(zone => {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        zone.classList.add("is-over");
      });

      zone.addEventListener("dragleave", () => zone.classList.remove("is-over"));

      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.classList.remove("is-over");
        if (!dragging2) return;
        const list = zone.querySelector(".drop-list");
        if (list) list.appendChild(dragging2);
      });
    });

    bank.addEventListener("dragover", (e) => e.preventDefault());
    bank.addEventListener("drop", (e) => {
      e.preventDefault();
      if (!dragging2) return;
      bank.appendChild(dragging2);
    });
  }

  function checkActivity212() {
    const root = $("#activity2-12");
    if (!root) return;

    const advZone = root.querySelector('[data-zone="advantages"] .drop-list');
    const disZone = root.querySelector('[data-zone="disadvantages"] .drop-list');

    const advCards = new Set($all(".dnd-card", advZone).map(c => c.dataset.card));
    const disCards = new Set($all(".dnd-card", disZone).map(c => c.dataset.card));

    const okAdv = setsEqual(advCards, correctPart2.knnAdvDis.advantages);
    const okDis = setsEqual(disCards, correctPart2.knnAdvDis.disadvantages);

    if (okAdv && okDis) {
      setResult("result2-12", "Correct! All advantages and disadvantages sorted properly.", true);
      recordActivityPart2(12, true);
      setTimeout(() => nextActivityPart2(), 1500);
    } else {
      const errors = [];
      if (!okAdv) errors.push("Advantages: simplicity, complexity handling, no training");
      if (!okDis) errors.push("Disadvantages: computational cost, scaling needed, curse of dimensionality");
      const details = errors.join(". ");
      setResult("result2-12", `Incorrect. ${details}.`, false);
      recordActivityPart2(12, false, false, details);
      setTimeout(() => nextActivityPart2(), 3000);
    }
  }

  function giveUpActivity212() {
    setResult("result2-12", "Skipped. Moving to next activity...", null);
    recordActivityPart2(12, false, true);
    setTimeout(() => nextActivityPart2(), 1500);
  }

  // Generic reusable drag-and-drop for ordered lists
  function setupOrderListDnD(listId) {
    const list = document.getElementById(listId);
    if (!list) return;

    let draggedItem = null;

    $all(".order-item", list).forEach(item => {
      item.addEventListener("dragstart", () => {
        draggedItem = item;
        setTimeout(() => item.classList.add("dragging"), 0);
      });

      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
        draggedItem = null;
      });

      item.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (!draggedItem || draggedItem === item) return;
        const bounding = item.getBoundingClientRect();
        const offset = e.clientY - bounding.top;
        if (offset > bounding.height / 2) {
          item.parentNode.insertBefore(draggedItem, item.nextSibling);
        } else {
          item.parentNode.insertBefore(draggedItem, item);
        }
      });
    });
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
        } else if (part === "part-2") {
          state.currentPart = part;
          showScreen("part2Container");
          state.currentActivity = 0;
          state.score = 0;
          state.activityResults = [];
          state.selectedUsers.clear();
          state.avgSelected = null;
          state.norm1Selected = null;
          state.distanceSelected = null;
          showActivityPart2(1);
        }
      });
    });

    // Submit buttons (Part 1: 1-7, Part 2: 21-32)
    $all("[data-submit]").forEach(btn => {
      btn.addEventListener("click", () => {
        const activityNum = parseInt(btn.dataset.submit, 10);
        if (activityNum >= 1 && activityNum <= 7) {
          disableActivityButtons(activityNum);
          switch (activityNum) {
            case 1: checkActivity1(); break;
            case 2: checkActivity2(); break;
            case 3: checkActivity3(); break;
            case 4: checkActivity4(); break;
            case 5: checkActivity5(); break;
            case 6: checkActivity6(); break;
            case 7: checkActivity7(); break;
          }
        } else if (activityNum >= 21 && activityNum <= 32) {
          const part2Num = activityNum - 20;
          disableActivityButtonsPart2(part2Num);
          switch (activityNum) {
            case 21: checkActivity21(); break;
            case 22: checkActivity22(); break;
            case 23: checkActivity23(); break;
            case 24: checkActivity24(); break;
            case 25: checkActivity25(); break;
            case 26: checkActivity26(); break;
            case 27: checkActivity27(); break;
            case 28: checkActivity28(); break;
            case 29: checkActivity29(); break;
            case 210: checkActivity210(); break;
            case 211: checkActivity211(); break;
            case 212: checkActivity212(); break;
          }
        }
      });
    });

    // Give Up buttons
    $all("[data-giveup]").forEach(btn => {
      btn.addEventListener("click", () => {
        const activityNum = parseInt(btn.dataset.giveup, 10);
        if (activityNum >= 1 && activityNum <= 7) {
          disableActivityButtons(activityNum);
          switch (activityNum) {
            case 1: giveUpActivity1(); break;
            case 2: giveUpActivity2(); break;
            case 3: giveUpActivity3(); break;
            case 4: giveUpActivity4(); break;
            case 5: giveUpActivity5(); break;
            case 6: giveUpActivity6(); break;
            case 7: giveUpActivity7(); break;
          }
        } else if (activityNum >= 21 && activityNum <= 32) {
          const part2Num = activityNum - 20;
          disableActivityButtonsPart2(part2Num);
          switch (activityNum) {
            case 21: giveUpActivity21(); break;
            case 22: giveUpActivity22(); break;
            case 23: giveUpActivity23(); break;
            case 24: giveUpActivity24(); break;
            case 25: giveUpActivity25(); break;
            case 26: giveUpActivity26(); break;
            case 27: giveUpActivity27(); break;
            case 28: giveUpActivity28(); break;
            case 29: giveUpActivity29(); break;
            case 210: giveUpActivity210(); break;
            case 211: giveUpActivity211(); break;
            case 212: giveUpActivity212(); break;
          }
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

    // Part 2 Summary buttons
    const backToPartBtn2 = $("#backToPartSelection2");
    if (backToPartBtn2) {
      backToPartBtn2.addEventListener("click", () => {
        state.currentPart = null;
        state.currentActivity = 0;
        state.score = 0;
        state.activityResults = [];
        state.selectedUsers.clear();
        state.avgSelected = null;
        state.norm1Selected = null;
        state.distanceSelected = null;
        showScreen("partSelection");
      });
    }

    const retryBtn2 = $("#retryPart2");
    if (retryBtn2) {
      retryBtn2.addEventListener("click", () => {
        state.currentActivity = 0;
        state.score = 0;
        state.activityResults = [];
        state.selectedUsers.clear();
        state.avgSelected = null;
        state.norm1Selected = null;
        state.distanceSelected = null;
        showActivityPart2(1);
      });
    }

    // Part 2 Activity-specific setup
    // Activity 4: User selection
    $all(".user-card").forEach(card => {
      card.addEventListener("click", () => {
        const user = card.dataset.user;
        if (state.selectedUsers.has(user)) {
          state.selectedUsers.delete(user);
          card.classList.remove("selected");
        } else {
          state.selectedUsers.add(user);
          card.classList.add("selected");
        }
      });
    });

    // Activity 6: Normalization calculation
    $all("[data-avg]").forEach(btn => {
      btn.addEventListener("click", () => {
        $all("[data-avg]").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        state.avgSelected = btn.dataset.avg;
        const step2 = $("#step2Normalize");
        if (step2 && state.avgSelected === correctPart2.normalize.avg) {
          step2.hidden = false;
        }
      });
    });

    $all("[data-norm1]").forEach(btn => {
      btn.addEventListener("click", () => {
        $all("[data-norm1]").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        state.norm1Selected = btn.dataset.norm1;
      });
    });

    // Activity 9: Distance calculation
    $all("[data-distance]").forEach(btn => {
      btn.addEventListener("click", () => {
        $all("[data-distance]").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        state.distanceSelected = btn.dataset.distance;
      });
    });

    // Part 2 Drag and Drop setups
    setupRecSystemDnD();
    setupDistanceMetricsDnD();
    setupKNNApplicationsDnD();
    setupAdvDisDnD();

    // Show part selection screen initially
    showScreen("partSelection");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
