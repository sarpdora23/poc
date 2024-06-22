(() => {
  var __webpack_modules__ = {
    './src/App.js': (module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ './node_modules/react/index.js');
      var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

      const App = () => {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement('div', null, react__WEBPACK_IMPORTED_MODULE_0__.createElement('h1', null, 'Hello, World!'));
      };

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
    },

    './src/index.js': (module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ './node_modules/react/index.js');
      var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
      var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ './node_modules/react-dom/index.js');
      var react_dom__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
      var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ './src/App.js');

      react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById('root'));
    }
  };

  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    var module = (__webpack_module_cache__[moduleId] = {
      exports: {}
    });

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  (() => {
    __webpack_require__('./src/index.js');
  })();
})();
