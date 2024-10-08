/*! For license information please see components-LinkClickInterceptor-LinkClickInterceptor-stories.66bd67cf.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[404],{"../react-hooks/lib/esm/hooks/useForwardedRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useForwardedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useForwardedRef(forwardedRef){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,(function(){return ref.current})),ref}},"./src/components/LinkClickInterceptor/LinkClickInterceptor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LinkClickInterceptor_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),useForwardedRef=__webpack_require__("../react-hooks/lib/esm/hooks/useForwardedRef.js");const getAnchor=element=>element instanceof HTMLAnchorElement?element:element.parentElement?getAnchor(element.parentElement):null;var jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const LinkClickInterceptor=(0,react.forwardRef)((({className,style,children,onExternalClick,onInternalClick,...props},forwardedRef)=>{const ref=(0,useForwardedRef.t)(forwardedRef);return(0,jsx_runtime.jsx)("div",{...props,ref,className,style,onClick:event=>{const anchor=getAnchor(event.target);if(!anchor)return;const targetURL=new URL(anchor.href),currentURL=new URL(window.location.href),isExternal=targetURL.origin!==currentURL.origin;anchor.hasAttribute("data-ignore-link-interceptor")||anchor.target||anchor.hasAttribute("download")||anchor.href.includes("#")||(isExternal?onExternalClick?.(event,anchor):onInternalClick?.(event,anchor))},children})}));LinkClickInterceptor.displayName="LinkClickInterceptor";try{LinkClickInterceptor.displayName="LinkClickInterceptor",LinkClickInterceptor.__docgenInfo={description:"LinkClickInterceptor component for intercepting link click events.\n\nThis component enhances link functionality by providing a mechanism to intercept\nclick events on anchor tags, allowing developers to implement custom logic\nbefore navigating to a new page. This can include features such as analytics tracking,\nconfirmation dialogs, or conditionally preventing navigation based on specific criteria.\nThe LinkClickInterceptor component also supports the `data-ignore-link-interceptor`\nattribute, which allows certain links to bypass the interceptor, enabling flexibility\nin navigation handling.",displayName:"LinkClickInterceptor",props:{onInternalClick:{defaultValue:null,description:"Event on internal link click",name:"onInternalClick",required:!1,type:{name:"TLinkClickInterceptorHandler"}},onExternalClick:{defaultValue:null,description:"Event on external link click",name:"onExternalClick",required:!1,type:{name:"TLinkClickInterceptorHandler"}},id:{defaultValue:null,description:"Element ID",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LinkClickInterceptor/index.tsx#LinkClickInterceptor"]={docgenInfo:LinkClickInterceptor.__docgenInfo,name:"LinkClickInterceptor",path:"src/components/LinkClickInterceptor/index.tsx#LinkClickInterceptor"})}catch(__react_docgen_typescript_loader_error){}const LinkClickInterceptor_stories={title:"Elements/LinkClickInterceptor",component:LinkClickInterceptor,tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onExternalClick:{table:{disable:!0}},onInternalClick:{table:{disable:!0}}},args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("a",{href:"https://google.com/",children:"External link"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("a",{href:"https://google.com/",target:"_blank",rel:"noreferrer",children:"External link with target"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("a",{href:"/",download:!0,children:"Download"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("a",{href:"/",children:"Interal link"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("a",{href:"#hash",children:"Link with hash"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("a",{href:"/",children:(0,jsx_runtime.jsx)("span",{children:"Link with children"})}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("a",{href:"/","data-ignore-link-interceptor":"",children:(0,jsx_runtime.jsx)("span",{children:"Framework link"})})]}),onExternalClick:(event,element)=>{event.preventDefault(),alert(`external link ${element.href}`)},onInternalClick:(event,element)=>{event.preventDefault(),alert(`internal link ${element.href}`)}}},Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);