const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");
const clicker = document.querySelector("#clicker");

factButton.addEventListener("click", function () {
  bio.textContent = "Ta treść została zmieniona przez JavaScript.";
  factButton.textContent = "Gotowe!";
});

click = 0;
clicker.addEventListener("click", function () {
    clicker.textContent = (`Klik ${click}`);
    click++;
});