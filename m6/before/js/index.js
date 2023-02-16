// index.js
"use strict";

const loadButton = document.getElementById("loadButton");
const busyMsg = document.getElementById("busyMsg");
const results = document.getElementById("results");

loadButton.addEventListener("click", async () => {
  busyMsg.classList.remove("hidden");
  const data = await getPassedFilms();
  createGrid(data);
  busyMsg.classList.add("hidden");
});

function createGrid(data) {
  let html = "";
  data.results.forEach((item) => {
    html += generateFilm(item);
  });

  results.innerHTML = html;
}
