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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_human__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/human */ \"./src/scripts/human.js\");\n\n// import Mitochondria from \"./scripts/mitochondria\"\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"cell1\");\n  const ctx = canvas.getContext(\"2d\");\n  const canvas1 = document.getElementById(\"cell2\");\n  const ctx1 = canvas1.getContext(\"2d\");\n\n  // ctx.beginPath()\n  // ctx.arc(225, 275, 200, 0, 2 * Math.PI)\n\n  // ctx.fillStyle = \"rgb(226,241,250)\";\n  // ctx.fill();\n  // ctx.strokeStyle = \"rgb(244,180,111)\"; \n  // ctx.lineWidth = 7;\n  // ctx.stroke();\n\n  ctx1.beginPath();\n  ctx1.arc(225, 280 - 200 / 2, 200 / 2, Math.PI, 0);\n  ctx1.arc(225, 280 + 200 / 2, 200 / 2, 0, Math.PI);\n  ctx1.fillRect(225 - 200 / 2, 280 - 200 / 2, 200, 200);\n  ctx1.fillRect(225 + 100, 275 - 80 / 2, 30, 80);\n  ctx1.strokeStyle = \"green\";\n  ctx1.lineWidth = 7;\n  ctx1.closePath();\n  ctx1.fillStyle = \"rgb(236,227,255)\";\n  ctx1.fill();\n  ctx1.stroke();\n  const human = new _scripts_human__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  human.animate();\n});\n// document.addEventListener(\"DOMContentLoaded\", () => {\n\n//     const cell1 = document.getElementById(\"cell1\");\n//     // debugger;\n\n//     new Eukaryotic(cell1)\n//     console.log(\"hello world\");\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBbUM7QUFDbkM7O0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUMvQyxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUNuQyxNQUFNQyxPQUFPLEdBQUlOLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUNqRCxNQUFNSSxJQUFJLEdBQUdELE9BQU8sQ0FBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQzs7RUFHckM7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUdBRSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0VBRWhCRCxJQUFJLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRUMsSUFBSSxDQUFDQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBRWpESixJQUFJLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsRUFBRSxDQUFDO0VBRWpESixJQUFJLENBQUNLLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUMsR0FBRyxDQUFDO0VBRXBETCxJQUFJLENBQUNLLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFOUNMLElBQUksQ0FBQ00sV0FBVyxHQUFHLE9BQU87RUFDMUJOLElBQUksQ0FBQ08sU0FBUyxHQUFHLENBQUM7RUFFbEJQLElBQUksQ0FBQ1EsU0FBUyxDQUFDLENBQUM7RUFDaEJSLElBQUksQ0FBQ1MsU0FBUyxHQUFHLGtCQUFrQjtFQUVuQ1QsSUFBSSxDQUFDVSxJQUFJLENBQUMsQ0FBQztFQUNYVixJQUFJLENBQUNXLE1BQU0sQ0FBQyxDQUFDO0VBRWQsTUFBTUMsS0FBSyxHQUFHLElBQUlwQixzREFBSyxDQUFDSyxHQUFHLENBQUM7RUFDNUJlLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZWxsLWV4cGxvcmVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEh1bWFuIGZyb20gXCIuL3NjcmlwdHMvaHVtYW5cIlxuLy8gaW1wb3J0IE1pdG9jaG9uZHJpYSBmcm9tIFwiLi9zY3JpcHRzL21pdG9jaG9uZHJpYVwiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbGwxXCIpXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuICAgIGNvbnN0IGNhbnZhczEgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsMlwiKVxuICAgIGNvbnN0IGN0eDEgPSBjYW52YXMxLmdldENvbnRleHQoXCIyZFwiKVxuICAgIFxuXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpXG4gICAgLy8gY3R4LmFyYygyMjUsIDI3NSwgMjAwLCAwLCAyICogTWF0aC5QSSlcblxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcInJnYigyMjYsMjQxLDI1MClcIjtcbiAgICAvLyBjdHguZmlsbCgpO1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiKDI0NCwxODAsMTExKVwiOyBcbiAgICAvLyBjdHgubGluZVdpZHRoID0gNztcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG5cbiAgIFxuICAgIGN0eDEuYmVnaW5QYXRoKCk7XG4gICAgXG4gICAgY3R4MS5hcmMoMjI1LCAyODAgLSAyMDAgLyAyLCAyMDAgLyAyLCBNYXRoLlBJLCAwKTtcbiAgIFxuICAgIGN0eDEuYXJjKDIyNSwgMjgwICsgMjAwIC8gMiwgMjAwIC8gMiwgMCwgTWF0aC5QSSk7XG4gICAgXG4gICAgY3R4MS5maWxsUmVjdCgyMjUgLSAyMDAgLyAyLCAyODAgLSAyMDAgLyAyLCAyMDAsMjAwKTtcblxuICAgIGN0eDEuZmlsbFJlY3QoMjI1ICsgMTAwLCAyNzUgLSA4MCAvIDIsIDMwLCA4MCk7XG4gIFxuICAgIGN0eDEuc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgY3R4MS5saW5lV2lkdGggPSA3O1xuXG4gICAgY3R4MS5jbG9zZVBhdGgoKTtcbiAgICBjdHgxLmZpbGxTdHlsZSA9IFwicmdiKDIzNiwyMjcsMjU1KVwiO1xuXG4gICAgY3R4MS5maWxsKCk7XG4gICAgY3R4MS5zdHJva2UoKTtcblxuICAgY29uc3QgaHVtYW4gPSBuZXcgSHVtYW4oY3R4KVxuICAgaHVtYW4uYW5pbWF0ZSgpXG59KVxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4vLyAgICAgY29uc3QgY2VsbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbGwxXCIpO1xuLy8gICAgIC8vIGRlYnVnZ2VyO1xuICAgXG4vLyAgICAgbmV3IEV1a2FyeW90aWMoY2VsbDEpXG4vLyAgICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKTtcbi8vIH0pOyJdLCJuYW1lcyI6WyJIdW1hbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhczEiLCJjdHgxIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJzdHJva2UiLCJodW1hbiIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/eukaryotic.js":
/*!***********************************!*\
  !*** ./src/scripts/eukaryotic.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Eukaryotic {\n  constructor(ctx) {\n    // nucleus,rough_endoplasmic_reticulum,smooth_endoplasmic_reticulum,cytoplasm,golgi){\n    this.ctx = ctx;\n    this.canvas = this.ctx.canvas;\n    this.x = 225;\n    this.y = 275;\n    this.updatex = 1;\n    this.updatey = 1;\n    // this.animate = this.animate.bind(this)\n    // this.nucleus = nucleus \n    // this.rough_endoplasmic_reticulum = rough_endoplasmic_reticulum \n    // this.smooth_endoplasmic_reticulum = smooth_endoplasmic_reticulum \n    // this.cytoplasm = cytoplasm \n    // this.golgi = golgi \n  }\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.x, this.y, 200, 0, 2 * Math.PI);\n    this.ctx.fillStyle = \"rgb(226,241,250)\";\n    this.ctx.fill();\n    this.ctx.strokeStyle = \"rgb(244,180,111)\";\n    this.ctx.lineWidth = 7;\n    this.ctx.stroke();\n\n    // transfer reequeas animation frmMEMEi to index.js\n    // \n  }\n\n  // update(){\n  //     if(this.x < this.ctx.width && this.y < this.ctx.height){\n  //         this.x = this.x + this.updatex \n  //         this.y = this.y + this.updatey\n  //     }else{\n  //         this.x = this.x - this.updatex \n  //         this.y = this.y - this.updatey\n  //     }\n  // }\n\n  animate() {\n    // this.update()\n    this.draw();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Eukaryotic);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ldWthcnlvdGljLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxVQUFVLENBQUM7RUFDYkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1o7SUFDQSxJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0QsR0FBRyxDQUFDQyxNQUFNO0lBQzdCLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEdBQUc7SUFDWixJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUNoQixJQUFJLENBQUNDLE9BQU8sR0FBRyxDQUFDO0lBQ2hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNKO0VBQ0FDLElBQUlBLENBQUEsRUFBRztJQUNKLElBQUksQ0FBQ04sR0FBRyxDQUFDTyxTQUFTLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNQLEdBQUcsQ0FBQ1EsR0FBRyxDQUFDLElBQUksQ0FBQ04sQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHTSxJQUFJLENBQUNDLEVBQUUsQ0FBQztJQUVqRCxJQUFJLENBQUNWLEdBQUcsQ0FBQ1csU0FBUyxHQUFHLGtCQUFrQjtJQUN2QyxJQUFJLENBQUNYLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDLENBQUM7SUFDZixJQUFJLENBQUNaLEdBQUcsQ0FBQ2EsV0FBVyxHQUFHLGtCQUFrQjtJQUN6QyxJQUFJLENBQUNiLEdBQUcsQ0FBQ2MsU0FBUyxHQUFHLENBQUM7SUFDdEIsSUFBSSxDQUFDZCxHQUFHLENBQUNlLE1BQU0sQ0FBQyxDQUFDOztJQUVoQjtJQUNBO0VBQ0o7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBQyxPQUFPQSxDQUFBLEVBQUU7SUFDTDtJQUNBLElBQUksQ0FBQ1YsSUFBSSxDQUFDLENBQUM7RUFDZjtBQUNKO0FBQ0EsK0RBQWVSLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZWxsLWV4cGxvcmVyLy4vc3JjL3NjcmlwdHMvZXVrYXJ5b3RpYy5qcz9mODZlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV1a2FyeW90aWMge1xuICAgIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgICAgIC8vIG51Y2xldXMscm91Z2hfZW5kb3BsYXNtaWNfcmV0aWN1bHVtLHNtb290aF9lbmRvcGxhc21pY19yZXRpY3VsdW0sY3l0b3BsYXNtLGdvbGdpKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmN0eC5jYW52YXNcbiAgICAgICAgdGhpcy54ID0gMjI1O1xuICAgICAgICB0aGlzLnkgPSAyNzVcbiAgICAgICAgdGhpcy51cGRhdGV4ID0gMSBcbiAgICAgICAgdGhpcy51cGRhdGV5ID0gMVxuICAgICAgICAvLyB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKVxuICAgICAgICAvLyB0aGlzLm51Y2xldXMgPSBudWNsZXVzIFxuICAgICAgICAvLyB0aGlzLnJvdWdoX2VuZG9wbGFzbWljX3JldGljdWx1bSA9IHJvdWdoX2VuZG9wbGFzbWljX3JldGljdWx1bSBcbiAgICAgICAgLy8gdGhpcy5zbW9vdGhfZW5kb3BsYXNtaWNfcmV0aWN1bHVtID0gc21vb3RoX2VuZG9wbGFzbWljX3JldGljdWx1bSBcbiAgICAgICAgLy8gdGhpcy5jeXRvcGxhc20gPSBjeXRvcGxhc20gXG4gICAgICAgIC8vIHRoaXMuZ29sZ2kgPSBnb2xnaSBcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxuICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMjAwLCAwLCAyICogTWF0aC5QSSlcbiAgICBcbiAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYigyMjYsMjQxLDI1MClcIjtcbiAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcInJnYigyNDQsMTgwLDExMSlcIjsgXG4gICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gNztcbiAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICBcbiAgICAgICAgLy8gdHJhbnNmZXIgcmVlcXVlYXMgYW5pbWF0aW9uIGZybU1FTUVpIHRvIGluZGV4LmpzXG4gICAgICAgIC8vIFxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSgpe1xuICAgIC8vICAgICBpZih0aGlzLnggPCB0aGlzLmN0eC53aWR0aCAmJiB0aGlzLnkgPCB0aGlzLmN0eC5oZWlnaHQpe1xuICAgIC8vICAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy51cGRhdGV4IFxuICAgIC8vICAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy51cGRhdGV5XG4gICAgLy8gICAgIH1lbHNle1xuICAgIC8vICAgICAgICAgdGhpcy54ID0gdGhpcy54IC0gdGhpcy51cGRhdGV4IFxuICAgIC8vICAgICAgICAgdGhpcy55ID0gdGhpcy55IC0gdGhpcy51cGRhdGV5XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBhbmltYXRlKCl7XG4gICAgICAgIC8vIHRoaXMudXBkYXRlKClcbiAgICAgICAgdGhpcy5kcmF3KClcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBFdWthcnlvdGljOyJdLCJuYW1lcyI6WyJFdWthcnlvdGljIiwiY29uc3RydWN0b3IiLCJjdHgiLCJjYW52YXMiLCJ4IiwieSIsInVwZGF0ZXgiLCJ1cGRhdGV5IiwiZHJhdyIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/eukaryotic.js\n");

/***/ }),

