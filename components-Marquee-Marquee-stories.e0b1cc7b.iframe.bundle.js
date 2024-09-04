"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[468],{"./src/utils/prefixedClassName.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function prefixedClassName(className){return`rkc-${className}`}__webpack_require__.d(__webpack_exports__,{e:()=>prefixedClassName})},"./src/utils/prefixedClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>prefixedClasNames});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/utils/types/isString.js"),_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/prefixedClassName.ts");function prefixedClasNames(...classNames){return classnames__WEBPACK_IMPORTED_MODULE_0___default()(classNames.map((value=>(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_1__.H)(value)?(0,_prefixedClassName__WEBPACK_IMPORTED_MODULE_2__.e)(value):"")))}},"../react-hooks/lib/esm/hooks/useEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},useEvent=function(callback){var callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return null===(_a=callbackRef.current)||void 0===_a?void 0:_a.call.apply(_a,__spreadArray([callbackRef],args,!1))}),[])}},"../react-hooks/lib/esm/hooks/useForwardedRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useForwardedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useForwardedRef(forwardedRef){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,(function(){return ref.current})),ref}},"../react-hooks/lib/esm/hooks/useOnInViewport.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>useOnInViewport});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),usePropState=__webpack_require__("../react-hooks/lib/esm/hooks/usePropState.js"),getHookEventElement=__webpack_require__("../react-hooks/lib/esm/utils/internal/getHookEventElement.js");var instances=[];function useIntersectionObserver(_a){var ref=_a.ref,onEntryProp=_a.onEntry,onFallbackProp=_a.onFallback,_b=_a.root,root=void 0===_b?null:_b,_c=_a.threshold,threshold=void 0===_c?0:_c,_d=_a.rootMargin,rootMargin=void 0===_d?"0px 0px 0px 0px":_d,isDisabled=_a.isDisabled,id=(0,react.useId)(),onEntry=(0,useEvent.z)(onEntryProp),onFallback=(0,useEvent.z)(onFallbackProp),getObserverInstance=(0,react.useCallback)((function(){return instances.find((function(data){return data.root===root&&data.threshold===threshold&&data.rootMargin===rootMargin}))}),[root,rootMargin,threshold]);(0,react.useEffect)((function(){if(!isDisabled)if(function isIntersectionObserverSupported(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}()){var element=(0,getHookEventElement.I)(ref);if(element){var instance=getObserverInstance();return instance||(instance={observer:new IntersectionObserver((function(entries){return entries.forEach((function(entry){null==instance||instance.elements.forEach((function(item){item.element===entry.target&&item.onEntry(entry)}))}))}),{root,threshold,rootMargin}),root,threshold,rootMargin,elements:[]},instances.push(instance)),instance.elements.push({id,element,onEntry}),instance.observer.observe(element),function(){instance&&(instance.elements=instance.elements.filter((function(item){return item.id!==id})),instance.elements.find((function(item){return item.element===element}))||instance.observer.unobserve(element),0===instance.elements.length&&(instances.splice(instances.indexOf(instance),1),instance.observer.disconnect()))}}}else null==onFallback||onFallback()}),[getObserverInstance,id,isDisabled,onEntry,onFallback,ref,root,rootMargin,threshold])}var __assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function useOnInViewport(_a){var ref=_a.ref,onInProp=_a.onIn,onOutProp=_a.onOut,onFallback=_a.onFallback,destroyOnIn=_a.destroyOnIn,isDisabledProp=_a.isDisabled,props=__rest(_a,["ref","onIn","onOut","onFallback","destroyOnIn","isDisabled"]),onIn=(0,useEvent.z)(onInProp),onOut=(0,useEvent.z)(onOutProp),_b=(0,react.useState)(),state=_b[0],setState=_b[1],_c=(0,usePropState.W)(isDisabledProp),isDisabled=_c[0],setIsDisabled=_c[1];return(0,react.useEffect)((function(){"in"===state&&destroyOnIn&&setIsDisabled(!0)}),[destroyOnIn,setIsDisabled,state]),useIntersectionObserver(__assign(__assign({},props),{ref,onFallback:function(){setState("in"),null==onFallback||onFallback()},onEntry:function(entry){entry.isIntersecting?(setState("in"),null==onIn||onIn()):(setState("out"),null==onOut||onOut())},isDisabled})),{state}}},"../react-hooks/lib/esm/hooks/usePropState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>usePropState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function usePropState(prop){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prop),state=_a[0],setState=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setState(prop)}),[prop]),[state,setState]}},"../react-hooks/lib/esm/utils/internal/getHookEventElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getHookEventElement(ref){return ref&&"current"in ref?ref.current:ref}__webpack_require__.d(__webpack_exports__,{I:()=>getHookEventElement})},"../react-hooks/lib/esm/utils/types/isString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isString(value){return"string"==typeof value}__webpack_require__.d(__webpack_exports__,{H:()=>isString})},"../vevet-init/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{vevet:()=>vevet});var vevet__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.16.0_typescript@4.8.2/node_modules/vevet/lib/esm/Application/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},overrideProps="undefined"!=typeof window&&"vevetProps"in window?window.vevetProps:{},props=__assign(__assign({},{tablet:1199,phone:899,resizeDebounce:30,easing:[.25,.1,.25,1],shouldCheckWebpSupport:!0,widthDetection:"boundingRect"}),overrideProps),vevet="undefined"!=typeof window?new vevet__WEBPACK_IMPORTED_MODULE_0__.M(__assign(__assign({},props),{prefix:"v-"})):void 0},"./src/components/Marquee/Marquee.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithReverseSpeed:()=>WithReverseSpeed,WithSeparator:()=>WithSeparator,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Marquee_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),usePropState=__webpack_require__("../react-hooks/lib/esm/hooks/usePropState.js"),useForwardedRef=__webpack_require__("../react-hooks/lib/esm/hooks/useForwardedRef.js"),useOnInViewport=__webpack_require__("../react-hooks/lib/esm/hooks/useOnInViewport.js"),use_deep_compare_effect_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/use-deep-compare-effect@1.8.1_react@18.2.0/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js"),isString=__webpack_require__("../react-hooks/lib/esm/utils/types/isString.js"),classnames=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),esm=__webpack_require__("../vevet-init/lib/esm/index.js"),selectOne=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/selectOne.js"),Component=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.16.0_typescript@4.8.2/node_modules/vevet/lib/esm/base/Component/index.js");function wrap(min,max,value){const range=max-min;return function conditionalReturn(value,func){return value||0===value?func(value):func}(value,(val=>(range+(val-min)%range)%range+min))}var onResize=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.16.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/listeners/onResize.js"),AnimationFrame=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.16.0_typescript@4.8.2/node_modules/vevet/lib/esm/components/AnimationFrame/index.js"),getApp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.16.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");class Marquee extends Component.w{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{container:`#${this.prefix}`,viewportTarget:"width",resizeDebounce:0,speed:1,isEnabled:!0,pauseOnHover:!1,prependWhitespace:!0,isFpsNormalized:!0})}get prefix(){return`${(0,getApp.M)().prefix}marquee`}get container(){return this._container}constructor(initialProps,canInit=!0){if(super(initialProps,!1),this._container=(0,selectOne.z)(this.props.container),!(this._container instanceof HTMLElement))throw new Error("No container");this.toggleClassName(this._container,this.className(""),!0),this._initialHTML=this._container.innerHTML,this._quantity=0,this._items=[],this._itemWidth=0,this._xCoord=0,this._canPlay=!0,this.resize(),canInit&&this.init()}_init(){super._init(),this._setEvents()}_onPropsMutate(){var _a,_b;super._onPropsMutate(),this.props.isEnabled?null===(_a=this._animationFrame)||void 0===_a||_a.play():null===(_b=this._animationFrame)||void 0===_b||_b.pause()}_setEvents(){const{container,props}=this,{viewportTarget,resizeDebounce}=props;this._animationFrame=new AnimationFrame.$,this._animationFrame.addCallback("frame",(()=>this._render())),this.addDestroyableAction((()=>{var _a;return null===(_a=this._animationFrame)||void 0===_a?void 0:_a.destroy()})),this.props.isEnabled&&this._animationFrame.play(),this.addEventListener(container,"mouseenter",(()=>{this.props.pauseOnHover&&(this._canPlay=!1)})),this.addEventListener(container,"mouseleave",(()=>{this._canPlay=!0}));const resizeHandler=(0,onResize.i)({onResize:()=>this.resize(),element:this.container,viewportTarget,resizeDebounce,hasBothEvents:!0});this.addDestroyableAction((()=>resizeHandler.remove())),(0,getApp.M)().onPageLoad().then((()=>this.resize())).catch((()=>{}))}resize(){this.isDestroyed||this._createItems()}_createItems(){this._disconnectMutations();const{container}=this;this._quantity=0,this._items=[],this.container.innerHTML="",container.style.position="relative",container.style.display="block",container.style.width="100%",container.style.overflow="hidden",container.style.whiteSpace="nowrap";let itemWidth=this._createItem(!0).clientWidth;itemWidth<=0&&(itemWidth=window.innerWidth),this._itemWidth=itemWidth,itemWidth<container.clientWidth&&(this._quantity=Math.ceil((container.clientWidth+itemWidth)/itemWidth)),this._quantity=Math.max(this._quantity,4);for(let index=1;index<this._quantity;index+=1)this._createItem(!1);this._render(0),this._observeMutations()}_createItem(isFirst=!1){const element=document.createElement("div");element.classList.add(this.className("__element")),isFirst||element.setAttribute("aria-hidden","true");const prefix=""+(this.props.prependWhitespace?"&nbsp;":""),body=this._initialHTML;return element.innerHTML=`${prefix}${body}`,isFirst||(element.style.position="absolute",element.style.top="0",element.style.left="0"),element.style.display="inline-block",this.container.appendChild(element),this._items.push(element),element}_observeMutations(){if(this._mutationObserver)return;this._mutationObserver=new MutationObserver((mutationsList=>{mutationsList.forEach((mutation=>{"childList"===mutation.type&&(this._initialHTML=this.container.innerHTML,this._createItems())}))})),this._mutationObserver.observe(this.container,{childList:!0})}_disconnectMutations(){var _a;null===(_a=this._mutationObserver)||void 0===_a||_a.disconnect(),this._mutationObserver=void 0}render(speed=this.props.speed){this._render(speed)}_render(speedProp){var _a,_b;if(!this._canPlay)return;const{_quantity:qunantity,_itemWidth:itemWidth,props}=this,{isFpsNormalized}=props,fpsMultiplier=isFpsNormalized&&null!==(_b=null===(_a=this._animationFrame)||void 0===_a?void 0:_a.easeMultiplier)&&void 0!==_b?_b:1,defaultSpeed=props.speed*fpsMultiplier,speed=null!=speedProp?speedProp:defaultSpeed;this._xCoord-=speed;const totalWidth=itemWidth*(qunantity-1);for(let index=0;index<qunantity;index+=1){const element=this._items[index],x=wrap(-itemWidth,totalWidth,this._xCoord+itemWidth*index);element.style.transform=`matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0, ${x}, 0, 0,1)`}this.callbacks.tbt("render",void 0)}_destroy(){super._destroy(),this._disconnectMutations(),this.container.innerHTML=this._initialHTML}}var prefixedClassNames=__webpack_require__("./src/utils/prefixedClassNames.ts"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Marquee_Marquee=(0,react.forwardRef)((({className,style,children,"aria-label":ariaLabel,separator,isEnabled=!0,prependWhitespace=!0,...changeableProps},forwardedRef)=>{const ref=(0,useForwardedRef.t)(forwardedRef),marqueeContainerRef=(0,react.useRef)(null),[marquee,setMarquee]=(0,react.useState)(),initialPropsRef=(0,react.useRef)({isEnabled,...changeableProps});(0,react.useEffect)((()=>{if(!marqueeContainerRef.current||!esm.vevet)return;const instance=new Marquee({...initialPropsRef.current,container:marqueeContainerRef.current,prependWhitespace});return setMarquee(instance),()=>instance?.destroy()}),[ref,prependWhitespace]);const{state}=(0,useOnInViewport.S)({ref});return(0,react.useEffect)((()=>{marquee&&state&&("in"===state&&isEnabled?marquee.changeProps({isEnabled:!0}):marquee.changeProps({isEnabled:!1}))}),[marquee,state,isEnabled]),(0,react.useEffect)((()=>{marquee&&marquee.changeProps(changeableProps)}),[marquee,(0,use_deep_compare_effect_esm.Uf)(changeableProps)]),(0,jsx_runtime.jsx)("span",{ref,className:classnames_default()(className,(0,prefixedClassNames.I)("marquee")),style,role:"marquee","aria-label":ariaLabel??((0,isString.H)(children)?children:void 0),children:(0,jsx_runtime.jsxs)("span",{ref:marqueeContainerRef,className:(0,prefixedClassNames.I)("marquee__container"),"aria-hidden":!0,children:[children,separator]})})}));Marquee_Marquee.displayName="Marquee";try{Marquee_Marquee.displayName="Marquee",Marquee_Marquee.__docgenInfo={description:"Custom marquee element",displayName:"Marquee",props:{children:{defaultValue:null,description:"Marquee text",name:"children",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},"aria-label":{defaultValue:null,description:"Aria-Label",name:"aria-label",required:!1,type:{name:"string"}},separator:{defaultValue:null,description:"Element between text",name:"separator",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Marquee/index.tsx#Marquee"]={docgenInfo:Marquee_Marquee.__docgenInfo,name:"Marquee",path:"src/components/Marquee/index.tsx#Marquee"})}catch(__react_docgen_typescript_loader_error){}const Marquee_stories={title:"Text/Marquee",component:Marquee_Marquee,tags:["autodocs"],args:{children:"Marquee text"}},Template=({isEnabled:isEnabledProp,speed:speedProp=1,...props})=>{const[isEnabled,setIsEnabled]=(0,usePropState.W)(isEnabledProp),[speed,setSpeed]=(0,usePropState.W)(speedProp);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setIsEnabled(!0),children:"Enable"}),(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setIsEnabled(!1),children:"Disable"}),(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setSpeed((val=>Math.max(val+.2,.2))),children:"Faster"}),(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setSpeed((val=>Math.max(val-.2,.2))),children:"Slower"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("h1",{children:(0,jsx_runtime.jsx)(Marquee_Marquee,{...props,isEnabled,speed})})]})},Default=Template.bind({});Default.args={isFpsNormalized:!0};const WithReverseSpeed=Template.bind({});WithReverseSpeed.args={speed:-1};const WithSeparator=Template.bind({});WithSeparator.args={separator:(0,jsx_runtime.jsx)("b",{style:{display:"inline-block",margin:"0 0.25em"},children:"*"}),prependWhitespace:!1},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'({\n  isEnabled: isEnabledProp,\n  speed: speedProp = 1,\n  ...props\n}) => {\n  const [isEnabled, setIsEnabled] = usePropState(isEnabledProp);\n  const [speed, setSpeed] = usePropState(speedProp);\n  return <>\r\n      <button type="button" onClick={() => setIsEnabled(true)}>\r\n        Enable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setIsEnabled(false)}>\r\n        Disable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => Math.max(val + 0.2, 0.2))}>\r\n        Faster\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => Math.max(val - 0.2, 0.2))}>\r\n        Slower\r\n      </button>\r\n\r\n      <br />\r\n\r\n      <br />\r\n\r\n      <h1>\r\n        <Marquee {...props} isEnabled={isEnabled} speed={speed} />\r\n      </h1>\r\n    </>;\n}',...Default.parameters?.docs?.source}}},WithReverseSpeed.parameters={...WithReverseSpeed.parameters,docs:{...WithReverseSpeed.parameters?.docs,source:{originalSource:'({\n  isEnabled: isEnabledProp,\n  speed: speedProp = 1,\n  ...props\n}) => {\n  const [isEnabled, setIsEnabled] = usePropState(isEnabledProp);\n  const [speed, setSpeed] = usePropState(speedProp);\n  return <>\r\n      <button type="button" onClick={() => setIsEnabled(true)}>\r\n        Enable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setIsEnabled(false)}>\r\n        Disable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => Math.max(val + 0.2, 0.2))}>\r\n        Faster\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => Math.max(val - 0.2, 0.2))}>\r\n        Slower\r\n      </button>\r\n\r\n      <br />\r\n\r\n      <br />\r\n\r\n      <h1>\r\n        <Marquee {...props} isEnabled={isEnabled} speed={speed} />\r\n      </h1>\r\n    </>;\n}',...WithReverseSpeed.parameters?.docs?.source}}},WithSeparator.parameters={...WithSeparator.parameters,docs:{...WithSeparator.parameters?.docs,source:{originalSource:'({\n  isEnabled: isEnabledProp,\n  speed: speedProp = 1,\n  ...props\n}) => {\n  const [isEnabled, setIsEnabled] = usePropState(isEnabledProp);\n  const [speed, setSpeed] = usePropState(speedProp);\n  return <>\r\n      <button type="button" onClick={() => setIsEnabled(true)}>\r\n        Enable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setIsEnabled(false)}>\r\n        Disable\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => Math.max(val + 0.2, 0.2))}>\r\n        Faster\r\n      </button>\r\n\r\n      <button type="button" onClick={() => setSpeed(val => Math.max(val - 0.2, 0.2))}>\r\n        Slower\r\n      </button>\r\n\r\n      <br />\r\n\r\n      <br />\r\n\r\n      <h1>\r\n        <Marquee {...props} isEnabled={isEnabled} speed={speed} />\r\n      </h1>\r\n    </>;\n}',...WithSeparator.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithReverseSpeed","WithSeparator"]},"../../common/temp/node_modules/.pnpm/vevet@3.16.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/listeners/onResize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function onResize({onResize:handleResize,element,viewportTarget="any",hasBothEvents=!1,resizeDebounce=0}){let timeout,resizeObserver,viewportCallback,isFirstResizeObserverCallback=!0;const debounceResize=(props,delay)=>{timeout&&clearTimeout(timeout),timeout=setTimeout((()=>handleResize(null!=props?props:{trigger:"unknown"})),null!=delay?delay:resizeDebounce)};return element&&(element instanceof Element||Array.isArray(element))&&"ResizeObserver"in window&&(resizeObserver=new ResizeObserver((()=>{isFirstResizeObserverCallback?isFirstResizeObserverCallback=!1:debounceResize({trigger:"ResizeObserver"},window.vevetApp.props.resizeDebounce+resizeDebounce)})),Array.isArray(element)?element.forEach((item=>null==resizeObserver?void 0:resizeObserver.observe(item))):resizeObserver.observe(element)),!hasBothEvents&&resizeObserver||(viewportCallback=window.vevetApp.viewport.add(viewportTarget,(()=>debounceResize({trigger:"Viewport"})))),{remove:()=>{timeout&&clearTimeout(timeout),null==resizeObserver||resizeObserver.disconnect(),null==viewportCallback||viewportCallback.remove()},resize:()=>handleResize({trigger:"unknown"}),debounceResize:()=>debounceResize(),hasResizeObserver:!!resizeObserver}}__webpack_require__.d(__webpack_exports__,{i:()=>onResize})}}]);