webpackJsonp([0],[
/* 0 */
/*!*******************************!*\
  !*** ./app/core/bootstrap.ts ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\n__webpack_require__(/*! ../index.scss */ 1);\r\n__webpack_require__(/*! ./modules.ts */ 5);\r\n__webpack_require__(/*! ./components.ts */ 9);\r\n__webpack_require__(/*! ./routing.ts */ 24);\r\nangular.element(document).ready(function () {\r\n    angular.bootstrap(document, ['app'], {\r\n        strictDi: true\r\n    });\r\n});\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/core/bootstrap.ts\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/core/bootstrap.ts?");

/***/ },
/* 1 */
/*!************************!*\
  !*** ./app/index.scss ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !./../~/css-loader!./../~/postcss-loader!./../~/sass-loader!./index.scss */ 2);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 4)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./index.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./index.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/index.scss\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/index.scss?");

/***/ },
/* 2 */
/*!**************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./app/index.scss ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 3)();\n// imports\n\n\n// module\nexports.push([module.id, \"body {\\n  color: red; }\\n\\n:-webkit-full-screen a {\\n  display: -webkit-box;\\n  display: flex; }\\n\\n:-moz-full-screen a {\\n  display: flex; }\\n\\n:-ms-fullscreen a {\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\n:fullscreen a {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\", \"\"]);\n\n// exports\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./app/index.scss\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/index.scss?./~/css-loader!./~/postcss-loader!./~/sass-loader");

/***/ },
/* 3 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\nmodule.exports = function() {\r\n\tvar list = [];\r\n\r\n\t// return the list of modules as css string\r\n\tlist.toString = function toString() {\r\n\t\tvar result = [];\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar item = this[i];\r\n\t\t\tif(item[2]) {\r\n\t\t\t\tresult.push(\"@media \" + item[2] + \"{\" + item[1] + \"}\");\r\n\t\t\t} else {\r\n\t\t\t\tresult.push(item[1]);\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn result.join(\"\");\r\n\t};\r\n\r\n\t// import a list of modules into the list\r\n\tlist.i = function(modules, mediaQuery) {\r\n\t\tif(typeof modules === \"string\")\r\n\t\t\tmodules = [[null, modules, \"\"]];\r\n\t\tvar alreadyImportedModules = {};\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar id = this[i][0];\r\n\t\t\tif(typeof id === \"number\")\r\n\t\t\t\talreadyImportedModules[id] = true;\r\n\t\t}\r\n\t\tfor(i = 0; i < modules.length; i++) {\r\n\t\t\tvar item = modules[i];\r\n\t\t\t// skip already imported module\r\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\r\n\t\t\t//  when a module is imported multiple times with different media queries.\r\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\r\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\r\n\t\t\t\tif(mediaQuery && !item[2]) {\r\n\t\t\t\t\titem[2] = mediaQuery;\r\n\t\t\t\t} else if(mediaQuery) {\r\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\r\n\t\t\t\t}\r\n\t\t\t\tlist.push(item);\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\treturn list;\r\n};\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader/lib/css-base.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/css-loader/lib/css-base.js?");

/***/ },
/* 4 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\nvar stylesInDom = {},\r\n\tmemoize = function(fn) {\r\n\t\tvar memo;\r\n\t\treturn function () {\r\n\t\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\r\n\t\t\treturn memo;\r\n\t\t};\r\n\t},\r\n\tisOldIE = memoize(function() {\r\n\t\treturn /msie [6-9]\\b/.test(window.navigator.userAgent.toLowerCase());\r\n\t}),\r\n\tgetHeadElement = memoize(function () {\r\n\t\treturn document.head || document.getElementsByTagName(\"head\")[0];\r\n\t}),\r\n\tsingletonElement = null,\r\n\tsingletonCounter = 0,\r\n\tstyleElementsInsertedAtTop = [];\r\n\r\nmodule.exports = function(list, options) {\r\n\tif(false) {\r\n\t\tif(typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\r\n\t}\r\n\r\n\toptions = options || {};\r\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\r\n\t// tags it will allow on a page\r\n\tif (typeof options.singleton === \"undefined\") options.singleton = isOldIE();\r\n\r\n\t// By default, add <style> tags to the bottom of <head>.\r\n\tif (typeof options.insertAt === \"undefined\") options.insertAt = \"bottom\";\r\n\r\n\tvar styles = listToStyles(list);\r\n\taddStylesToDom(styles, options);\r\n\r\n\treturn function update(newList) {\r\n\t\tvar mayRemove = [];\r\n\t\tfor(var i = 0; i < styles.length; i++) {\r\n\t\t\tvar item = styles[i];\r\n\t\t\tvar domStyle = stylesInDom[item.id];\r\n\t\t\tdomStyle.refs--;\r\n\t\t\tmayRemove.push(domStyle);\r\n\t\t}\r\n\t\tif(newList) {\r\n\t\t\tvar newStyles = listToStyles(newList);\r\n\t\t\taddStylesToDom(newStyles, options);\r\n\t\t}\r\n\t\tfor(var i = 0; i < mayRemove.length; i++) {\r\n\t\t\tvar domStyle = mayRemove[i];\r\n\t\t\tif(domStyle.refs === 0) {\r\n\t\t\t\tfor(var j = 0; j < domStyle.parts.length; j++)\r\n\t\t\t\t\tdomStyle.parts[j]();\r\n\t\t\t\tdelete stylesInDom[domStyle.id];\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n}\r\n\r\nfunction addStylesToDom(styles, options) {\r\n\tfor(var i = 0; i < styles.length; i++) {\r\n\t\tvar item = styles[i];\r\n\t\tvar domStyle = stylesInDom[item.id];\r\n\t\tif(domStyle) {\r\n\t\t\tdomStyle.refs++;\r\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\r\n\t\t\t}\r\n\t\t\tfor(; j < item.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tvar parts = [];\r\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\r\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction listToStyles(list) {\r\n\tvar styles = [];\r\n\tvar newStyles = {};\r\n\tfor(var i = 0; i < list.length; i++) {\r\n\t\tvar item = list[i];\r\n\t\tvar id = item[0];\r\n\t\tvar css = item[1];\r\n\t\tvar media = item[2];\r\n\t\tvar sourceMap = item[3];\r\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\r\n\t\tif(!newStyles[id])\r\n\t\t\tstyles.push(newStyles[id] = {id: id, parts: [part]});\r\n\t\telse\r\n\t\t\tnewStyles[id].parts.push(part);\r\n\t}\r\n\treturn styles;\r\n}\r\n\r\nfunction insertStyleElement(options, styleElement) {\r\n\tvar head = getHeadElement();\r\n\tvar lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];\r\n\tif (options.insertAt === \"top\") {\r\n\t\tif(!lastStyleElementInsertedAtTop) {\r\n\t\t\thead.insertBefore(styleElement, head.firstChild);\r\n\t\t} else if(lastStyleElementInsertedAtTop.nextSibling) {\r\n\t\t\thead.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);\r\n\t\t} else {\r\n\t\t\thead.appendChild(styleElement);\r\n\t\t}\r\n\t\tstyleElementsInsertedAtTop.push(styleElement);\r\n\t} else if (options.insertAt === \"bottom\") {\r\n\t\thead.appendChild(styleElement);\r\n\t} else {\r\n\t\tthrow new Error(\"Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.\");\r\n\t}\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n\tstyleElement.parentNode.removeChild(styleElement);\r\n\tvar idx = styleElementsInsertedAtTop.indexOf(styleElement);\r\n\tif(idx >= 0) {\r\n\t\tstyleElementsInsertedAtTop.splice(idx, 1);\r\n\t}\r\n}\r\n\r\nfunction createStyleElement(options) {\r\n\tvar styleElement = document.createElement(\"style\");\r\n\tstyleElement.type = \"text/css\";\r\n\tinsertStyleElement(options, styleElement);\r\n\treturn styleElement;\r\n}\r\n\r\nfunction createLinkElement(options) {\r\n\tvar linkElement = document.createElement(\"link\");\r\n\tlinkElement.rel = \"stylesheet\";\r\n\tinsertStyleElement(options, linkElement);\r\n\treturn linkElement;\r\n}\r\n\r\nfunction addStyle(obj, options) {\r\n\tvar styleElement, update, remove;\r\n\r\n\tif (options.singleton) {\r\n\t\tvar styleIndex = singletonCounter++;\r\n\t\tstyleElement = singletonElement || (singletonElement = createStyleElement(options));\r\n\t\tupdate = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\r\n\t\tremove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\r\n\t} else if(obj.sourceMap &&\r\n\t\ttypeof URL === \"function\" &&\r\n\t\ttypeof URL.createObjectURL === \"function\" &&\r\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\r\n\t\ttypeof Blob === \"function\" &&\r\n\t\ttypeof btoa === \"function\") {\r\n\t\tstyleElement = createLinkElement(options);\r\n\t\tupdate = updateLink.bind(null, styleElement);\r\n\t\tremove = function() {\r\n\t\t\tremoveStyleElement(styleElement);\r\n\t\t\tif(styleElement.href)\r\n\t\t\t\tURL.revokeObjectURL(styleElement.href);\r\n\t\t};\r\n\t} else {\r\n\t\tstyleElement = createStyleElement(options);\r\n\t\tupdate = applyToTag.bind(null, styleElement);\r\n\t\tremove = function() {\r\n\t\t\tremoveStyleElement(styleElement);\r\n\t\t};\r\n\t}\r\n\r\n\tupdate(obj);\r\n\r\n\treturn function updateStyle(newObj) {\r\n\t\tif(newObj) {\r\n\t\t\tif(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\r\n\t\t\t\treturn;\r\n\t\t\tupdate(obj = newObj);\r\n\t\t} else {\r\n\t\t\tremove();\r\n\t\t}\r\n\t};\r\n}\r\n\r\nvar replaceText = (function () {\r\n\tvar textStore = [];\r\n\r\n\treturn function (index, replacement) {\r\n\t\ttextStore[index] = replacement;\r\n\t\treturn textStore.filter(Boolean).join('\\n');\r\n\t};\r\n})();\r\n\r\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\r\n\tvar css = remove ? \"\" : obj.css;\r\n\r\n\tif (styleElement.styleSheet) {\r\n\t\tstyleElement.styleSheet.cssText = replaceText(index, css);\r\n\t} else {\r\n\t\tvar cssNode = document.createTextNode(css);\r\n\t\tvar childNodes = styleElement.childNodes;\r\n\t\tif (childNodes[index]) styleElement.removeChild(childNodes[index]);\r\n\t\tif (childNodes.length) {\r\n\t\t\tstyleElement.insertBefore(cssNode, childNodes[index]);\r\n\t\t} else {\r\n\t\t\tstyleElement.appendChild(cssNode);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction applyToTag(styleElement, obj) {\r\n\tvar css = obj.css;\r\n\tvar media = obj.media;\r\n\r\n\tif(media) {\r\n\t\tstyleElement.setAttribute(\"media\", media)\r\n\t}\r\n\r\n\tif(styleElement.styleSheet) {\r\n\t\tstyleElement.styleSheet.cssText = css;\r\n\t} else {\r\n\t\twhile(styleElement.firstChild) {\r\n\t\t\tstyleElement.removeChild(styleElement.firstChild);\r\n\t\t}\r\n\t\tstyleElement.appendChild(document.createTextNode(css));\r\n\t}\r\n}\r\n\r\nfunction updateLink(linkElement, obj) {\r\n\tvar css = obj.css;\r\n\tvar sourceMap = obj.sourceMap;\r\n\r\n\tif(sourceMap) {\r\n\t\t// http://stackoverflow.com/a/26603875\r\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\r\n\t}\r\n\r\n\tvar blob = new Blob([css], { type: \"text/css\" });\r\n\r\n\tvar oldSrc = linkElement.href;\r\n\r\n\tlinkElement.href = URL.createObjectURL(blob);\r\n\r\n\tif(oldSrc)\r\n\t\tURL.revokeObjectURL(oldSrc);\r\n}\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/style-loader/addStyles.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/style-loader/addStyles.js?");

/***/ },
/* 5 */
/*!*****************************!*\
  !*** ./app/core/modules.ts ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar angular = __webpack_require__(/*! angular */ 6);\r\nvar uiRouter = __webpack_require__(/*! angular-ui-router */ 8);\r\nangular.module('app.services', []);\r\nangular.module('app', ['app.services', uiRouter]);\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/core/modules.ts\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/core/modules.ts?");

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!********************************!*\
  !*** ./app/core/components.ts ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(/*! ../components/main-header/main-header.ts */ 10);\r\n__webpack_require__(/*! ../components/main-footer/main-footer.ts */ 16);\r\n__webpack_require__(/*! ../components/main-layout/main-layout.ts */ 20);\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/core/components.ts\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/core/components.ts?");

