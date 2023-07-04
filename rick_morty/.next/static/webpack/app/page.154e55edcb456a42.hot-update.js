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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Api */ \"(app-client)/./src/app/api/Api.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"(app-client)/./src/app/style.css\");\n/* harmony import */ var _mui_material_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Pagination */ \"(app-client)/./node_modules/@mui/material/Pagination/Pagination.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [pageInfo, setPageInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        const newFetch = (0,_api_Api__WEBPACK_IMPORTED_MODULE_2__.getCharacter)(\"https://rickandmortyapi.com/api/character?page=\".concat(page)).then((res)=>{\n            setLoading(false);\n            setCharacters(res.results);\n            setPageInfo(res.info.pages);\n        });\n    }, [\n        page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lds-dual-ring\",\n                \"data-testid\": \"loader\"\n            }, void 0, false, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 14\n            }, undefined) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-wrapper\",\n                children: characters === null || characters === void 0 ? void 0 : characters.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            item.name,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.image\n                            }, void 0, false, {\n                                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 62\n                            }, undefined)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 32\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"previous\"\n            }, void 0, false, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"page:\",\n                    page\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setPage((prev)=>prev + 1),\n                children: \"next\"\n            }, void 0, false, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                count: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.info.page\n            }, void 0, false, {\n                fileName: \"/Users/yifeili/Documents/antra/frontend/rick_morty/src/app/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"A9jBzNyYwjKHP653H1bvHT/Cw+Y=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDZ0Q7QUFDUDtBQUNyQjtBQUM4QjtBQWVsRCxNQUFNSSxPQUFVOztJQUNkLE1BQU0sQ0FBQ0MsWUFBV0MsY0FBYyxHQUFHTCwrQ0FBUUE7SUFDM0MsTUFBTSxDQUFDTSxNQUFLQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2hDLE1BQU0sQ0FBQ1EsVUFBU0MsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBUztJQUNoRCxNQUFNLENBQUNVLFNBQVFDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFDdENELGdEQUFTQSxDQUFDO1FBQ1JZLFdBQVc7UUFFWCxNQUFNQyxXQUFXWCxzREFBWUEsQ0FBQyxrREFBdUQsT0FBTEssT0FBUU8sS0FBS0MsQ0FBQUE7WUFDM0ZILFdBQVc7WUFDWE4sY0FBY1MsSUFBSUM7WUFDbEJOLFlBQVlLLElBQUlFLEtBQUtDO1FBQ3ZCO0lBQ0YsR0FBRTtRQUFDWDtLQUFLO0lBRVIscUJBQ0U7O1lBQ0NJLHdCQUFRLDhEQUFDUTtnQkFBSUMsV0FBVTtnQkFBZ0JDLGVBQVk7Ozs7OzRCQUFnQjswQkFDcEUsOERBQUNDO2dCQUFHRixXQUFVOzBCQUNYZix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVlrQixJQUFJLENBQUNDLHFCQUFPLDhEQUFDQzs7NEJBQWtCRCxLQUFLRTs0QkFBSzswQ0FBQyw4REFBQ0M7Z0NBQUlDLEtBQUtKLEtBQUtLOzs7Ozs7O3VCQUFwQ0wsS0FBS007Ozs7Ozs7Ozs7MEJBRXpDLDhEQUFDQzswQkFBTzs7Ozs7OzBCQUNSLDhEQUFDWjs7b0JBQUk7b0JBQU1aOzs7Ozs7OzBCQUNYLDhEQUFDd0I7Z0JBQU9DLFNBQVMsSUFBSXhCLFFBQVEsQ0FBQ3lCLE9BQU9BLE9BQUs7MEJBQUk7Ozs7OzswQkFFOUMsOERBQUM5QixnRUFBVUE7Z0JBQUMrQixLQUFLLEVBQUV6QixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVRLEtBQUtWOzs7Ozs7OztBQUd0QztHQTVCTUg7S0FBQUE7QUE2Qk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldENoYXJhY3RlciB9IGZyb20gXCIuL2FwaS9BcGlcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAbXVpL21hdGVyaWFsL1BhZ2luYXRpb24nO1xuZXhwb3J0IGludGVyZmFjZSBjaGFyYWN0ZXJ7XG4gIGlkOm51bWJlcjtcbiAgbmFtZTpzdHJpbmc7XG4gIGltYWdlOnN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgZmV0Y2hSZXN1bHR7XG4gIHJlc3VsdHM6Y2hhcmFjdGVyW11cbiAgaW5mbzp7XG4gICAgcGFnZTpudW1iZXJcbiAgfVxufVxuXG5cblxuY29uc3QgSG9tZTpGQyA9ICgpPT57XG4gIGNvbnN0IFtjaGFyYWN0ZXJzLHNldENoYXJhY3RlcnNdID0gdXNlU3RhdGU8Y2hhcmFjdGVyW10+KCk7XG4gIGNvbnN0IFtwYWdlLHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtwYWdlSW5mbyxzZXRQYWdlSW5mb10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgIFxuICAgIGNvbnN0IG5ld0ZldGNoID0gZ2V0Q2hhcmFjdGVyKGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlcj9wYWdlPSR7cGFnZX1gKS50aGVuKHJlcz0+e1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXRDaGFyYWN0ZXJzKHJlcy5yZXN1bHRzKVxuICAgICAgc2V0UGFnZUluZm8ocmVzLmluZm8ucGFnZXMpXG4gICAgfSk7XG4gIH0sW3BhZ2VdKVxuXG4gIHJldHVybihcbiAgICA8PlxuICAgIHtsb2FkaW5nPzxkaXYgY2xhc3NOYW1lPVwibGRzLWR1YWwtcmluZ1wiIGRhdGEtdGVzdGlkPVwibG9hZGVyXCI+PC9kaXY+OicnfVxuICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXdyYXBwZXJcIj5cbiAgICAgIHtjaGFyYWN0ZXJzPy5tYXAoKGl0ZW0pPT48bGkga2V5PXtpdGVtLmlkfT57aXRlbS5uYW1lfSA8aW1nIHNyYz17aXRlbS5pbWFnZX0gLz48L2xpPil9XG4gICAgPC91bD5cbiAgICA8YnV0dG9uPnByZXZpb3VzPC9idXR0b24+XG4gICAgPGRpdj5wYWdlOntwYWdlfTwvZGl2PlxuICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldFBhZ2UoKHByZXYpPT5wcmV2KzEpfT5uZXh0PC9idXR0b24+XG4gICAgXG4gICAgPFBhZ2luYXRpb24gY291bnQ9e3BhZ2VJbmZvPy5pbmZvLnBhZ2V9PjwvUGFnaW5hdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRDaGFyYWN0ZXIiLCJQYWdpbmF0aW9uIiwiSG9tZSIsImNoYXJhY3RlcnMiLCJzZXRDaGFyYWN0ZXJzIiwicGFnZSIsInNldFBhZ2UiLCJwYWdlSW5mbyIsInNldFBhZ2VJbmZvIiwibG9hZGluZyIsInNldExvYWRpbmciLCJuZXdGZXRjaCIsInRoZW4iLCJyZXMiLCJyZXN1bHRzIiwiaW5mbyIsInBhZ2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS10ZXN0aWQiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsIm5hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImlkIiwiYnV0dG9uIiwib25DbGljayIsInByZXYiLCJjb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});