/*! For license information please see Introduction-Introduction-mdx.8a5a8bce.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktable_header_with_sub_header=self.webpackChunktable_header_with_sub_header||[]).push([[851],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Introduction/Introduction.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Introduction});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),external_STORYBOOK_MODULE_CLIENT_LOGGER_=__webpack_require__("@storybook/client-logger"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,external_STORYBOOK_MODULE_CLIENT_LOGGER_.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");const Introduction=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"AccessibleComponents/Introduction"}),"\n",(0,jsx_runtime.jsx)("style",{children:"\n    /* Add the same style rules as provided in the example */\n  "}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"welcome-to-accessible-components",children:"Welcome to Accessible Components"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This experimental personal project by Laurence Lewis is a set of React-based storybook components designed with accessibility in mind, adhering to the Web Content Accessibility Guidelines (WCAG) 2.1. Please note that these components should not be used in production without thorough testing first. The testing should be done using a screen reader, keyboard navigation, and running an automated testing tool."}),"\n",(0,jsx_runtime.jsx)("h2",{className:"subheading",children:"References"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"link-list",children:[(0,jsx_runtime.jsx)("a",{className:"link-item",href:"https://www.w3.org/TR/WCAG21/",target:"_blank",children:(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"WCAG 2.1"}),"\nWeb Content Accessibility Guidelines 2.1"]})})}),(0,jsx_runtime.jsx)("a",{className:"link-item",href:"https://www.w3.org/TR/wai-aria-1.2/",target:"_blank",children:(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"ARIA 1.2 Specification"}),"\nAccessible Rich Internet Applications 1.2"]})})}),(0,jsx_runtime.jsx)("a",{className:"link-item",href:"https://www.w3.org/TR/wai-aria-practices-1.2/",target:"_blank",children:(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"ARIA APG"}),"\nARIA Authoring Practices Guide"]})})}),(0,jsx_runtime.jsx)("a",{className:"link-item",href:"https://html.spec.whatwg.org/multipage/",target:"_blank",children:(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"HTML Living Standard (Multipage)"}),"\nThe living standard for HTML"]})})})]})]})}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);