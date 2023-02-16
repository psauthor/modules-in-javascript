// api.js
"use strict";

async function getPassedFilms() {
  const res = await fetch("https://bechdel.azurewebsites.net/api/films/passed");
  return await res.json();
}

async function getFailedFilms() {
  const res = await fetch("https://bechdel.azurewebsites.net/api/films/failed");
  return await res.json();
}

