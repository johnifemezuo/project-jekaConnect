"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8769:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Global_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4140);
/* harmony import */ var _components_Global_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1314);
/* harmony import */ var _components_Global_TopButton_TopButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3144);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Global_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__, _components_Global_TopButton_TopButton__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Global_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__, _components_Global_TopButton_TopButton__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Layout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Global_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Global_TopButton_TopButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Global_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ store)
});

;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./components/Pages/authslices/counterSlice.ts

const initialState = {
    login: "",
    isLogin: false
};
const userSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "login User",
    initialState,
    reducers: {
        loginUser: (state)=>{
            state.isLogin = true;
        },
        logoutUser: (state)=>{
            state.isLogin = false;
        },
        logUserName: (state, action)=>{
            state.login = action.payload;
        }
    }
});
const { loginUser , logoutUser , logUserName  } = userSlice.actions;
/* harmony default export */ const counterSlice = (userSlice.reducer);

;// CONCATENATED MODULE: ./base/stores/store.ts


const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: {
        user: counterSlice
    }
});


/***/ }),

/***/ 4140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./Layout/Container.tsx
var Container = __webpack_require__(1572);
;// CONCATENATED MODULE: ./components/Global/Icons/FacebookIcon.tsx


function FacebookIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            width: "22",
            height: "22",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.5 14.5a7 7 0 110-14 7 7 0 010 14zm0 0v-8a2 2 0 012-2h.5m-5 4h5",
                stroke: "currentColor"
            })
        })
    });
}
/* harmony default export */ const Icons_FacebookIcon = (FacebookIcon);

;// CONCATENATED MODULE: ./components/Global/Icons/Instagram.tsx


function Instagram() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            width: "22",
            height: "22",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11 3.5h1M4.5.5h6a4 4 0 014 4v6a4 4 0 01-4 4h-6a4 4 0 01-4-4v-6a4 4 0 014-4zm3 10a3 3 0 110-6 3 3 0 010 6z",
                stroke: "currentColor"
            })
        })
    });
}
/* harmony default export */ const Icons_Instagram = (Instagram);

;// CONCATENATED MODULE: ./components/Global/Icons/Linkedin.tsx


function Linkedin() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            width: "22",
            height: "22",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4.5 6v5m6 0V8.5a2 2 0 10-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z",
                stroke: "currentColor"
            })
        })
    });
}
/* harmony default export */ const Icons_Linkedin = (Linkedin);

;// CONCATENATED MODULE: ./components/Global/Icons/YoutubeIcon.tsx


function YoutubeIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            width: "22",
            height: "22",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M8.599 7.5L7 8.566V6.434L8.599 7.5z",
                    fill: "currentColor"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.506 1.773a28.606 28.606 0 0111.988 0A1.905 1.905 0 0115 3.636v7.728c0 .898-.628 1.675-1.506 1.863a28.605 28.605 0 01-11.988 0A1.905 1.905 0 010 11.364V3.636c0-.898.628-1.675 1.506-1.863zm5.271 3.311A.5.5 0 006 5.5v4a.5.5 0 00.777.416l3-2a.5.5 0 000-.832l-3-2z",
                    fill: "currentColor"
                })
            ]
        })
    });
}
/* harmony default export */ const Icons_YoutubeIcon = (YoutubeIcon);

// EXTERNAL MODULE: ./components/Global/Logo/Logo.tsx
var Logo = __webpack_require__(7918);
;// CONCATENATED MODULE: ./components/Global/Footer/Footer.tsx









function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: " pt-12 pb-12 md:pb-28 bg-[#0288FA]",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-12 lg:space-y-0 lg:flex--between ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center space-x-12 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-white lg:text-xl",
                                    children: "Team"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-white lg:text-xl",
                                    children: "Case Studies"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-white lg:text-xl",
                                    children: "Publick"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex space-x-6 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/",
                                className: "rounded-full border p-3 md:p-4 inline-block text-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Icons_Linkedin, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/",
                                className: "rounded-full border p-3 md:p-4 inline-block text-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Icons_FacebookIcon, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/",
                                className: "rounded-full border p-3 md:p-4 inline-block text-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Icons_Instagram, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/",
                                className: "rounded-full border p-3 md:p-4 inline-block text-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Icons_YoutubeIcon, {})
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Footer_Footer = (Footer);


/***/ }),

/***/ 3845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function MenuIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "25",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M0 5.5h15m-15-4h15m-15 8h15m-15 4h15",
            stroke: "currentColor"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuIcon);


/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function UpIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M1 10l6.5-7 6.5 7",
                stroke: "currentColor",
                strokeLinecap: "square"
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpIcon);


/***/ }),

/***/ 7918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Logo() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "/images/logo.png",
            className: "h-20 cursor-pointer"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 3149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function NavLink({ children , navLink , activeClass  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: navLink,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: `
   ${activeClass} text-base lg:text-lg hover:text-[#0a4a41] transition-all ml-6 md:ml-0    
`,
                children: children
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);


/***/ }),

