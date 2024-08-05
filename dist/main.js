/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
    background-color: bisque;
}
#favDialog::backdrop{
    background-image: linear-gradient(
        45deg,
        magenta,
        rebeccapurple,
        dodgerblue,
        green
    );
    opacity: 0.8;
}
#container{
    display: grid;
    margin: 10px 100px 0 100px;
    align-self: center;
    

}
#list{
    grid-column: 1 /2;
    background-color: blueviolet;
    display: flex;
    flex-direction: column;
    gap: 30px;

}
#display{
    grid-column: 2 / 9;
    text-align: center;
}
img{
    height: 30px;
    width: 30px;
    border-radius: 30%;
}

a{
text-decoration: none;
color: bisque;
font-weight: 900;
font-size: large;
font-style: oblique;
font-family: sans-serif;
text-align-last: left;

}
li{
    display: flex;
   gap: 10px;
    text-decoration-style: none;
    list-style-type: none;  
    height: 50px;
    align-items: center;
    padding-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
}
li:hover{
    background-color: cadetblue;
}
#article{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
}
#card{
    background-color: wheat;
    height: 100px;
    margin: 10px;
    display: flex;
    align-items: flex-start;
    padding: 5px;
    overflow-wrap: normal;
   
    
}
#details{
    text-align-last: left;
    padding-left: 7px;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
input{
    border-radius: 10px;
}
.input{
    width: 30em;
}
.selections{
    display: flex;
    gap: 5px;
}
.addbtns{
    display: flex;
    gap: 50px;
}
button{
    color: blue;
}
h1{
   /* text-decoration: underline;
    justify-content: center;
    font-weight: 900;
    font-size: xx-large;
    font-style: oblique;
    font-family: sans-serif;*/
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;AAC5B;AACA;IACI;;;;;;KAMC;IACD,YAAY;AAChB;AACA;IACI,aAAa;IACb,0BAA0B;IAC1B,kBAAkB;;;AAGtB;AACA;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,SAAS;;AAEb;AACA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;AACA,qBAAqB;AACrB,aAAa;AACb,gBAAgB;AAChB,gBAAgB;AAChB,mBAAmB;AACnB,uBAAuB;AACvB,qBAAqB;;AAErB;AACA;IACI,aAAa;GACd,SAAS;IACR,2BAA2B;IAC3B,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;;AAEnB;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,qBAAqB;;;AAGzB;AACA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,mBAAmB;AACvB;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,QAAQ;AACZ;AACA;IACI,aAAa;IACb,SAAS;AACb;AACA;IACI,WAAW;AACf;AACA;GACG;;;;;6BAK0B;AAC7B","sourcesContent":["body{\r\n    background-color: bisque;\r\n}\r\n#favDialog::backdrop{\r\n    background-image: linear-gradient(\r\n        45deg,\r\n        magenta,\r\n        rebeccapurple,\r\n        dodgerblue,\r\n        green\r\n    );\r\n    opacity: 0.8;\r\n}\r\n#container{\r\n    display: grid;\r\n    margin: 10px 100px 0 100px;\r\n    align-self: center;\r\n    \r\n\r\n}\r\n#list{\r\n    grid-column: 1 /2;\r\n    background-color: blueviolet;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n\r\n}\r\n#display{\r\n    grid-column: 2 / 9;\r\n    text-align: center;\r\n}\r\nimg{\r\n    height: 30px;\r\n    width: 30px;\r\n    border-radius: 30%;\r\n}\r\n\r\na{\r\ntext-decoration: none;\r\ncolor: bisque;\r\nfont-weight: 900;\r\nfont-size: large;\r\nfont-style: oblique;\r\nfont-family: sans-serif;\r\ntext-align-last: left;\r\n\r\n}\r\nli{\r\n    display: flex;\r\n   gap: 10px;\r\n    text-decoration-style: none;\r\n    list-style-type: none;  \r\n    height: 50px;\r\n    align-items: center;\r\n    padding-left: 10px;\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n}\r\nli:hover{\r\n    background-color: cadetblue;\r\n}\r\n#article{\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    \r\n}\r\n#card{\r\n    background-color: wheat;\r\n    height: 100px;\r\n    margin: 10px;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    padding: 5px;\r\n    overflow-wrap: normal;\r\n   \r\n    \r\n}\r\n#details{\r\n    text-align-last: left;\r\n    padding-left: 7px;\r\n}\r\nform{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\ninput{\r\n    border-radius: 10px;\r\n}\r\n.input{\r\n    width: 30em;\r\n}\r\n.selections{\r\n    display: flex;\r\n    gap: 5px;\r\n}\r\n.addbtns{\r\n    display: flex;\r\n    gap: 50px;\r\n}\r\nbutton{\r\n    color: blue;\r\n}\r\nh1{\r\n   /* text-decoration: underline;\r\n    justify-content: center;\r\n    font-weight: 900;\r\n    font-size: xx-large;\r\n    font-style: oblique;\r\n    font-family: sans-serif;*/\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cards: () => (/* binding */ cards),
/* harmony export */   inboxx: () => (/* binding */ inboxx),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   teams: () => (/* binding */ teams),
/* harmony export */   toDay: () => (/* binding */ toDay)
/* harmony export */ });
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");

/******Displays new cards*///////

function cards() {   
const article = document.getElementById('article');
const header = document.getElementById('header');
header.textContent = '';
header.textContent = "Let's Plan";


const card = document.createElement('article');
const cardBtn = document.createElement('button');
const cardDetails = document.createElement('div');
const cardName = document.createElement('p');
const cardTime = document.createElement('p');
card.id = 'card'
cardDetails.id = 'details'
cardBtn.textContent = 'X';
cardName.textContent = (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.storage)()//'Put details here' 
cardTime.textContent = 'Due:  ' + _pageLoad__WEBPACK_IMPORTED_MODULE_0__.date

cardDetails.appendChild(cardName);
cardDetails.appendChild(cardTime);

card.appendChild(cardBtn);
card.appendChild(cardDetails);
 

  cardBtn.addEventListener('click', ()=>{
    article.removeChild(card)
  })

  article.appendChild(card)
};

 function toDay() {
   alert ('Not set')
//     const article = document.getElementById('article');
//     const header = document.getElementById('header');
//     header.textContent = '';
//     header.textContent = 'Today';
//     article.textContent= '';
//     const topSlide = document.createElement('div');
//     const header3 = document.createElement('h3');
//     const topContent = document.createElement('div');
//     const bottomSlide = document.createElement('div');
//     const header4 = document.createElement('h4');
//     const bottomContent = document.createElement('div');

//     header3.textContent = 'My Projects';
//     topContent.textContent = 'hello'
//     header4.textContent = 'Team';
//     bottomContent.textContent = 'hello world';

//     topSlide.appendChild(header3);
//     topSlide.appendChild(topContent);
//     bottomSlide.appendChild(header4);
//     bottomSlide.appendChild(bottomContent);
//     article.appendChild(topSlide);
//     article.appendChild(bottomSlide);

    
 }

