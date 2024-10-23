/*! For license information please see components-LazyVideo-LazyVideo-stories.fb858d79.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[586],{"../../common/temp/node_modules/.pnpm/@anton.bobrov+p-cancelable@4.0.1/node_modules/@anton.bobrov/p-cancelable/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>PCancelable});class CancelError extends Error{constructor(reason){super(reason||"Promise was canceled"),this.name="CancelError"}get isCanceled(){return!0}}const promiseState=Object.freeze({pending:Symbol("pending"),canceled:Symbol("canceled"),resolved:Symbol("resolved"),rejected:Symbol("rejected")});class PCancelable{static fn(userFunction){return(...arguments_)=>new PCancelable(((resolve,reject,onCancel)=>{arguments_.push(onCancel),userFunction(...arguments_).then(resolve,reject)}))}#cancelHandlers=[];#rejectOnCancel=!0;#state=promiseState.pending;#promise;#reject;constructor(executor){this.#promise=new Promise(((resolve,reject)=>{this.#reject=reject;const onCancel=handler=>{if(this.#state!==promiseState.pending)throw new Error(`The \`onCancel\` handler was attached after the promise ${this.#state.description}.`);this.#cancelHandlers.push(handler)};Object.defineProperties(onCancel,{shouldReject:{get:()=>this.#rejectOnCancel,set:boolean=>{this.#rejectOnCancel=boolean}}}),executor((value=>{this.#state===promiseState.canceled&&onCancel.shouldReject||(resolve(value),this.#setState(promiseState.resolved))}),(error=>{this.#state===promiseState.canceled&&onCancel.shouldReject||(reject(error),this.#setState(promiseState.rejected))}),onCancel)}))}then(onFulfilled,onRejected){return this.#promise.then(onFulfilled,onRejected)}catch(onRejected){return this.#promise.catch(onRejected)}finally(onFinally){return this.#promise.finally(onFinally)}cancel(reason){if(this.#state===promiseState.pending){if(this.#setState(promiseState.canceled),this.#cancelHandlers.length>0)try{for(const handler of this.#cancelHandlers)handler()}catch(error){return void this.#reject(error)}this.#rejectOnCancel&&this.#reject(new CancelError(reason))}}get isCanceled(){return this.#state===promiseState.canceled}#setState(state){this.#state===promiseState.pending&&(this.#state=state)}}Object.setPrototypeOf(PCancelable.prototype,Promise.prototype)},"./src/components/BaseVideo/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>BaseVideo});var useForwardedRef=__webpack_require__("../react-hooks/lib/esm/hooks/useForwardedRef.js"),react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p_cancelable=__webpack_require__("../../common/temp/node_modules/.pnpm/@anton.bobrov+p-cancelable@4.0.1/node_modules/@anton.bobrov/p-cancelable/index.js"),normalizedTimeoutCallback=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/common/normalizedTimeoutCallback.js");var jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const BaseVideo=(0,react.forwardRef)((({src,children,autoPlay,isPlaying,onLoadedMetadata,...videoProps},forwardedRef)=>{const ref=(0,useForwardedRef.t)(forwardedRef),[isLoaded,setIsLoaded]=(0,react.useState)(!1),prevIsPlayingRef=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{const isSamePlaying=Boolean(prevIsPlayingRef.current)===Boolean(isPlaying);if(!isLoaded||!ref.current||isSamePlaying)return;if(prevIsPlayingRef.current=Boolean(isPlaying),!isPlaying)return void ref.current.pause();const promise=(video=>{let timeout;const play=()=>new p_cancelable.Z((resolve=>{video.play().then(resolve).catch((()=>playWithTimeout(resolve)))})),playWithTimeout=callback=>{timeout?.clear(),timeout=(0,normalizedTimeoutCallback.h)((()=>{play()?.then(callback).catch((()=>{}))}),30)};return play()})(ref.current);return promise?.then((()=>{})).catch((()=>{})),()=>promise?.cancel()}),[isLoaded,isPlaying,ref]),(0,jsx_runtime.jsx)("video",{ref,disablePictureInPicture:!0,playsInline:!0,preload:"auto",autoPlay,...videoProps,src:void 0,onLoadedMetadata:evt=>{onLoadedMetadata?.(evt),setTimeout((()=>setIsLoaded(!0)),0)},children:children||(0,jsx_runtime.jsx)("source",{src,type:"video/mp4"})})}));BaseVideo.displayName="BaseVideo";try{BaseVideo.displayName="BaseVideo",BaseVideo.__docgenInfo={description:"BaseVideo component for rendering and controlling video playback.",displayName:"BaseVideo",props:{isPlaying:{defaultValue:null,description:"Used to play/pause the video. Won't work if `autoPlay` is true",name:"isPlaying",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseVideo/index.tsx#BaseVideo"]={docgenInfo:BaseVideo.__docgenInfo,name:"BaseVideo",path:"src/components/BaseVideo/index.tsx#BaseVideo"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/prefixedClassName.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function prefixedClassName(className){return`rkc-${className}`}__webpack_require__.d(__webpack_exports__,{e:()=>prefixedClassName})},"./src/utils/prefixedClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>prefixedClasNames});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/utils/types/isString.js"),_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/prefixedClassName.ts");function prefixedClasNames(...classNames){return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNames.map((value=>(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.H)(value)?(0,_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__.e)(value):"")))}},"../react-hooks/lib/esm/hooks/useEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},useEvent=function(callback){var callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return null===(_a=callbackRef.current)||void 0===_a?void 0:_a.call.apply(_a,__spreadArray([callbackRef],args,!1))}),[])}},"../react-hooks/lib/esm/hooks/useForwardedRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>useForwardedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useForwardedRef(forwardedRef){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,(function(){return ref.current})),ref}},"../react-hooks/lib/esm/hooks/useInViewport.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>useInViewport});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),usePropState=__webpack_require__("../react-hooks/lib/esm/hooks/usePropState.js"),getHookEventElement=__webpack_require__("../react-hooks/lib/esm/utils/internal/getHookEventElement.js"),instances=[];var __assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function useInViewport(_a){var ref=_a.ref,onInProp=_a.onIn,onOutProp=_a.onOut,destroyOnIn=_a.destroyOnIn,isDisabledProp=_a.isDisabled,props=__rest(_a,["ref","onIn","onOut","destroyOnIn","isDisabled"]),onIn=(0,useEvent.z)(onInProp),onOut=(0,useEvent.z)(onOutProp),_b=(0,react.useState)(),state=_b[0],setState=_b[1],_c=(0,usePropState.W)(isDisabledProp),isDisabled=_c[0],setIsDisabled=_c[1];return(0,react.useEffect)((function(){"in"===state&&destroyOnIn&&setIsDisabled(!0)}),[destroyOnIn,setIsDisabled,state]),function useIntersectionObserver(_a){var ref=_a.ref,onEntryProp=_a.onEntry,_b=_a.root,root=void 0===_b?null:_b,_c=_a.threshold,threshold=void 0===_c?0:_c,_d=_a.rootMargin,rootMargin=void 0===_d?"0px 0px 0px 0px":_d,isDisabled=_a.isDisabled,id=(0,react.useId)(),onEntry=(0,useEvent.z)(onEntryProp),getObserverInstance=(0,react.useCallback)((function(){return instances.find((function(data){return data.root===root&&data.threshold===threshold&&data.rootMargin===rootMargin}))}),[root,rootMargin,threshold]);(0,react.useEffect)((function(){if(!isDisabled){var element=(0,getHookEventElement.I)(ref);if(element){var instance=getObserverInstance();return instance||(instance={observer:new IntersectionObserver((function(entries){return entries.forEach((function(entry){null==instance||instance.elements.forEach((function(item){item.element===entry.target&&item.onEntry(entry)}))}))}),{root,threshold,rootMargin}),root,threshold,rootMargin,elements:[]},instances.push(instance)),instance.elements.push({id,element,onEntry}),instance.observer.observe(element),function(){instance&&(instance.elements=instance.elements.filter((function(item){return item.id!==id})),instance.elements.find((function(item){return item.element===element}))||instance.observer.unobserve(element),0===instance.elements.length&&(instances.splice(instances.indexOf(instance),1),instance.observer.disconnect()))}}}}),[getObserverInstance,id,isDisabled,onEntry,ref,root,rootMargin,threshold])}(__assign(__assign({},props),{ref,onEntry:function(entry){entry.isIntersecting?(setState("in"),null==onIn||onIn()):(setState("out"),null==onOut||onOut())},isDisabled})),{state}}},"../react-hooks/lib/esm/hooks/useLazyReady.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>useLazyReady});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_useEvent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),_useInViewport__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react-hooks/lib/esm/hooks/useInViewport.js");function useLazyReady(_a){var ref=_a.ref,onInProp=_a.onIn,isDisabled=_a.isDisabled,onIn=(0,_useEvent__WEBPACK_IMPORTED_MODULE_1__.z)(onInProp),_b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isReady=_b[0],setIsReady=_b[1];return(0,_useInViewport__WEBPACK_IMPORTED_MODULE_2__.N)({ref,onIn:function(){null==onIn||onIn(),setIsReady(!0)},rootMargin:"0% 0% 175% 0%",destroyOnIn:!0,isDisabled}),{isReady}}},"../react-hooks/lib/esm/hooks/usePropState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>usePropState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function usePropState(prop){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prop),state=_a[0],setState=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setState(prop)}),[prop]),[state,setState]}},"../react-hooks/lib/esm/utils/internal/getHookEventElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getHookEventElement(ref){return ref&&"current"in ref?ref.current:ref}__webpack_require__.d(__webpack_exports__,{I:()=>getHookEventElement})},"../react-hooks/lib/esm/utils/types/isString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isString(value){return"string"==typeof value}__webpack_require__.d(__webpack_exports__,{H:()=>isString})},"./src/components/LazyVideo/LazyVideo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LazyVideo_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useLazyReady=__webpack_require__("../react-hooks/lib/esm/hooks/useLazyReady.js"),BaseVideo=__webpack_require__("./src/components/BaseVideo/index.tsx"),prefixedClassNames=__webpack_require__("./src/utils/prefixedClassNames.ts"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const LazyVideo=(0,react.forwardRef)((({className,style,position="cover",onLoadedMetadata,loading="lazy",hasAlpha=!0,...videoProps},ref)=>{const[videoRef,setVideoRef]=(0,react.useState)(null);(0,react.useImperativeHandle)(ref,(()=>videoRef));const wrapperRef=(0,react.useRef)(null),[canLoad,setCanLoad]=(0,react.useState)(!1),[isLoaded,setIsLoaded]=(0,react.useState)(!1),isLazy="lazy"===loading;(0,useLazyReady.t)({ref:wrapperRef,onIn:()=>setCanLoad(!0),isDisabled:!isLazy}),(0,react.useEffect)((()=>{isLazy||setCanLoad(!0)}),[isLazy]);const classNames=(0,prefixedClassNames.I)("lazy-video",position,hasAlpha&&"has-alpha",isLoaded&&"is-loaded");return(0,jsx_runtime.jsx)("div",{ref:wrapperRef,className:classnames_default()(className,classNames),style,children:canLoad&&(0,jsx_runtime.jsx)(BaseVideo.H,{ref:setVideoRef,...videoProps,className:isLazy?"js-preload-ignore":void 0,onLoadedMetadata:event=>{onLoadedMetadata?.(event),setIsLoaded(!0)}})})}));LazyVideo.displayName="LazyVideo";try{LazyVideo.displayName="LazyVideo",LazyVideo.__docgenInfo={description:"LazyVideo component for rendering videos with lazy loading functionality.\n\nThis component optimizes video loading by only loading videos when they enter\nthe viewport, improving performance and reducing bandwidth usage.",displayName:"LazyVideo",props:{position:{defaultValue:{value:"cover"},description:"Positionate the video",name:"position",required:!1,type:{name:'false | "cover" | "contain" | "fullabs"'}},loading:{defaultValue:{value:"lazy"},description:"Loading type",name:"loading",required:!1,type:{name:"enum",value:[{value:'"eager"'},{value:'"lazy"'}]}},hasAlpha:{defaultValue:{value:"true"},description:"Use opacity animation",name:"hasAlpha",required:!1,type:{name:"boolean"}},isPlaying:{defaultValue:null,description:"Used to play/pause the video. Won't work if `autoPlay` is true",name:"isPlaying",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LazyVideo/index.tsx#LazyVideo"]={docgenInfo:LazyVideo.__docgenInfo,name:"LazyVideo",path:"src/components/LazyVideo/index.tsx#LazyVideo"})}catch(__react_docgen_typescript_loader_error){}const LazyVideo_stories={title:"Video/LazyVideo",component:LazyVideo,tags:["autodocs"],decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{position:"relative",width:200,height:200},children:(0,jsx_runtime.jsx)(Story,{})})],args:{autoPlay:!0,controls:!0,muted:!0}},Default={args:{src:"./video/video.mp4"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: './video/video.mp4'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/common/normalizedTimeoutCallback.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function normalizedTimeoutCallback(callback,delay){let timeout;return 0===delay?callback():timeout=setTimeout((()=>callback()),delay),{clear:()=>{timeout&&clearTimeout(timeout)}}}__webpack_require__.d(__webpack_exports__,{h:()=>normalizedTimeoutCallback})}}]);