/***/ 8548:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_atom_useAtom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9407);
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3149);
/* harmony import */ var _styles_StyledNavbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _base_atom_useAtom__WEBPACK_IMPORTED_MODULE_4__]);
([jotai__WEBPACK_IMPORTED_MODULE_1__, _base_atom_useAtom__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function NavLinks() {
    const [openNavbar, setOpenNavbar] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_base_atom_useAtom__WEBPACK_IMPORTED_MODULE_4__/* .openNav */ .tm);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    function addActiveClass(path) {
        return router.pathname === path ? "text-primary " : "text-white";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_StyledNavbar__WEBPACK_IMPORTED_MODULE_6__/* .StyledNavLinks */ .K9, {
        $isOpen: openNavbar,
        onClick: ()=>setOpenNavbar(false)
        ,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                activeClass: addActiveClass("/#aboutUs"),
                navLink: "/#aboutUs",
                children: "Company"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                activeClass: addActiveClass("/#activities"),
                navLink: "/#activities",
                children: "Our activities"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                activeClass: addActiveClass("/#solution"),
                navLink: "/#solution",
                children: "Solution"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                activeClass: addActiveClass("#contact"),
                navLink: "#contact",
                children: "Contact"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLinks);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1314:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_atom_useAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9407);
/* harmony import */ var _Layout_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1572);
/* harmony import */ var _Icons_MenuIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3845);
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7918);
/* harmony import */ var _NavLinks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8548);
/* harmony import */ var _styles_StyledNavbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _base_atom_useAtom__WEBPACK_IMPORTED_MODULE_3__, _NavLinks__WEBPACK_IMPORTED_MODULE_7__]);
([jotai__WEBPACK_IMPORTED_MODULE_1__, _base_atom_useAtom__WEBPACK_IMPORTED_MODULE_3__, _NavLinks__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Navbar() {
    const [openNavbar, setOpenNavbar] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_base_atom_useAtom__WEBPACK_IMPORTED_MODULE_3__/* .openNav */ .tm);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full bg-transparent py-2 z-50 top-0 right-0 left-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_StyledNavbar__WEBPACK_IMPORTED_MODULE_8__/* .StyledNavbarWrapper */ .Y5, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavLinks__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            display: openNavbar ? "block" : "none"
                        },
                        onClick: ()=>setOpenNavbar(false)
                        ,
                        className: `  bg-[#00000046] w-full h-screen md:hidden fixed inset-0 z-10 `
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>setOpenNavbar(!openNavbar)
                        ,
                        className: "block lg:hidden text-white",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_MenuIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K9": () => (/* binding */ StyledNavLinks),
  "Y5": () => (/* binding */ StyledNavbarWrapper)
});

// UNUSED EXPORTS: StyledNavLink

;// CONCATENATED MODULE: external "tailwind-styled-components/dist"
const dist_namespaceObject = require("tailwind-styled-components/dist");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist_namespaceObject);
;// CONCATENATED MODULE: ./components/Global/Navbar/styles/StyledNavbar.tsx

const StyledNavbarWrapper = (dist_default()).div`
    w-full flex items-center justify-between 
    md:mt-4   
`;
const StyledNavLinks = (dist_default()).div`

md:relative md:hidden flex items-center md:space-x-8 fixed md:block bg-[#219E82] left-0 top-0  md:bg-transparent w-1/2 md:w-auto  h-screen md:h-auto z-40 p- md:p-0 flex flex-col space-y-20 pr-6 md:pr-0 text-lg md:gap-0  pt-12 md:pt-0 transition-transform duration-500 

${(p)=>p.$isOpen ? " translate-x-0 drop-shadow-2xl" : "-translate-x-full md:translate-x-0"
}


`;
const StyledNavLink = (dist_default()).a`
   text-base text-textColor hover:text-primary transition-all ml-6 md:ml-0    
`;


/***/ }),

/***/ 3144:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_atom_useAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9407);
/* harmony import */ var _Icons_UpIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _base_atom_useAtom__WEBPACK_IMPORTED_MODULE_3__]);
([jotai__WEBPACK_IMPORTED_MODULE_1__, _base_atom_useAtom__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const TopButton = ()=>{
    const [useRevealButton] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_base_atom_useAtom__WEBPACK_IMPORTED_MODULE_3__/* .reviewTopButton */ .dL);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "#top",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `"rounded-full ml-5 lg:ml-12 cursor-pointer z-30 p-6 bg-gray-dark text-white transitions  bg-[#219E82] fixed bottom-9 left-0" ${useRevealButton ? " opacity-1" : " opacity-0"}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_UpIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8769);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_stores_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6627);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__]);
_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
        store: _base_stores_store__WEBPACK_IMPORTED_MODULE_3__/* .store */ .h,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,124], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();