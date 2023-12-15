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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_eukaryotic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/eukaryotic */ \"./src/scripts/eukaryotic.js\");\n/* harmony import */ var _scripts_mitochondria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/mitochondria */ \"./src/scripts/mitochondria.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"cell1\");\n  const ctx = canvas.getContext(\"2d\");\n  const canvas1 = document.getElementById(\"cell2\");\n  const ctx1 = canvas1.getContext(\"2d\");\n  ctx.beginPath();\n  ctx.arc(225, 275, 200, 0, 2 * Math.PI);\n  ctx.fillStyle = \"rgb(226,241,250)\";\n  ctx.fill();\n  ctx.strokeStyle = \"rgb(244,180,111)\";\n  ctx.lineWidth = 7;\n  ctx.stroke();\n  ctx1.beginPath();\n  ctx1.arc(225, 280 - 200 / 2, 200 / 2, Math.PI, 0);\n  ctx1.arc(225, 280 + 200 / 2, 200 / 2, 0, Math.PI);\n  ctx1.fillRect(225 - 200 / 2, 280 - 200 / 2, 200, 200);\n  ctx1.fillRect(225 + 100, 275 - 80 / 2, 30, 80);\n  ctx1.strokeStyle = \"green\";\n  ctx1.lineWidth = 7;\n  ctx1.closePath();\n  ctx1.fillStyle = \"rgb(236,227,255)\";\n  ctx1.fill();\n  ctx1.stroke();\n  const mitochondria = new _scripts_mitochondria__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, \"test\");\n  mitochondria.setImageSource('mitochondria.png');\n  // canvas.addEventListener('mouseover', (e) => mitochondria.handleMouseOver(e));\n  // canvas.addEventListener('mouseout', () => mitochondria.handleMouseOut());\n  new _scripts_eukaryotic__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, mitochondria);\n});\n// document.addEventListener(\"DOMContentLoaded\", () => {\n\n//     const cell1 = document.getElementById(\"cell1\");\n//     // debugger;\n\n//     new Eukaryotic(cell1)\n//     console.log(\"hello world\");\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQzZDO0FBQ0k7QUFFakRFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUMvQyxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUNuQyxNQUFNQyxPQUFPLEdBQUlOLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUNqRCxNQUFNSSxJQUFJLEdBQUdELE9BQU8sQ0FBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQztFQUdyQ0QsR0FBRyxDQUFDSSxTQUFTLENBQUMsQ0FBQztFQUNmSixHQUFHLENBQUNLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEVBQUUsQ0FBQztFQUV0Q1AsR0FBRyxDQUFDUSxTQUFTLEdBQUcsa0JBQWtCO0VBQ2xDUixHQUFHLENBQUNTLElBQUksQ0FBQyxDQUFDO0VBQ1ZULEdBQUcsQ0FBQ1UsV0FBVyxHQUFHLGtCQUFrQjtFQUNwQ1YsR0FBRyxDQUFDVyxTQUFTLEdBQUcsQ0FBQztFQUNqQlgsR0FBRyxDQUFDWSxNQUFNLENBQUMsQ0FBQztFQUdaVCxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0VBRWhCRCxJQUFJLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRUMsSUFBSSxDQUFDQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBRWpESixJQUFJLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsRUFBRSxDQUFDO0VBRWpESixJQUFJLENBQUNVLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUMsR0FBRyxDQUFDO0VBRXBEVixJQUFJLENBQUNVLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFOUNWLElBQUksQ0FBQ08sV0FBVyxHQUFHLE9BQU87RUFDMUJQLElBQUksQ0FBQ1EsU0FBUyxHQUFHLENBQUM7RUFFbEJSLElBQUksQ0FBQ1csU0FBUyxDQUFDLENBQUM7RUFDaEJYLElBQUksQ0FBQ0ssU0FBUyxHQUFHLGtCQUFrQjtFQUVuQ0wsSUFBSSxDQUFDTSxJQUFJLENBQUMsQ0FBQztFQUNYTixJQUFJLENBQUNTLE1BQU0sQ0FBQyxDQUFDO0VBRWIsTUFBTUcsWUFBWSxHQUFHLElBQUlwQiw2REFBWSxDQUFDSyxHQUFHLEVBQUMsTUFBTSxDQUFDO0VBQ2pEZSxZQUFZLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztFQUMvQztFQUNBO0VBQ0EsSUFBSXRCLDJEQUFVLENBQUNNLEdBQUcsRUFBQ2UsWUFBWSxDQUFDO0FBQ3BDLENBQUMsQ0FBQztBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2VsbC1leHBsb3Jlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEV1a2FyeW90aWMgZnJvbSBcIi4vc2NyaXB0cy9ldWthcnlvdGljXCJcbmltcG9ydCBNaXRvY2hvbmRyaWEgZnJvbSBcIi4vc2NyaXB0cy9taXRvY2hvbmRyaWFcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsMVwiKVxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcbiAgICBjb25zdCBjYW52YXMxID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2VsbDJcIilcbiAgICBjb25zdCBjdHgxID0gY2FudmFzMS5nZXRDb250ZXh0KFwiMmRcIilcbiAgICBcblxuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGN0eC5hcmMoMjI1LCAyNzUsIDIwMCwgMCwgMiAqIE1hdGguUEkpXG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMjI2LDI0MSwyNTApXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYigyNDQsMTgwLDExMSlcIjsgXG4gICAgY3R4LmxpbmVXaWR0aCA9IDc7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICBcbiAgICBjdHgxLmJlZ2luUGF0aCgpO1xuICAgIFxuICAgIGN0eDEuYXJjKDIyNSwgMjgwIC0gMjAwIC8gMiwgMjAwIC8gMiwgTWF0aC5QSSwgMCk7XG4gICBcbiAgICBjdHgxLmFyYygyMjUsIDI4MCArIDIwMCAvIDIsIDIwMCAvIDIsIDAsIE1hdGguUEkpO1xuICAgIFxuICAgIGN0eDEuZmlsbFJlY3QoMjI1IC0gMjAwIC8gMiwgMjgwIC0gMjAwIC8gMiwgMjAwLDIwMCk7XG5cbiAgICBjdHgxLmZpbGxSZWN0KDIyNSArIDEwMCwgMjc1IC0gODAgLyAyLCAzMCwgODApO1xuICBcbiAgICBjdHgxLnN0cm9rZVN0eWxlID0gXCJncmVlblwiO1xuICAgIGN0eDEubGluZVdpZHRoID0gNztcblxuICAgIGN0eDEuY2xvc2VQYXRoKCk7XG4gICAgY3R4MS5maWxsU3R5bGUgPSBcInJnYigyMzYsMjI3LDI1NSlcIjtcblxuICAgIGN0eDEuZmlsbCgpO1xuICAgIGN0eDEuc3Ryb2tlKCk7XG5cbiAgICBjb25zdCBtaXRvY2hvbmRyaWEgPSBuZXcgTWl0b2Nob25kcmlhKGN0eCxcInRlc3RcIikgXG4gICAgbWl0b2Nob25kcmlhLnNldEltYWdlU291cmNlKCdtaXRvY2hvbmRyaWEucG5nJylcbiAgICAvLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IG1pdG9jaG9uZHJpYS5oYW5kbGVNb3VzZU92ZXIoZSkpO1xuICAgIC8vIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IG1pdG9jaG9uZHJpYS5oYW5kbGVNb3VzZU91dCgpKTtcbiAgICBuZXcgRXVrYXJ5b3RpYyhjdHgsbWl0b2Nob25kcmlhKVxufSlcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuLy8gICAgIGNvbnN0IGNlbGwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsMVwiKTtcbi8vICAgICAvLyBkZWJ1Z2dlcjtcbiAgIFxuLy8gICAgIG5ldyBFdWthcnlvdGljKGNlbGwxKVxuLy8gICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XG4vLyB9KTsiXSwibmFtZXMiOlsiRXVrYXJ5b3RpYyIsIk1pdG9jaG9uZHJpYSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhczEiLCJjdHgxIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbFJlY3QiLCJjbG9zZVBhdGgiLCJtaXRvY2hvbmRyaWEiLCJzZXRJbWFnZVNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/eukaryotic.js":
/*!***********************************!*\
  !*** ./src/scripts/eukaryotic.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Eukaryotic {\n  constructor(cell1, mitochondria) {\n    // nucleus,rough_endoplasmic_reticulum,smooth_endoplasmic_reticulum,cytoplasm,golgi){\n    this.cell1 = cell1;\n    this.mitochondria = mitochondria;\n    // this.nucleus = nucleus \n    // this.rough_endoplasmic_reticulum = rough_endoplasmic_reticulum \n    // this.smooth_endoplasmic_reticulum = smooth_endoplasmic_reticulum \n    // this.cytoplasm = cytoplasm \n    // this.golgi = golgi \n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Eukaryotic);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ldWthcnlvdGljLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxVQUFVLENBQUM7RUFDYkMsV0FBV0EsQ0FBQ0MsS0FBSyxFQUFDQyxZQUFZLEVBQUM7SUFDM0I7SUFDQSxJQUFJLENBQUNELEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLFlBQVksR0FBR0EsWUFBWTtJQUNoQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0o7QUFFSjtBQUNBLCtEQUFlSCxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2VsbC1leHBsb3Jlci8uL3NyYy9zY3JpcHRzL2V1a2FyeW90aWMuanM/Zjg2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdWthcnlvdGljIHtcbiAgICBjb25zdHJ1Y3RvcihjZWxsMSxtaXRvY2hvbmRyaWEpe1xuICAgICAgICAvLyBudWNsZXVzLHJvdWdoX2VuZG9wbGFzbWljX3JldGljdWx1bSxzbW9vdGhfZW5kb3BsYXNtaWNfcmV0aWN1bHVtLGN5dG9wbGFzbSxnb2xnaSl7XG4gICAgICAgIHRoaXMuY2VsbDEgPSBjZWxsMVxuICAgICAgICB0aGlzLm1pdG9jaG9uZHJpYSA9IG1pdG9jaG9uZHJpYVxuICAgICAgICAvLyB0aGlzLm51Y2xldXMgPSBudWNsZXVzIFxuICAgICAgICAvLyB0aGlzLnJvdWdoX2VuZG9wbGFzbWljX3JldGljdWx1bSA9IHJvdWdoX2VuZG9wbGFzbWljX3JldGljdWx1bSBcbiAgICAgICAgLy8gdGhpcy5zbW9vdGhfZW5kb3BsYXNtaWNfcmV0aWN1bHVtID0gc21vb3RoX2VuZG9wbGFzbWljX3JldGljdWx1bSBcbiAgICAgICAgLy8gdGhpcy5jeXRvcGxhc20gPSBjeXRvcGxhc20gXG4gICAgICAgIC8vIHRoaXMuZ29sZ2kgPSBnb2xnaSBcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEV1a2FyeW90aWM7Il0sIm5hbWVzIjpbIkV1a2FyeW90aWMiLCJjb25zdHJ1Y3RvciIsImNlbGwxIiwibWl0b2Nob25kcmlhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/eukaryotic.js\n");

/***/ }),

