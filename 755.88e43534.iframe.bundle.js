/*! For license information please see 755.88e43534.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[755],{"../../common/temp/node_modules/.pnpm/@anton.bobrov+p-cancelable@4.0.1/node_modules/@anton.bobrov/p-cancelable/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PCancelable});class CancelError extends Error{constructor(reason){super(reason||"Promise was canceled"),this.name="CancelError"}get isCanceled(){return!0}}const promiseState=Object.freeze({pending:Symbol("pending"),canceled:Symbol("canceled"),resolved:Symbol("resolved"),rejected:Symbol("rejected")});class PCancelable{static fn(userFunction){return(...arguments_)=>new PCancelable(((resolve,reject,onCancel)=>{arguments_.push(onCancel),userFunction(...arguments_).then(resolve,reject)}))}#cancelHandlers=[];#rejectOnCancel=!0;#state=promiseState.pending;#promise;#reject;constructor(executor){this.#promise=new Promise(((resolve,reject)=>{this.#reject=reject;const onCancel=handler=>{if(this.#state!==promiseState.pending)throw new Error(`The \`onCancel\` handler was attached after the promise ${this.#state.description}.`);this.#cancelHandlers.push(handler)};Object.defineProperties(onCancel,{shouldReject:{get:()=>this.#rejectOnCancel,set:boolean=>{this.#rejectOnCancel=boolean}}}),executor((value=>{this.#state===promiseState.canceled&&onCancel.shouldReject||(resolve(value),this.#setState(promiseState.resolved))}),(error=>{this.#state===promiseState.canceled&&onCancel.shouldReject||(reject(error),this.#setState(promiseState.rejected))}),onCancel)}))}then(onFulfilled,onRejected){return this.#promise.then(onFulfilled,onRejected)}catch(onRejected){return this.#promise.catch(onRejected)}finally(onFinally){return this.#promise.finally(onFinally)}cancel(reason){if(this.#state===promiseState.pending){if(this.#setState(promiseState.canceled),this.#cancelHandlers.length>0)try{for(const handler of this.#cancelHandlers)handler()}catch(error){return void this.#reject(error)}this.#rejectOnCancel&&this.#reject(new CancelError(reason))}}get isCanceled(){return this.#state===promiseState.canceled}#setState(state){this.#state===promiseState.pending&&(this.#state=state)}}Object.setPrototypeOf(PCancelable.prototype,Promise.prototype)},"../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/listeners.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>addEventListener});const listeners=[];function addEventListener(el,target,callback,options){if(void 0!==options){const listenerOptions={passive:!1,once:!1};options.once&&(listenerOptions.once=!0),options.passive&&(listenerOptions.passive=!0),el.addEventListener(target,callback,listenerOptions)}else el.addEventListener(target,callback);const id=`${Math.random()}-${+new Date}`;return listeners.push({id,el,target,callback}),{id,remove:removeEventListener.bind(this,id)}}function removeEventListener(id){const newListeners=[];for(let i=0,l=listeners.length;i<l;i++){const data=listeners[i];data.id===id?data.el.removeEventListener(data.target,data.callback):newListeners.push(data)}}},"../../common/temp/node_modules/.pnpm/vevet@3.15.2_typescript@4.8.2/node_modules/vevet/lib/esm/Application/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>Application});var ESizeTypes,EOrientationTypes,listeners=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet-dom@0.0.15/node_modules/vevet-dom/dist/es/listeners.js"),Callbacks=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.15.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Callbacks/index.js");!function(ESizeTypes){ESizeTypes.Desktop="desktop",ESizeTypes.Tablet="tablet",ESizeTypes.Phone="phone"}(ESizeTypes||(ESizeTypes={})),function(EOrientationTypes){EOrientationTypes.Landscape="landscape",EOrientationTypes.Portrait="portrait"}(EOrientationTypes||(EOrientationTypes={}));var getApp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.15.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");class Viewport extends Callbacks.Y{get width(){return this._width}get height(){return this._height}get radius(){return Math.sqrt(Math.pow(this.width,2)+Math.pow(this.height,2))/2}get vw(){return this.width/100}get vh(){return this.height/100}get vr(){return this.radius/100}get isLandscape(){return this.width>this.height}get isPortrait(){return this.width<this.height}get isDesktop(){return this.width>(0,getApp.M)().props.tablet}get isTablet(){return this.width<=(0,getApp.M)().props.tablet&&this.width>(0,getApp.M)().props.phone}get isPhone(){return this.width<=(0,getApp.M)().props.phone}get dpr(){return window.devicePixelRatio}get lowerDesktopDpr(){return(0,getApp.M)().isDesktop?1:this.dpr}constructor(){super(!1),this._width=0,this._height=0,this._init()}_init(){this._updateValues(),this._setEvents()}_setEvents(){this._resizeListener=(0,listeners.O)(window,"resize",(()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),this._resizeTimeout=void 0),this._resizeTimeout=setTimeout((()=>{this._onResize(),this._resizeTimeout=void 0}),(0,getApp.M)().props.resizeDebounce)}))}_updateValues(){const{html,props}=(0,getApp.M)(),width="boundingRect"===props.widthDetection?parseFloat(html.getBoundingClientRect().width.toFixed(3)):html.clientWidth;this._width=width,this._height=html.clientHeight,this._updateClassNames(),this._updateCSSVars()}_updateClassNames(){const viewportSizeTypes=[ESizeTypes.Desktop,ESizeTypes.Tablet,ESizeTypes.Phone];this.isDesktop?this._updateBreakpointClassNames(ESizeTypes.Desktop,viewportSizeTypes):this.isTablet?this._updateBreakpointClassNames(ESizeTypes.Tablet,viewportSizeTypes):this._updateBreakpointClassNames(ESizeTypes.Phone,viewportSizeTypes);const orientationTypes=[EOrientationTypes.Landscape,EOrientationTypes.Portrait];this.isLandscape?this._updateBreakpointClassNames(EOrientationTypes.Landscape,orientationTypes):this.isPortrait?this._updateBreakpointClassNames(EOrientationTypes.Portrait,orientationTypes):this._updateBreakpointClassNames("",orientationTypes)}_updateBreakpointClassNames(activeType,types){const{html,prefix}=(0,getApp.M)();types.forEach((type=>{type===activeType?html.classList.add(`${prefix}viewport-${type}`):html.classList.remove(`${prefix}viewport-${type}`)}))}_updateCSSVars(){const{html}=(0,getApp.M)();html.style.setProperty("--vw",`${this.vw}px`),html.style.setProperty("--vh",`${this.vh}px`),html.style.setProperty("--vr",`${this.vr}px`)}_onResize(){const{_width:prevWidth,_height:prevHeight}=this;this._updateValues();const{width,height}=this,changes={isWidthChanged:width!==prevWidth,isHeightChanged:height!==prevHeight,isOrientationChanged:width>height!=prevWidth>prevHeight};width!==prevWidth&&height===prevHeight&&this.tbt("widthOnly",changes),height!==prevHeight&&width===prevWidth&&this.tbt("heightOnly",changes),width!==prevWidth&&height!==prevHeight&&this.tbt("both",changes),width!==prevWidth&&this.tbt("width",changes),height!==prevHeight&&this.tbt("height",changes),this.tbt("any",changes)}destroy(){var _a;super.destroy(),this._resizeTimeout&&clearTimeout(this._resizeTimeout),null===(_a=this._resizeListener)||void 0===_a||_a.remove()}}class PageLoad extends Callbacks.Y{get isLoaded(){return this._isLoaded}constructor(){super(!1),this._isLoaded=!1,this._init()}_init(){super._init(),this._setEvents()}_setEvents(){"complete"!==document.readyState?this._loadListener=(0,listeners.O)(window,"load",(()=>this._handleLoaded())):this._handleLoaded()}_handleLoaded(){const app=(0,getApp.M)(),{prefix}=app;this._isLoaded=!0,app.html.classList.remove(`${prefix}loading`),app.body.classList.remove(`${prefix}loading`),app.html.classList.add(`${prefix}loaded`),this.tbt("loaded",void 0)}onLoad(callback){if(!this.isLoaded)return this.add("loaded",callback.bind(this));callback()}destroy(){var _a;super.destroy(),null===(_a=this._loadListener)||void 0===_a||_a.remove()}}var process=__webpack_require__("../../common/temp/node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},BrowserInfo=function BrowserInfo(name,version,os){this.name=name,this.version=version,this.os=os,this.type="browser"},NodeInfo=function NodeInfo(version){this.version=version,this.type="node",this.name="node",this.os=process.platform},SearchBotDeviceInfo=function SearchBotDeviceInfo(name,version,os,bot){this.name=name,this.version=version,this.os=os,this.bot=bot,this.type="bot-device"},BotInfo=function BotInfo(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},ReactNativeInfo=function ReactNativeInfo(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},SEARCHBOT_OS_REGEX=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,REQUIRED_VERSION_PARTS=3,userAgentRules=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],operatingSystemRules=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function detect(userAgent){return userAgent?parseUserAgent(userAgent):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new ReactNativeInfo:"undefined"!=typeof navigator?parseUserAgent(navigator.userAgent):function getNodeVersion(){return void 0!==process&&process.version?new NodeInfo(process.version.slice(1)):null}()}function matchUserAgent(ua){return""!==ua&&userAgentRules.reduce((function(matched,_a){var browser=_a[0],regex=_a[1];if(matched)return matched;var uaMatch=regex.exec(ua);return!!uaMatch&&[browser,uaMatch]}),!1)}function parseUserAgent(ua){var matchedRule=matchUserAgent(ua);if(!matchedRule)return null;var name=matchedRule[0],match=matchedRule[1];if("searchbot"===name)return new BotInfo;var versionParts=match[1]&&match[1].split(".").join("_").split("_").slice(0,3);versionParts?versionParts.length<REQUIRED_VERSION_PARTS&&(versionParts=__spreadArray(__spreadArray([],versionParts,!0),function createVersionParts(count){for(var output=[],ii=0;ii<count;ii++)output.push("0");return output}(REQUIRED_VERSION_PARTS-versionParts.length),!0)):versionParts=[];var version=versionParts.join("."),os=function detectOS(ua){for(var ii=0,count=operatingSystemRules.length;ii<count;ii++){var _a=operatingSystemRules[ii],os=_a[0];if(_a[1].exec(ua))return os}return null}(ua),searchBotMatch=SEARCHBOT_OS_REGEX.exec(ua);return searchBotMatch&&searchBotMatch[1]?new SearchBotDeviceInfo(name,version,os,searchBotMatch[1]):new BrowserInfo(name,version,os)}var appleIphone=/iPhone/i,appleIpod=/iPod/i,appleTablet=/iPad/i,appleUniversal=/\biOS-universal(?:.+)Mac\b/i,androidPhone=/\bAndroid(?:.+)Mobile\b/i,androidTablet=/Android/i,amazonPhone=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,amazonTablet=/Silk/i,windowsPhone=/Windows Phone/i,windowsTablet=/\bWindows(?:.+)ARM\b/i,otherBlackBerry=/BlackBerry/i,otherBlackBerry10=/BB10/i,otherOpera=/Opera Mini/i,otherChrome=/\b(CriOS|Chrome)(?:.+)Mobile/i,otherFirefox=/Mobile(?:.+)Firefox\b/i,isAppleTabletOnIos13=function(navigator){return void 0!==navigator&&"MacIntel"===navigator.platform&&"number"==typeof navigator.maxTouchPoints&&navigator.maxTouchPoints>1&&"undefined"==typeof MSStream};function getDeviceInfo(){var _a;const browserData=detect();return{osName:null===(_a=(null==browserData?void 0:browserData.os)||"")||void 0===_a?void 0:_a.split(" ")[0].toLowerCase(),browserName:((null==browserData?void 0:browserData.name)||"").toLowerCase(),device:function isMobile(param){var nav={userAgent:"",platform:"",maxTouchPoints:0};param||"undefined"==typeof navigator?"string"==typeof param?nav.userAgent=param:param&&param.userAgent&&(nav={userAgent:param.userAgent,platform:param.platform,maxTouchPoints:param.maxTouchPoints||0}):nav={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var userAgent=nav.userAgent,tmp=userAgent.split("[FBAN");void 0!==tmp[1]&&(userAgent=tmp[0]),void 0!==(tmp=userAgent.split("Twitter"))[1]&&(userAgent=tmp[0]);var match=function createMatch(userAgent){return function(regex){return regex.test(userAgent)}}(userAgent),result={apple:{phone:match(appleIphone)&&!match(windowsPhone),ipod:match(appleIpod),tablet:!match(appleIphone)&&(match(appleTablet)||isAppleTabletOnIos13(nav))&&!match(windowsPhone),universal:match(appleUniversal),device:(match(appleIphone)||match(appleIpod)||match(appleTablet)||match(appleUniversal)||isAppleTabletOnIos13(nav))&&!match(windowsPhone)},amazon:{phone:match(amazonPhone),tablet:!match(amazonPhone)&&match(amazonTablet),device:match(amazonPhone)||match(amazonTablet)},android:{phone:!match(windowsPhone)&&match(amazonPhone)||!match(windowsPhone)&&match(androidPhone),tablet:!match(windowsPhone)&&!match(amazonPhone)&&!match(androidPhone)&&(match(amazonTablet)||match(androidTablet)),device:!match(windowsPhone)&&(match(amazonPhone)||match(amazonTablet)||match(androidPhone)||match(androidTablet))||match(/\bokhttp\b/i)},windows:{phone:match(windowsPhone),tablet:match(windowsTablet),device:match(windowsPhone)||match(windowsTablet)},other:{blackberry:match(otherBlackBerry),blackberry10:match(otherBlackBerry10),opera:match(otherOpera),firefox:match(otherFirefox),chrome:match(otherChrome),device:match(otherBlackBerry)||match(otherBlackBerry10)||match(otherOpera)||match(otherFirefox)||match(otherChrome)},any:!1,phone:!1,tablet:!1};return result.any=result.apple.device||result.android.device||result.windows.device||result.other.device,result.phone=result.apple.phone||result.android.phone||result.windows.phone,result.tablet=result.apple.tablet||result.android.tablet||result.windows.tablet,result}()}}var p_cancelable=__webpack_require__("../../common/temp/node_modules/.pnpm/@anton.bobrov+p-cancelable@4.0.1/node_modules/@anton.bobrov/p-cancelable/index.js");class Application{get version(){return"3.15.2"}get props(){return this._props}get defaultProps(){return{tablet:1199,phone:899,prefix:"v-",easing:[.25,.1,.25,1],resizeDebounce:16,shouldCheckWebpSupport:!0,widthDetection:"boundingRect"}}get prefix(){return this._props.prefix}get isPhone(){return this._isPhone}get isTablet(){return this._isTablet}get isMobile(){return this._isMobile}get isDesktop(){return this._isDesktop}get osName(){return this._osName}get browserName(){return this._browserName}get isWebpSupported(){return this._isWebpSupported}get pageLoad(){return this._pageLoad}get viewport(){return this._viewport}constructor(data={}){if(window.vevetApp)throw new Error("Vevet Application already exists!");this._props=Object.assign(Object.assign({},this.defaultProps),data),this._isWebpSupported=!1,this._setDeviceFeatures(),window.vevetApp=this,this._pageLoad=new PageLoad,this._viewport=new Viewport}_setDeviceFeatures(){const{prefix,html}=this,{osName,browserName,device}=getDeviceInfo();html.classList.add(`${prefix}os-${osName}`),this._osName=osName,html.classList.add(`${prefix}browser-${browserName}`),this._browserName=browserName,this._isPhone=device.phone,html.classList.toggle(`${prefix}phone`,this._isPhone),this._isTablet=device.tablet,html.classList.toggle(`${prefix}tablet`,this._isTablet),this._isMobile=device.phone||device.tablet,html.classList.toggle(`${prefix}mobile`,this._isMobile),this._isDesktop=!this._isMobile,html.classList.toggle(`${prefix}desktop`,this._isDesktop),this.props.shouldCheckWebpSupport&&function fetchWebpSupport(){return new p_cancelable.Z(((resolve,reject)=>{const testWebP=new Image;testWebP.onload=()=>{1===testWebP.width?resolve():reject()},testWebP.onerror=reject,testWebP.src="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="}))}().then((()=>{this._isWebpSupported=!0})).catch((()=>{}))}get doc(){return document}get html(){return document.documentElement}get body(){return document.body}onPageLoad(){return new p_cancelable.Z((resolve=>this._pageLoad.onLoad(resolve)))}}},"../../common/temp/node_modules/.pnpm/vevet@3.15.2_typescript@4.8.2/node_modules/vevet/lib/esm/base/Callbacks/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Callbacks});var _utils_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.15.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/common/uid.js"),_utils_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@3.15.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/common/normalizedTimeoutCallback.js");class Callbacks{get callbacks(){return this._callbacks}constructor(canInit=!0){this._callbacks=[],canInit&&this._init()}_init(){}add(target,action,settings={}){const id=(0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.h)("callback");return this._callbacks.push(Object.assign({id,isEnabled:!0,target,action},settings)),{id,remove:()=>this.remove(id)}}remove(callbackId){return this._remove(callbackId)}_remove(callbackId,canRemoveProtected=!1){let isRemoved=!1;return this._callbacks=this._callbacks.filter((({id,isProtected})=>id!==callbackId||(!(!isProtected||canRemoveProtected)||(isRemoved=!0,!1)))),isRemoved}_removeAll(){for(;this._callbacks.length>0;)this._remove(this._callbacks[0].id,!0)}turn(id,isEnabled=!0){const callback=this.get(id);callback&&(callback.isEnabled=isEnabled)}get(callbackId){return this._callbacks.filter((({id})=>id===callbackId))[0]||void 0}_callAction({id,isEnabled,timeout,isOnce,action},parameter){isEnabled&&((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.h)((()=>action(parameter)),null!=timeout?timeout:0),isOnce&&this._remove(id,!0))}tbt(target,arg){this._callbacks.forEach((callback=>{callback.target===target&&this._callAction(callback,arg)}))}destroy(){this._removeAll()}}},"../../common/temp/node_modules/.pnpm/vevet@3.15.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/common/normalizedTimeoutCallback.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function normalizedTimeoutCallback(callback,delay){let timeout;return 0===delay?callback():timeout=setTimeout((()=>callback()),delay),{clear:()=>{timeout&&clearTimeout(timeout)}}}__webpack_require__.d(__webpack_exports__,{h:()=>normalizedTimeoutCallback})},"../../common/temp/node_modules/.pnpm/vevet@3.15.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/common/uid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>uid});let index=0;function uid(prefix="id"){return index+=1,`${prefix}_${index}`}},"../../common/temp/node_modules/.pnpm/vevet@3.15.2_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getApp(){return window.vevetApp}__webpack_require__.d(__webpack_exports__,{M:()=>getApp})}}]);