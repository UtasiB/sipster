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

  var selects = document.getElementsByName("select");

  var span = document.getElementsByName("span");

  var card = document.getElementsByClassName("card");

  var cardbody = document.getElementsByClassName("card-body");

  var cimDiv = document.getElementsByClassName("cimDiv");

  var adagButton = document.getElementsByClassName("adagButton");

  var btn = document.getElementsByClassName("btn");

  var btn = document.getElementsByClassName("btn");
  
  var btn = document.getElementsByClassName("btn");

  for (var k = 0; k < selects.length; k++) {
    selects[k].classList.toggle("dark-mode", selectedMode === "dark");
  }

  for (var j = 0; j < footers.length; j++) {
    footers[j].classList.toggle("dark-mode", selectedMode === "dark");
  }

  var links = document.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    links[i].classList.toggle("dark-mode-link", selectedMode === "dark");
  }
}
