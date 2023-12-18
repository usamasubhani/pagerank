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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button */ \"(app-pages-browser)/./app/components/button.tsx\");\n/* harmony import */ var _components_graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/graph */ \"(app-pages-browser)/./app/components/graph.tsx\");\n/* harmony import */ var _components_nodeSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nodeSelector */ \"(app-pages-browser)/./app/components/nodeSelector.tsx\");\n/* harmony import */ var _func_pagerank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./func/pagerank */ \"(app-pages-browser)/./app/func/pagerank.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GRAPH = [\n    [\n        1,\n        0,\n        0,\n        1\n    ],\n    [\n        0,\n        1,\n        1,\n        0\n    ],\n    [\n        1,\n        0,\n        0,\n        1\n    ],\n    [\n        0,\n        1,\n        1,\n        0\n    ]\n];\nfunction Home() {\n    _s();\n    const [graph, setGraph] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(GRAPH);\n    const [pageRanks, setPageRanks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [fromNode, setFromNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [toNode, setToNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [nodeToRemove, setNodeToRemove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const ranks = (0,_func_pagerank__WEBPACK_IMPORTED_MODULE_5__.calculatePageRank)(graph);\n        setPageRanks(ranks);\n    }, [\n        graph\n    ]);\n    const addNode = ()=>{\n        const updatedGraph = [\n            ...graph,\n            new Array(graph.length).fill(0)\n        ];\n        updatedGraph.forEach((row)=>row.push(0));\n        setGraph(updatedGraph);\n    };\n    const addEdge = ()=>{\n        if (fromNode >= 0 && toNode >= 0 && fromNode < graph.length && toNode < graph.length) {\n            const updatedGraph = [\n                ...graph\n            ];\n            updatedGraph[fromNode][toNode] = 1;\n            setGraph(updatedGraph);\n            setFromNode(0);\n            setToNode(0);\n        }\n    };\n    const removeNode = ()=>{\n        let tempGraph = [\n            ...graph\n        ];\n        tempGraph.splice(nodeToRemove, 1);\n        setGraph(tempGraph);\n        setNodeToRemove(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen items-start justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-start flex-col justify-between font-mono text-sm lg:w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            label: \"Add Node\",\n                            onClick: addNode\n                        }, void 0, false, {\n                            fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nodeSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        label: \"From Node\",\n                                        value: fromNode,\n                                        onChange: setFromNode,\n                                        nodesCount: graph.length\n                                    }, void 0, false, {\n                                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nodeSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        label: \"To Node\",\n                                        value: toNode,\n                                        onChange: setToNode,\n                                        nodesCount: graph.length\n                                    }, void 0, false, {\n                                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                label: \"Add Edge\",\n                                onClick: addEdge\n                            }, void 0, false, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nodeSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                label: \"Remove\",\n                                value: nodeToRemove,\n                                onChange: setNodeToRemove,\n                                nodesCount: graph.length\n                            }, void 0, false, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                label: \"Remove Node\",\n                                onClick: removeNode\n                            }, void 0, false, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"PageRanks:\"\n                            }, void 0, false, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                className: \"table-auto\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: \"Node\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: \"PageRank value\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {}, void 0, false, {\n                                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_graph__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    graph: graph\n                }, void 0, false, {\n                    fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"JiPK5yWNLTv0Ea2trNUUPSlGUyQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MERBQ0osOERBQUNBOzBEQUFHOzs7Ozs7Ozs7Ozs7a0RBRU4sOERBQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLUCw4REFBQ1Y7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUM3Qix5REFBS0E7b0JBQUNLLE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QjtHQWpHd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL2J1dHRvblwiO1xuaW1wb3J0IEdyYXBoIGZyb20gXCIuL2NvbXBvbmVudHMvZ3JhcGhcIjtcbmltcG9ydCBOb2RlU2VsZWN0b3IgZnJvbSBcIi4vY29tcG9uZW50cy9ub2RlU2VsZWN0b3JcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVBhZ2VSYW5rIH0gZnJvbSBcIi4vZnVuYy9wYWdlcmFua1wiO1xuXG5jb25zdCBHUkFQSCA9IFtcbiAgWzEsIDAsIDAsIDFdLFxuICBbMCwgMSwgMSwgMF0sXG4gIFsxLCAwLCAwLCAxXSxcbiAgWzAsIDEsIDEsIDBdLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2dyYXBoLCBzZXRHcmFwaF0gPSB1c2VTdGF0ZShHUkFQSCk7XG4gIGNvbnN0IFtwYWdlUmFua3MsIHNldFBhZ2VSYW5rc10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xuICBjb25zdCBbZnJvbU5vZGUsIHNldEZyb21Ob2RlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG9Ob2RlLCBzZXRUb05vZGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtub2RlVG9SZW1vdmUsIHNldE5vZGVUb1JlbW92ZV0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJhbmtzID0gY2FsY3VsYXRlUGFnZVJhbmsoZ3JhcGgpO1xuICAgIHNldFBhZ2VSYW5rcyhyYW5rcyk7XG4gIH0sIFtncmFwaF0pO1xuXG4gIGNvbnN0IGFkZE5vZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZEdyYXBoID0gWy4uLmdyYXBoLCBuZXcgQXJyYXkoZ3JhcGgubGVuZ3RoKS5maWxsKDApXTtcbiAgICB1cGRhdGVkR3JhcGguZm9yRWFjaCgocm93KSA9PiByb3cucHVzaCgwKSk7XG4gICAgc2V0R3JhcGgodXBkYXRlZEdyYXBoKTtcbiAgfTtcblxuICBjb25zdCBhZGRFZGdlID0gKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGZyb21Ob2RlID49IDAgJiZcbiAgICAgIHRvTm9kZSA+PSAwICYmXG4gICAgICBmcm9tTm9kZSA8IGdyYXBoLmxlbmd0aCAmJlxuICAgICAgdG9Ob2RlIDwgZ3JhcGgubGVuZ3RoXG4gICAgKSB7XG4gICAgICBjb25zdCB1cGRhdGVkR3JhcGggPSBbLi4uZ3JhcGhdO1xuICAgICAgdXBkYXRlZEdyYXBoW2Zyb21Ob2RlXVt0b05vZGVdID0gMTtcbiAgICAgIHNldEdyYXBoKHVwZGF0ZWRHcmFwaCk7XG5cbiAgICAgIHNldEZyb21Ob2RlKDApO1xuICAgICAgc2V0VG9Ob2RlKDApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1vdmVOb2RlID0gKCkgPT4ge1xuICAgIGxldCB0ZW1wR3JhcGggPSBbLi4uZ3JhcGhdO1xuXG4gICAgdGVtcEdyYXBoLnNwbGljZShub2RlVG9SZW1vdmUsIDEpO1xuXG4gICAgc2V0R3JhcGgodGVtcEdyYXBoKTtcblxuICAgIHNldE5vZGVUb1JlbW92ZSgwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGZvbnQtbW9ubyB0ZXh0LXNtIGxnOnctMS8yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XG4gICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkFkZCBOb2RlXCIgb25DbGljaz17YWRkTm9kZX0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgPE5vZGVTZWxlY3RvclxuICAgICAgICAgICAgICBsYWJlbD1cIkZyb20gTm9kZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmcm9tTm9kZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEZyb21Ob2RlfVxuICAgICAgICAgICAgICBub2Rlc0NvdW50PXtncmFwaC5sZW5ndGh9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Tm9kZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGxhYmVsPVwiVG8gTm9kZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0b05vZGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRUb05vZGV9XG4gICAgICAgICAgICAgIG5vZGVzQ291bnQ9e2dyYXBoLmxlbmd0aH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkFkZCBFZGdlXCIgb25DbGljaz17YWRkRWRnZX0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgICAgICA8Tm9kZVNlbGVjdG9yXG4gICAgICAgICAgICBsYWJlbD1cIlJlbW92ZVwiXG4gICAgICAgICAgICB2YWx1ZT17bm9kZVRvUmVtb3ZlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldE5vZGVUb1JlbW92ZX1cbiAgICAgICAgICAgIG5vZGVzQ291bnQ9e2dyYXBoLmxlbmd0aH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJSZW1vdmUgTm9kZVwiIG9uQ2xpY2s9e3JlbW92ZU5vZGV9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XG4gICAgICAgICAgPGgzPlBhZ2VSYW5rczo8L2gzPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1hdXRvXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5Ob2RlPC90cj5cbiAgICAgICAgICAgICAgPHRyPlBhZ2VSYW5rIHZhbHVlPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+PC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8yXCI+XG4gICAgICAgIDxHcmFwaCBncmFwaD17Z3JhcGh9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJHcmFwaCIsIk5vZGVTZWxlY3RvciIsImNhbGN1bGF0ZVBhZ2VSYW5rIiwiR1JBUEgiLCJIb21lIiwiZ3JhcGgiLCJzZXRHcmFwaCIsInBhZ2VSYW5rcyIsInNldFBhZ2VSYW5rcyIsImZyb21Ob2RlIiwic2V0RnJvbU5vZGUiLCJ0b05vZGUiLCJzZXRUb05vZGUiLCJub2RlVG9SZW1vdmUiLCJzZXROb2RlVG9SZW1vdmUiLCJyYW5rcyIsImFkZE5vZGUiLCJ1cGRhdGVkR3JhcGgiLCJBcnJheSIsImxlbmd0aCIsImZpbGwiLCJmb3JFYWNoIiwicm93IiwicHVzaCIsImFkZEVkZ2UiLCJyZW1vdmVOb2RlIiwidGVtcEdyYXBoIiwic3BsaWNlIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwib25DbGljayIsInZhbHVlIiwib25DaGFuZ2UiLCJub2Rlc0NvdW50IiwiaDMiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0Ym9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});