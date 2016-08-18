/*!@license
* Infragistics.Web.ClientUI data source localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.DataSourceLocale){$.ig.DataSourceLocale={};$.extend($.ig.DataSourceLocale,{locale:{invalidDataSource:"Подаденият източник на данни е невалиден.",unknownDataSource:"Типът на източника на данни не може да бъде определен. Моля дефинирайте дали данните са в JSON или XML формат.",errorParsingArrays:"Грешка при парсирането на масива от данни и при прилагането на дефинираната schema: ",errorParsingJson:"Грешка при парсирането на JSON обекта от данни и при прилагането на дефинираната schema: ",errorParsingXml:"Грешка при парсирането на XML обекта от данни и при прилагането на дефинираната schema: ",errorParsingHtmlTable:"Грешка при извличането на данни от HTML таблицата и при прилагането на дефинираната schema: ",errorExpectedTbodyParameter:"Очакваният параметър трябва да е от тип table или tbody.",errorTableWithIdNotFound:"Не е намерена HTML таблица с ID: ",errorParsingHtmlTableNoSchema:"Грешка при парсиране на табличния DOM: ",errorParsingJsonNoSchema:"Грешка при парсиране на JSON string: ",errorParsingXmlNoSchema:"Грешка при парсиране на XML string: ",errorXmlSourceWithoutSchema:"Подаденият източник на данни е XML документ, но няма дефинирана schema за данните ($.IgDataSchema).",errorUnrecognizedFilterCondition:"Неразпознато условие за филтриране: ",errorRemoteRequest:"Неуспешно завършено външно поискване на данни: ",errorSchemaMismatch:"Входните данни не отговарят на подадената schema; съответното поле не може да бъде попълнено успешно: ",errorSchemaFieldCountMismatch:"Входните данни не отговарят на подадената схема като брой полета. ",errorUnrecognizedResponseType:"Типът на доставените данни не е деклариран правилно или не е било възможно типът да бъде определен автоматично. Моля попълнете settings.responseDataType и/или settings.responseContentType.",hierarchicalTablesNotSupported:"Таблици не се поддържат от HierarchicalSchema",cannotBuildTemplate:"Шаблонът не може да бъде построен. Източника на данни няма записи и не са дефинирани колони.",unrecognizedCondition:"Неразпознато условие за филтриране: ",fieldMismatch:"Изразът съдържа невалидно поле или условие за филтриране: ",noSortingFields:"Моля задайте поне едно поле при извикване на sort().",filteringNoSchema:"Нямате зададени schema / fields. Нужно е да зададете schema с field дефиниция и типове, за да можете да филтрирате източника на данни.",noSaveChanges:"Запазването на промените беше неуспешно. Сървърът не върна обект Success или върна Success:false.",errorUnexpectedCustomFilterFunction:"Беше подадена неочаквана стойност за създадената от потребителя функция за филтриране Очаква се функция или низ."}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI shared localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.SharedLocale){$.ig.SharedLocale={};$.extend($.ig.SharedLocale,{locale:{}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI templating localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Templating){$.ig.Templating={};$.extend($.ig.Templating,{locale:{undefinedArgument:"Грешка при опит да се вземе стойността на следното свойство от източника на данни: "}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Combo localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Combo){$.ig.Combo={locale:{noMatchFoundText:"Няма намерени резултати",dropDownButtonTitle:"Покажи падащото меню",clearButtonTitle:"Изчисти стойността",placeHolder:"изберете...",notSuported:"Операцията не се поддържа.",errorNoSupportedTextsType:"Необходим е различен филтър текст. Подайте стойност, която е или низ или масив от низове.",errorUnrecognizedHighlightMatchesMode:'Необходим е друг highlight matches режим.  Изберете стойност измежду "multi", "contains", "startsWith", "full" и "null".',errorIncorrectGroupingKey:"Ключът за групиране не е правилен."}}}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Dialog localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Dialog){$.ig.Dialog={locale:{closeButtonTitle:"Затвори",minimizeButtonTitle:"Минимизирай",maximizeButtonTitle:"Максимизирай",pinButtonTitle:"Закачи",unpinButtonTitle:"Откачи",restoreButtonTitle:"Възстанови"}}}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Editors localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Editor){$.ig.Editor={locale:{spinUpperTitle:"Инкрементирай",spinLowerTitle:"Декрементирай",buttonTitle:"Покажи списъка",clearTitle:"Изчисти стойността",ariaTextEditorFieldLabel:"Текстов редактор",ariaNumericEditorFieldLabel:"Числов редактор",ariaCurrencyEditorFieldLabel:"Редактор на валута",ariaPercentEditorFieldLabel:"Редактор на проценти",ariaMaskEditorFieldLabel:"Редактор на маски",ariaDateEditorFieldLabel:"Редактор на дати",ariaDatePickerFieldLabel:"Извличане на дата",ariaSpinUpButton:"Завъртане нагоре",ariaSpinDownButton:"Завъртане надолу",ariaDropDownButton:"Падащо меню",ariaClearButton:"Изчистване",ariaCalendarButton:"Календар",datePickerButtonTitle:"Покажи календара",updateModeUnsupportedValue:'Опцията updateMode поддържа две възможни стойности - "onChange" и "immediate"',updateModeNotSupported:'Свойството updateMode поддържа само свойството "onchange" на igMaskEditor, igDateEditor и раширенията igDatePicker.',renderErrMsg:"Базовият редактор не може да бъде инстанцииран веднага. Опитайте с текстов, числов, едитор на дни или друг едитор.",multilineErrMsg:'textArea изисква различна конфигурация. textMode трябва да бъде зададен като "multiline".',targetNotSupported:"Този целеви елемент не е поддържан.",placeHolderNotSupported:"Този елемент контейнер не е поддържан от Вашия браузър.",allowedValuesMsg:"Изберете стойност от падащото меню",maxLengthErrMsg:"Входните данни са твърде дълги, за това бяха съкратени до {0} символа.",maxLengthWarningMsg:"Входните данни за това поле достигнаха максимум дължината от {0}.",minLengthErrMsg:"Трябва да бъдат въведени поне {0} знака.",maxValErrMsg:"Входните данни достигнаха максималната стойност от {0} за това поле.",minValErrMsg:"Входните данни достигнаха минималната стойност от {0} за това поле.",maxValExceedRevertErrMsg:"Входните данни надхвърлиха максималната стойност от {0} и бяха върнат към предишната им стойност.",minValExceedRevertErrMsg:"Входните данни бяха по-малки от минималната стойност от {0} и бяха върнати към предишната им стойност.",maxValExceedSetErrMsg:"Entry exceeded the maximum value of {0} and was set to the maximum value",minValExceedSetErrMsg:"Entry exceeded the minimum value of {0} and was set to the minimum value",maxValExceededWrappedAroundErrMsg:"Входните данни надхвърлиха максималната стойност от {0} и бяха върнати към най-ниската им позволена такава.",minValExceededWrappedAroundErrMsg:"Входните данни бяха по-малки от минималната стойност от {0} и бяха върнати към предишната им стойност.",btnValueNotSupported:'Необходима е различна стойност на бутона. Изберете една от следните стойности: "dropdown", "clear" или "spin".',scientificFormatErrMsg:'Необходим е различен scientificFormat. Изберете една от следните стойности: "E", "e", "E+" или "e+".',spinDeltaIsOfTypeNumber:"Необходим е различен тип на spinDelta. Трябва да бъде въведено положително число.",spinDeltaCouldntBeNegative:"Опцията spinDelta не може да бъде негативна. Трябва да бъде въведено положително число.",spinDeltaContainsExceedsMaxDecimals:"Максимъмът позволени части на spinDelta е {0}. Променете MaxDecimals или намалете стойността.",spinDeltaIncorrectFloatingPoint:'spinDelta с плаваща запетая изисква различна конфигурация. Настройте dataMode на редактора, на "double" или "float", или  настройте spinDelta на integer.',notEditableOptionByInit:"Тази опция не може да бъде променяна след инициализиране. Стойността ѝ да бъде настроена по време на инициализацията.",numericEditorNoSuchMethod:"Числовият едитор не поддържа този метод.",numericEditorNoSuchOption:"Числовият редактор не поддържа тази опция.",displayFactorIsOfTypeNumber:"displayFactor изисква различна стойност. Стойността му трябва да бъде 1 или 100. ",displayFactorAllowedValue:"displayFactor изисква различна стойност. Стойността му трябва да бъде 1 или 100. ",instantiateCheckBoxErrMsg:"igCheckboxEditor изисква различен елемент. Използвайте  INPUT, SPAN или DIV елемент.",cannotParseNonBoolValue:"igCheckboxEditor изисква различен елемент. Трябва да бъде подадена булева стойност.",cannotSetNonBoolValue:"igCheckboxEditor изисква различен елемент. Трябва да бъде подадена булева стойност.",maskEditorNoSuchMethod:"Редакторът на маски не поддържа този метод.",datePickerEditorNoSuchMethod:"Редакторът на дати не поддържа този метод.",datePickerNoSuchMethodDropDownContainer:"Редакторът на дати не поддържа този метод. Вместо него използвайте 'getCalendar'.",buttonTypeIsDropDownOnly:"Datepicker позволява само dropdown и чисти стойности за опцията buttonType.",dateEditorMinValue:"Опцията MinValue не може да бъде настроена по време на изпълнение.",dateEditorMaxValue:"Опцията MaxValue не може да бъде настроена по време на изпълнение.",cannotSetRuntime:"Тази опцията не може да бъде настроена по време на изпълнение.",invalidDate:"Невалидна дата",maskMessage:"Всички задължителни позиции трябва да бъдат попълнени.",maskRevertMessage:"Всички задължителни позиции трябва да бъдат попълнени, заради което стойността беше върната към последната валидна",dateMessage:"Трябва да бъде въведена валидна дата.",centuryThresholdValidValues:"Свойството centuryThreshold трябва да е между 0 и 99. Стойността беше върната към началната си стойност. ",noListItemsNoButton:"Брояча или падащия бутон са рендирани понеже няма listitems."}}}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI HTML Editor localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.HtmlEditor){$.ig.HtmlEditor={};$.extend($.ig.HtmlEditor,{locale:{boldButtonTitle:"Получер",italicButtonTitle:"Курсив",underlineButtonTitle:"Подчертано",strikethroughButtonTitle:"Зачеркнат",increaseFontSizeButtonTitle:"Увеличи размера на шрифта",decreaseFontSizeButtonTitle:"Намали размера на шрифта",alignTextLeftButtonTitle:"Подравняване на текст отляво",alignTextRightButtonTitle:"Подравняване на текст отдясно",alignTextCenterButtonTitle:"Центрирано",justifyButtonTitle:"Двустранно подравняване",bulletsButtonTitle:"Водещи символи",numberingButtonTitle:"Номериране",decreaseIndentButtonTitle:"Намали отстъпа",increaseIndentButtonTitle:"Увеличи отстъпа",insertPictureButtonTitle:"Вмъкване на картина",fontColorButtonTitle:"Цвят на шрифт",textHighlightButtonTitle:"Цвят на осветяване на текст",insertLinkButtonTitle:"Вмъкване на хипервръзка",insertTableButtonTitle:"Таблица",addRowButtonTitle:"Прибави ред",removeRowButtonTitle:"Премахни ред",addColumnButtonTitle:"Прибави колона",removeColumnButtonTitle:"Премахни колона",inserHRButtonTitle:"Insert Horizontal Rule",viewSourceButtonTitle:"Покажи сорс кода",cutButtonTitle:"Изрежи",copyButtonTitle:"Копирай",pasteButtonTitle:"Постави",undoButtonTitle:"Undo",redoButtonTitle:"Redo",imageUrlDialogText:"URL на картината:",imageAlternativeTextDialogText:"Алтернативен текст:",imageWidthDialogText:"Широчина на изображението:",imageHeihgtDialogText:"Височина на изображението:",linkNavigateToUrlDialogText:"Навигирай към URL:",linkDisplayTextDialogText:"Текст:",linkOpenInDialogText:"Отвори във:",linkTargetNewWindowDialogText:"Нов прозорец",linkTargetSameWindowDialogText:"Съшият прозорец",linkTargetParentWindowDialogText:"Майчиният прозорец",linkTargetTopmostWindowDialogText:"Най-горният прозорец",applyButtonTitle:"Изпълни",cancelButtonTitle:"Отказ",defaultToolbars:{textToolbar:"лентата с инструменти за манипулация на текст",formattingToolbar:"лентата с инструменти за форматиране на текст",insertObjectToolbar:"лентата с инструменти за вмъкване на обекти",copyPasteToolbar:"лентата с инструменти за копиране/поставяне"},fontNames:{win:[{text:"Times New Roman",value:"Times New Roman"},{text:"Arial",value:"Arial"},{text:"Arial Black",value:"Arial Black"},{text:"Helvetica",value:"Helvetica"},{text:"Comic Sans MS",value:"Comic Sans MS"},{text:"Courier New",value:"Courier New"},{text:"Georgia",value:"Georgia"},{text:"Impact",value:"Impact"},{text:"Lucida Console",value:"Lucida Console"},{text:"Lucida Sans Unicode",value:"Lucida Sans Unicode"},{text:"Palatino Linotype",value:"Palatino Linotype"},{text:"Tahoma",value:"Tahoma"},{text:"Trebuchet MS",value:"Trebuchet MS"},{text:"Verdana",value:"Verdana"},{text:"Symbol",value:"Symbol"},{text:"Webdings",value:"Webdings"},{text:"Wingdings",value:"Wingdings"},{text:"MS Sans Serif",value:"MS Sans Serif"},{text:"MS Serif",value:"MS Serif"}],mac:[{text:"Times New Roman",value:"Times New Roman"},{text:"Arial",value:"Arial"},{text:"Arial Black",value:"Arial Black"},{text:"Helvetica",value:"Helvetica"},{text:"Comic Sans MS",value:"Comic Sans MS"},{text:"Courier New",value:"Courier New"},{text:"Georgia",value:"Georgia"},{text:"Impact",value:"Impact"},{text:"Monaco",value:"Monaco"},{text:"Lucida Grande",value:"Lucida Grande"},{text:"Book Antiqua",value:"Book Antiqua"},{text:"Geneva",value:"Geneva"},{text:"Trebuchet MS",value:"Trebuchet"},{text:"Verdana",value:"Verdana"},{text:"Symbol",value:"Symbol"},{text:"Webdings",value:"Webdings"},{text:"Zapf Dingbats",value:"Zapf Dingbats"},{text:"New York",value:"New York"}]},fontSizes:[{text:"1",value:"7.5 pt"},{text:"2",value:"10 pt"},{text:"3",value:"12 pt"},{text:"4",value:"13.5 pt"},{text:"5",value:"18 pt"},{text:"6",value:"24 pt"},{text:"7",value:"36 pt"}],formatsList:[{text:"h1",value:"Заглавие 1"},{text:"h2",value:"Заглавие 2"},{text:"h3",value:"Заглавие 3"},{text:"h4",value:"Заглавие 4"},{text:"h5",value:"Заглавие 5"},{text:"h6",value:"Заглавие 6"},{text:"p",value:"Нормално"}]}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Notifier localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Notifier){$.ig.Notifier={};$.extend($.ig.Notifier,{locale:{successMsg:"Успех",errorMsg:"Грешка",warningMsg:"Внимание"}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Popover localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Popover){$.ig.Popover={};$.extend($.ig.Popover,{locale:{popoverOptionChangeNotSupported:"Промяната на следната опция след инициализация на igPopover не се поддържа:",popoverShowMethodWithoutTarget:"Целевият параметър на функцията show е задължителен, когато се използва опцията за селектори."}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Rating localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Rating){$.ig.Rating={};$.extend($.ig.Rating,{locale:{setOptionError:"Стойността на следната опция не може да бъде променяна след инициализация: "}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Scroll localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Scroll){$.ig.Scroll={};$.extend($.ig.Scroll,{locale:{errorNoElementLink:"Element that is being linked does not exists.",errorNoScrollbarLink:"Scrollbar element that is being linked does not exists."}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Splitter localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Splitter){$.ig.Splitter={};$.extend($.ig.Splitter,{locale:{errorPanels:"Броят на панелите не може да надвишава два.",errorSettingOption:"Грешка в настройката на опцията."}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Tile Manager localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.TileManager){$.ig.TileManager={};$.extend($.ig.TileManager,{locale:{renderDataError:"Извличането или парсирането на данните е неуспешно.",setOptionItemsLengthError:"Дължината на подадената items конфигурация не отговаря на броя на плочките."}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Toolbar localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Toolbar){$.ig.Toolbar={};$.extend($.ig.Toolbar,{locale:{collapseButtonTitle:"Прибери",expandButtonTitle:"Отвори"}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Tree localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Tree){$.ig.Tree={};$.extend($.ig.Tree,{locale:{invalidArgumentType:"Подаденият аргумент е от невалиден тип.",errorOnRequest:"Проблем при извличане на данните: ",noDataSourceUrl:"igTree изисква опцията dataSourceUrl да бъде попълнена, за да се оправят заявки за данни.",incorrectPath:"Връх със следната пътека не беше намерен: ",incorrectNodeObject:"Подаденият аргумент не е jQuery елемент.",setOptionError:"Стойността на следната опция не може да бъде променяна след инициализация: ",moveTo:"<strong>Премести върху</strong> {0}",moveBetween:"<strong>Премести между</strong> {0} и {1}",moveAfter:"<strong>Премести след</strong> {0}",moveBefore:"<strong>Премести преди</strong> {0}",copyTo:"<strong>Копирай върху</strong> {0}",copyBetween:"<strong>Копирай между</strong> {0} и {1}",copyAfter:"<strong>Копирай след</strong> {0}",copyBefore:"<strong>Копирай преди</strong> {0}",and:"и"}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Upload localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Upload){$.ig.Upload={};$.extend($.ig.Upload,{locale:{labelUploadButton:"Качи файл",labelAddButton:"Прибави",labelClearAllButton:"Изчисти качените",labelSummaryTemplate:"{0} от {1} качени",labelSummaryProgressBarTemplate:"{0}/{1}",labelShowDetails:"Покажи детайлите",labelHideDetails:"Скрий детайлите",labelSummaryProgressButtonCancel:"Отказ",labelSummaryProgressButtonContinue:"Качи",labelSummaryProgressButtonDone:"Готово",labelProgressBarFileNameContinue:"...",errorMessageFileSizeExceeded:"Максималната големина на файла е надхвърлена.",errorMessageGetFileStatus:"Състоянието на файла не може да бъде взето! Вероятно е връзката да е прекъснала.",errorMessageCancelUpload:"Командата за отмяна на качването е неуспешно изпратена! Вероятно е връзката да е прекъснала.",errorMessageNoSuchFile:"Файлът не може да бъде намерен. Вероятно файлът е твърде голям.",errorMessageOther:"Грешка при качването на файла. Код на грешката: {0}.",errorMessageValidatingFileExtension:"Неуспешно валидиране на разширението на файла.",errorMessageAJAXRequestFileSize:"Грешка в AJAX заявката при опит да се вземе големината на файла.",errorMessageMaxUploadedFiles:"Надхвърлен е максималният брой на качените файлове.",errorMessageMaxSimultaneousFiles:"Стойността на опцията maxSimultaneousFilesUploads е невалидна. Трябва да е по-голяма от 0 или null.",errorMessageTryToRemoveNonExistingFile:"Опитвате премахване на несъществуващ файл с id {0}.",errorMessageTryToStartNonExistingFile:"Опитвате стартиране на качване на несъществуващ файл с id {0}.",errorMessageDropMultipleFilesWhenSingleModel:"Не е позволено пускането на повече от 1 файл когато режимът е single",titleUploadFileButtonInit:"Качи файл",titleAddFileButton:"Прибави",titleCancelUploadButton:"Отказ",titleSummaryProgressButtonContinue:"Качи",titleClearUploaded:"Изчисти качените",titleShowDetailsButton:"Покажи детайлите",titleHideDetailsButton:"Скрий детайлите",titleSummaryProgressButtonCancel:"Отказ",titleSummaryProgressButtonDone:"Готово",titleSingleUploadButtonContinue:"Качи",titleClearAllButton:"Изчисти качените"}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Validator localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Validator){$.ig.Validator={locale:{defaultMessage:"Обърнете внимание на това поле",selectMessage:"Трябва да бъде избрана стойност.",rangeSelectMessage:"Поне {0}, но не повече от {1} е елемента трябва да бъдат избрани.",minSelectMessage:"Поне {0} елемента трябва да бъдат избрани.",maxSelectMessage:"Не повече от {0} трябва да бъдат избрани",rangeLengthMessage:"Входните данни трябва да са дълги между {0} и {1} знака",minLengthMessage:"Входните данни трябва да са дълги поне {0} знака.",maxLengthMessage:"Входните данни не трябва да са дълги повече от {0} знака.",requiredMessage:"Това поле е задължително",patternMessage:"Въведените данни не спазват зададения образец.",maskMessage:"Всички задължителни позиции трябва да бъдат попълнени.",dateFieldsMessage:"Трябва да бъдат въведени стойности от полето за дата",invalidDayMessage:"Трябва да бъде въведен валиден ден от месеца.",dateMessage:"Трябва да бъде въведена валидна дата.",numberMessage:"Трябва да бъде въведено валидно число.",rangeValueMessage:"Моля попълнете стойност между {0} и {1}",minValueMessage:"Моля попълнете стойност по-голяма или равна на {0}",maxValueMessage:"Моля попълнете стойност по-малка или равна на {0}",emailMessage:"Трябва да бъде въведен валиден имейл адрес.",creditCardMessage:"Трябва да бъде въведен валиден номер на банкова карта.",equalToMessage:"Двете стойности не съвпадат.",optionalString:"(незадължително)"}}}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Video Player localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.VideoPlayer){$.ig.VideoPlayer={};$.extend($.ig.VideoPlayer,{locale:{liveStream:"Видео на живо",live:"На живо",paused:"Паузирано",playing:"В прогрес",play:"Пусни",volume:"Сила на звука",unsupportedVideoSource:"Подадените видео източници не съдържат формат поддържан от вашия браузър.",missingVideoSource:"Липсват видео източници.",progressLabelLongFormat:"$currentTime$ / $duration$",progressLabelShortFormat:"$currentTime$",enterFullscreen:"Цял екран",exitFullscreen:"Излез от цял екран",skipTo:"Отиди до",unsupportedBrowser:"Вашият браузър не поддържа HTML5 видео. <br/>Моля обновете до някоя от следните версии:",currentBrowser:"Вашият браузър: {0}",ie9:"Microsoft Internet Explorer V 9+",chrome8:"Google Chrome V 8+",firefox36:"Mozilla Firefox V 3.6+",safari5:"Apple Safari V 5+",opera11:"Opera V 11+",ieDownload:"http://www.microsoft.com/windows/internet-explorer/default.aspx",operaDownload:"http://www.opera.com/download/",chromeDownload:"http://www.google.com/chrome",firefoxDownload:"http://www.mozilla.com/",safariDownload:"http://www.apple.com/safari/download/",buffering:"Буфериране...",adMessage:"Реклама: Видеото ще продължи след $duration$ секунди.",adMessageLong:"Реклама: Видеото ще продължи след $duration$.",adMessageNoDuration:"Реклама: Видеото ще продължи след рекламите.",adNewWindowTip:"Реклама: Натиснете тук, за да отворите съдържанието в нов прозорец.",nonDivException:"Infragistics HTML5 Video Player може да бъде инстанциран само на DIV елемент.",relatedVideos:"Подобни видея",replayButton:"Започни отначало",replayTooltip:"Натиснете тук, за да пуснете видеото отначало."}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Zoombar localization resources 0.16.2-PreRelease.2
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Zoombar){$.ig.Zoombar={};$.extend($.ig.Zoombar,{locale:{zoombarTargetNotSpecified:"igZoombar изисква валидна цел, към която да се прикрепи!",zoombarTypeNotSupported:"Видът на компонента, към който igZoombar се опитва да се прикрепи не се поддържа!",zoombarProviderNotRecognized:"igZoombar could not initialize a provider from the class specified or the value passed is not a class.",optionChangeNotSupported:"Промяната на следната опция след инициализация на igZoombar не се поддържа:"}})}})(jQuery);
(function($){$.ig=$.ig||{};if(!$.ig.util){$.ig.util={};$.extend($.ig.util,{locale:{unsupportedBrowser:"Браузърът ви не поддържа HTML5 canvas елемент. <br/>Моля обновете до някоя от следните версии:",currentBrowser:"Вашият браузър: {0}",ie9:"Microsoft Internet Explorer V 9+",chrome8:"Google Chrome V 8+",firefox36:"Mozilla Firefox V 3.6+",safari5:"Apple Safari V 5+",opera11:"Opera V 11+",ieDownload:"http://www.microsoft.com/windows/internet-explorer/default.aspx",operaDownload:"http://www.opera.com/download/",chromeDownload:"http://www.google.com/chrome",firefoxDownload:"http://www.mozilla.com/",safariDownload:"http://www.apple.com/safari/download/"}})}})(jQuery);