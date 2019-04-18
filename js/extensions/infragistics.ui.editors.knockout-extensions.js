/*!@license
* Infragistics.Web.ClientUI igEditors KnockoutJS extension 18.2.60
*
* Copyright (c) 2011-2019 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
*	jquery-1.9.1.js
*	infragistics.util.js
*   infragistics.util.jquery.js
*	infragistics.ui.editors.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["../modules/infragistics.ui.editors","knockout"],factory)}else{factory(jQuery,ko)}})(function($,ko){function updatePropertyValue(element,bindingType,viewModel,newValue,boundTo){if(boundTo===undefined){boundTo="value"}var reg=new RegExp(bindingType+"\\s*:\\s*(?:{.*,?\\s*"+boundTo+"\\s*:\\s*)?([^{},\\s]+)"),key,res=$(element).attr("data-bind").match(reg);if(res){key=res[1];if(viewModel.hasOwnProperty(key)){viewModel[key]=newValue}}}ko.bindingHandlers.igTextEditor={init:function(element,valueAccessor,allBindingsAccessor,viewModel){var editor=$(element),options;options=$.extend({},valueAccessor());options.value=ko.utils.unwrapObservable(options.value);editor.igTextEditor(options);if(options.updateMode===undefined){options.updateMode="onChange"}else if(options.updateMode.toLowerCase()!=="onchange"&&options.updateMode.toLowerCase()!=="immediate"){throw new Error($.ig.Editor.locale.updateModeUnsupportedValue)}if(options.updateMode.toLowerCase()==="onchange"){editor.bind("igtexteditorvaluechanged",function(event,args){if(ko.isObservable(valueAccessor().value)){valueAccessor().value(args.newValue)}else{updatePropertyValue(element,"igTextEditor",viewModel,args.newValue)}})}else{editor.bind("igtexteditortextchanged",function(event,args){editor.data("igTextEditor")._doNotUpdate=true;if(ko.isObservable(valueAccessor().value)){valueAccessor().value(args.text)}else{updatePropertyValue(element,"igTextEditor",viewModel,args.text)}});if(options.listItems!==undefined){editor.bind("igtexteditordropdownitemselecting",function(event,args){if(ko.isObservable(valueAccessor().value)&&args.item!==undefined){valueAccessor().value(args.item.innerText)}else if(args.item!==undefined){updatePropertyValue(element,"igTextEditor",viewModel,args.item.innerText)}})}}ko.utils.domNodeDisposal.addDisposeCallback(element,function(){$(element).igTextEditor("destroy")})},update:function(element,valueAccessor){var value,current,editor=$(element);value=ko.utils.unwrapObservable(valueAccessor().value);current=editor.igTextEditor("value");if(current!==value&&!editor.data("igTextEditor")._doNotUpdate){editor.igTextEditor("value",value)}delete editor.data("igTextEditor")._doNotUpdate}};ko.bindingHandlers.igDatePicker={init:function(element,valueAccessor,allBindingsAccessor,viewModel){var editor=$(element),options;options=$.extend({},valueAccessor());options.value=ko.utils.unwrapObservable(options.value);editor.igDatePicker(options);if(options.updateMode===undefined){options.updateMode="onchange"}else if(options.updateMode.toLowerCase()!=="onchange"&&options.updateMode.toLowerCase()!=="immediate"){throw new Error($.ig.Editor.locale.updateModeUnsupportedValue)}if(options.updateMode.toLowerCase()==="onchange"){editor.bind("igdatepickervaluechanged",function(event,args){if(ko.isObservable(valueAccessor().value)){valueAccessor().value(args.owner.value())}else{updatePropertyValue(element,"igDatePicker",viewModel,args.owner.value())}})}else{throw new Error($.ig.Editor.locale.updateModeNotSupported)}ko.utils.domNodeDisposal.addDisposeCallback(element,function(){$(element).igDatePicker("destroy")})},update:function(element,valueAccessor){var value,current,editor=$(element),parsedDate,val;value=ko.utils.unwrapObservable(valueAccessor().value);if(value===null||value===undefined||value===""){editor.igDatePicker("value",value)}else{value=value.toString().replace(/_(\d)/g,"$1");parsedDate=Date.parse(value);if(value.toString().indexOf("/Date(")===0){value=new Date(parseInt(value.replace(/\/Date\((.*?)\)\//gi,"$1"),10));if(value.toString()==="Invalid Date"){value=undefined}}else if(isNaN(parsedDate)){val=new Date(value);if(val&&isNaN(val)&&val.toString()!=="Invalid Date"){val=$.ig.util.dateFromISO(value)}value=val;if(value.toString()==="Invalid Date"){value=undefined}}current=editor.igDatePicker("value");current=Date.parse(current);if(current!==parsedDate){if(value!==undefined&&value!==editor.igDatePicker("displayValue")){value=new Date(value)}editor.igDatePicker("value",value)}}}};ko.bindingHandlers.igDateEditor={init:function(element,valueAccessor,allBindingsAccessor,viewModel){var editor=$(element),options;options=$.extend({},valueAccessor());options.value=ko.utils.unwrapObservable(options.value);editor.igDateEditor(options);if(options.updateMode===undefined){options.updateMode="onchange"}else if(options.updateMode.toLowerCase()!=="onchange"&&options.updateMode.toLowerCase()!=="immediate"){throw new Error($.ig.Editor.locale.updateModeUnsupportedValue)}if(options.updateMode.toLowerCase()==="onchange"){editor.bind("igdateeditorvaluechanged",function(event,args){if(ko.isObservable(valueAccessor().value)){valueAccessor().value(args.owner.value())}else{updatePropertyValue(element,"igDateEditor",viewModel,args.owner.value())}})}else{throw new Error($.ig.Editor.locale.updateModeNotSupported)}ko.utils.domNodeDisposal.addDisposeCallback(element,function(){$(element).igDateEditor("destroy")})},update:function(element,valueAccessor){var value,current,editor=$(element),parsedDate,val;value=ko.utils.unwrapObservable(valueAccessor().value);if(value===null||value===undefined||value===""){editor.igDateEditor("value",value)}else{value=String(value).replace(/_(\d)/g,"$1");parsedDate=Date.parse(value);if(value.toString().indexOf("/Date(")===0){value=new Date(parseInt(value.replace(/\/Date\((.*?)\)\//gi,"$1"),10));if(value.toString()==="Invalid Date"){value=undefined}}else if(isNaN(parsedDate)){val=new Date(value);if(val&&isNaN(val)&&val.toString()!=="Invalid Date"){val=$.ig.util.dateFromISO(value)}value=val;if(value.toString()==="Invalid Date"){value=undefined}}current=editor.igDateEditor("value");current=Date.parse(current);if(current!==parsedDate){if(value!==undefined&&value!==editor.igDateEditor("displayValue")){value=new Date(value)}editor.igDateEditor("value",value)}}}};ko.bindingHandlers.igNumericEditor={init:function(element,valueAccessor,allBindingsAccessor,viewModel){var editor=$(element),options;options=$.extend({},valueAccessor());options.value=ko.utils.unwrapObservable(options.value);editor.igNumericEditor(options);if(options.updateMode===undefined){options.updateMode="onchange"}else if(options.updateMode.toLowerCase()!=="onchange"&&options.updateMode.toLowerCase()!=="immediate"){throw new Error($.ig.Editor.locale.updateModeUnsupportedValue)}if(options.updateMode.toLowerCase()==="onchange"){editor.bind("ignumericeditorvaluechanged",function(event,args){if(ko.isObservable(valueAccessor().value)){valueAccessor().value(args.newValue)}else{updatePropertyValue(element,"igNumericEditor",viewModel,args.newValue)}})}else{editor.bind("ignumericeditortextchanged",function(event,args){args.owner._processValueChanging(args.text);editor.data("igNumericEditor")._doNotUpdate=true;if(ko.isObservable(valueAccessor().value)){valueAccessor().value(args.owner.value())}else{updatePropertyValue(element,"igNumericEditor",viewModel,args.owner.value())}})}ko.utils.domNodeDisposal.addDisposeCallback(element,function(){$(element).igNumericEditor("destroy")})},update:function(element,valueAccessor){var value,current,editor=$(element);value=ko.utils.unwrapObservable(valueAccessor().value);if(value!==""&&value!==null){if(isNaN(value)){value=undefined}else{value=parseFloat(value)}}current=editor.igNumericEditor("value");if(current!==value&&!editor.data("igNumericEditor")._doNotUpdate){editor.igNumericEditor("value",value)}delete editor.data("igNumericEditor")._doNotUpdate}};ko.bindingHandlers.igCurrencyEditor={init:function(element,valueAccessor,allBindingsAccessor,viewModel){var editor=$(element),options;options=$.extend({},valueAccessor());options.value=ko.utils.unwrapObservable(options.value);editor.igCurrencyEditor(options);if(options.updateMode===undefined){options.updateMode="onchange"}else if(options.updateMode.toLowerCase()!=="onchange"&&options.updateMode.toLowerCase()!=="immediate"){throw new Error($.ig.Editor.locale.updateModeUnsupportedValue)}if(options.updateMode.toLowerCase()==="onchange"){editor.bind("igcurrencyeditorvaluechanged",function(event,args){if(ko.isObservable(valueAccessor().value)){valueAccessor().value(args.newValue)}else{updatePropertyValue(element,"igCurrencyEditor",viewModel,args.newValue)}})}else{editor.bind("igcurrencyeditortextchanged",function(event,args){args.owner._processValueChanging(args.text);editor.data("igCurrencyEditor")._doNotUpdate=true;if(ko.isObservable(valueAccessor().value)){valueAccessor().value(args.owner.value())}else{updatePropertyValue(element,"igCurrencyEditor",viewModel,args.owner.value())}})}ko.utils.domNodeDisposal.addDisposeCallback(element,function(){$(element).igCurrencyEditor("destroy")})},update:function(element,valueAccessor){var value,current,editor=$(element);value=ko.utils.unwrapObservable(valueAccessor().value);if(value!==""&&value!==null){if(isNaN(value)){value=undefined}else{value=parseFloat(value)}}current=editor.igCurrencyEditor("value");if(current!==value&&!editor.data("igCurrencyEditor")._doNotUpdate){editor.igCurrencyEditor("value",value)}delete editor.data("igCurrencyEditor")._doNotUpdate}};ko.bindingHandlers.igPercentEditor={init:function(element,valueAccessor,allBindingsAccessor,viewModel){var editor=$(element),options;options=$.extend({},valueAccessor());options.value=ko.utils.unwrapObservable(options.value);editor.igPercentEditor(options);if(options.updateMode===undefined){options.updateMode="onChange"}else if(options.updateMode.toLowerCase()!=="onchange"&&options.updateMode.toLowerCase()!=="immediate"){throw new Error($.ig.Editor.locale.updateModeUnsupportedValue)}if(options.updateMode.toLowerCase()==="onchange"){editor.bind("igpercenteditorvaluechanged",function(event,args){if(ko.isObservable(valueAccessor().value)){valueAccessor().value(args.newValue)}else{updatePropertyValue(element,"igPercentEditor",viewModel,args.newValue)}})}else{editor.bind("igpercenteditortextchanged",function(event,args){args.owner._processValueChanging(args.text);editor.data("igPercentEditor")._doNotUpdate=true;if(ko.isObservable(valueAccessor().value)){valueAccessor().value(args.owner.value())}else{updatePropertyValue(element,"igPercentEditor",viewModel,args.owner.value())}})}ko.utils.domNodeDisposal.addDisposeCallback(element,function(){$(element).igPercentEditor("destroy")})},update:function(element,valueAccessor){var value,current,editor=$(element);value=ko.utils.unwrapObservable(valueAccessor().value);if(value!==""&&value!==null){if(isNaN(value)){value=undefined}else{value=parseFloat(value)}}current=editor.igPercentEditor("value");if(current!==value&&!editor.data("igPercentEditor")._doNotUpdate){editor.igPercentEditor("value",value)}delete editor.data("igPercentEditor")._doNotUpdate}};ko.bindingHandlers.igMaskEditor={init:function(element,valueAccessor,allBindingsAccessor,viewModel){var editor=$(element),options;options=$.extend({},valueAccessor());options.value=ko.utils.unwrapObservable(options.value);editor.igMaskEditor(options);if(options.updateMode===undefined){options.updateMode="onChange"}else if(options.updateMode.toLowerCase()!=="onchange"&&options.updateMode.toLowerCase()!=="immediate"){throw new Error($.ig.Editor.locale.updateModeUnsupportedValue)}if(options.updateMode.toLowerCase()==="onchange"){editor.bind("igmaskeditorvaluechanged",function(event,args){if(ko.isObservable(valueAccessor().value)){valueAccessor().value(args.newValue)}else{updatePropertyValue(element,"igMaskEditor",viewModel,args.newValue)}})}else{throw new Error($.ig.Editor.locale.updateModeNotSupported)}ko.utils.domNodeDisposal.addDisposeCallback(element,function(){$(element).igMaskEditor("destroy")})},update:function(element,valueAccessor){var value,current,editor=$(element);value=ko.utils.unwrapObservable(valueAccessor().value);current=editor.igMaskEditor("value");if(current!==value){editor.igMaskEditor("value",value)}}};ko.bindingHandlers.igCheckboxEditor={init:function(element,valueAccessor,allBindingsAccessor,viewModel){var editor=$(element),options;options=$.extend({},valueAccessor());options.checked=ko.utils.unwrapObservable(options.checked);editor.igCheckboxEditor(options);if(options.updateMode===undefined){options.updateMode="onchange"}else if(options.updateMode.toLowerCase()!=="onchange"&&options.updateMode.toLowerCase()!=="immediate"){throw new Error($.ig.Editor.locale.updateModeUnsupportedValue)}editor.bind("igcheckboxeditorvaluechanged",function(event,args){if(ko.isObservable(valueAccessor().checked)){valueAccessor().checked(args.newState)}else{updatePropertyValue(element,"igCheckboxEditor",viewModel,args.newState,"checked")}});ko.utils.domNodeDisposal.addDisposeCallback(element,function(){$(element).igCheckboxEditor("destroy")})},update:function(element,valueAccessor){var value,current,editor=$(element);if(ko.isObservable(valueAccessor().checked)){value=ko.utils.unwrapObservable(valueAccessor().checked())}else{return}current=editor.igCheckboxEditor("option","checked");if(current!==value){editor.igCheckboxEditor("option","checked",value)}}};ko.bindingHandlers.igEditorDisable={update:function(element,valueAccessor){var disabled=valueAccessor(),editor=$(element),widgetNames=["igTextEditor","igNumericEditor","igPercentEditor","igCurrencyEditor","igMaskEditor","igDateEditor","igDatePicker","igCheckboxEditor"],name;disabled=ko.utils.unwrapObservable(disabled);for(name in editor.data()){if($.inArray(name,widgetNames)!==-1){editor[name]("option","disabled",disabled);break}}}}});