/***/ "./src/scripts/human.js":
/*!******************************!*\
  !*** ./src/scripts/human.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eukaryotic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eukaryotic */ \"./src/scripts/eukaryotic.js\");\n/* harmony import */ var _mitochondria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mitochondria */ \"./src/scripts/mitochondria.js\");\n/* harmony import */ var _nucleus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nucleus */ \"./src/scripts/nucleus.js\");\n/* harmony import */ var _rougher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rougher */ \"./src/scripts/rougher.js\");\n\n\n\n\nclass Human {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.canvas = this.ctx.canvas;\n    this.width = this.canvas.width;\n    this.height = this.canvas.height;\n    this.eukaryotic = new _eukaryotic__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx);\n    this.mitochondria = new _mitochondria__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n    this.nucleus = new _nucleus__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx);\n    this.roughER = new _rougher__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.ctx);\n    this.roughER.setImageSource('RoughER.png');\n    this.mitochondria.setImageSource('mitochondria.png');\n    this.nucleus.setImageSource('nucleus.png');\n    this.organelles = [this.eukaryotic, this.mitochondria, this.nucleus, this.roughER];\n    // , this.mitochondria]\n  }\n  animate() {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.organelles.forEach(org => org.animate(this.ctx));\n    requestAnimationFrame(() => this.animate());\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Human);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9odW1hbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzQztBQUNJO0FBQ1Y7QUFDRDtBQUMvQixNQUFNSSxLQUFLO0VBQ1BDLFdBQVdBLENBQUNDLEdBQUcsRUFBQztJQUNaLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDRCxHQUFHLENBQUNDLE1BQU07SUFDN0IsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDRCxNQUFNLENBQUNDLEtBQUs7SUFDOUIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDRixNQUFNLENBQUNFLE1BQU07SUFDaEMsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSVYsbURBQVUsQ0FBQyxJQUFJLENBQUNNLEdBQUcsQ0FBQztJQUMxQyxJQUFJLENBQUNLLFlBQVksR0FBRyxJQUFJVixxREFBWSxDQUFDLElBQUksQ0FBQ0ssR0FBRyxDQUFDO0lBQzlDLElBQUksQ0FBQ00sT0FBTyxHQUFHLElBQUlWLGdEQUFPLENBQUMsSUFBSSxDQUFDSSxHQUFHLENBQUM7SUFDcEMsSUFBSSxDQUFDTyxPQUFPLEdBQUcsSUFBSVYsZ0RBQU8sQ0FBQyxJQUFJLENBQUNHLEdBQUcsQ0FBQztJQUNwQyxJQUFJLENBQUNPLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUMxQyxJQUFJLENBQUNILFlBQVksQ0FBQ0csY0FBYyxDQUFDLGtCQUFrQixDQUFDO0lBQ3BELElBQUksQ0FBQ0YsT0FBTyxDQUFDRSxjQUFjLENBQUMsYUFBYSxDQUFDO0lBQzFDLElBQUksQ0FBQ0MsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDQyxZQUFZLEVBQUUsSUFBSSxDQUFDQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxPQUFPLENBQUM7SUFDOUU7RUFDUjtFQUVBRyxPQUFPQSxDQUFBLEVBQUU7SUFDTCxJQUFJLENBQUNWLEdBQUcsQ0FBQ1csU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDVixNQUFNLENBQUNDLEtBQUssRUFBRSxJQUFJLENBQUNELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDO0lBQy9ELElBQUksQ0FBQ00sVUFBVSxDQUFDRyxPQUFPLENBQUNDLEdBQUcsSUFBSUEsR0FBRyxDQUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDVixHQUFHLENBQUMsQ0FBQztJQUNyRGMscUJBQXFCLENBQUUsTUFBTSxJQUFJLENBQUNKLE9BQU8sQ0FBQyxDQUFFLENBQUM7RUFDakQ7QUFFSjtBQUNBLCtEQUFlWixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2VsbC1leHBsb3Jlci8uL3NyYy9zY3JpcHRzL2h1bWFuLmpzPzVjMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV1a2FyeW90aWMgZnJvbSBcIi4vZXVrYXJ5b3RpY1wiO1xuaW1wb3J0IE1pdG9jaG9uZHJpYSBmcm9tIFwiLi9taXRvY2hvbmRyaWFcIjtcbmltcG9ydCBOdWNsZXVzIGZyb20gXCIuL251Y2xldXNcIjtcbmltcG9ydCBSb3VnaGVyIGZyb20gXCIuL3JvdWdoZXJcIlxuY2xhc3MgSHVtYW57XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHggXG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5jdHguY2FudmFzXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuZXVrYXJ5b3RpYyA9IG5ldyBFdWthcnlvdGljKHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5taXRvY2hvbmRyaWEgPSBuZXcgTWl0b2Nob25kcmlhKHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5udWNsZXVzID0gbmV3IE51Y2xldXModGhpcy5jdHgpXG4gICAgICAgIHRoaXMucm91Z2hFUiA9IG5ldyBSb3VnaGVyKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnJvdWdoRVIuc2V0SW1hZ2VTb3VyY2UoJ1JvdWdoRVIucG5nJylcbiAgICAgICAgdGhpcy5taXRvY2hvbmRyaWEuc2V0SW1hZ2VTb3VyY2UoJ21pdG9jaG9uZHJpYS5wbmcnKVxuICAgICAgICB0aGlzLm51Y2xldXMuc2V0SW1hZ2VTb3VyY2UoJ251Y2xldXMucG5nJylcbiAgICAgICAgdGhpcy5vcmdhbmVsbGVzID0gW3RoaXMuZXVrYXJ5b3RpYywgdGhpcy5taXRvY2hvbmRyaWEsIHRoaXMubnVjbGV1cywgdGhpcy5yb3VnaEVSXVxuICAgICAgICAgICAgLy8gLCB0aGlzLm1pdG9jaG9uZHJpYV1cbiAgICB9XG5cbiAgICBhbmltYXRlKCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5vcmdhbmVsbGVzLmZvckVhY2gob3JnID0+IG9yZy5hbmltYXRlKHRoaXMuY3R4KSlcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgoKSA9PiB0aGlzLmFuaW1hdGUoKSkpXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBIdW1hbjsiXSwibmFtZXMiOlsiRXVrYXJ5b3RpYyIsIk1pdG9jaG9uZHJpYSIsIk51Y2xldXMiLCJSb3VnaGVyIiwiSHVtYW4iLCJjb25zdHJ1Y3RvciIsImN0eCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiZXVrYXJ5b3RpYyIsIm1pdG9jaG9uZHJpYSIsIm51Y2xldXMiLCJyb3VnaEVSIiwic2V0SW1hZ2VTb3VyY2UiLCJvcmdhbmVsbGVzIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImZvckVhY2giLCJvcmciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/human.js\n");

