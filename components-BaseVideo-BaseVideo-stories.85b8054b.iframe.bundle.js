/*! For license information please see components-BaseVideo-BaseVideo-stories.85b8054b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[559],{"../../common/temp/node_modules/.pnpm/@anton.bobrov+p-cancelable@4.0.1/node_modules/@anton.bobrov/p-cancelable/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PCancelable});class CancelError extends Error{constructor(reason){super(reason||"Promise was canceled"),this.name="CancelError"}get isCanceled(){return!0}}const promiseState=Object.freeze({pending:Symbol("pending"),canceled:Symbol("canceled"),resolved:Symbol("resolved"),rejected:Symbol("rejected")});class PCancelable{static fn(userFunction){return(...arguments_)=>new PCancelable(((resolve,reject,onCancel)=>{arguments_.push(onCancel),userFunction(...arguments_).then(resolve,reject)}))}#cancelHandlers=[];#rejectOnCancel=!0;#state=promiseState.pending;#promise;#reject;constructor(executor){this.#promise=new Promise(((resolve,reject)=>{this.#reject=reject;const onCancel=handler=>{if(this.#state!==promiseState.pending)throw new Error(`The \`onCancel\` handler was attached after the promise ${this.#state.description}.`);this.#cancelHandlers.push(handler)};Object.defineProperties(onCancel,{shouldReject:{get:()=>this.#rejectOnCancel,set:boolean=>{this.#rejectOnCancel=boolean}}}),executor((value=>{this.#state===promiseState.canceled&&onCancel.shouldReject||(resolve(value),this.#setState(promiseState.resolved))}),(error=>{this.#state===promiseState.canceled&&onCancel.shouldReject||(reject(error),this.#setState(promiseState.rejected))}),onCancel)}))}then(onFulfilled,onRejected){return this.#promise.then(onFulfilled,onRejected)}catch(onRejected){return this.#promise.catch(onRejected)}finally(onFinally){return this.#promise.finally(onFinally)}cancel(reason){if(this.#state===promiseState.pending){if(this.#setState(promiseState.canceled),this.#cancelHandlers.length>0)try{for(const handler of this.#cancelHandlers)handler()}catch(error){return void this.#reject(error)}this.#rejectOnCancel&&this.#reject(new CancelError(reason))}}get isCanceled(){return this.#state===promiseState.canceled}#setState(state){this.#state===promiseState.pending&&(this.#state=state)}}Object.setPrototypeOf(PCancelable.prototype,Promise.prototype)},"./src/components/BaseVideo/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>BaseVideo});var useForwardedRef=__webpack_require__("../react-hooks/lib/esm/hooks/useForwardedRef.js"),react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p_cancelable=__webpack_require__("../../common/temp/node_modules/.pnpm/@anton.bobrov+p-cancelable@4.0.1/node_modules/@anton.bobrov/p-cancelable/index.js"),normalizedTimeoutCallback=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.18.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/common/normalizedTimeoutCallback.js");var jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const BaseVideo=(0,react.forwardRef)((({src,children,autoPlay,isPlaying,onLoadedMetadata,...videoProps},forwardedRef)=>{const ref=(0,useForwardedRef.t)(forwardedRef),[isLoaded,setIsLoaded]=(0,react.useState)(!1),prevIsPlayingRef=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{const isSamePlaying=Boolean(prevIsPlayingRef.current)===Boolean(isPlaying);if(!isLoaded||!ref.current||isSamePlaying)return;if(prevIsPlayingRef.current=Boolean(isPlaying),!isPlaying)return void ref.current.pause();const promise=(video=>{let timeout;const play=()=>new p_cancelable.Z((resolve=>{video.play().then(resolve).catch((()=>playWithTimeout(resolve)))})),playWithTimeout=callback=>{timeout?.clear(),timeout=(0,normalizedTimeoutCallback.h)((()=>{play()?.then(callback).catch((()=>{}))}),30)};return play()})(ref.current);return promise?.then((()=>{})).catch((()=>{})),()=>promise?.cancel()}),[isLoaded,isPlaying,ref]),(0,jsx_runtime.jsx)("video",{ref,disablePictureInPicture:!0,playsInline:!0,preload:"auto",autoPlay,...videoProps,src:void 0,onLoadedMetadata:evt=>{onLoadedMetadata?.(evt),setTimeout((()=>setIsLoaded(!0)),0)},children:children||(0,jsx_runtime.jsx)("source",{src,type:"video/mp4"})})}));BaseVideo.displayName="BaseVideo";try{BaseVideo.displayName="BaseVideo",BaseVideo.__docgenInfo={description:"Base Video component",displayName:"BaseVideo",props:{isPlaying:{defaultValue:null,description:"Won't work if `autoPlay` is true",name:"isPlaying",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseVideo/index.tsx#BaseVideo"]={docgenInfo:BaseVideo.__docgenInfo,name:"BaseVideo",path:"src/components/BaseVideo/index.tsx#BaseVideo"})}catch(__react_docgen_typescript_loader_error){}},"../react-hooks/lib/esm/hooks/useForwardedRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useForwardedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useForwardedRef(forwardedRef){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,(function(){return ref.current})),ref}},"./src/components/BaseVideo/BaseVideo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Video/BaseVideo",component:__webpack_require__("./src/components/BaseVideo/index.tsx").H,tags:["autodocs"],args:{width:300,autoPlay:!0,controls:!0,muted:!0}},Default={args:{src:"./video/video.mp4"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: './video/video.mp4'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../common/temp/node_modules/.pnpm/vevet@3.18.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/common/normalizedTimeoutCallback.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function normalizedTimeoutCallback(callback,delay){let timeout;return 0===delay?callback():timeout=setTimeout((()=>callback()),delay),{clear:()=>{timeout&&clearTimeout(timeout)}}}__webpack_require__.d(__webpack_exports__,{h:()=>normalizedTimeoutCallback})}}]);