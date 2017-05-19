/*!@license
* Infragistics.Web.ClientUI data source localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.DataSourceLocale){$.ig.DataSourceLocale={};$.extend($.ig.DataSourceLocale,{locale:{invalidDataSource:"The supplied data source is invalid. It happens to be a scalar.",unknownDataSource:"Cannot determine the data source type. Please specify if it is JSON or XML data.",errorParsingArrays:"There was an error parsing the array data and applying the defined data schema: ",errorParsingJson:"There was an error parsing the JSON data and applying the defined data schema: ",errorParsingXml:"There was an error parsing the XML data and applying the defined data schema: ",errorParsingHtmlTable:"There was an error extracting the data from the HTML Table and applying the schema : ",errorExpectedTbodyParameter:"Expected a tbody or a table as a parameter.",errorTableWithIdNotFound:"The HTML Table with the following ID was not found: ",errorParsingHtmlTableNoSchema:"There was an error parsing the Table DOM: ",errorParsingJsonNoSchema:"There was an error parsing/evaluating the JSON string: ",errorParsingXmlNoSchema:"There was an error parsing the XML string: ",errorXmlSourceWithoutSchema:"The supplied data source is an xml document, but there is no defined data schema ($.IgDataSchema) ",errorUnrecognizedFilterCondition:" The filter condition that was passed was not recognized: ",errorRemoteRequest:"The remote request to fetch data has failed: ",errorSchemaMismatch:"The input data doesn't match the schema, the following field couldn't be mapped: ",errorSchemaFieldCountMismatch:"The input data doesn't match the schema in terms of number of fields. ",errorUnrecognizedResponseType:"The response type was either not set correctly, or it was not possible to detect it automatically. Please set settings.responseDataType and/or settings.responseContentType.",hierarchicalTablesNotSupported:"Tables are not supported for HierarchicalSchema",cannotBuildTemplate:"The jQuery template could not be built. There are no records present in the data source, and no columns defined.",unrecognizedCondition:"Unrecognized filtering condition in the following expression: ",fieldMismatch:"The following expression contains an invalid field or filtering condition: ",noSortingFields:"There are no fields specified. You need to specify at least one field to sort by, when calling sort().",filteringNoSchema:"There is no schema / fields specified. You need to specify a schema with field definitions and types to be able to filter the data source.",noSaveChanges:"Saving changes was not successful. Server did not return Success object or returned Success:false.",errorUnexpectedCustomFilterFunction:"An unexpected value was provided for a custom filtering function. A function or string is expected."}})}});/*!@license
* Infragistics.Web.ClientUI shared localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.SharedLocale){$.ig.SharedLocale={};$.extend($.ig.SharedLocale,{locale:{}})}});/*!@license
* Infragistics.Web.ClientUI templating localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Templating){$.ig.Templating={};$.extend($.ig.Templating,{locale:{undefinedArgument:"An error has occurred while trying to retrieve data source property: "}})}});/*!@license
* Infragistics.Web.ClientUI Combo localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Combo){$.ig.Combo={locale:{noMatchFoundText:"No matches found",dropDownButtonTitle:"Show drop-down",clearButtonTitle:"Clear value",placeHolder:"select...",notSuported:"Operation is not supported.",errorNoSupportedTextsType:"A different filtering text is required. Provide a value that is either a string or an array of strings.",errorUnrecognizedHighlightMatchesMode:"A different highlight matches mode is required. Choose a value between 'multi', 'contains', 'startsWith', 'full' and 'null'.",errorIncorrectGroupingKey:"Grouping key is not correct."}}}});/*!@license
* Infragistics.Web.ClientUI Dialog localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Dialog){$.ig.Dialog={locale:{closeButtonTitle:"Close",minimizeButtonTitle:"Minimize",maximizeButtonTitle:"Maximize",pinButtonTitle:"Pin",unpinButtonTitle:"Unpin",restoreButtonTitle:"Restore",setOptionError:"Runtime changes are not allowed for the following option: "}}}});/*!@license
* Infragistics.Web.ClientUI Editors localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Editor){$.ig.Editor={locale:{spinUpperTitle:"Increment",spinLowerTitle:"Decrement",buttonTitle:"Show list",clearTitle:"Clear value",ariaTextEditorFieldLabel:"Text Editor",ariaNumericEditorFieldLabel:"Numeric Editor",ariaCurrencyEditorFieldLabel:"Currency Editor",ariaPercentEditorFieldLabel:"Percent Editor",ariaMaskEditorFieldLabel:"Mask Editor",ariaDateEditorFieldLabel:"Date Editor",ariaDatePickerFieldLabel:"Date Picker",ariaSpinUpButton:"Spin up",ariaSpinDownButton:"Spin down",ariaDropDownButton:"Drop down",ariaClearButton:"Clear",ariaCalendarButton:"Calendar",datePickerButtonTitle:"Show calendar",updateModeUnsupportedValue:'updateMode requires a different configuration. Choose a value between "onChange" and "immediate".',updateModeNotSupported:'updateMode property supports only "onchange" mode for igMaskEditor, igDateEditor and igDatePicker extensions',renderErrMsg:"A base editor cannot be instantiated directly. Try with a text, numeric, date, or other editor.",multilineErrMsg:'textArea requires a different configuration. The textMode should be set to "multiline".',targetNotSupported:"This target element is not supported.",placeHolderNotSupported:"The placeholder attribute is not supported by your browser.",allowedValuesMsg:"Pick a value from the drop-down list",maxLengthErrMsg:"Entry is too long and was trimmed to {0} symbols",maxLengthWarningMsg:"Entry reached the maximum length of {0} for this field",minLengthErrMsg:"At least {0} characters should be entered",maxValErrMsg:"Entry reached the maximum value of {0} for this field",minValErrMsg:"Entry reached the minimum value of {0} for this field",maxValExceedRevertErrMsg:"Entry exceeded the maximum value of {0} and was reverted to previous one",minValExceedRevertErrMsg:"Entry was less than the minimum value of {0} and was reverted to previous one",maxValExceedSetErrMsg:"Entry exceeded the maximum value of {0} and was set to the maximum value",minValExceedSetErrMsg:"Entry was less than the minimum value of {0} and was set to the minimum value",maxValExceededWrappedAroundErrMsg:"Entry exceeded the maximum value of {0} and was set to the minimum allowed one",minValExceededWrappedAroundErrMsg:"Entry was less than the minimum value of {0} and was set to the maximum allowed one",btnValueNotSupported:'A different button value is required. Choose a value between "dropdown", "clear" and "spin".',scientificFormatErrMsg:'A different scientificFormat is required. Choose a value between "E", "e", "E+" and "e+".',spinDeltaIsOfTypeNumber:"A different type of spinDelta is required. A positive number should be entered.",spinDeltaCouldntBeNegative:"The spinDelta option cannot be negative. A positive number should be entered.",spinDeltaContainsExceedsMaxDecimals:"Maximum allowed fractions for spinDelta are set to {0}. Either change MaxDecimals or try to shrink your value.",spinDeltaIncorrectFloatingPoint:'A floating point spinDelta requires a different configuration. Set the dataMode of the editor to either "double" or "float" or set spinDelta to integer.',numericEditorNoSuchMethod:"The numeric editor does not support this method.",numericEditorNoSuchOption:"The numeric editor does not support this option.",displayFactorIsOfTypeNumber:"displayFactor requires a different value. Its value should be set to 1 or 100 as a number.",displayFactorAllowedValue:"displayFactor requires a different value. Its value should be set to 1 or 100 as a number.",instantiateCheckBoxErrMsg:"igCheckboxEditor requires a different element. Use INPUT, SPAN or DIV element.",cannotParseNonBoolValue:"igCheckboxEditor requires a different value. A boolean value should be provided.",cannotSetNonBoolValue:"igCheckboxEditor requires a different value. A boolean value should be provided.",maskEditorNoSuchMethod:"The mask editor does not support this method.",datePickerEditorNoSuchMethod:"The date editor does not support this method.",datePickerNoSuchMethodDropDownContainer:"The date editor does not support this method. Use 'getCalendar' one instead.",buttonTypeIsDropDownOnly:"Datepicker allows only dropdown and clear values for the buttonType option.",dateEditorOffsetRange:"The displayTimeOffset option should be between -720 and 840, which represents the offset in minutes, according to the UTC, of all the timezones from the westernmost (\u221212:00) to the easternmost (+14:00).",setOptionError:"Runtime changes are not allowed for the following option: ",invalidDate:"Invalid date",maskMessage:"All required positions should be filled",maskRevertMessage:"All required positions should be filled, that is why the value was reverted to the last valid one.",dateMessage:"A valid date should be entered",centuryThresholdValidValues:"centuryThreshold property shoud be between 0 and 99.",noListItemsNoButton:"No spin or dropdown button is rendered because there are no listitems.",decimalNumber:"When dataMode is '{0}', the {1} option can accept numeric values between 0 and {2}.",decimalSeparatorErrorMsg:"The decimalSeparator option requires a different value. Its value should be a single character.",decimalSeparatorEqualsGroupSeparatorErrorMsg:"The groupSeparator and the decimalSeparator options can not have equal values."}}}});/*!@license
* Infragistics.Web.ClientUI HTML Editor localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.HtmlEditor){$.ig.HtmlEditor={};$.extend($.ig.HtmlEditor,{locale:{boldButtonTitle:"Bold",italicButtonTitle:"Italic",underlineButtonTitle:"Underline",strikethroughButtonTitle:"Strikethrough",increaseFontSizeButtonTitle:"Increase Font Size",decreaseFontSizeButtonTitle:"Decrease Font Size",alignTextLeftButtonTitle:"Align Text Left",alignTextRightButtonTitle:"Align Text Right",alignTextCenterButtonTitle:"Center",justifyButtonTitle:"Justify",bulletsButtonTitle:"Bullets",numberingButtonTitle:"Numbering",decreaseIndentButtonTitle:"Decrease Indent",increaseIndentButtonTitle:"Increase Indent",insertPictureButtonTitle:"Insert Picture",fontColorButtonTitle:"Font Color",textHighlightButtonTitle:"Text Highlight Color",insertLinkButtonTitle:"Insert Hyperlink",insertTableButtonTitle:"Table",addRowButtonTitle:"Add Row",removeRowButtonTitle:"Remove Row",addColumnButtonTitle:"Add Column",removeColumnButtonTitle:"Remove Column",inserHRButtonTitle:"Insert Horizontal Rule",viewSourceButtonTitle:"View Source",cutButtonTitle:"Cut",copyButtonTitle:"Copy",pasteButtonTitle:"Paste",undoButtonTitle:"Undo",redoButtonTitle:"Redo",imageUrlDialogText:"Image URL:",imageAlternativeTextDialogText:"Alternative Text:",imageWidthDialogText:"Image Width:",imageHeihgtDialogText:"Image Height:",linkNavigateToUrlDialogText:"Navigate to URL:",linkDisplayTextDialogText:"Display Text:",linkOpenInDialogText:"Open In:",linkTargetNewWindowDialogText:"New Window",linkTargetSameWindowDialogText:"Same Window",linkTargetParentWindowDialogText:"Parent Window",linkTargetTopmostWindowDialogText:"Topmost Window",applyButtonTitle:"Apply",cancelButtonTitle:"Cancel",defaultToolbars:{textToolbar:"text manipulation toolbar",formattingToolbar:"text formatting toolbar",insertObjectToolbar:"objects insertion toolbar",copyPasteToolbar:"copy/paste toolbar"},fontNames:{win:[{text:"Times New Roman",value:"Times New Roman"},{text:"Arial",value:"Arial"},{text:"Arial Black",value:"Arial Black"},{text:"Helvetica",value:"Helvetica"},{text:"Comic Sans MS",value:"Comic Sans MS"},{text:"Courier New",value:"Courier New"},{text:"Georgia",value:"Georgia"},{text:"Impact",value:"Impact"},{text:"Lucida Console",value:"Lucida Console"},{text:"Lucida Sans Unicode",value:"Lucida Sans Unicode"},{text:"Palatino Linotype",value:"Palatino Linotype"},{text:"Tahoma",value:"Tahoma"},{text:"Trebuchet MS",value:"Trebuchet MS"},{text:"Verdana",value:"Verdana"},{text:"Symbol",value:"Symbol"},{text:"Webdings",value:"Webdings"},{text:"Wingdings",value:"Wingdings"},{text:"MS Sans Serif",value:"MS Sans Serif"},{text:"MS Serif",value:"MS Serif"}],mac:[{text:"Times New Roman",value:"Times New Roman"},{text:"Arial",value:"Arial"},{text:"Arial Black",value:"Arial Black"},{text:"Helvetica",value:"Helvetica"},{text:"Comic Sans MS",value:"Comic Sans MS"},{text:"Courier New",value:"Courier New"},{text:"Georgia",value:"Georgia"},{text:"Impact",value:"Impact"},{text:"Monaco",value:"Monaco"},{text:"Lucida Grande",value:"Lucida Grande"},{text:"Book Antiqua",value:"Book Antiqua"},{text:"Geneva",value:"Geneva"},{text:"Trebuchet MS",value:"Trebuchet"},{text:"Verdana",value:"Verdana"},{text:"Symbol",value:"Symbol"},{text:"Webdings",value:"Webdings"},{text:"Zapf Dingbats",value:"Zapf Dingbats"},{text:"New York",value:"New York"}]},fontSizes:[{text:"1",value:"7.5 pt"},{text:"2",value:"10 pt"},{text:"3",value:"12 pt"},{text:"4",value:"13.5 pt"},{text:"5",value:"18 pt"},{text:"6",value:"24 pt"},{text:"7",value:"36 pt"}],formatsList:[{text:"h1",value:"Heading 1"},{text:"h2",value:"Heading 2"},{text:"h3",value:"Heading 3"},{text:"h4",value:"Heading 4"},{text:"h5",value:"Heading 5"},{text:"h6",value:"Heading 6"},{text:"p",value:"Normal"}]}})}});/*!@license
* Infragistics.Web.ClientUI Notifier localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Notifier){$.ig.Notifier={};$.extend($.ig.Notifier,{locale:{successMsg:"Success",errorMsg:"Error",warningMsg:"Warning",notSupportedState:"Not supported notification state! Use one of the supported states 'success', 'info', 'warning', 'error'",notSupportedMode:"Not supported notification mode! Use one of the supported modes 'auto', 'popover', 'inline'"}})}});/*!@license
* Infragistics.Web.ClientUI Popover localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Popover){$.ig.Popover={};$.extend($.ig.Popover,{locale:{popoverOptionChangeNotSupported:"Changing the following option after igPopover has been initialized is not supported:",popoverShowMethodWithoutTarget:"The target parameter of the show function is mandatory when the selectors option is used"}})}});/*!@license
* Infragistics.Web.ClientUI Rating localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Rating){$.ig.Rating={};$.extend($.ig.Rating,{locale:{setOptionError:"Runtime changes are not allowed for the following option: "}})}});/*!@license
* Infragistics.Web.ClientUI Scroll localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Scroll){$.ig.Scroll={};$.extend($.ig.Scroll,{locale:{errorNoElementLink:"Element that is being linked does not exists.",errorNoScrollbarLink:"Scrollbar element that is being linked does not exists."}})}});/*!@license
* Infragistics.Web.ClientUI Splitter localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Splitter){$.ig.Splitter={};$.extend($.ig.Splitter,{locale:{errorPanels:"The number of panels have to be no more than two.",errorSettingOption:"Error setting option."}})}});/*!@license
* Infragistics.Web.ClientUI Tile Manager localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.TileManager){$.ig.TileManager={};$.extend($.ig.TileManager,{locale:{renderDataError:"Data was not successfully retrieved or parsed.",setOptionItemsLengthError:"The length of the items configurations does not match the number of the tiles."}})}});/*!@license
* Infragistics.Web.ClientUI Toolbar localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Toolbar){$.ig.Toolbar={};$.extend($.ig.Toolbar,{locale:{collapseButtonTitle:"Collapse",expandButtonTitle:"Expand"}})}});/*!@license
* Infragistics.Web.ClientUI Tree localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Tree){$.ig.Tree={};$.extend($.ig.Tree,{locale:{invalidArgumentType:"Invalid argument type provided.",errorOnRequest:"An error has occurred while retrieving data: ",noDataSourceUrl:"The igTree control requires a dataSourceUrl provided in order to initiate a request for data to that URL.",incorrectPath:"A node was not found at the provided path: ",incorrectNodeObject:"The provided argument is not a jQuery node element.",setOptionError:"Runtime changes are not allowed for the following option: ",moveTo:"<strong>Move to</strong> {0}",moveBetween:"<strong>Move between</strong> {0} and {1}",moveAfter:"<strong>Move after</strong> {0}",moveBefore:"<strong>Move before</strong> {0}",copyTo:"<strong>Copy to</strong> {0}",copyBetween:"<strong>Copy between</strong> {0} and {1}",copyAfter:"<strong>Copy after</strong> {0}",copyBefore:"<strong>Copy before</strong> {0}",and:"and"}})}});/*!@license
* Infragistics.Web.ClientUI Upload localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Upload){$.ig.Upload={};$.extend($.ig.Upload,{locale:{labelUploadButton:"Upload File",labelAddButton:"Add",labelClearAllButton:"Clear Uploaded",labelSummaryTemplate:"{0} of {1} uploaded",labelSummaryProgressBarTemplate:"{0}/{1}",labelShowDetails:"Show Details",labelHideDetails:"Hide Details",labelSummaryProgressButtonCancel:"Cancel",labelSummaryProgressButtonContinue:"Upload",labelSummaryProgressButtonDone:"Done",labelProgressBarFileNameContinue:"...",errorMessageFileSizeExceeded:"Max file size exceeded.",errorMessageGetFileStatus:"Could not get your current file status! Probably connection dropped.",errorMessageCancelUpload:"Could not send to server command to cancel upload! Probably connection dropped.",errorMessageNoSuchFile:"The file you requested could not be found. Probably this file is too big.",errorMessageOther:"There is internal error uploading file. Error code: {0}.",errorMessageValidatingFileExtension:"File extension validation failed.",errorMessageAJAXRequestFileSize:"AJAX error while trying to get file size.",errorMessageMaxUploadedFiles:"Maximum count of uploading files exceeded.",errorMessageMaxSimultaneousFiles:"Value of maxSimultaneousFilesUploads is incorrect. It should be more than 0 or null.",errorMessageTryToRemoveNonExistingFile:"You are trying to remove non-existing file with id {0}.",errorMessageTryToStartNonExistingFile:"You are trying to start non-existing file with id {0}.",errorMessageDropMultipleFilesWhenSingleModel:"It is not allowed to drop more than 1 file when mode is single",titleUploadFileButtonInit:"Upload File",titleAddFileButton:"Add",titleCancelUploadButton:"Cancel",titleSummaryProgressButtonContinue:"Upload",titleClearUploaded:"Clear Uploaded",titleShowDetailsButton:"Show Details",titleHideDetailsButton:"Hide Details",titleSummaryProgressButtonCancel:"Cancel",titleSummaryProgressButtonDone:"Done",titleSingleUploadButtonContinue:"Upload",titleClearAllButton:"Clear Uploaded"}})}});/*!@license
* Infragistics.Web.ClientUI Validator localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Validator){$.ig.Validator={locale:{defaultMessage:"This field needs attention",selectMessage:"A value should be selected",rangeSelectMessage:"At least {0} but no more than {1} items should be selected",minSelectMessage:"At least {0} item(s) should be selected",maxSelectMessage:"No more than {0} item(s) should be selected",rangeLengthMessage:"Entry should be between {0} and {1} characters long",minLengthMessage:"Entry should be at least {0} character(s) long",maxLengthMessage:"Entry should be no more than {0} character(s) long",requiredMessage:"This field is required",patternMessage:"Entry does not match the required pattern",maskMessage:"All required positions should be filled",dateFieldsMessage:"Date field values should be entered",invalidDayMessage:"A valid day of the month should be entered",dateMessage:"A valid date should be entered",numberMessage:"A valid number should be entered",rangeValueMessage:"A value between {0} and {1} should be entered",minValueMessage:"A value of at least {0} should be entered",maxValueMessage:"A value no more than {0} should be entered",emailMessage:"A valid email address should be entered",creditCardMessage:"A valid payment card number should be entered",equalToMessage:"The two values do not match",optionalString:"(optional)"}}}});/*!@license
* Infragistics.Web.ClientUI Video Player localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.VideoPlayer){$.ig.VideoPlayer={};$.extend($.ig.VideoPlayer,{locale:{liveStream:"Live video",live:"Live",paused:"Paused",playing:"Playing",play:"Play",volume:"Volume",unsupportedVideoSource:"The current video sources does not contain a format that is supported by your browser.",missingVideoSource:"No compatible video source.",progressLabelLongFormat:"$currentTime$ / $duration$",progressLabelShortFormat:"$currentTime$",enterFullscreen:"Go Fullscreen",exitFullscreen:"Exit Fullscreen",skipTo:"SKIP TO",unsupportedBrowser:"The current browser does not support HTML5 video. <br/>Try upgrading to any of the following versions:",currentBrowser:"Current browser: {0}",ie9:"Microsoft Internet Explorer V 9+",chrome8:"Google Chrome V 8+",firefox36:"Mozilla Firefox V 3.6+",safari5:"Apple Safari V 5+",opera11:"Opera V 11+",ieDownload:"http://www.microsoft.com/windows/internet-explorer/default.aspx",operaDownload:"http://www.opera.com/download/",chromeDownload:"http://www.google.com/chrome",firefoxDownload:"http://www.mozilla.com/",safariDownload:"http://www.apple.com/safari/download/",buffering:"Buffering...",adMessage:"Ad: Video will resume in $duration$ seconds.",adMessageLong:"Ad: Video will resume in $duration$.",adMessageNoDuration:"Ad: Video will resume after the commercial.",adNewWindowTip:"Ad: Click to open ad content in a new window.",nonDivException:"The Infragistics HTML5 Video Player can be instantiated only on a DIV tag.",relatedVideos:"RELATED VIDEOS",replayButton:"Replay",replayTooltip:"Click to replay last video.",noCommercials:"Browser controls does not support commercials"}})}});/*!@license
* Infragistics.Web.ClientUI Zoombar localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.Zoombar){$.ig.Zoombar={};$.extend($.ig.Zoombar,{locale:{zoombarTargetNotSpecified:"igZoombar requires a valid target to attach to!",zoombarTypeNotSupported:"The type of widget the Zoombar is trying to attach to is not supported!",zoombarProviderNotRecognized:"igZoombar could not initialize a provider from the class specified or the value passed is not a class.",optionChangeNotSupported:"Changing the following option after the igZoombar has been created is not supported:"}})}});/*!@license
* Infragistics.Web.ClientUI common utilities localization resources 17.1.0-rc.5
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};if(!$.ig.util){$.ig.util={};$.extend($.ig.util,{locale:{unsupportedBrowser:"The current browser does not support HTML5 canvas element. <br/>Try upgrading to any of the following versions:",currentBrowser:"Current browser: {0}",ie9:"Microsoft Internet Explorer V 9+",chrome8:"Google Chrome V 8+",firefox36:"Mozilla Firefox V 3.6+",safari5:"Apple Safari V 5+",opera11:"Opera V 11+",ieDownload:"http://www.microsoft.com/windows/internet-explorer/default.aspx",operaDownload:"http://www.opera.com/download/",chromeDownload:"http://www.google.com/chrome",firefoxDownload:"http://www.mozilla.com/",safariDownload:"http://www.apple.com/safari/download/",defaultSummaryMethodLabelMin:"Min = ",defaultSummaryMethodLabelMax:"Max = ",defaultSummaryMethodLabelSum:"Sum = ",defaultSummaryMethodLabelAvg:"Avg = ",defaultSummaryMethodLabelCount:"Count = "}})}});