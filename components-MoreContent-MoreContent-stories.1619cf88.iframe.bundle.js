"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[318],{"./src/utils/prefixedClassName.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function prefixedClassName(className){return`rkc-${className}`}__webpack_require__.d(__webpack_exports__,{e:()=>prefixedClassName})},"./src/utils/prefixedClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>prefixedClasNames});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/utils/types/isString.js"),_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/prefixedClassName.ts");function prefixedClasNames(...classNames){return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNames.map((value=>(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.H)(value)?(0,_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__.e)(value):"")))}},"../react-hooks/lib/esm/hooks/useEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},useEvent=function(callback){var callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return null===(_a=callbackRef.current)||void 0===_a?void 0:_a.call.apply(_a,__spreadArray([callbackRef],args,!1))}),[])}},"../react-hooks/lib/esm/utils/data/times.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function times(callback,count){for(var index=0,list=[];index<count;)list.push(callback(index,count)),index+=1;return list}__webpack_require__.d(__webpack_exports__,{D:()=>times})},"../react-hooks/lib/esm/utils/internal/getHookEventElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getHookEventElement(ref){return ref&&"current"in ref?ref.current:ref}__webpack_require__.d(__webpack_exports__,{I:()=>getHookEventElement})},"../react-hooks/lib/esm/utils/types/isString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isString(value){return"string"==typeof value}__webpack_require__.d(__webpack_exports__,{H:()=>isString})},"../react-vevet-hooks/lib/esm/hooks/useTimeline.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>useTimeline});var _anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../common/temp/node_modules/.pnpm/use-deep-compare-effect@1.8.1_react@18.2.0/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),vevet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/components/Timeline/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function useTimeline(_a){var easing=_a.easing,onStartProp=_a.onStart,onProgressProp=_a.onProgress,onEndProp=_a.onEnd,changeableProps=__rest(_a,["easing","onStart","onProgress","onEnd"]),_b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),timeline=_b[0],setTimeline=_b[1],initialChangeablePropsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(changeableProps),onStart=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.z)(onStartProp),onProgress=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.z)(onProgressProp),onEnd=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.z)(onEndProp);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var instance=new vevet__WEBPACK_IMPORTED_MODULE_2__.T(__assign(__assign({},initialChangeablePropsRef.current),{easing}));return setTimeline(instance),onStart&&instance.addCallback("start",onStart),onProgress&&instance.addCallback("progress",onProgress),onEnd&&instance.addCallback("end",onEnd),function(){return instance.destroy()}}),[easing,onEnd,onProgress,onStart]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){timeline&&timeline.changeProps(changeableProps)}),[timeline,(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_3__.Uf)(changeableProps)]);var play=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return null==timeline?void 0:timeline.play()}),[timeline]),reverse=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return null==timeline?void 0:timeline.reverse()}),[timeline]),pause=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return null==timeline?void 0:timeline.pause()}),[timeline]),reset=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return null==timeline?void 0:timeline.reset()}),[timeline]);return{timeline,play,reverse,pause,reset}}},"./src/components/MoreContent/MoreContent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MoreContent_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),times=__webpack_require__("../react-hooks/lib/esm/utils/data/times.js"),classnames=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),prefixedClassNames=__webpack_require__("./src/utils/prefixedClassNames.ts"),getHookEventElement=__webpack_require__("../react-hooks/lib/esm/utils/internal/getHookEventElement.js"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js");function useOffsetHeight(ref){var _a=(0,react.useState)(0),offsetHeight=_a[0],setOffsetHeight=_a[1];return function useOnElementResize(ref,effectProp,settings){var _a,isDisabled=null==settings?void 0:settings.isDisabled,delay=null!==(_a=null==settings?void 0:settings.delay)&&void 0!==_a?_a:10,effect=(0,useEvent.z)(effectProp),timeoutRef=(0,react.useRef)(null);(0,react.useEffect)((function(){var element=(0,getHookEventElement.I)(ref);if(element&&!isDisabled){var destructor,resizeObserver=new ResizeObserver((function(){null==destructor||destructor(),timeoutRef.current&&clearTimeout(timeoutRef.current),timeoutRef.current=setTimeout((function(){destructor=effect()}),delay)}));return resizeObserver.observe(element),function(){resizeObserver.disconnect(),timeoutRef.current&&clearTimeout(timeoutRef.current),null==destructor||destructor()}}}),[delay,effect,isDisabled,ref])}(ref,(function(){var element=(0,getHookEventElement.I)(ref);element&&setOffsetHeight(element.offsetHeight)})),offsetHeight}var useTimeline=__webpack_require__("../react-vevet-hooks/lib/esm/hooks/useTimeline.js");var jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Component=({isActive,toggle})=>(0,jsx_runtime.jsx)("button",{type:"button",onClick:toggle,"aria-hidden":!0,children:isActive?"Show less":"Show More"});Component.displayName="Component";const Button_Button=(0,react.memo)(Component);try{Component.displayName="Component",Component.__docgenInfo={description:"",displayName:"Component",props:{isActive:{defaultValue:null,description:"The content is fully shown",name:"isActive",required:!0,type:{name:"boolean"}},toggle:{defaultValue:null,description:"Show/hide content",name:"toggle",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MoreContent/Button.tsx#Component"]={docgenInfo:Component.__docgenInfo,name:"Component",path:"src/components/MoreContent/Button.tsx#Component"})}catch(__react_docgen_typescript_loader_error){}try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{isActive:{defaultValue:null,description:"The content is fully shown",name:"isActive",required:!0,type:{name:"boolean"}},toggle:{defaultValue:null,description:"Show/hide content",name:"toggle",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MoreContent/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/MoreContent/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}const MoreContent=(0,react.forwardRef)((({className,style,children,renderButton:Button=Button_Button,duration=500,minHeight=120},forwardedRef)=>{const clipperRef=(0,react.useRef)(null),contentRef=(0,react.useRef)(null),{isActive,isEnabled,toggle}=function useWrapperMoreContent({clipperRef,contentRef,minHeight,duration}){const contentHeight=useOffsetHeight(contentRef),[isActive,setIsActive]=(0,react.useState)(!1),[isEnabled,setIsEnabled]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setIsEnabled(contentHeight>=minHeight)}),[contentHeight,minHeight]);const timeline=(0,useTimeline.m)({duration,onProgress:({p,e})=>{const clipper=clipperRef.current;if(!clipper)return;const difference=Math.max(contentHeight-minHeight,0),height=minHeight+difference*e;clipper.style.height=p<1?`${height}px`:"",clipper.style.maxHeight="initial"}});return(0,react.useEffect)((()=>{timeline&&(isActive?timeline.play():timeline.reverse())}),[isActive,timeline]),{toggle:(0,useEvent.z)((()=>setIsActive((val=>!val)))),isActive,isEnabled}}({clipperRef,contentRef,minHeight,duration});return(0,jsx_runtime.jsxs)("div",{ref:forwardedRef,className:classnames_default()((0,prefixedClassNames.I)("more-content"),className),style,children:[(0,jsx_runtime.jsx)("div",{ref:clipperRef,className:(0,prefixedClassNames.I)("more-content__clipper",isEnabled&&"more-content__clipper_enabled",isActive&&"more-content__clipper_active"),style:{maxHeight:`${minHeight}px`},children:(0,jsx_runtime.jsx)("div",{ref:contentRef,className:(0,prefixedClassNames.I)("more-content__content"),children})}),isEnabled&&(0,jsx_runtime.jsx)(Button,{isActive,toggle})]})}));MoreContent.displayName="MoreContent";try{MoreContent.displayName="MoreContent",MoreContent.__docgenInfo={description:"MoreContent component for revealing additional content on demand.\n\nThis component allows users to expand or collapse content sections, providing\na clean and organized way to present information. It supports features such\nas customizable triggers, animations, and limits on the amount of content displayed.",displayName:"MoreContent",props:{renderButton:{defaultValue:null,description:"Custom button renderer",name:"renderButton",required:!1,type:{name:"TMoreContentButtonRenderer"}},duration:{defaultValue:{value:"500"},description:"Animation duration",name:"duration",required:!1,type:{name:"number"}},minHeight:{defaultValue:{value:"120"},description:"Minimum height of the content",name:"minHeight",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MoreContent/index.tsx#MoreContent"]={docgenInfo:MoreContent.__docgenInfo,name:"MoreContent",path:"src/components/MoreContent/index.tsx#MoreContent"})}catch(__react_docgen_typescript_loader_error){}const MoreContent_stories={title:"Wrappers/MoreContent",component:MoreContent,tags:["autodocs"],argTypes:{style:{table:{disable:!0}},children:{table:{disable:!0}}},args:{style:{maxWidth:300},children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,times.D)((index=>(0,jsx_runtime.jsx)("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat numquam quia corporis sed, nesciunt aut at expedita sunt. Voluptates quos est adipisci exercitationem nihil nisi impedit labore itaque. Ex!"},index)),10)})}},Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/components/Timeline/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Timeline});var _utils_math__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/clamp.js"),_utils_math__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/easing.js"),_utils_internal_getApp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js"),_base_Component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/base/Component/index.js");class Timeline extends _base_Component__WEBPACK_IMPORTED_MODULE_0__.w{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{easing:(0,_utils_internal_getApp__WEBPACK_IMPORTED_MODULE_1__.M)().props.easing,isDestroyedOnEnd:!1,duration:1e3})}get p(){return this._p}set p(val){this._p=val,this._handleProgressUpdate()}get e(){return this._e}get isPlaying(){return void 0!==this._raf}get isReversed(){return this._isReversed}get isPaused(){return this._isPaused}get duration(){return Math.max(this.props.duration,1)}constructor(initialProps,canInit=!0){super(initialProps,!1),this._p=0,this._e=0,this._raf=void 0,this._rafTime=0,this._isReversed=!1,this._isPaused=!1,canInit&&this.init()}play(){this.isDestroyed||1===this.p||(this._isReversed=!1,this._isPaused=!1,this.isPlaying||(this._rafTime=Date.now(),this._animate()))}reverse(){this.isDestroyed||0===this.p||(this._isReversed=!0,this._isPaused=!1,this.isPlaying||(this._rafTime=Date.now(),this._animate()))}pause(){this.isDestroyed||(this._isPaused=!0,this._raf&&window.cancelAnimationFrame(this._raf),this._raf=void 0)}reset(){this.isDestroyed||(this.pause(),this.p=0)}_animate(){if(this.isPaused)return;const{isReversed}=this,currentTime=Date.now(),frameDiff=Math.abs(this._rafTime-currentTime);this._rafTime=currentTime;const progressIterator=frameDiff/this.duration/(isReversed?-1:1),progressTarget=(0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.u)(this.p+progressIterator,[0,1]);if(this.p=progressTarget,1===progressTarget&&!isReversed||0===progressTarget&&isReversed)return this._isReversed=!1,this._isPaused=!1,void(this._raf=void 0);this._raf=window.requestAnimationFrame(this._animate.bind(this))}_handleProgressUpdate(){this._e=(0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.Ui)(this._p,this.props.easing),this.callbacks.tbt("progress",{p:this._p,e:this._e}),0!==this.p?1===this.p&&(this.callbacks.tbt("end",void 0),this.props.isDestroyedOnEnd&&this.destroy()):this.callbacks.tbt("start",void 0)}_destroy(){this.pause(),super._destroy()}}},"../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/clamp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function clamp(value,scope=[0,1]){return value<scope[0]?scope[0]:value>scope[1]?scope[1]:value}__webpack_require__.d(__webpack_exports__,{u:()=>clamp})},"../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/easing.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function easingByBezier(progress,bezier){const[x1,y1,x2,y2]=bezier;if(x1===y1&&x2===y2)return progress;const val=[];for(let i=0;i<11;++i)val[i]=bezierCalc(.1*i,x1,x2);return 0===progress?0:1===progress?1:bezierCalc(function bezierX(bezier,progress,val){const x1=bezier[0],x2=bezier[2];let start=0,current=1;for(;10!==current&&val[current]<=progress;++current)start+=.1;--current;const dist=(progress-val[current])/(val[current+1]-val[current]),guessForT=start+.1*dist,initialSlope=bezierSlope(guessForT,x1,x2);if(initialSlope>=.001)return function bezierNewtonRaphsonIterate(progress,guessForT,x1,x2){for(let i=0;i<4;++i){const currentSlope=bezierSlope(guessForT,x1,x2);if(0===currentSlope)return guessForT;guessForT-=(bezierCalc(guessForT,x1,x2)-progress)/currentSlope}return guessForT}(progress,guessForT,x1,x2);if(0===initialSlope)return guessForT;return function bezierBinarySubdivide(progress,a,b,x1,x2){let currentX,currentT,i=0;do{currentT=a+(b-a)/2,currentX=bezierCalc(currentT,x1,x2)-progress,currentX>0?b=currentT:a=currentT}while(Math.abs(currentX)>1e-7&&++i<10);return currentT}(progress,start,start+.1,x1,x2)}(bezier,progress,val),y1,y2)}function bezierCalc(progress,x1,x2){return((bezierA(x1,x2)*progress+bezierB(x1,x2))*progress+bezierC(x1))*progress}function bezierA(x1,x2){return 1-3*x2+3*x1}function bezierB(x1,x2){return 3*x2-6*x1}function bezierC(x1){return 3*x1}function bezierSlope(progress,x1,x2){return 3*bezierA(x1,x2)*progress*progress+2*bezierB(x1,x2)*progress+bezierC(x1)}__webpack_require__.d(__webpack_exports__,{Ui:()=>easing_easing});var getApp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");const easing_easing=(progress,easingType)=>{var _a,_b;return void 0===easingType&&(easingType=null!==(_b=null===(_a=(0,getApp.M)())||void 0===_a?void 0:_a.props.easing)&&void 0!==_b&&_b),function easing(progress,easingType=!1){return Array.isArray(easingType)?easingByBezier(progress,easingType):"function"==typeof easingType?easingType(progress):progress}(progress,easingType)}}}]);