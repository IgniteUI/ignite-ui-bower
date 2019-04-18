/*!@license
 * Infragistics.Web.ClientUI ToolbarButton 18.2.60
 *
 * Copyright (c) 2011-2019 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.9.1.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.util.js
 *  infragistics.util.jquery.js
 *	infragistics.ui.shared.js
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery","jquery-ui","./infragistics.util","./infragistics.util.jquery","./infragistics.ui.shared"],factory)}else{return factory(jQuery)}})(function($){$.widget("ui.igToolbarButton",$.ui.igButton,{options:{allowToggling:true,isSelected:false},css:{toolbarButtonWidget:"ui-igtoolbarbutton"},events:{activating:"activating",activated:"activated",deactivating:"deactivating",deactivated:"deactivated"},_setOption:function(option,value){if(this.options[option]===value){return}$.ui.igButton.prototype._setOption.apply(this,arguments)},_create:function(){$.ui.igButton.prototype._create.apply(this);this._setupElement();this._attachToolbarBtnEvents()},_setupElement:function(){this.element.addClass(this.css.toolbarButtonWidget).attr("tabindex","1");if(this.options.isSelected){this.element.addClass(this.options.css.buttonActiveClasses)}},_onBlur:function(event){var noCancel,o=this.options;if(!o.disabled){noCancel=this._trigger("blur",event);if(noCancel){this.element.removeClass(o.css.buttonFocusClasses);if(!o.allowToggling){this.element.removeClass(o.css.buttonActiveClasses)}}}},_onMouseDown:function(event){var noCancel,e=this.element,o=this.options;if(!o.disabled){noCancel=this._trigger("mousedown",event);if(noCancel){e.removeClass(o.css.buttonHoverClasses);if(!o.allowToggling){e.addClass(o.css.buttonActiveClasses)}}}},_onMouseUp:function(event){var noCancel,o=this.options;if(!o.disabled){noCancel=this._trigger("mouseup",event);if(noCancel){this.element.removeClass(o.css.buttonHoverClasses);if(!o.allowToggling){this.element.removeClass(o.css.buttonActiveClasses)}}}},_onEnterKey:function(e){if(e.keyCode!==$.ui.keyCode.ENTER){return}this.element.mousedown()},_triggerActivating:function(event){var args={owner:this};return this._trigger(this.events.activating,event,args)},_triggerActivated:function(event){var args={owner:this};return this._trigger(this.events.activated,event,args)},_triggerDeactivating:function(event){var args={owner:this};return this._trigger(this.events.deactivating,event,args)},_triggerDeactivated:function(event){var args={owner:this};return this._trigger(this.events.deactivated,event,args)},_attachToolbarBtnEvents:function(){var noCancel,o=this.options,self=this;this.element.click(function(e){if(o.allowToggling){if(o.isSelected){noCancel=self._triggerDeactivating(e);if(noCancel){self.deactivate(e);self.element.addClass(o.css.buttonHoverClasses)}}else{noCancel=self._triggerActivating(e);if(noCancel){self.activate(e)}}}});this.element.on("keypress",$.proxy(this._onEnterKey,this))},toggle:function(){var o=this.options;if(o.disabled===true||o.allowToggling===false){return}o.isSelected=!o.isSelected;this.element.toggleClass(o.css.buttonActiveClasses)},activate:function(event){var o=this.options;if(o.disabled===true||o.allowToggling===false){return}o.isSelected=true;this.element.addClass(o.css.buttonActiveClasses);if(event){this._triggerActivated(event)}},deactivate:function(event){var o=this.options;if(o.disabled===true||o.allowToggling===false){return}o.isSelected=false;this.element.removeClass(o.css.buttonActiveClasses).removeClass(o.css.buttonFocusClasses);if(event){this._triggerDeactivated(event)}},widget:function(){return this.element},destroy:function(){$.ui.igButton.prototype.destroy.call(this);this.element.off().removeClass("")}});$.extend($.ui.igToolbarButton,{version:"18.2.60"});return $});