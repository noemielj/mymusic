"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Gift.js":
/*!****************************!*\
  !*** ./components/Gift.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Gift_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Gift.module.css */ \"./styles/Gift.module.css\");\n/* harmony import */ var _styles_Gift_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Gift_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Gift = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Gift_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Gift_module_css__WEBPACK_IMPORTED_MODULE_1___default().cardHeader),\n                src: props.picture,\n                alt: props.name,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_Gift_module_css__WEBPACK_IMPORTED_MODULE_1___default().name),\n                        children: [\n                            \" \",\n                            props.name,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\noemi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week4\\\\evaluation-week4\\\\components\\\\Gift.js\",\n                        lineNumber: 7,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Gift_module_css__WEBPACK_IMPORTED_MODULE_1___default().price),\n                        children: [\n                            \" \",\n                            props.price,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\noemi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week4\\\\evaluation-week4\\\\components\\\\Gift.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\noemi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week4\\\\evaluation-week4\\\\components\\\\Gift.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_Gift_module_css__WEBPACK_IMPORTED_MODULE_1___default().image),\n                src: \"example.jpg\",\n                alt: \"Example\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\noemi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week4\\\\evaluation-week4\\\\components\\\\Gift.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\noemi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week4\\\\evaluation-week4\\\\components\\\\Gift.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this);\n};\n_c = Gift;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gift);\nvar _c;\n$RefreshReg$(_c, \"Gift\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dpZnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBOEM7QUFFOUMsSUFBTUMsSUFBSSxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUN0QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVKLHFFQUFXOzswQkFDekIsOERBQUNHLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRUosMkVBQWlCO2dCQUFFTyxHQUFHLEVBQUVMLEtBQUssQ0FBQ00sT0FBTztnQkFBRUMsR0FBRyxFQUFFUCxLQUFLLENBQUNRLElBQUk7O2tDQUNwRSw4REFBQ0MsSUFBRTt3QkFBQ1AsU0FBUyxFQUFFSixxRUFBVzs7NEJBQUUsR0FBQzs0QkFBQ0UsS0FBSyxDQUFDUSxJQUFJOzRCQUFDLEdBQUM7Ozs7Ozs2QkFBSztrQ0FDL0MsOERBQUNFLE1BQUk7d0JBQUNSLFNBQVMsRUFBRUosc0VBQVk7OzRCQUFFLEdBQUM7NEJBQUNFLEtBQUssQ0FBQ1csS0FBSzs0QkFBQyxHQUFDOzs7Ozs7NkJBQU87Ozs7OztxQkFDakQ7MEJBQ0osOERBQUNDLEtBQUc7Z0JBQUNWLFNBQVMsRUFBRUosc0VBQVk7Z0JBQUVPLEdBQUcsRUFBQyxhQUFhO2dCQUFDRSxHQUFHLEVBQUMsU0FBUzs7Ozs7cUJBQUc7Ozs7OzthQUM5RCxDQUNQO0NBQ0Y7QUFWS1IsS0FBQUEsSUFBSTtBQVlWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2lmdC5qcz9lNzAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0dpZnQubW9kdWxlLmNzcydcblxuY29uc3QgR2lmdCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkSGVhZGVyfSBzcmM9e3Byb3BzLnBpY3R1cmV9IGFsdD17cHJvcHMubmFtZX0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT4ge3Byb3BzLm5hbWV9IDwvaDI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT4ge3Byb3BzLnByaWNlfSA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3JjPSdleGFtcGxlLmpwZycgYWx0PSdFeGFtcGxlJyAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpZnQiXSwibmFtZXMiOlsic3R5bGVzIiwiR2lmdCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImNhcmRIZWFkZXIiLCJzcmMiLCJwaWN0dXJlIiwiYWx0IiwibmFtZSIsImgyIiwic3BhbiIsInByaWNlIiwiaW1nIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Gift.js\n");

/***/ })

});