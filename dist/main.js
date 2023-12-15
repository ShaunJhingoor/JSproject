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

eval("// import Eukaryotic from \"./scripts/eukaryotic\"\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const ctx = document.getElementById(\"cell1\").getContext(\"2d\");\n  const ctx1 = document.getElementById(\"cell2\").getContext(\"2d\");\n  ctx.beginPath();\n  ctx.arc(225, 275, 200, 0, 2 * Math.PI);\n  ctx.fillStyle = \"orange\";\n  ctx.fill();\n  ctx.strokeStyle = \"white\";\n  ctx.lineWidth = 3;\n  ctx.stroke();\n  ctx1.beginPath();\n  ctx1.arc(225, 280 - 200 / 2, 200 / 2, Math.PI, 0);\n  ctx1.arc(225, 280 + 200 / 2, 200 / 2, 0, Math.PI);\n  ctx1.fillRect(225 - 200 / 2, 280 - 200 / 2, 200, 200);\n  ctx1.fillRect(225 + 100, 275 - 80 / 2, 30, 80);\n  ctx1.strokeStyle = \"white\";\n  ctx1.lineWidth = 3;\n  ctx1.closePath();\n  ctx1.fillStyle = \"teal\";\n  ctx1.fill();\n  ctx1.stroke();\n\n  // const mitochondria = New Mitochondria()\n  // new Eukaryotic(ctx,)\n});\n// document.addEventListener(\"DOMContentLoaded\", () => {\n\n//     const cell1 = document.getElementById(\"cell1\");\n//     // debugger;\n\n//     new Eukaryotic(cell1)\n//     console.log(\"hello world\");\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdHgiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJjdHgxIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbFJlY3QiLCJjbG9zZVBhdGgiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2NlbGwtZXhwbG9yZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCBFdWthcnlvdGljIGZyb20gXCIuL3NjcmlwdHMvZXVrYXJ5b3RpY1wiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsMVwiKS5nZXRDb250ZXh0KFwiMmRcIilcbiAgICBjb25zdCBjdHgxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsMlwiKS5nZXRDb250ZXh0KFwiMmRcIilcbiAgICBcblxuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGN0eC5hcmMoMjI1LCAyNzUsIDIwMCwgMCwgMiAqIE1hdGguUEkpXG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjsgXG4gICAgY3R4LmxpbmVXaWR0aCA9IDM7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICBcbiAgICBjdHgxLmJlZ2luUGF0aCgpO1xuICAgIGN0eDEuYXJjKDIyNSwgMjgwIC0gMjAwIC8gMiwgMjAwIC8gMiwgTWF0aC5QSSwgMCk7XG4gICBcbiAgICBjdHgxLmFyYygyMjUsIDI4MCArIDIwMCAvIDIsIDIwMCAvIDIsIDAsIE1hdGguUEkpO1xuICAgIFxuICAgIGN0eDEuZmlsbFJlY3QoMjI1IC0gMjAwIC8gMiwgMjgwIC0gMjAwIC8gMiwgMjAwLDIwMCk7XG5cbiAgICBjdHgxLmZpbGxSZWN0KDIyNSArIDEwMCwgMjc1IC0gODAgLyAyLCAzMCwgODApO1xuICBcbiAgICBjdHgxLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eDEubGluZVdpZHRoID0gMztcblxuICAgIGN0eDEuY2xvc2VQYXRoKCk7XG4gICAgY3R4MS5maWxsU3R5bGUgPSBcInRlYWxcIjtcblxuICAgIGN0eDEuZmlsbCgpO1xuICAgIGN0eDEuc3Ryb2tlKCk7XG5cbiAgICAvLyBjb25zdCBtaXRvY2hvbmRyaWEgPSBOZXcgTWl0b2Nob25kcmlhKClcbiAgICAvLyBuZXcgRXVrYXJ5b3RpYyhjdHgsKVxufSlcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuLy8gICAgIGNvbnN0IGNlbGwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsMVwiKTtcbi8vICAgICAvLyBkZWJ1Z2dlcjtcbiAgIFxuLy8gICAgIG5ldyBFdWthcnlvdGljKGNlbGwxKVxuLy8gICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XG4vLyB9KTsiXSwibWFwcGluZ3MiOiJBQUNBO0FBQ0FBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQzdELE1BQU1DLElBQUksR0FBR0wsUUFBUSxDQUFDRyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFHOURGLEdBQUcsQ0FBQ0ksU0FBUyxDQUFDLENBQUM7RUFDZkosR0FBRyxDQUFDSyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxFQUFFLENBQUM7RUFFdENQLEdBQUcsQ0FBQ1EsU0FBUyxHQUFHLFFBQVE7RUFDeEJSLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDLENBQUM7RUFDVlQsR0FBRyxDQUFDVSxXQUFXLEdBQUcsT0FBTztFQUN6QlYsR0FBRyxDQUFDVyxTQUFTLEdBQUcsQ0FBQztFQUNqQlgsR0FBRyxDQUFDWSxNQUFNLENBQUMsQ0FBQztFQUdaVCxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0VBQ2hCRCxJQUFJLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRUMsSUFBSSxDQUFDQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBRWpESixJQUFJLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsRUFBRSxDQUFDO0VBRWpESixJQUFJLENBQUNVLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUMsR0FBRyxDQUFDO0VBRXBEVixJQUFJLENBQUNVLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFOUNWLElBQUksQ0FBQ08sV0FBVyxHQUFHLE9BQU87RUFDMUJQLElBQUksQ0FBQ1EsU0FBUyxHQUFHLENBQUM7RUFFbEJSLElBQUksQ0FBQ1csU0FBUyxDQUFDLENBQUM7RUFDaEJYLElBQUksQ0FBQ0ssU0FBUyxHQUFHLE1BQU07RUFFdkJMLElBQUksQ0FBQ00sSUFBSSxDQUFDLENBQUM7RUFDWE4sSUFBSSxDQUFDUyxNQUFNLENBQUMsQ0FBQzs7RUFFYjtFQUNBO0FBQ0osQ0FBQyxDQUFDO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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