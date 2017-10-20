/*!@license
 * Infragistics.Web.ClientUI Base Widget 17.2.0-rc.5
 *
 * Copyright (c) 2011-2017 Infragistics Inc.
 * <Licensing info>
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *   jquery-1.9.1.js
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 *   infragistics.util.js
 *   infragistics.util.jquery.js
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery","jquery-ui","./infragistics.util","./infragistics.util.jquery"],factory)}else{return factory(jQuery)}})(function($){$.widget("ui.igWidget",{localeWidgetName:null,localeContainer:null,options:{locale:null,language:"en",regional:"en-US"},_createWidget:function(options){this._userPreset=options;this._registerWidget();if(!options||!options.language){this.options.language=$.ig.util.language}this._superApply(arguments)},_setOption:function(option,value){if(option==="language"&&this.options.language===value){return}this._super(option,value);switch(option){case"language":case"locale":this.changeLocale();break;case"regional":this.changeRegional();break;default:break}},_registerWidget:function(){$.ig.util.widgetStack.push(this)},_unregisterWidget:function(){$.ig.util.widgetStack.splice($.ig.util.widgetStack.indexOf(this),1)},_getRegionalValue:function(key){var regional=this.options.regional;if(this.options[key]){return this.options[key]}if(typeof regional==="string"){regional=$.ig.regional[regional]}if(regional&&regional[key]){return regional[key]}else{return $.ig.regional.defaults[key]}},_getLocaleValueFromCollection:function(key,collection){return!collection?"":collection[key]||""},_getLocaleDictionary:function(){var language=this.options.language,widgetName=this.localeWidgetName||this.widgetName.replace("ig",""),localeObj=$.ig.locale[language]&&$.ig.locale[language][widgetName]||$.ig[widgetName]&&$.ig[widgetName].locale;return localeObj},_getLocaleValue:function(key){var locale=$.extend({},this._getLocaleDictionary());locale=$.extend(locale,this.options.locale);return this._getLocaleValueFromCollection(key,locale)},_changeLocaleForElement:function($element){var key=$element.attr("data-localeid");if(key){this._changeLocaleByKey(key,$element)}},_changeLocaleByKey:function(key,$element){var attr=$element.attr("data-localeattr");if(attr){$element.attr(attr,this._getLocaleValue(key))}else{$element.text(this._getLocaleValue(key))}},changeRegional:$.noop,changeLocale:function($container){var self=this;$container=$container||this.localeContainer||this.element;$container.find("[data-localeid]").addBack("[data-localeid]").each(function(){self._changeLocaleForElement($(this))})},changeGlobalLanguage:function(){if(!this._userPreset||!this._userPreset.language){this._setOption("language",$.ig.util.language)}},changeGlobalRegional:function(){if(!this._userPreset||!this._userPreset.regional){this._setOption("regional",$.ig.util.regional)}},destroy:function(){this._unregisterWidget();this._super()}});$.extend($.ui.igWidget,{version:"17.2.0-rc.5"});return $});