/***/ },
/* 10 */
/*!***************************************************!*\
  !*** ./app/components/main-header/main-header.ts ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar __extends = (this && this.__extends) || function (d, b) {\r\n    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n};\r\n__webpack_require__(/*! ./main-header.scss */ 11);\r\nvar component_1 = __webpack_require__(/*! ../../common/component */ 13);\r\nvar bindingTypes_1 = __webpack_require__(/*! ../../common/bindingTypes */ 14);\r\nvar MainHeaderController = (function () {\r\n    function MainHeaderController() {\r\n    }\r\n    return MainHeaderController;\r\n}());\r\nvar MainHeader = (function (_super) {\r\n    __extends(MainHeader, _super);\r\n    function MainHeader() {\r\n        _super.apply(this, arguments);\r\n        this.scope = {\r\n            name: bindingTypes_1.BindingType.ONE_WAY\r\n        };\r\n        this.controllerAs = 'mainHeaderCtrl';\r\n        this.controller = MainHeaderController;\r\n        this.template = __webpack_require__(/*! ./main-header.html */ 15);\r\n    }\r\n    return MainHeader;\r\n}(component_1.BaseComponent));\r\nangular\r\n    .module('app')\r\n    .directive('mainHeader', function () { return new MainHeader(); });\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/components/main-header/main-header.ts\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/components/main-header/main-header.ts?");

