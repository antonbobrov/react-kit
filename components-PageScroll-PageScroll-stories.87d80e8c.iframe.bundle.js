"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[797],{"./src/utils/prefixedClassName.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function prefixedClassName(className){return`rkc-${className}`}__webpack_require__.d(__webpack_exports__,{e:()=>prefixedClassName})},"./src/utils/prefixedClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>prefixedClasNames});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/utils/types/isString.js"),_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/prefixedClassName.ts");function prefixedClasNames(...classNames){return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNames.map((value=>(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.H)(value)?(0,_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__.e)(value):"")))}},"../react-hooks/lib/esm/hooks/useEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},useEvent=function(callback){var callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return null===(_a=callbackRef.current)||void 0===_a?void 0:_a.call.apply(_a,__spreadArray([callbackRef],args,!1))}),[])}},"../react-hooks/lib/esm/utils/types/isString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isString(value){return"string"==typeof value}__webpack_require__.d(__webpack_exports__,{H:()=>isString})},"../react-hooks/lib/esm/utils/types/isUndefined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isUndefined(value){return void 0===value}__webpack_require__.d(__webpack_exports__,{o:()=>isUndefined})},"../vevet-init/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{vevet:()=>vevet});var vevet__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.16.0_typescript@4.8.2/node_modules/vevet/lib/esm/Application/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},overrideProps="undefined"!=typeof window&&"vevetProps"in window?window.vevetProps:{},props=__assign(__assign({},{tablet:1199,phone:899,resizeDebounce:30,easing:[.25,.1,.25,1],shouldCheckWebpSupport:!0,widthDetection:"boundingRect"}),overrideProps),vevet="undefined"!=typeof window?new vevet__WEBPACK_IMPORTED_MODULE_0__.M(__assign(__assign({},props),{prefix:"v-"})):void 0},"./src/components/PageScroll/PageScroll.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PageScroll_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),times=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.16.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/common/times.js"),SmoothScroll=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.16.0_typescript@4.8.2/node_modules/vevet/lib/esm/components/SmoothScroll/index.js"),esm=__webpack_require__("../vevet-init/lib/esm/index.js"),SmoothScrollKeyboardPlugin=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.16.0_typescript@4.8.2/node_modules/vevet/lib/esm/components/SmoothScrollKeyboardPlugin/index.js"),SmoothScrollDragPlugin=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.16.0_typescript@4.8.2/node_modules/vevet/lib/esm/components/SmoothScrollDragPlugin/index.js"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js");var use_deep_compare_effect_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/use-deep-compare-effect@1.8.1_react@18.2.0/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js"),isUndefined=__webpack_require__("../react-hooks/lib/esm/utils/types/isUndefined.js"),prefixedClassNames=__webpack_require__("./src/utils/prefixedClassNames.ts");const PageScrollContext=(0,react.createContext)({});var jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Provider=({children,canBeSmooth:canBeSmoothProp,smoothProps={},onSmoothInit:onSmoothInitProp})=>{const store=function usePageScrollProviderStore(){const[store,setStore]=(0,react.useState)({selector:void 0,setSelector:data=>{setStore((prevValue=>({...prevValue,selector:data})))},smoothContainer:void 0,setSmoothContainer:data=>{setStore((prevValue=>({...prevValue,smoothContainer:data})))}});return store}(),{selector,setSelector,smoothContainer}=store,[initialSmoothProps]=(0,react.useState)(smoothProps),htmlSmoothClassName=(0,prefixedClassNames.I)("page-scroll-use-smooth"),onSmoothInit=(0,useEvent.z)(onSmoothInitProp);return(0,react.useEffect)((()=>{const html=document.documentElement,isSmoothByProp=function isBoolean(value){return"boolean"==typeof value}(canBeSmoothProp)?canBeSmoothProp:canBeSmoothProp?.(),isSmoothByDefault=function canBeSmooth(){return!esm.vevet.isMobile}();if(!(isSmoothByProp??isSmoothByDefault)||!smoothContainer){const timeout=setTimeout((()=>{html.classList.remove(htmlSmoothClassName),setSelector?.(window)}),16);return()=>{setSelector?.(void 0),clearTimeout(timeout)}}html.classList.add(htmlSmoothClassName);const scroll=new SmoothScroll.X({container:smoothContainer,hasWillChange:!esm.vevet.browserName.includes("firefox"),lerp:.1,lerpApproximation:.5,isEnabled:!0,...initialSmoothProps});return setSelector?.(scroll),scroll.addPlugin(new SmoothScrollKeyboardPlugin.z),esm.vevet.isMobile&&scroll.addPlugin(new SmoothScrollDragPlugin.s({lerp:.35})),onSmoothInit?.(scroll),()=>{setSelector?.(void 0),scroll.destroy()}}),[canBeSmoothProp,htmlSmoothClassName,initialSmoothProps,onSmoothInit,setSelector,smoothContainer]),(0,react.useEffect)((()=>{selector&&selector instanceof SmoothScroll.X&&selector.changeProps({...smoothProps})}),[selector,(0,use_deep_compare_effect_esm.Uf)(smoothProps)]),(0,react.useEffect)((()=>{!(0,isUndefined.o)(selector)&&"resize"in selector&&selector.resize()}),[selector]),(0,jsx_runtime.jsx)(PageScrollContext.Provider,{value:store,children})};Provider.displayName="Provider";try{Provider.displayName="Provider",Provider.__docgenInfo={description:"PageScroll provider",displayName:"Provider",props:{canBeSmooth:{defaultValue:null,description:"Define if global scrolling should be custom",name:"canBeSmooth",required:!1,type:{name:"boolean | (() => boolean)"}},smoothProps:{defaultValue:{value:"{}"},description:"Smooth scrolling properties",name:"smoothProps",required:!1,type:{name:"IChangeableProps"}},onSmoothInit:{defaultValue:null,description:"Callback on smooth scroll initialization",name:"onSmoothInit",required:!1,type:{name:"((smoothScroll: SmoothScroll<IStaticProps, IChangeableProps, ICallbacksTypes>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PageScroll/Provider/index.tsx#Provider"]={docgenInfo:Provider.__docgenInfo,name:"Provider",path:"src/components/PageScroll/Provider/index.tsx#Provider"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const SmoothContainer=({children})=>{const ref=(0,react.useRef)(null),{selector,setSmoothContainer}=(0,react.useContext)(PageScrollContext),isSmooth=selector instanceof SmoothScroll.X;return(0,react.useEffect)((()=>(setSmoothContainer?.(ref.current),()=>setSmoothContainer?.(null))),[setSmoothContainer]),(0,jsx_runtime.jsx)("div",{className:classnames_default()((0,prefixedClassNames.I)("page-scroll-smooth-container",isSmooth&&"is-smooth")),children:(0,jsx_runtime.jsx)("div",{ref,className:"v-smooth-scroll",children:(0,jsx_runtime.jsx)("div",{className:"v-smooth-scroll__wrapper",children})})})};SmoothContainer.displayName="SmoothContainer";try{SmoothContainer.displayName="SmoothContainer",SmoothContainer.__docgenInfo={description:"Smooth scrolling container.\nWrap your page with this component to enable smooth scrolling",displayName:"SmoothContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PageScroll/SmoothContainer/index.tsx#SmoothContainer"]={docgenInfo:SmoothContainer.__docgenInfo,name:"SmoothContainer",path:"src/components/PageScroll/SmoothContainer/index.tsx#SmoothContainer"})}catch(__react_docgen_typescript_loader_error){}var ScrollBar=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.16.0_typescript@4.8.2/node_modules/vevet/lib/esm/components/ScrollBar/index.js");const ScrollBar_ScrollBar=({children,resizeKey,isDisabled})=>{const[scrollbar,setScrollbar]=(0,react.useState)(),scrollSelector=function usePageScrollSelector(){const store=(0,react.useContext)(PageScrollContext),[selector,setSelector]=(0,react.useState)();return(0,react.useEffect)((()=>{const timeout=setTimeout((()=>setSelector(store.selector)),16);return()=>clearTimeout(timeout)}),[store.selector]),selector}();return(0,react.useEffect)((()=>{if(!scrollSelector||esm.vevet.isMobile||isDisabled)return;const instance=new ScrollBar.B({container:scrollSelector,domParent:document.body});setScrollbar(instance);const xBar=instance._xBar,yBar=instance._yBar;return xBar.outer.classList.add((0,prefixedClassNames.I)("page-scroll-scrollbar")),yBar.outer.classList.add((0,prefixedClassNames.I)("page-scroll-scrollbar")),esm.vevet.html.classList.add((0,prefixedClassNames.I)("page-scroll-scrollbar-parent")),esm.vevet.body.classList.add((0,prefixedClassNames.I)("page-scroll-scrollbar-parent")),()=>{instance.destroy(),esm.vevet.html.classList.remove((0,prefixedClassNames.I)("page-scroll-scrollbar-parent")),esm.vevet.body.classList.remove((0,prefixedClassNames.I)("page-scroll-scrollbar-parent"))}}),[scrollSelector,isDisabled]),(0,react.useEffect)((()=>{scrollbar?.isDestroyed||scrollbar?.resize()}),[resizeKey,scrollbar]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})};try{ScrollBar_ScrollBar.displayName="ScrollBar",ScrollBar_ScrollBar.__docgenInfo={description:"Custom scrollbar",displayName:"ScrollBar",props:{isDisabled:{defaultValue:null,description:"Do not use scrollbar",name:"isDisabled",required:!1,type:{name:"boolean"}},resizeKey:{defaultValue:null,description:"Change the key to update the scrollbar",name:"resizeKey",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PageScroll/ScrollBar/index.tsx#ScrollBar"]={docgenInfo:ScrollBar_ScrollBar.__docgenInfo,name:"ScrollBar",path:"src/components/PageScroll/ScrollBar/index.tsx#ScrollBar"})}catch(__react_docgen_typescript_loader_error){}Provider.displayName="PageScroll.Provider",SmoothContainer.displayName="PageScroll.SmoothContainer",ScrollBar_ScrollBar.displayName="PageScroll.ScrollBar";const PageScroll={Provider,SmoothContainer,ScrollBar:ScrollBar_ScrollBar},PageScroll_stories={title:"Scroll/PageScroll",component:PageScroll.Provider},Components=()=>(0,jsx_runtime.jsx)("div",{children:(0,times.D)((index=>(0,jsx_runtime.jsx)("div",{children:"Element"},index)),100)});Components.displayName="Components";const Template=props=>(0,jsx_runtime.jsx)(PageScroll.Provider,{...props,children:(0,jsx_runtime.jsx)(PageScroll.ScrollBar,{children:(0,jsx_runtime.jsx)(PageScroll.SmoothContainer,{children:(0,jsx_runtime.jsx)(Components,{})})})});Template.displayName="Template";const Default=Template.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => <PageScroll.Provider {...props}>\r\n    <PageScroll.ScrollBar>\r\n      <PageScroll.SmoothContainer>\r\n        <Components />\r\n      </PageScroll.SmoothContainer>\r\n    </PageScroll.ScrollBar>\r\n  </PageScroll.Provider>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);