/*! For license information please see components-LazyImage-LazyImage-stories.75cfe8bb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[658],{"./src/components/BaseImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>BaseImage});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function imageSizesToSrcSet(sizes){return Object.keys(sizes).map((key=>{const value=sizes[key];if(value)return`${value} ${key}w`})).filter((item=>!!item)).join(", ")}function getSrcSet({srcSet,paths}){if(srcSet)return srcSet;if(!paths)return;const imagePaths=paths?function imagePathsToProps(data){const app="undefined"!=typeof window?window.vevetApp:void 0;let src=data.original;data.thumb&&(src=data.thumb),app&&app.isWebpSupported&&data.thumbWebp&&(src=data.thumbWebp);let srcSet="";return app&&app.isWebpSupported&&"sizesWebp"in data&&data.sizesWebp?srcSet=imageSizesToSrcSet(data.sizesWebp):"sizes"in data&&data.sizes&&(srcSet=imageSizesToSrcSet(data.sizes)),{src,srcSet}}(paths):void 0;return imagePaths?imagePaths.srcSet||imagePaths.src:void 0}var generatePlaceholderImage=__webpack_require__("./src/components/BaseImage/utils/generatePlaceholderImage.ts"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const BaseImage=(0,react.forwardRef)((({src:srcProp,paths,srcSet:srcSetProp,...props},ref)=>{const width=paths?.width??props.width,height=paths?.height??props.height,src=function getSrc({paths,src}){return paths?paths.thumb||paths.original:src}({src:srcProp,paths}),[srcSet,setSrcSet]=(0,react.useState)((0,generatePlaceholderImage.q)(width,height));(0,react.useEffect)((()=>{setSrcSet(getSrcSet({srcSet:srcSetProp,paths}))}),[paths,srcSetProp]);const alt=paths?.alt??props.alt??src;return(0,jsx_runtime.jsx)("img",{...props,ref,src,srcSet,width,height,alt})}));BaseImage.displayName="BaseImage";try{BaseImage.displayName="BaseImage",BaseImage.__docgenInfo={description:"Base image that supports adaptive paths",displayName:"BaseImage",props:{paths:{defaultValue:null,description:"Image paths",name:"paths",required:!1,type:{name:"IImagePaths | IImageAdaptivePaths"}},src:{defaultValue:null,description:"Image `src`",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"Alternate text",name:"alt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseImage/index.tsx#BaseImage"]={docgenInfo:BaseImage.__docgenInfo,name:"BaseImage",path:"src/components/BaseImage/index.tsx#BaseImage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BaseImage/utils/generatePlaceholderImage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>generatePlaceholderImage});var _anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../react-hooks/lib/esm/utils/types/isUndefined.js");const defaultPlaceholderImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAAAAAKVnuc8AAAACdFJOU/8A5bcwSgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAFFJREFUaEPtzTEBADAMBKG+f9PVwJLpMMDbgRJSQkpICSkhJaSElJASUkJKSAkpISWkhJSQElJCSkgJKSElpISUkBJSQkpICSkhJaSElJASsH3mMicR4O5sFAAAAABJRU5ErkJggg==";function generatePlaceholderImage(width,height){if((0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_0__.o)(width)&&(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_0__.o)(height))return defaultPlaceholderImage;return`data:image/svg+xml;base64,${btoa(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${height}" fill="transparent"/></svg>`)}`}},"./src/utils/prefixedClassName.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function prefixedClassName(className){return`rkc-${className}`}__webpack_require__.d(__webpack_exports__,{e:()=>prefixedClassName})},"./src/utils/prefixedClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>prefixedClasNames});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/utils/types/isString.js"),_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/prefixedClassName.ts");function prefixedClasNames(...classNames){return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNames.map((value=>(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.H)(value)?(0,_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__.e)(value):"")))}},"../react-hooks/lib/esm/hooks/useEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},useEvent=function(callback){var callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return null===(_a=callbackRef.current)||void 0===_a?void 0:_a.call.apply(_a,__spreadArray([callbackRef],args,!1))}),[])}},"../react-hooks/lib/esm/hooks/useForwardedRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>useForwardedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useForwardedRef(forwardedRef){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,(function(){return ref.current})),ref}},"../react-hooks/lib/esm/hooks/useOnInViewport.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>useOnInViewport});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),usePropState=__webpack_require__("../react-hooks/lib/esm/hooks/usePropState.js"),getHookEventElement=__webpack_require__("../react-hooks/lib/esm/utils/internal/getHookEventElement.js");var instances=[];function useIntersectionObserver(_a){var ref=_a.ref,onEntryProp=_a.onEntry,onFallbackProp=_a.onFallback,_b=_a.root,root=void 0===_b?null:_b,_c=_a.threshold,threshold=void 0===_c?0:_c,_d=_a.rootMargin,rootMargin=void 0===_d?"0px 0px 0px 0px":_d,isDisabled=_a.isDisabled,id=(0,react.useId)(),onEntry=(0,useEvent.z)(onEntryProp),onFallback=(0,useEvent.z)(onFallbackProp),getObserverInstance=(0,react.useCallback)((function(){return instances.find((function(data){return data.root===root&&data.threshold===threshold&&data.rootMargin===rootMargin}))}),[root,rootMargin,threshold]);(0,react.useEffect)((function(){if(!isDisabled)if(function isIntersectionObserverSupported(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}()){var element=(0,getHookEventElement.I)(ref);if(element){var instance=getObserverInstance();return instance||(instance={observer:new IntersectionObserver((function(entries){return entries.forEach((function(entry){null==instance||instance.elements.forEach((function(item){item.element===entry.target&&item.onEntry(entry)}))}))}),{root,threshold,rootMargin}),root,threshold,rootMargin,elements:[]},instances.push(instance)),instance.elements.push({id,element,onEntry}),instance.observer.observe(element),function(){instance&&(instance.elements=instance.elements.filter((function(item){return item.id!==id})),instance.elements.find((function(item){return item.element===element}))||instance.observer.unobserve(element),0===instance.elements.length&&(instances.splice(instances.indexOf(instance),1),instance.observer.disconnect()))}}}else null==onFallback||onFallback()}),[getObserverInstance,id,isDisabled,onEntry,onFallback,ref,root,rootMargin,threshold])}var __assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function useOnInViewport(_a){var ref=_a.ref,onInProp=_a.onIn,onOutProp=_a.onOut,onFallback=_a.onFallback,destroyOnIn=_a.destroyOnIn,isDisabledProp=_a.isDisabled,props=__rest(_a,["ref","onIn","onOut","onFallback","destroyOnIn","isDisabled"]),onIn=(0,useEvent.z)(onInProp),onOut=(0,useEvent.z)(onOutProp),_b=(0,react.useState)(),state=_b[0],setState=_b[1],_c=(0,usePropState.W)(isDisabledProp),isDisabled=_c[0],setIsDisabled=_c[1];return(0,react.useEffect)((function(){"in"===state&&destroyOnIn&&setIsDisabled(!0)}),[destroyOnIn,setIsDisabled,state]),useIntersectionObserver(__assign(__assign({},props),{ref,onFallback:function(){setState("in"),null==onFallback||onFallback()},onEntry:function(entry){entry.isIntersecting?(setState("in"),null==onIn||onIn()):(setState("out"),null==onOut||onOut())},isDisabled})),{state}}},"../react-hooks/lib/esm/hooks/useOnLazyIntersection.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>useOnLazyIntersection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_useEvent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),_useOnInViewport__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react-hooks/lib/esm/hooks/useOnInViewport.js");function useOnLazyIntersection(_a){var ref=_a.ref,onInProp=_a.onIn,isDisabled=_a.isDisabled,onIn=(0,_useEvent__WEBPACK_IMPORTED_MODULE_1__.z)(onInProp),_b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isIn=_b[0],setIsIn=_b[1];return(0,_useOnInViewport__WEBPACK_IMPORTED_MODULE_2__.S)({ref,onIn:function(){null==onIn||onIn(),setIsIn(!0)},onFallback:function(){null==onIn||onIn(),setIsIn(!0)},rootMargin:"0% 0% 175% 0%",destroyOnIn:!0,isDisabled}),{isIn}}},"../react-hooks/lib/esm/hooks/usePropState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>usePropState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function usePropState(prop){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prop),state=_a[0],setState=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setState(prop)}),[prop]),[state,setState]}},"../react-hooks/lib/esm/utils/internal/getHookEventElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getHookEventElement(ref){return ref&&"current"in ref?ref.current:ref}__webpack_require__.d(__webpack_exports__,{I:()=>getHookEventElement})},"../react-hooks/lib/esm/utils/types/isString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isString(value){return"string"==typeof value}__webpack_require__.d(__webpack_exports__,{H:()=>isString})},"../react-hooks/lib/esm/utils/types/isUndefined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isUndefined(value){return void 0===value}__webpack_require__.d(__webpack_exports__,{o:()=>isUndefined})},"./src/components/LazyImage/LazyImage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithAdaptivePaths:()=>WithAdaptivePaths,WithAlpha:()=>WithAlpha,WithEager:()=>WithEager,WithoutAlpha:()=>WithoutAlpha,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LazyImage_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),useForwardedRef=__webpack_require__("../react-hooks/lib/esm/hooks/useForwardedRef.js"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),useOnLazyIntersection=__webpack_require__("../react-hooks/lib/esm/hooks/useOnLazyIntersection.js"),classnames=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),generatePlaceholderImage=__webpack_require__("./src/components/BaseImage/utils/generatePlaceholderImage.ts"),prefixedClassNames=__webpack_require__("./src/utils/prefixedClassNames.ts"),BaseImage=__webpack_require__("./src/components/BaseImage/index.tsx"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const LazyImage=(0,react.forwardRef)((({className,style,position="cover",onLoad:onLoadProp,hasAlpha=!0,loading="lazy",paths,...tagProps},forwardedRef)=>{const ref=(0,useForwardedRef.t)(forwardedRef),[isLoaded,setIsLoaded]=(0,react.useState)(!1),[canLoad,setCanLoad]=(0,react.useState)(!1),onLoad=(0,useEvent.z)(onLoadProp),width=paths?.width??tagProps.width,height=paths?.height??tagProps.height,isLazy="lazy"===loading;(0,useOnLazyIntersection.o)({ref,onIn:()=>setCanLoad(!0),isDisabled:!isLazy}),(0,react.useEffect)((()=>{isLazy||setCanLoad(!0)}),[isLazy]);const classNames=(0,prefixedClassNames.I)("lazy-image","js-preload-ignore",hasAlpha&&"has-alpha",position,isLoaded&&"is-loaded");return(0,jsx_runtime.jsx)(BaseImage.Z,{ref,...tagProps,className:classnames_default()(classNames,className),style,loading:void 0,paths,srcSet:canLoad?void 0:(0,generatePlaceholderImage.q)(width,height),onLoad:event=>{canLoad&&(setIsLoaded(!0),onLoad?.(event.currentTarget))}})}));LazyImage.displayName="LazyImage";try{LazyImage.displayName="LazyImage",LazyImage.__docgenInfo={description:"Lazy image component",displayName:"LazyImage",props:{position:{defaultValue:{value:"cover"},description:"Image position",name:"position",required:!1,type:{name:'false | "cover" | "contain" | "fullabs"'}},onLoad:{defaultValue:null,description:"The event occurs when the image is loaded",name:"onLoad",required:!1,type:{name:"((image: HTMLImageElement) => void)"}},hasAlpha:{defaultValue:{value:"true"},description:"Use opacity animation",name:"hasAlpha",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"lazy"},description:"Loading type",name:"loading",required:!1,type:{name:"enum",value:[{value:'"eager"'},{value:'"lazy"'}]}},src:{defaultValue:null,description:"Image `src`",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"Alternate text",name:"alt",required:!1,type:{name:"string"}},paths:{defaultValue:null,description:"Image paths",name:"paths",required:!1,type:{name:"IImagePaths | IImageAdaptivePaths"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LazyImage/index.tsx#LazyImage"]={docgenInfo:LazyImage.__docgenInfo,name:"LazyImage",path:"src/components/LazyImage/index.tsx#LazyImage"})}catch(__react_docgen_typescript_loader_error){}const LazyImage_stories={title:"Image/LazyImage",component:LazyImage,tags:["autodocs"],decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{position:"relative",width:200,height:200},children:(0,jsx_runtime.jsx)(Story,{})})]},WithAlpha={args:{src:"./image/image.jpg",hasAlpha:!0}},WithoutAlpha={args:{src:"./image/image.jpg",hasAlpha:!1}},WithEager={args:{src:"./image/image.jpg",loading:"eager"}},WithAdaptivePaths={args:{paths:{original:"",thumb:"./image/image.jpg",thumbWebp:"./image/image.webp",sizes:{640:"./image/640.png",750:"./image/750.png",1024:"./image/1024.png",1440:"./image/1440.png",1920:"./image/1920.png",2560:"./image/2560.png"},sizesWebp:{640:"./image/640.webp",750:"./image/750.webp",1024:"./image/1024.webp",1440:"./image/1440.webp",1920:"./image/1920.webp",2560:"./image/2560.webp"},alt:"adaptive image"}}};WithAlpha.parameters={...WithAlpha.parameters,docs:{...WithAlpha.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: './image/image.jpg',\n    hasAlpha: true\n  }\n}",...WithAlpha.parameters?.docs?.source}}},WithoutAlpha.parameters={...WithoutAlpha.parameters,docs:{...WithoutAlpha.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: './image/image.jpg',\n    hasAlpha: false\n  }\n}",...WithoutAlpha.parameters?.docs?.source}}},WithEager.parameters={...WithEager.parameters,docs:{...WithEager.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: './image/image.jpg',\n    loading: 'eager'\n  }\n}",...WithEager.parameters?.docs?.source}}},WithAdaptivePaths.parameters={...WithAdaptivePaths.parameters,docs:{...WithAdaptivePaths.parameters?.docs,source:{originalSource:"{\n  args: {\n    paths: {\n      original: '',\n      thumb: './image/image.jpg',\n      thumbWebp: './image/image.webp',\n      sizes: {\n        640: './image/640.png',\n        750: './image/750.png',\n        1024: './image/1024.png',\n        1440: './image/1440.png',\n        1920: './image/1920.png',\n        2560: './image/2560.png'\n      },\n      sizesWebp: {\n        640: './image/640.webp',\n        750: './image/750.webp',\n        1024: './image/1024.webp',\n        1440: './image/1440.webp',\n        1920: './image/1920.webp',\n        2560: './image/2560.webp'\n      },\n      alt: 'adaptive image'\n    }\n  }\n}",...WithAdaptivePaths.parameters?.docs?.source}}};const __namedExportsOrder=["WithAlpha","WithoutAlpha","WithEager","WithAdaptivePaths"]},"../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);