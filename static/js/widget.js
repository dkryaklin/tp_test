/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(8);\n\n__webpack_require__(10);\n\nvar _calendar = __webpack_require__(12);\n\nvar _calendar2 = _interopRequireDefault(_calendar);\n\nvar _utils = __webpack_require__(13);\n\nvar utils = _interopRequireWildcard(_utils);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar queryParams = utils.getQueryParams(document.location.search);\n\nvar bodyElem = document.querySelector('body');\n\nif (queryParams.buttonColor && utils.validateColor('#' + queryParams.buttonColor)) {\n    var buttonColor = '#' + queryParams.buttonColor;\n    var buttonSearch = document.querySelector('.button_search');\n\n    buttonSearch.style.backgroundColor = buttonColor;\n    buttonSearch.style.borderBottomColor = utils.shadeColor(buttonColor, -0.2);\n}\n\nif (queryParams.backColor && utils.validateColor('#' + queryParams.backColor)) {\n    var backColor = '#' + queryParams.backColor;\n    bodyElem.style.backgroundColor = backColor;\n\n    var encodedIcon = window.btoa(_calendar2.default.replace('fill=\"#4990E2\"', 'fill=\"' + backColor + '\"'));\n    var calendarButtons = document.querySelectorAll('.icon_wrapper');\n\n    for (var i = 0; i < calendarButtons.length; i++) {\n        calendarButtons[i].style.backgroundImage = 'url(data:image/svg+xml;base64,' + encodedIcon + ')';\n    }\n}\n\nif (queryParams.textColor && utils.validateColor('#' + queryParams.textColor)) {\n    var textColor = '#' + queryParams.textColor;\n    bodyElem.style.color = textColor;\n}\n\nbodyElem.style.display = 'block';\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/widget.js\n// module id = 0\n// module chunks = 2\n//# sourceURL=webpack:///./src/widget.js?");

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\nmodule.exports = function() {\r\n\tvar list = [];\r\n\r\n\t// return the list of modules as css string\r\n\tlist.toString = function toString() {\r\n\t\tvar result = [];\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar item = this[i];\r\n\t\t\tif(item[2]) {\r\n\t\t\t\tresult.push(\"@media \" + item[2] + \"{\" + item[1] + \"}\");\r\n\t\t\t} else {\r\n\t\t\t\tresult.push(item[1]);\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn result.join(\"\");\r\n\t};\r\n\r\n\t// import a list of modules into the list\r\n\tlist.i = function(modules, mediaQuery) {\r\n\t\tif(typeof modules === \"string\")\r\n\t\t\tmodules = [[null, modules, \"\"]];\r\n\t\tvar alreadyImportedModules = {};\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar id = this[i][0];\r\n\t\t\tif(typeof id === \"number\")\r\n\t\t\t\talreadyImportedModules[id] = true;\r\n\t\t}\r\n\t\tfor(i = 0; i < modules.length; i++) {\r\n\t\t\tvar item = modules[i];\r\n\t\t\t// skip already imported module\r\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\r\n\t\t\t//  when a module is imported multiple times with different media queries.\r\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\r\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\r\n\t\t\t\tif(mediaQuery && !item[2]) {\r\n\t\t\t\t\titem[2] = mediaQuery;\r\n\t\t\t\t} else if(mediaQuery) {\r\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\r\n\t\t\t\t}\r\n\t\t\t\tlist.push(item);\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\treturn list;\r\n};\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader/lib/css-base.js\n// module id = 3\n// module chunks = 0 2\n//# sourceURL=webpack:///./~/css-loader/lib/css-base.js?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\nvar stylesInDom = {},\r\n\tmemoize = function(fn) {\r\n\t\tvar memo;\r\n\t\treturn function () {\r\n\t\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\r\n\t\t\treturn memo;\r\n\t\t};\r\n\t},\r\n\tisOldIE = memoize(function() {\r\n\t\treturn /msie [6-9]\\b/.test(window.navigator.userAgent.toLowerCase());\r\n\t}),\r\n\tgetHeadElement = memoize(function () {\r\n\t\treturn document.head || document.getElementsByTagName(\"head\")[0];\r\n\t}),\r\n\tsingletonElement = null,\r\n\tsingletonCounter = 0,\r\n\tstyleElementsInsertedAtTop = [];\r\n\r\nmodule.exports = function(list, options) {\r\n\tif(false) {\r\n\t\tif(typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\r\n\t}\r\n\r\n\toptions = options || {};\r\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\r\n\t// tags it will allow on a page\r\n\tif (typeof options.singleton === \"undefined\") options.singleton = isOldIE();\r\n\r\n\t// By default, add <style> tags to the bottom of <head>.\r\n\tif (typeof options.insertAt === \"undefined\") options.insertAt = \"bottom\";\r\n\r\n\tvar styles = listToStyles(list);\r\n\taddStylesToDom(styles, options);\r\n\r\n\treturn function update(newList) {\r\n\t\tvar mayRemove = [];\r\n\t\tfor(var i = 0; i < styles.length; i++) {\r\n\t\t\tvar item = styles[i];\r\n\t\t\tvar domStyle = stylesInDom[item.id];\r\n\t\t\tdomStyle.refs--;\r\n\t\t\tmayRemove.push(domStyle);\r\n\t\t}\r\n\t\tif(newList) {\r\n\t\t\tvar newStyles = listToStyles(newList);\r\n\t\t\taddStylesToDom(newStyles, options);\r\n\t\t}\r\n\t\tfor(var i = 0; i < mayRemove.length; i++) {\r\n\t\t\tvar domStyle = mayRemove[i];\r\n\t\t\tif(domStyle.refs === 0) {\r\n\t\t\t\tfor(var j = 0; j < domStyle.parts.length; j++)\r\n\t\t\t\t\tdomStyle.parts[j]();\r\n\t\t\t\tdelete stylesInDom[domStyle.id];\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n}\r\n\r\nfunction addStylesToDom(styles, options) {\r\n\tfor(var i = 0; i < styles.length; i++) {\r\n\t\tvar item = styles[i];\r\n\t\tvar domStyle = stylesInDom[item.id];\r\n\t\tif(domStyle) {\r\n\t\t\tdomStyle.refs++;\r\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\r\n\t\t\t}\r\n\t\t\tfor(; j < item.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tvar parts = [];\r\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\r\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction listToStyles(list) {\r\n\tvar styles = [];\r\n\tvar newStyles = {};\r\n\tfor(var i = 0; i < list.length; i++) {\r\n\t\tvar item = list[i];\r\n\t\tvar id = item[0];\r\n\t\tvar css = item[1];\r\n\t\tvar media = item[2];\r\n\t\tvar sourceMap = item[3];\r\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\r\n\t\tif(!newStyles[id])\r\n\t\t\tstyles.push(newStyles[id] = {id: id, parts: [part]});\r\n\t\telse\r\n\t\t\tnewStyles[id].parts.push(part);\r\n\t}\r\n\treturn styles;\r\n}\r\n\r\nfunction insertStyleElement(options, styleElement) {\r\n\tvar head = getHeadElement();\r\n\tvar lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];\r\n\tif (options.insertAt === \"top\") {\r\n\t\tif(!lastStyleElementInsertedAtTop) {\r\n\t\t\thead.insertBefore(styleElement, head.firstChild);\r\n\t\t} else if(lastStyleElementInsertedAtTop.nextSibling) {\r\n\t\t\thead.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);\r\n\t\t} else {\r\n\t\t\thead.appendChild(styleElement);\r\n\t\t}\r\n\t\tstyleElementsInsertedAtTop.push(styleElement);\r\n\t} else if (options.insertAt === \"bottom\") {\r\n\t\thead.appendChild(styleElement);\r\n\t} else {\r\n\t\tthrow new Error(\"Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.\");\r\n\t}\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n\tstyleElement.parentNode.removeChild(styleElement);\r\n\tvar idx = styleElementsInsertedAtTop.indexOf(styleElement);\r\n\tif(idx >= 0) {\r\n\t\tstyleElementsInsertedAtTop.splice(idx, 1);\r\n\t}\r\n}\r\n\r\nfunction createStyleElement(options) {\r\n\tvar styleElement = document.createElement(\"style\");\r\n\tstyleElement.type = \"text/css\";\r\n\tinsertStyleElement(options, styleElement);\r\n\treturn styleElement;\r\n}\r\n\r\nfunction createLinkElement(options) {\r\n\tvar linkElement = document.createElement(\"link\");\r\n\tlinkElement.rel = \"stylesheet\";\r\n\tinsertStyleElement(options, linkElement);\r\n\treturn linkElement;\r\n}\r\n\r\nfunction addStyle(obj, options) {\r\n\tvar styleElement, update, remove;\r\n\r\n\tif (options.singleton) {\r\n\t\tvar styleIndex = singletonCounter++;\r\n\t\tstyleElement = singletonElement || (singletonElement = createStyleElement(options));\r\n\t\tupdate = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\r\n\t\tremove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\r\n\t} else if(obj.sourceMap &&\r\n\t\ttypeof URL === \"function\" &&\r\n\t\ttypeof URL.createObjectURL === \"function\" &&\r\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\r\n\t\ttypeof Blob === \"function\" &&\r\n\t\ttypeof btoa === \"function\") {\r\n\t\tstyleElement = createLinkElement(options);\r\n\t\tupdate = updateLink.bind(null, styleElement);\r\n\t\tremove = function() {\r\n\t\t\tremoveStyleElement(styleElement);\r\n\t\t\tif(styleElement.href)\r\n\t\t\t\tURL.revokeObjectURL(styleElement.href);\r\n\t\t};\r\n\t} else {\r\n\t\tstyleElement = createStyleElement(options);\r\n\t\tupdate = applyToTag.bind(null, styleElement);\r\n\t\tremove = function() {\r\n\t\t\tremoveStyleElement(styleElement);\r\n\t\t};\r\n\t}\r\n\r\n\tupdate(obj);\r\n\r\n\treturn function updateStyle(newObj) {\r\n\t\tif(newObj) {\r\n\t\t\tif(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\r\n\t\t\t\treturn;\r\n\t\t\tupdate(obj = newObj);\r\n\t\t} else {\r\n\t\t\tremove();\r\n\t\t}\r\n\t};\r\n}\r\n\r\nvar replaceText = (function () {\r\n\tvar textStore = [];\r\n\r\n\treturn function (index, replacement) {\r\n\t\ttextStore[index] = replacement;\r\n\t\treturn textStore.filter(Boolean).join('\\n');\r\n\t};\r\n})();\r\n\r\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\r\n\tvar css = remove ? \"\" : obj.css;\r\n\r\n\tif (styleElement.styleSheet) {\r\n\t\tstyleElement.styleSheet.cssText = replaceText(index, css);\r\n\t} else {\r\n\t\tvar cssNode = document.createTextNode(css);\r\n\t\tvar childNodes = styleElement.childNodes;\r\n\t\tif (childNodes[index]) styleElement.removeChild(childNodes[index]);\r\n\t\tif (childNodes.length) {\r\n\t\t\tstyleElement.insertBefore(cssNode, childNodes[index]);\r\n\t\t} else {\r\n\t\t\tstyleElement.appendChild(cssNode);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction applyToTag(styleElement, obj) {\r\n\tvar css = obj.css;\r\n\tvar media = obj.media;\r\n\r\n\tif(media) {\r\n\t\tstyleElement.setAttribute(\"media\", media)\r\n\t}\r\n\r\n\tif(styleElement.styleSheet) {\r\n\t\tstyleElement.styleSheet.cssText = css;\r\n\t} else {\r\n\t\twhile(styleElement.firstChild) {\r\n\t\t\tstyleElement.removeChild(styleElement.firstChild);\r\n\t\t}\r\n\t\tstyleElement.appendChild(document.createTextNode(css));\r\n\t}\r\n}\r\n\r\nfunction updateLink(linkElement, obj) {\r\n\tvar css = obj.css;\r\n\tvar sourceMap = obj.sourceMap;\r\n\r\n\tif(sourceMap) {\r\n\t\t// http://stackoverflow.com/a/26603875\r\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\r\n\t}\r\n\r\n\tvar blob = new Blob([css], { type: \"text/css\" });\r\n\r\n\tvar oldSrc = linkElement.href;\r\n\r\n\tlinkElement.href = URL.createObjectURL(blob);\r\n\r\n\tif(oldSrc)\r\n\t\tURL.revokeObjectURL(oldSrc);\r\n}\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/style-loader/addStyles.js\n// module id = 4\n// module chunks = 0 2\n//# sourceURL=webpack:///./~/style-loader/addStyles.js?");

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(9);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(4)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../node_modules/css-loader/index.js?importLoaders=1!../../node_modules/postcss-loader/index.js!./widget_main.css\", function() {\n\t\t\tvar newContent = require(\"!!../../node_modules/css-loader/index.js?importLoaders=1!../../node_modules/postcss-loader/index.js!./widget_main.css\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/css/widget_main.css\n// module id = 8\n// module chunks = 2\n//# sourceURL=webpack:///./src/css/widget_main.css?");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(3)();\n// imports\n\n\n// module\nexports.push([module.id, \"body, html {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    display: none;\\r\\n    padding: 0 20px 20px;\\r\\n    color: #fff;\\r\\n    background-color: #4A90E2;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    max-width: 1024px;\\r\\n    min-width: 270px;\\r\\n    overflow: hidden;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nheader {\\r\\n    display: -webkit-box;\\r\\n    display: -ms-flexbox;\\r\\n    display: flex;\\r\\n    -webkit-box-orient: horizontal;\\r\\n    -webkit-box-direction: normal;\\r\\n        -ms-flex-direction: row;\\r\\n            flex-direction: row;\\r\\n}\\r\\n\\r\\n.header_message {\\r\\n    font-size: 1.5rem;\\r\\n    line-height: 2.2rem;\\r\\n    letter-spacing: 0.02rem;\\r\\n}\\r\\n\\r\\n.header_message:last-child {\\r\\n    padding-left: 7px;\\r\\n}\\r\\n\\r\\n.content {\\r\\n    display: -webkit-box;\\r\\n    display: -ms-flexbox;\\r\\n    display: flex;\\r\\n    -webkit-box-orient: horizontal;\\r\\n    -webkit-box-direction: normal;\\r\\n        -ms-flex-direction: row;\\r\\n            flex-direction: row;\\r\\n    -ms-flex-wrap: nowrap;\\r\\n        flex-wrap: nowrap;\\r\\n    padding-top: 10px;\\r\\n}\\r\\n\\r\\n.button_search {\\r\\n    color: inherit;\\r\\n    height: 40px;\\r\\n    width: 240px;\\r\\n    background-color: #F5A623;\\r\\n    box-sizing: border-box;\\r\\n    border: 0px solid;\\r\\n    border-bottom: 2px solid #DC951F;\\r\\n    border-radius: 2px;\\r\\n    -ms-flex-negative: 0;\\r\\n        flex-shrink: 0;\\r\\n    outline: none;\\r\\n    cursor: pointer;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 1.2rem;\\r\\n    text-transform: uppercase;\\r\\n    letter-spacing: 0.1rem;\\r\\n}\\r\\n\\r\\n.date_picker {\\r\\n    width: 200px;\\r\\n    height: 40px;\\r\\n    margin-right: 20px;\\r\\n    -ms-flex-negative: 0;\\r\\n        flex-shrink: 0;\\r\\n    display: -webkit-box;\\r\\n    display: -ms-flexbox;\\r\\n    display: flex;\\r\\n    -webkit-box-align: center;\\r\\n        -ms-flex-align: center;\\r\\n            align-items: center;\\r\\n    background-color: #fff;\\r\\n    border-radius: 2px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.date_input {\\r\\n    height: 40px;\\r\\n    border-radius: 2px;\\r\\n    line-height: 40px;\\r\\n    width: 100%;\\r\\n    -ms-flex-preferred-size: 100%;\\r\\n        flex-basis: 100%;\\r\\n    -webkit-box-flex: 1;\\r\\n        -ms-flex-positive: 1;\\r\\n            flex-grow: 1;\\r\\n    -ms-flex-negative: 1;\\r\\n        flex-shrink: 1;\\r\\n    border: none;\\r\\n    padding: 0 0 0 10px;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 0.8rem;\\r\\n    letter-spacing: 0.04rem;\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n.date_input::-ms-clear {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.date_input::-webkit-input-placeholder {\\r\\n    color: #9B9B9B;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 0.8rem;\\r\\n    letter-spacing: 0.04rem;\\r\\n}\\r\\n\\r\\n.date_input::-moz-placeholder {\\r\\n    color: #9B9B9B;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 0.8rem;\\r\\n    letter-spacing: 0.04rem;\\r\\n}\\r\\n\\r\\n.date_input:-ms-input-placeholder {\\r\\n    color: #9B9B9B;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 0.8rem;\\r\\n    letter-spacing: 0.04rem;\\r\\n}\\r\\n\\r\\n.date_input::placeholder {\\r\\n    color: #9B9B9B;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-size: 0.8rem;\\r\\n    letter-spacing: 0.04rem;\\r\\n}\\r\\n\\r\\n.long_message {\\r\\n    display: -webkit-box;\\r\\n    display: -ms-flexbox;\\r\\n    display: flex;\\r\\n    -webkit-box-align: center;\\r\\n        -ms-flex-align: center;\\r\\n            align-items: center;\\r\\n    height: 40px;\\r\\n    font-size: 0.7rem;\\r\\n    line-height: 0.9rem;\\r\\n    letter-spacing: 0.005rem;\\r\\n    padding-right: 20px;\\r\\n    -ms-flex-preferred-size: 100%;\\r\\n        flex-basis: 100%;\\r\\n    -ms-flex-negative: 1;\\r\\n        flex-shrink: 1;\\r\\n    -webkit-box-flex: 1;\\r\\n        -ms-flex-positive: 1;\\r\\n            flex-grow: 1;\\r\\n    -ms-flex-wrap: wrap;\\r\\n        flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.long_message, .long_message > div {\\r\\n    max-width: 100%;\\r\\n}\\r\\n\\r\\n.icon_wrapper {\\r\\n    border-radius: 2px;\\r\\n    height: 40px;\\r\\n    width: 44px;\\r\\n    -ms-flex-preferred-size: 44px;\\r\\n        flex-basis: 44px;\\r\\n    -ms-flex-negative: 0;\\r\\n        flex-shrink: 0;\\r\\n    -webkit-box-flex: 0;\\r\\n        -ms-flex-positive: 0;\\r\\n            flex-grow: 0;\\r\\n    cursor: pointer;\\r\\n    background-color: #fff;\\r\\n    background: url(\\\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='15px' height='17px' viewBox='0 0 15 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 43 (38999) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3ECalendar%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs/%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='TP-test-form' transform='translate(-505.000000, -287.000000)' fill='%234990E2'%3E %3Cg id='Wide-form' transform='translate(50.000000, 200.000000)'%3E %3Cg id='Input2' transform='translate(260.000000, 75.000000)'%3E %3Cpath d='M197,19.9977418 C197,19.9977418 197.001596,27.2488688 197,27 L208.002502,26.9989014 C208.000907,26.9989014 207.997314,19.9994507 207.997314,19.9994507 L197,19.9977418 L197,19.9977418 L197,19.9977418 Z M203,23 L207,23 L207,26 L203,26 L203,23 L203,23 L203,23 Z M210,18 L210,27 C210,28.105 209.105,29 208,29 L197,29 C195.895,29 195,28.105 195,27 L195,18 L210,18 L210,18 L210,18 Z M207,13.9994999 L207,13.0002501 C207,12.448112 206.552,12 206,12 L205,12 C204.448,12 204,12.448112 204,13.0002501 L204,13.9994999 L201,13.9994999 L201,13.0002501 C201,12.448112 200.552,12 200,12 L199,12 C198.448,12 198,12.448112 198,13.0002501 L198,13.9994999 L197,13.9994999 C195.895,13.9994999 195,14.8947237 195,16 L210,16 C210,14.8947237 209.105,13.9994999 208,13.9994999 L207,13.9994999 L207,13.9994999 L207,13.9994999 Z' id='Calendar'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\\\");\\r\\n    background-size: 15px 17px;\\r\\n    background-repeat: no-repeat;\\r\\n    background-position: center, center;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader?importLoaders=1!./~/postcss-loader!./src/css/widget_main.css\n// module id = 9\n// module chunks = 2\n//# sourceURL=webpack:///./src/css/widget_main.css?./~/css-loader?importLoaders=1!./~/postcss-loader");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(11);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(4)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!../../node_modules/css-loader/index.js?importLoaders=1!../../node_modules/postcss-loader/index.js!./widget_media.css\", function() {\n\t\t\tvar newContent = require(\"!!../../node_modules/css-loader/index.js?importLoaders=1!../../node_modules/postcss-loader/index.js!./widget_media.css\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/css/widget_media.css\n// module id = 10\n// module chunks = 2\n//# sourceURL=webpack:///./src/css/widget_media.css?");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(3)();\n// imports\n\n\n// module\nexports.push([module.id, \"@media only screen and (max-width: 970px) {\\r\\n    .long_message {\\r\\n        -ms-flex-preferred-size: 240px;\\r\\n            flex-basis: 240px;\\r\\n        -ms-flex-negative: 0;\\r\\n            flex-shrink: 0;\\r\\n        -webkit-box-flex: 0;\\r\\n            -ms-flex-positive: 0;\\r\\n                flex-grow: 0;\\r\\n    }\\r\\n\\r\\n    .button_search {\\r\\n        -ms-flex-negative: 1;\\r\\n            flex-shrink: 1;\\r\\n    }\\r\\n\\r\\n    .date_picker {\\r\\n        -ms-flex-negative: 1;\\r\\n            flex-shrink: 1;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 768px) {\\r\\n    .content {\\r\\n        -ms-flex-wrap: wrap;\\r\\n            flex-wrap: wrap;\\r\\n    }\\r\\n\\r\\n    .long_message {\\r\\n        display: -webkit-inline-box;\\r\\n        display: -ms-inline-flexbox;\\r\\n        display: inline-flex;\\r\\n        height: auto;\\r\\n        -ms-flex-preferred-size: 100%;\\r\\n            flex-basis: 100%;\\r\\n        padding: 0 0 16px;\\r\\n    }\\r\\n\\r\\n    .date_picker {\\r\\n        min-width: 100px;\\r\\n        -ms-flex-preferred-size: 100px;\\r\\n            flex-basis: 100px;\\r\\n        max-width: 220px;\\r\\n        -ms-flex-negative: 1;\\r\\n            flex-shrink: 1;\\r\\n        -webkit-box-flex: 1;\\r\\n            -ms-flex-positive: 1;\\r\\n                flex-grow: 1;\\r\\n    }\\r\\n\\r\\n    .button_search {\\r\\n        max-width: 240px;\\r\\n        min-width: 100px;\\r\\n        margin-left: 8px;\\r\\n        -ms-flex-negative: 1;\\r\\n            flex-shrink: 1;\\r\\n        -webkit-box-flex: 1;\\r\\n            -ms-flex-positive: 1;\\r\\n                flex-grow: 1;\\r\\n        -ms-flex-preferred-size: 100px;\\r\\n            flex-basis: 100px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 570px) {\\r\\n    .header_message {\\r\\n        font-size: 1.11rem;\\r\\n        line-height: 2.8rem;\\r\\n    }\\r\\n\\r\\n    .long_message {\\r\\n        padding: 0 0 15px;\\r\\n    }\\r\\n\\r\\n    .content {\\r\\n        padding: 0;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 500px) {\\r\\n    .date_picker {\\r\\n        margin: 0;\\r\\n    }\\r\\n\\r\\n    .date_picker:nth-child(2) {\\r\\n        margin-right: 20px;\\r\\n    }\\r\\n\\r\\n    .button_search {\\r\\n        max-width: 100%;\\r\\n        -ms-flex-preferred-size: 100%;\\r\\n            flex-basis: 100%;\\r\\n        margin: 20px 0 0;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 440px) {\\r\\n    header {\\r\\n        display: -webkit-box;\\r\\n        display: -ms-flexbox;\\r\\n        display: flex;\\r\\n        -webkit-box-orient: vertical;\\r\\n        -webkit-box-direction: normal;\\r\\n            -ms-flex-direction: column;\\r\\n                flex-direction: column;\\r\\n    }\\r\\n\\r\\n    .header_message:last-child {\\r\\n        padding: 0;\\r\\n        margin-top: -20px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 370px) {\\r\\n    .date_picker:nth-child(2) {\\r\\n        margin: 0;\\r\\n    }\\r\\n\\r\\n    .date_picker:nth-child(3) {\\r\\n        margin-top: 15px;\\r\\n    }\\r\\n\\r\\n    .date_picker {\\r\\n        -ms-flex-preferred-size: 100%;\\r\\n            flex-basis: 100%;\\r\\n        max-width: 100%;\\r\\n        -webkit-box-ordinal-group: 2;\\r\\n            -ms-flex-order: 1;\\r\\n                order: 1;\\r\\n    }\\r\\n\\r\\n    .button_search {\\r\\n        margin-top: 15px;\\r\\n        -webkit-box-ordinal-group: 3;\\r\\n            -ms-flex-order: 2;\\r\\n                order: 2;\\r\\n    }\\r\\n\\r\\n    .long_message {\\r\\n        padding: 15px 0 0;\\r\\n        -webkit-box-ordinal-group: 4;\\r\\n            -ms-flex-order: 3;\\r\\n                order: 3;\\r\\n    }\\r\\n\\r\\n    .content {\\r\\n        margin-top: 5px;\\r\\n    }\\r\\n}\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader?importLoaders=1!./~/postcss-loader!./src/css/widget_media.css\n// module id = 11\n// module chunks = 2\n//# sourceURL=webpack:///./src/css/widget_media.css?./~/css-loader?importLoaders=1!./~/postcss-loader");

