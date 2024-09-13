"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[654],{"./src/utils/prefixedClassName.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function prefixedClassName(className){return`rkc-${className}`}__webpack_require__.d(__webpack_exports__,{e:()=>prefixedClassName})},"./src/utils/prefixedClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>prefixedClasNames});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/utils/types/isString.js"),_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/prefixedClassName.ts");function prefixedClasNames(...classNames){return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNames.map((value=>(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.H)(value)?(0,_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__.e)(value):"")))}},"../react-hooks/lib/esm/hooks/useEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},useEvent=function(callback){var callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return null===(_a=callbackRef.current)||void 0===_a?void 0:_a.call.apply(_a,__spreadArray([callbackRef],args,!1))}),[])}},"../react-hooks/lib/esm/hooks/useForwardedRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useForwardedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useForwardedRef(forwardedRef){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,(function(){return ref.current})),ref}},"../react-hooks/lib/esm/hooks/usePropState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>usePropState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function usePropState(prop){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prop),state=_a[0],setState=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setState(prop)}),[prop]),[state,setState]}},"../react-hooks/lib/esm/utils/types/isString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isString(value){return"string"==typeof value}__webpack_require__.d(__webpack_exports__,{H:()=>isString})},"../react-vevet-hooks/lib/esm/hooks/useTimeline.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>useTimeline});var _anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/use-deep-compare-effect@1.8.1_react@18.2.0/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js"),_anton_bobrov_vevet_init__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../vevet-init/lib/esm/index.js"),_anton_bobrov_vevet_init__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/components/Timeline/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function useTimeline(_a){var easing=_a.easing,onStartProp=_a.onStart,onProgressProp=_a.onProgress,onEndProp=_a.onEnd,changeableProps=__rest(_a,["easing","onStart","onProgress","onEnd"]),_b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),timeline=_b[0],setTimeline=_b[1],initialChangeablePropsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(changeableProps),onStart=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.z)(onStartProp),onProgress=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.z)(onProgressProp),onEnd=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.z)(onEndProp);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(_anton_bobrov_vevet_init__WEBPACK_IMPORTED_MODULE_2__.vevet){var instance=new _anton_bobrov_vevet_init__WEBPACK_IMPORTED_MODULE_3__.T(__assign(__assign({},initialChangeablePropsRef.current),{easing}));return setTimeline(instance),onStart&&instance.addCallback("start",onStart),onProgress&&instance.addCallback("progress",onProgress),onEnd&&instance.addCallback("end",onEnd),function(){return instance.destroy()}}}),[easing,onEnd,onProgress,onStart]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){timeline&&timeline.changeProps(changeableProps)}),[timeline,(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_4__.Uf)(changeableProps)]);var play=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return null==timeline?void 0:timeline.play()}),[timeline]),reverse=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return null==timeline?void 0:timeline.reverse()}),[timeline]),pause=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return null==timeline?void 0:timeline.pause()}),[timeline]),reset=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return null==timeline?void 0:timeline.reset()}),[timeline]);return{timeline,play,reverse,pause,reset}}},"../vevet-init/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{vevet:()=>vevet});var vevet__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/Application/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},overrideProps="undefined"!=typeof window&&"vevetProps"in window?window.vevetProps:{},props=__assign(__assign({},{tablet:1199,phone:899,resizeDebounce:30,easing:[.25,.1,.25,1],shouldCheckWebpSupport:!0,widthDetection:"boundingRect"}),overrideProps),vevet="undefined"!=typeof window?new vevet__WEBPACK_IMPORTED_MODULE_0__.M(__assign(__assign({},props),{prefix:"v-"})):void 0},"./src/components/ExpandContent/ExpandContent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DefaultActive:()=>DefaultActive,WithCustomAnimation:()=>WithCustomAnimation,WithoutAlpha:()=>WithoutAlpha,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ExpandContent_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),usePropState=__webpack_require__("../react-hooks/lib/esm/hooks/usePropState.js"),useForwardedRef=__webpack_require__("../react-hooks/lib/esm/hooks/useForwardedRef.js"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),useTimeline=__webpack_require__("../react-vevet-hooks/lib/esm/hooks/useTimeline.js"),classnames=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),prefixedClassNames=__webpack_require__("./src/utils/prefixedClassNames.ts");function useStates({isActive:isActiveProp,duration:durationProp,isContentRendered:isContentRenderedProp}){const[isContentRendered,setIsContentRendered]=(0,react.useState)(isContentRenderedProp),[isFirstExpand,setIsFirstExpand]=(0,react.useState)(isActiveProp),duration=isFirstExpand?1:durationProp;(0,react.useEffect)((()=>{isActiveProp&&!isContentRendered&&setIsContentRendered(!0)}),[isActiveProp,isContentRendered]);return{isActive:function useDebouncedProp(prop,delay){var _a=(0,react.useState)(prop),state=_a[0],setState=_a[1];return(0,react.useEffect)((function(){var timeout=setTimeout((function(){return setState(prop)}),delay);return function(){return clearTimeout(timeout)}}),[prop,delay]),state}(isActiveProp,1),setIsFirstExpand,isContentRendered,duration}}var easing=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/easing.js"),clampScope=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/clampScope.js");const GLOBAL_SCOPE=[0,1],EXPAND_SCOPE=[0,.75],ALPHA_SCOPE=[.5,1];var jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ExpandContent=(0,react.forwardRef)((({className,style,isActive:isActiveProp=!1,duration:durationProp=500,hasAlpha=!0,isContentRendered:isContentRenderedProp=!0,onAnimationRender:onAnimationRenderProp,onAnimationEnd:onAnimationEndProp,children},forwardedRef)=>{const parentRef=(0,useForwardedRef.t)(forwardedRef),contentRef=(0,react.useRef)(null),onAnimationRender=(0,useEvent.z)(onAnimationRenderProp),onAnimationEnd=(0,useEvent.z)(onAnimationEndProp),{isActive,setIsFirstExpand,isContentRendered,duration}=useStates({isActive:isActiveProp,duration:durationProp,isContentRendered:isContentRenderedProp}),{play,reverse,timeline}=(0,useTimeline.m)({duration,onProgress:({p})=>{!function render({parentRef,contentRef,timeline,p,hasAlpha,onRender,onEnd}){const parent=parentRef.current,content=contentRef.current;if(!parent||!content||!timeline)return;const heightProgress=(0,easing.Ui)((0,clampScope.r)(p,hasAlpha?EXPAND_SCOPE:GLOBAL_SCOPE)),contentProgress=(0,easing.Ui)((0,clampScope.r)(p,hasAlpha?ALPHA_SCOPE:GLOBAL_SCOPE));parent.style.height=1===p?"auto":content.offsetHeight*heightProgress+"px",content.style.visibility=0===p?"hidden":"visible",hasAlpha&&(content.style.opacity=`${contentProgress}`),onRender?.({content,progress:contentProgress}),timeline.isReversed&&0===p?onEnd?.(!1):timeline.isReversed||1!==p||onEnd?.(!0)}({parentRef,contentRef,timeline,p,hasAlpha,onRender:onAnimationRender,onEnd:data=>{onAnimationEnd?.(data),setIsFirstExpand(!1)}})}});return(0,react.useEffect)((()=>{timeline&&(isActive?play():reverse())}),[isActive,play,reverse,timeline]),(0,jsx_runtime.jsx)("div",{ref:parentRef,className:classnames_default()(className,(0,prefixedClassNames.I)("expand-content")),style,children:(0,jsx_runtime.jsx)("div",{ref:contentRef,className:(0,prefixedClassNames.I)("expand-content__content"),children:isContentRendered&&children})})}));ExpandContent.displayName="ExpandContent";try{ExpandContent.displayName="ExpandContent",ExpandContent.__docgenInfo={description:"Accordion base",displayName:"ExpandContent",props:{isActive:{defaultValue:{value:"false"},description:"If active, the content will be shown",name:"isActive",required:!1,type:{name:"boolean"}},duration:{defaultValue:{value:"500"},description:"Animation duration (ms)",name:"duration",required:!1,type:{name:"number"}},hasAlpha:{defaultValue:{value:"true"},description:"Animate content with opacity",name:"hasAlpha",required:!1,type:{name:"boolean"}},isContentRendered:{defaultValue:{value:"true"},description:"Should render hidden content",name:"isContentRendered",required:!1,type:{name:"boolean"}},onAnimationRender:{defaultValue:null,description:"Event on animation end",name:"onAnimationRender",required:!1,type:{name:"TExpandContentRenderAnimation"}},onAnimationEnd:{defaultValue:null,description:"Event on animation end",name:"onAnimationEnd",required:!1,type:{name:"((isActive: boolean) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ExpandContent/index.tsx#ExpandContent"]={docgenInfo:ExpandContent.__docgenInfo,name:"ExpandContent",path:"src/components/ExpandContent/index.tsx#ExpandContent"})}catch(__react_docgen_typescript_loader_error){}const ExpandContent_stories={title:"Wrappers/ExpandContent",component:ExpandContent,tags:["autodocs"],decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:300},children:(0,jsx_runtime.jsx)(Story,{})})],args:{style:{backgroundColor:"#ccc"},children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat numquam quia corporis sed, nesciunt aut at expedita sunt. Voluptates quos est adipisci exercitationem nihil nisi impedit labore itaque. Ex!"}),(0,jsx_runtime.jsx)("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat numquam quia corporis sed, nesciunt aut at expedita sunt. Voluptates quos est adipisci exercitationem nihil nisi impedit labore itaque. Ex!"})]})}},Template=({isActive:isActiveProp,...props})=>{const[isActive,setIsActive]=(0,usePropState.W)(isActiveProp);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ExpandContent,{...props,isActive}),(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setIsActive((val=>!val)),children:isActive?"Shrink":"Expand"})]})},Default=Template.bind({});Default.args={};const DefaultActive=Template.bind({});DefaultActive.args={isActive:!0};const WithoutAlpha=Template.bind({});WithoutAlpha.args={hasAlpha:!1};const WithCustomAnimation=Template.bind({});WithCustomAnimation.args={onAnimationRender:({content,progress})=>{const scale=.9+.1*progress,y=1-progress;content.style.transform=`scale(${scale}) translateY(${y}rem)`}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  isActive: isActiveProp,\n  ...props\n}) => {\n  const [isActive, setIsActive] = usePropState(isActiveProp);\n  return <>\r\n      <ExpandContent {...props} isActive={isActive} />\r\n\r\n      <button type=\"button\" onClick={() => setIsActive(val => !val)}>\r\n        {isActive ? 'Shrink' : 'Expand'}\r\n      </button>\r\n    </>;\n}",...Default.parameters?.docs?.source}}},DefaultActive.parameters={...DefaultActive.parameters,docs:{...DefaultActive.parameters?.docs,source:{originalSource:"({\n  isActive: isActiveProp,\n  ...props\n}) => {\n  const [isActive, setIsActive] = usePropState(isActiveProp);\n  return <>\r\n      <ExpandContent {...props} isActive={isActive} />\r\n\r\n      <button type=\"button\" onClick={() => setIsActive(val => !val)}>\r\n        {isActive ? 'Shrink' : 'Expand'}\r\n      </button>\r\n    </>;\n}",...DefaultActive.parameters?.docs?.source}}},WithoutAlpha.parameters={...WithoutAlpha.parameters,docs:{...WithoutAlpha.parameters?.docs,source:{originalSource:"({\n  isActive: isActiveProp,\n  ...props\n}) => {\n  const [isActive, setIsActive] = usePropState(isActiveProp);\n  return <>\r\n      <ExpandContent {...props} isActive={isActive} />\r\n\r\n      <button type=\"button\" onClick={() => setIsActive(val => !val)}>\r\n        {isActive ? 'Shrink' : 'Expand'}\r\n      </button>\r\n    </>;\n}",...WithoutAlpha.parameters?.docs?.source}}},WithCustomAnimation.parameters={...WithCustomAnimation.parameters,docs:{...WithCustomAnimation.parameters?.docs,source:{originalSource:"({\n  isActive: isActiveProp,\n  ...props\n}) => {\n  const [isActive, setIsActive] = usePropState(isActiveProp);\n  return <>\r\n      <ExpandContent {...props} isActive={isActive} />\r\n\r\n      <button type=\"button\" onClick={() => setIsActive(val => !val)}>\r\n        {isActive ? 'Shrink' : 'Expand'}\r\n      </button>\r\n    </>;\n}",...WithCustomAnimation.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DefaultActive","WithoutAlpha","WithCustomAnimation"]},"../../common/temp/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>dequal});var has=Object.prototype.hasOwnProperty;function find(iter,tar,key){for(key of iter.keys())if(dequal(key,tar))return key}function dequal(foo,bar){var ctor,len,tmp;if(foo===bar)return!0;if(foo&&bar&&(ctor=foo.constructor)===bar.constructor){if(ctor===Date)return foo.getTime()===bar.getTime();if(ctor===RegExp)return foo.toString()===bar.toString();if(ctor===Array){if((len=foo.length)===bar.length)for(;len--&&dequal(foo[len],bar[len]););return-1===len}if(ctor===Set){if(foo.size!==bar.size)return!1;for(len of foo){if((tmp=len)&&"object"==typeof tmp&&!(tmp=find(bar,tmp)))return!1;if(!bar.has(tmp))return!1}return!0}if(ctor===Map){if(foo.size!==bar.size)return!1;for(len of foo){if((tmp=len[0])&&"object"==typeof tmp&&!(tmp=find(bar,tmp)))return!1;if(!dequal(len[1],bar.get(tmp)))return!1}return!0}if(ctor===ArrayBuffer)foo=new Uint8Array(foo),bar=new Uint8Array(bar);else if(ctor===DataView){if((len=foo.byteLength)===bar.byteLength)for(;len--&&foo.getInt8(len)===bar.getInt8(len););return-1===len}if(ArrayBuffer.isView(foo)){if((len=foo.byteLength)===bar.byteLength)for(;len--&&foo[len]===bar[len];);return-1===len}if(!ctor||"object"==typeof foo){for(ctor in len=0,foo){if(has.call(foo,ctor)&&++len&&!has.call(bar,ctor))return!1;if(!(ctor in bar)||!dequal(foo[ctor],bar[ctor]))return!1}return Object.keys(bar).length===len}}return foo!=foo&&bar!=bar}},"../../common/temp/node_modules/.pnpm/use-deep-compare-effect@1.8.1_react@18.2.0/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Uf:()=>useDeepCompareMemoize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),dequal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs");function useDeepCompareMemoize(value){var ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value),signalRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);return(0,dequal__WEBPACK_IMPORTED_MODULE_1__.J)(value,ref.current)||(ref.current=value,signalRef.current+=1),react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return ref.current}),[signalRef.current])}}}]);