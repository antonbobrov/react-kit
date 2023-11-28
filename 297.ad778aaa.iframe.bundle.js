/*! For license information please see 297.ad778aaa.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[297],{"../../common/temp/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js":(module,exports,__webpack_require__)=>{var process=__webpack_require__("../../common/temp/node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");exports.formatArgs=function formatArgs(args){if(args[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+args[0]+(this.useColors?"%c ":" ")+"+"+module.exports.humanize(this.diff),!this.useColors)return;const c="color: "+this.color;args.splice(1,0,c,"color: inherit");let index=0,lastC=0;args[0].replace(/%[a-zA-Z%]/g,(match=>{"%%"!==match&&(index++,"%c"===match&&(lastC=index))})),args.splice(lastC,0,c)},exports.save=function save(namespaces){try{namespaces?exports.storage.setItem("debug",namespaces):exports.storage.removeItem("debug")}catch(error){}},exports.load=function load(){let r;try{r=exports.storage.getItem("debug")}catch(error){}!r&&void 0!==process&&"env"in process&&(r=process.env.DEBUG);return r},exports.useColors=function useColors(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},exports.storage=function localstorage(){try{return localStorage}catch(error){}}(),exports.destroy=(()=>{let warned=!1;return()=>{warned||(warned=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),exports.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],exports.log=console.debug||console.log||(()=>{}),module.exports=__webpack_require__("../../common/temp/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js")(exports);const{formatters}=module.exports;formatters.j=function(v){try{return JSON.stringify(v)}catch(error){return"[UnexpectedJSONParseError]: "+error.message}}},"../../common/temp/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setup(env){function createDebug(namespace){let prevTime,namespacesCache,enabledCache,enableOverride=null;function debug(...args){if(!debug.enabled)return;const self=debug,curr=Number(new Date),ms=curr-(prevTime||curr);self.diff=ms,self.prev=prevTime,self.curr=curr,prevTime=curr,args[0]=createDebug.coerce(args[0]),"string"!=typeof args[0]&&args.unshift("%O");let index=0;args[0]=args[0].replace(/%([a-zA-Z%])/g,((match,format)=>{if("%%"===match)return"%";index++;const formatter=createDebug.formatters[format];if("function"==typeof formatter){const val=args[index];match=formatter.call(self,val),args.splice(index,1),index--}return match})),createDebug.formatArgs.call(self,args);(self.log||createDebug.log).apply(self,args)}return debug.namespace=namespace,debug.useColors=createDebug.useColors(),debug.color=createDebug.selectColor(namespace),debug.extend=extend,debug.destroy=createDebug.destroy,Object.defineProperty(debug,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==enableOverride?enableOverride:(namespacesCache!==createDebug.namespaces&&(namespacesCache=createDebug.namespaces,enabledCache=createDebug.enabled(namespace)),enabledCache),set:v=>{enableOverride=v}}),"function"==typeof createDebug.init&&createDebug.init(debug),debug}function extend(namespace,delimiter){const newDebug=createDebug(this.namespace+(void 0===delimiter?":":delimiter)+namespace);return newDebug.log=this.log,newDebug}function toNamespace(regexp){return regexp.toString().substring(2,regexp.toString().length-2).replace(/\.\*\?$/,"*")}return createDebug.debug=createDebug,createDebug.default=createDebug,createDebug.coerce=function coerce(val){if(val instanceof Error)return val.stack||val.message;return val},createDebug.disable=function disable(){const namespaces=[...createDebug.names.map(toNamespace),...createDebug.skips.map(toNamespace).map((namespace=>"-"+namespace))].join(",");return createDebug.enable(""),namespaces},createDebug.enable=function enable(namespaces){let i;createDebug.save(namespaces),createDebug.namespaces=namespaces,createDebug.names=[],createDebug.skips=[];const split=("string"==typeof namespaces?namespaces:"").split(/[\s,]+/),len=split.length;for(i=0;i<len;i++)split[i]&&("-"===(namespaces=split[i].replace(/\*/g,".*?"))[0]?createDebug.skips.push(new RegExp("^"+namespaces.slice(1)+"$")):createDebug.names.push(new RegExp("^"+namespaces+"$")))},createDebug.enabled=function enabled(name){if("*"===name[name.length-1])return!0;let i,len;for(i=0,len=createDebug.skips.length;i<len;i++)if(createDebug.skips[i].test(name))return!1;for(i=0,len=createDebug.names.length;i<len;i++)if(createDebug.names[i].test(name))return!0;return!1},createDebug.humanize=__webpack_require__("../../common/temp/node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"),createDebug.destroy=function destroy(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(env).forEach((key=>{createDebug[key]=env[key]})),createDebug.names=[],createDebug.skips=[],createDebug.formatters={},createDebug.selectColor=function selectColor(namespace){let hash=0;for(let i=0;i<namespace.length;i++)hash=(hash<<5)-hash+namespace.charCodeAt(i),hash|=0;return createDebug.colors[Math.abs(hash)%createDebug.colors.length]},createDebug.enable(createDebug.load()),createDebug}},"../../common/temp/node_modules/.pnpm/load-script@1.0.0/node_modules/load-script/index.js":module=>{function stdOnEnd(script,cb){script.onload=function(){this.onerror=this.onload=null,cb(null,script)},script.onerror=function(){this.onerror=this.onload=null,cb(new Error("Failed to load "+this.src),script)}}function ieOnEnd(script,cb){script.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,cb(null,script))}}module.exports=function load(src,opts,cb){var head=document.head||document.getElementsByTagName("head")[0],script=document.createElement("script");"function"==typeof opts&&(cb=opts,opts={}),opts=opts||{},cb=cb||function(){},script.type=opts.type||"text/javascript",script.charset=opts.charset||"utf8",script.async=!("async"in opts)||!!opts.async,script.src=src,opts.attrs&&function setAttributes(script,attrs){for(var attr in attrs)script.setAttribute(attr,attrs[attr])}(script,opts.attrs),opts.text&&(script.text=""+opts.text),("onload"in script?stdOnEnd:ieOnEnd)(script,cb),script.onload||stdOnEnd(script,cb),head.appendChild(script)}},"../../common/temp/node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js":module=>{var s=1e3,m=60*s,h=60*m,d=24*h,w=7*d,y=365.25*d;function plural(ms,msAbs,n,name){var isPlural=msAbs>=1.5*n;return Math.round(ms/n)+" "+name+(isPlural?"s":"")}module.exports=function(val,options){options=options||{};var type=typeof val;if("string"===type&&val.length>0)return function parse(str){if((str=String(str)).length>100)return;var match=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);switch((match[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*y;case"weeks":case"week":case"w":return n*w;case"days":case"day":case"d":return n*d;case"hours":case"hour":case"hrs":case"hr":case"h":return n*h;case"minutes":case"minute":case"mins":case"min":case"m":return n*m;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}(val);if("number"===type&&isFinite(val))return options.long?function fmtLong(ms){var msAbs=Math.abs(ms);if(msAbs>=d)return plural(ms,msAbs,d,"day");if(msAbs>=h)return plural(ms,msAbs,h,"hour");if(msAbs>=m)return plural(ms,msAbs,m,"minute");if(msAbs>=s)return plural(ms,msAbs,s,"second");return ms+" ms"}(val):function fmtShort(ms){var msAbs=Math.abs(ms);if(msAbs>=d)return Math.round(ms/d)+"d";if(msAbs>=h)return Math.round(ms/h)+"h";if(msAbs>=m)return Math.round(ms/m)+"m";if(msAbs>=s)return Math.round(ms/s)+"s";return ms+"ms"}(val);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(val))}},"../../common/temp/node_modules/.pnpm/sister@3.0.2/node_modules/sister/src/sister.js":module=>{"use strict";var Sister;Sister=function(){var sister={},events={};return sister.on=function(name,handler){var listener={name,handler};return events[name]=events[name]||[],events[name].unshift(listener),listener},sister.off=function(listener){var index=events[listener.name].indexOf(listener);-1!==index&&events[listener.name].splice(index,1)},sister.trigger=function(name,data){var i,listeners=events[name];if(listeners)for(i=listeners.length;i--;)listeners[i].handler(data)},sister},module.exports=Sister},"../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/FunctionStateMap.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _PlayerStates2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/constants/PlayerStates.js"));exports.default={pauseVideo:{acceptableStates:[_PlayerStates2.default.ENDED,_PlayerStates2.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[_PlayerStates2.default.ENDED,_PlayerStates2.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[_PlayerStates2.default.ENDED,_PlayerStates2.default.PLAYING,_PlayerStates2.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},module.exports=exports.default},"../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/YouTubePlayer.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _debug2=_interopRequireDefault(__webpack_require__("../../common/temp/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js")),_FunctionStateMap2=_interopRequireDefault(__webpack_require__("../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/FunctionStateMap.js")),_eventNames2=_interopRequireDefault(__webpack_require__("../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/eventNames.js")),_functionNames2=_interopRequireDefault(__webpack_require__("../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/functionNames.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const debug=(0,_debug2.default)("youtube-player"),YouTubePlayer={proxyEvents:emitter=>{const events={};for(const eventName of _eventNames2.default){const onEventName="on"+eventName.slice(0,1).toUpperCase()+eventName.slice(1);events[onEventName]=event=>{debug('event "%s"',onEventName,event),emitter.trigger(eventName,event)}}return events},promisifyPlayer:(playerAPIReady,strictState=!1)=>{const functions={};for(const functionName of _functionNames2.default)strictState&&_FunctionStateMap2.default[functionName]?functions[functionName]=(...args)=>playerAPIReady.then((player=>{const stateInfo=_FunctionStateMap2.default[functionName],playerState=player.getPlayerState(),value=player[functionName].apply(player,args);return stateInfo.stateChangeRequired||Array.isArray(stateInfo.acceptableStates)&&!stateInfo.acceptableStates.includes(playerState)?new Promise((resolve=>{const onPlayerStateChange=()=>{const playerStateAfterChange=player.getPlayerState();let timeout;"number"==typeof stateInfo.timeout&&(timeout=setTimeout((()=>{player.removeEventListener("onStateChange",onPlayerStateChange),resolve()}),stateInfo.timeout)),Array.isArray(stateInfo.acceptableStates)&&stateInfo.acceptableStates.includes(playerStateAfterChange)&&(player.removeEventListener("onStateChange",onPlayerStateChange),clearTimeout(timeout),resolve())};player.addEventListener("onStateChange",onPlayerStateChange)})).then((()=>value)):value})):functions[functionName]=(...args)=>playerAPIReady.then((player=>player[functionName].apply(player,args)));return functions}};exports.default=YouTubePlayer,module.exports=exports.default},"../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/constants/PlayerStates.js":(module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},module.exports=exports.default},"../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/eventNames.js":(module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],module.exports=exports.default},"../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/functionNames.js":(module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe","getSphericalProperties","setSphericalProperties"],module.exports=exports.default},"../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/index.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _sister2=_interopRequireDefault(__webpack_require__("../../common/temp/node_modules/.pnpm/sister@3.0.2/node_modules/sister/src/sister.js")),_YouTubePlayer2=_interopRequireDefault(__webpack_require__("../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/YouTubePlayer.js")),_loadYouTubeIframeApi2=_interopRequireDefault(__webpack_require__("../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/loadYouTubeIframeApi.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}let youtubeIframeAPI;exports.default=(maybeElementId,options={},strictState=!1)=>{const emitter=(0,_sister2.default)();if(youtubeIframeAPI||(youtubeIframeAPI=(0,_loadYouTubeIframeApi2.default)(emitter)),options.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof maybeElementId&&!document.getElementById(maybeElementId))throw new Error('Element "'+maybeElementId+'" does not exist.');options.events=_YouTubePlayer2.default.proxyEvents(emitter);const playerAPIReady=new Promise((resolve=>{if("object"==typeof maybeElementId&&maybeElementId.playVideo instanceof Function){resolve(maybeElementId)}else youtubeIframeAPI.then((YT=>{const player=new YT.Player(maybeElementId,options);return emitter.on("ready",(()=>{resolve(player)})),null}))})),playerApi=_YouTubePlayer2.default.promisifyPlayer(playerAPIReady,strictState);return playerApi.on=emitter.on,playerApi.off=emitter.off,playerApi},module.exports=exports.default},"../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/loadYouTubeIframeApi.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _loadScript2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("../../common/temp/node_modules/.pnpm/load-script@1.0.0/node_modules/load-script/index.js"));exports.default=emitter=>new Promise((resolve=>{if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)return void resolve(window.YT);{const protocol="http:"===window.location.protocol?"http:":"https:";(0,_loadScript2.default)(protocol+"//www.youtube.com/iframe_api",(error=>{error&&emitter.trigger("error",error)}))}const previous=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{previous&&previous(),resolve(window.YT)}})),module.exports=exports.default}}]);