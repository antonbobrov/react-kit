/*! For license information please see components-PageScroll-PageScroll-stories.c122c483.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[797],{"./src/utils/prefixedClassName.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function prefixedClassName(className){return`rkc-${className}`}__webpack_require__.d(__webpack_exports__,{e:()=>prefixedClassName})},"./src/utils/prefixedClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>prefixedClasNames});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/utils/types/isString.js"),_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/prefixedClassName.ts");function prefixedClasNames(...classNames){return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNames.map((value=>(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.H)(value)?(0,_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__.e)(value):"")))}},"../react-hooks/lib/esm/utils/array/times.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function times(callback,count){for(var index=0,list=[];index<count;)list.push(callback(index)),index+=1;return list}__webpack_require__.d(__webpack_exports__,{D:()=>times})},"../react-hooks/lib/esm/utils/types/isString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isString(value){return"string"==typeof value}__webpack_require__.d(__webpack_exports__,{H:()=>isString})},"../react-hooks/lib/esm/utils/types/isUndefined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isUndefined(value){return void 0===value}__webpack_require__.d(__webpack_exports__,{o:()=>isUndefined})},"../vevet-init/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_j:()=>vevet});var vevet__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/app/Application.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},overrideProps="undefined"!=typeof window&&"vevetProps"in window?window.vevetProps:{},props=__assign(__assign({},{sayHi:!0,tablet:1199,phone:899,viewportResizeTimeout:30,easing:[.25,.1,.25,1],webpSupport:!0}),overrideProps),vevet="undefined"!=typeof window?new vevet__WEBPACK_IMPORTED_MODULE_0__.M(__assign(__assign({},props),{prefix:"v-"})):void 0},"./src/components/PageScroll/PageScroll.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PageScroll_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),times=__webpack_require__("../react-hooks/lib/esm/utils/array/times.js"),SmoothScroll=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/components/scroll/smooth-scroll/SmoothScroll.js"),esm=__webpack_require__("../vevet-init/lib/esm/index.js");function childOf(element,parent){return childOfCheck(element,parent)}function childOfCheck(el,parent){return el===parent||null!==el&&childOfCheck(el.parentNode,parent)}var Module=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/base/Module.js");class Plugin extends Module.Y{constructor(initialProp){super(initialProp,!1)}get component(){return this._component}init(){if(!this._component)throw new Error("Component is not set. Be sure that initlugin is called before.");super.init()}initPlugin(parent){this._inited||(this._component=parent,this.init())}}var timeoutCallback=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/common/timeoutCallback.js");class SmoothScrollKeyboardPlugin extends Plugin{_setEvents(){super._setEvents(),this.addEventListeners(window,"keydown",(e=>{this._handleKeydown(e)}))}_handleKeydown(e){const component=this._component;if(!component.prop.enabled)return;if(9===e.keyCode)return void this._handleTab();const{activeElement}=document;if(activeElement&&(activeElement instanceof HTMLInputElement||activeElement instanceof HTMLTextAreaElement))return;const{viewport}=this._app,bounding=component.outer.getBoundingClientRect();if(!(bounding.left<viewport.width&&bounding.right>0&&bounding.top<viewport.height&&bounding.bottom>0))return;switch(e.keyCode){case 38:component.targetTop-=40;break;case 40:component.targetTop+=40;break;case 39:component.targetLeft+=40;break;case 37:component.targetLeft-=40;break;case 34:component.targetTop+=400;break;case 33:component.targetTop-=400;break;case 36:component.targetTop=0,component.targetLeft=0;break;case 35:component.targetTop=component.scrollHeight,component.targetLeft=component.scrollWidth;break;case 32:component.targetTop+=200}}_handleTab(){(0,timeoutCallback.Z)((()=>{const scroll=this._component,{activeElement}=document;if(!(activeElement instanceof HTMLElement&&childOf(activeElement,scroll.outer)))return;const scrollOuterBounding=scroll.outer.getBoundingClientRect(),activeElementBounding=activeElement.getBoundingClientRect(),top=scroll.scrollTop+(activeElementBounding.top-scrollOuterBounding.top)-(scroll.clientHeight/2-activeElementBounding.height/2),left=scroll.scrollLeft+(activeElementBounding.left-scrollOuterBounding.left)-(scroll.clientWidth/2-activeElementBounding.width/2);scroll.targetTop=top,scroll.targetLeft=left}),120)}}var listeners=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/listeners.js"),selectOne=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/selectOne.js"),isElement=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isElement.js"),isWindow=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isWindow.js"),Component=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/base/Component.js");class Dragger extends Component.w{constructor(initialProp,init=!0){if(super(initialProp,!1),this._container=(0,selectOne.z)(this.prop.container),!(0,isElement.k)(this._container)&&!(0,isWindow.F)(this._container))throw new Error("No container");this._runtimeEvents=[],this._isDragging=!1,this._pointerID=null,this._coords={x:0,y:0},this._prevCoords={x:0,y:0},this._startCoords={x:0,y:0},init&&this.init()}_getDefaultProp(){return Object.assign(Object.assign({},super._getDefaultProp()),{container:`#${this.prefix}`,usePassive:!1,enabled:!0})}get prefix(){return`${this._app.prefix}dragger`}get container(){return this._container}get isDragging(){return this._isDragging}get coords(){return this._coords}get startCoords(){return this._startCoords}_setEvents(){const{container}=this,{usePassive}=this.prop;this.addEventListeners(container,"mousedown",this._handleStart.bind(this),{passive:usePassive}),this.addEventListeners(container,"touchstart",this._handleStart.bind(this),{passive:usePassive})}_addRuntimeEvents(){const{usePassive}=this.prop;this._runtimeEvents.push((0,listeners.O)(window,"mouseup",this._handleEnd.bind(this),{passive:usePassive})),this._runtimeEvents.push((0,listeners.O)(window,"touchend",this._handleEnd.bind(this),{passive:usePassive})),this._runtimeEvents.push((0,listeners.O)(window,"touchcancel",this.cancel.bind(this),{passive:usePassive})),this._runtimeEvents.push((0,listeners.O)(window,"blur",this.cancel.bind(this),{passive:usePassive}))}_removeRuntimeEvents(){this._runtimeEvents.forEach((event=>{event.remove()})),this._runtimeEvents=[]}_normalizeEvent(e){if(e.type.includes("touch")){const evt=e,touch=evt.targetTouches[0]||evt.changedTouches[0];return{x:touch.clientX,y:touch.clientY,id:touch.identifier}}const evt=e;return{x:evt.clientX,y:evt.clientY,id:null}}_handleStart(e){if(!this.prop.enabled)return!1;if(this.isDragging)return!1;const evt=this._normalizeEvent(e);if("mousedown"===e.type){if(1!==e.which)return!1;e.stopPropagation()}return this._isDragging=!0,this._pointerID=evt.id,this._coords={x:evt.x,y:evt.y},this._prevCoords={x:evt.x,y:evt.y},this._startCoords={x:evt.x,y:evt.y},this._addRuntimeEvents(),this.callbacks.tbt("start",{evt:e}),!0}_handleEnd(e){const evt=this._normalizeEvent(e);return!(!this.isDragging||evt.id!==this._pointerID)&&(this.cancel(),!0)}cancel(){this._removeRuntimeEvents(),this._isDragging=!1,this.callbacks.tbt("end",!1)}_destroy(){super._destroy(),this._removeRuntimeEvents()}}class DraggerMove extends Dragger{get stepCoords(){return{x:this._coords.x-this._prevCoords.x,y:this._coords.y-this._prevCoords.y}}_addRuntimeEvents(){super._addRuntimeEvents();const{usePassive}=this.prop;this._runtimeEvents.push((0,listeners.O)(window,"mousemove",this._handleMove.bind(this),{passive:usePassive})),this._runtimeEvents.push((0,listeners.O)(window,"touchmove",this._handleMove.bind(this),{passive:usePassive}))}_handleMove(e){const evt=this._normalizeEvent(e);return!(!this.isDragging||evt.id!==this._pointerID)&&(this._prevCoords={x:this._coords.x,y:this._coords.y},this._coords={x:evt.x,y:evt.y},this.callbacks.tbt("move",{evt:e,start:this.startCoords,coords:this.coords,step:this.stepCoords}),!0)}_destroy(){super._destroy()}}class SmoothScrollDragPlugin extends Plugin{constructor(initialProp){super(initialProp),this._dragger=void 0,this._componentEvents=[],this._currentLerp=!1}_getDefaultProp(){return Object.assign(Object.assign({},super._getDefaultProp()),{enabled:!0,speed:1,lerp:!1,reverseDir:!1,stopPropagation:!1})}get isDragging(){return!!this._dragger&&this._dragger.isDragging}_constructor(){super._constructor(),this._toggleDragger()}_onPropMutate(){super._onPropMutate(),this._toggleDragger()}_toggleDragger(){this.prop.enabled?this._addDragger():this._removeDragger()}_addDragger(){if(this._dragger)return;const{component}=this;this._dragger=new DraggerMove({container:component.outer}),this._dragger.addCallback("start",this._handleDragStart.bind(this)),this._dragger.addCallback("move",(data=>{this._handleDragMove(data)})),this._dragger.addCallback("end",this._handleDragEnd.bind(this)),this._componentEvents.push(component.addCallback("wheel",(()=>{var _a;null===(_a=this._dragger)||void 0===_a||_a.cancel()})))}_removeDragger(){this._dragger&&(this._dragger.destroy(),this._dragger=void 0,this._componentEvents.forEach((evt=>{evt.remove()})),this._componentEvents=[])}_handleDragStart(){const{component}=this;if(!component.prop.enabled)return;if(component.maxScrollableWidth<=0&&component.maxScrollableHeight<=0)return;const{lerp}=this.prop;"boolean"!=typeof lerp&&(this._currentLerp=component.prop.render.lerp,component.changeProp({render:{lerp}})),this._callbacks.tbt("start",!1)}_handleDragMove(data){const{component}=this;if(!component.prop.enabled)return;if(component.maxScrollableWidth<=0&&component.maxScrollableHeight<=0)return;const{evt}=data,{stopPropagation}=this.prop;if(stopPropagation){if(!evt.cancelable)return;const diffX=Math.abs(data.coords.x-data.start.x),diffY=Math.abs(data.coords.y-data.start.y);(diffX>stopPropagation.threshold&&"x"===stopPropagation.dir||diffY>stopPropagation.threshold&&"y"===stopPropagation.dir)&&evt.cancelable&&(evt.preventDefault(),evt.stopPropagation())}const{speed,reverseDir}=this.prop,x=data.step.x*speed,y=data.step.y*speed;component.targetLeft-=reverseDir?y:x,component.targetTop-=reverseDir?x:y,component.outer.classList.add("is-dragging"),component.container.classList.add("is-dragging"),this._callbacks.tbt("move",!1)}_handleDragEnd(){const{component}=this;component.outer.classList.remove("is-dragging"),component.container.classList.remove("is-dragging"),"boolean"!=typeof this._currentLerp&&(component.changeProp({render:{lerp:this._currentLerp}}),this._currentLerp=!1),this._callbacks.tbt("end",!1)}_destroy(){super._destroy(),this._removeDragger()}}var isUndefined=__webpack_require__("../react-hooks/lib/esm/utils/types/isUndefined.js"),use_deep_compare_effect_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/use-deep-compare-effect@1.8.1_react@18.2.0/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js"),prefixedClassNames=__webpack_require__("./src/utils/prefixedClassNames.ts");const PageScrollContext=(0,react.createContext)({});var jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Provider=({smoothProps,canBeSmooth:canBeSmoothProp,children})=>{const store=function usePageScrollProviderStore(){const[store,setStore]=(0,react.useState)({selector:void 0,setSelector:data=>{setStore((prevValue=>({...prevValue,selector:data})))},smoothContainer:void 0,setSmoothContainer:data=>{setStore((prevValue=>({...prevValue,smoothContainer:data})))}});return store}(),{selector,setSelector,smoothContainer}=store,[initialSmoothProps]=(0,react.useState)(smoothProps),htmlSmoothClassName=(0,prefixedClassNames.I)("page-scroll-use-smooth");return(0,react.useEffect)((()=>{const html=document.documentElement,isSmoothByProp=function isBoolean(value){return"boolean"==typeof value}(canBeSmoothProp)?canBeSmoothProp:canBeSmoothProp?.(),isSmoothByDefault=function canBeSmooth(){return!esm._j.isMobile}();if(!(isSmoothByProp??isSmoothByDefault)||!smoothContainer){const timeout=setTimeout((()=>{html.classList.remove(htmlSmoothClassName),setSelector?.(window)}),16);return()=>{setSelector?.(void 0),clearTimeout(timeout)}}html.classList.add(htmlSmoothClassName);const scroll=new SmoothScroll.X({selectors:{outer:smoothContainer},overscroll:!1,useWillChange:!esm._j.browserName.includes("firefox"),render:{lerp:.1,approximation:.5},enabled:!0,...initialSmoothProps});return setSelector?.(scroll),scroll.addPlugin(new SmoothScrollKeyboardPlugin),esm._j.isMobile&&scroll.addPlugin(new SmoothScrollDragPlugin({lerp:.35})),()=>{setSelector?.(void 0),scroll.destroy()}}),[canBeSmoothProp,htmlSmoothClassName,initialSmoothProps,setSelector,smoothContainer]),(0,react.useEffect)((()=>{selector&&selector instanceof SmoothScroll.X&&selector.changeProp({...smoothProps})}),[selector,(0,use_deep_compare_effect_esm.Uf)(smoothProps)]),(0,react.useEffect)((()=>{!(0,isUndefined.o)(selector)&&"resize"in selector&&selector.resize()}),[selector]),(0,jsx_runtime.jsx)(PageScrollContext.Provider,{value:store,children})};Provider.displayName="Provider";try{Provider.displayName="Provider",Provider.__docgenInfo={description:"PageScroll provider",displayName:"Provider",props:{smoothProps:{defaultValue:null,description:"Smooth scrolling properties",name:"smoothProps",required:!1,type:{name:"ChangeableProp"}},canBeSmooth:{defaultValue:null,description:"Define if global scrolling should be custom",name:"canBeSmooth",required:!1,type:{name:"boolean | (() => boolean)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PageScroll/Provider/index.tsx#Provider"]={docgenInfo:Provider.__docgenInfo,name:"Provider",path:"src/components/PageScroll/Provider/index.tsx#Provider"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const SmoothContainer=({children})=>{const ref=(0,react.useRef)(null),{selector,setSmoothContainer}=(0,react.useContext)(PageScrollContext),isSmooth=selector instanceof SmoothScroll.X;return(0,react.useEffect)((()=>(setSmoothContainer?.(ref.current),()=>setSmoothContainer?.(null))),[setSmoothContainer]),(0,jsx_runtime.jsx)("div",{className:classnames_default()((0,prefixedClassNames.I)("page-scroll-smooth-container",isSmooth&&"is-smooth")),children:(0,jsx_runtime.jsx)("div",{ref,className:"v-smooth-scroll",children:(0,jsx_runtime.jsx)("div",{className:"v-smooth-scroll__container",children})})})};SmoothContainer.displayName="SmoothContainer";try{SmoothContainer.displayName="SmoothContainer",SmoothContainer.__docgenInfo={description:"Smooth scrolling container.\nWrap your page with this component to enable smooth scrolling",displayName:"SmoothContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PageScroll/SmoothContainer/index.tsx#SmoothContainer"]={docgenInfo:SmoothContainer.__docgenInfo,name:"SmoothContainer",path:"src/components/PageScroll/SmoothContainer/index.tsx#SmoothContainer"})}catch(__react_docgen_typescript_loader_error){}var createElement=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/createElement.js"),onScroll=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/listeners/onScroll.js"),clamp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/math/clamp.js");class Bar{constructor(_prop){this._prop=_prop;const{prefix,dir,domParent,container,autoHide}=_prop;this._outerHeight=0,this._outerWidth=0,this._thumbHeight=0,this._thumbWidth=0,this._scrollVal=0,this._coordsAtDragStart={left:0,top:0},this._scrollEvent=void 0,this._actionTimeout=void 0,this._dragger=void 0;let outerClassNames=`${prefix} ${prefix}_${dir}`;container instanceof Window&&(outerClassNames+=" in-window"),this._outer=(0,createElement.a)("div",{parent:domParent,class:outerClassNames}),this._thumb=(0,createElement.a)("div",{parent:this._outer,class:`${prefix}__thumb ${prefix}__thumb_${dir}`}),autoHide&&this.outer.classList.add("auto-hide"),this._listeners=[],this._setEvents()}get outer(){return this._outer}get thumb(){return this._thumb}get prefix(){return this._prop.prefix}get isX(){return"x"===this.prop.dir}get isY(){return!this.isX}get scrollElement(){return this.prop.container instanceof Window?document.documentElement:this.prop.container}get scrollLine(){const{scrollElement}=this;return this.isX?scrollElement.scrollWidth-scrollElement.clientWidth:scrollElement.scrollHeight-scrollElement.clientHeight}get scrollWidth(){return this.scrollElement.scrollWidth}get scrollHeight(){return this.scrollElement.scrollHeight}get prop(){return this._prop}get scrollValues(){const{container}=this.prop;let top=0,left=0;return container instanceof Window?(top=container.pageYOffset,left=container.pageXOffset):container instanceof SmoothScroll.X?(top=container.targetTop,left=container.targetLeft):(top=container.scrollTop,left=container.scrollLeft),{left,top}}_setEvents(){this._listeners.push((0,listeners.O)(this.outer,"mouseenter",this._handleHover.bind(this,!0))),this._listeners.push((0,listeners.O)(this.outer,"mouseleave",this._handleHover.bind(this,!1))),this._scrollEvent=(0,onScroll.Z)({container:this.prop.container,callback:data=>{this._handleScroll(data)}}),this.prop.isDraggable&&(this._dragger=new DraggerMove({container:this.thumb}),this._dragger.addCallback("start",(()=>{this.thumb.classList.add("in-action"),this._disableScrollBehaviour(!0),this._coordsAtDragStart=this.scrollValues})),this._dragger.addCallback("move",(data=>{this._handleThumbDrag(data)})),this._dragger.addCallback("end",(()=>{this.thumb.classList.remove("in-action"),this._disableScrollBehaviour(!1)})))}_disableScrollBehaviour(bool){const val=bool?"auto":"unset";(this.prop.container instanceof Window||this.prop.container instanceof HTMLElement)&&(document.documentElement.style.scrollBehavior=val)}_handleHover(bool){this.outer.classList.toggle("is-hovered",bool)}_handleScroll(data){this.prop.optimizeCalculations||this.resize();let hasChanged=!1;this.isX?(hasChanged=data.scrollLeft!==this._scrollVal,this._scrollVal=data.scrollLeft):(hasChanged=data.scrollTop!==this._scrollVal,this._scrollVal=data.scrollTop),hasChanged&&(this.prop.autoHide&&hasChanged&&(this.outer.classList.add("in-action"),this._actionTimeout&&(clearTimeout(this._actionTimeout),this._actionTimeout=void 0),this._actionTimeout=setTimeout((()=>{this.outer.classList.remove("in-action")}),500)),this.prop.optimizeCalculations&&this._renderThumb())}_handleThumbDrag(data){data.evt.preventDefault();const{container}=this.prop,leftIterator=(data.coords.x-data.start.x)/(this._outerWidth-this._thumbWidth)*this.scrollLine,topIterator=(data.coords.y-data.start.y)/(this._outerHeight-this._thumbHeight)*this.scrollLine;let{left,top}=this._coordsAtDragStart;this.isX?left+=leftIterator:top+=topIterator,container.scrollTo({top,left,behavior:container instanceof SmoothScroll.X?this.prop.draggableScrollBehavior:"auto"})}_renderThumb(){const progress=(0,clamp.Z)(this._scrollVal/this.scrollLine,[0,1]),x=this.isX?(this._outerWidth-this._thumbWidth)*progress:0,y=this.isY?(this._outerHeight-this._thumbHeight)*progress:0;this._thumb.style.transform=`translate(${x}px, ${y}px)`}resize(){const{outer,thumb,scrollLine}=this,{minSize}=this.prop;if(this._outerHeight=outer.clientHeight,this._outerWidth=outer.clientWidth,this.prop.autoSize)if(this.isX){const barSize=(0,clamp.Z)(this._outerWidth/(this.scrollWidth/(this.scrollWidth-scrollLine)),[minSize,1/0]);thumb.style.width=`${barSize}px`}else{const barSize=(0,clamp.Z)(this._outerHeight/(this.scrollHeight/(this.scrollHeight-scrollLine)),[minSize,1/0]);thumb.style.height=`${barSize}px`}this._thumbHeight=thumb.clientHeight,this._thumbWidth=thumb.clientWidth,outer.classList.toggle("is-empty",0===scrollLine),this._renderThumb()}destroy(){this._listeners.forEach((listener=>{listener.remove()})),this._scrollEvent&&this._scrollEvent.remove(),this._actionTimeout&&clearTimeout(this._actionTimeout),this._dragger&&this._dragger.destroy(),this._outer.remove()}}class ScrollBar extends Component.w{constructor(initialProp,init=!0){super(initialProp,!1);const{autoHide,autoSize,minSize,optimizeCalculations,isDraggable,draggableScrollBehavior}=this.prop;if("string"==typeof this.prop.container){const el=(0,selectOne.z)(this.prop.container);if(!el)throw new Error("No scroll container");this._container=el}else this._container=this.prop.container;if(this.container instanceof Element){const{parentElement}=this.container;parentElement&&(this._scrollWrapper=(0,createElement.a)("div"),this._scrollWrapper.style.position="relative",this._scrollWrapper.style.display="inline-block",parentElement.insertBefore(this._scrollWrapper,this.container),this._scrollWrapper.appendChild(this.container),this._scrollWrapper.classList.add(`${this.prefix}-wrapper`))}const barMainProp={container:this.container,domParent:this.domParent,autoHide,autoSize,minSize,optimizeCalculations,prefix:this.prefix,isDraggable,draggableScrollBehavior};this._xBar=new Bar(Object.assign({dir:"x"},barMainProp)),this._yBar=new Bar(Object.assign({dir:"y"},barMainProp)),this.scrollableElement.classList.add(`${this.prefix}-parent`),init&&this.init()}_getDefaultProp(){return Object.assign(Object.assign({},super._getDefaultProp()),{container:window,domParent:!1,draggable:!0,autoSize:!0,autoHide:!0,minSize:50,optimizeCalculations:!1,resizeTimeout:0,isDraggable:!0,draggableScrollBehavior:"smooth"})}get prefix(){return`${this._app.prefix}scrollbar`}get container(){return this._container}get scrollableElement(){const{container}=this;return container instanceof Window?this._app.body:container instanceof Element?container:container.outer}get domParent(){const{domParent}=this.prop,{container}=this;return domParent||(this._scrollWrapper?this._scrollWrapper:container instanceof Window?this._app.body:container instanceof Element?container:container.outer)}_setEvents(){super._setEvents();const{container}=this;container instanceof SmoothScroll.X?container.addCallback("resize",(()=>{this.resize()}),{name:this.name}):this.addViewportCallback("",(()=>{this.resize()}),{timeout:this.prop.resizeTimeout}),this.resize()}_onPropMutate(){super._onPropMutate(),this.resize()}resize(){this._xBar.resize(),this._yBar.resize()}_destroy(){if(super._destroy(),this._xBar.destroy(),this._yBar.destroy(),this._scrollWrapper&&this.container instanceof Element){const{parentElement}=this._scrollWrapper;parentElement&&parentElement.insertBefore(this.container,this._scrollWrapper),this._scrollWrapper.remove()}this.scrollableElement.classList.remove(`${this.prefix}-parent`)}}const ScrollBar_ScrollBar=({children,resizeKey,isDisabled})=>{const[scrollbar,setScrollbar]=(0,react.useState)(),scrollSelector=function usePageScrollSelector(){const store=(0,react.useContext)(PageScrollContext),[selector,setSelector]=(0,react.useState)();return(0,react.useEffect)((()=>{const timeout=setTimeout((()=>setSelector(store.selector)),16);return()=>clearTimeout(timeout)}),[store.selector]),selector}();return(0,react.useEffect)((()=>{if(esm._j.isMobile||!scrollSelector||isDisabled)return;const instance=new ScrollBar({container:scrollSelector,domParent:document.body});setScrollbar(instance);const xBar=instance._xBar,yBar=instance._yBar;return xBar.outer.classList.add((0,prefixedClassNames.I)("page-scroll-scrollbar")),yBar.outer.classList.add((0,prefixedClassNames.I)("page-scroll-scrollbar")),esm._j.html.classList.add((0,prefixedClassNames.I)("page-scroll-scrollbar-parent")),esm._j.body.classList.add((0,prefixedClassNames.I)("page-scroll-scrollbar-parent")),()=>{instance.destroy(),esm._j.html.classList.remove((0,prefixedClassNames.I)("page-scroll-scrollbar-parent")),esm._j.body.classList.remove((0,prefixedClassNames.I)("page-scroll-scrollbar-parent"))}}),[scrollSelector,isDisabled]),(0,react.useEffect)((()=>{scrollbar?.destroyed||scrollbar?.resize()}),[resizeKey,scrollbar]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})};try{ScrollBar_ScrollBar.displayName="ScrollBar",ScrollBar_ScrollBar.__docgenInfo={description:"Custom scrollbar",displayName:"ScrollBar",props:{isDisabled:{defaultValue:null,description:"Do not use scrollbar",name:"isDisabled",required:!1,type:{name:"boolean"}},resizeKey:{defaultValue:null,description:"Change the key to update the scrollbar",name:"resizeKey",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PageScroll/ScrollBar/index.tsx#ScrollBar"]={docgenInfo:ScrollBar_ScrollBar.__docgenInfo,name:"ScrollBar",path:"src/components/PageScroll/ScrollBar/index.tsx#ScrollBar"})}catch(__react_docgen_typescript_loader_error){}Provider.displayName="PageScroll.Provider",SmoothContainer.displayName="PageScroll.SmoothContainer",ScrollBar_ScrollBar.displayName="PageScroll.ScrollBar";const PageScroll={Provider,SmoothContainer,ScrollBar:ScrollBar_ScrollBar},PageScroll_stories={title:"Scroll/PageScroll",component:PageScroll.Provider},Components=()=>(0,jsx_runtime.jsx)("div",{children:(0,times.D)((index=>(0,jsx_runtime.jsx)("div",{children:"Element"},index)),100)});Components.displayName="Components";const Template=props=>(0,jsx_runtime.jsx)(PageScroll.Provider,{...props,children:(0,jsx_runtime.jsx)(PageScroll.ScrollBar,{children:(0,jsx_runtime.jsx)(PageScroll.SmoothContainer,{children:(0,jsx_runtime.jsx)(Components,{})})})});Template.displayName="Template";const Default=Template.bind({});Default.args={smoothProps:{enabled:!0}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => <PageScroll.Provider {...props}>\r\n    <PageScroll.ScrollBar>\r\n      <PageScroll.SmoothContainer>\r\n        <Components />\r\n      </PageScroll.SmoothContainer>\r\n    </PageScroll.ScrollBar>\r\n  </PageScroll.Provider>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../common/temp/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>dequal});var has=Object.prototype.hasOwnProperty;function find(iter,tar,key){for(key of iter.keys())if(dequal(key,tar))return key}function dequal(foo,bar){var ctor,len,tmp;if(foo===bar)return!0;if(foo&&bar&&(ctor=foo.constructor)===bar.constructor){if(ctor===Date)return foo.getTime()===bar.getTime();if(ctor===RegExp)return foo.toString()===bar.toString();if(ctor===Array){if((len=foo.length)===bar.length)for(;len--&&dequal(foo[len],bar[len]););return-1===len}if(ctor===Set){if(foo.size!==bar.size)return!1;for(len of foo){if((tmp=len)&&"object"==typeof tmp&&!(tmp=find(bar,tmp)))return!1;if(!bar.has(tmp))return!1}return!0}if(ctor===Map){if(foo.size!==bar.size)return!1;for(len of foo){if((tmp=len[0])&&"object"==typeof tmp&&!(tmp=find(bar,tmp)))return!1;if(!dequal(len[1],bar.get(tmp)))return!1}return!0}if(ctor===ArrayBuffer)foo=new Uint8Array(foo),bar=new Uint8Array(bar);else if(ctor===DataView){if((len=foo.byteLength)===bar.byteLength)for(;len--&&foo.getInt8(len)===bar.getInt8(len););return-1===len}if(ArrayBuffer.isView(foo)){if((len=foo.byteLength)===bar.byteLength)for(;len--&&foo[len]===bar[len];);return-1===len}if(!ctor||"object"==typeof foo){for(ctor in len=0,foo){if(has.call(foo,ctor)&&++len&&!has.call(bar,ctor))return!1;if(!(ctor in bar)||!dequal(foo[ctor],bar[ctor]))return!1}return Object.keys(bar).length===len}}return foo!=foo&&bar!=bar}},"../../common/temp/node_modules/.pnpm/use-deep-compare-effect@1.8.1_react@18.2.0/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Uf:()=>useDeepCompareMemoize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),dequal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs");function useDeepCompareMemoize(value){var ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value),signalRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);return(0,dequal__WEBPACK_IMPORTED_MODULE_1__.J)(value,ref.current)||(ref.current=value,signalRef.current+=1),react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return ref.current}),[signalRef.current])}},"../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/utils/math/clamp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function clamp(val,scope=[0,1]){return val<scope[0]?scope[0]:val>scope[1]?scope[1]:val}__webpack_require__.d(__webpack_exports__,{Z:()=>clamp})}}]);