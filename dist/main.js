/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// import Eukaryotic from \"./scripts/eukaryotic\"\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const ctx = document.getElementById(\"cell1\").getContext(\"2d\");\n  const ctx1 = document.getElementById(\"cell2\").getContext(\"2d\");\n  ctx.beginPath();\n  ctx.arc(225, 275, 200, 0, 2 * Math.PI);\n  ctx.fillStyle = \"rgb(226,241,250)\";\n  ctx.fill();\n  ctx.strokeStyle = \"rgb(244,180,111)\";\n  ctx.lineWidth = 7;\n  ctx.stroke();\n  ctx1.beginPath();\n  ctx1.arc(225, 280 - 200 / 2, 200 / 2, Math.PI, 0);\n  ctx1.arc(225, 280 + 200 / 2, 200 / 2, 0, Math.PI);\n  ctx1.fillRect(225 - 200 / 2, 280 - 200 / 2, 200, 200);\n  ctx1.fillRect(225 + 100, 275 - 80 / 2, 30, 80);\n  ctx1.strokeStyle = \"rgb(127,246,185)\";\n  ctx1.lineWidth = 7;\n  ctx1.closePath();\n  ctx1.fillStyle = \"rgb(236,227,255)\";\n  ctx1.fill();\n  ctx1.stroke();\n\n  // const mitochondria = New Mitochondria()\n  // new Eukaryotic(ctx,)\n});\n// document.addEventListener(\"DOMContentLoaded\", () => {\n\n//     const cell1 = document.getElementById(\"cell1\");\n//     // debugger;\n\n//     new Eukaryotic(cell1)\n//     console.log(\"hello world\");\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdHgiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJjdHgxIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbFJlY3QiLCJjbG9zZVBhdGgiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2NlbGwtZXhwbG9yZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCBFdWthcnlvdGljIGZyb20gXCIuL3NjcmlwdHMvZXVrYXJ5b3RpY1wiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsMVwiKS5nZXRDb250ZXh0KFwiMmRcIilcbiAgICBcbiAgICBjb25zdCBjdHgxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsMlwiKS5nZXRDb250ZXh0KFwiMmRcIilcbiAgICBcblxuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGN0eC5hcmMoMjI1LCAyNzUsIDIwMCwgMCwgMiAqIE1hdGguUEkpXG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMjI2LDI0MSwyNTApXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYigyNDQsMTgwLDExMSlcIjsgXG4gICAgY3R4LmxpbmVXaWR0aCA9IDc7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICBcbiAgICBjdHgxLmJlZ2luUGF0aCgpO1xuXG4gICAgY3R4MS5hcmMoMjI1LCAyODAgLSAyMDAgLyAyLCAyMDAgLyAyLCBNYXRoLlBJLCAwKTtcbiAgIFxuICAgIGN0eDEuYXJjKDIyNSwgMjgwICsgMjAwIC8gMiwgMjAwIC8gMiwgMCwgTWF0aC5QSSk7XG4gICAgXG4gICAgY3R4MS5maWxsUmVjdCgyMjUgLSAyMDAgLyAyLCAyODAgLSAyMDAgLyAyLCAyMDAsMjAwKTtcblxuICAgIGN0eDEuZmlsbFJlY3QoMjI1ICsgMTAwLCAyNzUgLSA4MCAvIDIsIDMwLCA4MCk7XG4gIFxuICAgIGN0eDEuc3Ryb2tlU3R5bGUgPSBcInJnYigxMjcsMjQ2LDE4NSlcIjtcbiAgICBjdHgxLmxpbmVXaWR0aCA9IDc7XG5cbiAgICBjdHgxLmNsb3NlUGF0aCgpO1xuICAgIGN0eDEuZmlsbFN0eWxlID0gXCJyZ2IoMjM2LDIyNywyNTUpXCI7XG5cbiAgICBjdHgxLmZpbGwoKTtcbiAgICBjdHgxLnN0cm9rZSgpO1xuXG4gICAgLy8gY29uc3QgbWl0b2Nob25kcmlhID0gTmV3IE1pdG9jaG9uZHJpYSgpXG4gICAgLy8gbmV3IEV1a2FyeW90aWMoY3R4LClcbn0pXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbi8vICAgICBjb25zdCBjZWxsMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2VsbDFcIik7XG4vLyAgICAgLy8gZGVidWdnZXI7XG4gICBcbi8vICAgICBuZXcgRXVrYXJ5b3RpYyhjZWxsMSlcbi8vICAgICBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpO1xuLy8gfSk7Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUNBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQsTUFBTUMsR0FBRyxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQztFQUU3RCxNQUFNQyxJQUFJLEdBQUdMLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBRzlERixHQUFHLENBQUNJLFNBQVMsQ0FBQyxDQUFDO0VBQ2ZKLEdBQUcsQ0FBQ0ssR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsRUFBRSxDQUFDO0VBRXRDUCxHQUFHLENBQUNRLFNBQVMsR0FBRyxrQkFBa0I7RUFDbENSLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDLENBQUM7RUFDVlQsR0FBRyxDQUFDVSxXQUFXLEdBQUcsa0JBQWtCO0VBQ3BDVixHQUFHLENBQUNXLFNBQVMsR0FBRyxDQUFDO0VBQ2pCWCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxDQUFDO0VBR1pULElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFFaEJELElBQUksQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFQyxJQUFJLENBQUNDLEVBQUUsRUFBRSxDQUFDLENBQUM7RUFFakRKLElBQUksQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRUMsSUFBSSxDQUFDQyxFQUFFLENBQUM7RUFFakRKLElBQUksQ0FBQ1UsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBQyxHQUFHLENBQUM7RUFFcERWLElBQUksQ0FBQ1UsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUU5Q1YsSUFBSSxDQUFDTyxXQUFXLEdBQUcsa0JBQWtCO0VBQ3JDUCxJQUFJLENBQUNRLFNBQVMsR0FBRyxDQUFDO0VBRWxCUixJQUFJLENBQUNXLFNBQVMsQ0FBQyxDQUFDO0VBQ2hCWCxJQUFJLENBQUNLLFNBQVMsR0FBRyxrQkFBa0I7RUFFbkNMLElBQUksQ0FBQ00sSUFBSSxDQUFDLENBQUM7RUFDWE4sSUFBSSxDQUFDUyxNQUFNLENBQUMsQ0FBQzs7RUFFYjtFQUNBO0FBQ0osQ0FBQyxDQUFDO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZWxsLWV4cGxvcmVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;