// Dark mode toggle functionality
(function() {
  const THEME_KEY = 'theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  // Get stored theme or detect system preference
  function getStoredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK;
    }
    return LIGHT;
  }

  // Apply theme to document
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateToggleIcon(theme);
  }

  // Update the toggle button icon
  function updateToggleIcon(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const icon = toggle.querySelector('i');
    if (!icon) return;

    if (theme === DARK) {
      icon.classList.remove('bi-moon-fill');
      icon.classList.add('bi-sun-fill');
    } else {
      icon.classList.remove('bi-sun-fill');
      icon.classList.add('bi-moon-fill');
    }
  }

  // Toggle between light and dark
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === DARK ? LIGHT : DARK;
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  // Initialize theme on page load
  function init() {
    const theme = getStoredTheme();
    applyTheme(theme);

    // Add click handler to toggle button
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', toggleTheme);
    }
  }

  // Apply theme immediately to prevent flash
  applyTheme(getStoredTheme());

  // Set up toggle button when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
