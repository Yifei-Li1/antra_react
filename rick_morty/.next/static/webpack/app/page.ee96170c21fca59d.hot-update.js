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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Api */ \"(app-client)/./src/app/api/Api.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"(app-client)/./src/app/style.css\");\n/* harmony import */ var _mui_material_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Pagination */ \"(app-client)/./node_modules/@mui/material/Pagination/Pagination.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [pageInfo, setPageInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        const newFetch = (0,_api_Api__WEBPACK_IMPORTED_MODULE_2__.getCharacter)(\"https://rickandmortyapi.com/api/character?page=\".concat(page)).then((res)=>{\n            setLoading(false);\n            setCharacters(res.results);\n            setPageInfo(res.info);\n        });\n    }, [\n        page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lds-dual-ring\",\n                \"data-testid\": \"loader\"\n            }, void 0, false, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 14\n            }, undefined) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-wrapper\",\n                children: characters === null || characters === void 0 ? void 0 : characters.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            item.name,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.image\n                            }, void 0, false, {\n                                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 62\n                            }, undefined)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 32\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"previous\"\n            }, void 0, false, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"page:\",\n                    page\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setPage((prev)=>prev + 1),\n                children: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                count: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.info.page\n            }, void 0, false, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"wEAPYdQUM3t7TfqcTqmWgoMrKPo=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDZ0Q7QUFDUDtBQUNyQjtBQUM4QjtBQWVsRCxNQUFNSSxPQUFVOztJQUNkLE1BQU0sQ0FBQ0MsWUFBV0MsY0FBYyxHQUFHTCwrQ0FBUUE7SUFDM0MsTUFBTSxDQUFDTSxNQUFLQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2hDLE1BQU0sQ0FBQ1EsVUFBU0MsWUFBWSxHQUFHVCwrQ0FBUUE7SUFDdkMsTUFBTSxDQUFDVSxTQUFRQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3RDRCxnREFBU0EsQ0FBQztRQUNSWSxXQUFXO1FBRVgsTUFBTUMsV0FBV1gsc0RBQVlBLENBQUMsa0RBQXVELE9BQUxLLE9BQVFPLEtBQUtDLENBQUFBO1lBQzNGSCxXQUFXO1lBQ1hOLGNBQWNTLElBQUlDO1lBQ2xCTixZQUFZSyxJQUFJRTtRQUNsQjtJQUNGLEdBQUU7UUFBQ1Y7S0FBSztJQUVSLHFCQUNFOztZQUNDSSx3QkFBUSw4REFBQ087Z0JBQUlDLFdBQVU7Z0JBQWdCQyxlQUFZOzs7Ozs0QkFBZ0I7MEJBQ3BFLDhEQUFDQztnQkFBR0YsV0FBVTswQkFDWGQsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZaUIsSUFBSSxDQUFDQyxxQkFBTyw4REFBQ0M7OzRCQUFrQkQsS0FBS0U7NEJBQUs7MENBQUMsOERBQUNDO2dDQUFJQyxLQUFLSixLQUFLSzs7Ozs7Ozt1QkFBcENMLEtBQUtNOzs7Ozs7Ozs7OzBCQUV6Qyw4REFBQ0M7MEJBQU87Ozs7OzswQkFDUiw4REFBQ1o7O29CQUFJO29CQUFNWDs7Ozs7OzswQkFDWCw4REFBQ3VCO2dCQUFPQyxTQUFTLElBQUl2QixRQUFRLENBQUN3QixPQUFPQSxPQUFLOzBCQUFJOzs7Ozs7MEJBRTlDLDhEQUFDN0IsZ0VBQVVBO2dCQUFDOEIsS0FBSyxFQUFFeEIscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVUSxLQUFLVjs7Ozs7Ozs7QUFHdEM7R0E1Qk1IO0tBQUFBO0FBNkJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRDaGFyYWN0ZXIgfSBmcm9tIFwiLi9hcGkvQXBpXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnQG11aS9tYXRlcmlhbC9QYWdpbmF0aW9uJztcbmV4cG9ydCBpbnRlcmZhY2UgY2hhcmFjdGVye1xuICBpZDpudW1iZXI7XG4gIG5hbWU6c3RyaW5nO1xuICBpbWFnZTpzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIGZldGNoUmVzdWx0e1xuICByZXN1bHRzOmNoYXJhY3RlcltdXG4gIGluZm86e1xuICAgIHBhZ2U6bnVtYmVyXG4gIH1cbn1cblxuXG5cbmNvbnN0IEhvbWU6RkMgPSAoKT0+e1xuICBjb25zdCBbY2hhcmFjdGVycyxzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlPGNoYXJhY3RlcltdPigpO1xuICBjb25zdCBbcGFnZSxzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbcGFnZUluZm8sc2V0UGFnZUluZm9dID0gdXNlU3RhdGU8ZmV0Y2hSZXN1bHQ+KCk7XG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgXG4gICAgY29uc3QgbmV3RmV0Y2ggPSBnZXRDaGFyYWN0ZXIoYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyP3BhZ2U9JHtwYWdlfWApLnRoZW4ocmVzPT57XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHNldENoYXJhY3RlcnMocmVzLnJlc3VsdHMpXG4gICAgICBzZXRQYWdlSW5mbyhyZXMuaW5mbylcbiAgICB9KTtcbiAgfSxbcGFnZV0pXG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAge2xvYWRpbmc/PGRpdiBjbGFzc05hbWU9XCJsZHMtZHVhbC1yaW5nXCIgZGF0YS10ZXN0aWQ9XCJsb2FkZXJcIj48L2Rpdj46Jyd9XG4gICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtd3JhcHBlclwiPlxuICAgICAge2NoYXJhY3RlcnM/Lm1hcCgoaXRlbSk9PjxsaSBrZXk9e2l0ZW0uaWR9PntpdGVtLm5hbWV9IDxpbWcgc3JjPXtpdGVtLmltYWdlfSAvPjwvbGk+KX1cbiAgICA8L3VsPlxuICAgIDxidXR0b24+cHJldmlvdXM8L2J1dHRvbj5cbiAgICA8ZGl2PnBhZ2U6e3BhZ2V9PC9kaXY+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0UGFnZSgocHJldik9PnByZXYrMSl9Pm5leHQ8L2J1dHRvbj5cbiAgICBcbiAgICA8UGFnaW5hdGlvbiBjb3VudD17cGFnZUluZm8/LmluZm8ucGFnZX0+PC9QYWdpbmF0aW9uPlxuICAgIDwvPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldENoYXJhY3RlciIsIlBhZ2luYXRpb24iLCJIb21lIiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJwYWdlIiwic2V0UGFnZSIsInBhZ2VJbmZvIiwic2V0UGFnZUluZm8iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm5ld0ZldGNoIiwidGhlbiIsInJlcyIsInJlc3VsdHMiLCJpbmZvIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS10ZXN0aWQiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsIm5hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImlkIiwiYnV0dG9uIiwib25DbGljayIsInByZXYiLCJjb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});