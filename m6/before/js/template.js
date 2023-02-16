// template.js
"use strict";

function generateFilm(film) {
  return `
    <div class="flex rounded-lg  bg-white hover:bg-gray-200 h-60">
      <div class="flex-none w-40 relative">
      <img src="${film.posterUrl}" alt="${film.title}" class="inset-0 absolute w-full object-cover h-full rounded-l" />
      </div>
      <div class="p-1 overflow-clip">
        <div class="text-lg font-bold">${film.title} (${film.year})</div>
        <div><strong>IMDB Rating</strong>: <a href="https://imdb.com/title/${film.imdbId}/" class="text-amber-700 hover:text-amber-500" target="_blank">${film.rating}</a></div>
        <div class="text-sm">${film.overview}</div>

      </div>
    </div>
    `;
}
