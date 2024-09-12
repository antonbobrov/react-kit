"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[147],{"./src/utils/prefixedClassName.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function prefixedClassName(className){return`rkc-${className}`}__webpack_require__.d(__webpack_exports__,{e:()=>prefixedClassName})},"./src/utils/prefixedClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>prefixedClasNames});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/utils/types/isString.js"),_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/prefixedClassName.ts");function prefixedClasNames(...classNames){return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNames.map((value=>(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.H)(value)?(0,_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__.e)(value):"")))}},"../react-hooks/lib/esm/hooks/useEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},useEvent=function(callback){var callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return null===(_a=callbackRef.current)||void 0===_a?void 0:_a.call.apply(_a,__spreadArray([callbackRef],args,!1))}),[])}},"../react-hooks/lib/esm/hooks/useForwardedRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useForwardedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useForwardedRef(forwardedRef){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,(function(){return ref.current})),ref}},"../react-hooks/lib/esm/hooks/usePrevious.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>usePrevious});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function usePrevious(value,initialValue){var previousRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialValue);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){previousRef.current=value}),[value]),previousRef.current}},"../react-hooks/lib/esm/hooks/usePropState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>usePropState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function usePropState(prop){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prop),state=_a[0],setState=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setState(prop)}),[prop]),[state,setState]}},"../react-hooks/lib/esm/utils/types/isString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isString(value){return"string"==typeof value}__webpack_require__.d(__webpack_exports__,{H:()=>isString})},"../vevet-init/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{vevet:()=>vevet});var vevet__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.1_typescript@4.8.2/node_modules/vevet/lib/esm/Application/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},overrideProps="undefined"!=typeof window&&"vevetProps"in window?window.vevetProps:{},props=__assign(__assign({},{tablet:1199,phone:899,resizeDebounce:30,easing:[.25,.1,.25,1],shouldCheckWebpSupport:!0,widthDetection:"boundingRect"}),overrideProps),vevet="undefined"!=typeof window?new vevet__WEBPACK_IMPORTED_MODULE_0__.M(__assign(__assign({},props),{prefix:"v-"})):void 0},"./src/components/FadeContent/FadeContent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FadeContent_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),usePropState=__webpack_require__("../react-hooks/lib/esm/hooks/usePropState.js"),times=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.1_typescript@4.8.2/node_modules/vevet/lib/esm/utils/common/times.js"),useForwardedRef=__webpack_require__("../react-hooks/lib/esm/hooks/useForwardedRef.js"),usePrevious=__webpack_require__("../react-hooks/lib/esm/hooks/usePrevious.js"),classnames=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),prefixedClassNames=__webpack_require__("./src/utils/prefixedClassNames.ts"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),esm=__webpack_require__("../vevet-init/lib/esm/index.js"),Timeline=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.1_typescript@4.8.2/node_modules/vevet/lib/esm/components/Timeline/index.js"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const FadeContentItem=(0,react.forwardRef)((({className,children,duration,state:stateProp,onShow:onShowProp,onShowProgress:onShowProgressProp,onShown:onShownProp,onHide:onHideProp,onHidden:onHiddenProp},forwardedRef)=>{const ref=(0,useForwardedRef.t)(forwardedRef),onShow=(0,useEvent.z)(onShowProp),onShowProgress=(0,useEvent.z)(onShowProgressProp),onShown=(0,useEvent.z)(onShownProp),onHide=(0,useEvent.z)(onHideProp),onHidden=(0,useEvent.z)(onHiddenProp),render=(0,useEvent.z)(((state,p)=>{"show"===state&&(ref.current.style.opacity=`${p}`),"hide"===state&&(ref.current.style.opacity=""+(1-p))})),[initialState]=(0,react.useState)(stateProp);return(0,react.useEffect)((()=>{if(!esm.vevet)return;if(initialState===stateProp)return;if("hide"!==stateProp&&"show"!==stateProp)return;const element=ref.current;"show"===stateProp?onShow():"hide"===stateProp&&onHide();const timeline=new Timeline.T({duration});return timeline.addCallback("progress",(({p,e})=>{render(stateProp,e),"show"===stateProp&&onShowProgress(element,p),"show"===stateProp&&1===p?onShown():"hide"===stateProp&&1===p&&onHidden()})),timeline.play(),()=>timeline.destroy()}),[initialState,stateProp,ref,duration,onShow,onShowProgress,onShown,onHide,onHidden,render]),(0,jsx_runtime.jsx)("div",{ref,className,style:{opacity:"active"===initialState?1:0},children})}));FadeContentItem.displayName="FadeContentItem";try{FadeContentItem.displayName="FadeContentItem",FadeContentItem.__docgenInfo={description:"",displayName:"FadeContentItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},duration:{defaultValue:null,description:"Animation duration",name:"duration",required:!0,type:{name:"number"}},state:{defaultValue:null,description:"Content state",name:"state",required:!0,type:{name:"enum",value:[{value:'"active"'},{value:'"unactive"'},{value:'"hide"'},{value:'"show"'}]}},onShow:{defaultValue:null,description:"Callback when content is to be shown",name:"onShow",required:!0,type:{name:"() => void"}},onShowProgress:{defaultValue:null,description:"Callback when content is being shown",name:"onShowProgress",required:!0,type:{name:"(element: HTMLDivElement, progress: number) => void"}},onShown:{defaultValue:null,description:"Callback when content is fully shown",name:"onShown",required:!0,type:{name:"() => void"}},onHide:{defaultValue:null,description:"Callback when content is to be hidden",name:"onHide",required:!0,type:{name:"() => void"}},onHidden:{defaultValue:null,description:"Callback when content is fully hidden",name:"onHidden",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FadeContent/Item/index.tsx#FadeContentItem"]={docgenInfo:FadeContentItem.__docgenInfo,name:"FadeContentItem",path:"src/components/FadeContent/Item/index.tsx#FadeContentItem"})}catch(__react_docgen_typescript_loader_error){}const FadeContent=(0,react.forwardRef)((({className,style,content,activeKey,duration=600,hasFocus=!0},forwardedRef)=>{const ref=(0,useForwardedRef.t)(forwardedRef),prevActiveKey=(0,usePrevious.D)(activeKey,activeKey),[showKey,setShowKey]=(0,react.useState)(void 0),[hideKey,setHideKey]=(0,react.useState)(void 0),[currentKey,setCurrentKey]=(0,react.useState)(activeKey);(0,react.useEffect)((()=>{activeKey!==prevActiveKey&&setHideKey(prevActiveKey)}),[activeKey,prevActiveKey]);const parentHeight=function useParentHeight(ref){const currentHeightRef=(0,react.useRef)(0);return{save:(0,useEvent.z)((()=>{const parent=ref.current;parent&&(currentHeightRef.current=parent.getBoundingClientRect().height,parent.style.height=`${currentHeightRef.current}px`)})),reset:(0,useEvent.z)((()=>{const parent=ref.current;parent&&(currentHeightRef.current=0,parent.style.height="")})),interpolate:(0,useEvent.z)(((targetHeight,progress)=>{const parent=ref.current;if(!parent)return;const startHeight=currentHeightRef.current,height=startHeight+(targetHeight-startHeight)*progress;parent.style.height=`${height}px`}))}}(ref);return(0,jsx_runtime.jsx)("div",{ref,className:classnames_default()((0,prefixedClassNames.I)("fade-content"),className),style,tabIndex:0,children:content.map((({key,children})=>{const state=(key=>key===hideKey?"hide":key===showKey?"show":key===currentKey?"active":"unactive")(key);return(0,jsx_runtime.jsx)(FadeContentItem,{className:classnames_default()((0,prefixedClassNames.I)("fade-content__item"),(0,prefixedClassNames.I)(`fade-content__item_${state}`)),duration:duration/2,state,onShow:()=>hasFocus&&ref.current?.focus({preventScroll:!0}),onShowProgress:(element,progress)=>parentHeight.interpolate(element.getBoundingClientRect().height,progress),onShown:()=>{setHideKey(void 0),setShowKey(void 0),parentHeight.reset()},onHide:()=>parentHeight.save(),onHidden:()=>{setHideKey(void 0),setShowKey(activeKey),setCurrentKey(activeKey)},children:"unactive"!==state&&children},key)}))})}));FadeContent.displayName="FadeContent";try{FadeContent.displayName="FadeContent",FadeContent.__docgenInfo={description:"",displayName:"FadeContent",props:{activeKey:{defaultValue:null,description:"Active content key",name:"activeKey",required:!0,type:{name:"TKey"}},content:{defaultValue:null,description:"Content items",name:"content",required:!0,type:{name:"TFadeContent[]"}},duration:{defaultValue:{value:"600"},description:"Animation duration",name:"duration",required:!1,type:{name:"number"}},hasFocus:{defaultValue:{value:"true"},description:"Set focus on parent when active element is changed",name:"hasFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FadeContent/index.tsx#FadeContent"]={docgenInfo:FadeContent.__docgenInfo,name:"FadeContent",path:"src/components/FadeContent/index.tsx#FadeContent"})}catch(__react_docgen_typescript_loader_error){}const FadeContent_stories={title:"Wrappers/FadeContent",component:FadeContent,tags:["autodocs"],args:{style:{backgroundColor:"#ccc"}}},Default=(({activeKey:activeKeyProp,content,...props})=>{const[activeKey,setActiveKey]=(0,usePropState.W)(activeKeyProp);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("ul",{children:content.map((({key})=>(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setActiveKey(key),children:`Activate content #${key} ${activeKey===key?" / active":""}`})},key)))}),(0,jsx_runtime.jsx)(FadeContent,{...props,activeKey,content})]})}).bind({});Default.args={activeKey:1,content:[{key:0,children:(0,times.D)((index=>(0,jsx_runtime.jsx)("div",{children:"Content 0"},index)),5)},{key:1,children:(0,times.D)((index=>(0,jsx_runtime.jsx)("div",{children:"Content 1"},index)),10)},{key:2,children:(0,times.D)((index=>(0,jsx_runtime.jsx)("div",{children:"Content 2"},index)),15)}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  activeKey: activeKeyProp,\n  content,\n  ...props\n}) => {\n  const [activeKey, setActiveKey] = usePropState(activeKeyProp);\n  return <>\r\n      <ul>\r\n        {content.map(({\n        key\n      }) => <li key={key}>\r\n            <button type=\"button\" onClick={() => setActiveKey(key)}>\r\n              {`Activate content #${key} ${activeKey === key ? ' / active' : ''}`}\r\n            </button>\r\n          </li>)}\r\n      </ul>\r\n\r\n      <FadeContent {...props} activeKey={activeKey} content={content} />\r\n    </>;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../common/temp/node_modules/.pnpm/vevet@3.19.1_typescript@4.8.2/node_modules/vevet/lib/esm/utils/common/times.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function times(callback,count){let index=0;const list=[];for(;index<count;)list.push(callback(index,count)),index+=1;return list}__webpack_require__.d(__webpack_exports__,{D:()=>times})}}]);