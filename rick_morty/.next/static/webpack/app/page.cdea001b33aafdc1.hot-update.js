"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Api */ \"(app-client)/./src/app/api/Api.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"(app-client)/./src/app/style.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Home = ()=>{\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        const newFetch = (0,_api_Api__WEBPACK_IMPORTED_MODULE_2__.getCharacter)(\"https://rickandmortyapi.com/api/character?page=\".concat(page)).then((res)=>{\n            setLoading(false);\n            setCharacters(res.results);\n        });\n    }, [\n        page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-wrapper\",\n                children: characters === null || characters === void 0 ? void 0 : characters.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            item.name,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.image\n                            }, void 0, false, {\n                                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 62\n                            }, undefined)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 32\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"previous\"\n            }, void 0, false, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"page:\",\n                    page\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setPage((prev)=>prev + 1),\n                children: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"f8am/Vc/I6tTuznInpcz2KbE2Vc=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM0QztBQUNIO0FBQ3JCO0FBWXBCLE1BQU1HLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxZQUFXQyxjQUFjLEdBQUdKLCtDQUFRQTtJQUMzQyxNQUFNLENBQUNLLE1BQUtDLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDaEMsTUFBTSxDQUFDTyxTQUFRQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3RDRCxnREFBU0EsQ0FBQztRQUNSUyxXQUFXO1FBQ1gsTUFBTUMsV0FBV1Isc0RBQVlBLENBQUMsa0RBQXVELE9BQUxJLE9BQVFLLEtBQUtDLENBQUFBO1lBQzNGSCxXQUFXO1lBQ1hKLGNBQWNPLElBQUlDO1FBQ3BCO0lBSUYsR0FBRTtRQUFDUDtLQUFLO0lBRVIscUJBQ0U7OzBCQUVBLDhEQUFDUTtnQkFBR0MsV0FBVTswQkFDWFgsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZWSxJQUFJLENBQUNDLHFCQUFPLDhEQUFDQzs7NEJBQWtCRCxLQUFLRTs0QkFBSzswQ0FBQyw4REFBQ0M7Z0NBQUlDLEtBQUtKLEtBQUtLOzs7Ozs7O3VCQUFwQ0wsS0FBS007Ozs7Ozs7Ozs7MEJBRXpDLDhEQUFDQzswQkFBTzs7Ozs7OzBCQUNSLDhEQUFDQzs7b0JBQUk7b0JBQU1uQjs7Ozs7OzswQkFDWCw4REFBQ2tCO2dCQUFPRSxTQUFTLElBQUluQixRQUFRLENBQUNvQixPQUFPQSxPQUFLOzBCQUFJOzs7Ozs7OztBQUlsRDtHQTNCTXhCO0tBQUFBO0FBNEJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldENoYXJhY3RlciB9IGZyb20gXCIuL2FwaS9BcGlcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5leHBvcnQgaW50ZXJmYWNlIGNoYXJhY3RlcntcbiAgaWQ6bnVtYmVyO1xuICBuYW1lOnN0cmluZztcbiAgaW1hZ2U6c3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBmZXRjaFJlc3VsdHtcbiAgcmVzdWx0czpjaGFyYWN0ZXJbXVxufVxuXG5cblxuY29uc3QgSG9tZSA9ICgpPT57XG4gIGNvbnN0IFtjaGFyYWN0ZXJzLHNldENoYXJhY3RlcnNdID0gdXNlU3RhdGU8Y2hhcmFjdGVyW10+KCk7XG4gIGNvbnN0IFtwYWdlLHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IG5ld0ZldGNoID0gZ2V0Q2hhcmFjdGVyKGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlcj9wYWdlPSR7cGFnZX1gKS50aGVuKHJlcz0+e1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXRDaGFyYWN0ZXJzKHJlcy5yZXN1bHRzKVxuICAgIH0pO1xuICAgIFxuICAgIFxuICAgIFxuICB9LFtwYWdlXSlcblxuICByZXR1cm4oXG4gICAgPD5cbiAgICBcbiAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC13cmFwcGVyXCI+XG4gICAgICB7Y2hhcmFjdGVycz8ubWFwKChpdGVtKT0+PGxpIGtleT17aXRlbS5pZH0+e2l0ZW0ubmFtZX0gPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IC8+PC9saT4pfVxuICAgIDwvdWw+XG4gICAgPGJ1dHRvbj5wcmV2aW91czwvYnV0dG9uPlxuICAgIDxkaXY+cGFnZTp7cGFnZX08L2Rpdj5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRQYWdlKChwcmV2KT0+cHJldisxKX0+bmV4dDwvYnV0dG9uPlxuICAgIFxuICAgIDwvPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldENoYXJhY3RlciIsIkhvbWUiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsInBhZ2UiLCJzZXRQYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJuZXdGZXRjaCIsInRoZW4iLCJyZXMiLCJyZXN1bHRzIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwibGkiLCJuYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJpZCIsImJ1dHRvbiIsImRpdiIsIm9uQ2xpY2siLCJwcmV2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});