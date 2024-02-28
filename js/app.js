//mode switch

function toggleMode() {
    var dropdown = document.getElementById("modeDropdown");
    var selectedMode = dropdown.value;

    // Toggle dark mode class on body
    document.body.classList.toggle("dark-mode", selectedMode === "dark");
    document.nav.classList.toggle("dark-mode", selectedMode === "dark");
  }