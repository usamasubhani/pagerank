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

/***/ "(app-pages-browser)/./app/components/nodeSelector.tsx":
/*!*****************************************!*\
  !*** ./app/components/nodeSelector.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/menu/menu.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst NodeSelector = (param)=>{\n    let { label, nodesCount, value, onChange } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-32\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"mb-1\",\n                    children: [\n                        label,\n                        \":\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/components/nodeSelector.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                    as: \"div\",\n                    className: \"relative inline-block text-left \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Button, {\n                                className: \"inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 \",\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/components/nodeSelector.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/components/nodeSelector.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Items, {\n                            className: \"absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"py-1\",\n                                children: [\n                                    ...Array(nodesCount)\n                                ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                                        children: (param)=>{\n                                            let { active } = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                onClick: ()=>onChange(index),\n                                                href: \"#\",\n                                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(active ? \"bg-gray-100 text-gray-900\" : \"text-gray-700\", \"block px-4 py-2 text-sm\"),\n                                                children: index\n                                            }, void 0, false, {\n                                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/components/nodeSelector.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 21\n                                            }, undefined);\n                                        }\n                                    }, index, false, {\n                                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/components/nodeSelector.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/components/nodeSelector.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/components/nodeSelector.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/components/nodeSelector.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/components/nodeSelector.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/components/nodeSelector.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NodeSelector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NodeSelector);\nvar _c;\n$RefreshReg$(_c, \"NodeSelector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25vZGVTZWxlY3Rvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFDTDtBQUNWO0FBUzFCLE1BQU1HLGVBQWU7UUFBQyxFQUNwQkMsS0FBSyxFQUNMQyxVQUFVLEVBQ1ZDLEtBQUssRUFDTEMsUUFBUSxFQUNNO0lBQ2QscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNMO1lBQU1LLFdBQVU7OzhCQUNmLDhEQUFDQztvQkFBS0QsV0FBVTs7d0JBQVFMO3dCQUFNOzs7Ozs7OzhCQUM5Qiw4REFBQ0osOEVBQUlBO29CQUFDVyxJQUFHO29CQUFNRixXQUFVOztzQ0FDdkIsOERBQUNEO3NDQUNDLDRFQUFDUiw4RUFBSUEsQ0FBQ1ksTUFBTTtnQ0FBQ0gsV0FBVTswQ0FDcEJIOzs7Ozs7Ozs7OztzQ0FHTCw4REFBQ04sOEVBQUlBLENBQUNhLEtBQUs7NEJBQUNKLFdBQVU7c0NBQ3BCLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWjt1Q0FBSUssTUFBTVQ7aUNBQVksQ0FBQ1UsR0FBRyxDQUFDLENBQUNDLEdBQUdDLHNCQUM5Qiw4REFBQ2pCLDhFQUFJQSxDQUFDa0IsSUFBSTtrREFDUDtnREFBQyxFQUFFQyxNQUFNLEVBQUU7aUVBQ1YsOERBQUNDO2dEQUNDQyxTQUFTLElBQU1kLFNBQVNVO2dEQUN4QkssTUFBSztnREFDTGIsV0FBV1IsaURBQVVBLENBQ25Ca0IsU0FBUyw4QkFBOEIsaUJBQ3ZDOzBEQUdERjs7Ozs7Ozt1Q0FWU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJoQztLQXhDTWQ7QUEwQ04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbm9kZVNlbGVjdG9yLnRzeD9mY2YzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbnUgfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgRHJvcGRvd25Qcm9wcyA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgbm9kZXNDb3VudDogbnVtYmVyO1xuICB2YWx1ZTogbnVtYmVyO1xuICBvbkNoYW5nZTogKGU6IGFueSkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IE5vZGVTZWxlY3RvciA9ICh7XG4gIGxhYmVsLFxuICBub2Rlc0NvdW50LFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG59OiBEcm9wZG93blByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMyXCI+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYi0xXCI+e2xhYmVsfTo8L3NwYW4+XG4gICAgICAgIDxNZW51IGFzPVwiZGl2XCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIHRleHQtbGVmdCBcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE1lbnUuQnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJnLXdoaXRlIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBcIj5cbiAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9NZW51LkJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TWVudS5JdGVtcyBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHotMTAgbXQtMiB3LTMyIG9yaWdpbi10b3AtcmlnaHQgcm91bmRlZC1tZCBiZy13aGl0ZSBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTFcIj5cbiAgICAgICAgICAgICAge1suLi5BcnJheShub2Rlc0NvdW50KV0ubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICB7KHsgYWN0aXZlIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/IFwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMFwiIDogXCJ0ZXh0LWdyYXktNzAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2luZGV4fVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTWVudS5JdGVtcz5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGVTZWxlY3RvcjtcbiJdLCJuYW1lcyI6WyJNZW51IiwiY2xhc3NOYW1lcyIsIlJlYWN0IiwiTm9kZVNlbGVjdG9yIiwibGFiZWwiLCJub2Rlc0NvdW50IiwidmFsdWUiLCJvbkNoYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJhcyIsIkJ1dHRvbiIsIkl0ZW1zIiwiQXJyYXkiLCJtYXAiLCJfIiwiaW5kZXgiLCJJdGVtIiwiYWN0aXZlIiwiYSIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/nodeSelector.tsx\n"));

/***/ })

});