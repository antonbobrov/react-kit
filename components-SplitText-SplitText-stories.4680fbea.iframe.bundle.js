"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[944],{"../react-hooks/lib/esm/hooks/useEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},useEvent=function(callback){var callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){for(var _a,args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return null===(_a=callbackRef.current)||void 0===_a?void 0:_a.call.apply(_a,__spreadArray([callbackRef],args,!1))}),[])}},"../react-hooks/lib/esm/hooks/useForwardedRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useForwardedRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function useForwardedRef(forwardedRef){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,(function(){return ref.current})),ref}},"../vevet-init/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_j:()=>vevet});var vevet__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/app/Application.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},overrideProps="undefined"!=typeof window&&"vevetProps"in window?window.vevetProps:{},props=__assign(__assign({},{sayHi:!0,tablet:1199,phone:899,viewportResizeTimeout:30,easing:[.25,.1,.25,1],webpSupport:!0}),overrideProps),vevet="undefined"!=typeof window?new vevet__WEBPACK_IMPORTED_MODULE_0__.M(__assign(__assign({},props),{prefix:"v-"})):void 0},"./src/components/SplitText/SplitText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithUpdate:()=>WithUpdate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SplitText_stories});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),useForwardedRef=__webpack_require__("../react-hooks/lib/esm/hooks/useForwardedRef.js"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),selectOne=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/selectOne.js"),createElement=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/createElement.js"),Component=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@2.17.0/node_modules/vevet/build/es/base/Component.js");class SplitText extends Component.w{constructor(initialProp,init=!0){if(super(initialProp,!1),this.prop.container){const container=(0,selectOne.z)(this.prop.container);container instanceof HTMLElement&&(this._container=container)}this._container.translate=!1,this._container&&this._container.classList.add(this.prefix),this._initHTML=this._container.innerHTML;const innerText=this._container[this.prop.textSource].trim();this._initText=innerText||"no rendered text",this._initText=this._initText.replace(/\s+\n/gm,"\n"),this._initText=this._initText.replace(/<br>/gm,String.fromCharCode(10)),this._initText=this._initText.replace(/<br\/>/gm,String.fromCharCode(10)),this._initText=this._initText.replace(/<br \/>/gm,String.fromCharCode(10)),this._container.ariaLabel=this._initText,this._isPrimarySplit=!1,this._letters=[],this._words=[],this._lines=[],init&&this.init()}_getDefaultProp(){return Object.assign(Object.assign({},super._getDefaultProp()),{container:`#${this.prefix}`,textSource:"innerText",appendLetters:!0,appendLines:!1,viewportTarget:"",resizeTimeout:0})}get prefix(){return`${this._app.prefix}split-text`}get container(){return this._container}get letters(){return this._letters}get words(){return this._words}get lines(){return this._lines}_setEvents(){super._setEvents(),this.splitText(),this.prop.appendLines&&this.addViewportCallback(this.prop.viewportTarget,(()=>{this.splitText()}),{timeout:this.prop.resizeTimeout})}splitText(){this._isPrimarySplit||(this.container.innerHTML="",this._splitIntoWords(),this._splitIntoLetters(),this._appendWords(),this._isPrimarySplit=!0),this.prop.appendLines&&this._splitIntoLines(),this.callbacks.tbt("split",!1)}_splitIntoWords(){const chars=this._initText.split("");let prevWord,wordIndex=0;chars.forEach((char=>{const currentWord=this._words[wordIndex]||{content:"",hasNewLine:!1,el:(0,createElement.a)("span",{class:`${this.prefix}__word`,attr:[["aria-hidden","true"]]}),letters:[]};currentWord.el.style.display="inline-block",this._words[wordIndex]=currentWord;const charCode=char.charCodeAt(0),isWhitespace=32===charCode||160===charCode,isSeparator=[45,8208,8211,8212,8722].includes(charCode),isNewLine=10===charCode;isWhitespace&&(currentWord.whitespace=document.createTextNode(" ")),isNewLine&&(currentWord.br=(0,createElement.a)("br")),currentWord.hasNewLine=isNewLine,isWhitespace||isNewLine?wordIndex+=1:(currentWord.content+=char,this.prop.appendLetters||(currentWord.el.innerHTML=currentWord.content),isSeparator&&(wordIndex+=1))})),this._words=this._words.filter(((word,index)=>0!==word.content.length||(index>0&&(this._words[index-1].whitespace=word.whitespace,this._words[index-1].br=word.br),!1))),this._words.forEach((word=>{prevWord&&prevWord.whitespace&&word.el.classList.add("pre-whitespace"),word.whitespace&&word.el.classList.add("has-whitespace"),prevWord=word}))}_appendWords(){this._words.forEach((word=>{this.container.appendChild(word.el),word.whitespace&&this.container.appendChild(word.whitespace),word.br&&this.container.appendChild(word.br)}))}_removeWords(){this._words.forEach((word=>{word.el.remove(),word.whitespace&&word.whitespace.remove(),word.br&&word.br.remove()}))}_splitIntoLetters(){this.prop.appendLetters&&(this._words.forEach((word=>{const chars=word.content.split(""),wordLetters=[];chars.forEach((char=>{const letter={el:(0,createElement.a)("span",{class:`${this.prefix}__letter`,html:char,attr:[["aria-hidden","true"]]}),content:char,word};letter.el.style.display="inline-block",this._letters.push(letter),wordLetters.push(letter)})),word.letters=wordLetters})),this._letters.forEach((letter=>{letter.word.el.appendChild(letter.el)})))}_splitIntoLines(){this._removeLines();let currentLine=!1,prevOffsetTop=1/0,prevWord=!1;this.words.forEach((word=>{let isNewLine=!1;const top=word.el.offsetTop;isNewLine=!(!prevWord||!prevWord.br)||top!==prevOffsetTop,prevWord=word,prevOffsetTop=top,isNewLine&&(currentLine={el:(0,createElement.a)("span",{class:`${this.prefix}__line`,attr:[["aria-hidden","true"]]}),content:"",words:[]},currentLine.el.style.display="block",this._lines.push(currentLine)),currentLine&&currentLine.words.push(word)})),this._lines.forEach((line=>{line.content=line.words.map((word=>word.content)).join(" ")})),this._lines.forEach((line=>{line.words.forEach((word=>{line.el.appendChild(word.el),word.br&&word.br.remove(),word.whitespace&&line.el.appendChild(word.whitespace)})),this.container.appendChild(line.el)}))}_removeLines(){this._lines.forEach((line=>{line.el.remove()})),this._lines=[],this._appendWords()}_destroy(){super._destroy(),this._lines=[],this._words=[],this._letters=[],this._container.innerHTML=this._initHTML}}var esm=__webpack_require__("../vevet-init/lib/esm/index.js"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const SplitText_SplitText=(0,react.forwardRef)((({className,style,text:textProp,textSource="innerHTML",appendLetters,appendLines,onInit:onInitProp},forwardedRef)=>{const ref=(0,useForwardedRef.t)(forwardedRef),onInit=(0,useEvent.z)(onInitProp);return(0,react.useEffect)((()=>{const container=ref.current;if(!container)return;container.innerHTML!==textProp&&(container.innerHTML=textProp);const instance=new SplitText({container,textSource,appendLetters,appendLines,viewportTarget:esm._j.isMobile?"w":void 0});return onInit(instance),()=>instance.destroy()}),[ref,onInit,textProp,textSource,appendLetters,appendLines]),(0,jsx_runtime.jsx)("span",{ref,className,style,dangerouslySetInnerHTML:{__html:textProp}})}));SplitText_SplitText.displayName="SplitText";try{SplitText_SplitText.displayName="SplitText",SplitText_SplitText.__docgenInfo={description:"Split text into letters, words or lines",displayName:"SplitText",props:{text:{defaultValue:null,description:"Source text",name:"text",required:!0,type:{name:"string"}},textSource:{defaultValue:{value:"innerHTML"},description:"Text source",name:"textSource",required:!1,type:{name:"enum",value:[{value:'"textContent"'},{value:'"innerText"'},{value:'"innerHTML"'}]}},appendLetters:{defaultValue:null,description:"Wrap each letter in a single element",name:"appendLetters",required:!0,type:{name:"boolean"}},appendLines:{defaultValue:null,description:"Wrap each line in a single element",name:"appendLines",required:!0,type:{name:"boolean"}},onInit:{defaultValue:null,description:"Event on creation",name:"onInit",required:!0,type:{name:"(text: SplitText<StaticProp, ChangeableProp, CallbacksTypes>) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SplitText/index.tsx#SplitText"]={docgenInfo:SplitText_SplitText.__docgenInfo,name:"SplitText",path:"src/components/SplitText/index.tsx#SplitText"})}catch(__react_docgen_typescript_loader_error){}const SplitText_stories={title:"Text/SplitText",component:SplitText_SplitText,tags:["autodocs"]},Default={args:{text:"This is a <br /> split text",appendLetters:!0,appendLines:!0}},WithUpdate=(({text:textProp,...props})=>{const[text,setText]=(0,react.useState)(textProp);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SplitText_SplitText,{...props,text}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setText((val=>`${val} / additional text`)),children:"Update text"})]})}).bind({});WithUpdate.args={text:"Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",appendLetters:!0,appendLines:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'This is a <br /> split text',\n    appendLetters: true,\n    appendLines: true\n  }\n}",...Default.parameters?.docs?.source}}},WithUpdate.parameters={...WithUpdate.parameters,docs:{...WithUpdate.parameters?.docs,source:{originalSource:'({\n  text: textProp,\n  ...props\n}) => {\n  const [text, setText] = useState(textProp);\n  return <>\r\n      <SplitText {...props} text={text} />\r\n\r\n      <br />\r\n\r\n      <button type="button" onClick={() => setText(val => `${val} / additional text`)}>\r\n        Update text\r\n      </button>\r\n    </>;\n}',...WithUpdate.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithUpdate"]},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/createElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function setElClass(e,classNames,action){const names=classNames.split(" ");for(let i=0;i<names.length;i++)void 0===action?e.classList.toggle(names[i]):action?e.classList.add(names[i]):e.classList.remove(names[i])}function createElement(selector,prop={}){const el=document.createElement(selector);if(prop.class&&function addClass(el,classNames){if(el instanceof Element)setElClass(el,classNames,!0);else for(let i=0;i<el.length;i++)setElClass(el[i],classNames,!0)}(el,prop.class),prop.id&&el.setAttribute("id",prop.id),prop.attr)for(let i=0,l=prop.attr.length;i<l;i++){const attrInfo=prop.attr[i];el.setAttribute(attrInfo[0],attrInfo[1])}if(prop.parent&&prop.parent.appendChild(el),prop.html&&(el.innerHTML=prop.html),prop.children)for(let i=0,l=prop.children.length;i<l;i++)el.appendChild(prop.children[i]);return el}__webpack_require__.d(__webpack_exports__,{a:()=>createElement})},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isElement(el){return el instanceof HTMLElement||el instanceof Element}__webpack_require__.d(__webpack_exports__,{k:()=>isElement})},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isWindow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isWindow(el){return el instanceof Window}__webpack_require__.d(__webpack_exports__,{F:()=>isWindow})},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/selectOne.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>selectOne});var _isElement__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isElement.js"),_isWindow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/isWindow.js");function selectOne(selector,parent){if((0,_isWindow__WEBPACK_IMPORTED_MODULE_0__.F)(selector))return selector;if((0,_isElement__WEBPACK_IMPORTED_MODULE_1__.k)(selector))return selector;if(void 0!==parent){const parenEl=selectOne(parent);if(parenEl)return parenEl.querySelector(selector)}return document.querySelector(selector)}}}]);