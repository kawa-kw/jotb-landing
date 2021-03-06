/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js_dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__displayScrollNavigation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manageElementsOnScroll__ = __webpack_require__(2);



document.addEventListener('DOMContentLoaded', () => {
    Object(__WEBPACK_IMPORTED_MODULE_0__displayScrollNavigation__["a" /* default */])();
    Object(__WEBPACK_IMPORTED_MODULE_1__manageElementsOnScroll__["b" /* moveElementsOnScroll */])();
    Object(__WEBPACK_IMPORTED_MODULE_1__manageElementsOnScroll__["a" /* moveBgPatternOnScroll */])();

    window.addEventListener('scroll', __WEBPACK_IMPORTED_MODULE_1__manageElementsOnScroll__["b" /* moveElementsOnScroll */]);
    window.addEventListener('scroll', __WEBPACK_IMPORTED_MODULE_1__manageElementsOnScroll__["a" /* moveBgPatternOnScroll */]);
}, false);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let displayScrollNavigation = () => {
    let sectionsArray = document.getElementsByClassName('js-section');
    let scrollNav = document.getElementById('js-scroll-nav');

    for (let section of sectionsArray) {
        const navElement = document.createElement('li');
        navElement.className = 'main__nav-scroll-element';

        const navLink = document.createElement('a');
        // Get sections id to asign href to every <a>
        navLink.setAttribute('href', `#${section.id}`);

        // Create name of the link
        const navLinkName = document.createElement('span');
        navLinkName.className = 'main__nav-scroll-element-name';
        navLinkName.textContent = section.dataset.name;

        // Append <span> to <a>
        navLink.appendChild(navLinkName);
        // Append <a> to <li>
        navElement.appendChild(navLink);
        // Append <li> to <ul>
        scrollNav.appendChild(navElement);
    };
};

/* harmony default export */ __webpack_exports__["a"] = (displayScrollNavigation);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return moveBgPatternOnScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return moveElementsOnScroll; });
let logo = document.querySelector('.js-main-logo');
let sectionIntro = document.querySelector('.js-section-intro');
let sectionContactOffset = document.querySelector('.js-section-contact').offsetTop;
let windowheight = window.innerHeight;
let bgPattern = document.querySelector('.js-bg-pattern');

let moveElementsOnScroll = () => {
    let windowScrollTop = window.scrollY;
    if (windowScrollTop >= 50) {
        logo.classList.add('logo-on-top');
        sectionIntro.classList.add('intro-fade-out');
    } else {
        logo.classList.remove('logo-on-top');
        sectionIntro.classList.remove('intro-fade-out');
    }
};

let moveBgPatternOnScroll = () => {
    let windowScrollTop = window.scrollY;

    if (windowScrollTop >= sectionContactOffset - windowheight) {
        bgPattern.style.position = 'absolute';
        bgPattern.style.bottom = 'auto';
        bgPattern.style.top = `${-bgPattern.height}px`;
    } else {
        bgPattern.style.position = 'fixed';
        bgPattern.style.bottom = '0';
        bgPattern.style.top = 'auto';
    }
};



/***/ })
/******/ ]);