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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button */ \"(app-pages-browser)/./app/components/button.tsx\");\n/* harmony import */ var _components_graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/graph */ \"(app-pages-browser)/./app/components/graph.tsx\");\n/* harmony import */ var _components_nodeSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nodeSelector */ \"(app-pages-browser)/./app/components/nodeSelector.tsx\");\n/* harmony import */ var _func_pagerank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./func/pagerank */ \"(app-pages-browser)/./app/func/pagerank.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GRAPH = [\n    [\n        1,\n        0,\n        0,\n        1\n    ],\n    [\n        0,\n        1,\n        1,\n        0\n    ],\n    [\n        1,\n        0,\n        0,\n        1\n    ],\n    [\n        0,\n        1,\n        1,\n        0\n    ]\n];\nfunction Home() {\n    _s();\n    const [graph, setGraph] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(GRAPH);\n    const [pageRanks, setPageRanks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [fromNode, setFromNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [toNode, setToNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [nodeToRemove, setNodeToRemove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const ranks = (0,_func_pagerank__WEBPACK_IMPORTED_MODULE_5__.calculatePageRank)(graph);\n        setPageRanks(ranks);\n    }, [\n        graph\n    ]);\n    const addNode = ()=>{\n        const updatedGraph = [\n            ...graph,\n            new Array(graph.length).fill(0)\n        ];\n        updatedGraph.forEach((row)=>row.push(0));\n        setGraph(updatedGraph);\n    };\n    const addEdge = ()=>{\n        if (fromNode >= 0 && toNode >= 0 && fromNode < graph.length && toNode < graph.length) {\n            const updatedGraph = [\n                ...graph\n            ];\n            updatedGraph[fromNode][toNode] = 1;\n            setGraph(updatedGraph);\n            setFromNode(0);\n            setToNode(0);\n        }\n    };\n    const removeNode = ()=>{\n        let tempGraph = [\n            ...graph\n        ];\n        tempGraph.splice(nodeToRemove, 1);\n        setGraph(tempGraph);\n        setNodeToRemove(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen items-start justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-start flex-col justify-between font-mono text-sm lg:w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            label: \"Add Node\",\n                            onClick: addNode\n                        }, void 0, false, {\n                            fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nodeSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        label: \"From Node\",\n                                        value: fromNode,\n                                        onChange: setFromNode,\n                                        nodesCount: graph.length\n                                    }, void 0, false, {\n                                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nodeSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        label: \"To Node\",\n                                        value: toNode,\n                                        onChange: setToNode,\n                                        nodesCount: graph.length\n                                    }, void 0, false, {\n                                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                label: \"Add Edge\",\n                                onClick: addEdge\n                            }, void 0, false, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nodeSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                label: \"Remove\",\n                                value: nodeToRemove,\n                                onChange: setNodeToRemove,\n                                nodesCount: graph.length\n                            }, void 0, false, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                label: \"Remove Node\",\n                                onClick: removeNode\n                            }, void 0, false, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"PageRanks:\"\n                            }, void 0, false, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                className: \"table-auto\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    children: \"Node\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    children: \"PageRank value\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                        children: pageRanks.map((rank, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    children: (rank * 100).toFixed(2)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, index, false, {\n                                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                                lineNumber: 106,\n                                                columnNumber: 17\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_graph__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    graph: graph\n                }, void 0, false, {\n                    fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/page.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"JiPK5yWNLTv0Ea2trNUUPSlGUyQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0g7QUFDRjtBQUNjO0FBQ0Q7QUFFcEQsTUFBTU0sUUFBUTtJQUNaO1FBQUM7UUFBRztRQUFHO1FBQUc7S0FBRTtJQUNaO1FBQUM7UUFBRztRQUFHO1FBQUc7S0FBRTtJQUNaO1FBQUM7UUFBRztRQUFHO1FBQUc7S0FBRTtJQUNaO1FBQUM7UUFBRztRQUFHO1FBQUc7S0FBRTtDQUNiO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQ0s7SUFDbkMsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFXLEVBQUU7SUFDdkQsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2EsUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNlLGNBQWNDLGdCQUFnQixHQUFHaEIsK0NBQVFBLENBQUM7SUFFakRELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWtCLFFBQVFiLGlFQUFpQkEsQ0FBQ0c7UUFDaENHLGFBQWFPO0lBQ2YsR0FBRztRQUFDVjtLQUFNO0lBRVYsTUFBTVcsVUFBVTtRQUNkLE1BQU1DLGVBQWU7ZUFBSVo7WUFBTyxJQUFJYSxNQUFNYixNQUFNYyxNQUFNLEVBQUVDLElBQUksQ0FBQztTQUFHO1FBQ2hFSCxhQUFhSSxPQUFPLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxDQUFDO1FBQ3ZDakIsU0FBU1c7SUFDWDtJQUVBLE1BQU1PLFVBQVU7UUFDZCxJQUNFZixZQUFZLEtBQ1pFLFVBQVUsS0FDVkYsV0FBV0osTUFBTWMsTUFBTSxJQUN2QlIsU0FBU04sTUFBTWMsTUFBTSxFQUNyQjtZQUNBLE1BQU1GLGVBQWU7bUJBQUlaO2FBQU07WUFDL0JZLFlBQVksQ0FBQ1IsU0FBUyxDQUFDRSxPQUFPLEdBQUc7WUFDakNMLFNBQVNXO1lBRVRQLFlBQVk7WUFDWkUsVUFBVTtRQUNaO0lBQ0Y7SUFFQSxNQUFNYSxhQUFhO1FBQ2pCLElBQUlDLFlBQVk7ZUFBSXJCO1NBQU07UUFFMUJxQixVQUFVQyxNQUFNLENBQUNkLGNBQWM7UUFFL0JQLFNBQVNvQjtRQUVUWixnQkFBZ0I7SUFDbEI7SUFFQSxxQkFDRSw4REFBQ2M7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUM5QiwwREFBTUE7NEJBQUNnQyxPQUFNOzRCQUFXQyxTQUFTaEI7Ozs7Ozs7Ozs7O2tDQUdwQyw4REFBQ2M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUM1QixnRUFBWUE7d0NBQ1g4QixPQUFNO3dDQUNORSxPQUFPeEI7d0NBQ1B5QixVQUFVeEI7d0NBQ1Z5QixZQUFZOUIsTUFBTWMsTUFBTTs7Ozs7O2tEQUcxQiw4REFBQ2xCLGdFQUFZQTt3Q0FDWDhCLE9BQU07d0NBQ05FLE9BQU90Qjt3Q0FDUHVCLFVBQVV0Qjt3Q0FDVnVCLFlBQVk5QixNQUFNYyxNQUFNOzs7Ozs7Ozs7Ozs7MENBRzVCLDhEQUFDcEIsMERBQU1BO2dDQUFDZ0MsT0FBTTtnQ0FBV0MsU0FBU1I7Ozs7Ozs7Ozs7OztrQ0FHcEMsOERBQUNNO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQzVCLGdFQUFZQTtnQ0FDWDhCLE9BQU07Z0NBQ05FLE9BQU9wQjtnQ0FDUHFCLFVBQVVwQjtnQ0FDVnFCLFlBQVk5QixNQUFNYyxNQUFNOzs7Ozs7MENBRTFCLDhEQUFDcEIsMERBQU1BO2dDQUFDZ0MsT0FBTTtnQ0FBY0MsU0FBU1A7Ozs7Ozs7Ozs7OztrQ0FHdkMsOERBQUNLO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ087MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7Z0NBQU1SLFdBQVU7O2tEQUNmLDhEQUFDUztrREFDQyw0RUFBQ0M7OzhEQUNDLDhEQUFDQzs4REFBRzs7Ozs7OzhEQUNKLDhEQUFDQTs4REFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBR1IsOERBQUNDO2tEQUNFbEMsVUFBVW1DLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDcEIsOERBQUNMOzBEQUNDLDRFQUFDTTs4REFBSSxDQUFDRixPQUFPLEdBQUUsRUFBR0csT0FBTyxDQUFDOzs7Ozs7K0NBRG5CRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFTbkIsOERBQUNkO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDN0IseURBQUtBO29CQUFDSyxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEI7R0F6R3dCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi9jb21wb25lbnRzL2dyYXBoXCI7XG5pbXBvcnQgTm9kZVNlbGVjdG9yIGZyb20gXCIuL2NvbXBvbmVudHMvbm9kZVNlbGVjdG9yXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVQYWdlUmFuayB9IGZyb20gXCIuL2Z1bmMvcGFnZXJhbmtcIjtcblxuY29uc3QgR1JBUEggPSBbXG4gIFsxLCAwLCAwLCAxXSxcbiAgWzAsIDEsIDEsIDBdLFxuICBbMSwgMCwgMCwgMV0sXG4gIFswLCAxLCAxLCAwXSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtncmFwaCwgc2V0R3JhcGhdID0gdXNlU3RhdGUoR1JBUEgpO1xuICBjb25zdCBbcGFnZVJhbmtzLCBzZXRQYWdlUmFua3NdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcbiAgY29uc3QgW2Zyb21Ob2RlLCBzZXRGcm9tTm9kZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvTm9kZSwgc2V0VG9Ob2RlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbm9kZVRvUmVtb3ZlLCBzZXROb2RlVG9SZW1vdmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByYW5rcyA9IGNhbGN1bGF0ZVBhZ2VSYW5rKGdyYXBoKTtcbiAgICBzZXRQYWdlUmFua3MocmFua3MpO1xuICB9LCBbZ3JhcGhdKTtcblxuICBjb25zdCBhZGROb2RlID0gKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRHcmFwaCA9IFsuLi5ncmFwaCwgbmV3IEFycmF5KGdyYXBoLmxlbmd0aCkuZmlsbCgwKV07XG4gICAgdXBkYXRlZEdyYXBoLmZvckVhY2goKHJvdykgPT4gcm93LnB1c2goMCkpO1xuICAgIHNldEdyYXBoKHVwZGF0ZWRHcmFwaCk7XG4gIH07XG5cbiAgY29uc3QgYWRkRWRnZSA9ICgpID0+IHtcbiAgICBpZiAoXG4gICAgICBmcm9tTm9kZSA+PSAwICYmXG4gICAgICB0b05vZGUgPj0gMCAmJlxuICAgICAgZnJvbU5vZGUgPCBncmFwaC5sZW5ndGggJiZcbiAgICAgIHRvTm9kZSA8IGdyYXBoLmxlbmd0aFxuICAgICkge1xuICAgICAgY29uc3QgdXBkYXRlZEdyYXBoID0gWy4uLmdyYXBoXTtcbiAgICAgIHVwZGF0ZWRHcmFwaFtmcm9tTm9kZV1bdG9Ob2RlXSA9IDE7XG4gICAgICBzZXRHcmFwaCh1cGRhdGVkR3JhcGgpO1xuXG4gICAgICBzZXRGcm9tTm9kZSgwKTtcbiAgICAgIHNldFRvTm9kZSgwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlTm9kZSA9ICgpID0+IHtcbiAgICBsZXQgdGVtcEdyYXBoID0gWy4uLmdyYXBoXTtcblxuICAgIHRlbXBHcmFwaC5zcGxpY2Uobm9kZVRvUmVtb3ZlLCAxKTtcblxuICAgIHNldEdyYXBoKHRlbXBHcmFwaCk7XG5cbiAgICBzZXROb2RlVG9SZW1vdmUoMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBmb250LW1vbm8gdGV4dC1zbSBsZzp3LTEvMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxuICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJBZGQgTm9kZVwiIG9uQ2xpY2s9e2FkZE5vZGV9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgIDxOb2RlU2VsZWN0b3JcbiAgICAgICAgICAgICAgbGFiZWw9XCJGcm9tIE5vZGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZnJvbU5vZGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRGcm9tTm9kZX1cbiAgICAgICAgICAgICAgbm9kZXNDb3VudD17Z3JhcGgubGVuZ3RofVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPE5vZGVTZWxlY3RvclxuICAgICAgICAgICAgICBsYWJlbD1cIlRvIE5vZGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dG9Ob2RlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0VG9Ob2RlfVxuICAgICAgICAgICAgICBub2Rlc0NvdW50PXtncmFwaC5sZW5ndGh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJBZGQgRWRnZVwiIG9uQ2xpY2s9e2FkZEVkZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XG4gICAgICAgICAgPE5vZGVTZWxlY3RvclxuICAgICAgICAgICAgbGFiZWw9XCJSZW1vdmVcIlxuICAgICAgICAgICAgdmFsdWU9e25vZGVUb1JlbW92ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXROb2RlVG9SZW1vdmV9XG4gICAgICAgICAgICBub2Rlc0NvdW50PXtncmFwaC5sZW5ndGh9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiUmVtb3ZlIE5vZGVcIiBvbkNsaWNrPXtyZW1vdmVOb2RlfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxuICAgICAgICAgIDxoMz5QYWdlUmFua3M6PC9oMz5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtYXV0b1wiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPk5vZGU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5QYWdlUmFuayB2YWx1ZTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7cGFnZVJhbmtzLm1hcCgocmFuaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8dGQ+eyhyYW5rICogMTAwKS50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzJcIj5cbiAgICAgICAgPEdyYXBoIGdyYXBoPXtncmFwaH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkdyYXBoIiwiTm9kZVNlbGVjdG9yIiwiY2FsY3VsYXRlUGFnZVJhbmsiLCJHUkFQSCIsIkhvbWUiLCJncmFwaCIsInNldEdyYXBoIiwicGFnZVJhbmtzIiwic2V0UGFnZVJhbmtzIiwiZnJvbU5vZGUiLCJzZXRGcm9tTm9kZSIsInRvTm9kZSIsInNldFRvTm9kZSIsIm5vZGVUb1JlbW92ZSIsInNldE5vZGVUb1JlbW92ZSIsInJhbmtzIiwiYWRkTm9kZSIsInVwZGF0ZWRHcmFwaCIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsImZvckVhY2giLCJyb3ciLCJwdXNoIiwiYWRkRWRnZSIsInJlbW92ZU5vZGUiLCJ0ZW1wR3JhcGgiLCJzcGxpY2UiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJvbkNsaWNrIiwidmFsdWUiLCJvbkNoYW5nZSIsIm5vZGVzQ291bnQiLCJoMyIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJyYW5rIiwiaW5kZXgiLCJ0ZCIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});