/***/ },
/* 12 */
/***/ function(module, exports) {

	eval("module.exports = \"<svg viewBox=\\\"0 0 15 17\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\"><title>Calendar</title><desc>Created with Sketch.</desc><defs></defs><g id=\\\"Page-1\\\" stroke=\\\"none\\\" stroke-width=\\\"1\\\" fill=\\\"none\\\" fill-rule=\\\"evenodd\\\"><g id=\\\"TP-test-form\\\" transform=\\\"translate(-505.000000, -287.000000)\\\" fill=\\\"#4990E2\\\"><g id=\\\"Wide-form\\\" transform=\\\"translate(50.000000, 200.000000)\\\"><g id=\\\"Input2\\\" transform=\\\"translate(260.000000, 75.000000)\\\"><path d=\\\"M197,19.9977418 C197,19.9977418 197.001596,27.2488688 197,27 L208.002502,26.9989014 C208.000907,26.9989014 207.997314,19.9994507 207.997314,19.9994507 L197,19.9977418 L197,19.9977418 L197,19.9977418 Z M203,23 L207,23 L207,26 L203,26 L203,23 L203,23 L203,23 Z M210,18 L210,27 C210,28.105 209.105,29 208,29 L197,29 C195.895,29 195,28.105 195,27 L195,18 L210,18 L210,18 L210,18 Z M207,13.9994999 L207,13.0002501 C207,12.448112 206.552,12 206,12 L205,12 C204.448,12 204,12.448112 204,13.0002501 L204,13.9994999 L201,13.9994999 L201,13.0002501 C201,12.448112 200.552,12 200,12 L199,12 C198.448,12 198,12.448112 198,13.0002501 L198,13.9994999 L197,13.9994999 C195.895,13.9994999 195,14.8947237 195,16 L210,16 C210,14.8947237 209.105,13.9994999 208,13.9994999 L207,13.9994999 L207,13.9994999 L207,13.9994999 Z\\\" id=\\\"Calendar\\\"></path></g></g></g></g></svg>\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/images/calendar.svg\n// module id = 12\n// module chunks = 2\n//# sourceURL=webpack:///./src/images/calendar.svg?");

/***/ },
/* 13 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getQueryParams = getQueryParams;\nexports.validateColor = validateColor;\nexports.shadeColor = shadeColor;\nfunction getQueryParams(qs) {\n    var re = /[?&]?([^=]+)=([^&]*)/g;\n\n    qs = qs.split('+').join(' ');\n\n    var result = {};\n    var tokens = void 0;\n\n    while (tokens = re.exec(qs)) {\n        result[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);\n    }\n\n    return result;\n};\n\nfunction validateColor(color) {\n    return (/(^#[0-9A-F]{6}$)/i.test(color)\n    );\n};\n\nfunction shadeColor(color, percent) {\n    var f = parseInt(color.slice(1), 16);\n    var t = percent < 0 ? 0 : 255;\n    var p = percent < 0 ? percent * -1 : percent;\n\n    var R = f >> 16;\n    var G = f >> 8 & 0x00FF;\n    var B = f & 0x0000FF;\n\n    return \"#\" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/utils.js\n// module id = 13\n// module chunks = 2\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }
/******/ ]);