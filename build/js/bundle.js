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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/header/header.js":
/*!*************************************!*\
  !*** ./src/blocks/header/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return header; });
function header() {
  var hostElem = document.querySelector('#header-host');
  if (!hostElem) return;
  var burgerBtn = hostElem.querySelector('#btn-burger');
  var sideBarElem = document.querySelector('#side-bar');
  var isOpenSideBar = false;

  burgerBtn.onclick = function () {
    if (isOpenSideBar) {
      burgerBtn.classList.remove('mod-close');
      sideBarElem.classList.remove('mod-show');
    } else {
      burgerBtn.classList.add('mod-close');
      sideBarElem.classList.add('mod-show');
    }

    isOpenSideBar = !isOpenSideBar;
  };
}

window.onload = function () {
  header();
};

/***/ }),

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!*
 * ВНИМАНИЕ! Этот файл генерируется автоматически.
 * Любые изменения этого файла будут потеряны при следующей компиляции.
 * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.
 */

/* global require */
__webpack_require__(/*! ../blocks/header/header.js */ "./src/blocks/header/header.js");

__webpack_require__(/*! ./script.js */ "./src/js/script.js");
/*!*
 * ВНИМАНИЕ! Этот файл генерируется автоматически.
 * Любые изменения этого файла будут потеряны при следующей компиляции.
 * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.
 */

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// /* global document console */
// import ready from 'Utils/documentReady.js';
// import getScrollSize from 'Utils/getScrollSize.js';
// ready(function() {
//   console.log('DOM героически построен!');
//   // Добавление кастомного свойства с системной шириной скролла
//   document.documentElement.style.setProperty('--css-scroll-size', `${getScrollSize()}px`);
// });
// import $ from 'jquery'; // Перед использованием установить как зависимость
// $(function() {
//   console.log('jQuery героически сработал!');
// });

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbImhlYWRlciIsImhvc3RFbGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnVyZ2VyQnRuIiwic2lkZUJhckVsZW0iLCJpc09wZW5TaWRlQmFyIiwib25jbGljayIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIndpbmRvdyIsIm9ubG9hZCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlLFNBQVNBLE1BQVQsR0FBa0I7QUFDL0IsTUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQSxNQUFHLENBQUNGLFFBQUosRUFBYztBQUVkLE1BQU1HLFNBQVMsR0FBR0gsUUFBUSxDQUFDRSxhQUFULENBQXVCLGFBQXZCLENBQWxCO0FBQ0EsTUFBTUUsV0FBVyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBcEI7QUFFQSxNQUFJRyxhQUFhLEdBQUcsS0FBcEI7O0FBRUFGLFdBQVMsQ0FBQ0csT0FBVixHQUFvQixZQUFNO0FBQ3hCLFFBQUlELGFBQUosRUFBbUI7QUFDakJGLGVBQVMsQ0FBQ0ksU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsV0FBM0I7QUFDQUosaUJBQVcsQ0FBQ0csU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsVUFBN0I7QUFDRCxLQUhELE1BR087QUFDTEwsZUFBUyxDQUFDSSxTQUFWLENBQW9CRSxHQUFwQixDQUF3QixXQUF4QjtBQUNBTCxpQkFBVyxDQUFDRyxTQUFaLENBQXNCRSxHQUF0QixDQUEwQixVQUExQjtBQUNEOztBQUVESixpQkFBYSxHQUFHLENBQUNBLGFBQWpCO0FBQ0QsR0FWRDtBQVdEOztBQUVESyxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQlosUUFBTTtBQUNQLENBRkQsQzs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBYSxtQkFBTyxDQUFDLGlFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsdUNBQUQsQ0FBUDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLE0iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvZW50cnkuanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGNvbnN0IGhvc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlci1ob3N0Jyk7XG4gIGlmKCFob3N0RWxlbSkgcmV0dXJuO1xuXG4gIGNvbnN0IGJ1cmdlckJ0biA9IGhvc3RFbGVtLnF1ZXJ5U2VsZWN0b3IoJyNidG4tYnVyZ2VyJyk7XG4gIGNvbnN0IHNpZGVCYXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtYmFyJyk7XG5cbiAgbGV0IGlzT3BlblNpZGVCYXIgPSBmYWxzZTtcblxuICBidXJnZXJCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBpZiAoaXNPcGVuU2lkZUJhcikge1xuICAgICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21vZC1jbG9zZScpO1xuICAgICAgc2lkZUJhckVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnbW9kLXNob3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5hZGQoJ21vZC1jbG9zZScpO1xuICAgICAgc2lkZUJhckVsZW0uY2xhc3NMaXN0LmFkZCgnbW9kLXNob3cnKTtcbiAgICB9XG5cbiAgICBpc09wZW5TaWRlQmFyID0gIWlzT3BlblNpZGVCYXI7XG4gIH07XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGhlYWRlcigpO1xufVxuIiwiXG4vKiEqXG4gKiDQktCd0JjQnNCQ0J3QmNCVISDQrdGC0L7RgiDRhNCw0LnQuyDQs9C10L3QtdGA0LjRgNGD0LXRgtGB0Y8g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LguXG4gKiDQm9GO0LHRi9C1INC40LfQvNC10L3QtdC90LjRjyDRjdGC0L7Qs9C+INGE0LDQudC70LAg0LHRg9C00YPRgiDQv9C+0YLQtdGA0Y/QvdGLINC/0YDQuCDRgdC70LXQtNGD0Y7RidC10Lkg0LrQvtC80L/QuNC70Y/RhtC40LguXG4gKiDQm9GO0LHQvtC1INC40LfQvNC10L3QtdC90LjQtSDQv9GA0L7QtdC60YLQsCDQsdC10Lcg0LLQvtC30LzQvtC20L3QvtGB0YLQuCDQutC+0LzQv9C40LvRj9GG0LjQuCDQlNCe0JvQrNCo0JUg0Jgg0JTQntCg0J7QltCVINCyIDItNSDRgNCw0LcuXG4gKi9cblxuLyogZ2xvYmFsIHJlcXVpcmUgKi9cblxucmVxdWlyZSgnLi4vYmxvY2tzL2hlYWRlci9oZWFkZXIuanMnKTtcbnJlcXVpcmUoJy4vc2NyaXB0LmpzJyk7XG5cbi8qISpcbiAqINCS0J3QmNCc0JDQndCY0JUhINCt0YLQvtGCINGE0LDQudC7INCz0LXQvdC10YDQuNGA0YPQtdGC0YHRjyDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC5cbiAqINCb0Y7QsdGL0LUg0LjQt9C80LXQvdC10L3QuNGPINGN0YLQvtCz0L4g0YTQsNC50LvQsCDQsdGD0LTRg9GCINC/0L7RgtC10YDRj9C90Ysg0L/RgNC4INGB0LvQtdC00YPRjtGJ0LXQuSDQutC+0LzQv9C40LvRj9GG0LjQuC5cbiAqINCb0Y7QsdC+0LUg0LjQt9C80LXQvdC10L3QuNC1INC/0YDQvtC10LrRgtCwINCx0LXQtyDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INC60L7QvNC/0LjQu9GP0YbQuNC4INCU0J7Qm9Cs0KjQlSDQmCDQlNCe0KDQntCW0JUg0LIgMi01INGA0LDQty5cbiAqL1xuXG4iLCIvLyAvKiBnbG9iYWwgZG9jdW1lbnQgY29uc29sZSAqL1xyXG5cclxuLy8gaW1wb3J0IHJlYWR5IGZyb20gJ1V0aWxzL2RvY3VtZW50UmVhZHkuanMnO1xyXG4vLyBpbXBvcnQgZ2V0U2Nyb2xsU2l6ZSBmcm9tICdVdGlscy9nZXRTY3JvbGxTaXplLmpzJztcclxuXHJcbi8vIHJlYWR5KGZ1bmN0aW9uKCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKCdET00g0LPQtdGA0L7QuNGH0LXRgdC60Lgg0L/QvtGB0YLRgNC+0LXQvSEnKTtcclxuLy8gICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQutCw0YHRgtC+0LzQvdC+0LPQviDRgdCy0L7QudGB0YLQstCwINGBINGB0LjRgdGC0LXQvNC90L7QuSDRiNC40YDQuNC90L7QuSDRgdC60YDQvtC70LvQsFxyXG4vLyAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jc3Mtc2Nyb2xsLXNpemUnLCBgJHtnZXRTY3JvbGxTaXplKCl9cHhgKTtcclxuLy8gfSk7XHJcblxyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknOyAvLyDQn9C10YDQtdC0INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC10Lwg0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0LrQsNC6INC30LDQstC40YHQuNC80L7RgdGC0YxcclxuLy8gJChmdW5jdGlvbigpIHtcclxuLy8gICBjb25zb2xlLmxvZygnalF1ZXJ5INCz0LXRgNC+0LjRh9C10YHQutC4INGB0YDQsNCx0L7RgtCw0LshJyk7XHJcbi8vIH0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9