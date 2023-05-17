/*! For license information please see ReactMultiSelect-ReactMultiSelect-stories.3a984000.iframe.bundle.js.LICENSE.txt */
(self.webpackChunktable_header_with_sub_header=self.webpackChunktable_header_with_sub_header||[]).push([[526],{"./.storybook/utils/ariaAnnounce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=message=>{const liveRegion=document.createElement("div");liveRegion.style.position="absolute",liveRegion.style.width="1px",liveRegion.style.height="1px",liveRegion.style.marginTop="-1px",liveRegion.style.clip="rect(1px, 1px, 1px, 1px)",liveRegion.style.overflow="hidden",liveRegion.setAttribute("aria-live","assertive"),liveRegion.setAttribute("aria-atomic","true"),liveRegion.setAttribute("role","status"),document.body.appendChild(liveRegion),setTimeout((()=>{liveRegion.innerText=message}),50),setTimeout((()=>{document.body.removeChild(liveRegion)}),7e3)}},"./stories/ReactMultiSelect/ReactMultiSelect.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactMultiSelect_stories});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),ariaAnnounce=__webpack_require__("./.storybook/utils/ariaAnnounce.js");const keyboardNavigation=(isListboxOpen,listboxRef,handleSelectOption,selectionModel)=>{const[focusedOptionIndex,setFocusedOptionIndex]=(0,react.useState)(0);(0,react.useEffect)((()=>{isListboxOpen&&listboxRef.current.focus()}),[isListboxOpen,listboxRef]);return event=>{const{key}=event,options=Array.from(listboxRef.current.children);let newIndex;switch(key){case"ArrowUp":event.preventDefault(),newIndex=focusedOptionIndex-1>=0?focusedOptionIndex-1:options.length-1,options[newIndex].focus(),setFocusedOptionIndex(newIndex);break;case"ArrowDown":event.preventDefault(),newIndex=focusedOptionIndex+1<options.length?focusedOptionIndex+1:0,options[newIndex].focus(),setFocusedOptionIndex(newIndex);break;case"Home":event.preventDefault(),options[0].focus(),setFocusedOptionIndex(0);break;case"End":event.preventDefault(),options[options.length-1].focus(),setFocusedOptionIndex(options.length-1);break;case" ":case"Enter":event.preventDefault(),handleSelectOption(options[focusedOptionIndex].textContent)}}};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ReactMultiSelect_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/ReactMultiSelect/ReactMultiSelect.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ReactMultiSelect_module.Z,options);const ReactMultiSelect_ReactMultiSelect_module=ReactMultiSelect_module.Z&&ReactMultiSelect_module.Z.locals?ReactMultiSelect_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const veganIngredients=["Tofu","Almond Milk","Avocado","Quinoa","Kale","Lentils"],ReactMultiSelect=({selectionModel})=>{const[selectedOptions,setSelectedOptions]=(0,react.useState)([]),[isListboxOpen,setListboxOpen]=(0,react.useState)(!1),listboxRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{isListboxOpen&&listboxRef.current.children.length>0&&listboxRef.current.children[0].focus()}),[isListboxOpen]);const handleSelectOption=option=>{let newSelectedOptions;newSelectedOptions="alternative"===selectionModel?[option]:selectedOptions.includes(option)?selectedOptions.filter((item=>item!==option)):[...selectedOptions,option],setSelectedOptions(newSelectedOptions),(0,ariaAnnounce.Z)(`Selected ${newSelectedOptions.length} items.`)},handleKeyDown=keyboardNavigation(isListboxOpen,listboxRef,handleSelectOption,selectionModel);return(0,jsx_runtime.jsxs)("div",{className:ReactMultiSelect_ReactMultiSelect_module["multi-select-container"],children:[(0,jsx_runtime.jsx)("h2",{children:"Your Ingredients"}),(0,jsx_runtime.jsx)("div",{className:ReactMultiSelect_ReactMultiSelect_module["selected-options"],children:selectedOptions.map(((option,index)=>(0,jsx_runtime.jsxs)("button",{onClick:()=>(option=>{const newSelectedOptions=selectedOptions.filter((item=>item!==option));setSelectedOptions(newSelectedOptions),(0,ariaAnnounce.Z)(`Removed ${option}. ${newSelectedOptions.length} items remaining.`)})(option),"aria-label":`Remove ${option}`,children:[option," ×"]},index)))}),(0,jsx_runtime.jsx)("button",{onClick:()=>setListboxOpen(!isListboxOpen),children:"Toggle Listbox"}),isListboxOpen&&(0,jsx_runtime.jsx)("ul",{ref:listboxRef,className:ReactMultiSelect_ReactMultiSelect_module.listbox,role:"listbox","aria-label":"Ingredients",tabIndex:"0",onKeyDown:handleKeyDown,children:veganIngredients.map(((option,index)=>(0,jsx_runtime.jsx)("li",{role:"option","aria-selected":selectedOptions.includes(option),className:classnames_default()(ReactMultiSelect_ReactMultiSelect_module["listbox-option"],{[ReactMultiSelect_ReactMultiSelect_module.selected]:selectedOptions.includes(option)}),onClick:()=>handleSelectOption(option),tabIndex:"-1",children:option},index)))})]})};ReactMultiSelect.displayName="ReactMultiSelect",ReactMultiSelect.propTypes={selectionModel:prop_types_default().oneOf(["default","alternative"])},ReactMultiSelect.defaultProps={selectionModel:"default"},ReactMultiSelect.__docgenInfo={description:"",methods:[],displayName:"ReactMultiSelect",props:{selectionModel:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'alternative'",computed:!1}]},required:!1}}};const ReactMultiSelect_ReactMultiSelect=ReactMultiSelect,ReactMultiSelect_stories={title:"Components/ReactMultiSelect",component:ReactMultiSelect_ReactMultiSelect,parameters:{docs:{description:{component:"\n**ReactMultiSelect** is a versatile component for multi-selection scenarios. \n\n## Features\n- A dropdown list with multi-select options.\n- Keyboard support for accessibility.\n- Support for different selection models.\n\n## Selection Models\nThe selection model can be one of the following:\n- **Default**: Allows selection and deselection on click.\n- **Alternative**: Selection on click but deselection only when the selected item is clicked in the selected items list.\n\n## Accessibility\nThe **ReactMultiSelect** component uses the `ariaAnnounce` function for accessibility. This function creates an announcement that will be read by screen readers, helping to ensure that important updates or notifications are communicated to all users, regardless of their accessibility needs.\n\nThe `ariaAnnounce` function is a part of the open-source project [aria-announce](https://github.com/WhatSock/aria-announce), which provides utilities for managing live region announcements in web applications.\n\n**Usage:**\n```jsx\nimport ariaAnnounce from './ariaAnnounce';\n\n// Somewhere in your code...\nariaAnnounce('This is an important announcement for screen readers.');\n```\n"}},docsOnly:!0},argTypes:{selectionModel:{control:{type:"radio",options:["default","alternative"]},defaultValue:"default",description:"Choose the selection model for the listbox"}}},Template=args=>(0,jsx_runtime.jsx)(ReactMultiSelect_ReactMultiSelect,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <ReactMultiSelect {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/ReactMultiSelect/ReactMultiSelect.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".UX1IHqmT7KtM1Jcz_TFU {\n  width: 300px;\n  font-family: Arial, sans-serif;\n}\n\n.UX1IHqmT7KtM1Jcz_TFU h2 {\n  color: #6200ee;\n  margin-bottom: 10px;\n}\n\n.PWE_ldVrp1Mp25AFkQCu {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n\n.PWE_ldVrp1Mp25AFkQCu button {\n  background-color: #6200ee;\n  color: #fff;\n  margin: 5px;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.PWE_ldVrp1Mp25AFkQCu button:focus-visible {\n  outline: 3px solid #03dac5;\n}\n\n.PWE_ldVrp1Mp25AFkQCu button:hover {\n  background-color: #3700b3;\n}\n\n.HCIs5CatQZjbg4uOAVq9 {\n  border: 1px solid #6200ee;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  max-height: 150px;\n  overflow-y: auto;\n}\n\n.IN5i5s8t0kVenVPUIrsw {\n  padding: 10px;\n  cursor: pointer;\n}\n\n.IN5i5s8t0kVenVPUIrsw:hover {\n  background-color: #3700b3;\n  color: #fff;\n}\n\n.IN5i5s8t0kVenVPUIrsw:focus-visible {\n  outline: 3px solid #03dac5;\n}\n\n.IN5i5s8t0kVenVPUIrsw.AXTQ8b4ORg3ensiaTjKA {\n  background-color: #6200ee;\n  color: #fff;\n}","",{version:3,sources:["webpack://./stories/ReactMultiSelect/ReactMultiSelect.module.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb",sourcesContent:[".multi-select-container {\n  width: 300px;\n  font-family: Arial, sans-serif;\n}\n\n.multi-select-container h2 {\n  color: #6200ee;\n  margin-bottom: 10px;\n}\n\n.selected-options {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n\n.selected-options button {\n  background-color: #6200ee;\n  color: #fff;\n  margin: 5px;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.selected-options button:focus-visible {\n  outline: 3px solid #03dac5;\n}\n\n.selected-options button:hover {\n  background-color: #3700b3;\n}\n\n.listbox {\n  border: 1px solid #6200ee;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  max-height: 150px;\n  overflow-y: auto;\n}\n\n.listbox-option {\n  padding: 10px;\n  cursor: pointer;\n}\n\n.listbox-option:hover {\n  background-color: #3700b3;\n  color: #fff;\n}\n\n.listbox-option:focus-visible {\n  outline: 3px solid #03dac5;\n}\n\n.listbox-option.selected {\n  background-color: #6200ee;\n  color: #fff;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"multi-select-container":"UX1IHqmT7KtM1Jcz_TFU","selected-options":"PWE_ldVrp1Mp25AFkQCu",listbox:"HCIs5CatQZjbg4uOAVq9","listbox-option":"IN5i5s8t0kVenVPUIrsw",selected:"AXTQ8b4ORg3ensiaTjKA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);