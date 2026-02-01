(function () {
  const storageKey = "ck-theme";
  const themes = new Set(["dark", "light", "wood", "cyberpunk"]);
  const aliases = new Map([
    ["retro", "wood"],
  ]);
  const assetVersion = "v2";
  const root = document.documentElement;

  function bustStylesheets() {
    const cacheValue = (window.location.protocol === "file:" || window.location.hostname === "localhost")
      ? Date.now().toString()
      : assetVersion;

    document.querySelectorAll('link[rel="stylesheet"][data-cache-bust]').forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;
      try {
        const url = new URL(href, window.location.href);
  url.searchParams.set("v", cacheValue);
  link.setAttribute("href", url.href);
      } catch (err) {
        // Fallback for older browsers without URL support
        const separator = href.includes("?") ? "&" : "?";
        link.setAttribute("href", `${href}${separator}v=${cacheValue}`);
      }
    });
  }

  function applyTheme(theme) {
    const normalized = aliases.get(theme) || theme;
    const nextTheme = themes.has(normalized) ? normalized : "dark";
    root.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch (err) {
      /* no-op if storage unavailable */
    }
    const buttons = document.querySelectorAll("[data-theme-option]");
    buttons.forEach((btn) => {
      const targetTheme = aliases.get(btn.dataset.themeOption) || btn.dataset.themeOption;
      const isActive = targetTheme === nextTheme;
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

  const storedNormalized = aliases.get(stored) || stored;
  if (storedNormalized && themes.has(storedNormalized)) {
    root.setAttribute("data-theme", storedNormalized);
  }

  window.addEventListener("DOMContentLoaded", () => {
    bustStylesheets();
    const initial = root.getAttribute("data-theme") || stored || "dark";
    applyTheme(aliases.get(initial) || initial);
    document.querySelectorAll("[data-theme-option]").forEach((btn) => {
      btn.addEventListener("click", () => applyTheme(btn.dataset.themeOption));
      btn.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          applyTheme(btn.dataset.themeOption);
        }
      });
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", () => {
        const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.setAttribute("aria-expanded", !isExpanded);
        mobileMenu.classList.toggle("active");
        document.body.style.overflow = !isExpanded ? "hidden" : "";
      });

      // Close menu when clicking nav links
      mobileMenu.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.setAttribute("aria-expanded", "false");
          mobileMenu.classList.remove("active");
          document.body.style.overflow = "";
        });
      });
    }
  });
})();
