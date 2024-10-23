"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[721],{"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isElement(el){return el instanceof HTMLElement||el instanceof Element}__webpack_require__.d(__webpack_exports__,{k:()=>isElement})},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isWindow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isWindow(el){return el instanceof Window}__webpack_require__.d(__webpack_exports__,{F:()=>isWindow})},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/selectOne.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>selectOne});var _isElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isElement.js"),_isWindow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isWindow.js");function selectOne(selector,parent){if((0,_isWindow__WEBPACK_IMPORTED_MODULE_0__.F)(selector))return selector;if((0,_isElement__WEBPACK_IMPORTED_MODULE_1__.k)(selector))return selector;if(void 0!==parent){const parenEl=selectOne(parent);if(parenEl)return parenEl.querySelector(selector)}return document.querySelector(selector)}},"../../common/temp/node_modules/.pnpm/vevet@4.0.2_typescript@4.8.2/node_modules/vevet/lib/esm/components/AnimationFrame/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>AnimationFrame});var _base_Component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Component/index.js");class AnimationFrame extends _base_Component__WEBPACK_IMPORTED_MODULE_0__.w{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{fps:"auto",autoFpsFrames:10,isEnabled:!1})}get isPlaying(){return this._isPlaying}get computedFPS(){return this._computedFPS}get fpsMultiplier(){return 60/this.computedFPS}constructor(initialProps,canInit=!0){super(initialProps,!1),this._isPlaying=!1,this._raf=null,this._rafIndex=-1,this._rafFirst=null,this._rafLast=null,this._durations=[],this._computedFPS="auto"!==this.props.fps?this.props.fps:60,canInit&&this.init()}_init(){super._init(),this.props.isEnabled&&this._play()}_onPropsMutate(){super._onPropsMutate(),this._rafIndex=-1,this._rafFirst=null,this._rafLast=null,this.props.isEnabled?this._play():this._pause()}play(){this.isDestroyed||this.props.isEnabled||this.changeProps({isEnabled:!0})}_play(){this.isPlaying||(this._isPlaying=!0,this.callbacks.tbt("play",void 0),this.callbacks.tbt("toggle",void 0),this._raf=window.requestAnimationFrame(this._animate.bind(this)))}pause(){this.props.isEnabled&&this.changeProps({isEnabled:!1})}_pause(){this.isPlaying&&(this._raf&&(window.cancelAnimationFrame(this._raf),this._raf=null),this._isPlaying=!1,this.callbacks.tbt("pause",void 0),this.callbacks.tbt("toggle",void 0))}_animate(){if(!this._isPlaying)return;this._raf=window.requestAnimationFrame(this._animate.bind(this));const startTime=Date.now();null===this._rafFirst&&(this._rafFirst=startTime);const minFrameDuration="auto"===this.props.fps?1:1e3/this.props.fps,newFrameIndex=Math.floor((startTime-this._rafFirst)/minFrameDuration);newFrameIndex<=this._rafIndex||(this._rafIndex=newFrameIndex,this._computeFPS(startTime),this.callbacks.tbt("frame",void 0),this._rafLast=startTime)}_computeFPS(startTime){var _a;const lastFrameDuration=startTime-(null!==(_a=this._rafLast)&&void 0!==_a?_a:startTime);if(lastFrameDuration<=0||lastFrameDuration>250)return;if(this._durations.push(lastFrameDuration),this._durations.length<this.props.autoFpsFrames)return;const approximateFrameDuration=this._durations.reduce(((prev,curr)=>prev+curr))/this._durations.length,computedFPS=Math.floor(1e3/approximateFrameDuration),normalizedFPS=10*Math.round(computedFPS/10);this._computedFPS=normalizedFPS,this._durations=[]}_destroy(){this.pause(),super._destroy()}}},"../../common/temp/node_modules/.pnpm/vevet@4.0.2_typescript@4.8.2/node_modules/vevet/lib/esm/components/Marquee/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>Marquee});var selectOne=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/selectOne.js"),Component=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Component/index.js"),AnimationFrame=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.2_typescript@4.8.2/node_modules/vevet/lib/esm/components/AnimationFrame/index.js"),getApp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");function wrap(min,max,value){const range=max-min;return function conditionalReturn(value,func){return value||0===value?func(value):func}(value,(val=>(range+(val-min)%range)%range+min))}var onResize=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/listeners/onResize.js");class Marquee extends Component.w{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{container:`#${this.prefix}`,resizeDebounce:0,hasWillChange:!0,canCloneNodes:!0,speed:1,gap:0,isEnabled:!0,pauseOnHover:!1,isFpsNormalized:!0,isCentered:!1})}get prefix(){return`${(0,getApp.M)().prefix}marquee`}get container(){return this._container}get totalWidth(){return this._totalWidth}get x(){return this._x}set x(value){this._x=value,this.render(0)}constructor(initialProps,canInit=!0){super(initialProps,!1),this._width=0,this._initialNodes=[],this._elements=[],this._resizeTimeout=null,this._widths=[],this._totalWidth=0,this._container=(0,selectOne.z)(this.props.container);const container=this._container;if(!(container instanceof HTMLElement))throw new Error("No container");this.toggleClassName(container,this.className(""),!0),this._x=0,this._canPlay=!0,container.style.position="relative",container.style.display="flex",container.style.flexDirection="row",container.style.alignItems="center",container.style.justifyContent="flex-start",container.style.width="100%",container.style.overflow="hidden",this._setup(),this._raf=new AnimationFrame.$({isEnabled:this.props.isEnabled}),this._raf.addCallback("frame",(()=>this._render())),canInit&&this.init()}_init(){super._init(),this._setEvents()}_setEvents(){const{container,props}=this;this.addEventListener(container,"mouseenter",(()=>{props.pauseOnHover&&(this._canPlay=!1)})),this.addEventListener(container,"mouseleave",(()=>{this._canPlay=!0}))}_onPropsMutate(){var _a,_b;super._onPropsMutate(),this.props.isEnabled?null===(_a=this._raf)||void 0===_a||_a.play():null===(_b=this._raf)||void 0===_b||_b.pause(),this.render(0)}_setup(){var _a;if(null===(_a=this._lastSetup)||void 0===_a||_a.call(this),this.isDestroyed)return;const container=this._container;this._initialNodes=[...Array.from(container.childNodes)],this._wrapTextNode(),this._elements=Array.from(container.querySelectorAll("*"));const onContainerResize=(0,onResize.i)({onResize:()=>this._handleResize(),element:container,viewportTarget:"width",hasBothEvents:!1});(0,getApp.M)().onPageLoad().then((()=>this._handleResize())).catch((()=>{}));const elementsResize=(0,onResize.i)({onResize:()=>this._handleResize(),element:this._elements,viewportTarget:"width",hasBothEvents:!1});this._elements.forEach(((element,index)=>this._addElementStyles(element,0!==index))),this._lastSetup=()=>{onContainerResize.remove(),elementsResize.remove()}}_wrapTextNode(){const node=this._container.childNodes[0];if(!node||3!==node.nodeType)return;const wrapper=document.createElement("span");wrapper.style.position="relative",wrapper.style.display="block",wrapper.style.width="max-content",wrapper.style.whiteSpace="nowrap",wrapper.appendChild(node),this._container.appendChild(wrapper)}_addElementStyles(element,isAbsolute){const el=element;el.style.position=isAbsolute?"absolute":"relative",el.style.top=isAbsolute?"50%":"0",el.style.left="0",el.style.width=element.style.width||"max-content",el.style.willChange=this.props.hasWillChange?"transform":""}_handleResize(){this.isDestroyed||(this._resizeTimeout&&clearTimeout(this._resizeTimeout),this._resizeTimeout=setTimeout((()=>this.resize()),this.props.resizeDebounce))}resize(){if(this.isDestroyed)return;const{container,props}=this;this._width=container.offsetWidth,this._widths=[],this._elements.forEach(((element,index)=>{this._widths[index]=element.offsetWidth+props.gap})),this._totalWidth=this._widths.reduce(((a,b)=>a+b),0);const maxWidth=Math.max(...this._widths),copyQuantity=Math.ceil((this._width+maxWidth)/this._totalWidth);if(this._totalWidth=Math.max(this._totalWidth,this._width+maxWidth),props.canCloneNodes&&copyQuantity>1){for(let i=1;i<copyQuantity;i+=1)this._elements.forEach((element=>{const copy=element.cloneNode(!0);this._addElementStyles(copy,!0),container.appendChild(copy)}));this._elements=Array.from(container.querySelectorAll("*")),this.resize()}this.callbacks.tbt("resize",void 0),this.render(0)}render(speed){this._render(speed)}_render(speedProp=this.props.speed){if(!this._canPlay||this.isDestroyed)return;const{isFpsNormalized,isCentered}=this.props,speed=speedProp*(isFpsNormalized?this._raf.fpsMultiplier:1);this._x-=speed;const centerX=.5*this._width,position=this._x+(isCentered?centerX:0);let prevStaticX=0;for(let index=0;index<this._elements.length;index+=1){const element=this._elements[index],elementWidth=this._widths[index],x=wrap(-elementWidth,this._totalWidth-elementWidth,position+prevStaticX),y="relative"===element.style.position?"0":"-50%";element.style.transform=`translate(${x}px, ${y})`,prevStaticX+=elementWidth}this.callbacks.tbt("render",void 0)}_destroy(){var _a,_b;for(super._destroy(),null===(_a=this._raf)||void 0===_a||_a.destroy(),null===(_b=this._lastSetup)||void 0===_b||_b.call(this),this._resizeTimeout&&(clearTimeout(this._resizeTimeout),this._resizeTimeout=null);this._container.firstChild;)this._container.removeChild(this._container.firstChild);this._initialNodes.forEach((node=>this._container.appendChild(node)))}}},"../../common/temp/node_modules/.pnpm/vevet@4.0.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/listeners/onResize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>onResize});var _internal_getApp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");function onResize({onResize:handleResize,element,viewportTarget="any",hasBothEvents=!1,resizeDebounce=0}){let timeout,resizeObserver,viewportCallback,isFirstResizeObserverCallback=!0;const debounceResize=(props,delay)=>{timeout&&clearTimeout(timeout),timeout=setTimeout((()=>handleResize(null!=props?props:{trigger:"unknown"})),null!=delay?delay:resizeDebounce)};return element&&(element instanceof Element||Array.isArray(element))&&(resizeObserver=new ResizeObserver((()=>{isFirstResizeObserverCallback?isFirstResizeObserverCallback=!1:debounceResize({trigger:"ResizeObserver"},(0,_internal_getApp__WEBPACK_IMPORTED_MODULE_0__.M)().props.resizeDebounce+resizeDebounce)})),Array.isArray(element)?element.forEach((item=>null==resizeObserver?void 0:resizeObserver.observe(item))):resizeObserver.observe(element)),!hasBothEvents&&resizeObserver||(viewportCallback=(0,_internal_getApp__WEBPACK_IMPORTED_MODULE_0__.M)().viewport.callbacks.add(viewportTarget,(()=>debounceResize({trigger:"Viewport"})))),{remove:()=>{timeout&&clearTimeout(timeout),null==resizeObserver||resizeObserver.disconnect(),null==viewportCallback||viewportCallback.remove()},resize:()=>handleResize({trigger:"unknown"}),debounceResize:()=>debounceResize(),hasResizeObserver:!!resizeObserver}}}}]);