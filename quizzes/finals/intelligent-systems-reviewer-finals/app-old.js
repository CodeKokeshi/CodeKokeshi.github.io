(() => {
  const state = {
    completed: new Set(),
    score: 0,
    selectedNodeId: null,
    selectedLabel: null,
    nodeLabels: new Map(),
    lockedDepthAnswer: null,
    activePart: "part-1",
  };

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
    ensembleSort: {
      bagging: new Set(["bagging", "bagging-line-1", "bagging-line-2"]),
      boosting: new Set(["boosting", "boosting-line-1"]),
    },
    baggingOrder: ["step1", "step2", "step3", "step4"],
    overfitDepthAcceptable: new Set([4, 5]),
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
  };

  function $(selector, root = document) {
    return root.querySelector(selector);
  }

  function $all(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function setResult(id, text, ok = null) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = text;
    el.style.color = ok === null ? "var(--muted)" : ok ? "var(--accent)" : "var(--danger, var(--accent-strong))";
  }

  function updateScoreboard() {
    const progressText = document.getElementById("progressText");
    const scoreText = document.getElementById("scoreText");
    if (progressText) progressText.textContent = `${state.completed.size} / 7`;
    if (scoreText) scoreText.textContent = String(state.score);
  }

  function markCompleted(key) {
    if (state.completed.has(key)) return;
    state.completed.add(key);
    state.score += 1;
    updateScoreboard();
  }

  // -------- Activity 1: Tree labeling --------

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
    setResult("result-tree-label", "Cleared.");
    state.completed.delete("tree-label");
    updateScoreboard();
  }

  function checkTreeLabels() {
    for (const [nodeId, expected] of Object.entries(correct.treeLabels)) {
      const got = state.nodeLabels.get(nodeId);
      if (got !== expected) {
        setResult("result-tree-label", `Not quite. Check ${nodeId.toUpperCase()} and try again.`, false);
        return;
      }
    }
    setResult("result-tree-label", "Correct.", true);
    markCompleted("tree-label");
  }

  // -------- Activity 2: Terms matching --------

  function setupMatchDnD() {
    let dragging = null;
    const root = document.getElementById("activity-terms-match");
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

  function checkTermsMatch() {
    const root = document.getElementById("activity-terms-match");
    if (!root) return;

    for (const [slotKey, expectedCardKey] of correct.termsMatch.entries()) {
      const slot = $(`.match-slot[data-slot="${slotKey}"]`, root);
      const card = slot ? $(".dnd-card", slot) : null;
      const got = card?.dataset.card;
      if (got !== expectedCardKey) {
        setResult("result-terms-match", "Not yet. Make sure each term matches its definition.", false);
        return;
      }
    }

    setResult("result-terms-match", "Correct — terminology matches the definitions.", true);
    markCompleted("terms-match");
  }

  // -------- Activity 3: MCQ --------

  function checkMcq() {
    const picked = new Set(
      $all('#activity-mcq input[name="algos"]:checked').map((i) => i.value),
    );

    if (picked.size === 0) {
      setResult("result-mcq", "Pick at least one option.", false);
      return;
    }

    const ok = setsEqual(picked, correct.mcqAlgorithms);
    if (ok) {
      setResult("result-mcq", "Correct — ID3, C4.5, and CART.", true);
      markCompleted("mcq");
      return;
    }

    setResult("result-mcq", "Not quite. Re-check the proven algorithms list.", false);
  }

  // -------- Activity 4: Fill in the blanks --------

  function normalizeAnswer(s) {
    return (s || "").trim().replace(/\s+/g, " ");
  }

  function checkFill() {
    const root = normalizeAnswer(document.getElementById("blankRoot")?.value);
    const leaf = normalizeAnswer(document.getElementById("blankLeaf")?.value);
    const pruning = normalizeAnswer(document.getElementById("blankPruning")?.value);

    const okRoot = root.toLowerCase() === correct.fill.blankRoot.toLowerCase();
    const okLeaf = leaf.toLowerCase() === correct.fill.blankLeaf.toLowerCase();
    const okPruning = pruning.toLowerCase() === correct.fill.blankPruning.toLowerCase();

    if (okRoot && okLeaf && okPruning) {
      setResult("result-fill", "Correct.", true);
      markCompleted("fill");
      return;
    }

    setResult("result-fill", "Not yet. Expected: Root node / Leaf nodes / Pruning.", false);
  }

  // -------- Activity 5: DnD Bagging vs Boosting --------

  function setupEnsembleDnD() {
    let dragging = null;

    const root = document.getElementById("activity-ensemble-sort");
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
        if (!list) return;
        list.appendChild(dragging);
      });
    });

    // allow dropping back to the bank
    const bank = $(".dnd-bank", root);
    bank?.addEventListener("dragover", (e) => e.preventDefault());
    bank?.addEventListener("drop", (e) => {
      e.preventDefault();
      if (!dragging) return;
      bank.appendChild(dragging);
    });
  }

  function getZoneCards(zoneKey) {
    const list = $(`.drop-list[data-list="${zoneKey}"]`);
    if (!list) return new Set();
    return new Set($all(".dnd-card", list).map((c) => c.dataset.card));
  }

  function checkEnsembleSort() {
    const baggingGot = getZoneCards("bagging");
    const boostingGot = getZoneCards("boosting");

    const baggingOk = setsEqual(baggingGot, correct.ensembleSort.bagging);
    const boostingOk = setsEqual(boostingGot, correct.ensembleSort.boosting);

    if (baggingOk && boostingOk) {
      setResult("result-ensemble-sort", "Nice — bagging vs boosting is correct.", true);
      markCompleted("ensemble-sort");
      return;
    }

    setResult(
      "result-ensemble-sort",
      "Not yet. Use the exact Bagging/Boosting sentences from the lesson.",
      false,
    );
  }

  function setsEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const v of a) {
      if (!b.has(v)) return false;
    }
    return true;
  }

  // -------- Activity 3: Order list --------

  function setupOrderDnD() {
    const list = document.getElementById("baggingOrder");
    if (!list) return;

    let dragging = null;

    list.addEventListener("dragstart", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (!target.classList.contains("order-item")) return;
      dragging = target;
      target.classList.add("is-dragging");
      e.dataTransfer?.setData("text/plain", target.dataset.step || "");
    });

    list.addEventListener("dragend", () => {
      if (dragging) dragging.classList.remove("is-dragging");
      dragging = null;
    });

    list.addEventListener("dragover", (e) => {
      e.preventDefault();
      if (!dragging) return;
      const after = getDragAfterElement(list, e.clientY);
      if (after == null) {
        list.appendChild(dragging);
      } else {
        list.insertBefore(dragging, after);
      }
    });
  }

  function getDragAfterElement(container, y) {
    const items = $all(".order-item:not(.is-dragging)", container);
    let closest = { offset: Number.NEGATIVE_INFINITY, element: null };

    for (const child of items) {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        closest = { offset, element: child };
      }
    }

    return closest.element;
  }

  function checkBaggingOrder() {
    const list = document.getElementById("baggingOrder");
    if (!list) return;
    const got = $all(".order-item", list).map((li) => li.dataset.step);

    const ok = got.length === correct.baggingOrder.length && got.every((v, i) => v === correct.baggingOrder[i]);

    if (ok) {
      setResult("result-bagging-order", "Correct — that’s the bagging pipeline.", true);
      markCompleted("bagging-order");
      return;
    }

    setResult(
      "result-bagging-order",
      "Not quite. Follow the Step 1 → Step 4 order from the lesson.",
      false,
    );
  }

  // -------- Activity 4: Overfitting slider --------

  function depthToAcc(depth) {
    // Hand-tuned curve: train goes up, test peaks around 4–5 then falls.
    const train = clamp(40 + depth * 6.5, 40, 98);
    const peak = 5;
    const testBase = 55 + Math.min(depth, peak) * 4.5;
    const penalty = depth > peak ? (depth - peak) * 5.5 : 0;
    const test = clamp(testBase - penalty, 35, 92);
    return { train: Math.round(train), test: Math.round(test) };
  }

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function updateDepthUI(depth) {
    const depthValue = document.getElementById("depthValue");
    if (depthValue) depthValue.textContent = String(depth);

    const { train, test } = depthToAcc(depth);
    const trainFill = document.getElementById("trainFill");
    const testFill = document.getElementById("testFill");
    const trainVal = document.getElementById("trainVal");
    const testVal = document.getElementById("testVal");

    if (trainFill) trainFill.style.width = `${train}%`;
    if (testFill) testFill.style.width = `${test}%`;
    if (trainVal) trainVal.textContent = `${train}%`;
    if (testVal) testVal.textContent = `${test}%`;
  }

  function lockDepthAnswer() {
    const slider = document.getElementById("depthSlider");
    if (!(slider instanceof HTMLInputElement)) return;
    const depth = Number(slider.value);
    state.lockedDepthAnswer = depth;

    if (correct.overfitDepthAcceptable.has(depth)) {
      setResult("result-overfit-slider", "Good pick — that depth balances generalization vs memorization.", true);
      markCompleted("overfit-slider");
      return;
    }

    setResult(
      "result-overfit-slider",
      "That depth likely overfits (or underfits). Try around where test accuracy peaks.",
      false,
    );
  }

  // -------- Reset --------

  function resetLesson() {
    state.completed.clear();
    state.score = 0;

    clearNodeLabels();
    state.completed.delete("tree-label");

    // Move ensemble DnD cards back to its bank
    const ensembleRoot = document.getElementById("activity-ensemble-sort");
    const ensembleBank = ensembleRoot ? $(".dnd-bank", ensembleRoot) : null;
    if (ensembleBank && ensembleRoot) {
      $all(".dnd-card", ensembleRoot).forEach((c) => ensembleBank.appendChild(c));
    }

    // Reset matching DnD
    const matchRoot = document.getElementById("activity-terms-match");
    const matchBank = matchRoot ? $(".dnd-bank", matchRoot) : null;
    if (matchBank && matchRoot) {
      $all(".dnd-card", matchRoot).forEach((c) => matchBank.appendChild(c));
      $all(".match-slot", matchRoot).forEach((slot) => (slot.textContent = ""));
    }

    // Reset MCQ
    $all('#activity-mcq input[name="algos"]').forEach((i) => {
      i.checked = false;
    });

    // Reset fill
    const blankRoot = document.getElementById("blankRoot");
    const blankLeaf = document.getElementById("blankLeaf");
    const blankPruning = document.getElementById("blankPruning");
    if (blankRoot) blankRoot.value = "";
    if (blankLeaf) blankLeaf.value = "";
    if (blankPruning) blankPruning.value = "";

    // Reset bagging order list
    const list = document.getElementById("baggingOrder");
    if (list) {
      const byKey = new Map($all(".order-item", list).map((li) => [li.dataset.step, li]));
      correct.baggingOrder.forEach((key) => {
        const item = byKey.get(key);
        if (item) list.appendChild(item);
      });
    }

    // Reset slider
    const slider = document.getElementById("depthSlider");
    if (slider instanceof HTMLInputElement) {
      slider.value = "4";
      updateDepthUI(4);
    }

    setResult("result-tree-label", "", null);
    setResult("result-terms-match", "", null);
    setResult("result-mcq", "", null);
    setResult("result-fill", "", null);
    setResult("result-ensemble-sort", "", null);
    setResult("result-bagging-order", "", null);
    setResult("result-overfit-slider", "", null);

    updateScoreboard();
  }

  // -------- Wiring --------

  function setActivePart(partKey) {
    state.activePart = partKey;

    $all("[data-part]").forEach((btn) => {
      btn.setAttribute("aria-current", btn.dataset.part === partKey ? "true" : "false");
    });

    $all("[data-part-panel]").forEach((panel) => {
      const isActive = panel.getAttribute("data-part-panel") === partKey;
      panel.toggleAttribute("hidden", !isActive);
    });

    const partTag = document.getElementById("partTag");
    const partTitle = document.getElementById("partTitle");
    const partLead = document.getElementById("partLead");

    if (partKey === "part-1") {
      if (partTag) partTag.textContent = "Lesson 6 — Part 1";
      if (partTitle) partTitle.textContent = "Decision Trees and Ensemble Learning Reviewer";
      if (partLead) {
        partLead.textContent =
          "Part 1 uses Lesson 6 text and drills it with interactive activities.";
      }
      return;
    }

    if (partKey === "part-2") {
      if (partTag) partTag.textContent = "Lesson 7 and 8 — Part 2";
      if (partTitle) partTitle.textContent = "Placeholder";
      if (partLead) partLead.textContent = "Placeholder page for now.";
      return;
    }

    if (partKey === "part-3") {
      if (partTag) partTag.textContent = "Lesson 9 and 10 — Part 3";
      if (partTitle) partTitle.textContent = "Placeholder";
      if (partLead) partLead.textContent = "Placeholder page for now.";
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    updateScoreboard();

    // Part selector
    const initialPart = (() => {
      const hash = (window.location.hash || "").replace("#", "").trim();
      if (hash === "part-1" || hash === "part-2" || hash === "part-3") return hash;
      return "part-1";
    })();

    setActivePart(initialPart);

    $all("[data-part]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.part;
        if (!key) return;
        setActivePart(key);
        try {
          window.location.hash = key;
        } catch {
          /* no-op */
        }
      });
    });

    // Tree
    setPickedLabel("root");

    $all(".chip[data-pick]").forEach((chip) => {
      chip.addEventListener("click", () => setPickedLabel(chip.dataset.pick));
    });

    $("#clearNodeLabels")?.addEventListener("click", clearNodeLabels);

    $all(".tree-node").forEach((node) => {
      node.addEventListener("click", () => {
        selectNode(node.dataset.node);
        applyLabelToSelectedNode();
      });
    });

    // DnD
    setupEnsembleDnD();
    setupMatchDnD();

    // Order
    setupOrderDnD();

    // Slider
    const slider = document.getElementById("depthSlider");
    if (slider instanceof HTMLInputElement) {
      slider.addEventListener("input", () => updateDepthUI(Number(slider.value)));
      updateDepthUI(Number(slider.value));
    }

    // Checks
    $all("[data-check]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-check");
        if (key === "tree-label") checkTreeLabels();
        if (key === "terms-match") checkTermsMatch();
        if (key === "mcq") checkMcq();
        if (key === "fill") checkFill();
        if (key === "ensemble-sort") checkEnsembleSort();
        if (key === "bagging-order") checkBaggingOrder();
        if (key === "overfit-slider") lockDepthAnswer();
      });
    });

    // Reset
    $("#resetLesson")?.addEventListener("click", resetLesson);
  });
})();