/***/ },
/* 11 */
/*!*****************************************************!*\
  !*** ./app/components/main-header/main-header.scss ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/postcss-loader!./../../../~/sass-loader!./main-header.scss */ 12);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 4)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./main-header.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./main-header.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/components/main-header/main-header.scss\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/components/main-header/main-header.scss?");

/***/ },
/* 12 */
/*!*******************************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./app/components/main-header/main-header.scss ***!
  \*******************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();\n// imports\n\n\n// module\nexports.push([module.id, \"[component=\\\"main-header\\\"] {\\n  background-color: lightgray; }\\n\", \"\"]);\n\n// exports\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./app/components/main-header/main-header.scss\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/components/main-header/main-header.scss?./~/css-loader!./~/postcss-loader!./~/sass-loader");

/***/ },
/* 13 */
/*!*********************************!*\
  !*** ./app/common/component.ts ***!
  \*********************************/
/***/ function(module, exports) {

	eval("\"use strict\";\r\nvar BaseComponent = (function () {\r\n    function BaseComponent() {\r\n        this.bindToController = true;\r\n        this.restrict = 'E';\r\n    }\r\n    return BaseComponent;\r\n}());\r\nexports.BaseComponent = BaseComponent;\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/common/component.ts\n ** module id = 13\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/common/component.ts?");

/***/ },
/* 14 */
/*!************************************!*\
  !*** ./app/common/bindingTypes.ts ***!
  \************************************/
