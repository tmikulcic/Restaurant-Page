/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
function HomePage() {
  const contentDiv = document.querySelector('#content');
  contentDiv.replaceChildren();

  const heading = document.createElement('h1');
  heading.textContent = `Welcome to Papa Tony's, the finest Italian Restaurant in town!`;
  heading.classList.add('landing-title');
  contentDiv.appendChild(heading);

  const para1 = document.createElement('p');
  para1.classList.add('para1');
  para1.textContent =
    'We offer finest Italian food such as pizza, pasta, lasagna for a very affordable price! Come with your family and enjoy the full Italian cuisine experience';
  contentDiv.appendChild(para1);

  const homePizza = document.createElement('img');
  homePizza.classList.add('top-image');
  homePizza.src = '../src/photos/pizza-home.jpg';
  homePizza.alt = 'Image of a pizza';
  contentDiv.appendChild(homePizza);

  const homeSpaghetti = document.createElement('img');
  homeSpaghetti.classList.add('top-image');
  homeSpaghetti.src = '../src/photos/spaghetti-home.jpg';
  homeSpaghetti.alt = 'Image of a pizza';
  contentDiv.appendChild(homeSpaghetti);
}




/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
function MenuPage() {
  const contentDiv = document.querySelector('#content');
  contentDiv.replaceChildren();

  const homePizza = document.createElement('img');
  homePizza.classList.add('top-image');
  homePizza.src = '../src/photos/pizza-home.jpg';
  homePizza.alt = 'Image of a pizza';
  contentDiv.appendChild(homePizza);

  const homeSpaghetti = document.createElement('img');
  homeSpaghetti.classList.add('top-image');
  homeSpaghetti.src = '../src/photos/spaghetti-home.jpg';
  homeSpaghetti.alt = 'Image of a pizza';
  contentDiv.appendChild(homeSpaghetti);
}




/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
function AboutPage() {
  const contentDiv = document.querySelector('#content');
  contentDiv.replaceChildren();

  const homePizza = document.createElement('img');
  homePizza.classList.add('top-image');
  homePizza.src = '../src/photos/pizza-home.jpg';
  homePizza.alt = 'Image of a pizza';
  contentDiv.appendChild(homePizza);
}




/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": () => (/* binding */ ContactPage)
/* harmony export */ });
function ContactPage() {
  const contentDiv = document.querySelector('#content');
  contentDiv.replaceChildren();

  const homePizza = document.createElement('img');
  homePizza.classList.add('top-image');
  homePizza.src = '../src/photos/pizza-home.jpg';
  homePizza.alt = 'Image of a pizza';
  contentDiv.appendChild(homePizza);
}




/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _about_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _contact_page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





(0,_home_page_js__WEBPACK_IMPORTED_MODULE_0__.HomePage)();

const homeTab = document.querySelector('.home');
homeTab = addEventListener('click', _home_page_js__WEBPACK_IMPORTED_MODULE_0__.HomePage);

const menuTab = document.querySelector('.menu');
menuTab = addEventListener('click', _menu_page_js__WEBPACK_IMPORTED_MODULE_1__.MenuPage);

const aboutTab = document.querySelector('.about');
aboutTab = addEventListener('click', _about_page_js__WEBPACK_IMPORTED_MODULE_2__.AboutPage);

const contactTab = document.querySelector('.contact');
contactTab = addEventListener('click', _contact_page_js__WEBPACK_IMPORTED_MODULE_3__.ContactPage);

})();

/******/ })()
;