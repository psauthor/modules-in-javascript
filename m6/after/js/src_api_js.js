"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbefore"] = self["webpackChunkbefore"] || []).push([["src_api_js"],{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFailedFilms\": () => (/* binding */ getFailedFilms),\n/* harmony export */   \"getPassedFilms\": () => (/* binding */ getPassedFilms)\n/* harmony export */ });\n// api.js\r\n// \"use strict\";\r\n\r\nasync function getPassedFilms() {\r\n  const res = await fetch(\"https://bechdel.azurewebsites.net/api/films/passed\");\r\n  return await res.json();\r\n}\r\n\r\nasync function getFailedFilms() {\r\n  const res = await fetch(\"https://bechdel.azurewebsites.net/api/films/failed\");\r\n  return await res.json();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://before/./src/api.js?");

/***/ })

}]);