/***/ function(module, exports) {

	eval("\"use strict\";\r\nvar BindingType = (function () {\r\n    function BindingType() {\r\n    }\r\n    BindingType.ONE_WAY = '@';\r\n    BindingType.TWO_WAY = '=';\r\n    BindingType.METHOD = '&';\r\n    return BindingType;\r\n}());\r\nexports.BindingType = BindingType;\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/common/bindingTypes.ts\n ** module id = 14\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/common/bindingTypes.ts?");

/***/ },
/* 15 */
/*!*****************************************************!*\
  !*** ./app/components/main-header/main-header.html ***!
  \*****************************************************/
/***/ function(module, exports) {

	eval("module.exports = \"<div component=\\\"main-header\\\" class=\\\"main-header\\\">\\r\\n    main header\\r\\n    <ul>\\r\\n        <li>\\r\\n            <a ui-sref=\\\"state1\\\">State 1</a>\\r\\n        </li>\\r\\n        <li>\\r\\n            <a ui-sref=\\\"state2\\\">State 2</a>\\r\\n        </li>\\r\\n    </ul>\\r\\n    <div ui-view>content here</div>\\r\\n</div>\\r\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/components/main-header/main-header.html\n ** module id = 15\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/components/main-header/main-header.html?");

/***/ },
/* 16 */
/*!***************************************************!*\
  !*** ./app/components/main-footer/main-footer.ts ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar __extends = (this && this.__extends) || function (d, b) {\r\n    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n};\r\n__webpack_require__(/*! ./main-footer.scss */ 17);\r\nvar component_1 = __webpack_require__(/*! ../../common/component */ 13);\r\nvar bindingTypes_1 = __webpack_require__(/*! ../../common/bindingTypes */ 14);\r\nvar MainFooterController = (function () {\r\n    function MainFooterController() {\r\n    }\r\n    return MainFooterController;\r\n}());\r\nvar MainFooter = (function (_super) {\r\n    __extends(MainFooter, _super);\r\n    function MainFooter() {\r\n        _super.apply(this, arguments);\r\n        this.scope = {\r\n            name: bindingTypes_1.BindingType.ONE_WAY\r\n        };\r\n        this.controllerAs = 'mainFooterCtrl';\r\n        this.controller = MainFooterController;\r\n        this.template = __webpack_require__(/*! ./main-footer.html */ 19);\r\n    }\r\n    return MainFooter;\r\n}(component_1.BaseComponent));\r\nangular\r\n    .module('app')\r\n    .directive('mainFooter', function () { return new MainFooter(); });\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/components/main-footer/main-footer.ts\n ** module id = 16\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/components/main-footer/main-footer.ts?");

