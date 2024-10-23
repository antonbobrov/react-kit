/*! For license information please see components-BasePopup-BasePopup-stories.48d7f070.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[167],{"./src/utils/prefixedClassName.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function prefixedClassName(className){return`rkc-${className}`}__webpack_require__.d(__webpack_exports__,{e:()=>prefixedClassName})},"../react-hooks/lib/esm/hooks/useEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},useEvent=function(callback){var callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return null===(_a=callbackRef.current)||void 0===_a?void 0:_a.call.apply(_a,__spreadArray([callbackRef],args,!1))}),[])}},"../react-hooks/lib/esm/hooks/useEventListener.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>useEventListener});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_utils_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react-hooks/lib/esm/utils/dom/addEventListener.js"),_utils_internal_getHookEventElement__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react-hooks/lib/esm/utils/internal/getHookEventElement.js"),_useEvent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js");function useEventListener(_a){var ref=_a.ref,target=_a.target,listenerProp=_a.listener,options=_a.options,isDisabled=_a.isDisabled,getIsDisabledProp=_a.getIsDisabled,getIsDisabled=(0,_useEvent__WEBPACK_IMPORTED_MODULE_1__.z)(getIsDisabledProp),listener=(0,_useEvent__WEBPACK_IMPORTED_MODULE_1__.z)(listenerProp);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var isGetDisabled=!!getIsDisabled&&getIsDisabled();if(!isDisabled&&!isGetDisabled){var element=(0,_utils_internal_getHookEventElement__WEBPACK_IMPORTED_MODULE_2__.I)(ref);if(element)return(0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.O)(element,target,listener,options)}}),[listener,options,ref,isDisabled,target,getIsDisabled])}},"../react-hooks/lib/esm/hooks/useForwardedRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>useForwardedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useForwardedRef(forwardedRef){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,(function(){return ref.current})),ref}},"../react-hooks/lib/esm/hooks/useOutsideClick.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>useOutsideClick});var _utils_internal_getHookEventElement__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react-hooks/lib/esm/utils/internal/getHookEventElement.js"),_useEvent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),_useEventListener__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react-hooks/lib/esm/hooks/useEventListener.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function useOutsideClick(ref,callback,props){var callbackEvent=(0,_useEvent__WEBPACK_IMPORTED_MODULE_0__.z)(callback);(0,_useEventListener__WEBPACK_IMPORTED_MODULE_1__.O)(__assign({ref:"undefined"!=typeof document?document:null,target:"mousedown",listener:function(event){var element=(0,_utils_internal_getHookEventElement__WEBPACK_IMPORTED_MODULE_2__.I)(ref);element&&(element.contains(null==event?void 0:event.target)||1!==event.which||callbackEvent(event))}},props))}},"../react-hooks/lib/esm/hooks/usePrevious.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>usePrevious});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function usePrevious(value,initialValue){var previousRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialValue);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){previousRef.current=value}),[value]),previousRef.current}},"../react-hooks/lib/esm/hooks/usePropState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>usePropState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function usePropState(prop){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prop),state=_a[0],setState=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setState(prop)}),[prop]),[state,setState]}},"../react-hooks/lib/esm/utils/dom/addEventListener.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function addEventListener(element,target,listener,options){element.addEventListener(target,listener,options);return function(){element.removeEventListener(target,listener,options)}}__webpack_require__.d(__webpack_exports__,{O:()=>addEventListener})},"../react-hooks/lib/esm/utils/internal/getHookEventElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getHookEventElement(ref){return ref&&"current"in ref?ref.current:ref}__webpack_require__.d(__webpack_exports__,{I:()=>getHookEventElement})},"./src/components/BasePopup/BasePopup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithCustomAnchor:()=>WithCustomAnchor,WithLifetine:()=>WithLifetine,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BasePopup_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useForwardedRef=__webpack_require__("../react-hooks/lib/esm/hooks/useForwardedRef.js"),usePropState=__webpack_require__("../react-hooks/lib/esm/hooks/usePropState.js"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),usePrevious=__webpack_require__("../react-hooks/lib/esm/hooks/usePrevious.js"),INITIAL_VALUE=Symbol("Initial value");var useOutsideClick=__webpack_require__("../react-hooks/lib/esm/hooks/useOutsideClick.js"),PortalCompat=__webpack_require__("../../common/temp/node_modules/.pnpm/react-portal@4.2.2_react-dom@18.2.0+react@18.2.0/node_modules/react-portal/es/PortalCompat.js"),prefixedClassName=__webpack_require__("./src/utils/prefixedClassName.ts"),addEventListener=__webpack_require__("../react-hooks/lib/esm/utils/dom/addEventListener.js");function isNumber(value){return"number"==typeof value}var esm=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/index.js");function usePosition({positionRef,isDisabled,verticalAlignment:verticalAlignmentProp,horizontalAlignment:horizontalAlignmentProp,gap=0,viewportGap=0,viewportRef}){const domRect=function useDOMRect(_a){var ref=_a.ref,isDisabled=_a.isDisabled,_b=(0,react.useState)(),rect=_b[0],setRect=_b[1],updatePosition=(0,react.useCallback)((function(){ref.current&&setRect(ref.current.getBoundingClientRect())}),[ref]);return(0,react.useEffect)((function(){var element=ref.current;if(!isDisabled){updatePosition();var resizeObserver,scrollListener=(0,addEventListener.O)(window,"scroll",updatePosition),resizeListener=(0,addEventListener.O)(window,"resize",updatePosition);return element&&(resizeObserver=new ResizeObserver(updatePosition)).observe(element),function(){scrollListener(),resizeListener(),null==resizeObserver||resizeObserver.disconnect()}}}),[ref,isDisabled,updatePosition]),rect}({ref:positionRef,isDisabled}),verticalAlignment=(verticalAlignmentProp&&"auto"!==verticalAlignmentProp?verticalAlignmentProp:function getAutoVerticalAlignment(domRect){if(domRect)return domRect.top>window.innerHeight/2?"up":"down"}(domRect))||"down",horizontalAlignment=(horizontalAlignmentProp&&"auto"!==horizontalAlignmentProp?horizontalAlignmentProp:function getAutoHorizontalAlignment(domRect){if(!domRect)return;const xCenter=document.documentElement.clientWidth/2,triggerCenter=domRect.left+domRect.width/2;return Math.abs(triggerCenter-xCenter)<1?"center":triggerCenter<xCenter?"start":"end"}(domRect))||"center",verticalAlignmentStyles=verticalAlignment&&domRect?function getVerticalAlignmentStyles({domRect,alignment,gap:gapProp}){if(!domRect)return;const gap=isNumber(gapProp)?gapProp:gapProp();return"down"===alignment?{top:`${domRect.bottom+gap}px`,bottom:"auto",y:"0"}:"up"===alignment?{top:"auto",bottom:`${esm.vevet.viewport.height-domRect.top+gap}px`,y:"0"}:"center"===alignment?{top:`${domRect.top+domRect.height/2}px`,bottom:"auto",y:"-50%"}:void 0}({alignment:verticalAlignment,domRect,gap}):void 0,horizontalAlignmentStyles=horizontalAlignment&&domRect?function getHorizontalAlignmentStyles({alignment,domRect,gap:gapProp,viewportGap:viewportGapProp,viewportRef}){if(!domRect)return;const gap=isNumber(gapProp)?gapProp:gapProp(),viewportGap=isNumber(viewportGapProp)?viewportGapProp:viewportGapProp(),viewportWidth=document.documentElement.clientWidth,viewportElement=viewportRef?.current,viewportRect=viewportElement?viewportElement.getBoundingClientRect():{left:0,width:viewportWidth,right:viewportWidth};if("start"===alignment){const{left}=domRect;return{left:`${left}px`,right:"auto",x:"0",maxWidth:viewportRect.right-left-viewportGap+"px"}}if("center"===alignment){const maxWidth=2*Math.min(domRect.left+domRect.width/2-viewportRect.left,viewportRect.right-(domRect.left+domRect.width/2))-2*viewportGap;return{left:`${domRect.left+domRect.width/2}px`,right:"auto",x:"-50%",maxWidth:`${maxWidth}px`}}if("end"===alignment)return{left:"auto",right:viewportWidth-domRect.right+"px",x:"0",maxWidth:domRect.right-viewportRect.left-viewportGap+"px"};if("left"===alignment)return{left:"auto",right:`${viewportWidth-domRect.left+gap}px`,x:"0",maxWidth:domRect.left-viewportRect.left-gap-viewportGap+"px"};if("right"===alignment)return{left:`${domRect.right+gap}px`,right:"auto",x:"0",maxWidth:viewportRect.right-domRect.right-gap-viewportGap+"px"}}({alignment:horizontalAlignment,domRect,gap,viewportGap,viewportRef}):void 0,transformY=verticalAlignmentStyles?.y??0;return{verticalAlignment,horizontalAlignment,style:{transform:`translate(${horizontalAlignmentStyles?.x??0}, ${transformY})`,...verticalAlignmentStyles&&{top:verticalAlignmentStyles.top,bottom:verticalAlignmentStyles.bottom},...horizontalAlignmentStyles&&{left:horizontalAlignmentStyles.left,right:horizontalAlignmentStyles.right,maxWidth:horizontalAlignmentStyles.maxWidth}}}}function getViewportGap(){return esm.vevet.viewport.isPhone?20:40}const Anchor=(0,react.forwardRef)((({activate,deactivate,isActive,showEvent,anchor},forwardedRef)=>{const toggle=(0,useEvent.z)((()=>{isActive?deactivate():activate()}));if(!anchor)return null;const props="click"===showEvent?{onClick:event=>{anchor.props.onClick?.(event),toggle()}}:{onMouseEnter:event=>{anchor.props.onMouseEnter?.(event),activate()},onMouseLeave:event=>{anchor.props.onMouseLeave?.(event),deactivate()},onFocus:event=>{anchor.props.onFocus?.(event),activate()},onBlur:event=>{anchor.props.onBlur?.(event),deactivate()}};return(0,react.cloneElement)(anchor,{ref:forwardedRef,...props})}));Anchor.displayName="Anchor";try{Anchor.displayName="Anchor",Anchor.__docgenInfo={description:"",displayName:"Anchor",props:{activate:{defaultValue:null,description:"Activate popup",name:"activate",required:!0,type:{name:"() => void"}},deactivate:{defaultValue:null,description:"Deactivate popup",name:"deactivate",required:!0,type:{name:"() => void"}},isActive:{defaultValue:null,description:"Popup is active",name:"isActive",required:!0,type:{name:"boolean"}},showEvent:{defaultValue:{value:"'click'"},description:"Anchor event to show the popup",name:"showEvent",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},anchor:{defaultValue:null,description:"Popup anchor",name:"anchor",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BasePopup/Anchor/index.tsx#Anchor"]={docgenInfo:Anchor.__docgenInfo,name:"Anchor",path:"src/components/BasePopup/Anchor/index.tsx#Anchor"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const DefaultAnchor=(0,react.memo)(Anchor),BasePopup=(0,react.forwardRef)((({className,style,children,anchor,renderAnchor:Anchor=DefaultAnchor,positionRef,isActive:isActiveProp,onActive,showEvent="click",verticalAlignment:verticalAlignmentProp,horizontalAlignment:horizontalAlignmentProp,gap,viewportGap=getViewportGap,viewportRef,isDisabled,hasOutsideClick=!0,lifetime},forwardedRef)=>{const contentRef=(0,useForwardedRef.t)(forwardedRef),anchorRef=(0,react.useRef)(null),[canRender,setCanRender]=(0,react.useState)(!1),[isActive,setIsActive]=(0,usePropState.W)(!!isActiveProp);!function useChange(observer,observable){var prevObservable=(0,usePrevious.D)(observable,INITIAL_VALUE),stableObserver=(0,useEvent.z)(observer);(0,react.useEffect)((function(){prevObservable!==INITIAL_VALUE&&prevObservable!==observable&&stableObserver(observable,prevObservable)}),[prevObservable,observable,stableObserver])}((value=>{onActive?.(value)}),isActive),(0,react.useEffect)((()=>{isActive&&setCanRender(!0)}),[isActive]),(0,react.useEffect)((()=>{if(!isActive||!lifetime)return;const timeout=setTimeout((()=>setIsActive(!1)),lifetime);return()=>clearTimeout(timeout)}),[isActive,setIsActive,lifetime]),(0,useOutsideClick.O)(anchorRef,(event=>{canRender&&hasOutsideClick&&(contentRef.current?.contains(event.target)||setIsActive(!1))}));const{verticalAlignment,horizontalAlignment,style:positionStyle}=usePosition({positionRef:positionRef??anchorRef,verticalAlignment:verticalAlignmentProp,horizontalAlignment:horizontalAlignmentProp,gap,viewportGap,viewportRef,isDisabled:!canRender||!!isDisabled});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Anchor,{ref:anchorRef,activate:()=>setIsActive(!0),deactivate:()=>setIsActive(!1),isActive,anchor,showEvent}),canRender&&!isDisabled&&(0,jsx_runtime.jsx)(PortalCompat.Z,{children:(0,jsx_runtime.jsx)("div",{ref:contentRef,className:(0,prefixedClassName.e)("base-popup"),style:positionStyle,children:(0,jsx_runtime.jsx)("div",{className:classnames_default()((0,prefixedClassName.e)("base-popup__container"),isActive&&(0,prefixedClassName.e)("show"),(0,prefixedClassName.e)(`vertical_${verticalAlignment}`),(0,prefixedClassName.e)(`horizontal_${horizontalAlignment}`),className),style,onAnimationEnd:()=>{isActive||setCanRender(!1)},children})})})]})}));BasePopup.displayName="BasePopup";try{BasePopup.displayName="BasePopup",BasePopup.__docgenInfo={description:"BasePopup component for creating customizable popup elements.\n\nThis component provides a versatile way to display contextual information, tooltips,\nor interactive content that appears above other content. It supports various features\nsuch as positioning, customizable styles, and the ability to control visibility.",displayName:"BasePopup",props:{children:{defaultValue:null,description:"Popup children",name:"children",required:!0,type:{name:"ReactNode"}},renderAnchor:{defaultValue:null,description:"Custom anchor renderer",name:"renderAnchor",required:!1,type:{name:"TBasePopupAnchorRenderer"}},positionRef:{defaultValue:null,description:"The element relative to which the popup will be positioned",name:"positionRef",required:!1,type:{name:"RefObject<HTMLElement>"}},isActive:{defaultValue:null,description:"Popup is visible",name:"isActive",required:!1,type:{name:"boolean"}},onActive:{defaultValue:null,description:'Callback on "isActive" state change',name:"onActive",required:!1,type:{name:"((isActive: boolean) => void)"}},verticalAlignment:{defaultValue:null,description:"Vertical alignment",name:"verticalAlignment",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"up"'},{value:'"down"'},{value:'"center"'}]}},horizontalAlignment:{defaultValue:null,description:"Horizontal alignment",name:"horizontalAlignment",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'},{value:'"auto"'},{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},gap:{defaultValue:null,description:"Gap between anchor and popup",name:"gap",required:!1,type:{name:"number | (() => number)"}},viewportGap:{defaultValue:null,description:"Gap between popup and viewport",name:"viewportGap",required:!1,type:{name:"number | (() => number)"}},viewportRef:{defaultValue:null,description:"The element ref which bounds the popup position",name:"viewportRef",required:!1,type:{name:"RefObject<HTMLElement>"}},isDisabled:{defaultValue:null,description:"The popup is disabled",name:"isDisabled",required:!1,type:{name:"boolean"}},hasOutsideClick:{defaultValue:{value:"true"},description:"Close popup on outside click",name:"hasOutsideClick",required:!1,type:{name:"boolean"}},lifetime:{defaultValue:null,description:"Popup lifetime",name:"lifetime",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},anchor:{defaultValue:null,description:"Popup anchor",name:"anchor",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | null"}},showEvent:{defaultValue:{value:"click"},description:"Anchor event to show the popup",name:"showEvent",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BasePopup/index.tsx#BasePopup"]={docgenInfo:BasePopup.__docgenInfo,name:"BasePopup",path:"src/components/BasePopup/index.tsx#BasePopup"})}catch(__react_docgen_typescript_loader_error){}const BasePopup_stories={title:"Popups/BasePopup",component:BasePopup,tags:["autodocs"],args:{}},Template=({children,anchor:anchorProp,...props})=>{const containerRef=(0,react.useRef)(null);return(0,jsx_runtime.jsx)("div",{style:{padding:"100px",background:"#ccc"},children:(0,jsx_runtime.jsx)("div",{ref:containerRef,style:{position:"relative",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"1000px",background:"#f0f0f0"},children:(0,jsx_runtime.jsx)(BasePopup,{...props,viewportRef:containerRef,anchor:null===anchorProp?null:(0,jsx_runtime.jsx)("button",{type:"button",children:"Show popup"}),style:{backgroundColor:"#333",color:"#fff",width:"100vw",textAlign:"center"},children:"lorem ipsum"})})})};Template.displayName="Template";const Default=Template.bind({});Default.args={gap:10,viewportGap:5};const AnchorRenderer=(0,react.forwardRef)((({activate,deactivate,isActive},forwardedRef)=>(0,jsx_runtime.jsxs)("button",{ref:forwardedRef,type:"button",onMouseEnter:activate,onMouseLeave:deactivate,children:["custom button / ",isActive?"active":"not active"]})));AnchorRenderer.displayName="AnchorRenderer";const WithCustomAnchor=Template.bind({});WithCustomAnchor.args={anchor:null,renderAnchor:AnchorRenderer};const WithLifetine=Template.bind({});WithLifetine.args={lifetime:3e3},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  children,\n  anchor: anchorProp,\n  ...props\n}) => {\n  const containerRef = useRef<HTMLDivElement>(null);\n  return <div style={{\n    padding: '100px',\n    background: '#ccc'\n  }}>\r\n      <div ref={containerRef} style={{\n      position: 'relative',\n      display: 'flex',\n      flexDirection: 'row',\n      alignItems: 'center',\n      justifyContent: 'center',\n      width: '100%',\n      height: '1000px',\n      background: '#f0f0f0'\n    }}>\r\n        <BasePopup {...props} viewportRef={containerRef} anchor={anchorProp === null ? null : <button type=\"button\">Show popup</button>} style={{\n        backgroundColor: '#333',\n        color: '#fff',\n        width: '100vw',\n        textAlign: 'center'\n      }}>\r\n          lorem ipsum\r\n        </BasePopup>\r\n      </div>\r\n    </div>;\n}",...Default.parameters?.docs?.source}}},WithCustomAnchor.parameters={...WithCustomAnchor.parameters,docs:{...WithCustomAnchor.parameters?.docs,source:{originalSource:"({\n  children,\n  anchor: anchorProp,\n  ...props\n}) => {\n  const containerRef = useRef<HTMLDivElement>(null);\n  return <div style={{\n    padding: '100px',\n    background: '#ccc'\n  }}>\r\n      <div ref={containerRef} style={{\n      position: 'relative',\n      display: 'flex',\n      flexDirection: 'row',\n      alignItems: 'center',\n      justifyContent: 'center',\n      width: '100%',\n      height: '1000px',\n      background: '#f0f0f0'\n    }}>\r\n        <BasePopup {...props} viewportRef={containerRef} anchor={anchorProp === null ? null : <button type=\"button\">Show popup</button>} style={{\n        backgroundColor: '#333',\n        color: '#fff',\n        width: '100vw',\n        textAlign: 'center'\n      }}>\r\n          lorem ipsum\r\n        </BasePopup>\r\n      </div>\r\n    </div>;\n}",...WithCustomAnchor.parameters?.docs?.source}}},WithLifetine.parameters={...WithLifetine.parameters,docs:{...WithLifetine.parameters?.docs,source:{originalSource:"({\n  children,\n  anchor: anchorProp,\n  ...props\n}) => {\n  const containerRef = useRef<HTMLDivElement>(null);\n  return <div style={{\n    padding: '100px',\n    background: '#ccc'\n  }}>\r\n      <div ref={containerRef} style={{\n      position: 'relative',\n      display: 'flex',\n      flexDirection: 'row',\n      alignItems: 'center',\n      justifyContent: 'center',\n      width: '100%',\n      height: '1000px',\n      background: '#f0f0f0'\n    }}>\r\n        <BasePopup {...props} viewportRef={containerRef} anchor={anchorProp === null ? null : <button type=\"button\">Show popup</button>} style={{\n        backgroundColor: '#333',\n        color: '#fff',\n        width: '100vw',\n        textAlign: 'center'\n      }}>\r\n          lorem ipsum\r\n        </BasePopup>\r\n      </div>\r\n    </div>;\n}",...WithLifetine.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithCustomAnchor","WithLifetine"]},"../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../common/temp/node_modules/.pnpm/react-portal@4.2.2_react-dom@18.2.0+react@18.2.0/node_modules/react-portal/es/PortalCompat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>PortalCompat});var react_dom=__webpack_require__("../../common/temp/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();var Portal=function(_React$Component){function Portal(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Portal),function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(Portal.__proto__||Object.getPrototypeOf(Portal)).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(Portal,_React$Component),_createClass(Portal,[{key:"componentWillUnmount",value:function componentWillUnmount(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function render(){return canUseDOM?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),react_dom.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),Portal}(react.Component);Portal.propTypes={children:prop_types_default().node.isRequired,node:prop_types_default().any};const es_Portal=Portal;var LegacyPortal_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();var LegacyPortal_Portal=function(_React$Component){function Portal(){return function LegacyPortal_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Portal),function LegacyPortal_possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(Portal.__proto__||Object.getPrototypeOf(Portal)).apply(this,arguments))}return function LegacyPortal_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(Portal,_React$Component),LegacyPortal_createClass(Portal,[{key:"componentDidMount",value:function componentDidMount(){this.renderPortal()}},{key:"componentDidUpdate",value:function componentDidUpdate(props){this.renderPortal()}},{key:"componentWillUnmount",value:function componentWillUnmount(){react_dom.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function renderPortal(props){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var children=this.props.children;"function"==typeof this.props.children.type&&(children=react.cloneElement(this.props.children)),this.portal=react_dom.unstable_renderSubtreeIntoContainer(this,children,this.props.node||this.defaultNode)}},{key:"render",value:function render(){return null}}]),Portal}(react.Component);const LegacyPortal=LegacyPortal_Portal;LegacyPortal_Portal.propTypes={children:prop_types_default().node.isRequired,node:prop_types_default().any};const PortalCompat=react_dom.createPortal?es_Portal:LegacyPortal},"../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{vevet:()=>vevet});var _utils_internal_getApp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.1.0_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");const vevet="undefined"!=typeof window?(0,_utils_internal_getApp__WEBPACK_IMPORTED_MODULE_0__.M)():void 0}}]);