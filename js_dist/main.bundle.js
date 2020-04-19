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
    Object(__WEBPACK_IMPORTED_MODULE_1__manageElementsOnScroll__["a" /* moveElementsOnScroll */])();
    window.addEventListener('scroll', __WEBPACK_IMPORTED_MODULE_1__manageElementsOnScroll__["a" /* moveElementsOnScroll */]);
}, false);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const displayScrollNavigation = () => {
    const sectionsArray = document.getElementsByClassName('js-section');
    const scrollNav = document.getElementById('js-scroll-nav');

    for (const section of sectionsArray) {
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
    }
};

/* harmony default export */ __webpack_exports__["a"] = (displayScrollNavigation);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return moveElementsOnScroll; });
const logo = document.querySelector('.js-main-logo');
const nav = document.querySelector('.js-nav');
const sectionIntro = document.querySelector('.js-section-intro');

const moveElementsOnScroll = () => {
    const windowScrollTop = window.scrollY;
    if (windowScrollTop >= 50) {
        logo.classList.add('logo-on-top');
        sectionIntro.classList.add('intro-fade-out');
    } else {
        logo.classList.remove('logo-on-top');
        sectionIntro.classList.remove('intro-fade-out');
    }

    if (windowScrollTop >= 650) {
        nav.classList.add('nav-on-top');
    } else {
        nav.classList.remove('nav-on-top');
    }
};



/***/ })
/******/ ]);