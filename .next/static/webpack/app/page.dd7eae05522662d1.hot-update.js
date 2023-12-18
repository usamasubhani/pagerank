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

/***/ "(app-pages-browser)/./app/components/graph.tsx":
/*!**********************************!*\
  !*** ./app/components/graph.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Graph = (param)=>{\n    let { graph } = param;\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const canvas = canvasRef === null || canvasRef === void 0 ? void 0 : canvasRef.current;\n        if (!canvas) return;\n        const ctx = canvas.getContext(\"2d\");\n        if (!ctx) return;\n        const nodesCount = graph.length;\n        const centerX = canvas.width / 2;\n        const centerY = canvas.height / 2;\n        const radius = 150;\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        ctx.strokeStyle = \"white\";\n        ctx.lineWidth = 2;\n        // Draw edges\n        graph.forEach((edges, sourceNode)=>{\n            edges.forEach((edge, targetNode)=>{\n                if (edge === 1) {\n                    ctx.beginPath();\n                    ctx.moveTo(centerX + radius * Math.cos(2 * Math.PI * sourceNode / nodesCount), centerY + radius * Math.sin(2 * Math.PI * sourceNode / nodesCount));\n                    ctx.lineTo(centerX + radius * Math.cos(2 * Math.PI * targetNode / nodesCount), centerY + radius * Math.sin(2 * Math.PI * targetNode / nodesCount));\n                    ctx.stroke();\n                }\n            });\n        });\n        // Draw nodes\n        // Todo: use edge drawing loop for drawing nodes: reslove edges overlapping nodes issue.\n        graph.forEach((_, index)=>{\n            ctx.fillStyle = \"rgb(59 130 246)\";\n            const x = centerX + radius * Math.cos(2 * Math.PI * index / nodesCount);\n            const y = centerY + radius * Math.sin(2 * Math.PI * index / nodesCount);\n            ctx.beginPath();\n            ctx.arc(x, y, 25, 0, 360);\n            ctx.fill();\n            ctx.closePath();\n            ctx.fillStyle = \"black\";\n            ctx.font = \"bold 18px Arial\";\n            ctx.fillText(index.toString(), x - 5, y + 5);\n        });\n    }, [\n        graph\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef,\n        width: 400,\n        height: 400,\n        style: {\n            border: \"1px solid #111\"\n        },\n        children: \"Your browser does not support the canvas element.\"\n    }, void 0, false, {\n        fileName: \"/home/rnssolution/Desktop/usama/pagerank-next/app/components/graph.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Graph, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c = Graph;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Graph);\nvar _c;\n$RefreshReg$(_c, \"Graph\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2dyYXBoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDaUQ7QUFFakQsTUFBTUcsUUFBUTtRQUFDLEVBQUVDLEtBQUssRUFBeUI7O0lBQzdDLE1BQU1DLFlBQVlILDZDQUFNQSxDQUEyQjtJQUVuREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxTQUFTRCxzQkFBQUEsZ0NBQUFBLFVBQVdFLE9BQU87UUFDakMsSUFBSSxDQUFDRCxRQUFRO1FBRWIsTUFBTUUsTUFBTUYsT0FBT0csVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQ0QsS0FBSztRQUVWLE1BQU1FLGFBQWFOLE1BQU1PLE1BQU07UUFDL0IsTUFBTUMsVUFBVU4sT0FBT08sS0FBSyxHQUFHO1FBQy9CLE1BQU1DLFVBQVVSLE9BQU9TLE1BQU0sR0FBRztRQUNoQyxNQUFNQyxTQUFTO1FBRWZSLElBQUlTLFNBQVMsQ0FBQyxHQUFHLEdBQUdYLE9BQU9PLEtBQUssRUFBRVAsT0FBT1MsTUFBTTtRQUUvQ1AsSUFBSVUsV0FBVyxHQUFHO1FBQ2xCVixJQUFJVyxTQUFTLEdBQUc7UUFFaEIsYUFBYTtRQUNiZixNQUFNZ0IsT0FBTyxDQUFDLENBQUNDLE9BQU9DO1lBQ3BCRCxNQUFNRCxPQUFPLENBQUMsQ0FBQ0csTUFBTUM7Z0JBQ25CLElBQUlELFNBQVMsR0FBRztvQkFDZGYsSUFBSWlCLFNBQVM7b0JBQ2JqQixJQUFJa0IsTUFBTSxDQUNSZCxVQUNFSSxTQUFTVyxLQUFLQyxHQUFHLENBQUMsSUFBS0QsS0FBS0UsRUFBRSxHQUFHUCxhQUFjWixhQUNqREksVUFBVUUsU0FBU1csS0FBS0csR0FBRyxDQUFDLElBQUtILEtBQUtFLEVBQUUsR0FBR1AsYUFBY1o7b0JBRTNERixJQUFJdUIsTUFBTSxDQUNSbkIsVUFDRUksU0FBU1csS0FBS0MsR0FBRyxDQUFDLElBQUtELEtBQUtFLEVBQUUsR0FBR0wsYUFBY2QsYUFDakRJLFVBQVVFLFNBQVNXLEtBQUtHLEdBQUcsQ0FBQyxJQUFLSCxLQUFLRSxFQUFFLEdBQUdMLGFBQWNkO29CQUUzREYsSUFBSXdCLE1BQU07Z0JBQ1o7WUFDRjtRQUNGO1FBRUEsYUFBYTtRQUNiLHdGQUF3RjtRQUN4RjVCLE1BQU1nQixPQUFPLENBQUMsQ0FBQ2EsR0FBR0M7WUFDaEIxQixJQUFJMkIsU0FBUyxHQUFHO1lBRWhCLE1BQU1DLElBQUl4QixVQUFVSSxTQUFTVyxLQUFLQyxHQUFHLENBQUMsSUFBS0QsS0FBS0UsRUFBRSxHQUFHSyxRQUFTeEI7WUFDOUQsTUFBTTJCLElBQUl2QixVQUFVRSxTQUFTVyxLQUFLRyxHQUFHLENBQUMsSUFBS0gsS0FBS0UsRUFBRSxHQUFHSyxRQUFTeEI7WUFFOURGLElBQUlpQixTQUFTO1lBQ2JqQixJQUFJOEIsR0FBRyxDQUFDRixHQUFHQyxHQUFHLElBQUksR0FBRztZQUNyQjdCLElBQUkrQixJQUFJO1lBQ1IvQixJQUFJZ0MsU0FBUztZQUViaEMsSUFBSTJCLFNBQVMsR0FBRztZQUNoQjNCLElBQUlpQyxJQUFJLEdBQUc7WUFDWGpDLElBQUlrQyxRQUFRLENBQUNSLE1BQU1TLFFBQVEsSUFBSVAsSUFBSSxHQUFHQyxJQUFJO1FBQzVDO0lBQ0YsR0FBRztRQUFDakM7S0FBTTtJQUVWLHFCQUNFLDhEQUFDRTtRQUNDc0MsS0FBS3ZDO1FBQ0xRLE9BQU87UUFDUEUsUUFBUTtRQUNSOEIsT0FBTztZQUFFQyxRQUFRO1FBQWlCO2tCQUNuQzs7Ozs7O0FBSUw7R0FyRU0zQztLQUFBQTtBQXVFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9ncmFwaC50c3g/NGIyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBHcmFwaCA9ICh7IGdyYXBoIH06IHsgZ3JhcGg6IG51bWJlcltdW10gfSkgPT4ge1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmPy5jdXJyZW50O1xyXG4gICAgaWYgKCFjYW52YXMpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgaWYgKCFjdHgpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBub2Rlc0NvdW50ID0gZ3JhcGgubGVuZ3RoO1xyXG4gICAgY29uc3QgY2VudGVyWCA9IGNhbnZhcy53aWR0aCAvIDI7XHJcbiAgICBjb25zdCBjZW50ZXJZID0gY2FudmFzLmhlaWdodCAvIDI7XHJcbiAgICBjb25zdCByYWRpdXMgPSAxNTA7XHJcblxyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG5cclxuICAgIC8vIERyYXcgZWRnZXNcclxuICAgIGdyYXBoLmZvckVhY2goKGVkZ2VzLCBzb3VyY2VOb2RlKSA9PiB7XHJcbiAgICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UsIHRhcmdldE5vZGUpID0+IHtcclxuICAgICAgICBpZiAoZWRnZSA9PT0gMSkge1xyXG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgY3R4Lm1vdmVUbyhcclxuICAgICAgICAgICAgY2VudGVyWCArXHJcbiAgICAgICAgICAgICAgcmFkaXVzICogTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogc291cmNlTm9kZSkgLyBub2Rlc0NvdW50KSxcclxuICAgICAgICAgICAgY2VudGVyWSArIHJhZGl1cyAqIE1hdGguc2luKCgyICogTWF0aC5QSSAqIHNvdXJjZU5vZGUpIC8gbm9kZXNDb3VudClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjdHgubGluZVRvKFxyXG4gICAgICAgICAgICBjZW50ZXJYICtcclxuICAgICAgICAgICAgICByYWRpdXMgKiBNYXRoLmNvcygoMiAqIE1hdGguUEkgKiB0YXJnZXROb2RlKSAvIG5vZGVzQ291bnQpLFxyXG4gICAgICAgICAgICBjZW50ZXJZICsgcmFkaXVzICogTWF0aC5zaW4oKDIgKiBNYXRoLlBJICogdGFyZ2V0Tm9kZSkgLyBub2Rlc0NvdW50KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRHJhdyBub2Rlc1xyXG4gICAgLy8gVG9kbzogdXNlIGVkZ2UgZHJhd2luZyBsb29wIGZvciBkcmF3aW5nIG5vZGVzOiByZXNsb3ZlIGVkZ2VzIG92ZXJsYXBwaW5nIG5vZGVzIGlzc3VlLlxyXG4gICAgZ3JhcGguZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDU5IDEzMCAyNDYpXCI7XHJcblxyXG4gICAgICBjb25zdCB4ID0gY2VudGVyWCArIHJhZGl1cyAqIE1hdGguY29zKCgyICogTWF0aC5QSSAqIGluZGV4KSAvIG5vZGVzQ291bnQpO1xyXG4gICAgICBjb25zdCB5ID0gY2VudGVyWSArIHJhZGl1cyAqIE1hdGguc2luKCgyICogTWF0aC5QSSAqIGluZGV4KSAvIG5vZGVzQ291bnQpO1xyXG5cclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKHgsIHksIDI1LCAwLCAzNjApO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICBjdHguZm9udCA9IFwiYm9sZCAxOHB4IEFyaWFsXCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChpbmRleC50b1N0cmluZygpLCB4IC0gNSwgeSArIDUpO1xyXG4gICAgfSk7XHJcbiAgfSwgW2dyYXBoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Y2FudmFzXHJcbiAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgICB3aWR0aD17NDAwfVxyXG4gICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCAjMTExXCIgfX1cclxuICAgID5cclxuICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGNhbnZhcyBlbGVtZW50LlxyXG4gICAgPC9jYW52YXM+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJHcmFwaCIsImdyYXBoIiwiY2FudmFzUmVmIiwiY2FudmFzIiwiY3VycmVudCIsImN0eCIsImdldENvbnRleHQiLCJub2Rlc0NvdW50IiwibGVuZ3RoIiwiY2VudGVyWCIsIndpZHRoIiwiY2VudGVyWSIsImhlaWdodCIsInJhZGl1cyIsImNsZWFyUmVjdCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiZm9yRWFjaCIsImVkZ2VzIiwic291cmNlTm9kZSIsImVkZ2UiLCJ0YXJnZXROb2RlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiTWF0aCIsImNvcyIsIlBJIiwic2luIiwibGluZVRvIiwic3Ryb2tlIiwiXyIsImluZGV4IiwiZmlsbFN0eWxlIiwieCIsInkiLCJhcmMiLCJmaWxsIiwiY2xvc2VQYXRoIiwiZm9udCIsImZpbGxUZXh0IiwidG9TdHJpbmciLCJyZWYiLCJzdHlsZSIsImJvcmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/graph.tsx\n"));

/***/ })

});