/***/ }),

/***/ "./src/scripts/mitochondria.js":
/*!*************************************!*\
  !*** ./src/scripts/mitochondria.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Mitochondria {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.image = new Image();\n    this.image.onload = this.draw.bind(this);\n    this.x = 120;\n    this.y = 120;\n    this.speed = .1;\n    this.direction = 1;\n  }\n  setImageSource(imageSource) {\n    this.image.src = imageSource;\n  }\n  draw() {\n    this.ctx.drawImage(this.image, this.x, this.y, 60, 60);\n  }\n  update() {\n    this.x = this.x + this.speed * this.direction;\n    this.y = this.y + this.speed * this.direction;\n    if (this.x + 1 >= 125 || this.x <= 120 && this.y + 1 >= 125 || this.y <= 120) {\n      this.direction *= -1;\n    }\n  }\n  animate() {\n    this.draw();\n    this.update();\n  }\n}\n\n// handleMouseMove(e) {\n//     const x = e.clientX;\n//     const y = e.clientY;\n//     if (x >= this.positionX && x <= this.positionX + 100 && y >= this.positionY && y <= this.positionY + 100) {\n//         this.show();\n//     } else {\n//         this.hide();\n//     }\n// }\n\n// handleMouseOut() {\n//     this.hide();\n// }\n\n// show() {\n//     this.modal.style.display = 'block';\n// }\n\n// hide() {\n//     this.modal.style.display = 'none';\n// }\n\n// close() {\n//     this.hide();\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mitochondria);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9taXRvY2hvbmRyaWEuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFlBQVksQ0FBQztFQUNmQyxXQUFXQSxDQUFDQyxHQUFHLEVBQUU7SUFFYixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUVkLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxNQUFNLEdBQUcsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFHeEMsSUFBSSxDQUFDQyxDQUFDLEdBQUcsR0FBRztJQUNaLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEdBQUc7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUcsQ0FBQztFQUV0QjtFQUNBQyxjQUFjQSxDQUFDQyxXQUFXLEVBQUM7SUFDdkIsSUFBSSxDQUFDVixLQUFLLENBQUNXLEdBQUcsR0FBR0QsV0FBVztFQUNoQztFQUVBUCxJQUFJQSxDQUFBLEVBQUc7SUFDSCxJQUFJLENBQUNKLEdBQUcsQ0FBQ2EsU0FBUyxDQUFDLElBQUksQ0FBQ1osS0FBSyxFQUFDLElBQUksQ0FBQ0ssQ0FBQyxFQUFDLElBQUksQ0FBQ0MsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7RUFDdEQ7RUFFQU8sTUFBTUEsQ0FBQSxFQUFFO0lBQ0EsSUFBSSxDQUFDUixDQUFDLEdBQUcsSUFBSSxDQUFDQSxDQUFDLEdBQUcsSUFBSSxDQUFDRSxLQUFLLEdBQUcsSUFBSSxDQUFDQyxTQUFTO0lBQzdDLElBQUksQ0FBQ0YsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQ0MsU0FBUztJQUM3QyxJQUFJLElBQUksQ0FBQ0gsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDQSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDQSxDQUFDLElBQUksR0FBRyxFQUFFO01BQzFFLElBQUksQ0FBQ0UsU0FBUyxJQUFJLENBQUMsQ0FBQztJQUN4QjtFQUNKO0VBRUpNLE9BQU9BLENBQUEsRUFBRTtJQUNILElBQUksQ0FBQ1gsSUFBSSxDQUFDLENBQUM7SUFDWCxJQUFJLENBQUNVLE1BQU0sQ0FBQyxDQUFDO0VBQ25CO0FBRUo7O0FBR0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFHSiwrREFBZWhCLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZWxsLWV4cGxvcmVyLy4vc3JjL3NjcmlwdHMvbWl0b2Nob25kcmlhLmpzPzAyYzciXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWl0b2Nob25kcmlhIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICBcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpXG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMueCA9IDEyMDtcbiAgICAgICAgdGhpcy55ID0gMTIwO1xuICAgICAgICB0aGlzLnNwZWVkID0gLjE7IFxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgIFxuICAgIH1cbiAgICBzZXRJbWFnZVNvdXJjZShpbWFnZVNvdXJjZSl7XG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gaW1hZ2VTb3VyY2VcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLngsdGhpcy55LDYwLDYwKVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5zcGVlZCAqIHRoaXMuZGlyZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5zcGVlZCAqIHRoaXMuZGlyZWN0aW9uO1xuICAgICAgICAgICAgaWYgKHRoaXMueCArIDEgPj0gMTI1IHx8IHRoaXMueCA8PSAxMjAgJiYgdGhpcy55ICsgMSA+PSAxMjUgfHwgdGhpcy55IDw9IDEyMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uICo9IC0xOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgYW5pbWF0ZSgpe1xuICAgICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cblxufVxuXG5cbiAgICAvLyBoYW5kbGVNb3VzZU1vdmUoZSkge1xuICAgIC8vICAgICBjb25zdCB4ID0gZS5jbGllbnRYO1xuICAgIC8vICAgICBjb25zdCB5ID0gZS5jbGllbnRZO1xuICAgIC8vICAgICBpZiAoeCA+PSB0aGlzLnBvc2l0aW9uWCAmJiB4IDw9IHRoaXMucG9zaXRpb25YICsgMTAwICYmIHkgPj0gdGhpcy5wb3NpdGlvblkgJiYgeSA8PSB0aGlzLnBvc2l0aW9uWSArIDEwMCkge1xuICAgIC8vICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIGhhbmRsZU1vdXNlT3V0KCkge1xuICAgIC8vICAgICB0aGlzLmhpZGUoKTtcbiAgICAvLyB9XG5cbiAgICAvLyBzaG93KCkge1xuICAgIC8vICAgICB0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIC8vIH1cblxuICAgIC8vIGhpZGUoKSB7XG4gICAgLy8gICAgIHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyB9XG5cbiAgICAvLyBjbG9zZSgpIHtcbiAgICAvLyAgICAgdGhpcy5oaWRlKCk7XG4gICAgLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1pdG9jaG9uZHJpYTtcbiJdLCJuYW1lcyI6WyJNaXRvY2hvbmRyaWEiLCJjb25zdHJ1Y3RvciIsImN0eCIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJkcmF3IiwiYmluZCIsIngiLCJ5Iiwic3BlZWQiLCJkaXJlY3Rpb24iLCJzZXRJbWFnZVNvdXJjZSIsImltYWdlU291cmNlIiwic3JjIiwiZHJhd0ltYWdlIiwidXBkYXRlIiwiYW5pbWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/mitochondria.js\n");

/***/ }),

