/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/widget.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./css/widget_main.css */ 8);
	
	__webpack_require__(/*! ./css/widget_media.css */ 10);
	
	var _calendar = __webpack_require__(/*! ./images/calendar.svg */ 12);
	
	var _calendar2 = _interopRequireDefault(_calendar);
	
	var _utils = __webpack_require__(/*! ./utils */ 13);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var queryParams = utils.getQueryParams(document.location.search);
	
	var bodyElem = document.querySelector('body');
	
	if (queryParams.buttonColor && utils.validateColor('#' + queryParams.buttonColor)) {
	    var buttonColor = '#' + queryParams.buttonColor;
	    var buttonSearch = document.querySelector('.button_search');
	
	    buttonSearch.style.backgroundColor = buttonColor;
	    buttonSearch.style.borderBottomColor = utils.shadeColor(buttonColor, -0.2);
	}
	
	if (queryParams.backColor && utils.validateColor('#' + queryParams.backColor)) {
	    var backColor = '#' + queryParams.backColor;
	    bodyElem.style.backgroundColor = backColor;
	
	    var encodedIcon = window.btoa(_calendar2.default.replace('fill="#4990E2"', 'fill="' + backColor + '"'));
	    var calendarButtons = document.querySelectorAll('.icon_wrapper');
	
	    for (var i = 0; i < calendarButtons.length; i++) {
	        calendarButtons[i].style.backgroundImage = 'url(data:image/svg+xml;base64,' + encodedIcon + ')';
	    }
	}
	
	if (queryParams.textColor && utils.validateColor('#' + queryParams.textColor)) {
	    var textColor = '#' + queryParams.textColor;
	    bodyElem.style.color = textColor;
	}
	
	bodyElem.style.display = 'block';

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/*!*********************************!*\
  !*** ./src/css/widget_main.css ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../~/css-loader?importLoaders=1!../../~/postcss-loader!./widget_main.css */ 9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../~/style-loader/addStyles.js */ 4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?importLoaders=1!../../node_modules/postcss-loader/index.js!./widget_main.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?importLoaders=1!../../node_modules/postcss-loader/index.js!./widget_main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/*!***********************************************************************************!*\
  !*** ./~/css-loader?importLoaders=1!./~/postcss-loader!./src/css/widget_main.css ***!
  \***********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, "body, html {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    display: none;\r\n    padding: 0 20px 20px;\r\n    color: #fff;\r\n    background-color: #4A90E2;\r\n    font-family: 'Open Sans', sans-serif;\r\n    max-width: 1024px;\r\n    min-width: 270px;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n}\r\n\r\nheader {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.header_message {\r\n    font-size: 1.5rem;\r\n    line-height: 2.2rem;\r\n    letter-spacing: 0.02rem;\r\n}\r\n\r\n.header_message:last-child {\r\n    padding-left: 7px;\r\n}\r\n\r\n.content {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    padding-top: 10px;\r\n}\r\n\r\n.button_search {\r\n    color: inherit;\r\n    height: 40px;\r\n    width: 240px;\r\n    background-color: #F5A623;\r\n    box-sizing: border-box;\r\n    border: 0px solid;\r\n    border-bottom: 2px solid #DC951F;\r\n    border-radius: 2px;\r\n    -ms-flex-negative: 0;\r\n        flex-shrink: 0;\r\n    outline: none;\r\n    cursor: pointer;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1.2rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1rem;\r\n}\r\n\r\n.date_picker {\r\n    width: 200px;\r\n    height: 40px;\r\n    margin-right: 20px;\r\n    -ms-flex-negative: 0;\r\n        flex-shrink: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    background-color: #fff;\r\n    border-radius: 2px;\r\n    position: relative;\r\n}\r\n\r\n.date_input {\r\n    height: 40px;\r\n    border-radius: 2px;\r\n    line-height: 40px;\r\n    width: 100%;\r\n    -ms-flex-preferred-size: 100%;\r\n        flex-basis: 100%;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    -ms-flex-negative: 1;\r\n        flex-shrink: 1;\r\n    border: none;\r\n    padding: 0 0 0 10px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 0.8rem;\r\n    letter-spacing: 0.04rem;\r\n    outline: none;\r\n}\r\n\r\n.date_input::-ms-clear {\r\n    display: none;\r\n}\r\n\r\n.date_input::-webkit-input-placeholder {\r\n    color: #9B9B9B;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 0.8rem;\r\n    letter-spacing: 0.04rem;\r\n}\r\n\r\n.date_input::-moz-placeholder {\r\n    color: #9B9B9B;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 0.8rem;\r\n    letter-spacing: 0.04rem;\r\n}\r\n\r\n.date_input:-ms-input-placeholder {\r\n    color: #9B9B9B;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 0.8rem;\r\n    letter-spacing: 0.04rem;\r\n}\r\n\r\n.date_input::placeholder {\r\n    color: #9B9B9B;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 0.8rem;\r\n    letter-spacing: 0.04rem;\r\n}\r\n\r\n.long_message {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 40px;\r\n    font-size: 0.7rem;\r\n    line-height: 0.9rem;\r\n    letter-spacing: 0.005rem;\r\n    padding-right: 20px;\r\n    -ms-flex-preferred-size: 100%;\r\n        flex-basis: 100%;\r\n    -ms-flex-negative: 1;\r\n        flex-shrink: 1;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\n.long_message, .long_message > div {\r\n    max-width: 100%;\r\n}\r\n\r\n.icon_wrapper {\r\n    border-radius: 2px;\r\n    height: 40px;\r\n    width: 44px;\r\n    -ms-flex-preferred-size: 44px;\r\n        flex-basis: 44px;\r\n    -ms-flex-negative: 0;\r\n        flex-shrink: 0;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex-positive: 0;\r\n            flex-grow: 0;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    background: url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='15px' height='17px' viewBox='0 0 15 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 43 (38999) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3ECalendar%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs/%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='TP-test-form' transform='translate(-505.000000, -287.000000)' fill='%234990E2'%3E %3Cg id='Wide-form' transform='translate(50.000000, 200.000000)'%3E %3Cg id='Input2' transform='translate(260.000000, 75.000000)'%3E %3Cpath d='M197,19.9977418 C197,19.9977418 197.001596,27.2488688 197,27 L208.002502,26.9989014 C208.000907,26.9989014 207.997314,19.9994507 207.997314,19.9994507 L197,19.9977418 L197,19.9977418 L197,19.9977418 Z M203,23 L207,23 L207,26 L203,26 L203,23 L203,23 L203,23 Z M210,18 L210,27 C210,28.105 209.105,29 208,29 L197,29 C195.895,29 195,28.105 195,27 L195,18 L210,18 L210,18 L210,18 Z M207,13.9994999 L207,13.0002501 C207,12.448112 206.552,12 206,12 L205,12 C204.448,12 204,12.448112 204,13.0002501 L204,13.9994999 L201,13.9994999 L201,13.0002501 C201,12.448112 200.552,12 200,12 L199,12 C198.448,12 198,12.448112 198,13.0002501 L198,13.9994999 L197,13.9994999 C195.895,13.9994999 195,14.8947237 195,16 L210,16 C210,14.8947237 209.105,13.9994999 208,13.9994999 L207,13.9994999 L207,13.9994999 L207,13.9994999 Z' id='Calendar'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\");\r\n    background-size: 15px 17px;\r\n    background-repeat: no-repeat;\r\n    background-position: center, center;\r\n}", ""]);
	
	// exports


/***/ },
/* 10 */
/*!**********************************!*\
  !*** ./src/css/widget_media.css ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../~/css-loader?importLoaders=1!../../~/postcss-loader!./widget_media.css */ 11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../~/style-loader/addStyles.js */ 4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?importLoaders=1!../../node_modules/postcss-loader/index.js!./widget_media.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?importLoaders=1!../../node_modules/postcss-loader/index.js!./widget_media.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/*!************************************************************************************!*\
  !*** ./~/css-loader?importLoaders=1!./~/postcss-loader!./src/css/widget_media.css ***!
  \************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, "@media only screen and (max-width: 970px) {\r\n    .long_message {\r\n        -ms-flex-preferred-size: 240px;\r\n            flex-basis: 240px;\r\n        -ms-flex-negative: 0;\r\n            flex-shrink: 0;\r\n        -webkit-box-flex: 0;\r\n            -ms-flex-positive: 0;\r\n                flex-grow: 0;\r\n    }\r\n\r\n    .button_search {\r\n        -ms-flex-negative: 1;\r\n            flex-shrink: 1;\r\n    }\r\n\r\n    .date_picker {\r\n        -ms-flex-negative: 1;\r\n            flex-shrink: 1;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .content {\r\n        -ms-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n    }\r\n\r\n    .long_message {\r\n        display: -webkit-inline-box;\r\n        display: -ms-inline-flexbox;\r\n        display: inline-flex;\r\n        height: auto;\r\n        -ms-flex-preferred-size: 100%;\r\n            flex-basis: 100%;\r\n        padding: 0 0 16px;\r\n    }\r\n\r\n    .date_picker {\r\n        min-width: 100px;\r\n        -ms-flex-preferred-size: 100px;\r\n            flex-basis: 100px;\r\n        max-width: 220px;\r\n        -ms-flex-negative: 1;\r\n            flex-shrink: 1;\r\n        -webkit-box-flex: 1;\r\n            -ms-flex-positive: 1;\r\n                flex-grow: 1;\r\n    }\r\n\r\n    .button_search {\r\n        max-width: 240px;\r\n        min-width: 100px;\r\n        margin-left: 8px;\r\n        -ms-flex-negative: 1;\r\n            flex-shrink: 1;\r\n        -webkit-box-flex: 1;\r\n            -ms-flex-positive: 1;\r\n                flex-grow: 1;\r\n        -ms-flex-preferred-size: 100px;\r\n            flex-basis: 100px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 570px) {\r\n    .header_message {\r\n        font-size: 1.11rem;\r\n        line-height: 2.8rem;\r\n    }\r\n\r\n    .long_message {\r\n        padding: 0 0 15px;\r\n    }\r\n\r\n    .content {\r\n        padding: 0;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .date_picker {\r\n        margin: 0;\r\n    }\r\n\r\n    .date_picker:nth-child(2) {\r\n        margin-right: 20px;\r\n    }\r\n\r\n    .button_search {\r\n        max-width: 100%;\r\n        -ms-flex-preferred-size: 100%;\r\n            flex-basis: 100%;\r\n        margin: 20px 0 0;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 440px) {\r\n    header {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n\r\n    .header_message:last-child {\r\n        padding: 0;\r\n        margin-top: -20px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 370px) {\r\n    .date_picker:nth-child(2) {\r\n        margin: 0;\r\n    }\r\n\r\n    .date_picker:nth-child(3) {\r\n        margin-top: 15px;\r\n    }\r\n\r\n    .date_picker {\r\n        -ms-flex-preferred-size: 100%;\r\n            flex-basis: 100%;\r\n        max-width: 100%;\r\n        -webkit-box-ordinal-group: 2;\r\n            -ms-flex-order: 1;\r\n                order: 1;\r\n    }\r\n\r\n    .button_search {\r\n        margin-top: 15px;\r\n        -webkit-box-ordinal-group: 3;\r\n            -ms-flex-order: 2;\r\n                order: 2;\r\n    }\r\n\r\n    .long_message {\r\n        padding: 15px 0 0;\r\n        -webkit-box-ordinal-group: 4;\r\n            -ms-flex-order: 3;\r\n                order: 3;\r\n    }\r\n\r\n    .content {\r\n        margin-top: 5px;\r\n    }\r\n}", ""]);
	
	// exports


/***/ },
/* 12 */
/*!*********************************!*\
  !*** ./src/images/calendar.svg ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = "<svg viewBox=\"0 0 15 17\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><title>Calendar</title><desc>Created with Sketch.</desc><defs></defs><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"TP-test-form\" transform=\"translate(-505.000000, -287.000000)\" fill=\"#4990E2\"><g id=\"Wide-form\" transform=\"translate(50.000000, 200.000000)\"><g id=\"Input2\" transform=\"translate(260.000000, 75.000000)\"><path d=\"M197,19.9977418 C197,19.9977418 197.001596,27.2488688 197,27 L208.002502,26.9989014 C208.000907,26.9989014 207.997314,19.9994507 207.997314,19.9994507 L197,19.9977418 L197,19.9977418 L197,19.9977418 Z M203,23 L207,23 L207,26 L203,26 L203,23 L203,23 L203,23 Z M210,18 L210,27 C210,28.105 209.105,29 208,29 L197,29 C195.895,29 195,28.105 195,27 L195,18 L210,18 L210,18 L210,18 Z M207,13.9994999 L207,13.0002501 C207,12.448112 206.552,12 206,12 L205,12 C204.448,12 204,12.448112 204,13.0002501 L204,13.9994999 L201,13.9994999 L201,13.0002501 C201,12.448112 200.552,12 200,12 L199,12 C198.448,12 198,12.448112 198,13.0002501 L198,13.9994999 L197,13.9994999 C195.895,13.9994999 195,14.8947237 195,16 L210,16 C210,14.8947237 209.105,13.9994999 208,13.9994999 L207,13.9994999 L207,13.9994999 L207,13.9994999 Z\" id=\"Calendar\"></path></g></g></g></g></svg>"

/***/ },
/* 13 */
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getQueryParams = getQueryParams;
	exports.validateColor = validateColor;
	exports.shadeColor = shadeColor;
	function getQueryParams(qs) {
	    var re = /[?&]?([^=]+)=([^&]*)/g;
	
	    qs = qs.split('+').join(' ');
	
	    var result = {};
	    var tokens = void 0;
	
	    while (tokens = re.exec(qs)) {
	        result[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	    }
	
	    return result;
	};
	
	function validateColor(color) {
	    return (/(^#[0-9A-F]{6}$)/i.test(color)
	    );
	};
	
	function shadeColor(color, percent) {
	    var f = parseInt(color.slice(1), 16);
	    var t = percent < 0 ? 0 : 255;
	    var p = percent < 0 ? percent * -1 : percent;
	
	    var R = f >> 16;
	    var G = f >> 8 & 0x00FF;
	    var B = f & 0x0000FF;
	
	    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
	};

/***/ }
/******/ ]);
//# sourceMappingURL=widget.js.map