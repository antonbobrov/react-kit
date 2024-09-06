"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[944],{"../react-hooks/lib/esm/hooks/useEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},useEvent=function(callback){var callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return null===(_a=callbackRef.current)||void 0===_a?void 0:_a.call.apply(_a,__spreadArray([callbackRef],args,!1))}),[])}},"../react-hooks/lib/esm/hooks/useForwardedRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useForwardedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useForwardedRef(forwardedRef){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,(function(){return ref.current})),ref}},"../react-hooks/lib/esm/hooks/useOnInViewport.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>useOnInViewport});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),usePropState=__webpack_require__("../react-hooks/lib/esm/hooks/usePropState.js"),getHookEventElement=__webpack_require__("../react-hooks/lib/esm/utils/internal/getHookEventElement.js");var instances=[];function useIntersectionObserver(_a){var ref=_a.ref,onEntryProp=_a.onEntry,onFallbackProp=_a.onFallback,_b=_a.root,root=void 0===_b?null:_b,_c=_a.threshold,threshold=void 0===_c?0:_c,_d=_a.rootMargin,rootMargin=void 0===_d?"0px 0px 0px 0px":_d,isDisabled=_a.isDisabled,id=(0,react.useId)(),onEntry=(0,useEvent.z)(onEntryProp),onFallback=(0,useEvent.z)(onFallbackProp),getObserverInstance=(0,react.useCallback)((function(){return instances.find((function(data){return data.root===root&&data.threshold===threshold&&data.rootMargin===rootMargin}))}),[root,rootMargin,threshold]);(0,react.useEffect)((function(){if(!isDisabled)if(function isIntersectionObserverSupported(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}()){var element=(0,getHookEventElement.I)(ref);if(element){var instance=getObserverInstance();return instance||(instance={observer:new IntersectionObserver((function(entries){return entries.forEach((function(entry){null==instance||instance.elements.forEach((function(item){item.element===entry.target&&item.onEntry(entry)}))}))}),{root,threshold,rootMargin}),root,threshold,rootMargin,elements:[]},instances.push(instance)),instance.elements.push({id,element,onEntry}),instance.observer.observe(element),function(){instance&&(instance.elements=instance.elements.filter((function(item){return item.id!==id})),instance.elements.find((function(item){return item.element===element}))||instance.observer.unobserve(element),0===instance.elements.length&&(instances.splice(instances.indexOf(instance),1),instance.observer.disconnect()))}}}else null==onFallback||onFallback()}),[getObserverInstance,id,isDisabled,onEntry,onFallback,ref,root,rootMargin,threshold])}var __assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function useOnInViewport(_a){var ref=_a.ref,onInProp=_a.onIn,onOutProp=_a.onOut,onFallback=_a.onFallback,destroyOnIn=_a.destroyOnIn,isDisabledProp=_a.isDisabled,props=__rest(_a,["ref","onIn","onOut","onFallback","destroyOnIn","isDisabled"]),onIn=(0,useEvent.z)(onInProp),onOut=(0,useEvent.z)(onOutProp),_b=(0,react.useState)(),state=_b[0],setState=_b[1],_c=(0,usePropState.W)(isDisabledProp),isDisabled=_c[0],setIsDisabled=_c[1];return(0,react.useEffect)((function(){"in"===state&&destroyOnIn&&setIsDisabled(!0)}),[destroyOnIn,setIsDisabled,state]),useIntersectionObserver(__assign(__assign({},props),{ref,onFallback:function(){setState("in"),null==onFallback||onFallback()},onEntry:function(entry){entry.isIntersecting?(setState("in"),null==onIn||onIn()):(setState("out"),null==onOut||onOut())},isDisabled})),{state}}},"../react-hooks/lib/esm/hooks/useOnLazyIntersection.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>useOnLazyIntersection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_useEvent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),_useOnInViewport__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react-hooks/lib/esm/hooks/useOnInViewport.js");function useOnLazyIntersection(_a){var ref=_a.ref,onInProp=_a.onIn,isDisabled=_a.isDisabled,onIn=(0,_useEvent__WEBPACK_IMPORTED_MODULE_1__.z)(onInProp),_b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isIn=_b[0],setIsIn=_b[1];return(0,_useOnInViewport__WEBPACK_IMPORTED_MODULE_2__.S)({ref,onIn:function(){null==onIn||onIn(),setIsIn(!0)},onFallback:function(){null==onIn||onIn(),setIsIn(!0)},rootMargin:"0% 0% 175% 0%",destroyOnIn:!0,isDisabled}),{isIn}}},"../react-hooks/lib/esm/hooks/usePropState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>usePropState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function usePropState(prop){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prop),state=_a[0],setState=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setState(prop)}),[prop]),[state,setState]}},"../react-hooks/lib/esm/utils/internal/getHookEventElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getHookEventElement(ref){return ref&&"current"in ref?ref.current:ref}__webpack_require__.d(__webpack_exports__,{I:()=>getHookEventElement})},"../vevet-init/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{vevet:()=>vevet});var vevet__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.18.0_typescript@4.8.2/node_modules/vevet/lib/esm/Application/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},overrideProps="undefined"!=typeof window&&"vevetProps"in window?window.vevetProps:{},props=__assign(__assign({},{tablet:1199,phone:899,resizeDebounce:30,easing:[.25,.1,.25,1],shouldCheckWebpSupport:!0,widthDetection:"boundingRect"}),overrideProps),vevet="undefined"!=typeof window?new vevet__WEBPACK_IMPORTED_MODULE_0__.M(__assign(__assign({},props),{prefix:"v-"})):void 0},"./src/components/SplitText/SplitText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithUpdate:()=>WithUpdate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SplitText_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),useForwardedRef=__webpack_require__("../react-hooks/lib/esm/hooks/useForwardedRef.js"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),useOnLazyIntersection=__webpack_require__("../react-hooks/lib/esm/hooks/useOnLazyIntersection.js"),selectOne=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/selectOne.js"),Component=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.18.0_typescript@4.8.2/node_modules/vevet/lib/esm/base/Component/index.js"),onResize=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.18.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/listeners/onResize.js");function splitBase({container,letterClassName,wordClassName,hasLetters,letterTag,wordTag}){const helper=container.cloneNode(!0),words=function wrapWords({container,classname,tagName}){const whitespace=String.fromCharCode(32),words=[];return function recursive(node){var _a;if(node instanceof HTMLElement)"BR"!==node.tagName&&(node.style.display="inline-block"),[...Array.from(node.childNodes)].forEach((child=>recursive(child)));else if(3===node.nodeType){const nodeParent=node.parentElement,text=null!==(_a=node.nodeValue)&&void 0!==_a?_a:"",splitWords=text.split(whitespace);if(text===whitespace)return null==nodeParent||nodeParent.insertBefore(document.createTextNode(whitespace),node),void node.remove();splitWords.forEach(((splitWord,index)=>{if(splitWord){const element=document.createElement(tagName);element.style.display="inline-block",element.classList.add(classname),element.appendChild(document.createTextNode(splitWord)),words.push({element,text:splitWord,letters:[]}),null==nodeParent||nodeParent.insertBefore(element,node)}index<splitWords.length-1&&(null==nodeParent||nodeParent.insertBefore(document.createTextNode(whitespace),node))})),node.remove()}}(container),words}({container:helper,classname:wordClassName,tagName:wordTag}),letters=[];if(hasLetters){const wrappedLetters=function wrapLetters({words,classname,tagName}){const letters=[];return words.forEach((word=>{const textNode=word.element.childNodes[0],text=textNode.textContent;text&&(text.split("").forEach((splitLetter=>{const element=document.createElement(tagName);element.style.display="inline-block",element.classList.add(classname),element.appendChild(document.createTextNode(splitLetter)),word.element.appendChild(element);const letter={element,text:splitLetter};word.letters.push(letter),letters.push(letter)})),textNode.remove())})),{letters}}({words,classname:letterClassName,tagName:letterTag});letters.push(...wrappedLetters.letters)}return{helper,words,letters}}var childOf=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/childOf.js");function getTopParent(ref,topParent){var _a;return(null==ref?void 0:ref.parentElement)===topParent?ref:getTopParent(null!==(_a=null==ref?void 0:ref.parentElement)&&void 0!==_a?_a:null,topParent)}function wrapLines({container,words,className,tagName}){const lines=[];let lineIndex=-1,prevTop=1/0;words.forEach((word=>{var _a;const currentTop=Math.round(word.element.getBoundingClientRect().top),topParent=getTopParent(word.element,container);if(currentTop!==prevTop){prevTop=currentTop,lineIndex+=1;const element=document.createElement(tagName);element.style.display="block",element.classList.add(className),lines[lineIndex]={element,nodes:[],words:[]}}const currentLine=lines[lineIndex];!!lines.find((({nodes})=>nodes.includes(topParent)))||(currentLine.nodes.push(topParent),3===(null===(_a=topParent.nextSibling)||void 0===_a?void 0:_a.nodeType)&&currentLine.nodes.push(topParent.nextSibling))})),lines.forEach((line=>{container.insertBefore(line.element,line.nodes[0]),line.element.append(...line.nodes)}));const hiddenBr=[];lines.forEach((line=>{const nextSibling=line.element.nextElementSibling;nextSibling instanceof HTMLBRElement&&(nextSibling.style.display="none",hiddenBr.push(nextSibling))})),lines.forEach((line=>{line.words.push(...words.filter((word=>(0,childOf.p)(word.element,line.element))))}));return{lines,destroy:()=>{hiddenBr.forEach((br=>{br.style.display=""})),lines.forEach((line=>{line.nodes.forEach((node=>{container.insertBefore(node,line.element)})),line.element.remove()}))}}}var getApp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.18.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");class SplitText extends Component.w{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{container:`#${this.prefix}`,hasLetters:!0,hasLines:!1,letterTag:"span",wordTag:"span",lineTag:"span",viewportTarget:"any",resizeDebounce:0})}get prefix(){return`${(0,getApp.M)().prefix}split-text`}get letterClassName(){return this.className("__letter")}get wordClassName(){return this.className("__word")}get lineClassName(){return this.className("__line")}get container(){return this._container}get letters(){return this._letters}get words(){return this._words}get lines(){return this._lines}constructor(initialProps,canInit=!0){super(initialProps,!1),this._isBaseSplit=!1,this._container=(0,selectOne.z)(this.props.container),this.toggleClassName(this._container,this.className(""),!0),this._container.translate=!1,this._initialHTML=this._container.innerHTML,this._letters=[],this._words=[],this._lines=[],canInit&&this.init()}_init(){super._init(),this._setResize()}_setResize(){const{viewportTarget,resizeDebounce,hasLines}=this.props;if(!hasLines)return void this.splitText();const resizeHandler=(0,onResize.i)({onResize:()=>this.splitText(),element:this.container,viewportTarget,resizeDebounce});resizeHandler.resize(),this.addDestroyableAction((()=>resizeHandler.remove()))}splitText(){this._splitBase(),this.props.hasLines&&this._splitIntoLines(),this.callbacks.tbt("split",void 0)}_splitBase(){if(this._isBaseSplit)return;const{container,letterClassName,wordClassName}=this,{letterTag,wordTag}=this.props;this._isBaseSplit=!0;const{helper,words,letters}=splitBase({container,letterClassName,wordClassName,hasLetters:this.props.hasLetters,letterTag,wordTag});for(;container.childNodes[0];)container.childNodes[0].remove();for(;helper.childNodes[0];)container.appendChild(helper.childNodes[0]);this._words=words,this._letters=letters}_splitIntoLines(){var _a;const{container,words,lineClassName}=this,{lineTag}=this.props;null===(_a=this._lineWrapper)||void 0===_a||_a.destroy(),this._lineWrapper=wrapLines({container,words,className:lineClassName,tagName:lineTag}),this._lines=this._lineWrapper.lines}_destroy(){super._destroy(),this._container.innerHTML=this._initialHTML}}var esm=__webpack_require__("../vevet-init/lib/esm/index.js"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const SplitText_SplitText=(0,react.forwardRef)((({className,style,text:textProp,hasLetters=!1,hasLines=!1,letterTag="span",wordTag="span",lineTag="span",onInit:onInitProp,isLazy=!0},forwardedRef)=>{const ref=(0,useForwardedRef.t)(forwardedRef),prevTextRef=(0,react.useRef)(textProp),onInit=(0,useEvent.z)(onInitProp),{isIn}=(0,useOnLazyIntersection.o)({ref}),canInit=isLazy&&isIn||!isLazy;return(0,react.useEffect)((()=>{const container=ref.current;if(!container||!canInit)return;prevTextRef.current!==textProp&&(container.innerHTML=textProp);const instance=new SplitText({container,hasLetters,hasLines,letterTag,wordTag,lineTag,viewportTarget:esm.vevet.isMobile?"width":void 0});return onInit(instance),()=>instance.destroy()}),[canInit,hasLetters,hasLines,letterTag,lineTag,onInit,ref,textProp,wordTag]),(0,jsx_runtime.jsx)("span",{ref,className,style:{...style,display:"block",fontKerning:"none"},dangerouslySetInnerHTML:{__html:textProp}})}));SplitText_SplitText.displayName="SplitText";try{SplitText_SplitText.displayName="SplitText",SplitText_SplitText.__docgenInfo={description:"Split text into letters, words or lines",displayName:"SplitText",props:{text:{defaultValue:null,description:"Source text",name:"text",required:!0,type:{name:"string"}},onInit:{defaultValue:null,description:"Event on creation",name:"onInit",required:!0,type:{name:"(text: SplitText<IStaticProps, IChangeableProps, ICallbacksTypes>) => void"}},isLazy:{defaultValue:{value:"true"},description:"Lazy initialization",name:"isLazy",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SplitText/index.tsx#SplitText"]={docgenInfo:SplitText_SplitText.__docgenInfo,name:"SplitText",path:"src/components/SplitText/index.tsx#SplitText"})}catch(__react_docgen_typescript_loader_error){}const SplitText_stories={title:"Text/SplitText",component:SplitText_SplitText,tags:["autodocs"],args:{style:{fontSize:30}}},Default={args:{text:' <b>Lorem</b>ipsum dolor <b style="color: red;">sit</b> amet,&nbsp;consectetur adipiscing elit, <span style="color: blue;">sed <b><i>d</i>o</b></span> eius<b>m<i>od</i></b> tempor <i>incididunt ut</i> labore et dolore magna aliqua. <br /> <br /> <button type="button" style="font: inherit; background-color: #ccc;">Ut enim</button> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',hasLetters:!0,hasLines:!0}},WithUpdate=(({text:textProp,...props})=>{const[text,setText]=(0,react.useState)(textProp);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SplitText_SplitText,{...props,text}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setText((val=>`${val} / additional text`)),children:"Update text"})]})}).bind({});WithUpdate.args={text:"Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",hasLetters:!0,hasLines:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: \' <b>Lorem</b>ipsum dolor <b style="color: red;">sit</b> amet,&nbsp;consectetur adipiscing elit, <span style="color: blue;">sed <b><i>d</i>o</b></span> eius<b>m<i>od</i></b> tempor <i>incididunt ut</i> labore et dolore magna aliqua. <br /> <br /> <button type="button" style="font: inherit; background-color: #ccc;">Ut enim</button> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \',\n    hasLetters: true,\n    hasLines: true\n  }\n}',...Default.parameters?.docs?.source}}},WithUpdate.parameters={...WithUpdate.parameters,docs:{...WithUpdate.parameters?.docs,source:{originalSource:'({\n  text: textProp,\n  ...props\n}) => {\n  const [text, setText] = useState(textProp);\n  return <>\r\n      <SplitText {...props} text={text} />\r\n\r\n      <br />\r\n\r\n      <button type="button" onClick={() => setText(val => `${val} / additional text`)}>\r\n        Update text\r\n      </button>\r\n    </>;\n}',...WithUpdate.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithUpdate"]},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/childOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function childOf(element,parent){return childOfCheck(element,parent)}function childOfCheck(el,parent){return el===parent||null!==el&&childOfCheck(el.parentNode,parent)}__webpack_require__.d(__webpack_exports__,{p:()=>childOf})},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isElement(el){return el instanceof HTMLElement||el instanceof Element}__webpack_require__.d(__webpack_exports__,{k:()=>isElement})},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isWindow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isWindow(el){return el instanceof Window}__webpack_require__.d(__webpack_exports__,{F:()=>isWindow})},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/selectOne.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>selectOne});var _isElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isElement.js"),_isWindow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isWindow.js");function selectOne(selector,parent){if((0,_isWindow__WEBPACK_IMPORTED_MODULE_0__.F)(selector))return selector;if((0,_isElement__WEBPACK_IMPORTED_MODULE_1__.k)(selector))return selector;if(void 0!==parent){const parenEl=selectOne(parent);if(parenEl)return parenEl.querySelector(selector)}return document.querySelector(selector)}},"../../common/temp/node_modules/.pnpm/vevet@3.18.0_typescript@4.8.2/node_modules/vevet/lib/esm/base/Component/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Component});var _Module__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.18.0_typescript@4.8.2/node_modules/vevet/lib/esm/base/Module/index.js");class Component extends _Module__WEBPACK_IMPORTED_MODULE_0__.Y{addPlugin(plugin){void 0===this._plugins&&(this._plugins=[]),this._plugins.push(plugin),plugin.component=this,plugin.init()}_destroyPlugins(){var _a;null===(_a=this._plugins)||void 0===_a||_a.forEach((plugin=>plugin.destroy()))}_destroy(){super._destroy(),this._destroyPlugins()}}},"../../common/temp/node_modules/.pnpm/vevet@3.18.0_typescript@4.8.2/node_modules/vevet/lib/esm/base/Module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Module});var listeners=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/listeners.js"),getApp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.18.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");class MutableProps{get props(){return this._props}constructor(_initProps,_onMutate=(()=>{}),_name="Responsive Props"){this._initProps=_initProps,this._onMutate=_onMutate,this._name=_name,this._responsiveRules=[],this._refProps=Object.assign({},_initProps),this._props=Object.assign({},_initProps),this._activeBreakpoints=[]}addResponsiveProps(rules){this._responsiveRules.push(rules),this._responseProps(),void 0===this._viewportCallback&&(this._viewportCallback=(0,getApp.M)().viewport.callbacks.add("width",this._responseProps.bind(this),{name:this._name}))}_responseProps(){const app=(0,getApp.M)(),{viewport}=app;let newProps=!1;const statProp=Object.assign({},this._refProps),prevActiveBreakpointsString=[...this._activeBreakpoints].join("_");this._activeBreakpoints=[],this._responsiveRules.forEach((({settings,breakpoint})=>{"number"==typeof breakpoint?viewport.width<=breakpoint&&(this._activeBreakpoints.push(breakpoint),newProps=Object.assign(Object.assign({},statProp),settings)):"string"==typeof breakpoint&&(("viewport_desktop"===breakpoint&&viewport.isDesktop||"viewport_tablet"===breakpoint&&viewport.isTablet||"viewport_phone"===breakpoint&&viewport.isPhone)&&(this._activeBreakpoints.push(breakpoint),newProps=Object.assign(Object.assign({},newProps||statProp),settings)),("device_phone"===breakpoint&&app.isPhone||"device_tablet"===breakpoint&&app.isTablet||"device_mobile"===breakpoint&&app.isMobile)&&(this._activeBreakpoints.push(breakpoint),newProps=Object.assign(Object.assign({},newProps||statProp),settings)))}));const isPropsChanged=this._activeBreakpoints.join("_")!==prevActiveBreakpointsString;this._props=newProps?Object.assign(Object.assign({},this._props),newProps):Object.assign(Object.assign({},this._props),this._refProps),isPropsChanged&&this._onMutate()}changeProps(props){this._props=Object.assign(Object.assign({},this._props),props),this._refProps=Object.assign(Object.assign({},this._refProps),props),this._onMutate()}destroy(){this._viewportCallback&&this._viewportCallback.remove()}}var Callbacks=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.18.0_typescript@4.8.2/node_modules/vevet/lib/esm/base/Callbacks/index.js");class Module{_getDefaultProps(){return{}}get props(){return this._mutableProps.props}get callbacks(){return this._callbacks}get name(){return this.constructor.name}get prefix(){return""}get isInitialized(){return this._isInitialized}get isDestroyed(){return this._isDestroyed}constructor(initialProps,canInit=!0){if(this._isInitialized=!1,this._isDestroyed=!1,!(0,getApp.M)())throw new Error('Vevet.Application does not exist yet. Call "new Vevet.Application()" before using all the stuff');this._callbacks=new Callbacks.Y,this._listeners=[],this._destroyableActions=[],this._classNamesToRemove=[];const props=Object.assign(Object.assign({},this._getDefaultProps()),initialProps||{});this._mutableProps=new MutableProps(props,(()=>this._onPropsMutate()),this.name),canInit&&this.init()}addResponsiveProps(rules){if(this.isInitialized)throw new Error("Responsive properties cannot be added after `init` is called");this._mutableProps.addResponsiveProps(rules)}changeProps(props){this.isDestroyed||(this._mutableProps.changeProps(props),this._callbacks.tbt("propsChange",void 0))}_onPropsMutate(){this._callbacks.tbt("propsMutate",void 0)}init(){this.isInitialized||(this._isInitialized=!0,this._init())}_init(){}addDestroyableAction(action){this._destroyableActions.push(action)}addViewportCallback(target,action,data={}){const callback=(0,getApp.M)().viewport.callbacks.add(target,action,Object.assign(Object.assign({},data),{name:this.constructor.name}));this.addDestroyableAction((()=>callback.remove()))}addCallback(target,action,settings={}){return this.callbacks.add(target,action,settings)}addEventListener(el,target,callback,options){const listener=(0,listeners.O)(el,target,callback,options);return this._listeners.push(listener),Object.assign(Object.assign({},listener),{remove:()=>(this._listeners=this._listeners.filter((item=>item.id!==listener.id)),listener.remove())})}className(...classNames){return classNames.map((value=>`${this.prefix}${value}`)).join(" ")}toggleClassName(element,className,isActive){const isAlreadyExists=element.classList.contains(className);element.classList.toggle(className,isActive),isAlreadyExists||this._classNamesToRemove.push({element,className})}destroy(){this.isDestroyed||this._destroy()}_destroy(){this._callbacks.tbt("destroy",void 0),this._callbacks.destroy(),this._mutableProps.destroy(),this._destroyableActions.forEach((action=>action())),this._listeners.forEach((listener=>listener.remove())),this._classNamesToRemove.forEach((({element,className})=>element.classList.remove(className))),this._isDestroyed=!0}}},"../../common/temp/node_modules/.pnpm/vevet@3.18.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/listeners/onResize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function onResize({onResize:handleResize,element,viewportTarget="any",hasBothEvents=!1,resizeDebounce=0}){let timeout,resizeObserver,viewportCallback,isFirstResizeObserverCallback=!0;const debounceResize=(props,delay)=>{timeout&&clearTimeout(timeout),timeout=setTimeout((()=>handleResize(null!=props?props:{trigger:"unknown"})),null!=delay?delay:resizeDebounce)};return element&&(element instanceof Element||Array.isArray(element))&&"ResizeObserver"in window&&(resizeObserver=new ResizeObserver((()=>{isFirstResizeObserverCallback?isFirstResizeObserverCallback=!1:debounceResize({trigger:"ResizeObserver"},window.vevetApp.props.resizeDebounce+resizeDebounce)})),Array.isArray(element)?element.forEach((item=>null==resizeObserver?void 0:resizeObserver.observe(item))):resizeObserver.observe(element)),!hasBothEvents&&resizeObserver||(viewportCallback=window.vevetApp.viewport.callbacks.add(viewportTarget,(()=>debounceResize({trigger:"Viewport"})))),{remove:()=>{timeout&&clearTimeout(timeout),null==resizeObserver||resizeObserver.disconnect(),null==viewportCallback||viewportCallback.remove()},resize:()=>handleResize({trigger:"unknown"}),debounceResize:()=>debounceResize(),hasResizeObserver:!!resizeObserver}}__webpack_require__.d(__webpack_exports__,{i:()=>onResize})}}]);