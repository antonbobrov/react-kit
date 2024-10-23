"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[468],{"./src/utils/prefixedClassName.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function prefixedClassName(className){return`rkc-${className}`}__webpack_require__.d(__webpack_exports__,{e:()=>prefixedClassName})},"./src/utils/prefixedClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>prefixedClasNames});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/utils/types/isString.js"),_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/prefixedClassName.ts");function prefixedClasNames(...classNames){return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNames.map((value=>(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.H)(value)?(0,_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__.e)(value):"")))}},"../react-hooks/lib/esm/hooks/useEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},useEvent=function(callback){var callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return null===(_a=callbackRef.current)||void 0===_a?void 0:_a.call.apply(_a,__spreadArray([callbackRef],args,!1))}),[])}},"../react-hooks/lib/esm/hooks/useForwardedRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useForwardedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useForwardedRef(forwardedRef){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,(function(){return ref.current})),ref}},"../react-hooks/lib/esm/hooks/useInViewport.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>useInViewport});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),usePropState=__webpack_require__("../react-hooks/lib/esm/hooks/usePropState.js"),getHookEventElement=__webpack_require__("../react-hooks/lib/esm/utils/internal/getHookEventElement.js"),instances=[];var __assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function useInViewport(_a){var ref=_a.ref,onInProp=_a.onIn,onOutProp=_a.onOut,destroyOnIn=_a.destroyOnIn,isDisabledProp=_a.isDisabled,props=__rest(_a,["ref","onIn","onOut","destroyOnIn","isDisabled"]),onIn=(0,useEvent.z)(onInProp),onOut=(0,useEvent.z)(onOutProp),_b=(0,react.useState)(),state=_b[0],setState=_b[1],_c=(0,usePropState.W)(isDisabledProp),isDisabled=_c[0],setIsDisabled=_c[1];return(0,react.useEffect)((function(){"in"===state&&destroyOnIn&&setIsDisabled(!0)}),[destroyOnIn,setIsDisabled,state]),function useIntersectionObserver(_a){var ref=_a.ref,onEntryProp=_a.onEntry,_b=_a.root,root=void 0===_b?null:_b,_c=_a.threshold,threshold=void 0===_c?0:_c,_d=_a.rootMargin,rootMargin=void 0===_d?"0px 0px 0px 0px":_d,isDisabled=_a.isDisabled,id=(0,react.useId)(),onEntry=(0,useEvent.z)(onEntryProp),getObserverInstance=(0,react.useCallback)((function(){return instances.find((function(data){return data.root===root&&data.threshold===threshold&&data.rootMargin===rootMargin}))}),[root,rootMargin,threshold]);(0,react.useEffect)((function(){if(!isDisabled){var element=(0,getHookEventElement.I)(ref);if(element){var instance=getObserverInstance();return instance||(instance={observer:new IntersectionObserver((function(entries){return entries.forEach((function(entry){null==instance||instance.elements.forEach((function(item){item.element===entry.target&&item.onEntry(entry)}))}))}),{root,threshold,rootMargin}),root,threshold,rootMargin,elements:[]},instances.push(instance)),instance.elements.push({id,element,onEntry}),instance.observer.observe(element),function(){instance&&(instance.elements=instance.elements.filter((function(item){return item.id!==id})),instance.elements.find((function(item){return item.element===element}))||instance.observer.unobserve(element),0===instance.elements.length&&(instances.splice(instances.indexOf(instance),1),instance.observer.disconnect()))}}}}),[getObserverInstance,id,isDisabled,onEntry,ref,root,rootMargin,threshold])}(__assign(__assign({},props),{ref,onEntry:function(entry){entry.isIntersecting?(setState("in"),null==onIn||onIn()):(setState("out"),null==onOut||onOut())},isDisabled})),{state}}},"../react-hooks/lib/esm/hooks/usePropState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>usePropState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function usePropState(prop){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prop),state=_a[0],setState=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setState(prop)}),[prop]),[state,setState]}},"../react-hooks/lib/esm/utils/internal/getHookEventElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getHookEventElement(ref){return ref&&"current"in ref?ref.current:ref}__webpack_require__.d(__webpack_exports__,{I:()=>getHookEventElement})},"../react-hooks/lib/esm/utils/types/isString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isString(value){return"string"==typeof value}__webpack_require__.d(__webpack_exports__,{H:()=>isString})},"./src/components/Marquee/Marquee.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithHTMLElements:()=>WithHTMLElements,WithNotClonableText:()=>WithNotClonableText,WithReverseSpeed:()=>WithReverseSpeed,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Marquee_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),usePropState=__webpack_require__("../react-hooks/lib/esm/hooks/usePropState.js"),useForwardedRef=__webpack_require__("../react-hooks/lib/esm/hooks/useForwardedRef.js"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),useInViewport=__webpack_require__("../react-hooks/lib/esm/hooks/useInViewport.js"),use_deep_compare_effect_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/use-deep-compare-effect@1.8.1_react@18.2.0/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js"),isString=__webpack_require__("../react-hooks/lib/esm/utils/types/isString.js"),classnames=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Marquee=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.2_typescript@4.8.2/node_modules/vevet/lib/esm/components/Marquee/index.js"),prefixedClassNames=__webpack_require__("./src/utils/prefixedClassNames.ts"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Marquee_Marquee=(0,react.forwardRef)((({className,style,children,"aria-label":ariaLabel,canCloneNodes=!1,onInit:onInitProp,isEnabled=!0,...changeableProps},forwardedRef)=>{const ref=(0,useForwardedRef.t)(forwardedRef),containerRef=(0,react.useRef)(null),[marquee,setMarquee]=(0,react.useState)(),onInit=(0,useEvent.z)(onInitProp),initialPropsRef=(0,react.useRef)({isEnabled,...changeableProps});(0,react.useEffect)((()=>{if(!containerRef.current)return;const instance=new Marquee.R({...initialPropsRef.current,container:containerRef.current,canCloneNodes});return setMarquee(instance),onInit?.(instance),()=>instance?.destroy()}),[canCloneNodes,onInit,ref]);const{state}=(0,useInViewport.N)({ref});return(0,react.useEffect)((()=>{marquee&&state&&("in"===state&&isEnabled?marquee.changeProps({isEnabled:!0}):marquee.changeProps({isEnabled:!1}))}),[marquee,state,isEnabled]),(0,react.useEffect)((()=>{marquee&&marquee.changeProps(changeableProps)}),[marquee,(0,use_deep_compare_effect_esm.Uf)(changeableProps)]),(0,jsx_runtime.jsx)("div",{ref,className:classnames_default()(className,(0,prefixedClassNames.I)("marquee")),style,role:"marquee","aria-label":ariaLabel??((0,isString.H)(children)?children:void 0),children:(0,jsx_runtime.jsx)("div",{ref:containerRef,className:(0,prefixedClassNames.I)("marquee__container"),"aria-hidden":!0,children})})}));Marquee_Marquee.displayName="Marquee";try{Marquee_Marquee.displayName="Marquee",Marquee_Marquee.__docgenInfo={description:"Marquee component for creating scrolling text or content.\n\nThis component provides a simple way to display text or other elements that\nscroll horizontally across the screen. It supports various features such as\ncustomizable speed, direction, and behavior, allowing developers to create\nengaging and dynamic content displays. The Marquee component is designed\nto enhance user experience by providing an attention-grabbing method for\npresenting important information or announcements while ensuring accessibility\nand responsiveness across different devices and screen sizes.",displayName:"Marquee",props:{children:{defaultValue:null,description:"Marquee text",name:"children",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}},"aria-label":{defaultValue:null,description:"Aria-Label",name:"aria-label",required:!1,type:{name:"string"}},canCloneNodes:{defaultValue:{value:"false"},description:"If need to clone nodes for a better animation. True is not recommended for react apps.",name:"canCloneNodes",required:!1,type:{name:"boolean"}},onInit:{defaultValue:null,description:"Event on marquee initialization",name:"onInit",required:!1,type:{name:"((instance: Marquee<IStaticProps, IChangeableProps, ICallbacksTypes>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Marquee/index.tsx#Marquee"]={docgenInfo:Marquee_Marquee.__docgenInfo,name:"Marquee",path:"src/components/Marquee/index.tsx#Marquee"})}catch(__react_docgen_typescript_loader_error){}const Marquee_stories={title:"Text/Marquee",component:Marquee_Marquee,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},args:{gap:10,children:"Marquee text"}},Template=({isEnabled:isEnabledProp,speed:speedProp=1,...props})=>{const[isEnabled,setIsEnabled]=(0,usePropState.W)(isEnabledProp),[speed,setSpeed]=(0,usePropState.W)(speedProp);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setIsEnabled(!0),children:"Enable"}),(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setIsEnabled(!1),children:"Disable"}),(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setSpeed((val=>2*val)),children:"Faster"}),(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setSpeed((val=>val/2)),children:"Slower"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("h1",{children:(0,jsx_runtime.jsx)(Marquee_Marquee,{...props,isEnabled,speed})})]})},Default=Template.bind({});Default.args={canCloneNodes:!0};const WithNotClonableText=Template.bind({});WithNotClonableText.args={};const WithReverseSpeed=Template.bind({});WithReverseSpeed.args={speed:-1};const WithHTMLElements=Template.bind({});WithHTMLElements.args={children:[(0,jsx_runtime.jsx)("div",{style:{width:"20vw",height:"100px",backgroundColor:"#dd7171"}}),(0,jsx_runtime.jsx)("div",{style:{width:"40vw",height:"50px",backgroundColor:"#8abd41"}}),(0,jsx_runtime.jsx)("div",{style:{width:"10vw",height:"100px",backgroundColor:"#32e3d7"}}),(0,jsx_runtime.jsx)("div",{style:{width:"15vw",height:"10px",backgroundColor:"#5139d7"}}),(0,jsx_runtime.jsx)("div",{style:{width:"5vw",height:"100px",backgroundColor:"#e332d4"}}),(0,jsx_runtime.jsx)("div",{style:{width:"50vw",height:"100px",backgroundColor:"#000"}}),(0,jsx_runtime.jsx)("div",{style:{width:"10vw",height:"30px",backgroundColor:"#e34a32"}})],speed:3},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'({\n  isEnabled: isEnabledProp,\n  speed: speedProp = 1,\n  ...props\n}) => {\n  const [isEnabled, setIsEnabled] = usePropState(isEnabledProp);\n  const [speed, setSpeed] = usePropState(speedProp);\n  return <>\r\n      <button type="button" onClick={() => setIsEnabled(true)}>\r\n        Enable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setIsEnabled(false)}>\r\n        Disable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => val * 2)}>\r\n        Faster\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => val / 2)}>\r\n        Slower\r\n      </button>\r\n\r\n      <br />\r\n\r\n      <br />\r\n\r\n      <h1>\r\n        <Marquee {...props} isEnabled={isEnabled} speed={speed} />\r\n      </h1>\r\n    </>;\n}',...Default.parameters?.docs?.source}}},WithNotClonableText.parameters={...WithNotClonableText.parameters,docs:{...WithNotClonableText.parameters?.docs,source:{originalSource:'({\n  isEnabled: isEnabledProp,\n  speed: speedProp = 1,\n  ...props\n}) => {\n  const [isEnabled, setIsEnabled] = usePropState(isEnabledProp);\n  const [speed, setSpeed] = usePropState(speedProp);\n  return <>\r\n      <button type="button" onClick={() => setIsEnabled(true)}>\r\n        Enable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setIsEnabled(false)}>\r\n        Disable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => val * 2)}>\r\n        Faster\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => val / 2)}>\r\n        Slower\r\n      </button>\r\n\r\n      <br />\r\n\r\n      <br />\r\n\r\n      <h1>\r\n        <Marquee {...props} isEnabled={isEnabled} speed={speed} />\r\n      </h1>\r\n    </>;\n}',...WithNotClonableText.parameters?.docs?.source}}},WithReverseSpeed.parameters={...WithReverseSpeed.parameters,docs:{...WithReverseSpeed.parameters?.docs,source:{originalSource:'({\n  isEnabled: isEnabledProp,\n  speed: speedProp = 1,\n  ...props\n}) => {\n  const [isEnabled, setIsEnabled] = usePropState(isEnabledProp);\n  const [speed, setSpeed] = usePropState(speedProp);\n  return <>\r\n      <button type="button" onClick={() => setIsEnabled(true)}>\r\n        Enable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setIsEnabled(false)}>\r\n        Disable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => val * 2)}>\r\n        Faster\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => val / 2)}>\r\n        Slower\r\n      </button>\r\n\r\n      <br />\r\n\r\n      <br />\r\n\r\n      <h1>\r\n        <Marquee {...props} isEnabled={isEnabled} speed={speed} />\r\n      </h1>\r\n    </>;\n}',...WithReverseSpeed.parameters?.docs?.source}}},WithHTMLElements.parameters={...WithHTMLElements.parameters,docs:{...WithHTMLElements.parameters?.docs,source:{originalSource:'({\n  isEnabled: isEnabledProp,\n  speed: speedProp = 1,\n  ...props\n}) => {\n  const [isEnabled, setIsEnabled] = usePropState(isEnabledProp);\n  const [speed, setSpeed] = usePropState(speedProp);\n  return <>\r\n      <button type="button" onClick={() => setIsEnabled(true)}>\r\n        Enable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setIsEnabled(false)}>\r\n        Disable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => val * 2)}>\r\n        Faster\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => val / 2)}>\r\n        Slower\r\n      </button>\r\n\r\n      <br />\r\n\r\n      <br />\r\n\r\n      <h1>\r\n        <Marquee {...props} isEnabled={isEnabled} speed={speed} />\r\n      </h1>\r\n    </>;\n}',...WithHTMLElements.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithNotClonableText","WithReverseSpeed","WithHTMLElements"]}}]);