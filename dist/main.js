/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_eukaryotic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/eukaryotic */ \"./src/scripts/eukaryotic.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const cell1 = document.getElementById(\"cell1\");\n  // debugger;\n\n  new _scripts_eukaryotic__WEBPACK_IMPORTED_MODULE_0__[\"default\"](cell1);\n  console.log(\"hello world\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFDNkM7QUFDN0NDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUVoRCxNQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUM5Qzs7RUFFQSxJQUFJSiwyREFBVSxDQUFDRyxLQUFLLENBQUM7RUFDckJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztBQUM5QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZWxsLWV4cGxvcmVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRXVrYXJ5b3RpYyBmcm9tIFwiLi9zY3JpcHRzL2V1a2FyeW90aWNcIlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgY29uc3QgY2VsbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbGwxXCIpO1xuICAgIC8vIGRlYnVnZ2VyO1xuICAgXG4gICAgbmV3IEV1a2FyeW90aWMoY2VsbDEpXG4gICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKTtcbn0pOyJdLCJuYW1lcyI6WyJFdWthcnlvdGljIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2VsbDEiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/eukaryotic.js":
/*!***********************************!*\
  !*** ./src/scripts/eukaryotic.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Eukaryotic {\n  constructor(cell1) {\n    this.cell1 = cell1;\n    this.handleNucleusHover = this.handleNucleusHover.bind(this);\n  }\n  setupNucleus() {\n    let nucleus = document.createElement(\"nucleus\");\n    nucleus.addEventListener(\"mouseover\", this.handleNucleusHover);\n    this.cell1.appendChild(nucleus);\n  }\n  handleNucleusHover(e) {\n    e.stopPropagration();\n    let ele = e.taget;\n    ele.classlist.toggle('nucleusHover');\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Eukaryotic);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ldWthcnlvdGljLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxVQUFVLENBQUM7RUFDYkMsV0FBV0EsQ0FBQ0MsS0FBSyxFQUFDO0lBQ2QsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBRyxJQUFJLENBQUNBLGtCQUFrQixDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ2hFO0VBQ0FDLFlBQVlBLENBQUEsRUFBRTtJQUNWLElBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQy9DRixPQUFPLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUNOLGtCQUFrQixDQUFDO0lBQzlELElBQUksQ0FBQ0QsS0FBSyxDQUFDUSxXQUFXLENBQUNKLE9BQU8sQ0FBQztFQUNuQztFQUNBSCxrQkFBa0JBLENBQUNRLENBQUMsRUFBQztJQUNqQkEsQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BCLElBQUlDLEdBQUcsR0FBR0YsQ0FBQyxDQUFDRyxLQUFLO0lBQ2pCRCxHQUFHLENBQUNFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBQztFQUN4QztBQUNKO0FBQ0EsK0RBQWVoQixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2VsbC1leHBsb3Jlci8uL3NyYy9zY3JpcHRzL2V1a2FyeW90aWMuanM/Zjg2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdWthcnlvdGljIHtcbiAgICBjb25zdHJ1Y3RvcihjZWxsMSl7XG4gICAgICAgIHRoaXMuY2VsbDEgPSBjZWxsMVxuICAgICAgICB0aGlzLmhhbmRsZU51Y2xldXNIb3ZlciA9IHRoaXMuaGFuZGxlTnVjbGV1c0hvdmVyLmJpbmQodGhpcylcbiAgICB9XG4gICAgc2V0dXBOdWNsZXVzKCl7XG4gICAgICAgIGxldCBudWNsZXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm51Y2xldXNcIilcbiAgICAgICAgbnVjbGV1cy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMuaGFuZGxlTnVjbGV1c0hvdmVyKVxuICAgICAgICB0aGlzLmNlbGwxLmFwcGVuZENoaWxkKG51Y2xldXMpXG4gICAgfVxuICAgIGhhbmRsZU51Y2xldXNIb3ZlcihlKXtcbiAgICAgICAgZS5zdG9wUHJvcGFncmF0aW9uKClcbiAgICAgICAgbGV0IGVsZSA9IGUudGFnZXQgXG4gICAgICAgIGVsZS5jbGFzc2xpc3QudG9nZ2xlKCdudWNsZXVzSG92ZXInKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEV1a2FyeW90aWM7Il0sIm5hbWVzIjpbIkV1a2FyeW90aWMiLCJjb25zdHJ1Y3RvciIsImNlbGwxIiwiaGFuZGxlTnVjbGV1c0hvdmVyIiwiYmluZCIsInNldHVwTnVjbGV1cyIsIm51Y2xldXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kQ2hpbGQiLCJlIiwic3RvcFByb3BhZ3JhdGlvbiIsImVsZSIsInRhZ2V0IiwiY2xhc3NsaXN0IiwidG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/eukaryotic.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZWxsLWV4cGxvcmVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;