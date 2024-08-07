"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/page",{

/***/ "(app-pages-browser)/./app/projects/_components/ProjectCard.tsx":
/*!**************************************************!*\
  !*** ./app/projects/_components/ProjectCard.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Heading */ \"(app-pages-browser)/./components/Heading.tsx\");\n/* harmony import */ var _Laptop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Laptop */ \"(app-pages-browser)/./app/projects/_components/Laptop.jsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./components/Button.tsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst cardData = {\n    \"Blog Website\": {\n        url: \"https://blog-app-abdul-naveds-projects.vercel.app/blogs\",\n        githubUrl: \"https://github.com/AbdulNaved/Blog-App\",\n        color: \"#1db954\",\n        description: \"A dynamic blog platform with user sign-up and blog creation features. Enjoy seamless user authentication and content creation for an interactive blogging experience.\",\n        techStack: \"NextJs,Typescript, Prisma\"\n    },\n    \"Paytm App\": {\n        url: \"https://paytm-payment-app.vercel.app/dashboard\",\n        githubUrl: \"https://github.com/AbdulNaved/Paytm-payment-app\",\n        color: \"#f5ba13\",\n        description: \"A dynamic payment app with user sign-up and transaction features. Enjoy seamless user authentication and payment processing for an interactive financial experience.\",\n        techStack: \"React js,Javascript,Mongodb,\"\n    },\n    \"Genius Ai Bot\": {\n        url: \"https://genius-ai-bot.vercel.app/\",\n        githubUrl: \"https://github.com/AbdulNaved/Genius-Ai-Bot.git\",\n        color: \"#d81f26\",\n        description: \"A dynamic YouTube clone built with React.js, utilizing modern web technologies to deliver an interactive video viewing experience..\",\n        techStack: \"React js, Typescript\"\n    },\n    \"Youtube Clone\": {\n        url: \"https://youtube-clone-coral-omega.vercel.app/\",\n        githubUrl: \"https://github.com/AbdulNaved/Youtube-clone\",\n        color: \"#d81f26\",\n        description: \"A dynamic YouTube clone built with React.js, utilizing modern web technologies to deliver an interactive video viewing experience..\",\n        techStack: \"React js,Javascript\"\n    }\n};\nconst ProjectCard = (param)=>{\n    let { children, opp } = param;\n    _s();\n    const project = cardData[children];\n    // console.log(project);\n    const component = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        let ctx = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.context(()=>{\n            const tl = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.timeline();\n            tl.fromTo(\".projectCard\", {\n                scaleY: 0,\n                scale: 0\n            }, {\n                scaleY: 1,\n                scale: 1,\n                duration: 0.5,\n                ease: \"back.out\"\n            });\n        }, component);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-w-full w-screen h-full md:h-full h- p-4 flex md:flex-row flex-col\",\n        ref: component,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex items-center h-full md:flex-row flex-col  relative w-full \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-full projectCard text-center md:text-start justify-center items-center md:justify-normal md:items-start h-full p-4 flex md:space-x-10 flex-col  static z-10  rounded-md\",\n                style: {\n                    backgroundColor: project.color\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:relative max-w-[100dvw]  w-full h-full md:h-full z-30 -left- lg:-left-[20rem] \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Laptop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            url: project.url\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex  flex-col md:absolute space-y-7 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Heading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                as: \"h2\",\n                                className: \"relative z-30 drop-shadow-md md:left-[30rem] max-w-full text-2xl top- md:-top-2 md:text-4xl  \",\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" hidden  md:flex flex-col \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        // as=\"h4\"\n                                        className: \"relative z-30 drop-shadow-md md:left-[30rem] font-bold text-2xl -top-2   \",\n                                        children: \"Description :\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"relative z-30 drop-shadow-md md:left-[30rem] overflow-hidden  max-w-[30rem] prose-strong: hidden md:inline  -top-0 text-sm  \",\n                                        children: project.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" hidden md:flex flex-col \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        // as=\"h4\"\n                                        className: \"relative z-30 drop-shadow-md md:left-[30rem] font-bold text-2xl -top-2   \",\n                                        children: \"Tech Stack :\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"relative z-30 drop-shadow-md md:left-[30rem] overflow-hidden  max-w-[30rem] prose-strong: hidden md:inline  -top-0 text-sm  \",\n                                        children: project.techStack\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                linkField: project.githubUrl,\n                                label: \"Code\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                linkField: project.url,\n                                label: \"Visit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\91860\\\\OneDrive\\\\Documents\\\\GitHub\\\\Simon-Game\\\\Naved-Portfolio\\\\app\\\\projects\\\\_components\\\\ProjectCard.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectCard, \"AfZ44SNG58GdmS5arBadRzyjOPM=\");\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9qZWN0cy9fY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMyQztBQUNiO0FBQ1c7QUFDYjtBQUNjO0FBTTFDLE1BQU1NLFdBQVc7SUFDZixnQkFBZ0I7UUFDZEMsS0FBSztRQUNMQyxXQUFXO1FBQ1hDLE9BQU87UUFDUEMsYUFDRTtRQUNGQyxXQUFXO0lBQ2I7SUFDQSxhQUFhO1FBQ1hKLEtBQUs7UUFDTEMsV0FBVztRQUNYQyxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsV0FBVztJQUNiO0lBQ0EsaUJBQWlCO1FBQ2ZKLEtBQUs7UUFDTEMsV0FBVztRQUVYQyxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsV0FBVztJQUNiO0lBRUEsaUJBQWlCO1FBQ2ZKLEtBQUs7UUFDTEMsV0FBVztRQUVYQyxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsV0FBVztJQUNiO0FBU0Y7QUFXQSxNQUFNQyxjQUFjO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxHQUFHLEVBQWU7O0lBQ2pELE1BQU1DLFVBQVVULFFBQVEsQ0FBQ08sU0FBUztJQUNsQyx3QkFBd0I7SUFDeEIsTUFBTUcsWUFBWVgsNkNBQU1BLENBQUM7SUFFekJELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWEsTUFBTWQsc0NBQUlBLENBQUNlLE9BQU8sQ0FBQztZQUNyQixNQUFNQyxLQUFLaEIsc0NBQUlBLENBQUNpQixRQUFRO1lBRXhCRCxHQUFHRSxNQUFNLENBQ1AsZ0JBQ0E7Z0JBQUVDLFFBQVE7Z0JBQUdDLE9BQU87WUFBRSxHQUN0QjtnQkFBRUQsUUFBUTtnQkFBR0MsT0FBTztnQkFBR0MsVUFBVTtnQkFBS0MsTUFBTTtZQUFXO1FBRTNELEdBQUdUO0lBQ0wsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNVO1FBQ0NDLFdBQVU7UUFDVkMsS0FBS1o7a0JBRUwsNEVBQUNVO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUNDQyxXQUFZO2dCQUNaRSxPQUFPO29CQUFFQyxpQkFBaUJmLFFBQVFOLEtBQUs7Z0JBQUM7O2tDQUV4Qyw4REFBQ2lCO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDMUIsK0NBQU1BOzRCQUFDTSxLQUFLUSxRQUFRUixHQUFHOzs7Ozs7Ozs7OztrQ0FFMUIsOERBQUNtQjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUMzQiwyREFBT0E7Z0NBQ04rQixJQUFHO2dDQUNISixXQUFVOzBDQUVUZDs7Ozs7OzBDQUVILDhEQUFDYTtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNLO3dDQUNDLFVBQVU7d0NBQ1ZMLFdBQVU7a0RBQ1g7Ozs7OztrREFHRCw4REFBQ007d0NBQUVOLFdBQVU7a0RBQ1ZaLFFBQVFMLFdBQVc7Ozs7Ozs7Ozs7OzswQ0FHeEIsOERBQUNnQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNLO3dDQUNDLFVBQVU7d0NBQ1ZMLFdBQVU7a0RBQ1g7Ozs7OztrREFHRCw4REFBQ007d0NBQUVOLFdBQVU7a0RBQ1ZaLFFBQVFKLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJeEIsOERBQUNlO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ3pCLDBEQUFNQTtnQ0FBQ2dDLFdBQVduQixRQUFRUCxTQUFTO2dDQUFFMkIsT0FBTTs7Ozs7OzBDQUM1Qyw4REFBQ2pDLDBEQUFNQTtnQ0FBQ2dDLFdBQVduQixRQUFRUixHQUFHO2dDQUFFNEIsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRDtHQW5FTXZCO0tBQUFBO0FBcUVOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm9qZWN0cy9fY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC50c3g/MmJiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBIZWFkaW5nIGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGluZ1wiO1xuaW1wb3J0IExhcHRvcCBmcm9tIFwiLi9MYXB0b3BcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbnR5cGUgUHJvamVjdENhcmQgPSB7XG4gIGNoaWxkcmVuOiBzdHJpbmc7XG4gIG9wcD86IGJvb2xlYW47XG59O1xuXG5jb25zdCBjYXJkRGF0YSA9IHtcbiAgXCJCbG9nIFdlYnNpdGVcIjoge1xuICAgIHVybDogXCJodHRwczovL2Jsb2ctYXBwLWFiZHVsLW5hdmVkcy1wcm9qZWN0cy52ZXJjZWwuYXBwL2Jsb2dzXCIsXG4gICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BYmR1bE5hdmVkL0Jsb2ctQXBwXCIsXG4gICAgY29sb3I6IFwiIzFkYjk1NFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGR5bmFtaWMgYmxvZyBwbGF0Zm9ybSB3aXRoIHVzZXIgc2lnbi11cCBhbmQgYmxvZyBjcmVhdGlvbiBmZWF0dXJlcy4gRW5qb3kgc2VhbWxlc3MgdXNlciBhdXRoZW50aWNhdGlvbiBhbmQgY29udGVudCBjcmVhdGlvbiBmb3IgYW4gaW50ZXJhY3RpdmUgYmxvZ2dpbmcgZXhwZXJpZW5jZS5cIixcbiAgICB0ZWNoU3RhY2s6IFwiTmV4dEpzLFR5cGVzY3JpcHQsIFByaXNtYVwiLFxuICB9LFxuICBcIlBheXRtIEFwcFwiOiB7XG4gICAgdXJsOiBcImh0dHBzOi8vcGF5dG0tcGF5bWVudC1hcHAudmVyY2VsLmFwcC9kYXNoYm9hcmRcIixcbiAgICBnaXRodWJVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FiZHVsTmF2ZWQvUGF5dG0tcGF5bWVudC1hcHBcIixcbiAgICBjb2xvcjogXCIjZjViYTEzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgZHluYW1pYyBwYXltZW50IGFwcCB3aXRoIHVzZXIgc2lnbi11cCBhbmQgdHJhbnNhY3Rpb24gZmVhdHVyZXMuIEVuam95IHNlYW1sZXNzIHVzZXIgYXV0aGVudGljYXRpb24gYW5kIHBheW1lbnQgcHJvY2Vzc2luZyBmb3IgYW4gaW50ZXJhY3RpdmUgZmluYW5jaWFsIGV4cGVyaWVuY2UuXCIsXG4gICAgdGVjaFN0YWNrOiBcIlJlYWN0IGpzLEphdmFzY3JpcHQsTW9uZ29kYixcIixcbiAgfSxcbiAgXCJHZW5pdXMgQWkgQm90XCI6IHtcbiAgICB1cmw6IFwiaHR0cHM6Ly9nZW5pdXMtYWktYm90LnZlcmNlbC5hcHAvXCIsXG4gICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BYmR1bE5hdmVkL0dlbml1cy1BaS1Cb3QuZ2l0XCIsXG5cbiAgICBjb2xvcjogXCIjZDgxZjI2XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgZHluYW1pYyBZb3VUdWJlIGNsb25lIGJ1aWx0IHdpdGggUmVhY3QuanMsIHV0aWxpemluZyBtb2Rlcm4gd2ViIHRlY2hub2xvZ2llcyB0byBkZWxpdmVyIGFuIGludGVyYWN0aXZlIHZpZGVvIHZpZXdpbmcgZXhwZXJpZW5jZS4uXCIsXG4gICAgdGVjaFN0YWNrOiBcIlJlYWN0IGpzLCBUeXBlc2NyaXB0XCIsXG4gIH0sXG5cbiAgXCJZb3V0dWJlIENsb25lXCI6IHtcbiAgICB1cmw6IFwiaHR0cHM6Ly95b3V0dWJlLWNsb25lLWNvcmFsLW9tZWdhLnZlcmNlbC5hcHAvXCIsXG4gICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BYmR1bE5hdmVkL1lvdXR1YmUtY2xvbmVcIixcblxuICAgIGNvbG9yOiBcIiNkODFmMjZcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBkeW5hbWljIFlvdVR1YmUgY2xvbmUgYnVpbHQgd2l0aCBSZWFjdC5qcywgdXRpbGl6aW5nIG1vZGVybiB3ZWIgdGVjaG5vbG9naWVzIHRvIGRlbGl2ZXIgYW4gaW50ZXJhY3RpdmUgdmlkZW8gdmlld2luZyBleHBlcmllbmNlLi5cIixcbiAgICB0ZWNoU3RhY2s6IFwiUmVhY3QganMsSmF2YXNjcmlwdFwiLFxuICB9LFxuICAvLyBGb29kbGU6IHtcbiAgLy8gICB1cmw6IFwiXCIsXG4gIC8vICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9cIixcbiAgLy8gICBjb2xvcjogXCIjZWE1ODU4XCIsXG4gIC8vICAgZGVzY3JpcHRpb246XG4gIC8vICAgICBcIiBcIixcbiAgLy8gICB0ZWNoU3RhY2s6IFwiTmV4dEpzLEphdmFzY3JpcHQsTW9uZ29EYlwiLFxuICAvLyB9LFxufSBhcyBSZWNvcmQ8XG4gIHN0cmluZyxcbiAge1xuICAgIHVybDogc3RyaW5nO1xuICAgIGdpdGh1YlVybDogc3RyaW5nO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICB0ZWNoU3RhY2s6IHN0cmluZztcbiAgfVxuPjtcblxuY29uc3QgUHJvamVjdENhcmQgPSAoeyBjaGlsZHJlbiwgb3BwIH06IFByb2plY3RDYXJkKSA9PiB7XG4gIGNvbnN0IHByb2plY3QgPSBjYXJkRGF0YVtjaGlsZHJlbl07XG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICBjb25zdCBjb21wb25lbnQgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY3R4ID0gZ3NhcC5jb250ZXh0KCgpID0+IHtcbiAgICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xuXG4gICAgICB0bC5mcm9tVG8oXG4gICAgICAgIFwiLnByb2plY3RDYXJkXCIsXG4gICAgICAgIHsgc2NhbGVZOiAwLCBzY2FsZTogMCB9LFxuICAgICAgICB7IHNjYWxlWTogMSwgc2NhbGU6IDEsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IFwiYmFjay5vdXRcIiB9XG4gICAgICApO1xuICAgIH0sIGNvbXBvbmVudCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIHctc2NyZWVuIGgtZnVsbCBtZDpoLWZ1bGwgaC0gcC00IGZsZXggbWQ6ZmxleC1yb3cgZmxleC1jb2xcIlxuICAgICAgcmVmPXtjb21wb25lbnR9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBpdGVtcy1jZW50ZXIgaC1mdWxsIG1kOmZsZXgtcm93IGZsZXgtY29sICByZWxhdGl2ZSB3LWZ1bGwgXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgbWF4LXctZnVsbCBwcm9qZWN0Q2FyZCB0ZXh0LWNlbnRlciBtZDp0ZXh0LXN0YXJ0IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LW5vcm1hbCBtZDppdGVtcy1zdGFydCBoLWZ1bGwgcC00IGZsZXggbWQ6c3BhY2UteC0xMCBmbGV4LWNvbCAgc3RhdGljIHotMTAgIHJvdW5kZWQtbWRgfVxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogcHJvamVjdC5jb2xvciB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpyZWxhdGl2ZSBtYXgtdy1bMTAwZHZ3XSAgdy1mdWxsIGgtZnVsbCBtZDpoLWZ1bGwgei0zMCAtbGVmdC0gbGc6LWxlZnQtWzIwcmVtXSBcIj5cbiAgICAgICAgICAgIDxMYXB0b3AgdXJsPXtwcm9qZWN0LnVybH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIGZsZXgtY29sIG1kOmFic29sdXRlIHNwYWNlLXktNyBcIj5cbiAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgIGFzPVwiaDJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTMwIGRyb3Atc2hhZG93LW1kIG1kOmxlZnQtWzMwcmVtXSBtYXgtdy1mdWxsIHRleHQtMnhsIHRvcC0gbWQ6LXRvcC0yIG1kOnRleHQtNHhsICBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoaWRkZW4gIG1kOmZsZXggZmxleC1jb2wgXCI+XG4gICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgIC8vIGFzPVwiaDRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMzAgZHJvcC1zaGFkb3ctbWQgbWQ6bGVmdC1bMzByZW1dIGZvbnQtYm9sZCB0ZXh0LTJ4bCAtdG9wLTIgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVzY3JpcHRpb24gOlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTMwIGRyb3Atc2hhZG93LW1kIG1kOmxlZnQtWzMwcmVtXSBvdmVyZmxvdy1oaWRkZW4gIG1heC13LVszMHJlbV0gcHJvc2Utc3Ryb25nOiBoaWRkZW4gbWQ6aW5saW5lICAtdG9wLTAgdGV4dC1zbSAgXCI+XG4gICAgICAgICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaGlkZGVuIG1kOmZsZXggZmxleC1jb2wgXCI+XG4gICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgIC8vIGFzPVwiaDRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMzAgZHJvcC1zaGFkb3ctbWQgbWQ6bGVmdC1bMzByZW1dIGZvbnQtYm9sZCB0ZXh0LTJ4bCAtdG9wLTIgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVGVjaCBTdGFjayA6XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMzAgZHJvcC1zaGFkb3ctbWQgbWQ6bGVmdC1bMzByZW1dIG92ZXJmbG93LWhpZGRlbiAgbWF4LXctWzMwcmVtXSBwcm9zZS1zdHJvbmc6IGhpZGRlbiBtZDppbmxpbmUgIC10b3AtMCB0ZXh0LXNtICBcIj5cbiAgICAgICAgICAgICAgICB7cHJvamVjdC50ZWNoU3RhY2t9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTEwXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGxpbmtGaWVsZD17cHJvamVjdC5naXRodWJVcmx9IGxhYmVsPVwiQ29kZVwiIC8+XG4gICAgICAgICAgICA8QnV0dG9uIGxpbmtGaWVsZD17cHJvamVjdC51cmx9IGxhYmVsPVwiVmlzaXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiSGVhZGluZyIsIkxhcHRvcCIsIkJ1dHRvbiIsImdzYXAiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJjYXJkRGF0YSIsInVybCIsImdpdGh1YlVybCIsImNvbG9yIiwiZGVzY3JpcHRpb24iLCJ0ZWNoU3RhY2siLCJQcm9qZWN0Q2FyZCIsImNoaWxkcmVuIiwib3BwIiwicHJvamVjdCIsImNvbXBvbmVudCIsImN0eCIsImNvbnRleHQiLCJ0bCIsInRpbWVsaW5lIiwiZnJvbVRvIiwic2NhbGVZIiwic2NhbGUiLCJkdXJhdGlvbiIsImVhc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImFzIiwiaDMiLCJwIiwibGlua0ZpZWxkIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/projects/_components/ProjectCard.tsx\n"));

/***/ })

});