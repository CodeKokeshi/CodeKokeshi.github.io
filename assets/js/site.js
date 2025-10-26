(function () {
  const storageKey = "ck-theme";
  const themes = new Set(["dark", "light", "retro", "cyberpunk"]);
  const root = document.documentElement;

  function applyTheme(theme) {
    const nextTheme = themes.has(theme) ? theme : "dark";
    root.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch (err) {
      /* no-op if storage unavailable */
    }
    const buttons = document.querySelectorAll("[data-theme-option]");
    buttons.forEach((btn) => {
      const isActive = btn.dataset.themeOption === nextTheme;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
    syncThemeColor();
  }

  function syncThemeColor() {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    const styles = getComputedStyle(root);
    meta.setAttribute("content", styles.getPropertyValue("--bg"));
  }

  const stored = (() => {
    try {
      return localStorage.getItem(storageKey);
    } catch (err) {
      return null;
    }
  })();

  if (stored && themes.has(stored)) {
    root.setAttribute("data-theme", stored);
  }

  window.addEventListener("DOMContentLoaded", () => {
    applyTheme(root.getAttribute("data-theme") || stored || "dark");
    document.querySelectorAll("[data-theme-option]").forEach((btn) => {
      btn.addEventListener("click", () => applyTheme(btn.dataset.themeOption));
      btn.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          applyTheme(btn.dataset.themeOption);
        }
      });
    });
  });
})();
