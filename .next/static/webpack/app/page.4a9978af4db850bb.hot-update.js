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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button */ \"(app-pages-browser)/./app/components/button.tsx\");\n/* harmony import */ var _components_graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/graph */ \"(app-pages-browser)/./app/components/graph.tsx\");\n/* harmony import */ var _components_nodeSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nodeSelector */ \"(app-pages-browser)/./app/components/nodeSelector.tsx\");\n/* harmony import */ var _func_pagerank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./func/pagerank */ \"(app-pages-browser)/./app/func/pagerank.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GRAPH = [\n    [\n        1,\n        0,\n        0,\n        1\n    ],\n    [\n        0,\n        1,\n        1,\n        0\n    ],\n    [\n        1,\n        0,\n        0,\n        1\n    ],\n    [\n        0,\n        1,\n        1,\n        0\n    ]\n];\nfunction Home() {\n    _s();\n    const [graph, setGraph] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(GRAPH);\n    const [pageRanks, setPageRanks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [fromNode, setFromNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [toNode, setToNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [nodeToRemove, setNodeToRemove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const ranks = (0,_func_pagerank__WEBPACK_IMPORTED_MODULE_5__.calculatePageRank)(graph);\n        setPageRanks(ranks);\n    }, [\n        graph\n    ]);\n    const addNode = ()=>{\n        const updatedGraph = [\n            ...graph,\n            new Array(graph.length).fill(0)\n        ];\n        updatedGraph.forEach((row)=>row.push(0));\n        setGraph(updatedGraph);\n    };\n    const addEdge = ()=>{\n        if (fromNode >= 0 && toNode >= 0 && fromNode < graph.length && toNode < graph.length) {\n            const updatedGraph = [\n                ...graph\n            ];\n            updatedGraph[fromNode][toNode] = 1;\n            setGraph(updatedGraph);\n            setFromNode(0);\n            setToNode(0);\n        }\n    };\n    const removeNode = ()=>{\n        let tempGraph = [\n            ...graph\n        ];\n        tempGraph.splice(nodeToRemove, 1);\n        setGraph(tempGraph);\n        setNodeToRemove(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen items-start justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-start flex-col justify-between font-mono text-sm lg:w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            label: \"Add Node\",\n                            onClick: addNode\n                        }, void 0, false, {\n                            fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nodeSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        label: \"From Node\",\n                                        value: fromNode,\n                                        onChange: setFromNode,\n                                        nodesCount: graph.length\n                                    }, void 0, false, {\n                                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nodeSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        label: \"To Node\",\n                                        value: toNode,\n                                        onChange: setToNode,\n                                        nodesCount: graph.length\n                                    }, void 0, false, {\n                                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                label: \"Add Edge\",\n                                onClick: addEdge\n                            }, void 0, false, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nodeSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                label: \"Remove\",\n                                value: nodeToRemove,\n                                onChange: setNodeToRemove,\n                                nodesCount: graph.length\n                            }, void 0, false, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                label: \"Remove Node\",\n                                onClick: removeNode\n                            }, void 0, false, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"min-w-full divide-y divide-gray-200\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"Node\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                children: \"PageRank value\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: pageRanks.map((rank, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: index\n                                                }, void 0, false, {\n                                                    fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: (rank * 100).toFixed(2)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_graph__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    graph: graph\n                }, void 0, false, {\n                    fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"JiPK5yWNLTv0Ea2trNUUPSlGUyQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHUiw4REFBQ0M7OENBQ0VqQyxVQUFVa0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNwQiw4REFBQ0w7OzhEQUNDLDhEQUFDTTs4REFBSUQ7Ozs7Ozs4REFDTCw4REFBQ0M7OERBQUksQ0FBQ0YsT0FBTyxHQUFFLEVBQUdHLE9BQU8sQ0FBQzs7Ozs7OzsyQ0FGbkJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBVW5CLDhEQUFDYjtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQzdCLHlEQUFLQTtvQkFBQ0ssT0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRCO0dBekd3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvYnV0dG9uXCI7XG5pbXBvcnQgR3JhcGggZnJvbSBcIi4vY29tcG9uZW50cy9ncmFwaFwiO1xuaW1wb3J0IE5vZGVTZWxlY3RvciBmcm9tIFwiLi9jb21wb25lbnRzL25vZGVTZWxlY3RvclwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlUGFnZVJhbmsgfSBmcm9tIFwiLi9mdW5jL3BhZ2VyYW5rXCI7XG5cbmNvbnN0IEdSQVBIID0gW1xuICBbMSwgMCwgMCwgMV0sXG4gIFswLCAxLCAxLCAwXSxcbiAgWzEsIDAsIDAsIDFdLFxuICBbMCwgMSwgMSwgMF0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZ3JhcGgsIHNldEdyYXBoXSA9IHVzZVN0YXRlKEdSQVBIKTtcbiAgY29uc3QgW3BhZ2VSYW5rcywgc2V0UGFnZVJhbmtzXSA9IHVzZVN0YXRlPG51bWJlcltdPihbXSk7XG4gIGNvbnN0IFtmcm9tTm9kZSwgc2V0RnJvbU5vZGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0b05vZGUsIHNldFRvTm9kZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW25vZGVUb1JlbW92ZSwgc2V0Tm9kZVRvUmVtb3ZlXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmFua3MgPSBjYWxjdWxhdGVQYWdlUmFuayhncmFwaCk7XG4gICAgc2V0UGFnZVJhbmtzKHJhbmtzKTtcbiAgfSwgW2dyYXBoXSk7XG5cbiAgY29uc3QgYWRkTm9kZSA9ICgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkR3JhcGggPSBbLi4uZ3JhcGgsIG5ldyBBcnJheShncmFwaC5sZW5ndGgpLmZpbGwoMCldO1xuICAgIHVwZGF0ZWRHcmFwaC5mb3JFYWNoKChyb3cpID0+IHJvdy5wdXNoKDApKTtcbiAgICBzZXRHcmFwaCh1cGRhdGVkR3JhcGgpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEVkZ2UgPSAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgZnJvbU5vZGUgPj0gMCAmJlxuICAgICAgdG9Ob2RlID49IDAgJiZcbiAgICAgIGZyb21Ob2RlIDwgZ3JhcGgubGVuZ3RoICYmXG4gICAgICB0b05vZGUgPCBncmFwaC5sZW5ndGhcbiAgICApIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRHcmFwaCA9IFsuLi5ncmFwaF07XG4gICAgICB1cGRhdGVkR3JhcGhbZnJvbU5vZGVdW3RvTm9kZV0gPSAxO1xuICAgICAgc2V0R3JhcGgodXBkYXRlZEdyYXBoKTtcblxuICAgICAgc2V0RnJvbU5vZGUoMCk7XG4gICAgICBzZXRUb05vZGUoMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZU5vZGUgPSAoKSA9PiB7XG4gICAgbGV0IHRlbXBHcmFwaCA9IFsuLi5ncmFwaF07XG5cbiAgICB0ZW1wR3JhcGguc3BsaWNlKG5vZGVUb1JlbW92ZSwgMSk7XG5cbiAgICBzZXRHcmFwaCh0ZW1wR3JhcGgpO1xuXG4gICAgc2V0Tm9kZVRvUmVtb3ZlKDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc20gbGc6dy0xLzJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiQWRkIE5vZGVcIiBvbkNsaWNrPXthZGROb2RlfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICA8Tm9kZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGxhYmVsPVwiRnJvbSBOb2RlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zyb21Ob2RlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0RnJvbU5vZGV9XG4gICAgICAgICAgICAgIG5vZGVzQ291bnQ9e2dyYXBoLmxlbmd0aH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxOb2RlU2VsZWN0b3JcbiAgICAgICAgICAgICAgbGFiZWw9XCJUbyBOb2RlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RvTm9kZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFRvTm9kZX1cbiAgICAgICAgICAgICAgbm9kZXNDb3VudD17Z3JhcGgubGVuZ3RofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiQWRkIEVkZ2VcIiBvbkNsaWNrPXthZGRFZGdlfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxuICAgICAgICAgIDxOb2RlU2VsZWN0b3JcbiAgICAgICAgICAgIGxhYmVsPVwiUmVtb3ZlXCJcbiAgICAgICAgICAgIHZhbHVlPXtub2RlVG9SZW1vdmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0Tm9kZVRvUmVtb3ZlfVxuICAgICAgICAgICAgbm9kZXNDb3VudD17Z3JhcGgubGVuZ3RofVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlJlbW92ZSBOb2RlXCIgb25DbGljaz17cmVtb3ZlTm9kZX0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5Ob2RlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+UGFnZVJhbmsgdmFsdWU8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge3BhZ2VSYW5rcy5tYXAoKHJhbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPHRkPntpbmRleH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPnsocmFuayAqIDEwMCkudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8yXCI+XG4gICAgICAgIDxHcmFwaCBncmFwaD17Z3JhcGh9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJHcmFwaCIsIk5vZGVTZWxlY3RvciIsImNhbGN1bGF0ZVBhZ2VSYW5rIiwiR1JBUEgiLCJIb21lIiwiZ3JhcGgiLCJzZXRHcmFwaCIsInBhZ2VSYW5rcyIsInNldFBhZ2VSYW5rcyIsImZyb21Ob2RlIiwic2V0RnJvbU5vZGUiLCJ0b05vZGUiLCJzZXRUb05vZGUiLCJub2RlVG9SZW1vdmUiLCJzZXROb2RlVG9SZW1vdmUiLCJyYW5rcyIsImFkZE5vZGUiLCJ1cGRhdGVkR3JhcGgiLCJBcnJheSIsImxlbmd0aCIsImZpbGwiLCJmb3JFYWNoIiwicm93IiwicHVzaCIsImFkZEVkZ2UiLCJyZW1vdmVOb2RlIiwidGVtcEdyYXBoIiwic3BsaWNlIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwib25DbGljayIsInZhbHVlIiwib25DaGFuZ2UiLCJub2Rlc0NvdW50IiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsInJhbmsiLCJpbmRleCIsInRkIiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});