/***/ },
/* 17 */
/*!*****************************************************!*\
  !*** ./app/components/main-footer/main-footer.scss ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/postcss-loader!./../../../~/sass-loader!./main-footer.scss */ 18);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 4)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./main-footer.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./main-footer.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/components/main-footer/main-footer.scss\n ** module id = 17\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/components/main-footer/main-footer.scss?");

/***/ },
/* 18 */
/*!*******************************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./app/components/main-footer/main-footer.scss ***!
  \*******************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();\n// imports\n\n\n// module\nexports.push([module.id, \"\", \"\"]);\n\n// exports\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./app/components/main-footer/main-footer.scss\n ** module id = 18\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/components/main-footer/main-footer.scss?./~/css-loader!./~/postcss-loader!./~/sass-loader");

/***/ },
/* 19 */
/*!*****************************************************!*\
  !*** ./app/components/main-footer/main-footer.html ***!
  \*****************************************************/
/***/ function(module, exports) {

	eval("module.exports = \"<div component=\\\"main-footer\\\" class=\\\"main-footer\\\">    \\r\\n    main footer    \\r\\n</div>\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/components/main-footer/main-footer.html\n ** module id = 19\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/components/main-footer/main-footer.html?");

/***/ },
/* 20 */
/*!***************************************************!*\
  !*** ./app/components/main-layout/main-layout.ts ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar __extends = (this && this.__extends) || function (d, b) {\r\n    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n};\r\n__webpack_require__(/*! ./main-layout.scss */ 21);\r\nvar component_1 = __webpack_require__(/*! ../../common/component */ 13);\r\nvar bindingTypes_1 = __webpack_require__(/*! ../../common/bindingTypes */ 14);\r\nvar MainLayoutController = (function () {\r\n    function MainLayoutController() {\r\n    }\r\n    return MainLayoutController;\r\n}());\r\nvar MainLayout = (function (_super) {\r\n    __extends(MainLayout, _super);\r\n    function MainLayout() {\r\n        _super.apply(this, arguments);\r\n        this.scope = {\r\n            name: bindingTypes_1.BindingType.ONE_WAY\r\n        };\r\n        this.controllerAs = 'mainLayoutCtrl';\r\n        this.controller = MainLayoutController;\r\n        this.template = __webpack_require__(/*! ./main-layout.html */ 23);\r\n    }\r\n    return MainLayout;\r\n}(component_1.BaseComponent));\r\nangular\r\n    .module('app')\r\n    .directive('mainLayout', function () { return new MainLayout(); });\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/components/main-layout/main-layout.ts\n ** module id = 20\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/components/main-layout/main-layout.ts?");