function inboxx() {
    const article = document.getElementById('article');
    const header = document.getElementById('header');
    header.textContent = '';
    header.textContent = 'Inbox';
    article.textContent= '';

    _pageLoad__WEBPACK_IMPORTED_MODULE_0__.inboxStore.forEach(function(project){
  
      const card = document.createElement('article');
      const cardBtn = document.createElement('button');
      const cardDetails = document.createElement('div');
      const cardName = document.createElement('p');
      const cardTime = document.createElement('p');
      card.id = 'card'
      cardDetails.id = 'details'
      cardBtn.textContent = 'X';
      cardName.textContent = project//'Put details here' 
      cardTime.textContent = 'Due:  ' + new Date
      
      cardDetails.appendChild(cardName);
      cardDetails.appendChild(cardTime);
      
      card.appendChild(cardBtn);
      card.appendChild(cardDetails);
      
        cardBtn.addEventListener('click', ()=>{
          article.removeChild(card)
          let go = _pageLoad__WEBPACK_IMPORTED_MODULE_0__.inboxStore.indexOf(project)
          _pageLoad__WEBPACK_IMPORTED_MODULE_0__.inboxStore.splice(go)
        })
      
        article.appendChild(card)          
    });
    
}

function projects() {
    
    const article = document.getElementById('article');
    const header = document.getElementById('header');
    header.textContent = '';
    header.textContent = 'My Projects';
    article.textContent = ''

    _pageLoad__WEBPACK_IMPORTED_MODULE_0__.projectsStore.forEach(function(project){
  
      const card = document.createElement('article');
      const cardBtn = document.createElement('button');
      const cardDetails = document.createElement('div');
      const cardName = document.createElement('p');
      const cardTime = document.createElement('p');
      card.id = 'card'
      cardDetails.id = 'details'
      cardBtn.textContent = 'X';
      cardName.textContent = project//'Put details here' 
      cardTime.textContent = 'Due:  ' + new Date
      
      cardDetails.appendChild(cardName);
      cardDetails.appendChild(cardTime);
      
      card.appendChild(cardBtn);
      card.appendChild(cardDetails);
      
      
        cardBtn.addEventListener('click', ()=>{
          article.removeChild(card)
          let go = _pageLoad__WEBPACK_IMPORTED_MODULE_0__.projectsStore.indexOf(project)
          let goo = _pageLoad__WEBPACK_IMPORTED_MODULE_0__.inboxStore.indexOf(project)
          _pageLoad__WEBPACK_IMPORTED_MODULE_0__.projectsStore.splice(go)
          _pageLoad__WEBPACK_IMPORTED_MODULE_0__.inboxStore.splice(goo)
        })
      
        article.appendChild(card)
    })


          
 };

function teams() {
    const article = document.getElementById('article');
    const header = document.getElementById('header');
    header.textContent = '';
    header.textContent = 'Team';
    article.textContent= '';

    _pageLoad__WEBPACK_IMPORTED_MODULE_0__.teamStore.forEach(function(project){
  
      const card = document.createElement('article');
      const cardBtn = document.createElement('button');
      const cardDetails = document.createElement('div');
      const cardName = document.createElement('p');
      const cardTime = document.createElement('p');
      card.id = 'card'
      cardDetails.id = 'details'
      cardBtn.textContent = 'X';
      cardName.textContent = project//'Put details here' 
      cardTime.textContent = 'Due: ' + new Date
      
      cardDetails.appendChild(cardName);
      cardDetails.appendChild(cardTime);
      
      card.appendChild(cardBtn);
      card.appendChild(cardDetails);
      
      
        cardBtn.addEventListener('click', ()=>{
          article.removeChild(card)
          let go = _pageLoad__WEBPACK_IMPORTED_MODULE_0__.teamStore.indexOf(project)
          let goo = _pageLoad__WEBPACK_IMPORTED_MODULE_0__.inboxStore.indexOf(project)
          _pageLoad__WEBPACK_IMPORTED_MODULE_0__.teamStore.splice(go)
          _pageLoad__WEBPACK_IMPORTED_MODULE_0__.inboxStore.splice(goo)
        })
      
        article.appendChild(card)
    })

};






/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   date: () => (/* binding */ date),
/* harmony export */   inboxStore: () => (/* binding */ inboxStore),
/* harmony export */   populate: () => (/* binding */ populate),
/* harmony export */   projectsStore: () => (/* binding */ projectsStore),
/* harmony export */   storage: () => (/* binding */ storage),
/* harmony export */   teamStore: () => (/* binding */ teamStore)
/* harmony export */ });
/* harmony import */ var _house_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./house.jpg */ "./src/house.jpg");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/*const { add } = require("date-fns");*/
//const { container } = require("webpack");
    const container = document.getElementById('container')
    const list = document.createElement('ul');
    const display = document.createElement('div');
    const header = document.createElement('h1');
    const time = document.createElement('p');
    const article = document.createElement('div');
    list.id = 'list';
    display.id = 'display';
    article.id = 'article';
    header.id = 'header';
    header.textContent = "Let's Plan";
    time.textContent = 'Session started at: ' + new Date
    display.appendChild(time)
    display.appendChild(header);
    display.appendChild(article);

    
    