/***/ "./src/scripts/nucleus.js":
/*!********************************!*\
  !*** ./src/scripts/nucleus.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Nucleus {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.image = new Image();\n    this.image.onload = this.draw.bind(this);\n    this.x = 200;\n    this.y = 0;\n  }\n  setImageSource(imageSource) {\n    this.image.src = imageSource;\n  }\n  draw() {\n    this.ctx.drawImage(this.image, this.x, this.x, 100, 100);\n  }\n  animate() {\n    this.draw();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nucleus);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9udWNsZXVzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPO0VBQ1RDLFdBQVdBLENBQUNDLEdBQUcsRUFBRTtJQUNiLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBRWQsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsSUFBSSxDQUFDRCxLQUFLLENBQUNFLE1BQU0sR0FBRyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUV4QyxJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxDQUFDLEdBQUcsQ0FBQztFQUNkO0VBRUFDLGNBQWNBLENBQUNDLFdBQVcsRUFBQztJQUN2QixJQUFJLENBQUNSLEtBQUssQ0FBQ1MsR0FBRyxHQUFHRCxXQUFXO0VBQ2hDO0VBRUFMLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ0osR0FBRyxDQUFDVyxTQUFTLENBQUMsSUFBSSxDQUFDVixLQUFLLEVBQUMsSUFBSSxDQUFDSyxDQUFDLEVBQUMsSUFBSSxDQUFDQSxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztFQUN4RDtFQUVBTSxPQUFPQSxDQUFBLEVBQUU7SUFDTCxJQUFJLENBQUNSLElBQUksQ0FBQyxDQUFDO0VBQ2pCO0FBQ0Y7QUFDQSwrREFBZU4sT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2NlbGwtZXhwbG9yZXIvLi9zcmMvc2NyaXB0cy9udWNsZXVzLmpzP2ZjM2QiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTnVjbGV1c3tcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHggXG5cbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpXG5cbiAgICAgICAgdGhpcy54ID0gMjAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgIH1cblxuICAgIHNldEltYWdlU291cmNlKGltYWdlU291cmNlKXtcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBpbWFnZVNvdXJjZVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLHRoaXMueCx0aGlzLngsMTAwLDEwMClcbiAgICB9XG5cbiAgICBhbmltYXRlKCl7XG4gICAgICAgIHRoaXMuZHJhdygpXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE51Y2xldXMiXSwibmFtZXMiOlsiTnVjbGV1cyIsImNvbnN0cnVjdG9yIiwiY3R4IiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsImRyYXciLCJiaW5kIiwieCIsInkiLCJzZXRJbWFnZVNvdXJjZSIsImltYWdlU291cmNlIiwic3JjIiwiZHJhd0ltYWdlIiwiYW5pbWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/nucleus.js\n");

/***/ }),