/***/ "./src/scripts/mitochondria.js":
/*!*************************************!*\
  !*** ./src/scripts/mitochondria.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Mitochondria {\n  constructor(ctx, description) {\n    this.description = description;\n    this.ctx = ctx;\n    // this.canvas = this.ctx.canvas\n    this.image = new Image();\n    this.image.onload = this.draw.bind(this);\n\n    // this.modal = document.createElement('div');\n    // this.modal.className = 'modal';\n    // this.modal.innerHTML = `\n    //     <div class=\"modal-content\">\n    //         <span class=\"close\" onclick=\"mitochondria.close()\">&times;</span>\n    //         <p>${this.description}</p>\n    //     </div>\n    // `;\n    // document.body.appendChild(this.modal);\n\n    // this.canvas.addEventListener('mouseover', (e) => this.handleMouseOver(e));\n    // this.canvas.addEventListener('mouseout', () => this.handleMouseOut());\n    this.animationFrame = null;\n    this.positionX = 200;\n    this.positionY = 200;\n    this.directionX = 1; // 1 for right, -1 for left\n    this.speed = 1;\n  }\n  setImageSource(imageSource) {\n    this.image.src = imageSource;\n  }\n  draw() {\n    this.ctx.drawImage(this.image, 200, 200, 100, 100);\n  }\n\n  //     handleMouseOver(e){\n  //         console.log(\"the\")\n  //       this.show()\n  //     }\n\n  //     handleMouseOut(){\n  //         this.hide()\n  //     }\n\n  //    show(){\n  //     this.modal.style.display = \"block\"\n  //    }\n\n  //    hide(){\n  //     this.modal.style.display = 'none'\n  //    }\n\n  //    close(){\n  //     this.hide()\n  //    }\n}\n// const mitochondria = new Mitochondria() \n// const imageSource = 'https://as2.ftcdn.net/v2/jpg/04/80/60/45/1000_F_480604502_iUcg5SG7KqSX51xiNwZAUfXNwhkjShU0.jpg';\n// mitochondria.setImageSource(imageSource)\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mitochondria);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9taXRvY2hvbmRyaWEuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFlBQVk7RUFDZEMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFDQyxXQUFXLEVBQUM7SUFDeEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDRCxHQUFHLEdBQUdBLEdBQUc7SUFDZDtJQUNBLElBQUksQ0FBQ0UsS0FBSyxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxNQUFNLEdBQUcsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7O0lBRXhDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFHQTtJQUNBO0lBQ0EsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSTtJQUMxQixJQUFJLENBQUNDLFNBQVMsR0FBRyxHQUFHO0lBQ3BCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEdBQUc7SUFDcEIsSUFBSSxDQUFDQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztFQUNsQjtFQUVBQyxjQUFjQSxDQUFDQyxXQUFXLEVBQUM7SUFDdkIsSUFBSSxDQUFDWCxLQUFLLENBQUNZLEdBQUcsR0FBR0QsV0FBVztFQUNoQztFQUVBUixJQUFJQSxDQUFBLEVBQUc7SUFDSCxJQUFJLENBQUNMLEdBQUcsQ0FBQ2UsU0FBUyxDQUFDLElBQUksQ0FBQ2IsS0FBSyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztFQUNsRDs7RUFFSjtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlSixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2VsbC1leHBsb3Jlci8uL3NyYy9zY3JpcHRzL21pdG9jaG9uZHJpYS5qcz8wMmM3Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1pdG9jaG9uZHJpYXtcbiAgICBjb25zdHJ1Y3RvcihjdHgsZGVzY3JpcHRpb24pe1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgLy8gdGhpcy5jYW52YXMgPSB0aGlzLmN0eC5jYW52YXNcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gdGhpcy5kcmF3LmJpbmQodGhpcylcblxuICAgICAgICAvLyB0aGlzLm1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIHRoaXMubW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsJztcbiAgICAgICAgLy8gdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAvLyAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIiBvbmNsaWNrPVwibWl0b2Nob25kcmlhLmNsb3NlKClcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAvLyAgICAgICAgIDxwPiR7dGhpcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgLy8gYDtcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsKTtcblxuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHRoaXMuaGFuZGxlTW91c2VPdmVyKGUpKTtcbiAgICAgICAgLy8gdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB0aGlzLmhhbmRsZU1vdXNlT3V0KCkpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5wb3NpdGlvblggPSAyMDA7XG4gICAgICAgIHRoaXMucG9zaXRpb25ZID0gMjAwO1xuICAgICAgICB0aGlzLmRpcmVjdGlvblggPSAxOyAvLyAxIGZvciByaWdodCwgLTEgZm9yIGxlZnRcbiAgICAgICAgdGhpcy5zcGVlZCA9IDE7XG4gICAgfVxuXG4gICAgc2V0SW1hZ2VTb3VyY2UoaW1hZ2VTb3VyY2Upe1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IGltYWdlU291cmNlXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsMjAwLDIwMCwxMDAsMTAwKVxuICAgIH1cblxuLy8gICAgIGhhbmRsZU1vdXNlT3ZlcihlKXtcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJ0aGVcIilcbi8vICAgICAgIHRoaXMuc2hvdygpXG4vLyAgICAgfVxuXG4vLyAgICAgaGFuZGxlTW91c2VPdXQoKXtcbi8vICAgICAgICAgdGhpcy5oaWRlKClcbi8vICAgICB9XG5cbi8vICAgIHNob3coKXtcbi8vICAgICB0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbi8vICAgIH1cblxuLy8gICAgaGlkZSgpe1xuLy8gICAgIHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuLy8gICAgfVxuXG4vLyAgICBjbG9zZSgpe1xuLy8gICAgIHRoaXMuaGlkZSgpXG4vLyAgICB9XG5cbiAgICBcblxufVxuLy8gY29uc3QgbWl0b2Nob25kcmlhID0gbmV3IE1pdG9jaG9uZHJpYSgpIFxuLy8gY29uc3QgaW1hZ2VTb3VyY2UgPSAnaHR0cHM6Ly9hczIuZnRjZG4ubmV0L3YyL2pwZy8wNC84MC82MC80NS8xMDAwX0ZfNDgwNjA0NTAyX2lVY2c1U0c3S3FTWDUxeGlOd1pBVWZYTndoa2pTaFUwLmpwZyc7XG4vLyBtaXRvY2hvbmRyaWEuc2V0SW1hZ2VTb3VyY2UoaW1hZ2VTb3VyY2UpXG5leHBvcnQgZGVmYXVsdCBNaXRvY2hvbmRyaWEiXSwibmFtZXMiOlsiTWl0b2Nob25kcmlhIiwiY29uc3RydWN0b3IiLCJjdHgiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJkcmF3IiwiYmluZCIsImFuaW1hdGlvbkZyYW1lIiwicG9zaXRpb25YIiwicG9zaXRpb25ZIiwiZGlyZWN0aW9uWCIsInNwZWVkIiwic2V0SW1hZ2VTb3VyY2UiLCJpbWFnZVNvdXJjZSIsInNyYyIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/mitochondria.js\n");

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