/*******Application Logic ********/
function populate(){
    const admin = document.createElement('li');
    const adminImg = document.createElement('img');
    const adminName = document.createElement('a');
    adminImg.id = 'nav'
    adminImg.src = _house_jpg__WEBPACK_IMPORTED_MODULE_0__
    adminName.textContent = 'Psammyst'
    adminName.href = '#'
    admin.appendChild(adminImg);
    admin.appendChild(adminName);
    
    const task = document.createElement('li');
    const  taskImg= document.createElement('img');
    const taskName = document.createElement('a');
    taskImg.id = 'nav'
    taskImg.src = _house_jpg__WEBPACK_IMPORTED_MODULE_0__
    taskName.textContent = 'Add Task'
    taskName.href = '#'
    task.appendChild(taskImg);
    task.appendChild(taskName);
    
    const today = document.createElement('li');
    const todayImg = document.createElement('img');
    const todayName = document.createElement('a');
    todayImg.id = 'nav'
    todayImg.src = _house_jpg__WEBPACK_IMPORTED_MODULE_0__
    todayName.textContent = 'Today'
    todayName.href = '#'
    today.appendChild(todayImg);
    today.appendChild(todayName);
    
    const  inbox= document.createElement('li');
    const  inboxImg= document.createElement('img');
    const  inboxName= document.createElement('a');
    inboxImg.id = 'nav'
    inboxImg.src = _house_jpg__WEBPACK_IMPORTED_MODULE_0__
    inboxName.textContent = 'Inbox'
    inboxName.href = '#'
    inbox.appendChild(inboxImg);
    inbox.appendChild(inboxName);
    
    const  myProjects= document.createElement('li');
    const  myProjectsImg= document.createElement('img');
    const  myProjectsName= document.createElement('a');
    myProjects.id = 'projects'
    myProjectsImg.src = _house_jpg__WEBPACK_IMPORTED_MODULE_0__
    myProjectsName.textContent = 'My Projects'
    myProjectsName.href= '#'
    myProjects.appendChild(myProjectsImg);
    myProjects.appendChild(myProjectsName);
    
    const  team= document.createElement('li');
    const  teamImg= document.createElement('img');
    const  teamName= document.createElement('a');
    team.id = 'team'
    teamImg.src = _house_jpg__WEBPACK_IMPORTED_MODULE_0__
    teamName.textContent = 'Team'
    team.appendChild(teamImg);
    team.appendChild(teamName);
    
    
    list.appendChild(admin);
    list.appendChild(task);
    list.appendChild(today);
    list.appendChild(inbox);
    list.appendChild(myProjects);
    list.appendChild(team);
    
    admin.addEventListener('click',()=>{
        alert("Ooops!! That's for the Admin only")
    })
    taskName.addEventListener('click',()=>{
        newTask().showModal()
    });
    todayName.addEventListener('click', ()=>{
        (0,_display__WEBPACK_IMPORTED_MODULE_1__.toDay)();
    });
    inboxName.addEventListener('click', ()=>{
        (0,_display__WEBPACK_IMPORTED_MODULE_1__.inboxx)();
    });
    myProjectsName.addEventListener('click', ()=>{
        (0,_display__WEBPACK_IMPORTED_MODULE_1__.projects)();
    });
    teamName.addEventListener('click', ()=>{
        (0,_display__WEBPACK_IMPORTED_MODULE_1__.teams)();
    });

    return container.appendChild(list),
    container.appendChild(display);
    };

    
/*****create modal for user input******/
function newTask() {
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const selections = document.createElement('div');
    const dueDate = document.createElement('input');
    // const priority = document.createElement('select');
    // const priority1 = document.createElement('option');
    // const priority2 = document.createElement('option');
    // const priority3 = document.createElement('option');
    const category = document.createElement('select');
    const category1 = document.createElement('option');
    const category2 = document.createElement('option');
    const category3 = document.createElement('option');
    const category4 = document.createElement('option');
    const addbtns = document.createElement('div')
    const cancel = document.createElement('button');
    const addTask = document.createElement('button');

    dialog.id = 'favDialog';
    selections.className = 'selections';
    addbtns.className = 'addbtns';
    input.placeholder = 'Type here...'
    input.className = 'input'
    dueDate.placeholder = 'Due';
    dueDate.type = 'date'
    cancel.textContent = 'Cancel';
    addTask.textContent = 'Add';
    // priority1.textContent = 'Low';
    // priority2.textContent = 'Medium'
    // priority3.textContent = 'High'
    category1.textContent = 'Category';
    category2.textContent = 'Team';
    category3.textContent = 'Work';
    category4.textContent = 'My Projects';

    // priority.appendChild(priority1);
    // priority.appendChild(priority2);
    // priority.appendChild(priority3);
    category.appendChild(category1);
    category.appendChild(category2);
    category.appendChild(category3);
    category.appendChild(category4);
    form.appendChild(input);
    selections.appendChild(dueDate);
    //selections.appendChild(priority);
    selections.appendChild(category);
    addbtns.appendChild(cancel);
    addbtns.appendChild(addTask);
    form.appendChild(selections);
    form.appendChild(addbtns)
    dialog.appendChild(form);

        const selectEl = dialog.querySelector("select");
        selectEl.addEventListener("change", () => {
            if (selectEl.value==='My Projects') {
                projectsStore.push(input.value)
            }else if (selectEl.value==='Team') {
                teamStore.push(input.value)
            } else {
                console.log('Task not urgent')
            }
        });

    addTask.addEventListener('click', ()=>{
            store.push(input.value)
            date.push(dueDate.value)

            inboxStore.push(input.value)
            dialog.close()
            ;(0,_display__WEBPACK_IMPORTED_MODULE_1__.cards)();                       
    });

    cancel.addEventListener('click', ()=>{dialog.close()});

    return display.appendChild(dialog)
};
 
/*************store the user input*/
const store = [];
const projectsStore= [];
const teamStore = [];
const inboxStore = []
const date = []

function storage() {   
  const one = store.pop()
 return one
};





/***/ }),

/***/ "./src/house.jpg":
/*!***********************!*\
  !*** ./src/house.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c53706e53c8bd47e0ef.jpg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _house_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./house.jpg */ "./src/house.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");




// import { toDay } from './display';


