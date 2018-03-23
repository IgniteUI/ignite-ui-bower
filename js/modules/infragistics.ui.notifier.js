/*!@license
* Infragistics.Web.ClientUI Notifier localization resources 17.1.2064-beta.0
*
* Copyright (c) 2011-2018 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Notifier){$.ig.Notifier={};$.extend($.ig.Notifier,{locale:{successMsg:"Success",errorMsg:"Error",warningMsg:"Warning",notSupportedState:"Not supported notification state! Use one of the supported states 'success', 'info', 'warning', 'error'",notSupportedMode:"Not supported notification mode! Use one of the supported modes 'auto', 'popover', 'inline'"}})}});/*!@license
* Infragistics.Web.ClientUI jQuery Notifier 17.1.2064-beta.0
*
* Copyright (c) 2013-2018 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
*  jquery-1.9.1.js
*  jquery.ui.core.js
*  jquery.ui.widget.js
*	infragistics.util.js
*  infragistics.util.jquery.js
*  infragistics.ui.popover.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery","jquery-ui","./infragistics.util","./infragistics.util.jquery","./infragistics.ui.popover"],factory)}else{factory(jQuery)}})(function($){$.widget("ui.igNotifier",$.ui.igPopover,{css:{baseClasses:"ui-widget ui-igpopover ui-ignotify",contentInner:"ui-ignotify-content",inline:"ui-ignotify-inline",iconContainer:"ui-ignotify-icon-container",infoState:"ui-ignotify-info",infoIcon:"ui-icon ui-icon-info",successState:"ui-ignotify-success",successIcon:"ui-icon ui-icon-circle-check",warningState:"ui-ignotify-warn",warningIcon:"ui-icon ui-icon-alert",errorState:"ui-ignotify-error",errorIcon:"ui-icon ui-icon-circle-close"},options:{state:"info",notifyLevel:"success",appendTo:"body",mode:"auto",allowCSSOnTarget:true,messages:{success:"Success",info:"",warning:"Warning",error:"Error"},showIcon:false,contentTemplate:"<span class='{0}'><span class='{1}'></span></span>{2}",headerTemplate:{closeButton:true,title:null},showOn:"manual",closeOnBlur:false,animationDuration:250,animationSlideDistance:5,selectors:null},inlineStates:["success","error"],_create:function(){$.ui.igPopover.prototype._create.apply(this,arguments);this._setOption("directionPriority",["top","left","right","bottom"]);this._states=["success","info","warning","error"];this._modes=["auto","popover","inline"];this._currentText=this.options.messages[this.options.state]},_createWidget:function(options){var messageDefaults={success:$.ig.Notifier&&$.ig.Notifier.locale?$.ig.Notifier.locale.successMsg:"Success",info:"",warning:$.ig.Notifier&&$.ig.Notifier.locale?$.ig.Notifier.locale.warningMsg:"Warning",error:$.ig.Notifier&&$.ig.Notifier.locale?$.ig.Notifier.locale.errorMsg:"Error"};this.options.messages=$.extend(messageDefaults,options&&options.messages||{});$.ui.igPopover.prototype._createWidget.apply(this,arguments)},_setState:function(value,message){if($.inArray(value,this._states)===-1){throw new Error($.ig.Notifier.locale.notSupportedState)}if(message!==undefined){this._currentText=message}if(this.options.state!==value){this._currentText=message!==undefined?this._currentText:this.options.messages[value];this._previousState=this.options.state;this.options.state=value;if(this._visible){this._setTargetState()}if(this._isInline(value)!==this._isInline(this._previousState)){this._setMode(this.options.mode,true);return}}this.popover.removeClass(this.css[this._previousState+"State"]).addClass(this.css[this.options.state+"State"]);this._setNewContent(this._getTemplate())},_setTargetState:function(clean){this._target.removeClass(this.css[this._previousState+"State"]).removeClass(this.css[this.options.state+"State"]);if(this.options.allowCSSOnTarget&&!clean){this._target.addClass(this.css[this.options.state+"State"])}},_setOption:function(key,value){switch(key){case"state":this._setState(value);if(this._visible&&!this._isInline()){this._positionPopover(this._target);this._slide()}break;case"mode":if(typeof value==="string"){this._setMode(value)}break;case"contentTemplate":if(typeof value==="string"){this.options.contentTemplate=value;this._setNewContent(this._getTemplate())}break;case"messages":if(typeof value==="object"){this.options.messages=$.extend(this.options.messages,value);this._currentText=this.options.messages[this.options.state];this._setNewContent(this._getTemplate());if(this._visible&&!this._isInline()){this._positionPopover(this._target);this._slide()}}break;case"allowCSSOnTarget":if(typeof value==="boolean"){this.options.allowCSSOnTarget=value;if(this._visible){this._setTargetState(!value)}}break;case"showIcon":this.options.showIcon=value;if(this._visible){this._setNewContent(this._getTemplate())}break;default:$.ui.igPopover.prototype._setOption.apply(this,arguments)}},_setMode:function(value,force){if($.inArray(value,this._modes)===-1){throw new Error($.ig.Notifier.locale.notSupportedMode)}if(this.options.mode!==value||force){this.popover.remove();delete this.arrow;this.options.mode=value;this._renderPopover();if(this._visible){if(!this._isInline()){this._positionPopover(this._target)}this.popover.show();this._slide()}}},_isInline:function(state){var target=state||this.options.state;if(this.options.mode==="inline"){return true}else{return this.options.mode==="auto"&&$.inArray(target,this.inlineStates)>-1}},notify:function(state,message){if($.inArray(state,this._states)>=$.inArray(this.options.notifyLevel,this._states)){if(!this._visible||this.options.state!==state||this._currentText!==message){this._setState(state,message);this.show()}}else{this.hide();this._setState(state,message)}},isVisible:function(){return this._visible},_renderPopover:function(){if(this._isInline()){this.popover=$("<div></div>").addClass(this.css.baseClasses).addClass(this.css.inline);this.contentInner=$("<div></div>").appendTo(this.popover);this.popover.insertAfter(this._target);this._attachEventsToTarget()}else{$.ui.igPopover.prototype._renderPopover.apply(this,arguments)}this._setState(this.options.state);this.contentInner.addClass(this.css.contentInner)},_openPopover:function(){var initialState=this._visible;if(this.popover.is(":animated")){this.popover.stop(true)}this._visible=false;$.ui.igPopover.prototype._openPopover.apply(this,arguments);if(this._visible){var change=this._visible!==initialState;this._slide(!change);if(change){this._setTargetState()}}else{this._visible=initialState}},_slide:function(quick){if(!this.options.animationSlideDistance||!this.oDir||this._isInline()){return}var slideAnimation;switch(this.oDir){case"top":slideAnimation={top:"-="+this.options.animationSlideDistance+"px"};break;case"bottom":slideAnimation={top:"+="+this.options.animationSlideDistance+"px"};break;case"left":slideAnimation={left:"-="+this.options.animationSlideDistance+"px"};break;case"right":slideAnimation={left:"+="+this.options.animationSlideDistance+"px"};break}this.popover.animate(slideAnimation,{queue:false,duration:quick?0:this.options.animationDuration})},_resizeHandler:function(event){if(this._visible&&this._currentTarget){this._positionPopover(this._currentTarget);this._slide(event)}},_attachEventsToTarget:function(){if(this.options.showOn!=="manual"){$.ui.igPopover.prototype._attachEventsToTarget.apply(this,arguments)}},_closePopover:function(){var initialState=this._visible;$.ui.igPopover.prototype._closePopover.apply(this,arguments);if(!this._visible&&this._visible!==initialState){this._setTargetState(true)}},_positionPopover:function(){if(!this._isInline()){$.ui.igPopover.prototype._positionPopover.apply(this,arguments)}},_getTemplate:function(){var currContent=this.options.contentTemplate;if(typeof currContent==="function"&&this._target){currContent=this._getContentTemplate(this._target[0])}return currContent},_getContentTemplate:function(target){var template="";if(target){template=this.options.contentTemplate.call(target,this.options.state)}return template},_setNewContent:function(nc){var newContent=nc;if(nc instanceof $){newContent=nc.html()}else if(typeof nc==="object"){newContent=nc.innerHTML}newContent=newContent.replace(/\{0\}/g,this.css.iconContainer).replace(/\{1\}/g,this.options.showIcon?this.css[this.options.state+"Icon"]:"").replace(/\{2\}/g,this._currentText);this.contentInner.html(newContent)},destroy:function(){this._setTargetState(true);$.ui.igPopover.prototype.destroy.apply(this,arguments);return this}});$.extend($.ui.igNotifier,{version:"17.1.2064-beta.0"});return $.ui.igNotifier});