"use strict";(self.webpackChunk_anton_bobrov_react_components=self.webpackChunk_anton_bobrov_react_components||[]).push([[262],{"./src/components/BaseImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>BaseImage});var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),getApp=__webpack_require__("../../common/temp/node_modules/.pnpm/vevet@4.0.1_typescript@4.8.2/node_modules/vevet/lib/esm/utils/internal/getApp.js");function imageSizesToSrcSet(sizes){return Object.keys(sizes).map((key=>{const value=sizes[key];if(value)return`${value} ${key}w`})).filter((item=>!!item)).join(", ")}function getSrcSet({srcSet,paths}){if(srcSet)return srcSet;if(!paths)return;const imagePaths=paths?function imagePathsToProps(data){const app="undefined"!=typeof window?(0,getApp.M)():void 0;let src=data.original;data.thumb&&(src=data.thumb),app&&app.isWebpSupported&&data.thumbWebp&&(src=data.thumbWebp);let srcSet="";return app&&app.isWebpSupported&&"sizesWebp"in data&&data.sizesWebp?srcSet=imageSizesToSrcSet(data.sizesWebp):"sizes"in data&&data.sizes&&(srcSet=imageSizesToSrcSet(data.sizes)),{src,srcSet}}(paths):void 0;return imagePaths?imagePaths.srcSet||imagePaths.src:void 0}var generatePlaceholderImage=__webpack_require__("./src/components/BaseImage/utils/generatePlaceholderImage.ts"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const BaseImage=(0,react.forwardRef)((({src:srcProp,paths,srcSet:srcSetProp,...props},ref)=>{const width=paths?.width??props.width,height=paths?.height??props.height,src=function getSrc({paths,src}){return paths?paths.thumb||paths.original:src}({src:srcProp,paths}),[srcSet,setSrcSet]=(0,react.useState)((0,generatePlaceholderImage.q)(width,height));(0,react.useEffect)((()=>{setSrcSet(getSrcSet({srcSet:srcSetProp,paths}))}),[paths,srcSetProp]);const alt=paths?.alt??props.alt??src;return(0,jsx_runtime.jsx)("img",{...props,ref,src,srcSet,width,height,alt})}));BaseImage.displayName="BaseImage";try{BaseImage.displayName="BaseImage",BaseImage.__docgenInfo={description:"BaseImage component for rendering images. It supports adaptive paths\nto ensure optimal image loading based on the device or screen size.",displayName:"BaseImage",props:{paths:{defaultValue:null,description:"Image paths",name:"paths",required:!1,type:{name:"IImagePaths | IImageAdaptivePaths"}},src:{defaultValue:null,description:"Image `src`",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"Alternate text",name:"alt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BaseImage/index.tsx#BaseImage"]={docgenInfo:BaseImage.__docgenInfo,name:"BaseImage",path:"src/components/BaseImage/index.tsx#BaseImage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BaseImage/utils/generatePlaceholderImage.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>generatePlaceholderImage});var _anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../react-hooks/lib/esm/utils/types/isUndefined.js");const defaultPlaceholderImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAAAAAKVnuc8AAAACdFJOU/8A5bcwSgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAFFJREFUaEPtzTEBADAMBKG+f9PVwJLpMMDbgRJSQkpICSkhJaSElJASUkJKSAkpISWkhJSQElJCSkgJKSElpISUkBJSQkpICSkhJaSElJASsH3mMicR4O5sFAAAAABJRU5ErkJggg==";function generatePlaceholderImage(width,height){if((0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_0__.o)(width)&&(0,_anton_bobrov_react_hooks__WEBPACK_IMPORTED_MODULE_0__.o)(height))return defaultPlaceholderImage;return`data:image/svg+xml;base64,${btoa(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${height}" fill="transparent"/></svg>`)}`}},"../react-hooks/lib/esm/utils/types/isUndefined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isUndefined(value){return void 0===value}__webpack_require__.d(__webpack_exports__,{o:()=>isUndefined})},"./src/components/BaseImage/BaseImage.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithAdaptivePaths:()=>WithAdaptivePaths,WithPaths:()=>WithPaths,WithSrc:()=>WithSrc,WithSrcSet:()=>WithSrcSet,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Image/BaseImage",component:__webpack_require__("./src/components/BaseImage/index.tsx").Z,tags:["autodocs"]},WithSrc={args:{src:"./image/image.jpg",width:200,alt:"simple image"}},WithSrcSet={args:{srcSet:"./image/image.jpg, ./image/640.png 640w, ./image/1920.png 1920w",width:200,alt:"image with srcset"}},WithPaths={args:{paths:{original:"",thumb:"./image/image.jpg",thumbWebp:"./image/image.webp",width:200,alt:"image with paths"}}},WithAdaptivePaths={args:{paths:{original:"",thumb:"./image/image.jpg",thumbWebp:"./image/image.webp",sizes:{640:"./image/640.png",750:"./image/750.png",1024:"./image/1024.png",1440:"./image/1440.png",1920:"./image/1920.png",2560:"./image/2560.png"},sizesWebp:{640:"./image/640.webp",750:"./image/750.webp",1024:"./image/1024.webp",1440:"./image/1440.webp",1920:"./image/1920.webp",2560:"./image/2560.webp"},width:200,alt:"adaptive image"}}};WithSrc.parameters={...WithSrc.parameters,docs:{...WithSrc.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: './image/image.jpg',\n    width: 200,\n    alt: 'simple image'\n  }\n}",...WithSrc.parameters?.docs?.source}}},WithSrcSet.parameters={...WithSrcSet.parameters,docs:{...WithSrcSet.parameters?.docs,source:{originalSource:"{\n  args: {\n    srcSet: './image/image.jpg, ./image/640.png 640w, ./image/1920.png 1920w',\n    width: 200,\n    alt: 'image with srcset'\n  }\n}",...WithSrcSet.parameters?.docs?.source}}},WithPaths.parameters={...WithPaths.parameters,docs:{...WithPaths.parameters?.docs,source:{originalSource:"{\n  args: {\n    paths: {\n      original: '',\n      thumb: './image/image.jpg',\n      thumbWebp: './image/image.webp',\n      width: 200,\n      alt: 'image with paths'\n    }\n  }\n}",...WithPaths.parameters?.docs?.source}}},WithAdaptivePaths.parameters={...WithAdaptivePaths.parameters,docs:{...WithAdaptivePaths.parameters?.docs,source:{originalSource:"{\n  args: {\n    paths: {\n      original: '',\n      thumb: './image/image.jpg',\n      thumbWebp: './image/image.webp',\n      sizes: {\n        640: './image/640.png',\n        750: './image/750.png',\n        1024: './image/1024.png',\n        1440: './image/1440.png',\n        1920: './image/1920.png',\n        2560: './image/2560.png'\n      },\n      sizesWebp: {\n        640: './image/640.webp',\n        750: './image/750.webp',\n        1024: './image/1024.webp',\n        1440: './image/1440.webp',\n        1920: './image/1920.webp',\n        2560: './image/2560.webp'\n      },\n      width: 200,\n      alt: 'adaptive image'\n    }\n  }\n}",...WithAdaptivePaths.parameters?.docs?.source}}};const __namedExportsOrder=["WithSrc","WithSrcSet","WithPaths","WithAdaptivePaths"]}}]);