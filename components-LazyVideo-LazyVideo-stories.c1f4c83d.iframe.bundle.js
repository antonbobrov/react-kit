/*! For license information please see components-LazyVideo-LazyVideo-stories.c1f4c83d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[586],{"./src/components/BaseVideo/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>BaseVideo});var useForwardedRef=__webpack_require__("../react-hooks/lib/esm/hooks/useForwardedRef.js"),react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),es=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/index.js"),p_cancelable=__webpack_require__("../../common/temp/node_modules/.pnpm/p-cancelable@3.0.0/node_modules/p-cancelable/index.js");var jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const BaseVideo=(0,react.forwardRef)((({src,children,autoPlay,onLoadedMetadata,...videoProps},forwardedRef)=>{const ref=(0,useForwardedRef.t)(forwardedRef),[isLoaded,setIsLoaded]=(0,react.useState)(!1),isAutoPlay=isLoaded&&autoPlay;return(0,react.useEffect)((()=>{if(!isAutoPlay||!ref.current)return;const promise=(video=>{let timeout;const play=()=>new p_cancelable.Z((resolve=>{video.play().then(resolve).catch((()=>playWithTimeout(resolve)))})),playWithTimeout=callback=>{timeout?.clear(),timeout=es.P6.common.timeoutCallback((()=>{play()?.then(callback).catch((()=>{}))}),30)};return play()})(ref.current);return promise?.then((()=>{})).catch((()=>{})),()=>promise?.cancel()}),[isAutoPlay,ref]),(0,jsx_runtime.jsx)("video",{ref,disablePictureInPicture:!0,playsInline:!0,preload:"auto",...videoProps,src:void 0,onLoadedMetadata:evt=>{onLoadedMetadata?.(evt),setTimeout((()=>setIsLoaded(!0)),0)},children:children||(0,jsx_runtime.jsx)("source",{src,type:"video/mp4"})})}));BaseVideo.displayName="BaseVideo";try{BaseVideo.displayName="BaseVideo",BaseVideo.__docgenInfo={description:"Base Video component",displayName:"BaseVideo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseVideo/index.tsx#BaseVideo"]={docgenInfo:BaseVideo.__docgenInfo,name:"BaseVideo",path:"src/components/BaseVideo/index.tsx#BaseVideo"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/prefixedClassName.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function prefixedClassName(className){return`rkc-${className}`}__webpack_require__.d(__webpack_exports__,{e:()=>prefixedClassName})},"./src/utils/prefixedClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>prefixedClasNames});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/utils/types/isString.js"),_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/prefixedClassName.ts");function prefixedClasNames(...classNames){return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNames.map((value=>(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.H)(value)?(0,_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__.e)(value):"")))}},"../react-hooks/lib/esm/hooks/useForwardedRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>useForwardedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useForwardedRef(forwardedRef){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,(function(){return ref.current})),ref}},"../react-hooks/lib/esm/utils/types/isString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isString(value){return"string"==typeof value}__webpack_require__.d(__webpack_exports__,{H:()=>isString})},"../vevet-init/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_j:()=>vevet});var vevet__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/app/Application.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},overrideProps="undefined"!=typeof window&&"vevetProps"in window?window.vevetProps:{},props=__assign(__assign({},{sayHi:!0,tablet:1199,phone:899,viewportResizeTimeout:30,easing:[.25,.1,.25,1],webpSupport:!0}),overrideProps),vevet="undefined"!=typeof window?new vevet__WEBPACK_IMPORTED_MODULE_0__.M(__assign(__assign({},props),{prefix:"v-"})):void 0},"./src/components/LazyVideo/LazyVideo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LazyVideo_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),esm=__webpack_require__("../vevet-init/lib/esm/index.js");var BaseVideo=__webpack_require__("./src/components/BaseVideo/index.tsx"),prefixedClassNames=__webpack_require__("./src/utils/prefixedClassNames.ts"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const LazyVideo=(0,react.forwardRef)((({className,style,position="cover",onLoadedMetadata,...videoProps},ref)=>{const[videoRef,setVideoRef]=(0,react.useState)(null);(0,react.useImperativeHandle)(ref,(()=>videoRef));const[canLoad,setCanLoad]=(0,react.useState)(!1),[isLoaded,setIsLoaded]=(0,react.useState)(!1);!function useOnPageLoad(effect,deps){(0,react.useEffect)((function(){var unsubscribe,promise=esm._j.onPageLoaded();return promise.then((function(){unsubscribe=effect()})).catch((function(){})),function(){promise.cancel(),null==unsubscribe||unsubscribe()}}),deps)}((()=>setCanLoad(!0)),[]);const classNames=(0,prefixedClassNames.I)("lazy-video",position,isLoaded&&"is-loaded");return canLoad?(0,jsx_runtime.jsx)(BaseVideo.H,{ref:setVideoRef,...videoProps,className:classnames_default()(className,classNames),style,onLoadedMetadata:event=>{onLoadedMetadata?.(event),setIsLoaded(!0)}}):null}));LazyVideo.displayName="LazyVideo";try{LazyVideo.displayName="LazyVideo",LazyVideo.__docgenInfo={description:"Lazy video component",displayName:"LazyVideo",props:{position:{defaultValue:{value:"cover"},description:"Positionate the video",name:"position",required:!1,type:{name:'false | "cover" | "contain" | "fullabs"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LazyVideo/index.tsx#LazyVideo"]={docgenInfo:LazyVideo.__docgenInfo,name:"LazyVideo",path:"src/components/LazyVideo/index.tsx#LazyVideo"})}catch(__react_docgen_typescript_loader_error){}const LazyVideo_stories={title:"Video/LazyVideo",component:LazyVideo,tags:["autodocs"],decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{position:"relative",width:200,height:200},children:(0,jsx_runtime.jsx)(Story,{})})],args:{autoPlay:!0,controls:!0,muted:!0}},Default={args:{src:"./video/video.mp4"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: './video/video.mp4'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P6:()=>utils});var common_namespaceObject={};__webpack_require__.r(common_namespaceObject),__webpack_require__.d(common_namespaceObject,{id:()=>id.Z,mergeWithoutArrays:()=>mergeWithoutArrays.Z,timeoutCallback:()=>timeoutCallback.Z});var listeners_namespaceObject={};__webpack_require__.r(listeners_namespaceObject),__webpack_require__.d(listeners_namespaceObject,{intersectionObserverSupported:()=>intersectionObserverSupported.Z,onScroll:()=>onScroll.Z});var math_namespaceObject={};__webpack_require__.r(math_namespaceObject),__webpack_require__.d(math_namespaceObject,{clamp:()=>clamp.Z,clampScope:()=>clampScoped,easing:()=>math_easing,inScope:()=>inScope,lerp:()=>lerp.Z,scoped:()=>scoped.Z,spreadScope:()=>spreadScope,wrap:()=>wrap});var scroll_namespaceObject={};__webpack_require__.r(scroll_namespaceObject),__webpack_require__.d(scroll_namespaceObject,{getValues:()=>getScrollValues,to:()=>scrollTo,toElement:()=>scrollToElement});var image_namespaceObject={};__webpack_require__.r(image_namespaceObject),__webpack_require__.d(image_namespaceObject,{load:()=>loadImage,pathsToProps:()=>imagePathsToProps,sizesToSrcSet:()=>imageSizesToSrcSet});var id=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/common/id.js"),mergeWithoutArrays=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/common/mergeWithoutArrays.js"),timeoutCallback=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/common/timeoutCallback.js"),onScroll=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/listeners/onScroll.js"),intersectionObserverSupported=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/listeners/intersectionObserverSupported.js"),clamp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/math/clamp.js"),lerp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/math/lerp.js"),scoped=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/math/scoped.js");function spreadScope(quantity,shift){const timelines=[],duration=1/(quantity-shift*(quantity-1));for(let index=0;index<quantity;index+=1){const start=duration*(1-shift)*index,end=start+duration;timelines.push([start,end])}return timelines}function inScope(val,scopeValue=[0,1]){return val>=scopeValue[0]&&val<=scopeValue[1]}function clampScoped(val,scope=[0,1],clampScope=[0,1]){return(0,clamp.Z)((0,scoped.Z)(val,scope),clampScope)}function wrap(min,max,value){const range=max-min;return function conditionalReturn(value,func){return value||0===value?func(value):func}(value,(val=>(range+(val-min)%range)%range+min))}const math_easing=__webpack_require__("../../common/temp/node_modules/.pnpm/easing-progress@0.0.4/node_modules/easing-progress/dist/es/index.js").Z;function getScrollValues(selector=window){if(selector){return{scrollTop:selector instanceof Window?selector.pageYOffset:selector.scrollTop,scrollLeft:selector instanceof Window?selector.pageXOffset:selector.scrollLeft}}}var Timeline=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/components/timeline/Timeline.js");function scrollTo({container=window,top=0,left=0,duration=250}){return new Promise(((resolve,reject)=>{const startValues=getScrollValues(container);if(startValues){const timeline=new Timeline.T({duration});return timeline.addCallback("progress",(data=>{container&&container.scrollTo({top:startValues.scrollTop+(top-startValues.scrollTop)*data.easing,left:startValues.scrollLeft+(left-startValues.scrollLeft)*data.easing,behavior:"auto"})})),timeline.addCallback("end",(()=>{resolve()})),void timeline.play()}reject()}))}var selectOne=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/selectOne.js");function scrollToElement({container=window,el,top=0,left=0,duration=250}){return new Promise(((resolve,reject)=>{const startValues=getScrollValues(container);if(startValues){const element=(0,selectOne.z)(el);if(element){const bounding=element.getBoundingClientRect(),toTop=(0,clamp.Z)(bounding.top+startValues.scrollTop-top,[0,1/0]),toLeft=(0,clamp.Z)(bounding.left+startValues.scrollLeft-left,[0,1/0]);scrollTo({container,top:toTop,left:toLeft,duration}).then((()=>{resolve()})).catch((()=>{reject()}))}}else reject()}))}var p_cancelable=__webpack_require__("../../common/temp/node_modules/.pnpm/p-cancelable@3.0.0/node_modules/p-cancelable/index.js");const cachedImages=[];function loadImage(source,props){const loadProps=Object.assign(Object.assign({},{crossOrigin:null,useCache:!1}),props),imageSrc="string"==typeof source?source:source.src;return new p_cancelable.Z(((resolve,reject)=>{const cachedImage=loadProps.useCache&&cachedImages.find((img=>img.src===imageSrc));if(cachedImage)resolve(cachedImage.image);else{if("string"==typeof source){const img=new Image;return img.crossOrigin=loadProps.crossOrigin,img.onload=()=>{loadProps.useCache&&cachedImages.push({src:imageSrc,image:img}),resolve(img)},img.onerror=()=>{reject()},void(img.src=source)}source instanceof HTMLImageElement&&(source.complete?resolve(source):(source.addEventListener("load",(()=>{loadProps.useCache&&cachedImages.push({src:imageSrc,image:source}),resolve(source)})),source.addEventListener("error",(()=>{reject()}))))}}))}function imageSizesToSrcSet(sizes){return Object.keys(sizes).map((key=>{const value=sizes[key];if(value)return`${value} ${key}w`})).filter((item=>!!item)).join(", ")}function imagePathsToProps(data){const app=window.vevetApp;let src=data.original;data.thumb&&(src=data.thumb),app&&app.supportsWebp&&data.thumbWebp&&(src=data.thumbWebp);let srcSet="";return app&&app.supportsWebp&&"sizesWebp"in data&&data.sizesWebp?srcSet=imageSizesToSrcSet(data.sizesWebp):"sizes"in data&&data.sizes&&(srcSet=imageSizesToSrcSet(data.sizes)),{src,srcSet}}const utils={common:common_namespaceObject,listeners:listeners_namespaceObject,math:math_namespaceObject,scroll:scroll_namespaceObject,image:image_namespaceObject}},"../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/listeners/intersectionObserverSupported.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function intersectionObserverSupported(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}__webpack_require__.d(__webpack_exports__,{Z:()=>intersectionObserverSupported})}}]);