/*! For license information please see components-FadeContent-FadeContent-stories.3849e4ea.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[147],{"./src/utils/prefixedClassName.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function prefixedClassName(className){return`rkc-${className}`}__webpack_require__.d(__webpack_exports__,{e:()=>prefixedClassName})},"./src/utils/prefixedClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>prefixedClasNames});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/utils/types/isString.js"),_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/prefixedClassName.ts");function prefixedClasNames(...classNames){return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNames.map((value=>(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.H)(value)?(0,_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__.e)(value):"")))}},"../react-hooks/lib/esm/hooks/useEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},useEvent=function(callback){var callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return null===(_a=callbackRef.current)||void 0===_a?void 0:_a.call.apply(_a,__spreadArray([callbackRef],args,!1))}),[])}},"../react-hooks/lib/esm/hooks/useForwardedRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>useForwardedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useForwardedRef(forwardedRef){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,(function(){return ref.current})),ref}},"../react-hooks/lib/esm/hooks/usePrevious.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>usePrevious});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function usePrevious(value,initialValue){var previousRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialValue);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){previousRef.current=value}),[value]),previousRef.current}},"../react-hooks/lib/esm/hooks/usePropState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>usePropState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function usePropState(prop){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prop),state=_a[0],setState=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setState(prop)}),[prop]),[state,setState]}},"../react-hooks/lib/esm/utils/data/times.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function times(callback,count){for(var index=0,list=[];index<count;)list.push(callback(index,count)),index+=1;return list}__webpack_require__.d(__webpack_exports__,{D:()=>times})},"../react-hooks/lib/esm/utils/types/isString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isString(value){return"string"==typeof value}__webpack_require__.d(__webpack_exports__,{H:()=>isString})},"./src/components/FadeContent/FadeContent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FadeContent_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),usePropState=__webpack_require__("../react-hooks/lib/esm/hooks/usePropState.js"),times=__webpack_require__("../react-hooks/lib/esm/utils/data/times.js"),useForwardedRef=__webpack_require__("../react-hooks/lib/esm/hooks/useForwardedRef.js"),usePrevious=__webpack_require__("../react-hooks/lib/esm/hooks/usePrevious.js"),classnames=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),prefixedClassNames=__webpack_require__("./src/utils/prefixedClassNames.ts"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),Timeline=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/components/Timeline/index.js"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const FadeContentItem=(0,react.forwardRef)((({className,children,duration,state:stateProp,onShow:onShowProp,onShowProgress:onShowProgressProp,onShown:onShownProp,onHide:onHideProp,onHidden:onHiddenProp},forwardedRef)=>{const ref=(0,useForwardedRef.t)(forwardedRef),onShow=(0,useEvent.z)(onShowProp),onShowProgress=(0,useEvent.z)(onShowProgressProp),onShown=(0,useEvent.z)(onShownProp),onHide=(0,useEvent.z)(onHideProp),onHidden=(0,useEvent.z)(onHiddenProp),render=(0,useEvent.z)(((state,p)=>{"show"===state&&(ref.current.style.opacity=`${p}`),"hide"===state&&(ref.current.style.opacity=""+(1-p))})),[initialState]=(0,react.useState)(stateProp);return(0,react.useEffect)((()=>{if(initialState===stateProp)return;if("hide"!==stateProp&&"show"!==stateProp)return;const element=ref.current;"show"===stateProp?onShow():"hide"===stateProp&&onHide();const timeline=new Timeline.T({duration});return timeline.addCallback("progress",(({p,e})=>{render(stateProp,e),"show"===stateProp&&onShowProgress(element,p),"show"===stateProp&&1===p?onShown():"hide"===stateProp&&1===p&&onHidden()})),timeline.play(),()=>timeline.destroy()}),[initialState,stateProp,ref,duration,onShow,onShowProgress,onShown,onHide,onHidden,render]),(0,jsx_runtime.jsx)("div",{ref,className,style:{opacity:"active"===initialState?1:0},children})}));FadeContentItem.displayName="FadeContentItem";try{FadeContentItem.displayName="FadeContentItem",FadeContentItem.__docgenInfo={description:"",displayName:"FadeContentItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},duration:{defaultValue:null,description:"Animation duration",name:"duration",required:!0,type:{name:"number"}},state:{defaultValue:null,description:"Content state",name:"state",required:!0,type:{name:"enum",value:[{value:'"active"'},{value:'"unactive"'},{value:'"hide"'},{value:'"show"'}]}},onShow:{defaultValue:null,description:"Callback when content is to be shown",name:"onShow",required:!0,type:{name:"() => void"}},onShowProgress:{defaultValue:null,description:"Callback when content is being shown",name:"onShowProgress",required:!0,type:{name:"(element: HTMLDivElement, progress: number) => void"}},onShown:{defaultValue:null,description:"Callback when content is fully shown",name:"onShown",required:!0,type:{name:"() => void"}},onHide:{defaultValue:null,description:"Callback when content is to be hidden",name:"onHide",required:!0,type:{name:"() => void"}},onHidden:{defaultValue:null,description:"Callback when content is fully hidden",name:"onHidden",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FadeContent/Item/index.tsx#FadeContentItem"]={docgenInfo:FadeContentItem.__docgenInfo,name:"FadeContentItem",path:"src/components/FadeContent/Item/index.tsx#FadeContentItem"})}catch(__react_docgen_typescript_loader_error){}const FadeContent=(0,react.forwardRef)((({className,style,content,activeKey,duration=600,hasFocus=!0},forwardedRef)=>{const ref=(0,useForwardedRef.t)(forwardedRef),prevActiveKey=(0,usePrevious.D)(activeKey,activeKey),[showKey,setShowKey]=(0,react.useState)(void 0),[hideKey,setHideKey]=(0,react.useState)(void 0),[currentKey,setCurrentKey]=(0,react.useState)(activeKey);(0,react.useEffect)((()=>{activeKey!==prevActiveKey&&setHideKey(prevActiveKey)}),[activeKey,prevActiveKey]);const parentHeight=function useParentHeight(ref){const currentHeightRef=(0,react.useRef)(0);return{save:(0,useEvent.z)((()=>{const parent=ref.current;parent&&(currentHeightRef.current=parent.getBoundingClientRect().height,parent.style.height=`${currentHeightRef.current}px`)})),reset:(0,useEvent.z)((()=>{const parent=ref.current;parent&&(currentHeightRef.current=0,parent.style.height="")})),interpolate:(0,useEvent.z)(((targetHeight,progress)=>{const parent=ref.current;if(!parent)return;const startHeight=currentHeightRef.current,height=startHeight+(targetHeight-startHeight)*progress;parent.style.height=`${height}px`}))}}(ref);return(0,jsx_runtime.jsx)("div",{ref,className:classnames_default()((0,prefixedClassNames.I)("fade-content"),className),style,tabIndex:0,children:content.map((({key,children})=>{const state=(key=>key===hideKey?"hide":key===showKey?"show":key===currentKey?"active":"unactive")(key);return(0,jsx_runtime.jsx)(FadeContentItem,{className:classnames_default()((0,prefixedClassNames.I)("fade-content__item"),(0,prefixedClassNames.I)(`fade-content__item_${state}`)),duration:duration/2,state,onShow:()=>hasFocus&&ref.current?.focus({preventScroll:!0}),onShowProgress:(element,progress)=>parentHeight.interpolate(element.getBoundingClientRect().height,progress),onShown:()=>{setHideKey(void 0),setShowKey(void 0),parentHeight.reset()},onHide:()=>parentHeight.save(),onHidden:()=>{setHideKey(void 0),setShowKey(activeKey),setCurrentKey(activeKey)},children:"unactive"!==state&&children},key)}))})}));FadeContent.displayName="FadeContent";try{FadeContent.displayName="FadeContent",FadeContent.__docgenInfo={description:"FadeContent component for displaying content with fade-in and fade-out transitions.\n\nThis component is ideal for creating animated tabs, providing a smooth transition.",displayName:"FadeContent",props:{activeKey:{defaultValue:null,description:"Active content key",name:"activeKey",required:!0,type:{name:"TKey"}},content:{defaultValue:null,description:"Content items",name:"content",required:!0,type:{name:"TFadeContent[]"}},duration:{defaultValue:{value:"600"},description:"Animation duration",name:"duration",required:!1,type:{name:"number"}},hasFocus:{defaultValue:{value:"true"},description:"Set focus on parent when active element is changed",name:"hasFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FadeContent/index.tsx#FadeContent"]={docgenInfo:FadeContent.__docgenInfo,name:"FadeContent",path:"src/components/FadeContent/index.tsx#FadeContent"})}catch(__react_docgen_typescript_loader_error){}const FadeContent_stories={title:"Wrappers/FadeContent",component:FadeContent,tags:["autodocs"],args:{style:{backgroundColor:"#ccc"}},argTypes:{content:{table:{disable:!0}}}},Default=(({activeKey:activeKeyProp,content,...props})=>{const[activeKey,setActiveKey]=(0,usePropState.W)(activeKeyProp);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("ul",{children:content.map((({key})=>(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setActiveKey(key),children:`Activate content #${key} ${activeKey===key?" / active":""}`})},key)))}),(0,jsx_runtime.jsx)(FadeContent,{...props,activeKey,content})]})}).bind({});Default.args={activeKey:1,content:[{key:0,children:(0,times.D)((index=>(0,jsx_runtime.jsx)("div",{children:"Content 0"},index)),5)},{key:1,children:(0,times.D)((index=>(0,jsx_runtime.jsx)("div",{children:"Content 1"},index)),10)},{key:2,children:(0,times.D)((index=>(0,jsx_runtime.jsx)("div",{children:"Content 2"},index)),15)}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  activeKey: activeKeyProp,\n  content,\n  ...props\n}) => {\n  const [activeKey, setActiveKey] = usePropState(activeKeyProp);\n  return <>\r\n      <ul>\r\n        {content.map(({\n        key\n      }) => <li key={key}>\r\n            <button type=\"button\" onClick={() => setActiveKey(key)}>\r\n              {`Activate content #${key} ${activeKey === key ? ' / active' : ''}`}\r\n            </button>\r\n          </li>)}\r\n      </ul>\r\n\r\n      <FadeContent {...props} activeKey={activeKey} content={content} />\r\n    </>;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/base/Component/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>Component});var _Module__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/base/Module/index.js");class Component extends _Module__WEBPACK_IMPORTED_MODULE_0__.Y{addPlugin(plugin){void 0===this._plugins&&(this._plugins=[]),this._plugins.push(plugin),plugin.component=this,plugin.init()}_destroyPlugins(){var _a;null===(_a=this._plugins)||void 0===_a||_a.forEach((plugin=>plugin.destroy()))}_destroy(){super._destroy(),this._destroyPlugins()}}},"../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/base/Module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Module});var listeners=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/listeners.js"),getApp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");class MutableProps{constructor(initProps,_onMutate=(()=>{}),_name="Responsive Props"){this._onMutate=_onMutate,this._name=_name,this._responsiveRules=[],this._refProps=Object.assign({},initProps),this._props=Object.assign({},initProps),this._activeBreakpoints=[]}get props(){return this._props}addResponsiveProps(rules){this._responsiveRules.push(rules),this._responseProps(),this._viewportCallback||(this._viewportCallback=(0,getApp.M)().viewport.callbacks.add("width",this._responseProps.bind(this),{name:this._name}))}_responseProps(){const app=(0,getApp.M)(),{viewport}=app;let newProps=!1;const statProp=Object.assign({},this._refProps),prevActiveBreakpointsString=[...this._activeBreakpoints].join("_");this._activeBreakpoints=[],this._responsiveRules.forEach((({settings,breakpoint})=>{"number"==typeof breakpoint?viewport.width<=breakpoint&&(this._activeBreakpoints.push(breakpoint),newProps=Object.assign(Object.assign({},statProp),settings)):"string"==typeof breakpoint&&(("viewport_desktop"===breakpoint&&viewport.isDesktop||"viewport_tablet"===breakpoint&&viewport.isTablet||"viewport_phone"===breakpoint&&viewport.isPhone)&&(this._activeBreakpoints.push(breakpoint),newProps=Object.assign(Object.assign({},newProps||statProp),settings)),("device_phone"===breakpoint&&app.isPhone||"device_tablet"===breakpoint&&app.isTablet||"device_mobile"===breakpoint&&app.isMobile)&&(this._activeBreakpoints.push(breakpoint),newProps=Object.assign(Object.assign({},newProps||statProp),settings)))}));const isPropsChanged=this._activeBreakpoints.join("_")!==prevActiveBreakpointsString;this._props=newProps?Object.assign(Object.assign({},this._props),newProps):Object.assign(Object.assign({},this._props),this._refProps),isPropsChanged&&this._onMutate()}changeProps(props){this._props=Object.assign(Object.assign({},this._props),props),this._refProps=Object.assign(Object.assign({},this._refProps),props),this._onMutate()}destroy(){this._viewportCallback&&this._viewportCallback.remove()}}var Callbacks=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/base/Callbacks/index.js");class Module{_getDefaultProps(){return{}}get props(){return this._mutableProps.props}get callbacks(){return this._callbacks}get name(){return this.constructor.name}get prefix(){return""}get isInitialized(){return this._isInitialized}get isDestroyed(){return this._isDestroyed}constructor(initialProps,canInit=!0){if(this._isInitialized=!1,this._isDestroyed=!1,!(0,getApp.M)())throw new Error("Vevet.Application does not exist yet");this._callbacks=new Callbacks.Y,this._listeners=[],this._destroyableActions=[],this._classNamesToRemove=[];const props=Object.assign(Object.assign({},this._getDefaultProps()),initialProps||{});this._mutableProps=new MutableProps(props,(()=>this._onPropsMutate()),this.name),canInit&&this.init()}addResponsiveProps(rules){if(this.isInitialized)throw new Error("Responsive properties cannot be added after `init` is called");this._mutableProps.addResponsiveProps(rules)}changeProps(props){this.isDestroyed||(this._mutableProps.changeProps(props),this._callbacks.tbt("propsChange",void 0))}_onPropsMutate(){this._callbacks.tbt("propsMutate",void 0)}init(){this.isInitialized||(this._isInitialized=!0,this._init())}_init(){}addDestroyableAction(action){this._destroyableActions.push(action)}addViewportCallback(target,action,data={}){const callback=(0,getApp.M)().viewport.callbacks.add(target,action,Object.assign(Object.assign({},data),{name:this.constructor.name}));this.addDestroyableAction((()=>callback.remove()))}addCallback(target,action,settings={}){return this.callbacks.add(target,action,settings)}addEventListener(el,target,callback,options){const listener=(0,listeners.O)(el,target,callback,options);return this._listeners.push(listener),Object.assign(Object.assign({},listener),{remove:()=>(this._listeners=this._listeners.filter((item=>item.id!==listener.id)),listener.remove())})}className(...classNames){return classNames.map((value=>`${this.prefix}${value}`)).join(" ")}toggleClassName(element,className,isActive){const isAlreadyExists=element.classList.contains(className);element.classList.toggle(className,isActive),isAlreadyExists||this._classNamesToRemove.push({element,className})}destroy(){this.isDestroyed||this._destroy()}_destroy(){this._callbacks.tbt("destroy",void 0),this._callbacks.destroy(),this._mutableProps.destroy(),this._destroyableActions.forEach((action=>action())),this._listeners.forEach((listener=>listener.remove())),this._classNamesToRemove.forEach((({element,className})=>element.classList.remove(className))),this._isDestroyed=!0}}},"../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/components/Timeline/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>Timeline});var _utils_math__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/clamp.js"),_utils_math__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/easing.js"),_utils_internal_getApp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js"),_base_Component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/base/Component/index.js");class Timeline extends _base_Component__WEBPACK_IMPORTED_MODULE_0__.w{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{easing:(0,_utils_internal_getApp__WEBPACK_IMPORTED_MODULE_1__.M)().props.easing,isDestroyedOnEnd:!1,duration:1e3})}get p(){return this._p}set p(val){this._p=val,this._handleProgressUpdate()}get e(){return this._e}get isPlaying(){return void 0!==this._raf}get isReversed(){return this._isReversed}get isPaused(){return this._isPaused}get duration(){return Math.max(this.props.duration,1)}constructor(initialProps,canInit=!0){super(initialProps,!1),this._p=0,this._e=0,this._raf=void 0,this._rafTime=0,this._isReversed=!1,this._isPaused=!1,canInit&&this.init()}play(){this.isDestroyed||1===this.p||(this._isReversed=!1,this._isPaused=!1,this.isPlaying||(this._rafTime=Date.now(),this._animate()))}reverse(){this.isDestroyed||0===this.p||(this._isReversed=!0,this._isPaused=!1,this.isPlaying||(this._rafTime=Date.now(),this._animate()))}pause(){this.isDestroyed||(this._isPaused=!0,this._raf&&window.cancelAnimationFrame(this._raf),this._raf=void 0)}reset(){this.isDestroyed||(this.pause(),this.p=0)}_animate(){if(this.isPaused)return;const{isReversed}=this,currentTime=Date.now(),frameDiff=Math.abs(this._rafTime-currentTime);this._rafTime=currentTime;const progressIterator=frameDiff/this.duration/(isReversed?-1:1),progressTarget=(0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.u)(this.p+progressIterator,[0,1]);if(this.p=progressTarget,1===progressTarget&&!isReversed||0===progressTarget&&isReversed)return this._isReversed=!1,this._isPaused=!1,void(this._raf=void 0);this._raf=window.requestAnimationFrame(this._animate.bind(this))}_handleProgressUpdate(){this._e=(0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.Ui)(this._p,this.props.easing),this.callbacks.tbt("progress",{p:this._p,e:this._e}),0!==this.p?1===this.p&&(this.callbacks.tbt("end",void 0),this.props.isDestroyedOnEnd&&this.destroy()):this.callbacks.tbt("start",void 0)}_destroy(){this.pause(),super._destroy()}}},"../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/clamp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function clamp(value,scope=[0,1]){return value<scope[0]?scope[0]:value>scope[1]?scope[1]:value}__webpack_require__.d(__webpack_exports__,{u:()=>clamp})},"../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/easing.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function easingByBezier(progress,bezier){const[x1,y1,x2,y2]=bezier;if(x1===y1&&x2===y2)return progress;const val=[];for(let i=0;i<11;++i)val[i]=bezierCalc(.1*i,x1,x2);return 0===progress?0:1===progress?1:bezierCalc(function bezierX(bezier,progress,val){const x1=bezier[0],x2=bezier[2];let start=0,current=1;for(;10!==current&&val[current]<=progress;++current)start+=.1;--current;const dist=(progress-val[current])/(val[current+1]-val[current]),guessForT=start+.1*dist,initialSlope=bezierSlope(guessForT,x1,x2);if(initialSlope>=.001)return function bezierNewtonRaphsonIterate(progress,guessForT,x1,x2){for(let i=0;i<4;++i){const currentSlope=bezierSlope(guessForT,x1,x2);if(0===currentSlope)return guessForT;guessForT-=(bezierCalc(guessForT,x1,x2)-progress)/currentSlope}return guessForT}(progress,guessForT,x1,x2);if(0===initialSlope)return guessForT;return function bezierBinarySubdivide(progress,a,b,x1,x2){let currentX,currentT,i=0;do{currentT=a+(b-a)/2,currentX=bezierCalc(currentT,x1,x2)-progress,currentX>0?b=currentT:a=currentT}while(Math.abs(currentX)>1e-7&&++i<10);return currentT}(progress,start,start+.1,x1,x2)}(bezier,progress,val),y1,y2)}function bezierCalc(progress,x1,x2){return((bezierA(x1,x2)*progress+bezierB(x1,x2))*progress+bezierC(x1))*progress}function bezierA(x1,x2){return 1-3*x2+3*x1}function bezierB(x1,x2){return 3*x2-6*x1}function bezierC(x1){return 3*x1}function bezierSlope(progress,x1,x2){return 3*bezierA(x1,x2)*progress*progress+2*bezierB(x1,x2)*progress+bezierC(x1)}__webpack_require__.d(__webpack_exports__,{Ui:()=>easing_easing});var getApp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");const easing_easing=(progress,easingType)=>{var _a,_b;return void 0===easingType&&(easingType=null!==(_b=null===(_a=(0,getApp.M)())||void 0===_a?void 0:_a.props.easing)&&void 0!==_b&&_b),function easing(progress,easingType=!1){return Array.isArray(easingType)?easingByBezier(progress,easingType):"function"==typeof easingType?easingType(progress):progress}(progress,easingType)}}}]);