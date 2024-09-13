/*! For license information please see 768.11f48b60.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[768],{"../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../common/temp/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>dequal});var has=Object.prototype.hasOwnProperty;function find(iter,tar,key){for(key of iter.keys())if(dequal(key,tar))return key}function dequal(foo,bar){var ctor,len,tmp;if(foo===bar)return!0;if(foo&&bar&&(ctor=foo.constructor)===bar.constructor){if(ctor===Date)return foo.getTime()===bar.getTime();if(ctor===RegExp)return foo.toString()===bar.toString();if(ctor===Array){if((len=foo.length)===bar.length)for(;len--&&dequal(foo[len],bar[len]););return-1===len}if(ctor===Set){if(foo.size!==bar.size)return!1;for(len of foo){if((tmp=len)&&"object"==typeof tmp&&!(tmp=find(bar,tmp)))return!1;if(!bar.has(tmp))return!1}return!0}if(ctor===Map){if(foo.size!==bar.size)return!1;for(len of foo){if((tmp=len[0])&&"object"==typeof tmp&&!(tmp=find(bar,tmp)))return!1;if(!dequal(len[1],bar.get(tmp)))return!1}return!0}if(ctor===ArrayBuffer)foo=new Uint8Array(foo),bar=new Uint8Array(bar);else if(ctor===DataView){if((len=foo.byteLength)===bar.byteLength)for(;len--&&foo.getInt8(len)===bar.getInt8(len););return-1===len}if(ArrayBuffer.isView(foo)){if((len=foo.byteLength)===bar.byteLength)for(;len--&&foo[len]===bar[len];);return-1===len}if(!ctor||"object"==typeof foo){for(ctor in len=0,foo){if(has.call(foo,ctor)&&++len&&!has.call(bar,ctor))return!1;if(!(ctor in bar)||!dequal(foo[ctor],bar[ctor]))return!1}return Object.keys(bar).length===len}}return foo!=foo&&bar!=bar}},"../../common/temp/node_modules/.pnpm/use-deep-compare-effect@1.8.1_react@18.2.0/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Uf:()=>useDeepCompareMemoize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),dequal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs");function useDeepCompareMemoize(value){var ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value),signalRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);return(0,dequal__WEBPACK_IMPORTED_MODULE_1__.J)(value,ref.current)||(ref.current=value,signalRef.current+=1),react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return ref.current}),[signalRef.current])}},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isElement(el){return el instanceof HTMLElement||el instanceof Element}__webpack_require__.d(__webpack_exports__,{k:()=>isElement})},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isWindow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isWindow(el){return el instanceof Window}__webpack_require__.d(__webpack_exports__,{F:()=>isWindow})},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/selectOne.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>selectOne});var _isElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isElement.js"),_isWindow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isWindow.js");function selectOne(selector,parent){if((0,_isWindow__WEBPACK_IMPORTED_MODULE_0__.F)(selector))return selector;if((0,_isElement__WEBPACK_IMPORTED_MODULE_1__.k)(selector))return selector;if(void 0!==parent){const parenEl=selectOne(parent);if(parenEl)return parenEl.querySelector(selector)}return document.querySelector(selector)}},"../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Component/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>Component});var _Module__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Module/index.js");class Component extends _Module__WEBPACK_IMPORTED_MODULE_0__.Y{addPlugin(plugin){void 0===this._plugins&&(this._plugins=[]),this._plugins.push(plugin),plugin.component=this,plugin.init()}_destroyPlugins(){var _a;null===(_a=this._plugins)||void 0===_a||_a.forEach((plugin=>plugin.destroy()))}_destroy(){super._destroy(),this._destroyPlugins()}}},"../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Module});var listeners=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/listeners.js"),getApp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");class MutableProps{get props(){return this._props}constructor(_initProps,_onMutate=(()=>{}),_name="Responsive Props"){this._initProps=_initProps,this._onMutate=_onMutate,this._name=_name,this._responsiveRules=[],this._refProps=Object.assign({},_initProps),this._props=Object.assign({},_initProps),this._activeBreakpoints=[]}addResponsiveProps(rules){this._responsiveRules.push(rules),this._responseProps(),void 0===this._viewportCallback&&(this._viewportCallback=(0,getApp.M)().viewport.callbacks.add("width",this._responseProps.bind(this),{name:this._name}))}_responseProps(){const app=(0,getApp.M)(),{viewport}=app;let newProps=!1;const statProp=Object.assign({},this._refProps),prevActiveBreakpointsString=[...this._activeBreakpoints].join("_");this._activeBreakpoints=[],this._responsiveRules.forEach((({settings,breakpoint})=>{"number"==typeof breakpoint?viewport.width<=breakpoint&&(this._activeBreakpoints.push(breakpoint),newProps=Object.assign(Object.assign({},statProp),settings)):"string"==typeof breakpoint&&(("viewport_desktop"===breakpoint&&viewport.isDesktop||"viewport_tablet"===breakpoint&&viewport.isTablet||"viewport_phone"===breakpoint&&viewport.isPhone)&&(this._activeBreakpoints.push(breakpoint),newProps=Object.assign(Object.assign({},newProps||statProp),settings)),("device_phone"===breakpoint&&app.isPhone||"device_tablet"===breakpoint&&app.isTablet||"device_mobile"===breakpoint&&app.isMobile)&&(this._activeBreakpoints.push(breakpoint),newProps=Object.assign(Object.assign({},newProps||statProp),settings)))}));const isPropsChanged=this._activeBreakpoints.join("_")!==prevActiveBreakpointsString;this._props=newProps?Object.assign(Object.assign({},this._props),newProps):Object.assign(Object.assign({},this._props),this._refProps),isPropsChanged&&this._onMutate()}changeProps(props){this._props=Object.assign(Object.assign({},this._props),props),this._refProps=Object.assign(Object.assign({},this._refProps),props),this._onMutate()}destroy(){this._viewportCallback&&this._viewportCallback.remove()}}var Callbacks=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Callbacks/index.js");class Module{_getDefaultProps(){return{}}get props(){return this._mutableProps.props}get callbacks(){return this._callbacks}get name(){return this.constructor.name}get prefix(){return""}get isInitialized(){return this._isInitialized}get isDestroyed(){return this._isDestroyed}constructor(initialProps,canInit=!0){if(this._isInitialized=!1,this._isDestroyed=!1,!(0,getApp.M)())throw new Error('Vevet.Application does not exist yet. Call "new Vevet.Application()" before using all the stuff');this._callbacks=new Callbacks.Y,this._listeners=[],this._destroyableActions=[],this._classNamesToRemove=[];const props=Object.assign(Object.assign({},this._getDefaultProps()),initialProps||{});this._mutableProps=new MutableProps(props,(()=>this._onPropsMutate()),this.name),canInit&&this.init()}addResponsiveProps(rules){if(this.isInitialized)throw new Error("Responsive properties cannot be added after `init` is called");this._mutableProps.addResponsiveProps(rules)}changeProps(props){this.isDestroyed||(this._mutableProps.changeProps(props),this._callbacks.tbt("propsChange",void 0))}_onPropsMutate(){this._callbacks.tbt("propsMutate",void 0)}init(){this.isInitialized||(this._isInitialized=!0,this._init())}_init(){}addDestroyableAction(action){this._destroyableActions.push(action)}addViewportCallback(target,action,data={}){const callback=(0,getApp.M)().viewport.callbacks.add(target,action,Object.assign(Object.assign({},data),{name:this.constructor.name}));this.addDestroyableAction((()=>callback.remove()))}addCallback(target,action,settings={}){return this.callbacks.add(target,action,settings)}addEventListener(el,target,callback,options){const listener=(0,listeners.O)(el,target,callback,options);return this._listeners.push(listener),Object.assign(Object.assign({},listener),{remove:()=>(this._listeners=this._listeners.filter((item=>item.id!==listener.id)),listener.remove())})}className(...classNames){return classNames.map((value=>`${this.prefix}${value}`)).join(" ")}toggleClassName(element,className,isActive){const isAlreadyExists=element.classList.contains(className);element.classList.toggle(className,isActive),isAlreadyExists||this._classNamesToRemove.push({element,className})}destroy(){this.isDestroyed||this._destroy()}_destroy(){this._callbacks.tbt("destroy",void 0),this._callbacks.destroy(),this._mutableProps.destroy(),this._destroyableActions.forEach((action=>action())),this._listeners.forEach((listener=>listener.remove())),this._classNamesToRemove.forEach((({element,className})=>element.classList.remove(className))),this._isDestroyed=!0}}},"../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/components/AnimationFrame/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>AnimationFrame});var _base_Component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Component/index.js");class AnimationFrame extends _base_Component__WEBPACK_IMPORTED_MODULE_0__.w{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{fps:"auto",autoFpsFrames:10,isEnabled:!1})}get isPlaying(){return this._isPlaying}get computedFPS(){return this._computedFPS}get easeMultiplier(){return 60/this.computedFPS}constructor(initialProps,canInit=!0){super(initialProps,!1),this._isPlaying=!1,this._raf=null,this._rafIndex=-1,this._rafFirst=null,this._rafLast=null,this._durations=[],this._computedFPS="auto"!==this.props.fps?this.props.fps:60,canInit&&this.init()}_init(){super._init(),this.props.isEnabled&&this.play()}_onPropsMutate(){super._onPropsMutate(),this._rafIndex=-1,this._rafFirst=null,this._rafLast=null,this.props.isEnabled?this._play():this._pause()}play(){this.isDestroyed||this.props.isEnabled||this.changeProps({isEnabled:!0})}_play(){this.isPlaying||(this._isPlaying=!0,this.callbacks.tbt("play",void 0),this.callbacks.tbt("toggle",void 0),this._raf=window.requestAnimationFrame(this._animate.bind(this)))}pause(){this.props.isEnabled&&this.changeProps({isEnabled:!1})}_pause(){this.isPlaying&&(this._raf&&(window.cancelAnimationFrame(this._raf),this._raf=null),this._isPlaying=!1,this.callbacks.tbt("pause",void 0),this.callbacks.tbt("toggle",void 0))}_animate(){if(!this._isPlaying)return;this._raf=window.requestAnimationFrame(this._animate.bind(this));const startTime=Date.now();null===this._rafFirst&&(this._rafFirst=startTime);const minFrameDuration="auto"===this.props.fps?1:1e3/this.props.fps,newFrameIndex=Math.floor((startTime-this._rafFirst)/minFrameDuration);newFrameIndex<=this._rafIndex||(this._rafIndex=newFrameIndex,this._computeFPS(startTime),this.callbacks.tbt("frame",void 0),this._rafLast=startTime)}_computeFPS(startTime){var _a;const lastFrameDuration=startTime-(null!==(_a=this._rafLast)&&void 0!==_a?_a:startTime);if(lastFrameDuration<=0||lastFrameDuration>250)return;if(this._durations.push(lastFrameDuration),this._durations.length<this.props.autoFpsFrames)return;const approximateFrameDuration=this._durations.reduce(((prev,curr)=>prev+curr))/this._durations.length,computedFPS=Math.floor(1e3/approximateFrameDuration),normalizedFPS=10*Math.round(computedFPS/10);this._computedFPS=normalizedFPS,this._durations=[]}_destroy(){this.pause(),super._destroy()}}}}]);