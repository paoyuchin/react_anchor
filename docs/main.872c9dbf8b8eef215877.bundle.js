(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(module,__webpack_exports__,__webpack_require__){"use strict";var objectSpread=__webpack_require__(108),classCallCheck=__webpack_require__(103),createClass=__webpack_require__(104),possibleConstructorReturn=__webpack_require__(106),getPrototypeOf=__webpack_require__(105),inherits=__webpack_require__(107),react=__webpack_require__(0),react_default=__webpack_require__.n(react),classnames=__webpack_require__(57),classnames_default=__webpack_require__.n(classnames),css=__webpack_require__(55),css_default=__webpack_require__.n(css),defineProperty=__webpack_require__(56),arrorTop_arrowTop=function arrowTop(){return react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"10",viewBox:"0 0 10 6"},react_default.a.createElement("g",{fill:"none",fillRule:"nonzero"},react_default.a.createElement("path",{fill:"gray",d:"M8.576 5.601L5 2.024 1.424 5.601l-.848-.848 4-4.001a.6.6 0 0 1 .848 0l4 4-.848.85z"}),react_default.a.createElement("path",{d:"M-3-5h16v16H-3z"})))},arrorTop=arrorTop_arrowTop;arrorTop_arrowTop.__docgenInfo={description:"",methods:[],displayName:"arrowTop"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/arrorTop.js"]={name:"arrowTop",docgenInfo:arrorTop_arrowTop.__docgenInfo,path:"src/components/arrorTop.js"});var arrorDown_arrowDown=function arrowDown(){return react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"10",viewBox:"0 0 10 6"},react_default.a.createElement("g",{fill:"none",fillRule:"nonzero"},react_default.a.createElement("path",{fill:"gray",d:"M8.576.576l.848.848-4 4.002a.6.6 0 0 1-.848 0l-4-4.002.848-.848L5 4.153 8.576.576z"}),react_default.a.createElement("path",{d:"M-3-5h16v16H-3z"})))},arrorDown=arrorDown_arrowDown;arrorDown_arrowDown.__docgenInfo={description:"",methods:[],displayName:"arrowDown"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/arrorDown.js"]={name:"arrowDown",docgenInfo:arrorDown_arrowDown.__docgenInfo,path:"src/components/arrorDown.js"});var Navigator_Navigator=function(_Component){function Navigator(props){var _this;return Object(classCallCheck.a)(this,Navigator),(_this=Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(Navigator).call(this,props))).onAnchorClickToSection=function(anchor){var _this$props=_this.props,mode=_this$props.mode,updateActiveAnchor=_this$props.updateActiveAnchor,sections=_this$props.sections,pcFixStartingPoint=_this$props.pcFixStartingPoint,mFixStartingPoint=_this$props.mFixStartingPoint,anchorsDomOffsetheight=_this.anchorsDom.current.offsetHeight;Object.keys(sections).forEach(function(section){var top=sections[section].top;section===anchor&&("m"===mode?(top-=anchorsDomOffsetheight+mFixStartingPoint,window.scrollTo({top:top,behavior:"smooth"})):"pc"===mode&&window.scrollTo({top:top-pcFixStartingPoint,behavior:"smooth"}))}),updateActiveAnchor(anchor)},_this.navigatorDom=react_default.a.createRef(),_this.anchorsDom=react_default.a.createRef(),_this.anchorsBigwrap=react_default.a.createRef(),_this.anchorButtons={},_this}return Object(inherits.a)(Navigator,_Component),Object(createClass.a)(Navigator,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;window.addEventListener("scroll",function(){return _this2.showScrollNav()})}},{key:"isInView",value:function isInView(elem){var bounding=elem.getBoundingClientRect(),view=this.navigatorDom.current.getBoundingClientRect();return bounding.top>=view.top&&bounding.left>=view.left&&bounding.bottom<=view.bottom&&bounding.right<=view.right}},{key:"showScrollNav",value:function showScrollNav(){if(document.querySelector(".nv_coln_anchor.isActive")){var navigatorDom=this.navigatorDom.current,anchorsContainer=this.anchorsDom.current,activeAnchor=document.querySelector(".nv_coln_anchor.isActive"),viewBox=navigatorDom.getBoundingClientRect();if(anchorsContainer.style.marginLeft=anchorsContainer.style.marginLeft||"0px",!this.isInView(activeAnchor)){var count=0;if(viewBox.left>=activeAnchor.getBoundingClientRect().left){for(;!this.isInView(activeAnchor)&&400!==count;)anchorsContainer.style.marginLeft=parseInt(anchorsContainer.style.marginLeft.replace("px",""),10)+2+"px",count++;anchorsContainer.style.marginLeft=parseInt(anchorsContainer.style.marginLeft.replace("px",""),10)+2+"px"}else{for(;!this.isInView(activeAnchor)&&400!==count;)anchorsContainer.style.marginLeft=parseInt(anchorsContainer.style.marginLeft.replace("px",""),10)-2+"px",count++;anchorsContainer.style.marginLeft=parseInt(anchorsContainer.style.marginLeft.replace("px",""),10)-46+"px"}}}}},{key:"render",value:function render(){var _classNames,_this3=this,cx=classnames_default.a.bind(css_default.a),_this$props2=this.props,data=_this$props2.data,isFixed=_this$props2.isFixed,activeAnchor=_this$props2.activeAnchor,mIsShowNav=_this$props2.mIsShowNav,isCoverOpen=_this$props2.isCoverOpen,toggleCover=_this$props2.toggleCover,anchorfixStatusClass=classnames_default()((_classNames={},Object(defineProperty.a)(_classNames,cx("".concat("nv_coln"))+"_navigator",!0),Object(defineProperty.a)(_classNames,"anchorFixed",isFixed),Object(defineProperty.a)(_classNames,"mShowNavClass",mIsShowNav),_classNames)),anchor=data.map(function(_ref,index){var title=_ref.title,anchorTo=_ref.anchorTo;return react_default.a.createElement("span",{key:index,className:cx("".concat("nv_coln"))+"_anchor".concat(anchorTo===activeAnchor?" isActive":""),onClick:function onClick(){return _this3.onAnchorClickToSection(anchorTo)},ref:function ref(div){_this3.anchorButtons[anchorTo]=div}},title)}),instant=react_default.a.createElement("div",{className:cx("".concat("nv_coln"))+"_instant"},react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"6",viewBox:"0 0 10 6"},react_default.a.createElement("g",{fill:"none",fillRule:"evenodd"},react_default.a.createElement("path",{fill:"#e10500",d:"M5 6l5-6H0z"}),react_default.a.createElement("path",{fillRule:"nonzero",d:"M-3-6h16v16H-3z"}))),react_default.a.createElement("span",null,"快速"));return react_default.a.createElement("div",{className:anchorfixStatusClass,ref:this.navigatorDom},react_default.a.createElement("div",{className:cx("".concat("nv_coln"))+"_anchorsBigwrap",ref:this.anchorsBigwrap},react_default.a.createElement("div",{className:cx("".concat("nv_coln"))+"_anchors",ref:this.anchorsDom},instant,anchor)),react_default.a.createElement("div",{className:cx("".concat("nv_coln"))+"_ArrorTop",onClick:function onClick(){return toggleCover()}},isCoverOpen?react_default.a.createElement(arrorTop,null):react_default.a.createElement(arrorDown,null)),react_default.a.createElement("div",{className:"nv_coln_ButtonCoverContainer ".concat(isCoverOpen?"CoverOpenClass":"CovercloseClass")},this.props.data.map(function(_ref2,index){var title=_ref2.title,anchorTo=_ref2.anchorTo;return react_default.a.createElement("div",{key:index,className:cx("".concat("nv_coln"))+"_anchor".concat(anchorTo===activeAnchor?" isActive":""),onClick:function onClick(){return _this3.onAnchorClickToSection(anchorTo)},ref:function ref(div){_this3.anchorButtons[anchorTo]=div}},title)})),react_default.a.createElement("div",{className:"nv_coln_cover ".concat(isCoverOpen?"CoverOpenClass":"CovercloseClass")}))}}]),Navigator}(react.Component);({polyfill:function polyfill(){var w=window,d=document;if(!("scrollBehavior"in d.documentElement.style&&!0!==w.__forceSmoothScrollPolyfill__)){var Element=w.HTMLElement||w.Element,SCROLL_TIME=468,original={scroll:w.scroll||w.scrollTo,scrollBy:w.scrollBy,elementScroll:Element.prototype.scroll||scrollElement,scrollIntoView:Element.prototype.scrollIntoView},now=w.performance&&w.performance.now?w.performance.now.bind(w.performance):Date.now,ROUNDING_TOLERANCE=function isMicrosoftBrowser(userAgent){return new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(userAgent)}(w.navigator.userAgent)?1:0;w.scroll=w.scrollTo=function(){void 0!==arguments[0]&&(!0!==shouldBailOut(arguments[0])?smoothScroll.call(w,d.body,void 0!==arguments[0].left?~~arguments[0].left:w.scrollX||w.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:w.scrollY||w.pageYOffset):original.scroll.call(w,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:w.scrollX||w.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:w.scrollY||w.pageYOffset))},w.scrollBy=function(){void 0!==arguments[0]&&(shouldBailOut(arguments[0])?original.scrollBy.call(w,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):smoothScroll.call(w,d.body,~~arguments[0].left+(w.scrollX||w.pageXOffset),~~arguments[0].top+(w.scrollY||w.pageYOffset)))},Element.prototype.scroll=Element.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==shouldBailOut(arguments[0])){var left=arguments[0].left,top=arguments[0].top;smoothScroll.call(this,this,void 0===left?this.scrollLeft:~~left,void 0===top?this.scrollTop:~~top)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");original.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},Element.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==shouldBailOut(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):original.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},Element.prototype.scrollIntoView=function(){if(!0!==shouldBailOut(arguments[0])){var scrollableParent=findScrollableParent(this),parentRects=scrollableParent.getBoundingClientRect(),clientRects=this.getBoundingClientRect();scrollableParent!==d.body?(smoothScroll.call(this,scrollableParent,scrollableParent.scrollLeft+clientRects.left-parentRects.left,scrollableParent.scrollTop+clientRects.top-parentRects.top),"fixed"!==w.getComputedStyle(scrollableParent).position&&w.scrollBy({left:parentRects.left,top:parentRects.top,behavior:"smooth"})):w.scrollBy({left:clientRects.left,top:clientRects.top,behavior:"smooth"})}else original.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function scrollElement(x,y){this.scrollLeft=x,this.scrollTop=y}function shouldBailOut(firstArg){if(null===firstArg||"object"!=typeof firstArg||void 0===firstArg.behavior||"auto"===firstArg.behavior||"instant"===firstArg.behavior)return!0;if("object"==typeof firstArg&&"smooth"===firstArg.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+firstArg.behavior+" is not a valid value for enumeration ScrollBehavior.")}function hasScrollableSpace(el,axis){return"Y"===axis?el.clientHeight+ROUNDING_TOLERANCE<el.scrollHeight:"X"===axis?el.clientWidth+ROUNDING_TOLERANCE<el.scrollWidth:void 0}function canOverflow(el,axis){var overflowValue=w.getComputedStyle(el,null)["overflow"+axis];return"auto"===overflowValue||"scroll"===overflowValue}function isScrollable(el){var isScrollableY=hasScrollableSpace(el,"Y")&&canOverflow(el,"Y"),isScrollableX=hasScrollableSpace(el,"X")&&canOverflow(el,"X");return isScrollableY||isScrollableX}function findScrollableParent(el){var isBody;do{isBody=(el=el.parentNode)===d.body}while(!1===isBody&&!1===isScrollable(el));return isBody=null,el}function step(context){var value,currentX,currentY,elapsed=(now()-context.startTime)/SCROLL_TIME;value=function ease(k){return.5*(1-Math.cos(Math.PI*k))}(elapsed=elapsed>1?1:elapsed),currentX=context.startX+(context.x-context.startX)*value,currentY=context.startY+(context.y-context.startY)*value,context.method.call(context.scrollable,currentX,currentY),currentX===context.x&&currentY===context.y||w.requestAnimationFrame(step.bind(w,context))}function smoothScroll(el,x,y){var scrollable,startX,startY,method,startTime=now();el===d.body?(scrollable=w,startX=w.scrollX||w.pageXOffset,startY=w.scrollY||w.pageYOffset,method=original.scroll):(scrollable=el,startX=el.scrollLeft,startY=el.scrollTop,method=scrollElement),step({scrollable:scrollable,method:method,startTime:startTime,startX:startX,startY:startY,x:x,y:y})}}}).polyfill();var Module_Module=function(_Component){function Module(props){var _this;return Object(classCallCheck.a)(this,Module),(_this=Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(Module).call(this,props))).onScroll=function(){var activeAnchor,displacement=document.documentElement.scrollTop||document.body.scrollTop;Object.keys(_this.sections).forEach(function(sectionName){"m"===_this.state.mode&&_this.sections[sectionName].top<=displacement+_this.state.mFixStartingPoint+44&&(activeAnchor=sectionName),"pc"===_this.state.mode&&_this.sections[sectionName].top<=displacement+_this.state.pcFixStartingPoint&&(activeAnchor=sectionName)}),_this.setState(function(prevState){return Object(objectSpread.a)({},prevState,{displacement:displacement,isFixed:"pc"===_this.state.mode?displacement>=_this.state.pcFixEndingPoint:_this.state.displacement>=_this.state.mFixEndinggPoint,activeAnchor:activeAnchor,mIsShowNav:_this.state.displacement>=_this.state.mFixEndinggPoint})})},_this.updateActiveAnchor=function(newAchor){_this.setState(function(prevState){return Object(objectSpread.a)({},prevState,{activeAnchor:newAchor,isCoverOpen:!1})})},_this.toggleCover=function(){_this.setState(function(prevState){return Object(objectSpread.a)({},prevState,{isCoverOpen:!_this.state.isCoverOpen})})},_this.sections={},_this.state={displacement:0,isFixed:!1,activeAnchor:"",mode:window.innerWidth>=980?"pc":"m",pcFixStartingPoint:_this.props.options.fixed.desktop.startFixedY,pcFixEndingPoint:_this.props.options.fixed.desktop.endFixedY,mFixStartingPoint:_this.props.options.fixed.mobile.startFixedY,mFixEndinggPoint:_this.props.options.fixed.mobile.endFixedY,mIsShowNav:!1,isCoverOpen:!1},_this}return Object(inherits.a)(Module,_Component),Object(createClass.a)(Module,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;this.props.data.forEach(function(section){var element=document.querySelector("[data-anchor=".concat(section.anchorTo,"]"));_this2.sections[section.anchorTo]={top:element.offsetTop,height:element.offsetHeight}}),window.addEventListener("scroll",function(){return _this2.onScroll()})}},{key:"componentWillUnmount",value:function componentWillUnmount(){window.removeEventListener("scroll",this.onScroll,!1)}},{key:"render",value:function render(){classnames_default.a.bind(css_default.a);var data=this.props.data,_this$state=this.state,mode=_this$state.mode,displacement=_this$state.displacement,isFixed=_this$state.isFixed,sectionMeta=_this$state.sectionMeta,bannerHeight=_this$state.bannerHeight,headerHeight=_this$state.headerHeight,activeAnchor=_this$state.activeAnchor,pcFixStartingPoint=_this$state.pcFixStartingPoint,pcFixEndingPoint=_this$state.pcFixEndingPoint,mFixStartingPoint=_this$state.mFixStartingPoint,mFixEndinggPoint=_this$state.mFixEndinggPoint,mIsShowNav=_this$state.mIsShowNav,isCoverOpen=_this$state.isCoverOpen,classes=classnames_default.a.bind(css_default.a)("nv_coln"),navInitialPosition={position:"pc"===mode?"fixed":null,top:"pc"===mode?pcFixStartingPoint+pcFixEndingPoint:null};return react_default.a.createElement("div",{className:classes,style:navInitialPosition},react_default.a.createElement(Navigator_Navigator,{data:data,displacement:displacement,isFixed:isFixed,sectionMeta:sectionMeta,activeAnchor:activeAnchor,bannerHeight:bannerHeight,headerHeight:headerHeight,mode:mode,updateActiveAnchor:this.updateActiveAnchor,sections:this.sections,pcFixStartingPoint:pcFixStartingPoint,pcFixEndingPoint:pcFixEndingPoint,mFixStartingPoint:mFixStartingPoint,mFixEndinggPoint:mFixEndinggPoint,mIsShowNav:mIsShowNav,isCoverOpen:isCoverOpen,toggleCover:this.toggleCover}))}}]),Module}(react.Component);__webpack_exports__.a=Module_Module},236:function(module,exports,__webpack_require__){__webpack_require__(237),__webpack_require__(340),module.exports=__webpack_require__(341)},341:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(102);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(504)},module)}.call(this,__webpack_require__(182)(module))},504:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(102),_components_Module__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(505),__webpack_require__(518),__webpack_require__(235)),divStyle=(__webpack_require__(520),__webpack_require__(55),{height:"600px",width:"100%",outline:"1px solid black"}),props={data:[{title:"季節玩法",anchorTo:"season"},{title:"團體旅遊",anchorTo:"grouptravel"},{title:"機票資訊",anchorTo:"airplantickets"},{title:"訂房資訊",anchorTo:"booking"},{title:"自由行程",anchorTo:"selftour"},{title:"票卷優惠",anchorTo:"tickets"},{title:"特惠限時搶購",anchorTo:"specialoffer"}],options:{fixed:{mobile:{startFixedY:44,endFixedY:200},desktop:{startFixedY:80,endFixedY:400}}}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Anchor",module).add("滾動錨點模組",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"nv_coln_fake_header"},"header"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"nv_coln_fake_banner"},"banner"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Module__WEBPACK_IMPORTED_MODULE_4__.a,{data:props.data,options:props.options}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-anchor":"season",style:divStyle},"anchors:season"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-anchor":"grouptravel",style:divStyle},"anchors:grouptravel"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-anchor":"airplantickets",style:divStyle},"anchors:airplantickets"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-anchor":"booking",style:divStyle},"anchors:booking"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-anchor":"selftour",style:divStyle},"anchors:selftour"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-anchor":"tickets",style:divStyle},"anchors:tickets"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-anchor":"specialoffer",style:divStyle},"anchors:specialoffer"))})}.call(this,__webpack_require__(182)(module))},55:function(module,exports,__webpack_require__){}},[[236,1,2]]]);
//# sourceMappingURL=main.872c9dbf8b8eef215877.bundle.js.map