/***/ },
/* 21 */
/*!*****************************************************!*\
  !*** ./app/components/main-layout/main-layout.scss ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/postcss-loader!./../../../~/sass-loader!./main-layout.scss */ 22);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 4)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./main-layout.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./main-layout.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/components/main-layout/main-layout.scss\n ** module id = 21\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/components/main-layout/main-layout.scss?");

/***/ },
/* 22 */
/*!*******************************************************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./app/components/main-layout/main-layout.scss ***!
  \*******************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();\n// imports\n\n\n// module\nexports.push([module.id, \"[component=\\\"main-layout\\\"] {\\n  background: teal; }\\n  [component=\\\"main-layout\\\"] h1 {\\n    color: gray; }\\n\", \"\"]);\n\n// exports\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader!./~/postcss-loader!./~/sass-loader!./app/components/main-layout/main-layout.scss\n ** module id = 22\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/components/main-layout/main-layout.scss?./~/css-loader!./~/postcss-loader!./~/sass-loader");

/***/ },
/* 23 */
/*!*****************************************************!*\
  !*** ./app/components/main-layout/main-layout.html ***!
  \*****************************************************/
/***/ function(module, exports) {

	eval("module.exports = \"<div component=\\\"main-layout\\\" class=\\\"main-layout\\\">       \\r\\n    \\r\\n    <main-header></main-header>\\r\\n\\r\\n\\t<articles-container></articles-container>\\r\\n\\r\\n    <main-footer></main-footer>    \\r\\n    \\r\\n</div>\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/components/main-layout/main-layout.html\n ** module id = 23\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/components/main-layout/main-layout.html?");

/***/ },
/* 24 */
/*!*****************************!*\
  !*** ./app/core/routing.ts ***!
  \*****************************/
/***/ function(module, exports) {

	eval("'use strict';\r\nangular\r\n    .module('app')\r\n    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {\r\n        $urlRouterProvider.otherwise(\"/state1\");\r\n        $stateProvider\r\n            .state('state1', {\r\n            url: \"/state1\",\r\n            template: '<h1>state 1</h1>'\r\n        })\r\n            .state('state2', {\r\n            url: \"/state2\",\r\n            template: '<h1>state 2</h1>'\r\n        });\r\n    }]);\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/core/routing.ts\n ** module id = 24\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/core/routing.ts?");

/***/ }
]);