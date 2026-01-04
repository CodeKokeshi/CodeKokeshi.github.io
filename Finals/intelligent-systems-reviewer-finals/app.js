(() => {
  const state = {
    completed: new Set(),
    score: 0,
    selectedNodeId: null,
    selectedLabel: null,
    nodeLabels: new Map(),
    lockedDepthAnswer: null,
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
      bagging: new Set(["bagging", "parallel", "voting"]),
      boosting: new Set(["boosting", "sequential", "focus-errors"]),
    },
    baggingOrder: ["subsets", "train", "independent", "combine"],
    overfitDepthAcceptable: new Set([4, 5]),
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
    if (progressText) progressText.textContent = `${state.completed.size} / 4`;
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
    setResult("result-tree-label", "Perfect — you identified Root/Internal/Leaf correctly.", true);
    markCompleted("tree-label");
  }

  // -------- Activity 2: DnD Bagging vs Boosting --------

  function setupDnD() {
    let dragging = null;

    $all(".dnd-card").forEach((card) => {
      card.addEventListener("dragstart", (e) => {
        dragging = card;
        e.dataTransfer?.setData("text/plain", card.dataset.card || "");
        e.dataTransfer?.setDragImage(card, 10, 10);
      });

      card.addEventListener("dragend", () => {
        dragging = null;
        $all(".drop-zone").forEach((z) => z.classList.remove("is-over"));
      });
    });

    $all(".drop-zone").forEach((zone) => {
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
    const bank = $(".dnd-bank");
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
      "Not yet. Tip: bagging = parallel + voting/averaging; boosting = sequential + focuses on errors.",
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
      "Not quite. Remember: bootstrapped subsets → train models → learn independently → combine predictions.",
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

    // Move DnD cards back to bank
    const bank = $(".dnd-bank");
    if (bank) {
      $all(".dnd-card").forEach((c) => bank.appendChild(c));
    }

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
    setResult("result-ensemble-sort", "", null);
    setResult("result-bagging-order", "", null);
    setResult("result-overfit-slider", "", null);

    updateScoreboard();
  }

  // -------- Wiring --------

  window.addEventListener("DOMContentLoaded", () => {
    updateScoreboard();

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
    setupDnD();

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
        if (key === "ensemble-sort") checkEnsembleSort();
        if (key === "bagging-order") checkBaggingOrder();
        if (key === "overfit-slider") lockDepthAnswer();
      });
    });

    // Reset
    $("#resetLesson")?.addEventListener("click", resetLesson);
  });
})();