/***/ "./src/scripts/rougher.js":
/*!********************************!*\
  !*** ./src/scripts/rougher.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Rougher {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.image = new Image();\n    this.image.onload = this.draw.bind(this);\n    this.x = 200;\n    this.y = 280;\n    this.speed = .1;\n    this.direction = 1;\n  }\n  setImageSource(imageSource) {\n    this.image.src = imageSource;\n  }\n  draw() {\n    // this.ctx.rotate(5)\n    this.ctx.drawImage(this.image, this.x, this.y, 120, 80);\n  }\n  update() {\n    // this.x = this.x + this.speed * this.direction;\n    this.y = this.y + this.speed * this.direction;\n    if (this.y + 1 >= 281 || this.y <= 280) {\n      this.direction *= -1;\n    }\n  }\n  animate() {\n    this.draw();\n    this.update();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rougher);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9yb3VnaGVyLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPO0VBQ1RDLFdBQVdBLENBQUNDLEdBQUcsRUFBQztJQUNaLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsSUFBSSxDQUFDRCxLQUFLLENBQUNFLE1BQU0sR0FBRyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUd4QyxJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxDQUFDLEdBQUcsR0FBRztJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNDLFNBQVMsR0FBRyxDQUFDO0VBQ3RCO0VBQ0FDLGNBQWNBLENBQUNDLFdBQVcsRUFBQztJQUN2QixJQUFJLENBQUNWLEtBQUssQ0FBQ1csR0FBRyxHQUFHRCxXQUFXO0VBQ2hDO0VBRUFQLElBQUlBLENBQUEsRUFBRztJQUNIO0lBQ0EsSUFBSSxDQUFDSixHQUFHLENBQUNhLFNBQVMsQ0FBQyxJQUFJLENBQUNaLEtBQUssRUFBQyxJQUFJLENBQUNLLENBQUMsRUFBQyxJQUFJLENBQUNDLENBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRSxDQUFDO0VBQ3ZEO0VBRUFPLE1BQU1BLENBQUEsRUFBRTtJQUNBO0lBQ0EsSUFBSSxDQUFDUCxDQUFDLEdBQUcsSUFBSSxDQUFDQSxDQUFDLEdBQUcsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxTQUFTO0lBQzdDLElBQUksSUFBSSxDQUFDRixDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUNBLENBQUMsSUFBSSxHQUFHLEVBQUU7TUFDcEMsSUFBSSxDQUFDRSxTQUFTLElBQUksQ0FBQyxDQUFDO0lBQ3hCO0VBQ0o7RUFFSk0sT0FBT0EsQ0FBQSxFQUFFO0lBQ0gsSUFBSSxDQUFDWCxJQUFJLENBQUMsQ0FBQztJQUNYLElBQUksQ0FBQ1UsTUFBTSxDQUFDLENBQUM7RUFDbkI7QUFDSjtBQUNBLCtEQUFlaEIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2NlbGwtZXhwbG9yZXIvLi9zcmMvc2NyaXB0cy9yb3VnaGVyLmpzP2U3OGYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUm91Z2hlcntcbiAgICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eCBcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpXG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMueCA9IDIwMDtcbiAgICAgICAgdGhpcy55ID0gMjgwO1xuICAgICAgICB0aGlzLnNwZWVkID0gLjE7IFxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gICAgfVxuICAgIHNldEltYWdlU291cmNlKGltYWdlU291cmNlKXtcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBpbWFnZVNvdXJjZVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIC8vIHRoaXMuY3R4LnJvdGF0ZSg1KVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0aGlzLngsdGhpcy55LDEyMCw4MClcbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgICAgIC8vIHRoaXMueCA9IHRoaXMueCArIHRoaXMuc3BlZWQgKiB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMueSArIHRoaXMuc3BlZWQgKiB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIGlmICh0aGlzLnkgKyAxID49IDI4MSB8fCB0aGlzLnkgPD0gMjgwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gKj0gLTE7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICBhbmltYXRlKCl7XG4gICAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUm91Z2hlciJdLCJuYW1lcyI6WyJSb3VnaGVyIiwiY29uc3RydWN0b3IiLCJjdHgiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiZHJhdyIsImJpbmQiLCJ4IiwieSIsInNwZWVkIiwiZGlyZWN0aW9uIiwic2V0SW1hZ2VTb3VyY2UiLCJpbWFnZVNvdXJjZSIsInNyYyIsImRyYXdJbWFnZSIsInVwZGF0ZSIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/rougher.js\n");

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