//=> '2014-02-11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]





window.addEventListener('DOMContentLoaded',()=>{

  ;(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.populate)()

});





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVE7QUFDVjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxufVxyXG4jZmF2RGlhbG9nOjpiYWNrZHJvcHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICA0NWRlZyxcclxuICAgICAgICBtYWdlbnRhLFxyXG4gICAgICAgIHJlYmVjY2FwdXJwbGUsXHJcbiAgICAgICAgZG9kZ2VyYmx1ZSxcclxuICAgICAgICBncmVlblxyXG4gICAgKTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG4jY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1hcmdpbjogMTBweCAxMDBweCAwIDEwMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgXHJcblxyXG59XHJcbiNsaXN0e1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLzI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDMwcHg7XHJcblxyXG59XHJcbiNkaXNwbGF5e1xyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmltZ3tcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xyXG59XHJcblxyXG5he1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmNvbG9yOiBiaXNxdWU7XHJcbmZvbnQtd2VpZ2h0OiA5MDA7XHJcbmZvbnQtc2l6ZTogbGFyZ2U7XHJcbmZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbmZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG50ZXh0LWFsaWduLWxhc3Q6IGxlZnQ7XHJcblxyXG59XHJcbmxpe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgZ2FwOiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBub25lO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyAgXHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5saTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxufVxyXG4jYXJ0aWNsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgXHJcbn1cclxuI2NhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XHJcbiAgIFxyXG4gICAgXHJcbn1cclxuI2RldGFpbHN7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxufVxyXG5mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5pbnB1dHtcclxuICAgIHdpZHRoOiAzMGVtO1xyXG59XHJcbi5zZWxlY3Rpb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcbi5hZGRidG5ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNTBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5oMXtcclxuICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyovXHJcbn1cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJOzs7Ozs7S0FNQztJQUNELFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsa0JBQWtCOzs7QUFHdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTOztBQUViO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjs7QUFFckI7QUFDQTtJQUNJLGFBQWE7R0FDZCxTQUFTO0lBQ1IsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHFCQUFxQjs7O0FBR3pCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7R0FDRzs7Ozs7NkJBSzBCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXHJcXG59XFxyXFxuI2ZhdkRpYWxvZzo6YmFja2Ryb3B7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICAgIDQ1ZGVnLFxcclxcbiAgICAgICAgbWFnZW50YSxcXHJcXG4gICAgICAgIHJlYmVjY2FwdXJwbGUsXFxyXFxuICAgICAgICBkb2RnZXJibHVlLFxcclxcbiAgICAgICAgZ3JlZW5cXHJcXG4gICAgKTtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG4jY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBtYXJnaW46IDEwcHggMTAwcHggMCAxMDBweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBcXHJcXG5cXHJcXG59XFxyXFxuI2xpc3R7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8yO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuXFxyXFxufVxcclxcbiNkaXNwbGF5e1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuaW1ne1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbmNvbG9yOiBiaXNxdWU7XFxyXFxuZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG5mb250LXNpemU6IGxhcmdlO1xcclxcbmZvbnQtc3R5bGU6IG9ibGlxdWU7XFxyXFxuZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxudGV4dC1hbGlnbi1sYXN0OiBsZWZ0O1xcclxcblxcclxcbn1cXHJcXG5saXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBnYXA6IDEwcHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogbm9uZTtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyAgXFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcbmxpOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxyXFxufVxcclxcbiNhcnRpY2xle1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4jY2FyZHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xcclxcbiAgIFxcclxcbiAgICBcXHJcXG59XFxyXFxuI2RldGFpbHN7XFxyXFxuICAgIHRleHQtYWxpZ24tbGFzdDogbGVmdDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XFxyXFxufVxcclxcbmZvcm17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbmlucHV0e1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4uaW5wdXR7XFxyXFxuICAgIHdpZHRoOiAzMGVtO1xcclxcbn1cXHJcXG4uc2VsZWN0aW9uc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcbi5hZGRidG5ze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxufVxcclxcbmJ1dHRvbntcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcbmgxe1xcclxcbiAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7Ki9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLypcclxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xyXG4gIHZhciBsaXN0ID0gW107XHJcblxyXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuICAgIGlmIChkZWR1cGUpIHtcclxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XHJcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcclxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWVkaWEpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdXBwb3J0cykge1xyXG4gICAgICAgIGlmICghaXRlbVs0XSkge1xyXG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xyXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcclxuICBpZiAoIWNzc01hcHBpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xyXG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xyXG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XHJcbiAgfVxyXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcclxuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xyXG4gIH1cclxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xyXG4vKipcclxuICogQG5hbWUgY29tcGFyZUFzY1xyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcclxuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcclxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxyXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXHJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXHJcbiAqIC8vPT4gLTFcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XHJcbiAqIGNvbnN0IHJlc3VsdCA9IFtcclxuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcclxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXHJcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXHJcbiAqIF0uc29ydChjb21wYXJlQXNjKVxyXG4gKiAvLz0+IFtcclxuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXHJcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxyXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxyXG4gKiAvLyBdXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XHJcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XHJcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xyXG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xyXG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcclxuICBpZiAoZGlmZiA8IDApIHtcclxuICAgIHJldHVybiAtMTtcclxuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XHJcbiAgICByZXR1cm4gMTtcclxuICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XHJcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XHJcbi8qKlxyXG4gKiBAbmFtZSB0b0RhdGVcclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXHJcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxyXG4gKlxyXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxyXG4gKlxyXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXHJcbiAqXHJcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxyXG4gKlxyXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cclxuICpcclxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxyXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxyXG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxyXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcclxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXHJcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcclxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcclxuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcclxuXHJcbiAgLy8gQ2xvbmUgdGhlIGRhdGVcclxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xyXG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXHJcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcclxuICB9XHJcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xyXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XHJcbiAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XHJcbiAgICAgIHJlc3VsdCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XHJcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcclxuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcclxuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xyXG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcclxuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xyXG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XHJcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgIGNzczogaXRlbVsxXSxcclxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXHJcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcclxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXHJcbiAgICAgIGxheWVyOiBpdGVtWzVdXHJcbiAgICB9O1xyXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcclxuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcclxuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcclxuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxyXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXHJcbiAgICAgICAgcmVmZXJlbmNlczogMVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XHJcbiAgfVxyXG4gIHJldHVybiBpZGVudGlmaWVycztcclxufVxyXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XHJcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xyXG4gIGFwaS51cGRhdGUob2JqKTtcclxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XHJcbiAgICBpZiAobmV3T2JqKSB7XHJcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHVwZGF0ZXI7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xyXG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xyXG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcclxuICAgIH1cclxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xyXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xyXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XHJcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XHJcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcclxuICB9O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIG1lbW8gPSB7fTtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuXHJcbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxyXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXHJcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcclxuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcclxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xyXG4gIH1cclxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xyXG59XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XHJcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xyXG4gIGlmICghdGFyZ2V0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gIH1cclxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xyXG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xyXG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcclxuICBpZiAobm9uY2UpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XHJcbiAgdmFyIGNzcyA9IFwiXCI7XHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcclxuICB9XHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XHJcbiAgfVxyXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcclxuICB9XHJcbiAgY3NzICs9IG9iai5jc3M7XHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XHJcbiAgfVxyXG5cclxuICAvLyBGb3Igb2xkIElFXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xyXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxyXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG59XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcclxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxyXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XHJcbiAgICB9O1xyXG4gIH1cclxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xyXG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcclxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHN0b3JhZ2UsIHByb2plY3RzU3RvcmUsIHRlYW1TdG9yZSwgaW5ib3hTdG9yZSwgZGF0ZSB9IGZyb20gJy4vcGFnZUxvYWQnO1xyXG4vKioqKioqRGlzcGxheXMgbmV3IGNhcmRzKi8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIGNhcmRzKCkgeyAgIFxyXG5jb25zdCBhcnRpY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FydGljbGUnKTtcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG5oZWFkZXIudGV4dENvbnRlbnQgPSAnJztcclxuaGVhZGVyLnRleHRDb250ZW50ID0gXCJMZXQncyBQbGFuXCI7XHJcblxyXG5cclxuY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuY29uc3QgY2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5jb25zdCBjYXJkRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBjYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgY2FyZFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmNhcmQuaWQgPSAnY2FyZCdcclxuY2FyZERldGFpbHMuaWQgPSAnZGV0YWlscydcclxuY2FyZEJ0bi50ZXh0Q29udGVudCA9ICdYJztcclxuY2FyZE5hbWUudGV4dENvbnRlbnQgPSBzdG9yYWdlKCkvLydQdXQgZGV0YWlscyBoZXJlJyBcclxuY2FyZFRpbWUudGV4dENvbnRlbnQgPSAnRHVlOiAgJyArIGRhdGVcclxuXHJcbmNhcmREZXRhaWxzLmFwcGVuZENoaWxkKGNhcmROYW1lKTtcclxuY2FyZERldGFpbHMuYXBwZW5kQ2hpbGQoY2FyZFRpbWUpO1xyXG5cclxuY2FyZC5hcHBlbmRDaGlsZChjYXJkQnRuKTtcclxuY2FyZC5hcHBlbmRDaGlsZChjYXJkRGV0YWlscyk7XHJcbiBcclxuXHJcbiAgY2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBhcnRpY2xlLnJlbW92ZUNoaWxkKGNhcmQpXHJcbiAgfSlcclxuXHJcbiAgYXJ0aWNsZS5hcHBlbmRDaGlsZChjYXJkKVxyXG59O1xyXG5cclxuIGZ1bmN0aW9uIHRvRGF5KCkge1xyXG4gICBhbGVydCAoJ05vdCBzZXQnKVxyXG4vLyAgICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnRpY2xlJyk7XHJcbi8vICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XHJcbi8vICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnJztcclxuLy8gICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdUb2RheSc7XHJcbi8vICAgICBhcnRpY2xlLnRleHRDb250ZW50PSAnJztcclxuLy8gICAgIGNvbnN0IHRvcFNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBjb25zdCBoZWFkZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuLy8gICAgIGNvbnN0IHRvcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIGNvbnN0IGJvdHRvbVNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBjb25zdCBoZWFkZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuLy8gICAgIGNvbnN0IGJvdHRvbUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbi8vICAgICBoZWFkZXIzLnRleHRDb250ZW50ID0gJ015IFByb2plY3RzJztcclxuLy8gICAgIHRvcENvbnRlbnQudGV4dENvbnRlbnQgPSAnaGVsbG8nXHJcbi8vICAgICBoZWFkZXI0LnRleHRDb250ZW50ID0gJ1RlYW0nO1xyXG4vLyAgICAgYm90dG9tQ29udGVudC50ZXh0Q29udGVudCA9ICdoZWxsbyB3b3JsZCc7XHJcblxyXG4vLyAgICAgdG9wU2xpZGUuYXBwZW5kQ2hpbGQoaGVhZGVyMyk7XHJcbi8vICAgICB0b3BTbGlkZS5hcHBlbmRDaGlsZCh0b3BDb250ZW50KTtcclxuLy8gICAgIGJvdHRvbVNsaWRlLmFwcGVuZENoaWxkKGhlYWRlcjQpO1xyXG4vLyAgICAgYm90dG9tU2xpZGUuYXBwZW5kQ2hpbGQoYm90dG9tQ29udGVudCk7XHJcbi8vICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKHRvcFNsaWRlKTtcclxuLy8gICAgIGFydGljbGUuYXBwZW5kQ2hpbGQoYm90dG9tU2xpZGUpO1xyXG5cclxuICAgIFxyXG4gfVxyXG5cclxuZnVuY3Rpb24gaW5ib3h4KCkge1xyXG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnRpY2xlJyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdJbmJveCc7XHJcbiAgICBhcnRpY2xlLnRleHRDb250ZW50PSAnJztcclxuXHJcbiAgICBpbmJveFN0b3JlLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCl7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgIGNvbnN0IGNhcmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgY29uc3QgY2FyZERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3QgY2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIGNvbnN0IGNhcmRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBjYXJkLmlkID0gJ2NhcmQnXHJcbiAgICAgIGNhcmREZXRhaWxzLmlkID0gJ2RldGFpbHMnXHJcbiAgICAgIGNhcmRCdG4udGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICAgIGNhcmROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC8vJ1B1dCBkZXRhaWxzIGhlcmUnIFxyXG4gICAgICBjYXJkVGltZS50ZXh0Q29udGVudCA9ICdEdWU6ICAnICsgbmV3IERhdGVcclxuICAgICAgXHJcbiAgICAgIGNhcmREZXRhaWxzLmFwcGVuZENoaWxkKGNhcmROYW1lKTtcclxuICAgICAgY2FyZERldGFpbHMuYXBwZW5kQ2hpbGQoY2FyZFRpbWUpO1xyXG4gICAgICBcclxuICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQnRuKTtcclxuICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGV0YWlscyk7XHJcbiAgICAgIFxyXG4gICAgICAgIGNhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgYXJ0aWNsZS5yZW1vdmVDaGlsZChjYXJkKVxyXG4gICAgICAgICAgbGV0IGdvID0gaW5ib3hTdG9yZS5pbmRleE9mKHByb2plY3QpXHJcbiAgICAgICAgICBpbmJveFN0b3JlLnNwbGljZShnbylcclxuICAgICAgICB9KVxyXG4gICAgICBcclxuICAgICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKGNhcmQpICAgICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdHMoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJ0aWNsZScpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnTXkgUHJvamVjdHMnO1xyXG4gICAgYXJ0aWNsZS50ZXh0Q29udGVudCA9ICcnXHJcblxyXG4gICAgcHJvamVjdHNTdG9yZS5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3Qpe1xyXG4gIFxyXG4gICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICBjb25zdCBjYXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgIGNvbnN0IGNhcmREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IGNhcmROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBjb25zdCBjYXJkVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgY2FyZC5pZCA9ICdjYXJkJ1xyXG4gICAgICBjYXJkRGV0YWlscy5pZCA9ICdkZXRhaWxzJ1xyXG4gICAgICBjYXJkQnRuLnRleHRDb250ZW50ID0gJ1gnO1xyXG4gICAgICBjYXJkTmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QvLydQdXQgZGV0YWlscyBoZXJlJyBcclxuICAgICAgY2FyZFRpbWUudGV4dENvbnRlbnQgPSAnRHVlOiAgJyArIG5ldyBEYXRlXHJcbiAgICAgIFxyXG4gICAgICBjYXJkRGV0YWlscy5hcHBlbmRDaGlsZChjYXJkTmFtZSk7XHJcbiAgICAgIGNhcmREZXRhaWxzLmFwcGVuZENoaWxkKGNhcmRUaW1lKTtcclxuICAgICAgXHJcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEJ0bik7XHJcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZERldGFpbHMpO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgY2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICBhcnRpY2xlLnJlbW92ZUNoaWxkKGNhcmQpXHJcbiAgICAgICAgICBsZXQgZ28gPSBwcm9qZWN0c1N0b3JlLmluZGV4T2YocHJvamVjdClcclxuICAgICAgICAgIGxldCBnb28gPSBpbmJveFN0b3JlLmluZGV4T2YocHJvamVjdClcclxuICAgICAgICAgIHByb2plY3RzU3RvcmUuc3BsaWNlKGdvKVxyXG4gICAgICAgICAgaW5ib3hTdG9yZS5zcGxpY2UoZ29vKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQoY2FyZClcclxuICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgIFxyXG4gfTtcclxuXHJcbmZ1bmN0aW9uIHRlYW1zKCkge1xyXG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnRpY2xlJyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdUZWFtJztcclxuICAgIGFydGljbGUudGV4dENvbnRlbnQ9ICcnO1xyXG5cclxuICAgIHRlYW1TdG9yZS5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3Qpe1xyXG4gIFxyXG4gICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICBjb25zdCBjYXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgIGNvbnN0IGNhcmREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IGNhcmROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBjb25zdCBjYXJkVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgY2FyZC5pZCA9ICdjYXJkJ1xyXG4gICAgICBjYXJkRGV0YWlscy5pZCA9ICdkZXRhaWxzJ1xyXG4gICAgICBjYXJkQnRuLnRleHRDb250ZW50ID0gJ1gnO1xyXG4gICAgICBjYXJkTmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QvLydQdXQgZGV0YWlscyBoZXJlJyBcclxuICAgICAgY2FyZFRpbWUudGV4dENvbnRlbnQgPSAnRHVlOiAnICsgbmV3IERhdGVcclxuICAgICAgXHJcbiAgICAgIGNhcmREZXRhaWxzLmFwcGVuZENoaWxkKGNhcmROYW1lKTtcclxuICAgICAgY2FyZERldGFpbHMuYXBwZW5kQ2hpbGQoY2FyZFRpbWUpO1xyXG4gICAgICBcclxuICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQnRuKTtcclxuICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGV0YWlscyk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgICBjYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgIGFydGljbGUucmVtb3ZlQ2hpbGQoY2FyZClcclxuICAgICAgICAgIGxldCBnbyA9IHRlYW1TdG9yZS5pbmRleE9mKHByb2plY3QpXHJcbiAgICAgICAgICBsZXQgZ29vID0gaW5ib3hTdG9yZS5pbmRleE9mKHByb2plY3QpXHJcbiAgICAgICAgICB0ZWFtU3RvcmUuc3BsaWNlKGdvKVxyXG4gICAgICAgICAgaW5ib3hTdG9yZS5zcGxpY2UoZ29vKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQoY2FyZClcclxuICAgIH0pXHJcblxyXG59O1xyXG5cclxuZXhwb3J0e2NhcmRzLHByb2plY3RzLHRlYW1zLGluYm94eCwgdG9EYXl9XHJcblxyXG5cclxuIiwiLypjb25zdCB7IGFkZCB9ID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyovXHJcbi8vY29uc3QgeyBjb250YWluZXIgfSA9IHJlcXVpcmUoXCJ3ZWJwYWNrXCIpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGlzdC5pZCA9ICdsaXN0JztcclxuICAgIGRpc3BsYXkuaWQgPSAnZGlzcGxheSc7XHJcbiAgICBhcnRpY2xlLmlkID0gJ2FydGljbGUnO1xyXG4gICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkxldCdzIFBsYW5cIjtcclxuICAgIHRpbWUudGV4dENvbnRlbnQgPSAnU2Vzc2lvbiBzdGFydGVkIGF0OiAnICsgbmV3IERhdGVcclxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQodGltZSlcclxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoYXJ0aWNsZSk7XHJcblxyXG4gICAgaW1wb3J0IEljb24gZnJvbSAnLi9ob3VzZS5qcGcnO1xyXG4gICAgaW1wb3J0IHsgcHJvamVjdHMsY2FyZHMsdGVhbXMsaW5ib3h4LCB0b0RheSB9IGZyb20gJy4vZGlzcGxheSc7XHJcblxyXG5cclxuLyoqKioqKipBcHBsaWNhdGlvbiBMb2dpYyAqKioqKioqKi9cclxuZnVuY3Rpb24gcG9wdWxhdGUoKXtcclxuICAgIGNvbnN0IGFkbWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGFkbWluSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb25zdCBhZG1pbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhZG1pbkltZy5pZCA9ICduYXYnXHJcbiAgICBhZG1pbkltZy5zcmMgPSBJY29uXHJcbiAgICBhZG1pbk5hbWUudGV4dENvbnRlbnQgPSAnUHNhbW15c3QnXHJcbiAgICBhZG1pbk5hbWUuaHJlZiA9ICcjJ1xyXG4gICAgYWRtaW4uYXBwZW5kQ2hpbGQoYWRtaW5JbWcpO1xyXG4gICAgYWRtaW4uYXBwZW5kQ2hpbGQoYWRtaW5OYW1lKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCAgdGFza0ltZz0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIHRhc2tJbWcuaWQgPSAnbmF2J1xyXG4gICAgdGFza0ltZy5zcmMgPSBJY29uXHJcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcclxuICAgIHRhc2tOYW1lLmhyZWYgPSAnIydcclxuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0ltZyk7XHJcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgdG9kYXlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvbnN0IHRvZGF5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIHRvZGF5SW1nLmlkID0gJ25hdidcclxuICAgIHRvZGF5SW1nLnNyYyA9IEljb25cclxuICAgIHRvZGF5TmFtZS50ZXh0Q29udGVudCA9ICdUb2RheSdcclxuICAgIHRvZGF5TmFtZS5ocmVmID0gJyMnXHJcbiAgICB0b2RheS5hcHBlbmRDaGlsZCh0b2RheUltZyk7XHJcbiAgICB0b2RheS5hcHBlbmRDaGlsZCh0b2RheU5hbWUpO1xyXG4gICAgXHJcbiAgICBjb25zdCAgaW5ib3g9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCAgaW5ib3hJbWc9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29uc3QgIGluYm94TmFtZT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgaW5ib3hJbWcuaWQgPSAnbmF2J1xyXG4gICAgaW5ib3hJbWcuc3JjID0gSWNvblxyXG4gICAgaW5ib3hOYW1lLnRleHRDb250ZW50ID0gJ0luYm94J1xyXG4gICAgaW5ib3hOYW1lLmhyZWYgPSAnIydcclxuICAgIGluYm94LmFwcGVuZENoaWxkKGluYm94SW1nKTtcclxuICAgIGluYm94LmFwcGVuZENoaWxkKGluYm94TmFtZSk7XHJcbiAgICBcclxuICAgIGNvbnN0ICBteVByb2plY3RzPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgIG15UHJvamVjdHNJbWc9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29uc3QgIG15UHJvamVjdHNOYW1lPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBteVByb2plY3RzLmlkID0gJ3Byb2plY3RzJ1xyXG4gICAgbXlQcm9qZWN0c0ltZy5zcmMgPSBJY29uXHJcbiAgICBteVByb2plY3RzTmFtZS50ZXh0Q29udGVudCA9ICdNeSBQcm9qZWN0cydcclxuICAgIG15UHJvamVjdHNOYW1lLmhyZWY9ICcjJ1xyXG4gICAgbXlQcm9qZWN0cy5hcHBlbmRDaGlsZChteVByb2plY3RzSW1nKTtcclxuICAgIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQobXlQcm9qZWN0c05hbWUpO1xyXG4gICAgXHJcbiAgICBjb25zdCAgdGVhbT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0ICB0ZWFtSW1nPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvbnN0ICB0ZWFtTmFtZT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgdGVhbS5pZCA9ICd0ZWFtJ1xyXG4gICAgdGVhbUltZy5zcmMgPSBJY29uXHJcbiAgICB0ZWFtTmFtZS50ZXh0Q29udGVudCA9ICdUZWFtJ1xyXG4gICAgdGVhbS5hcHBlbmRDaGlsZCh0ZWFtSW1nKTtcclxuICAgIHRlYW0uYXBwZW5kQ2hpbGQodGVhbU5hbWUpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoYWRtaW4pO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQodG9kYXkpO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChpbmJveCk7XHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKG15UHJvamVjdHMpO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZCh0ZWFtKTtcclxuICAgIFxyXG4gICAgYWRtaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgYWxlcnQoXCJPb29wcyEhIFRoYXQncyBmb3IgdGhlIEFkbWluIG9ubHlcIilcclxuICAgIH0pXHJcbiAgICB0YXNrTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBuZXdUYXNrKCkuc2hvd01vZGFsKClcclxuICAgIH0pO1xyXG4gICAgdG9kYXlOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICB0b0RheSgpO1xyXG4gICAgfSk7XHJcbiAgICBpbmJveE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGluYm94eCgpO1xyXG4gICAgfSk7XHJcbiAgICBteVByb2plY3RzTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgcHJvamVjdHMoKTtcclxuICAgIH0pO1xyXG4gICAgdGVhbU5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIHRlYW1zKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpLFxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBcclxuLyoqKioqY3JlYXRlIG1vZGFsIGZvciB1c2VyIGlucHV0KioqKioqL1xyXG5mdW5jdGlvbiBuZXdUYXNrKCkge1xyXG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgLy8gY29uc3QgcHJpb3JpdHkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAvLyBjb25zdCBwcmlvcml0eTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIC8vIGNvbnN0IHByaW9yaXR5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIGNvbnN0IGNhdGVnb3J5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBjb25zdCBjYXRlZ29yeTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIGNvbnN0IGNhdGVnb3J5NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgY29uc3QgYWRkYnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICBkaWFsb2cuaWQgPSAnZmF2RGlhbG9nJztcclxuICAgIHNlbGVjdGlvbnMuY2xhc3NOYW1lID0gJ3NlbGVjdGlvbnMnO1xyXG4gICAgYWRkYnRucy5jbGFzc05hbWUgPSAnYWRkYnRucyc7XHJcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdUeXBlIGhlcmUuLi4nXHJcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAnaW5wdXQnXHJcbiAgICBkdWVEYXRlLnBsYWNlaG9sZGVyID0gJ0R1ZSc7XHJcbiAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZSdcclxuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgYWRkVGFzay50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG4gICAgLy8gcHJpb3JpdHkxLnRleHRDb250ZW50ID0gJ0xvdyc7XHJcbiAgICAvLyBwcmlvcml0eTIudGV4dENvbnRlbnQgPSAnTWVkaXVtJ1xyXG4gICAgLy8gcHJpb3JpdHkzLnRleHRDb250ZW50ID0gJ0hpZ2gnXHJcbiAgICBjYXRlZ29yeTEudGV4dENvbnRlbnQgPSAnQ2F0ZWdvcnknO1xyXG4gICAgY2F0ZWdvcnkyLnRleHRDb250ZW50ID0gJ1RlYW0nO1xyXG4gICAgY2F0ZWdvcnkzLnRleHRDb250ZW50ID0gJ1dvcmsnO1xyXG4gICAgY2F0ZWdvcnk0LnRleHRDb250ZW50ID0gJ015IFByb2plY3RzJztcclxuXHJcbiAgICAvLyBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eTEpO1xyXG4gICAgLy8gcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHkyKTtcclxuICAgIC8vIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5Myk7XHJcbiAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChjYXRlZ29yeTEpO1xyXG4gICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkyKTtcclxuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKGNhdGVnb3J5Myk7XHJcbiAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChjYXRlZ29yeTQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBzZWxlY3Rpb25zLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG4gICAgLy9zZWxlY3Rpb25zLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuICAgIHNlbGVjdGlvbnMuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gICAgYWRkYnRucy5hcHBlbmRDaGlsZChjYW5jZWwpO1xyXG4gICAgYWRkYnRucy5hcHBlbmRDaGlsZChhZGRUYXNrKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0aW9ucyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZGJ0bnMpXHJcbiAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdEVsID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgc2VsZWN0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RFbC52YWx1ZT09PSdNeSBQcm9qZWN0cycpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzU3RvcmUucHVzaChpbnB1dC52YWx1ZSlcclxuICAgICAgICAgICAgfWVsc2UgaWYgKHNlbGVjdEVsLnZhbHVlPT09J1RlYW0nKSB7XHJcbiAgICAgICAgICAgICAgICB0ZWFtU3RvcmUucHVzaChpbnB1dC52YWx1ZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUYXNrIG5vdCB1cmdlbnQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIHN0b3JlLnB1c2goaW5wdXQudmFsdWUpXHJcbiAgICAgICAgICAgIGRhdGUucHVzaChkdWVEYXRlLnZhbHVlKVxyXG5cclxuICAgICAgICAgICAgaW5ib3hTdG9yZS5wdXNoKGlucHV0LnZhbHVlKVxyXG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxyXG4gICAgICAgICAgICBjYXJkcygpOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e2RpYWxvZy5jbG9zZSgpfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpc3BsYXkuYXBwZW5kQ2hpbGQoZGlhbG9nKVxyXG59O1xyXG4gXHJcbi8qKioqKioqKioqKioqc3RvcmUgdGhlIHVzZXIgaW5wdXQqL1xyXG5jb25zdCBzdG9yZSA9IFtdO1xyXG5jb25zdCBwcm9qZWN0c1N0b3JlPSBbXTtcclxuY29uc3QgdGVhbVN0b3JlID0gW107XHJcbmNvbnN0IGluYm94U3RvcmUgPSBbXVxyXG5jb25zdCBkYXRlID0gW11cclxuXHJcbmZ1bmN0aW9uIHN0b3JhZ2UoKSB7ICAgXHJcbiAgY29uc3Qgb25lID0gc3RvcmUucG9wKClcclxuIHJldHVybiBvbmVcclxufTtcclxuXHJcbmV4cG9ydCB7IHBvcHVsYXRlLCBzdG9yYWdlLCBwcm9qZWN0c1N0b3JlLCB0ZWFtU3RvcmUsIGluYm94U3RvcmUsIGRhdGV9O1xyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XHJcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xyXG5cclxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIG87XHJcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XHJcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcclxuICB9LCBfdHlwZW9mKG8pO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge3BvcHVsYXRlIH0gZnJvbSAnLi9wYWdlTG9hZCc7XHJcbmltcG9ydCBJY29uIGZyb20gJy4vaG91c2UuanBnJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCwgZ2V0RGF0ZSwgaXNUb2RheSwgaXNUb21vcnJvdywgdG9EYXRlLCB0b0RheSB9IGZyb20gJ2RhdGUtZm5zJ1xyXG4vLyBpbXBvcnQgeyB0b0RheSB9IGZyb20gJy4vZGlzcGxheSc7XHJcblxyXG5cclxuLy89PiAnMjAxNC0wMi0xMSdcclxuXHJcbmNvbnN0IGRhdGVzID0gW1xyXG4gIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxyXG4gIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcclxuICBuZXcgRGF0ZSgxOTg5LCA2LCAxMCksXHJcbl1cclxuZGF0ZXMuc29ydChjb21wYXJlQXNjKVxyXG4vLz0+IFtcclxuLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXHJcbi8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxyXG4vLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxyXG4vLyBdXHJcblxyXG5cclxuXHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCgpPT57XHJcblxyXG4gIHBvcHVsYXRlKClcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9