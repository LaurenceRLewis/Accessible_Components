/*! For license information please see ReactTabComponent-TabComponent-stories.6299a65d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktable_header_with_sub_header=self.webpackChunktable_header_with_sub_header||[]).push([[263],{"./stories/ReactTabComponent/TabComponent.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TabComponent_stories});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TabComponent_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/ReactTabComponent/TabComponent.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TabComponent_module.Z,options);const ReactTabComponent_TabComponent_module=TabComponent_module.Z&&TabComponent_module.Z.locals?TabComponent_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tab=({id,title,isSelected,onClick,onKeyDown,textColor,tabBackground})=>(0,jsx_runtime.jsx)("button",{role:"tab",id,"aria-controls":`tabpanel-${id}`,"aria-selected":isSelected,onClick:()=>onClick(id),onKeyDown:event=>onKeyDown(id,event),tabIndex:isSelected?0:-1,style:{color:textColor,backgroundColor:isSelected?tabBackground.selected:tabBackground.default},children:title});Tab.displayName="Tab";const TabPanel=({id,isSelected,children,tabIndex})=>(0,jsx_runtime.jsx)("div",{role:"tabpanel",id:`tabpanel-${id}`,"aria-labelledby":`${id}`,hidden:!isSelected,tabIndex,"data-expanded":isSelected,children});TabPanel.displayName="TabPanel";const TabComponent=({tabs,tabPanelTabindex,triggerActivation="automated",textColor="rgba(0, 0, 0, 1)",tabBackground={default:"rgba(209, 203, 219, 1)",selected:"rgba(156, 39, 176, 1)"}})=>{const[selectedTab,setSelectedTab]=(0,react.useState)(tabs[0].id),[isAccordionView,setIsAccordionView]=(0,react.useState)(window.innerWidth<400),handleWindowResize=()=>{setIsAccordionView(window.innerWidth<400)},windowResizeEvent=(0,react.useRef)(null);(0,react.useEffect)((()=>(windowResizeEvent.current=handleWindowResize,window.addEventListener("resize",windowResizeEvent.current),()=>{window.removeEventListener("resize",windowResizeEvent.current)})),[]);const handleKeyDown=(id,event)=>{const currentIndex=tabs.findIndex((tab=>tab.id===id));if("ArrowRight"===event.key){event.preventDefault();const nextIndex=(currentIndex+1)%tabs.length;"automated"===triggerActivation&&setSelectedTab(tabs[nextIndex].id),document.getElementById(tabs[nextIndex].id).focus()}else if("ArrowLeft"===event.key){event.preventDefault();const prevIndex=(currentIndex-1+tabs.length)%tabs.length;"automated"===triggerActivation&&setSelectedTab(tabs[prevIndex].id),document.getElementById(tabs[prevIndex].id).focus()}else"Home"===event.key?(event.preventDefault(),"automated"===triggerActivation&&setSelectedTab(tabs[0].id),document.getElementById(tabs[0].id).focus()):"End"===event.key?(event.preventDefault(),"automated"===triggerActivation&&setSelectedTab(tabs[tabs.length-1].id),document.getElementById(tabs[tabs.length-1].id).focus()):"Enter"!==event.key&&" "!==event.key||"manual"!==triggerActivation||(event.preventDefault(),setSelectedTab(id))};return(0,jsx_runtime.jsxs)("div",{className:ReactTabComponent_TabComponent_module.tabContainer,children:[(0,jsx_runtime.jsx)("div",{role:"tablist","aria-label":"HTML and ARIA information",className:ReactTabComponent_TabComponent_module.tabList,children:tabs.map((({id,title})=>(0,jsx_runtime.jsx)(Tab,{id,title,isSelected:selectedTab===id,onClick:()=>setSelectedTab(id),onKeyDown:handleKeyDown,textColor,tabBackground},id)))}),tabs.map((({id,content})=>(0,jsx_runtime.jsx)(TabPanel,{id,isSelected:selectedTab===id,tabIndex:tabPanelTabindex?0:void 0,children:content},id)))]})};TabComponent.displayName="TabComponent",TabComponent.__docgenInfo={description:"",methods:[],displayName:"TabComponent",props:{triggerActivation:{defaultValue:{value:'"automated"',computed:!1},required:!1},textColor:{defaultValue:{value:'"rgba(0, 0, 0, 1)"',computed:!1},required:!1},tabBackground:{defaultValue:{value:'{\n  default: "rgba(209, 203, 219, 1)",\n  selected: "rgba(156, 39, 176, 1)",\n}',computed:!1},required:!1}}};const TabComponent_stories={title:"Components/ReactTabComponent",component:TabComponent,parameters:{docs:{description:{component:"\nThe `TabComponent` is a UI component that allows users to switch between different sections of content. Each tab is associated with a content section, and selecting a tab brings its content to the forefront, hiding the content of other tabs.\n\nThe component has two main parts:\n\n- The tab list, which includes all the tabs. When a user interacts with a tab, either through a mouse click or keyboard controls, it becomes the selected tab.\n\n- The tab panel, which displays the content for the selected tab. The content can be any type of HTML content.\n\nThe component supports keyboard navigation between tabs using the Arrow, Home, and End keys, in line with WAI-ARIA recommendations.\n\nThe component's selection behavior (automatic or manual) can be configured via the `triggerActivation` prop. In automatic mode, moving keyboard focus to a tab will automatically select it. In manual mode, a tab must be clicked or selected with the Enter or Space key to be activated.\n\nThe component uses WAI-ARIA roles, states, and properties to ensure its accessibility.\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport { TabComponent } from './TabComponent';\n\nconst tabs = [\n  {\n    id: 'tab1',\n    title: 'Tab 1',\n    content: 'Content for tab 1',\n  },\n  {\n    id: 'tab2',\n    title: 'Tab 2',\n    content: 'Content for tab 2',\n  },\n  // More tabs...\n];\n\n<TabComponent tabs={tabs} tabPanelTabindex={true} triggerActivation=\"manual\" />\n```\n"}},docsOnly:!0},argTypes:{tabPanelTabindex:{control:{type:"boolean"}},textColor:{table:{disable:!0}},tabBackground:{table:{disable:!0}},selectedTabBackground:{table:{disable:!0}},triggerActivation:{control:{type:"select"},options:{automated:"automated",manual:"manual"},defaultValue:"manual"},tabs:{table:{disable:!0}}}},Template=args=>(0,jsx_runtime.jsx)(TabComponent,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={tabs:[{id:"html-009878",title:"HTML",content:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{children:"About HTML & Accessibility"}),(0,jsx_runtime.jsx)("p",{children:"Using HTML in web development is vital because it allows for the creation of structured, semantic content that is not only human-readable but also machine-readable. By using appropriate HTML tags and elements, developers can convey the meaning and importance of content, making it easier for search engines to understand and index the information on webpages. Properly structured HTML also benefits accessibility by providing better support for screen readers and other assistive technologies, enabling users with disabilities to access and interact with web content more effectively."})]})},{id:"aria-009878",title:"ARIA",content:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{children:"About ARIA & Accessibility"}),(0,jsx_runtime.jsx)("p",{children:"ARIA, which stands for Accessible Rich Internet Applications, is a set of attributes designed to enhance the accessibility of web content and applications. By providing additional information about the structure and functionality of elements on a webpage, ARIA helps screen readers and other assistive technologies interpret the content more effectively. The primary goal of ARIA is to bridge the gap between the capabilities of modern web technologies and the requirements of users with disabilities, ensuring that everyone can access and interact with web content."})]})},{id:"react-009878",title:"REACT",content:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{children:"About REACT & Accessibility"}),(0,jsx_runtime.jsx)("p",{children:"Using React and HTML together to build components has several advantages. First, it simplifies the development process by providing a clear separation of concerns, as each component is responsible for its own logic, state, and presentation. This modularity makes it easier to maintain, test, and refactor the codebase. Second, React's component-based architecture promotes reusability, which can significantly reduce the amount of code duplication and improve the overall maintainability of a project. Finally, the combination of React and HTML enables developers to create more interactive and engaging user interfaces that can adapt to changes in data and state, ultimately enhancing the user experience on the web."})]})}],tabPanelTabindex:!0,triggerActivation:"manual",textColor:"rgba(0, 0, 0, 1)",tabBackground:"rgba(209, 203, 219, 1)",selectedTabBackground:"rgba(156, 39, 176, 1)"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TabComponent {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/ReactTabComponent/TabComponent.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'body {\n    font-family: Arial, sans-serif;\n    line-height: 1.5;\n  }\n  \n  .Q4z_BGVIou7hYojtKxVQ {\n    max-width: 800px;\n    margin: 0 auto;\n  }\n  \n  [role="tablist"] {\n    display: flex;\n    border-bottom: 1px solid #ccc;\n    padding-left: 0;\n    list-style-type: none;\n    margin: 0;\n  }\n  \n  [role="tab"] {\n    flex-grow: 1;\n    background: none;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 10px;\n    font-size: 16px;\n    border-bottom: 3px solid transparent;\n  }\n  [role="tab"]:focus-visible {\n    border-bottom: 3px solid green;\n  }\n  [role="tab"][aria-selected="true"]:focus-visible {\n    border-bottom: 3px solid blue;\n  }\n  \n  [role="tab"][aria-selected="true"] {\n    font-weight: bold;\n    border-bottom-color: #9c27b0;\n    background-color: #d1cbdb;\n  }\n  \n  [role="tabpanel"] {\n    padding: 15px;\n    border: 1px solid #ccc;\n    border-top: none;\n  }\n  \n  [role="tabpanel"][hidden] {\n    display: none;\n  }\n  \n  /* Add this media query at the bottom of the TabComponent.module.css file */\n\n@media (max-width: 400px) {\n  [role="tablist"] {\n    flex-direction: column;\n  }\n  [role="tab"] {\n    width: 100%;\n    text-align: left;\n  }\n  [role="tabpanel"] {\n    display: none;\n  }\n  [role="tabpanel"][data-expanded="true"] {\n    display: block;\n  }\n}\n',"",{version:3,sources:["webpack://./stories/ReactTabComponent/TabComponent.module.css"],names:[],mappings:"AAAA;IACI,8BAA8B;IAC9B,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,6BAA6B;IAC7B,eAAe;IACf,qBAAqB;IACrB,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,aAAa;IACb,eAAe;IACf,oCAAoC;EACtC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,6BAA6B;EAC/B;;EAEA;IACE,iBAAiB;IACjB,4BAA4B;IAC5B,yBAAyB;EAC3B;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;;EAEA,2EAA2E;;AAE7E;EACE;IACE,sBAAsB;EACxB;EACA;IACE,WAAW;IACX,gBAAgB;EAClB;EACA;IACE,aAAa;EACf;EACA;IACE,cAAc;EAChB;AACF",sourcesContent:['body {\n    font-family: Arial, sans-serif;\n    line-height: 1.5;\n  }\n  \n  .tab-container {\n    max-width: 800px;\n    margin: 0 auto;\n  }\n  \n  [role="tablist"] {\n    display: flex;\n    border-bottom: 1px solid #ccc;\n    padding-left: 0;\n    list-style-type: none;\n    margin: 0;\n  }\n  \n  [role="tab"] {\n    flex-grow: 1;\n    background: none;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 10px;\n    font-size: 16px;\n    border-bottom: 3px solid transparent;\n  }\n  [role="tab"]:focus-visible {\n    border-bottom: 3px solid green;\n  }\n  [role="tab"][aria-selected="true"]:focus-visible {\n    border-bottom: 3px solid blue;\n  }\n  \n  [role="tab"][aria-selected="true"] {\n    font-weight: bold;\n    border-bottom-color: #9c27b0;\n    background-color: #d1cbdb;\n  }\n  \n  [role="tabpanel"] {\n    padding: 15px;\n    border: 1px solid #ccc;\n    border-top: none;\n  }\n  \n  [role="tabpanel"][hidden] {\n    display: none;\n  }\n  \n  /* Add this media query at the bottom of the TabComponent.module.css file */\n\n@media (max-width: 400px) {\n  [role="tablist"] {\n    flex-direction: column;\n  }\n  [role="tab"] {\n    width: 100%;\n    text-align: left;\n  }\n  [role="tabpanel"] {\n    display: none;\n  }\n  [role="tabpanel"][data-expanded="true"] {\n    display: block;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"tab-container":"Q4z_BGVIou7hYojtKxVQ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);