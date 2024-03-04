/*function toggleMode() {
  var dropdown = document.getElementById("modeDropdown");
  var selectedMode = dropdown.value;

  document.body.classList.toggle("dark-mode", selectedMode === "dark");
  document.getElementsByClassName("navbar").classList.toggle("dark-mode", selectedMode === "dark");
  document.getElementsByClassName("footer").classList.toggle("dark-mode", selectedMode === "dark");
}*/

function toggleMode() {
  var dropdown = document.getElementById("modeDropdown");
  var selectedMode = dropdown.value;

  document.body.classList.toggle("dark-mode", selectedMode === "dark");
  
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("dark-mode", selectedMode === "dark");
  
  var footers = document.getElementsByClassName("footer");
  for (var j = 0; j < footers.length; j++) {
    footers[j].classList.toggle("dark-mode", selectedMode === "dark");
  }
}