/*! For license information please see 301.945a786a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[301],{"../../common/temp/node_modules/.pnpm/normalize-wheel@1.0.1/node_modules/normalize-wheel/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../common/temp/node_modules/.pnpm/normalize-wheel@1.0.1/node_modules/normalize-wheel/src/normalizeWheel.js")},"../../common/temp/node_modules/.pnpm/normalize-wheel@1.0.1/node_modules/normalize-wheel/src/ExecutionEnvironment.js":module=>{"use strict";var canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),ExecutionEnvironment={canUseDOM,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:canUseDOM&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:canUseDOM&&!!window.screen,isInWorker:!canUseDOM};module.exports=ExecutionEnvironment},"../../common/temp/node_modules/.pnpm/normalize-wheel@1.0.1/node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js":module=>{var _ie,_firefox,_opera,_webkit,_chrome,_ie_real_version,_osx,_windows,_linux,_android,_win64,_iphone,_ipad,_native,_mobile,_populated=!1;function _populate(){if(!_populated){_populated=!0;var uas=navigator.userAgent,agent=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas),os=/(Mac OS X)|(Windows)|(Linux)/.exec(uas);if(_iphone=/\b(iPhone|iP[ao]d)/.exec(uas),_ipad=/\b(iP[ao]d)/.exec(uas),_android=/Android/i.exec(uas),_native=/FBAN\/\w+;/i.exec(uas),_mobile=/Mobile/i.exec(uas),_win64=!!/Win64/.exec(uas),agent){(_ie=agent[1]?parseFloat(agent[1]):agent[5]?parseFloat(agent[5]):NaN)&&document&&document.documentMode&&(_ie=document.documentMode);var trident=/(?:Trident\/(\d+.\d+))/.exec(uas);_ie_real_version=trident?parseFloat(trident[1])+4:_ie,_firefox=agent[2]?parseFloat(agent[2]):NaN,_opera=agent[3]?parseFloat(agent[3]):NaN,(_webkit=agent[4]?parseFloat(agent[4]):NaN)?(agent=/(?:Chrome\/(\d+\.\d+))/.exec(uas),_chrome=agent&&agent[1]?parseFloat(agent[1]):NaN):_chrome=NaN}else _ie=_firefox=_opera=_chrome=_webkit=NaN;if(os){if(os[1]){var ver=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);_osx=!ver||parseFloat(ver[1].replace("_","."))}else _osx=!1;_windows=!!os[2],_linux=!!os[3]}else _osx=_windows=_linux=!1}}var UserAgent_DEPRECATED={ie:function(){return _populate()||_ie},ieCompatibilityMode:function(){return _populate()||_ie_real_version>_ie},ie64:function(){return UserAgent_DEPRECATED.ie()&&_win64},firefox:function(){return _populate()||_firefox},opera:function(){return _populate()||_opera},webkit:function(){return _populate()||_webkit},safari:function(){return UserAgent_DEPRECATED.webkit()},chrome:function(){return _populate()||_chrome},windows:function(){return _populate()||_windows},osx:function(){return _populate()||_osx},linux:function(){return _populate()||_linux},iphone:function(){return _populate()||_iphone},mobile:function(){return _populate()||_iphone||_ipad||_android||_mobile},nativeApp:function(){return _populate()||_native},android:function(){return _populate()||_android},ipad:function(){return _populate()||_ipad}};module.exports=UserAgent_DEPRECATED},"../../common/temp/node_modules/.pnpm/normalize-wheel@1.0.1/node_modules/normalize-wheel/src/isEventSupported.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var useHasFeature,ExecutionEnvironment=__webpack_require__("../../common/temp/node_modules/.pnpm/normalize-wheel@1.0.1/node_modules/normalize-wheel/src/ExecutionEnvironment.js");ExecutionEnvironment.canUseDOM&&(useHasFeature=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("","")),module.exports=function isEventSupported(eventNameSuffix,capture){if(!ExecutionEnvironment.canUseDOM||capture&&!("addEventListener"in document))return!1;var eventName="on"+eventNameSuffix,isSupported=eventName in document;if(!isSupported){var element=document.createElement("div");element.setAttribute(eventName,"return;"),isSupported="function"==typeof element[eventName]}return!isSupported&&useHasFeature&&"wheel"===eventNameSuffix&&(isSupported=document.implementation.hasFeature("Events.wheel","3.0")),isSupported}},"../../common/temp/node_modules/.pnpm/normalize-wheel@1.0.1/node_modules/normalize-wheel/src/normalizeWheel.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var UserAgent_DEPRECATED=__webpack_require__("../../common/temp/node_modules/.pnpm/normalize-wheel@1.0.1/node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js"),isEventSupported=__webpack_require__("../../common/temp/node_modules/.pnpm/normalize-wheel@1.0.1/node_modules/normalize-wheel/src/isEventSupported.js");function normalizeWheel(event){var sX=0,sY=0,pX=0,pY=0;return"detail"in event&&(sY=event.detail),"wheelDelta"in event&&(sY=-event.wheelDelta/120),"wheelDeltaY"in event&&(sY=-event.wheelDeltaY/120),"wheelDeltaX"in event&&(sX=-event.wheelDeltaX/120),"axis"in event&&event.axis===event.HORIZONTAL_AXIS&&(sX=sY,sY=0),pX=10*sX,pY=10*sY,"deltaY"in event&&(pY=event.deltaY),"deltaX"in event&&(pX=event.deltaX),(pX||pY)&&event.deltaMode&&(1==event.deltaMode?(pX*=40,pY*=40):(pX*=800,pY*=800)),pX&&!sX&&(sX=pX<1?-1:1),pY&&!sY&&(sY=pY<1?-1:1),{spinX:sX,spinY:sY,pixelX:pX,pixelY:pY}}normalizeWheel.getEventType=function(){return UserAgent_DEPRECATED.firefox()?"DOMMouseScroll":isEventSupported("wheel")?"wheel":"mousewheel"},module.exports=normalizeWheel},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/createElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function setElClass(e,classNames,action){const names=classNames.split(" ");for(let i=0;i<names.length;i++)void 0===action?e.classList.toggle(names[i]):action?e.classList.add(names[i]):e.classList.remove(names[i])}function createElement(selector,prop={}){const el=document.createElement(selector);if(prop.class&&function addClass(el,classNames){if(el instanceof Element)setElClass(el,classNames,!0);else for(let i=0;i<el.length;i++)setElClass(el[i],classNames,!0)}(el,prop.class),prop.id&&el.setAttribute("id",prop.id),prop.attr)for(let i=0,l=prop.attr.length;i<l;i++){const attrInfo=prop.attr[i];el.setAttribute(attrInfo[0],attrInfo[1])}if(prop.parent&&prop.parent.appendChild(el),prop.html&&(el.innerHTML=prop.html),prop.children)for(let i=0,l=prop.children.length;i<l;i++)el.appendChild(prop.children[i]);return el}__webpack_require__.d(__webpack_exports__,{a:()=>createElement})},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isElement(el){return el instanceof HTMLElement||el instanceof Element}__webpack_require__.d(__webpack_exports__,{k:()=>isElement})},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isWindow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isWindow(el){return el instanceof Window}__webpack_require__.d(__webpack_exports__,{F:()=>isWindow})},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/selectOne.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>selectOne});var _isElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isElement.js"),_isWindow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isWindow.js");function selectOne(selector,parent){if((0,_isWindow__WEBPACK_IMPORTED_MODULE_0__.F)(selector))return selector;if((0,_isElement__WEBPACK_IMPORTED_MODULE_1__.k)(selector))return selector;if(void 0!==parent){const parenEl=selectOne(parent);if(parenEl)return parenEl.querySelector(selector)}return document.querySelector(selector)}},"../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/components/animation-frame/AnimationFrame.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>AnimationFrame});var _base_Component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/base/Component.js"),_utils_math__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/math/clamp.js");class AnimationFrame extends _base_Component__WEBPACK_IMPORTED_MODULE_0__.w{constructor(initialProp,init=!0){super(initialProp,!1),this._isPlaying=!1,this._frame=null,this._frameIndex=-1,this._timeStamp=null,this._prevFrameTime=null,init&&this.init()}get isPlaying(){return this._isPlaying}_getDefaultProp(){return Object.assign(Object.assign({},super._getDefaultProp()),{fps:140,run:!1})}_constructor(){super._constructor(),this._create()}_create(){this.prop.run&&this.play()}_onPropMutate(){this._frameIndex=-1,this._timeStamp=null,this._prevFrameTime=null,this.prop.run?this._play():this._pause()}play(){this.destroyed||this.prop.run||this.changeProp({run:!0})}_play(){this.isPlaying||(this._isPlaying=!0,this._frame=window.requestAnimationFrame(this._animate.bind(this)))}pause(){this.prop.run&&this.changeProp({run:!1})}_pause(){this.isPlaying&&(this._frame&&(window.cancelAnimationFrame(this._frame),this._frame=null),this._isPlaying=!1)}_animate(timestamp){if(!this._isPlaying)return;this._frame=window.requestAnimationFrame(this._animate.bind(this));const currentTime=+new Date;null==this._timeStamp&&(this._timeStamp=timestamp),null==this._prevFrameTime&&(this._prevFrameTime=currentTime);const newFrameIndex=Math.floor((timestamp-this._timeStamp)/(1e3/this.prop.fps));if(newFrameIndex<=this._frameIndex)return;this._frameIndex=newFrameIndex;const timeDiff=currentTime-this._prevFrameTime,realFPS=(0,_utils_math__WEBPACK_IMPORTED_MODULE_1__.Z)(0===timeDiff?1e3/60:Math.floor(1e3/timeDiff),[1,1/0]);this.callbacks.tbt("frame",{fps:this.prop.fps,realFPS,prevFrameDuration:currentTime-this._prevFrameTime}),this._prevFrameTime=+new Date}_destroy(){this.pause(),super._destroy()}}},"../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/components/scroll/smooth-scroll/SmoothScroll.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>SmoothScroll});var selectOne=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/selectOne.js"),isElement=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isElement.js"),createElement=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/createElement.js");var normalize_wheel=__webpack_require__("../../common/temp/node_modules/.pnpm/normalize-wheel@1.0.1/node_modules/normalize-wheel/index.js"),normalize_wheel_default=__webpack_require__.n(normalize_wheel),Component=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/base/Component.js"),AnimationFrame=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/components/animation-frame/AnimationFrame.js"),clamp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/math/clamp.js"),lerp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/math/lerp.js");class SmoothScroll extends Component.w{constructor(initialProp,init=!0){super(initialProp,!1);const{selectors}=this.prop;if(this._targetLeft=0,this._targetTop=0,this._scrollLeft=0,this._scrollTop=0,this._scrollWidth=0,this._scrollHeight=0,this._clientWidth=0,this._clientHeight=0,this._instant=!1,this._animationFrame=void 0,this._outerAnimationFrameEvent=void 0,this._currentFPS=60,this._outer=(0,selectOne.z)(selectors.outer),!(this._outer instanceof HTMLElement))throw new Error(`${selectors.outer} is not a HTMLElement`);this._outer.classList.add(this.prefix);const existingContainer=(0,selectOne.z)(`.${this.prefix}__container`,this.outer);(0,isElement.k)(existingContainer)?(this._container=existingContainer,this._containerExists=!0):(this._container=(0,createElement.a)("div",{class:`${this.prefix}__container`,parent:this.outer,children:Array.from(this.outer.children)}),this._containerExists=!1),selectors.elements?this._elements=Array.from(function selectAll(selector,parent){if(selector instanceof NodeList)return selector;if((0,isElement.k)(selector))return[selector];if(Array.isArray(selector))return selector;if(void 0!==parent){const parenEl=(0,selectOne.z)(parent);if(parenEl)return parenEl.querySelectorAll(selector)}return document.querySelectorAll(selector)}(selectors.elements,this._outer)):this._elements=[this._container],this._elementsLength=this._elements.length,this.prop.useWillChange&&this._elements.forEach((el=>{el.style.willChange="transform"})),init&&this.init()}get prefix(){return`${this._app.prefix}smooth-scroll`}get outer(){return this._outer}get container(){return this._container}get elements(){return this._elements}get targetLeft(){return this._targetLeft}set targetLeft(val){this.targetLeftBound=val,this._enable()}set targetLeftBound(val){const min=this.prop.overscroll&&this.prop.isHorizontal?-this.prop.overscroll.max:0,max=this.maxScrollableWidth+(this.prop.overscroll&&this.prop.isHorizontal?this.prop.overscroll.max:0);this._targetLeft=(0,clamp.Z)(val,[min,max])}get targetLeftBound(){return this._targetLeft}get targetTop(){return this._targetTop}set targetTop(val){this.targetTopBound=val,this._enable()}set targetTopBound(val){const min=this.prop.overscroll&&!this.prop.isHorizontal?-this.prop.overscroll.max:0,max=this.maxScrollableHeight+(this.prop.overscroll&&!this.prop.isHorizontal?this.prop.overscroll.max:0);this._targetTop=(0,clamp.Z)(val,[min,max])}get targetTopBound(){return this._targetTop}get scrollLeft(){return this._scrollLeft}set scrollLeft(val){this.targetLeftBound=val,this._scrollLeft=this._targetLeft,this._enable()}get scrollTop(){return this._scrollTop}set scrollTop(val){this.targetTopBound=val,this._scrollTop=this._targetTop,this._enable()}get scrollWidth(){return this._scrollWidth}get scrollHeight(){return this._scrollHeight}get clientWidth(){return this._clientWidth}get clientHeight(){return this._clientHeight}get maxScrollableWidth(){return this.scrollWidth-this.clientWidth}get maxScrollableHeight(){return this.scrollHeight-this.clientHeight}_getDefaultProp(){return Object.assign(Object.assign({},super._getDefaultProp()),{selectors:{outer:`#${this.prefix}`,elements:!1},enabled:!0,animationFrame:!1,recalculateSizes:!0,resizeTimeout:0,useWheel:!0,autoStop:!0,isHorizontal:!1,stopPropagation:!0,useWillChange:!0,render:{lerp:.1,lerpToFixed:2,approximation:.1,normalizeLerp:!1},overscroll:{friction:.5,max:250}})}_constructor(){super._constructor(),this._toggle()}_setEvents(){this.resize(),this.addViewportCallback("",(()=>{this.resize(!0)}),{timeout:this.prop.resizeTimeout}),this.addEventListeners(this.outer,"wheel",(e=>{this._handleWheel(e)})),this.addEventListeners(this.outer,"scroll",(()=>{this.outer.scrollTop=0,this.outer.scrollLeft=0}))}_onPropMutate(){super._onPropMutate(),this.resize(),this._toggle()}resize(native=!1){const{container,outer}=this;this._clientWidth=outer.clientWidth,this._clientHeight=outer.clientHeight,this._scrollWidth=(0,clamp.Z)(container.clientWidth,[this.clientWidth,1/0]),this._scrollHeight=(0,clamp.Z)(container.clientHeight,[this.clientHeight,1/0]),native&&(this._instant=!0),native&&(this.targetLeft=parseInt(this.targetLeft.toFixed(0),10),this.targetTop=parseInt(this.targetTop.toFixed(0),10));const hasScroll=this.maxScrollableHeight>0||this.maxScrollableWidth>0;outer.classList.toggle("has-scroll",hasScroll),outer.classList.toggle("no-scroll",!hasScroll),this._updateElementsProp(),this.callbacks.tbt("resize",!1)}_recalculateSizes(){const{container}=this,height=container.clientHeight,width=container.clientWidth;height===this.scrollHeight&&width===this.scrollWidth||this.resize()}_updateElementsProp(){for(let index=0;index<this._elementsLength;index+=1){const el=this._elements[index];el.smoothScrollLeft=this.scrollLeft,el.smoothScrollTop=this.scrollTop;const easingAttr=el.getAttribute(`${this.prefix}-ease`);if(easingAttr)try{el.smoothScrollLerpEase=parseFloat(easingAttr)}catch(e){}}}_handleWheel(evt){const{prop}=this;if(!prop.enabled||!prop.useWheel)return;(prop.stopPropagation||!prop.stopPropagation&&(this.scrollLeft>0&&this.scrollLeft<this.maxScrollableWidth||this.scrollTop>0&&this.scrollTop<this.maxScrollableHeight))&&(evt.stopImmediatePropagation(),evt.stopPropagation(),evt.preventDefault());const delta=normalize_wheel_default()(evt);this.targetLeftBound+=prop.isHorizontal?delta.pixelY:delta.pixelX,this.targetTopBound+=prop.isHorizontal?delta.pixelX:delta.pixelY,this._enable(),this.callbacks.tbt("wheel",evt)}_toggle(){this.prop.enabled?this._enable():this._disable()}_enable(){this.prop.enabled&&(this.prop.animationFrame&&!this._outerAnimationFrameEvent?this._outerAnimationFrameEvent=this.prop.animationFrame.addCallback("frame",(data=>{this._currentFPS=data.realFPS,this.render()})):(this._animationFrame||(this._animationFrame=new AnimationFrame.$,this._animationFrame.addCallback("frame",(data=>{this._currentFPS=data.realFPS,this.render()}))),this._animationFrame.play()))}_disable(){this._outerAnimationFrameEvent&&this.prop.animationFrame&&this._outerAnimationFrameEvent.remove(),this._animationFrame&&this._animationFrame.pause()}render(){const{prop}=this;prop.recalculateSizes&&this._recalculateSizes(),this._calcScroll(),this._calcElements(),this._renderElements(),this._instant&&(this._instant=!1),this.callbacks.tbt("scroll",!1);const yDiff=Math.abs(this.targetTop-this.scrollTop);0===Math.abs(this.targetLeft-this.scrollLeft)&&0===yDiff&&prop.autoStop&&(this._disable(),this.callbacks.tbt("approximate",!1))}_calcScroll(){const{overscroll}=this.prop;overscroll&&(this.targetLeft<0?this.targetLeftBound=this._lerp(this.targetLeftBound,0,overscroll.friction):this.targetLeft>this.maxScrollableWidth&&(this.targetLeftBound=this._lerp(this.targetLeftBound,this.maxScrollableWidth,overscroll.friction)),this.targetTop<0?this.targetTopBound=this._lerp(this.targetTopBound,0,overscroll.friction):this.targetTop>this.maxScrollableHeight&&(this.targetTopBound=this._lerp(this.targetTopBound,this.maxScrollableHeight,overscroll.friction))),this._scrollLeft=this._lerp(this.scrollLeft,this.targetLeft),this._scrollTop=this._lerp(this.scrollTop,this.targetTop)}_calcElements(){const globalEase=this._getLerpEase();for(let index=0;index<this._elementsLength;index+=1){const el=this._elements[index],elEase=this._getLerpEase(el);elEase===globalEase?(el.smoothScrollLeft=this._scrollLeft,el.smoothScrollTop=this._scrollTop):(el.smoothScrollLeft=this._lerp(el.smoothScrollLeft,this._targetLeft,elEase),el.smoothScrollTop=this._lerp(el.smoothScrollTop,this._targetTop,elEase))}}_lerp(current,target,ease=this._getLerpEase()){const{lerpToFixed,approximation}=this.prop.render,currentEase=this._instant?1:ease,val=(0,lerp.Z)(current,target,currentEase,approximation);if("number"==typeof lerpToFixed){const fixed=Math.round(Math.abs(lerpToFixed));return parseFloat(val.toFixed(fixed))}return val}_getLerpEase(el=!1){const{lerp:lerpEase,normalizeLerp}=this.prop.render,fpsMultiplier=normalizeLerp?60/this._currentFPS:1;return el&&el.smoothScrollLerpEase||lerpEase*fpsMultiplier}_renderElements(){for(let index=0;index<this._elementsLength;index+=1){const el=this._elements[index],x=-el.smoothScrollLeft,y=-el.smoothScrollTop;el.style.transform=`matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0, ${x}, ${y}, 0,1)`}}scrollTo(){const arg=arguments;if(1===arg.length&&"object"==typeof arg[0]){const options=arg[0],{top,left,behavior}=options;void 0!==left&&("smooth"===behavior?this.targetLeftBound=left:this.scrollLeft=left),void 0!==top&&("smooth"===behavior?this.targetTopBound=top:this.scrollTop=top),"smooth"===behavior&&this._enable()}"number"!=typeof arg[0]&&"number"!=typeof arg[1]||("number"==typeof arg[0]&&(this.scrollLeft=arg[0]),"number"==typeof arg[1]&&(this.scrollTop=arg[1]))}_destroy(){if(super._destroy(),this._disable(),this._animationFrame&&this._animationFrame.destroy(),!this._containerExists){for(;this._container.firstChild;)this._outer.appendChild(this._container.firstChild);this._container.remove()}this._outer.classList.remove(this.prefix),this._elements.forEach((el=>{el.style.transform="",el.style.willChange=""}))}}},"../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/listeners/onScroll.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>onScroll});var vevet_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/selectOne.js"),vevet_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/listeners.js"),_components_scroll_smooth_scroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/components/scroll/smooth-scroll/SmoothScroll.js"),_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/common/id.js");let instances=[];function onScroll({container,callback,isPassive=!1}){let instance=instances.find((data=>data.container===container&&data.isPassive===isPassive));const callbackId=(0,_common__WEBPACK_IMPORTED_MODULE_0__.Z)("scroll-event");if(instance)instance.callbacks.push({id:callbackId,callback});else{instance={id:(0,_common__WEBPACK_IMPORTED_MODULE_0__.Z)("scroll-event-instance"),container,callbacks:[{id:callbackId,callback}],isPassive,listeners:[]},instances.push(instance);const{listeners}=instance;if(container instanceof _components_scroll_smooth_scroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_1__.X)listeners.push(container.addCallback("scroll",(()=>{const{scrollTop,scrollLeft}=container;for(let index=0;index<instance.callbacks.length;index+=1)instance.callbacks[index].callback({scrollTop,scrollLeft})})));else{const isWindow=container instanceof Window,domContainer=(0,vevet_dom__WEBPACK_IMPORTED_MODULE_2__.z)(container);listeners.push((0,vevet_dom__WEBPACK_IMPORTED_MODULE_3__.O)(domContainer,"scroll",(()=>{const scrollTop=isWindow?domContainer.pageYOffset:domContainer.scrollTop,scrollLeft=isWindow?domContainer.pageXOffset:domContainer.scrollLeft;for(let index=0;index<instance.callbacks.length;index+=1)instance.callbacks[index].callback({scrollTop,scrollLeft})}),{passive:isPassive}))}}return{remove:()=>{const newCallbacks=instance.callbacks.filter((item=>item.id!==callbackId));instance.callbacks=newCallbacks,0===newCallbacks.length&&(instance.listeners.forEach((listener=>{listener.remove()})),instances=instances.filter((item=>item.id!==instance.id)))}}}},"../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/math/lerp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function lerp(current,target,ease,approximationLeft=.001){const val=current*(1-ease)+target*ease;return Math.abs(target-val)<=approximationLeft?target:val}__webpack_require__.d(__webpack_exports__,{Z:()=>lerp})}}]);