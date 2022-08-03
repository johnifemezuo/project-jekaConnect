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

/***/ "./components/Pages/IndexIndex/HeroSection/HeroSection.tsx":
/*!*****************************************************************!*\
  !*** ./components/Pages/IndexIndex/HeroSection/HeroSection.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jotai */ \"./node_modules/jotai/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _base_atom_useAtom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../base/atom/useAtom */ \"./base/atom/useAtom.ts\");\n/* harmony import */ var _Layout_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Layout/Container */ \"./Layout/Container.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction HeroSection() {\n    _s();\n    var ref = _slicedToArray((0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_base_atom_useAtom__WEBPACK_IMPORTED_MODULE_2__.reviewTopButton), 2), setUseRevealButton = ref[1];\n    gsap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default()));\n    var target;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        target = document.querySelector(\".dec\");\n        setTimeout(function() {\n            return alert(target);\n        }, 2000);\n        // ANIMATION\n        var callMe = function() {\n            return console.log(\"true\");\n        };\n        var callMeOff = function() {\n            return setUseRevealButton(false);\n        };\n        var tl = gsap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].timeline({\n            defaults: {\n                opacity: 0,\n                duration: 0.8,\n                ease: \"Power3.easeInOut\"\n            },\n            scrollTrigger: {\n                trigger: target,\n                toggleActions: \"restart none none reset\",\n                start: \"400px\",\n                scrub: 0.5,\n                onLeaveBack: call\n            }\n        });\n        tl.call(callMe);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"heroSection\",\n        className: \" -mt-[20vh] h-[110vh] text-center bgimg py-12 w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-6xl text-[#acd2ccd0] lg:text-[20vh] mt-[30vh] uppercase\",\n                    children: \"6ided\"\n                }, void 0, false, {\n                    fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Pages/IndexIndex/HeroSection/HeroSection.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    ref: target,\n                    className: \"dec text-2xl text-[#ffffffad] mt-[20vh] lg:mt-[200px] tracking-wider lg:text-[4.3vh] px-6 lg:px-20 leading-relaxed\",\n                    children: \"We create beautiful and functional software experiences for amazing brands\"\n                }, void 0, false, {\n                    fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Pages/IndexIndex/HeroSection/HeroSection.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Pages/IndexIndex/HeroSection/HeroSection.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/johnifemezuo/John/projects/theshedman/project-6ided/components/Pages/IndexIndex/HeroSection/HeroSection.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(HeroSection, \"6zjCasRo4lt4vH9D3Rz4iL3AA1Y=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom\n    ];\n});\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VzL0luZGV4SW5kZXgvSGVyb1NlY3Rpb24vSGVyb1NlY3Rpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQzRCO0FBQ3BCO0FBQ1M7QUFDdUI7QUFDWDs7QUFFckQsU0FBU08sV0FBVyxHQUFHOztJQUNwQixJQUErQkwsR0FBd0Isa0JBQXhCQSw4Q0FBTyxDQUFDRywrREFBZSxDQUFDLE1BQTlDRyxrQkFBa0IsR0FBSU4sR0FBd0IsR0FBNUI7SUFFNUJGLDJEQUFtQixDQUFDQyxnRUFBYSxDQUFDLENBQUM7SUFFbkMsSUFBSVMsTUFBTTtJQUNWTixnREFBUyxDQUFDLFdBQU07UUFDZE0sTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4Q0MsVUFBVSxDQUFDO21CQUFNQyxLQUFLLENBQUNKLE1BQU0sQ0FBQztTQUFBLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdEMsWUFBWTtRQUVaLElBQU1LLE1BQU0sR0FBRzttQkFBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQUE7UUFDeEMsSUFBTUMsU0FBUyxHQUFHO21CQUFNVixrQkFBa0IsQ0FBQyxLQUFLLENBQUM7U0FBQTtRQUVqRCxJQUFNVyxFQUFFLEdBQUduQixxREFBYSxDQUFDO1lBQ3ZCcUIsUUFBUSxFQUFFO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUMsUUFBUSxFQUFFLEdBQUc7Z0JBQUVDLElBQUksRUFBRSxrQkFBa0I7YUFBRTtZQUNqRUMsYUFBYSxFQUFFO2dCQUNiQyxPQUFPLEVBQUVoQixNQUFNO2dCQUNmaUIsYUFBYSxFQUFFLHlCQUF5QjtnQkFDeENDLEtBQUssRUFBRSxPQUFPO2dCQUNkQyxLQUFLLEVBQUUsR0FBRztnQkFDVkMsV0FBVyxFQUFFQyxJQUFJO2FBQ2xCO1NBQ0YsQ0FBQztRQUVGWixFQUFFLENBQUNZLElBQUksQ0FBQ2hCLE1BQU0sQ0FBQztLQUdoQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNpQixTQUFPO1FBRU5DLEVBQUUsRUFBQyxhQUFhO1FBQ2hCQyxTQUFTLEVBQUMsc0RBQXdEO2tCQUVsRSw0RUFBQzVCLHlEQUFTOzs4QkFDUiw4REFBQzZCLElBQUU7b0JBQUNELFNBQVMsRUFBQyw4REFBK0Q7OEJBQUMsT0FFOUU7Ozs7O3dCQUFLOzhCQUNMLDhEQUFDQyxJQUFFO29CQUFDQyxHQUFHLEVBQUUxQixNQUFNO29CQUFFd0IsU0FBUyxFQUFDLG9IQUFxSDs4QkFBQyw0RUFHako7Ozs7O3dCQUFLOzs7Ozs7Z0JBQ0s7Ozs7O1lBQ0osQ0FDVjtDQUNIO0dBaERRM0IsV0FBVzs7UUFDY0wsMENBQU87OztBQURoQ0ssS0FBQUEsV0FBVztBQWtEcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2VzL0luZGV4SW5kZXgvSGVyb1NlY3Rpb24vSGVyb1NlY3Rpb24udHN4PzY4M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCBTY3JvbGxUcmlnZ2VyIGZyb20gXCJnc2FwL2Rpc3QvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IHsgdXNlQXRvbSB9IGZyb20gXCJqb3RhaVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmV2aWV3VG9wQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2Jhc2UvYXRvbS91c2VBdG9tXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi8uLi8uLi9MYXlvdXQvQ29udGFpbmVyXCI7XG5cbmZ1bmN0aW9uIEhlcm9TZWN0aW9uKCkge1xuICAgY29uc3QgWywgc2V0VXNlUmV2ZWFsQnV0dG9uXSA9IHVzZUF0b20ocmV2aWV3VG9wQnV0dG9uKTtcblxuICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuICBcbiAgbGV0IHRhcmdldDogYW55O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVjXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gYWxlcnQodGFyZ2V0KSwgMjAwMCk7XG5cbiAgICAvLyBBTklNQVRJT05cblxuICAgIGNvbnN0IGNhbGxNZSA9ICgpID0+IGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbiAgICBjb25zdCBjYWxsTWVPZmYgPSAoKSA9PiBzZXRVc2VSZXZlYWxCdXR0b24oZmFsc2UpO1xuXG4gICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIGRlZmF1bHRzOiB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjgsIGVhc2U6IFwiUG93ZXIzLmVhc2VJbk91dFwiIH0sXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IHRhcmdldCxcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJyZXN0YXJ0IG5vbmUgbm9uZSByZXNldFwiLFxuICAgICAgICBzdGFydDogXCI0MDBweFwiLFxuICAgICAgICBzY3J1YjogMC41LFxuICAgICAgICBvbkxlYXZlQmFjazogY2FsbCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0bC5jYWxsKGNhbGxNZSlcblxuXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBcbiAgICAgIGlkPVwiaGVyb1NlY3Rpb25cIlxuICAgICAgY2xhc3NOYW1lPVwiIC1tdC1bMjB2aF0gaC1bMTEwdmhdIHRleHQtY2VudGVyIGJnaW1nICBweS0xMiAgdy1mdWxsXCJcbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgdGV4dC1bI2FjZDJjY2QwXSAgbGc6dGV4dC1bMjB2aF0gbXQtWzMwdmhdIHVwcGVyY2FzZVwiPlxuICAgICAgICAgIDZpZGVkXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMSByZWY9e3RhcmdldH0gY2xhc3NOYW1lPVwiZGVjIHRleHQtMnhsIHRleHQtWyNmZmZmZmZhZF0gbXQtWzIwdmhdIGxnOm10LVsyMDBweF0gdHJhY2tpbmctd2lkZXIgbGc6dGV4dC1bNC4zdmhdICBweC02IGxnOnB4LTIwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgIFdlIGNyZWF0ZSBiZWF1dGlmdWwgYW5kIGZ1bmN0aW9uYWwgc29mdHdhcmUgZXhwZXJpZW5jZXMgZm9yIGFtYXppbmdcbiAgICAgICAgICBicmFuZHNcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247XG4iXSwibmFtZXMiOlsiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJ1c2VBdG9tIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJyZXZpZXdUb3BCdXR0b24iLCJDb250YWluZXIiLCJIZXJvU2VjdGlvbiIsInNldFVzZVJldmVhbEJ1dHRvbiIsInJlZ2lzdGVyUGx1Z2luIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0VGltZW91dCIsImFsZXJ0IiwiY2FsbE1lIiwiY29uc29sZSIsImxvZyIsImNhbGxNZU9mZiIsInRsIiwidGltZWxpbmUiLCJkZWZhdWx0cyIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImVhc2UiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInRvZ2dsZUFjdGlvbnMiLCJzdGFydCIsInNjcnViIiwib25MZWF2ZUJhY2siLCJjYWxsIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiaDEiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Pages/IndexIndex/HeroSection/HeroSection.tsx\n");

/***/ })

});