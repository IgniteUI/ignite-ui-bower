/*!@license
* Infragistics.Web.ClientUI igCombo KnockoutJS extension 19.1.30
*
* Copyright (c) 2012-2020 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
*	jquery-1.9.1.js
*	ig.util.js
*	ig.dataSource.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["../modules/infragistics.ui.combo","knockout"],factory)}else{factory(jQuery,ko)}})(function($,ko){function selectItems(combo,selectedItems){var valueKey=combo.igCombo("option","valueKey"),allowCustomValue=combo.igCombo("option","allowCustomValue"),selectedValues=[],index,item,value;selectedItems=ko.utils.unwrapObservable(selectedItems);if(selectedItems){if(allowCustomValue&&!selectedItems.length){return}for(index=0;index<selectedItems.length;index++){item=selectedItems[index];if(typeof item==="function"){item=item()}if(typeof item==="object"){value=item[valueKey]}else{value=item}selectedValues.push(value)}combo.igCombo("value",selectedValues)}}function applyListItemsBindings(valueAccessor){var combo=valueAccessor().combo,$comboList=combo.igCombo("listItems"),options=valueAccessor().options,dataSource=ko.utils.unwrapObservable(valueAccessor().dataSource),i;if(dataSource){for(i=0;i<dataSource.length;i++){if(ko.isObservable(dataSource[i])){ko.applyBindingsToNode($comboList[i],{igComboItem:{combo:combo,value:dataSource[i],index:i,options:options}},dataSource[i])}}}}ko.bindingHandlers.igCombo={init:function(element,valueAccessor){var combo=$(element),options=valueAccessor(),dataSource=options.dataSource,selectedItems=options.selectedItems,dataSourceSubscription;combo.igCombo(options);ko.applyBindingsToNode(element,{igComboSelection:{selectedItems:selectedItems}},selectedItems);if(ko.isObservable(dataSource)){dataSourceSubscription=dataSource.subscribe(function(){combo.data("dataSourceUpdating",true)});ko.utils.domNodeDisposal.addDisposeCallback(element,function(){dataSourceSubscription.dispose()})}ko.applyBindingsToNode(combo.data("igCombo")._options.$dropDownCont[0],{igComboList:{combo:combo,options:options,dataSource:dataSource,selectedItems:selectedItems}},dataSource);ko.utils.registerEventHandler(element,"igcomboselectionchanged",function(evt,ui){var valueKey=ui.owner.options.valueKey,items=ui.items,selectedItems=valueAccessor().selectedItems,selectionType=valueAccessor().selectedItemType,selectedValues=[],item,itemData,firstItem,itemForSelection,index;if(items&&selectedItems&&ko.isObservable(selectedItems)){selectedItems=ko.utils.unwrapObservable(selectedItems);if(!selectionType){if(selectedItems.length>0){firstItem=selectedItems[0];if(typeof firstItem==="function"){firstItem=firstItem()}if(typeof firstItem==="object"){selectionType="object"}else{selectionType="primitive"}}else{selectionType="primitive"}}items=typeof items==="function"?items():items;for(index=0;index<items.length;index++){item=items[index];itemData=item.data;if(typeof itemData==="function"){itemData=itemData()}if(selectionType==="object"){itemForSelection=itemData}else if(selectionType==="primitive"){itemForSelection=itemData[valueKey]}if(typeof itemForSelection==="function"){itemForSelection=itemForSelection()}selectedValues.push(itemForSelection)}}if(ko.isObservable(valueAccessor().selectedItems)){valueAccessor().selectedItems(selectedValues)}})}};ko.bindingHandlers.igComboSelection={update:function(element,valueAccessor){selectItems($(element),valueAccessor().selectedItems)}};ko.bindingHandlers.igComboList={init:function(element,valueAccessor){applyListItemsBindings(valueAccessor)},update:function(element,valueAccessor){var combo=$(valueAccessor().combo),options=valueAccessor().options,dataSource=ko.utils.unwrapObservable(valueAccessor().dataSource),dropDownScroller=combo.data("igCombo")._options.$dropDownScrollCont,lastScrollTop=dropDownScroller?dropDownScroller.scrollTop():0;if(!!combo.data("dataSourceUpdating")){combo.removeData("dataSourceUpdating");combo.one("igcomboitemsrendered",function(){applyListItemsBindings(valueAccessor);selectItems(combo,valueAccessor().selectedItems)});combo.igCombo("option","dataSource",dataSource);if(options.virtualization){dropDownScroller.scrollTop(lastScrollTop-1)}}}};ko.bindingHandlers.igComboItem={update:function(element,valueAccessor){var combo=valueAccessor().combo,textKey=valueAccessor().options.textKey,valueKey=valueAccessor().options.valueKey,item,index,dsItem;if(valueKey===undefined&&textKey===undefined){return}index=valueAccessor().index;dsItem=valueAccessor().value;item=$(combo.igCombo("dropDown").find("li").eq(index));combo.data("igCombo")._updateItem(item,dsItem);combo.data("igCombo")._updateInputValues()}};ko.bindingHandlers.igComboVisible={update:function(element,valueAccessor){var visible=valueAccessor(),combo=$(element);if(!ko.isObservable(visible)){return}combo.igCombo("comboWrapper").css("display",visible()?"inline-block":"none")}};ko.bindingHandlers.igComboDisable={update:function(element,valueAccessor){var disabled=valueAccessor(),combo=$(element);if(!ko.isObservable(disabled)){return}combo.igCombo("option","disabled",disabled())}}});