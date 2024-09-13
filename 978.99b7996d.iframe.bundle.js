/*! For license information please see 978.99b7996d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[978],{"../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Component/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>Component});var _Module__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Module/index.js");class Component extends _Module__WEBPACK_IMPORTED_MODULE_0__.Y{addPlugin(plugin){void 0===this._plugins&&(this._plugins=[]),this._plugins.push(plugin),plugin.component=this,plugin.init()}_destroyPlugins(){var _a;null===(_a=this._plugins)||void 0===_a||_a.forEach((plugin=>plugin.destroy()))}_destroy(){super._destroy(),this._destroyPlugins()}}},"../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Module});var listeners=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/listeners.js"),getApp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");class MutableProps{get props(){return this._props}constructor(_initProps,_onMutate=(()=>{}),_name="Responsive Props"){this._initProps=_initProps,this._onMutate=_onMutate,this._name=_name,this._responsiveRules=[],this._refProps=Object.assign({},_initProps),this._props=Object.assign({},_initProps),this._activeBreakpoints=[]}addResponsiveProps(rules){this._responsiveRules.push(rules),this._responseProps(),void 0===this._viewportCallback&&(this._viewportCallback=(0,getApp.M)().viewport.callbacks.add("width",this._responseProps.bind(this),{name:this._name}))}_responseProps(){const app=(0,getApp.M)(),{viewport}=app;let newProps=!1;const statProp=Object.assign({},this._refProps),prevActiveBreakpointsString=[...this._activeBreakpoints].join("_");this._activeBreakpoints=[],this._responsiveRules.forEach((({settings,breakpoint})=>{"number"==typeof breakpoint?viewport.width<=breakpoint&&(this._activeBreakpoints.push(breakpoint),newProps=Object.assign(Object.assign({},statProp),settings)):"string"==typeof breakpoint&&(("viewport_desktop"===breakpoint&&viewport.isDesktop||"viewport_tablet"===breakpoint&&viewport.isTablet||"viewport_phone"===breakpoint&&viewport.isPhone)&&(this._activeBreakpoints.push(breakpoint),newProps=Object.assign(Object.assign({},newProps||statProp),settings)),("device_phone"===breakpoint&&app.isPhone||"device_tablet"===breakpoint&&app.isTablet||"device_mobile"===breakpoint&&app.isMobile)&&(this._activeBreakpoints.push(breakpoint),newProps=Object.assign(Object.assign({},newProps||statProp),settings)))}));const isPropsChanged=this._activeBreakpoints.join("_")!==prevActiveBreakpointsString;this._props=newProps?Object.assign(Object.assign({},this._props),newProps):Object.assign(Object.assign({},this._props),this._refProps),isPropsChanged&&this._onMutate()}changeProps(props){this._props=Object.assign(Object.assign({},this._props),props),this._refProps=Object.assign(Object.assign({},this._refProps),props),this._onMutate()}destroy(){this._viewportCallback&&this._viewportCallback.remove()}}var Callbacks=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Callbacks/index.js");class Module{_getDefaultProps(){return{}}get props(){return this._mutableProps.props}get callbacks(){return this._callbacks}get name(){return this.constructor.name}get prefix(){return""}get isInitialized(){return this._isInitialized}get isDestroyed(){return this._isDestroyed}constructor(initialProps,canInit=!0){if(this._isInitialized=!1,this._isDestroyed=!1,!(0,getApp.M)())throw new Error('Vevet.Application does not exist yet. Call "new Vevet.Application()" before using all the stuff');this._callbacks=new Callbacks.Y,this._listeners=[],this._destroyableActions=[],this._classNamesToRemove=[];const props=Object.assign(Object.assign({},this._getDefaultProps()),initialProps||{});this._mutableProps=new MutableProps(props,(()=>this._onPropsMutate()),this.name),canInit&&this.init()}addResponsiveProps(rules){if(this.isInitialized)throw new Error("Responsive properties cannot be added after `init` is called");this._mutableProps.addResponsiveProps(rules)}changeProps(props){this.isDestroyed||(this._mutableProps.changeProps(props),this._callbacks.tbt("propsChange",void 0))}_onPropsMutate(){this._callbacks.tbt("propsMutate",void 0)}init(){this.isInitialized||(this._isInitialized=!0,this._init())}_init(){}addDestroyableAction(action){this._destroyableActions.push(action)}addViewportCallback(target,action,data={}){const callback=(0,getApp.M)().viewport.callbacks.add(target,action,Object.assign(Object.assign({},data),{name:this.constructor.name}));this.addDestroyableAction((()=>callback.remove()))}addCallback(target,action,settings={}){return this.callbacks.add(target,action,settings)}addEventListener(el,target,callback,options){const listener=(0,listeners.O)(el,target,callback,options);return this._listeners.push(listener),Object.assign(Object.assign({},listener),{remove:()=>(this._listeners=this._listeners.filter((item=>item.id!==listener.id)),listener.remove())})}className(...classNames){return classNames.map((value=>`${this.prefix}${value}`)).join(" ")}toggleClassName(element,className,isActive){const isAlreadyExists=element.classList.contains(className);element.classList.toggle(className,isActive),isAlreadyExists||this._classNamesToRemove.push({element,className})}destroy(){this.isDestroyed||this._destroy()}_destroy(){this._callbacks.tbt("destroy",void 0),this._callbacks.destroy(),this._mutableProps.destroy(),this._destroyableActions.forEach((action=>action())),this._listeners.forEach((listener=>listener.remove())),this._classNamesToRemove.forEach((({element,className})=>element.classList.remove(className))),this._isDestroyed=!0}}},"../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/components/Timeline/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>Timeline});var clamp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/clamp.js"),Component=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Component/index.js"),easing=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/easing.js"),clampScope=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/clampScope.js"),uid=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/common/uid.js"),getApp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");class BaseTimeline extends Component.w{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{easing:(0,getApp.M)().props.easing,nestedScope:[0,1],hasNestedEasingProgress:!1})}get p(){return this._p}set p(val){this._p=val,this._handleProgressUpdate()}get e(){return this._e}constructor(initialProps,canInit=!0){super(initialProps,!1),this._p=0,this._e=0,this._nestedTimelines=[],canInit&&this.init()}addNestedTimeline(timeline){const id=(0,uid.h)();return this._nestedTimelines.push({id,timeline}),{remove:()=>{this._nestedTimelines=this._nestedTimelines.filter((({id:nestedTimelineId})=>nestedTimelineId!==id))}}}_handleProgressUpdate(){this._e=(0,easing.Ui)(this._p,this.props.easing),this.callbacks.tbt("progress",{p:this._p,e:this._e}),this._renderNestedTimelines()}_renderNestedTimelines(){const{length}=this._nestedTimelines;if(0===length)return;const progressForNestedTimeline=this.props.hasNestedEasingProgress?this.e:this.p;this._nestedTimelines.forEach((({timeline})=>{const timelineProgress=(0,clampScope.r)(progressForNestedTimeline,timeline.props.nestedScope,[0,1]);timeline.p=timelineProgress}))}_destroy(){super._destroy(),this._nestedTimelines.forEach((({timeline})=>timeline.destroy()))}}class Timeline extends BaseTimeline{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{duration:1e3,shouldDestroyOnEnd:!1})}get isPlaying(){return void 0!==this._raf}get isReversed(){return this._isReversed}get isPaused(){return this._isPaused}get duration(){return Math.max(this.props.duration,1)}constructor(initialProps,canInit=!0){super(initialProps,!1),this._raf=void 0,this._rafTime=0,this._isReversed=!1,this._isPaused=!1,canInit&&this.init()}play(){this.isDestroyed||1===this.p||(this._isReversed=!1,this._isPaused=!1,this.isPlaying||(this._rafTime=Date.now(),this._animate()))}reverse(){this.isDestroyed||0===this.p||(this._isReversed=!0,this._isPaused=!1,this.isPlaying||(this._rafTime=Date.now(),this._animate()))}pause(){this.isDestroyed||(this._isPaused=!0,this._raf&&window.cancelAnimationFrame(this._raf),this._raf=void 0)}reset(){this.isDestroyed||(this.pause(),this.p=0)}_animate(){if(this.isPaused)return;const{isReversed}=this,currentTime=Date.now(),frameDiff=Math.abs(this._rafTime-currentTime);this._rafTime=currentTime;const progressIterator=frameDiff/this.duration/(isReversed?-1:1),progressTarget=(0,clamp.u)(this.p+progressIterator,[0,1]);if(this.p=progressTarget,1===progressTarget&&!isReversed||0===progressTarget&&isReversed)return this._isReversed=!1,this._isPaused=!1,void(this._raf=void 0);this._raf=window.requestAnimationFrame(this._animate.bind(this))}_handleProgressUpdate(){super._handleProgressUpdate(),0!==this.p?1===this.p&&(this.callbacks.tbt("end",void 0),this.props.shouldDestroyOnEnd&&this.destroy()):this.callbacks.tbt("start",void 0)}_destroy(){this.pause(),super._destroy()}}},"../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/clamp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function clamp(val,scope=[0,1]){return val<scope[0]?scope[0]:val>scope[1]?scope[1]:val}__webpack_require__.d(__webpack_exports__,{u:()=>clamp})},"../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/clampScope.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>clampScope});var clamp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/clamp.js");function clampScope(value,scopeProp=[0,1],clampProp=[0,1]){return(0,clamp.u)(function scoped(val,scopeValue=[0,1]){return(val-scopeValue[0])/(scopeValue[1]-scopeValue[0])}(value,scopeProp),clampProp)}},"../../common/temp/node_modules/.pnpm/vevet@3.19.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/math/easing.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function easingByBezier(progress,bezier){const[x1,y1,x2,y2]=bezier;if(x1===y1&&x2===y2)return progress;const val=[];for(let i=0;i<11;++i)val[i]=bezierCalc(.1*i,x1,x2);return 0===progress?0:1===progress?1:bezierCalc(function bezierX(bezier,progress,val){const x1=bezier[0],x2=bezier[2];let start=0,current=1;for(;10!==current&&val[current]<=progress;++current)start+=.1;--current;const dist=(progress-val[current])/(val[current+1]-val[current]),guessForT=start+.1*dist,initialSlope=bezierSlope(guessForT,x1,x2);if(initialSlope>=.001)return function bezierNewtonRaphsonIterate(progress,guessForT,x1,x2){for(let i=0;i<4;++i){const currentSlope=bezierSlope(guessForT,x1,x2);if(0===currentSlope)return guessForT;guessForT-=(bezierCalc(guessForT,x1,x2)-progress)/currentSlope}return guessForT}(progress,guessForT,x1,x2);if(0===initialSlope)return guessForT;return function bezierBinarySubdivide(progress,a,b,x1,x2){let currentX,currentT,i=0;do{currentT=a+(b-a)/2,currentX=bezierCalc(currentT,x1,x2)-progress,currentX>0?b=currentT:a=currentT}while(Math.abs(currentX)>1e-7&&++i<10);return currentT}(progress,start,start+.1,x1,x2)}(bezier,progress,val),y1,y2)}function bezierCalc(progress,x1,x2){return((bezierA(x1,x2)*progress+bezierB(x1,x2))*progress+bezierC(x1))*progress}function bezierA(x1,x2){return 1-3*x2+3*x1}function bezierB(x1,x2){return 3*x2-6*x1}function bezierC(x1){return 3*x1}function bezierSlope(progress,x1,x2){return 3*bezierA(x1,x2)*progress*progress+2*bezierB(x1,x2)*progress+bezierC(x1)}__webpack_require__.d(__webpack_exports__,{Ui:()=>easing_easing});const easing_easing=(progress,easingType)=>{var _a,_b;return void 0===easingType&&(easingType=null!==(_b=null===(_a=window.vevetApp)||void 0===_a?void 0:_a.props.easing)&&void 0!==_b&&_b),function easing(progress,easingType=!1){return Array.isArray(easingType)?easingByBezier(progress,easingType):"function"==typeof easingType?easingType(progress):progress}(progress,easingType)}}}]);