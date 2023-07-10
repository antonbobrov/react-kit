"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[218],{"./src/components/ModalAnchor/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>ModalAnchor});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_BaseModal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/BaseModal/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const DefaultModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_BaseModal__WEBPACK_IMPORTED_MODULE_2__.I),ModalAnchor=({anchor,modal:ModalComponent=DefaultModal,children,modalProps})=>{const Component=ModalComponent,[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),button=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(anchor,{onClick:event=>{setIsOpen(!0),anchor.props.onClick?.(event)},onKeyDown:event=>{13===event.keyCode&&setIsOpen(!0),anchor.props.onKeyDown?.(event)},tabIndex:0,role:"button"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[button,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{isOpen,onClose:()=>setIsOpen(!1),...modalProps,children})]})};try{ModalAnchor.displayName="ModalAnchor",ModalAnchor.__docgenInfo={description:"Modal trigger",displayName:"ModalAnchor",props:{anchor:{defaultValue:null,description:"Anchor element",name:"anchor",required:!0,type:{name:"Element"}},modal:{defaultValue:null,description:"Modal to render",name:"modal",required:!1,type:{name:"T"}},modalProps:{defaultValue:null,description:"Modal properties",name:"modalProps",required:!1,type:{name:'{} | Omit<Parameters<T>[0], "children" | "isOpen" | "onClose">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalAnchor/index.tsx#ModalAnchor"]={docgenInfo:ModalAnchor.__docgenInfo,name:"ModalAnchor",path:"src/components/ModalAnchor/index.tsx#ModalAnchor"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VideoPlayer/Mp4/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>VideoPlayerMp4});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),_anton_bobrov_vevet_init__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../vevet-init/lib/esm/index.js"),_utils_prefixedClassNames__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/prefixedClassNames.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const VideoPlayerMp4=({src,autoplay=!1,controls=!0,playsInline=!0,onLoad:onLoadProp,onVideoReady:onVideoReadyProp,onPlayerReady:onPlayerReadyProp})=>{const videoRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),onLoad=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_2__.z)(onLoadProp),onVideoReady=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_2__.z)(onVideoReadyProp),onPlayerReady=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_2__.z)(onPlayerReadyProp),[isLoaded,setIsLoaded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[canUsePlayer]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!(!_anton_bobrov_vevet_init__WEBPACK_IMPORTED_MODULE_3__.vevet||_anton_bobrov_vevet_init__WEBPACK_IMPORTED_MODULE_3__.vevet.isMobile)),[isPlayerReady,setIsPlayerReady]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const{current:video}=videoRef;if(!video||!canUsePlayer)return;let player,playerCallbackDestructor,isDestryed=!1;return Promise.all([__webpack_require__.e(740),__webpack_require__.e(672)]).then(__webpack_require__.bind(__webpack_require__,"../../common/temp/node_modules/.pnpm/video.js@8.2.1/node_modules/video.js/dist/video.es.js")).then((module=>{isDestryed||(player=module.default(video,{}),playerCallbackDestructor=onPlayerReady?.(player),setIsPlayerReady(!0))})).catch((()=>{})),()=>{isDestryed=!0,player?.dispose(),playerCallbackDestructor?.()}}),[canUsePlayer,onPlayerReady,videoRef]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const video=videoRef.current;if(!video)return;const destrutor=onVideoReady?.(video);return()=>destrutor?.()}),[onVideoReady]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{isLoaded&&(canUsePlayer&&isPlayerReady||!canUsePlayer)&&onLoad?.()}),[canUsePlayer,isLoaded,isPlayerReady,onLoad]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:(0,_utils_prefixedClassNames__WEBPACK_IMPORTED_MODULE_4__.I)("video-player-mp4"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{"data-vjs-player":!0,className:"video-js",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("video",{ref:videoRef,disablePictureInPicture:!0,preload:"auto",autoPlay:autoplay,controls,controlsList:"nodownload",playsInline,onLoadedMetadata:()=>setIsLoaded(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("source",{src:`${src}#t=0.1`,type:"video/mp4"})})})})};VideoPlayerMp4.displayName="VideoPlayerMp4";try{VideoPlayerMp4.displayName="VideoPlayerMp4",VideoPlayerMp4.__docgenInfo={description:"Custom mp4 player",displayName:"VideoPlayerMp4",props:{src:{defaultValue:null,description:"Video source",name:"src",required:!0,type:{name:"string"}},onLoad:{defaultValue:null,description:"Event on video loaded",name:"onLoad",required:!1,type:{name:"(() => void)"}},onVideoReady:{defaultValue:null,description:"Event on video ready",name:"onVideoReady",required:!1,type:{name:"((video: HTMLVideoElement) => () => void)"}},onPlayerReady:{defaultValue:null,description:"Event on player ready",name:"onPlayerReady",required:!1,type:{name:"((player: Player) => () => void)"}},autoplay:{defaultValue:{value:"false"},description:"Autoplay video",name:"autoplay",required:!1,type:{name:"boolean"}},controls:{defaultValue:{value:"true"},description:"Use video controls",name:"controls",required:!1,type:{name:"boolean"}},playsInline:{defaultValue:{value:"true"},description:"playsInline",name:"playsInline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VideoPlayer/Mp4/index.tsx#VideoPlayerMp4"]={docgenInfo:VideoPlayerMp4.__docgenInfo,name:"VideoPlayerMp4",path:"src/components/VideoPlayer/Mp4/index.tsx#VideoPlayerMp4"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VideoPlayer/Vimeo/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>VideoPlayerVimeo});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),_utils_prefixedClassNames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/prefixedClassNames.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const VideoPlayerVimeo=({id,onLoad:onLoadProp,onPlayerReady:onPlayerReadyProp,title=!1,portrait=!1,...props})=>{const parentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),onLoad=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_2__.z)(onLoadProp),onPlayerReady=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_2__.z)(onPlayerReadyProp),[initialProps]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let player,playerCallbackDestructor,isDestryed=!1;return __webpack_require__.e(601).then(__webpack_require__.bind(__webpack_require__,"../../common/temp/node_modules/.pnpm/@vimeo+player@2.19.0/node_modules/@vimeo/player/dist/player.es.js")).then((module=>{if(isDestryed)return;const{current:parent}=parentRef;if(!parent)return void onLoad?.();const{default:Player}=module;player=new Player(parent,{id:parseInt(id||"0",10),title,portrait,...initialProps}),player.on("loaded",(()=>onLoad?.())),playerCallbackDestructor=onPlayerReady?.(player)})).catch((()=>{})),()=>{isDestryed=!0,player?.destroy(),playerCallbackDestructor?.()}}),[id,onLoad,onPlayerReady,portrait,title,initialProps]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:(0,_utils_prefixedClassNames__WEBPACK_IMPORTED_MODULE_3__.I)("video-player-vimeo"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{ref:parentRef})})};VideoPlayerVimeo.displayName="VideoPlayerVimeo";try{VideoPlayerVimeo.displayName="VideoPlayerVimeo",VideoPlayerVimeo.__docgenInfo={description:"Vimeo player",displayName:"VideoPlayerVimeo",props:{id:{defaultValue:null,description:"Video ID from vimeo",name:"id",required:!0,type:{name:"string"}},onLoad:{defaultValue:null,description:"Event on video loaded",name:"onLoad",required:!1,type:{name:"(() => void)"}},onPlayerReady:{defaultValue:null,description:"Event on player ready",name:"onPlayerReady",required:!1,type:{name:"((player: Player) => () => void)"}},portrait:{defaultValue:{value:"false"},description:"",name:"portrait",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"false"},description:"",name:"title",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VideoPlayer/Vimeo/index.tsx#VideoPlayerVimeo"]={docgenInfo:VideoPlayerVimeo.__docgenInfo,name:"VideoPlayerVimeo",path:"src/components/VideoPlayer/Vimeo/index.tsx#VideoPlayerVimeo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VideoPlayer/YouTube/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>VideoPlayerYoutube});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),_utils_prefixedClassNames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/prefixedClassNames.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const VideoPlayerYoutube=({id,onLoad:onLoadProp,onPlayerReady:onPlayerReadyProp,...props})=>{const parentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),onLoad=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_2__.z)(onLoadProp),onPlayerReady=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_2__.z)(onPlayerReadyProp),[initialProps]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let player,playerCallbackDestructor,isDestryed=!1;return __webpack_require__.e(297).then(__webpack_require__.t.bind(__webpack_require__,"../../common/temp/node_modules/.pnpm/youtube-player@5.6.0/node_modules/youtube-player/dist/index.js",23)).then((module=>{if(isDestryed)return;const{current:parent}=parentRef;parent?(player=module.default(parent,{videoId:id,playerVars:{modestbranding:1,iv_load_policy:3,enablejsapi:1,...initialProps}}),player.on("ready",(()=>onLoad?.())),playerCallbackDestructor=onPlayerReady?.(player)):onLoad?.()})).catch((()=>{})),()=>{isDestryed=!0,player?.destroy(),playerCallbackDestructor?.()}}),[id,onLoad,onPlayerReady,initialProps]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:(0,_utils_prefixedClassNames__WEBPACK_IMPORTED_MODULE_3__.I)("video-player-youtube"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{ref:parentRef})})};VideoPlayerYoutube.displayName="VideoPlayerYoutube";try{VideoPlayerYoutube.displayName="VideoPlayerYoutube",VideoPlayerYoutube.__docgenInfo={description:"YouTube player",displayName:"VideoPlayerYoutube",props:{id:{defaultValue:null,description:"Video ID from youtube",name:"id",required:!0,type:{name:"string"}},onLoad:{defaultValue:null,description:"Event on video loaded",name:"onLoad",required:!1,type:{name:"(() => void)"}},onPlayerReady:{defaultValue:null,description:"Event on player ready",name:"onPlayerReady",required:!1,type:{name:"((player: YouTubePlayer) => () => void)"}},autoplay:{defaultValue:null,description:"",name:"autoplay",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},cc_lang_pref:{defaultValue:null,description:"",name:"cc_lang_pref",required:!1,type:{name:"string"}},cc_load_policy:{defaultValue:null,description:"",name:"cc_load_policy",required:!1,type:{name:"enum",value:[{value:"1"}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"white"'}]}},controls:{defaultValue:null,description:"",name:"controls",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},disablekb:{defaultValue:null,description:"",name:"disablekb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},enablejsapi:{defaultValue:null,description:"",name:"enablejsapi",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"number"}},fs:{defaultValue:null,description:"",name:"fs",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},hl:{defaultValue:null,description:"",name:"hl",required:!1,type:{name:"string"}},iv_load_policy:{defaultValue:null,description:"",name:"iv_load_policy",required:!1,type:{name:"enum",value:[{value:"1"},{value:"3"}]}},list:{defaultValue:null,description:"",name:"list",required:!1,type:{name:"string"}},listType:{defaultValue:null,description:"",name:"listType",required:!1,type:{name:"enum",value:[{value:'"playlist"'},{value:'"search"'},{value:'"user_uploads"'}]}},loop:{defaultValue:null,description:"",name:"loop",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},modestbranding:{defaultValue:null,description:"",name:"modestbranding",required:!1,type:{name:"enum",value:[{value:"1"}]}},origin:{defaultValue:null,description:"",name:"origin",required:!1,type:{name:"string"}},playlist:{defaultValue:null,description:"",name:"playlist",required:!1,type:{name:"string"}},playsinline:{defaultValue:null,description:"",name:"playsinline",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"number"}},widget_referrer:{defaultValue:null,description:"",name:"widget_referrer",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VideoPlayer/YouTube/index.tsx#VideoPlayerYoutube"]={docgenInfo:VideoPlayerYoutube.__docgenInfo,name:"VideoPlayerYoutube",path:"src/components/VideoPlayer/YouTube/index.tsx#VideoPlayerYoutube"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VideoPlayer/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{VideoPlayer:()=>VideoPlayer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_utils_prefixedClassNames__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/prefixedClassNames.ts"),_Vimeo__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/VideoPlayer/Vimeo/index.tsx"),_YouTube__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/VideoPlayer/YouTube/index.tsx"),_Mp4__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/VideoPlayer/Mp4/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const VideoPlayer=({className,style,source,src,id,onLoad:onLoadProp,youtubeProps,vimeoProps})=>{const[isLoaded,setIsLoaded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),onLoad=(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_3__.z)(onLoadProp);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{isLoaded&&onLoad?.()}),[isLoaded,onLoad]);const loadedClassName=(0,_utils_prefixedClassNames__WEBPACK_IMPORTED_MODULE_4__.I)("loaded"),classNames=classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_utils_prefixedClassNames__WEBPACK_IMPORTED_MODULE_4__.I)("video-player"),isLoaded&&loadedClassName,className);return"mp4"===source&&src?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classNames,style,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Mp4__WEBPACK_IMPORTED_MODULE_5__.b,{src,onLoad:()=>setIsLoaded(!0)})}):["yt","youtube"].includes(source)&&id?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classNames,style,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_YouTube__WEBPACK_IMPORTED_MODULE_6__.x,{...youtubeProps,id,onLoad:()=>setIsLoaded(!0)})}):["vm","vimeo"].includes(source)&&id?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classNames,style,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Vimeo__WEBPACK_IMPORTED_MODULE_7__.w,{...vimeoProps,id,onLoad:()=>setIsLoaded(!0)})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(classNames,loadedClassName),style,children:"Unexpected video source"})};VideoPlayer.displayName="VideoPlayer";try{VideoPlayer.displayName="VideoPlayer",VideoPlayer.__docgenInfo={description:"Custom video player",displayName:"VideoPlayer",props:{onLoad:{defaultValue:null,description:"Event on player loaded",name:"onLoad",required:!1,type:{name:"(() => void)"}},youtubeProps:{defaultValue:null,description:"YouTube player props",name:"youtubeProps",required:!1,type:{name:'Omit<IVideoPlayerYoutubeProps, "onLoad" | "id">'}},vimeoProps:{defaultValue:null,description:"Vimeo player props",name:"vimeoProps",required:!1,type:{name:'Omit<IVideoPlayerVimeoProps, "onLoad" | "id">'}},source:{defaultValue:null,description:"Video source type",name:"source",required:!0,type:{name:"enum",value:[{value:'"mp4"'},{value:'"yt"'},{value:'"youtube"'},{value:'"vm"'},{value:'"vimeo"'}]}},src:{defaultValue:null,description:"Video source (when want to use html video)",name:"src",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Video id (when want to use youtube or vimeo)",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VideoPlayer/index.tsx#VideoPlayer"]={docgenInfo:VideoPlayer.__docgenInfo,name:"VideoPlayer",path:"src/components/VideoPlayer/index.tsx#VideoPlayer"})}catch(__react_docgen_typescript_loader_error){}try{VideoPlayerMp4.displayName="VideoPlayerMp4",VideoPlayerMp4.__docgenInfo={description:"Custom mp4 player",displayName:"VideoPlayerMp4",props:{src:{defaultValue:null,description:"Video source",name:"src",required:!0,type:{name:"string"}},onLoad:{defaultValue:null,description:"Event on video loaded",name:"onLoad",required:!1,type:{name:"(() => void)"}},onVideoReady:{defaultValue:null,description:"Event on video ready",name:"onVideoReady",required:!1,type:{name:"((video: HTMLVideoElement) => () => void)"}},onPlayerReady:{defaultValue:null,description:"Event on player ready",name:"onPlayerReady",required:!1,type:{name:"((player: Player) => () => void)"}},autoplay:{defaultValue:{value:"false"},description:"Autoplay video",name:"autoplay",required:!1,type:{name:"boolean"}},controls:{defaultValue:{value:"true"},description:"Use video controls",name:"controls",required:!1,type:{name:"boolean"}},playsInline:{defaultValue:{value:"true"},description:"playsInline",name:"playsInline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VideoPlayer/index.tsx#VideoPlayerMp4"]={docgenInfo:VideoPlayerMp4.__docgenInfo,name:"VideoPlayerMp4",path:"src/components/VideoPlayer/index.tsx#VideoPlayerMp4"})}catch(__react_docgen_typescript_loader_error){}try{VideoPlayerVimeo.displayName="VideoPlayerVimeo",VideoPlayerVimeo.__docgenInfo={description:"Vimeo player",displayName:"VideoPlayerVimeo",props:{id:{defaultValue:null,description:"Video ID from vimeo",name:"id",required:!0,type:{name:"string"}},onLoad:{defaultValue:null,description:"Event on video loaded",name:"onLoad",required:!1,type:{name:"(() => void)"}},onPlayerReady:{defaultValue:null,description:"Event on player ready",name:"onPlayerReady",required:!1,type:{name:"((player: Player) => () => void)"}},portrait:{defaultValue:{value:"false"},description:"",name:"portrait",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"false"},description:"",name:"title",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VideoPlayer/index.tsx#VideoPlayerVimeo"]={docgenInfo:VideoPlayerVimeo.__docgenInfo,name:"VideoPlayerVimeo",path:"src/components/VideoPlayer/index.tsx#VideoPlayerVimeo"})}catch(__react_docgen_typescript_loader_error){}try{VideoPlayerYoutube.displayName="VideoPlayerYoutube",VideoPlayerYoutube.__docgenInfo={description:"YouTube player",displayName:"VideoPlayerYoutube",props:{id:{defaultValue:null,description:"Video ID from youtube",name:"id",required:!0,type:{name:"string"}},onLoad:{defaultValue:null,description:"Event on video loaded",name:"onLoad",required:!1,type:{name:"(() => void)"}},onPlayerReady:{defaultValue:null,description:"Event on player ready",name:"onPlayerReady",required:!1,type:{name:"((player: YouTubePlayer) => () => void)"}},autoplay:{defaultValue:null,description:"",name:"autoplay",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},cc_lang_pref:{defaultValue:null,description:"",name:"cc_lang_pref",required:!1,type:{name:"string"}},cc_load_policy:{defaultValue:null,description:"",name:"cc_load_policy",required:!1,type:{name:"enum",value:[{value:"1"}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"white"'}]}},controls:{defaultValue:null,description:"",name:"controls",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},disablekb:{defaultValue:null,description:"",name:"disablekb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},enablejsapi:{defaultValue:null,description:"",name:"enablejsapi",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"number"}},fs:{defaultValue:null,description:"",name:"fs",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},hl:{defaultValue:null,description:"",name:"hl",required:!1,type:{name:"string"}},iv_load_policy:{defaultValue:null,description:"",name:"iv_load_policy",required:!1,type:{name:"enum",value:[{value:"1"},{value:"3"}]}},list:{defaultValue:null,description:"",name:"list",required:!1,type:{name:"string"}},listType:{defaultValue:null,description:"",name:"listType",required:!1,type:{name:"enum",value:[{value:'"playlist"'},{value:'"search"'},{value:'"user_uploads"'}]}},loop:{defaultValue:null,description:"",name:"loop",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},modestbranding:{defaultValue:null,description:"",name:"modestbranding",required:!1,type:{name:"enum",value:[{value:"1"}]}},origin:{defaultValue:null,description:"",name:"origin",required:!1,type:{name:"string"}},playlist:{defaultValue:null,description:"",name:"playlist",required:!1,type:{name:"string"}},playsinline:{defaultValue:null,description:"",name:"playsinline",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"number"}},widget_referrer:{defaultValue:null,description:"",name:"widget_referrer",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VideoPlayer/index.tsx#VideoPlayerYoutube"]={docgenInfo:VideoPlayerYoutube.__docgenInfo,name:"VideoPlayerYoutube",path:"src/components/VideoPlayer/index.tsx#VideoPlayerYoutube"})}catch(__react_docgen_typescript_loader_error){}},"../react-hooks/lib/esm/hooks/usePropState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>usePropState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function usePropState(prop){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prop),state=_a[0],setState=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setState(prop)}),[prop]),[state,setState]}},"../react-hooks/lib/esm/utils/types/isUndefined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isUndefined(value){return void 0===value}__webpack_require__.d(__webpack_exports__,{o:()=>isUndefined})},"./src/components/BaseVideoModal/BaseVideoModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithAnchor:()=>WithAnchor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BaseVideoModal_stories});var usePropState=__webpack_require__("../react-hooks/lib/esm/hooks/usePropState.js"),react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("../../common/temp/node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),prefixedClassNames=__webpack_require__("./src/utils/prefixedClassNames.ts"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Component=({onClick})=>(0,jsx_runtime.jsx)("button",{type:"button",className:(0,prefixedClassNames.I)("base-video-modal__close"),onClick,children:"Close"});Component.displayName="Component";const CloseButton_CloseButton=(0,react.memo)(Component);try{Component.displayName="Component",Component.__docgenInfo={description:"",displayName:"Component",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseVideoModal/CloseButton.tsx#Component"]={docgenInfo:Component.__docgenInfo,name:"Component",path:"src/components/BaseVideoModal/CloseButton.tsx#Component"})}catch(__react_docgen_typescript_loader_error){}try{CloseButton_CloseButton.displayName="CloseButton",CloseButton_CloseButton.__docgenInfo={description:"",displayName:"CloseButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseVideoModal/CloseButton.tsx#CloseButton"]={docgenInfo:CloseButton_CloseButton.__docgenInfo,name:"CloseButton",path:"src/components/BaseVideoModal/CloseButton.tsx#CloseButton"})}catch(__react_docgen_typescript_loader_error){}var BaseModal=__webpack_require__("./src/components/BaseModal/index.tsx"),useEvent=__webpack_require__("../react-hooks/lib/esm/hooks/useEvent.js"),esm=__webpack_require__("../vevet-init/lib/esm/index.js"),isUndefined=__webpack_require__("../react-hooks/lib/esm/utils/types/isUndefined.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function useWrapperSize(getSizeProp){const[size,setSize]=(0,react.useState)({width:0,height:0}),getSize=(0,useEvent.z)((()=>{if(getSizeProp)return getSizeProp();const{viewport}=esm.vevet,maxWidth=viewport.width*(viewport.isPhone?1:.8);let height=viewport.height-120,width=height*(1/.5625);return width>maxWidth&&(width=maxWidth,height=.5625*maxWidth),width>1800&&(width=1800,height=1012.5),{width,height}}));return(0,react.useEffect)((()=>setSize(getSize())),[getSize]),function useOnResize(effect,deps,settingsProp){(0,react.useEffect)((function(){var destructor=effect(),settings=__assign({timeout:0,isMobileOptimizedTarget:!0},settingsProp),target=(0,isUndefined.o)(settings.target)?"":settings.target;target=settings.isMobileOptimizedTarget&&esm.vevet.isMobile?"w":target;var viewportCallback=esm.vevet.viewport.add(target,(function(){null==destructor||destructor(),destructor=effect()}),settings);return function(){viewportCallback.remove(),null==destructor||destructor()}}),deps)}((()=>setSize(getSize())),[getSize],{name:"BaseVideoModal"}),size}var VideoPlayer=__webpack_require__("./src/components/VideoPlayer/index.tsx");const BaseVideoModal=({className,player,wrapperProps,renderCloseButton:CloseButton=CloseButton_CloseButton,getWrapperSize,...modalProps})=>{const[isLoaded,setIsLoaded]=(0,react.useState)(!1),wrapperSize=useWrapperSize(getWrapperSize);return(0,jsx_runtime.jsx)(BaseModal.I,{...modalProps,className:classnames_default()(className,(0,prefixedClassNames.I)("base-video-modal")),wrapperProps:{...wrapperProps,className:classnames_default()(wrapperProps?.className,(0,prefixedClassNames.I)("base-video-modal__wrapper")),style:{...wrapperProps?.style,...wrapperSize}},renderCloseButton:CloseButton,children:(0,jsx_runtime.jsx)("div",{className:(0,prefixedClassNames.I)("base-video-modal__container",isLoaded&&"base-video-modal__container_loaded"),children:(0,jsx_runtime.jsx)(VideoPlayer.VideoPlayer,{...player,onLoad:()=>setIsLoaded(!0)})})})};BaseVideoModal.displayName="BaseVideoModal";try{BaseVideoModal.displayName="BaseVideoModal",BaseVideoModal.__docgenInfo={description:"",displayName:"BaseVideoModal",props:{player:{defaultValue:null,description:"Video player props",name:"player",required:!0,type:{name:"IVideoPlayer"}},getWrapperSize:{defaultValue:null,description:"Get container size",name:"getWrapperSize",required:!1,type:{name:"TGetBaseVideoModalWrapperSize"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},duration:{defaultValue:{value:"350"},description:"Animation duration",name:"duration",required:!1,type:{name:"number"}},isOpen:{defaultValue:null,description:"The modal is opened",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Event on modal close",name:"onClose",required:!1,type:{name:"(() => void)"}},parentNode:{defaultValue:null,description:"Parent element of the modal",name:"parentNode",required:!1,type:{name:"Element | null"}},onOpen:{defaultValue:null,description:"Event on modal open",name:"onOpen",required:!1,type:{name:"(() => void)"}},isUnderneathScrollingDisabled:{defaultValue:{value:"true"},description:"Disable scrolling beneath the modal",name:"isUnderneathScrollingDisabled",required:!1,type:{name:"boolean"}},isRestoreFocusOnClose:{defaultValue:{value:"true"},description:"Restore focus on close",name:"isRestoreFocusOnClose",required:!1,type:{name:"boolean"}},renderCloseButton:{defaultValue:null,description:"Close Button custom renderer",name:"renderCloseButton",required:!1,type:{name:"TModalCloseButtonRenderer"}},renderAnimation:{defaultValue:null,description:"Custom animation renderer",name:"renderAnimation",required:!1,type:{name:"TModalRenderAnimation"}},wrapperProps:{defaultValue:null,description:"Wrapper element properties",name:"wrapperProps",required:!1,type:{name:"IBaseComponent"}},scrollAreaProps:{defaultValue:null,description:"ScrollArea element properties",name:"scrollAreaProps",required:!1,type:{name:"IBaseComponent"}},overlayProps:{defaultValue:null,description:"Overlay element properties",name:"overlayProps",required:!1,type:{name:"IBaseComponent"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseVideoModal/index.tsx#BaseVideoModal"]={docgenInfo:BaseVideoModal.__docgenInfo,name:"BaseVideoModal",path:"src/components/BaseVideoModal/index.tsx#BaseVideoModal"})}catch(__react_docgen_typescript_loader_error){}var ModalAnchor=__webpack_require__("./src/components/ModalAnchor/index.tsx");const BaseVideoModal_stories={title:"Modals/BaseVideoModal",component:BaseVideoModal,tags:["autodocs"],args:{player:{source:"mp4",src:"./video/video.mp4"}}},Default=(({isOpen:isOpenProp,...props})=>{const[isOpen,setIsOpen]=(0,usePropState.W)(isOpenProp);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(BaseVideoModal,{...props,isOpen,onClose:()=>setIsOpen(!1)}),(0,jsx_runtime.jsx)("button",{type:"button",onClick:()=>setIsOpen(!0),children:"Open modal"})]})}).bind({});Default.args={};const TemplateWithAnchor=({player})=>(0,jsx_runtime.jsx)(ModalAnchor.R,{anchor:(0,jsx_runtime.jsx)("button",{type:"button",children:"Open modal"}),modal:BaseVideoModal,modalProps:{player}});TemplateWithAnchor.displayName="TemplateWithAnchor";const WithAnchor=TemplateWithAnchor.bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'({\n  isOpen: isOpenProp,\n  ...props\n}) => {\n  const [isOpen, setIsOpen] = usePropState(isOpenProp);\n  return <>\r\n      <BaseVideoModal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)} />\r\n\r\n      <button type="button" onClick={() => setIsOpen(true)}>\r\n        Open modal\r\n      </button>\r\n    </>;\n}',...Default.parameters?.docs?.source}}},WithAnchor.parameters={...WithAnchor.parameters,docs:{...WithAnchor.parameters?.docs,source:{originalSource:'({\n  player\n}) => <ModalAnchor anchor={<button type="button">Open modal</button>} modal={BaseVideoModal} modalProps={{\n  player\n}} />',...WithAnchor.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithAnchor"]}}]);