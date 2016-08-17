/*!@license
* Infragistics.Web.ClientUI data source localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.DataSourceLocale){$.ig.DataSourceLocale={};$.extend($.ig.DataSourceLocale,{locale:{invalidDataSource:"El origen de datos proporcionado no es válido. Es de tipo escalar.",unknownDataSource:"No se puede determinar el tipo de origen de datos. Especifique si son datos JSON o XML.",errorParsingArrays:"Se ha producido un error al analizar los datos de matriz y aplicar el esquema de datos definido: ",errorParsingJson:"Se ha producido un error al analizar los datos JSON y aplicar el esquema de datos definido: ",errorParsingXml:"Se ha producido un error al analizar los datos XML y aplicar el esquema de datos definido: ",errorParsingHtmlTable:"Se ha producido un error al extraer datos de la tabla HTML y aplicar el esquema: ",errorExpectedTbodyParameter:"Se esperaba un tbody o una tabla como parámetro.",errorTableWithIdNotFound:"No se ha encontrado la tabla HTML con el siguiente Id.: ",errorParsingHtmlTableNoSchema:"Se ha producido un error al analizar el DOM de la tabla: ",errorParsingJsonNoSchema:"Se ha producido un error al analizar/evaluar la cadena JSON: ",errorParsingXmlNoSchema:"Se ha producido un error al analizar la cadena XML: ",errorXmlSourceWithoutSchema:"El origen de datos proporcionado es un documento xml, pero no hay un esquema de datos definido ($.IgDataSchema) ",errorUnrecognizedFilterCondition:" La condición de filtro especificada no ha sido reconocida: ",errorRemoteRequest:"Error en la solicitud remota de recuperación de datos: ",errorSchemaMismatch:"Los datos de entrada no coinciden con el esquema, no se ha podido asignar el siguiente campo: ",errorSchemaFieldCountMismatch:"Los datos de entrada no coinciden con el esquema en términos de número de campos. ",errorUnrecognizedResponseType:"El tipo de respuesta no se ha establecido correctamente o no ha sido posible detectarlo automáticamente. Establezca settings.responseDataType y/o settings.responseContentType.",hierarchicalTablesNotSupported:"Tablas no admitidas para HierarchicalSchema",cannotBuildTemplate:"No se ha podido generar la plantilla jQuery. No hay registros presentes en el origen de datos y no hay columnas definidas.",unrecognizedCondition:"Condición de filtro no reconocida en la siguiente expresión: ",fieldMismatch:"La siguiente expresión contiene un campo o una condición de filtro no válidos: ",noSortingFields:"No se ha especificado ningún campo. Debe especificar al menos un campo de ordenación al llamar a sort().",filteringNoSchema:"No se ha especificado ningún esquema / campo. Debe especificar un esquema con definiciones y tipos de campo para poder filtrar el origen de datos.",noSaveChanges:"No se han guardado los cambios correctamente. El servidor no ha devuelto el objeto Success, o ha devuelto Success:false.",errorUnexpectedCustomFilterFunction:"Se ha proporcionado un valor inesperado para una función de filtrado personalizado. Se esperaba una función o cadena."}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI shared localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.SharedLocale){$.ig.SharedLocale={};$.extend($.ig.SharedLocale,{locale:{}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI templating localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Templating){$.ig.Templating={};$.extend($.ig.Templating,{locale:{undefinedArgument:"Se ha producido un error al intentar recuperar las propiedades del origen de datos: "}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Combo localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Combo){$.ig.Combo={locale:{noMatchFoundText:"No hay resultados",dropDownButtonTitle:"Mostrar lista desplegable",clearButtonTitle:"Borrar valor",placeHolder:"seleccionar...",notSuported:"Esta operación no se admite.",errorNoSupportedTextsType:"Se requiere un texto de filtrado diferente. Proporcione un valor que sea o una cadena o una matriz de cadenas.",errorUnrecognizedHighlightMatchesMode:'Se requiere un modo de resaltado de coincidencias diferente. Elija un valor entre "multi", "contains", "startsWith", "full" y "null".',errorIncorrectGroupingKey:"La clave de agrupamiento no es correcta."}}}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Dialog localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Dialog){$.ig.Dialog={locale:{closeButtonTitle:"Cerrar",minimizeButtonTitle:"Minimizar",maximizeButtonTitle:"Maximizar",pinButtonTitle:"Anclar",unpinButtonTitle:"Desanclar",restoreButtonTitle:"Restaurar"}}}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Editors localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Editor){$.ig.Editor={locale:{spinUpperTitle:"Incrementar",spinLowerTitle:"Reducir",buttonTitle:"Mostrar lista",clearTitle:"Borrar valor",ariaTextEditorFieldLabel:"Editor de texto",ariaNumericEditorFieldLabel:"Editor numérico",ariaCurrencyEditorFieldLabel:"Editor de moneda",ariaPercentEditorFieldLabel:"Editor de porcentaje",ariaMaskEditorFieldLabel:"Editor de máscara",ariaDateEditorFieldLabel:"Editor de fecha",ariaDatePickerFieldLabel:"Selector de fecha",ariaSpinUpButton:"Incrementar",ariaSpinDownButton:"Reducir",ariaDropDownButton:"Desplegar",ariaClearButton:"Borrar",ariaCalendarButton:"Calendario",datePickerButtonTitle:"Mostrar calendario",updateModeUnsupportedValue:'La opción updateMode admite dos valores posibles: "onChange" e "immediate"',updateModeNotSupported:'La propiedad updateMode solo es compatible con el modo "onchange" para las extensiones igMaskEditor, igDateEditor y igDatePicker',renderErrMsg:"No se puede instalar un editor de base directamente. Inténtelo con un editor de texto, numérico, de fecha u otro editor.",multilineErrMsg:'textArea requiere una configuración diferente. textMode debería ajustarse a "multiline".',targetNotSupported:"Este elemento de origen no se admite.",placeHolderNotSupported:"Su navegador no admite el atributo de campo de comodín.",allowedValuesMsg:"Elija un valor de la lista desplegable.",maxLengthErrMsg:"La entrada es demasiado larga y se ha acortado en {0} símbolos.",maxLengthWarningMsg:"La entrada ha llegado a la longitud máxima de {0} para este campo",minLengthErrMsg:"Deben introducirse al menos {0} caracteres.",maxValErrMsg:"La entrada ha alcanzado el valor máximo de {0} para este campo.",minValErrMsg:"La entrada ha alcanzado el valor mínimo de {0} para este campo.",maxValExceedRevertErrMsg:"La entrada ha superado el valor máximo de {0} y se ha vuelto a la anterior.",minValExceedRevertErrMsg:"La entrada es inferior al valor mínimo de {0} y ha vuelto al valor anterior",maxValExceedSetErrMsg:"Entry exceeded the maximum value of {0} and was set to the maximum value",minValExceedSetErrMsg:"Entry exceeded the minimum value of {0} and was set to the minimum value",maxValExceededWrappedAroundErrMsg:"La entrada ha superado el valor máximo de {0} y se ha ajustado al mínimo permitido.",minValExceededWrappedAroundErrMsg:"La entrada es inferior al valor mínimo de {0} y se ha ajustado en el valor máximo permitido",btnValueNotSupported:'Se requiere un valor de botón diferente. Elija un valor entre "dropdown", "clear" y "spin".',scientificFormatErrMsg:'Se requiere un scientificFormat diferente. Elija un valor entre "E", "e", "E+" y "e+".',spinDeltaIsOfTypeNumber:"Se requiere un tipo de spinDelta diferente. Debe introducirse un número positivo.",spinDeltaCouldntBeNegative:"La opción spinDelta no puede ser negativa. Debe introducirse un número positivo.",spinDeltaContainsExceedsMaxDecimals:"El número de fracciones máximo permitido para spinDelta está establecido en {0}. Cambie MaxDecimals o bien intente reducir su valor.",spinDeltaIncorrectFloatingPoint:'Un punto flotante spinDelta requiere una configuración diferente. Configure dataMode del editor a "double" o "float" o configure spinDelta a un valor entero.',notEditableOptionByInit:"Esta opción no puede editarse tras la inicialización. Su valor debe establecerse durante la inicialización.",numericEditorNoSuchMethod:"El editor numérico no admite este método.",numericEditorNoSuchOption:"El editor numérico no es compatible con esta opción.",displayFactorIsOfTypeNumber:"displayFactor requiere un valor diferente. Su valor debe establecerse con un número entre 1 o 100.",displayFactorAllowedValue:"displayFactor requiere un valor diferente. Su valor debe establecerse con un número entre 1 o 100.",instantiateCheckBoxErrMsg:"igCheckboxEditor requiere un elemento diferente. Utilice los elementos INPUT, SPAN o DIV.",cannotParseNonBoolValue:"igCheckboxEditor requiere un valor diferente. Debe proporcionarse un valor booleano.",cannotSetNonBoolValue:"igCheckboxEditor requiere un valor diferente. Debe proporcionarse un valor booleano.",maskEditorNoSuchMethod:"El editor de máscaras no admite este método.",datePickerEditorNoSuchMethod:"El editor de fechas no admite este método.",datePickerNoSuchMethodDropDownContainer:"El editor de fechas no admite este método. En su lugar, utilice 'getCalendar' uno.",buttonTypeIsDropDownOnly:"Datepicker sólo admite valores de desplegar menú y de borrar para la opción buttonType.",dateEditorMinValue:"La opción MinValue no puede establecer un tiempo de ejecución.",dateEditorMaxValue:"La opción MaxValue no puede establecer un tiempo de ejecución.",cannotSetRuntime:"Esta opción no puede establecer un tiempo de ejecución",invalidDate:"Fecha no válida",maskMessage:"Deben rellenarse todas las posiciones requeridas.",maskRevertMessage:"All required positions should be filled, that is why the value was reverted to the last valid one.",dateMessage:"Debe introducirse una fecha válida",centuryThresholdValidValues:"La propiedad centuryThreshold debería estar entre 0 y 99. Se ha devuelto este valor a su ajuste predeterminado.",noListItemsNoButton:"No se representa ningún botón desplegable o de control de número porque no hay elementos de lista."}}}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI HTML Editor localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.HtmlEditor){$.ig.HtmlEditor={};$.extend($.ig.HtmlEditor,{locale:{boldButtonTitle:"Negrita",italicButtonTitle:"Cursiva",underlineButtonTitle:"Subrayado",strikethroughButtonTitle:"Tachado",increaseFontSizeButtonTitle:"Aumentar tamaño de fuente",decreaseFontSizeButtonTitle:"Disminuir tamaño de fuente",alignTextLeftButtonTitle:"Alinear texto a la izquierda",alignTextRightButtonTitle:"Alinear texto a la derecha",alignTextCenterButtonTitle:"Centrar",justifyButtonTitle:"Justificar",bulletsButtonTitle:"Viñetas",numberingButtonTitle:"Numeración",decreaseIndentButtonTitle:"Disminuir sangría",increaseIndentButtonTitle:"Aumentar sangría",insertPictureButtonTitle:"Insertar imagen",fontColorButtonTitle:"Color de fuente",textHighlightButtonTitle:"Color de resaltado de texto",insertLinkButtonTitle:"Insertar hipervínculo",insertTableButtonTitle:"Tabla",addRowButtonTitle:"Agregar fila",removeRowButtonTitle:"Quitar fila",addColumnButtonTitle:"Agregar columna",removeColumnButtonTitle:"Quitar columna",inserHRButtonTitle:"Insertar regla horizontal",viewSourceButtonTitle:"Mostrar origen",cutButtonTitle:"Cortar",copyButtonTitle:"Copiar",pasteButtonTitle:"Pegar",undoButtonTitle:"Deshacer",redoButtonTitle:"Rehacer",imageUrlDialogText:"Dirección URL de la imagen:",imageAlternativeTextDialogText:"Texto alternativo:",imageWidthDialogText:"Ancho de la imagen:",imageHeihgtDialogText:"Alto de la imagen:",linkNavigateToUrlDialogText:"Navegar a la dirección URL:",linkDisplayTextDialogText:"Mostrar texto:",linkOpenInDialogText:"Abrir en:",linkTargetNewWindowDialogText:"Nueva ventana",linkTargetSameWindowDialogText:"Misma ventana",linkTargetParentWindowDialogText:"Ventana primaria",linkTargetTopmostWindowDialogText:"Ventana de nivel superior",applyButtonTitle:"Aplicar",cancelButtonTitle:"Cancelar",defaultToolbars:{textToolbar:"text manipulation toolbar",formattingToolbar:"text formatting toolbar",insertObjectToolbar:"objects insertion toolbar",copyPasteToolbar:"copy/paste toolbar"},fontNames:{win:[{text:"Times New Roman",value:"Times New Roman"},{text:"Arial",value:"Arial"},{text:"Arial Black",value:"Arial Black"},{text:"Helvetica",value:"Helvetica"},{text:"Comic Sans MS",value:"Comic Sans MS"},{text:"Courier New",value:"Courier New"},{text:"Georgia",value:"Georgia"},{text:"Impact",value:"Impact"},{text:"Lucida Console",value:"Lucida Console"},{text:"Lucida Sans Unicode",value:"Lucida Sans Unicode"},{text:"Palatino Linotype",value:"Palatino Linotype"},{text:"Tahoma",value:"Tahoma"},{text:"Trebuchet MS",value:"Trebuchet MS"},{text:"Verdana",value:"Verdana"},{text:"Symbol",value:"Symbol"},{text:"Webdings",value:"Webdings"},{text:"Wingdings",value:"Wingdings"},{text:"MS Sans Serif",value:"MS Sans Serif"},{text:"MS Serif",value:"MS Serif"}],mac:[{text:"Times New Roman",value:"Times New Roman"},{text:"Arial",value:"Arial"},{text:"Arial Black",value:"Arial Black"},{text:"Helvetica",value:"Helvetica"},{text:"Comic Sans MS",value:"Comic Sans MS"},{text:"Courier New",value:"Courier New"},{text:"Georgia",value:"Georgia"},{text:"Impact",value:"Impact"},{text:"Monaco",value:"Monaco"},{text:"Lucida Grande",value:"Lucida Grande"},{text:"Book Antiqua",value:"Book Antiqua"},{text:"Geneva",value:"Geneva"},{text:"Trebuchet MS",value:"Trebuchet"},{text:"Verdana",value:"Verdana"},{text:"Symbol",value:"Symbol"},{text:"Webdings",value:"Webdings"},{text:"Zapf Dingbats",value:"Zapf Dingbats"},{text:"New York",value:"New York"}]},fontSizes:[{text:"1",value:"7.5 pt"},{text:"2",value:"10 pt"},{text:"3",value:"12 pt"},{text:"4",value:"13.5 pt"},{text:"5",value:"18 pt"},{text:"6",value:"24 pt"},{text:"7",value:"36 pt"}],formatsList:[{text:"h1",value:"Encabezado 1"},{text:"h2",value:"Encabezado 2"},{text:"h3",value:"Encabezado 3"},{text:"h4",value:"Encabezado 4"},{text:"h5",value:"Encabezado 5"},{text:"h6",value:"Encabezado 6"},{text:"p",value:"Normal"}]}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Notifier localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Notifier){$.ig.Notifier={};$.extend($.ig.Notifier,{locale:{successMsg:"Correcto",errorMsg:"Error",warningMsg:"Advertencia"}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Popover localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Popover){$.ig.Popover={};$.extend($.ig.Popover,{locale:{popoverOptionChangeNotSupported:"No se admite el cambio de la siguiente opción después de inicializar igPopover:",popoverShowMethodWithoutTarget:"El parámetro target de la función show es obligatorio cuando se utiliza la opción selectors"}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Rating localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Rating){$.ig.Rating={};$.extend($.ig.Rating,{locale:{setOptionError:"Los cambios en el tiempo de ejecución no están permitidos para la siguiente opción: "}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Scroll localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Scroll){$.ig.Scroll={};$.extend($.ig.Scroll,{locale:{errorNoElementLink:"Element that is being linked does not exists.",errorNoScrollbarLink:"Scrollbar element that is being linked does not exists."}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Splitter localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Splitter){$.ig.Splitter={};$.extend($.ig.Splitter,{locale:{errorPanels:"El número de paneles no puede ser superior a dos.",errorSettingOption:"Error al ajustar la opción."}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Tile Manager localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.TileManager){$.ig.TileManager={};$.extend($.ig.TileManager,{locale:{renderDataError:"Los datos no se han recuperado o analizado correctamente.",setOptionItemsLengthError:"The length of the items configurations does not match the number of the tiles."}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Toolbar localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Toolbar){$.ig.Toolbar={};$.extend($.ig.Toolbar,{locale:{collapseButtonTitle:"Contraer",expandButtonTitle:"Expandir"}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Tree localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Tree){$.ig.Tree={};$.extend($.ig.Tree,{locale:{invalidArgumentType:"El tipo de argumento proporcionado no es válido.",errorOnRequest:"Se ha producido un error al recuperar los datos: ",noDataSourceUrl:"El control igTree requiere que se proporcione una dataSourceUrl para iniciar una solicitud de datos en esa dirección URL.",incorrectPath:"No se ha encontrado un nodo en la ruta proporcionada: ",incorrectNodeObject:"El argumento proporcionado no es un elemento nodo de jQuery.",setOptionError:"Los cambios en el tiempo de ejecución no están permitidos para la siguiente opción: ",moveTo:"<strong>Mover a</strong> {0}",moveBetween:"<strong>Mover entre</strong> {0} y {1}",moveAfter:"<strong>Mover después de</strong> {0}",moveBefore:"<strong>Mover antes de</strong> {0}",copyTo:"<strong>Copiar en</strong> {0}",copyBetween:"<strong>Copiar entre</strong> {0} y {1}",copyAfter:"<strong>Copiar después de</strong> {0}",copyBefore:"<strong>Copiar antes de</strong> {0}",and:"y"}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Upload localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Upload){$.ig.Upload={};$.extend($.ig.Upload,{locale:{labelUploadButton:"Cargar archivo",labelAddButton:"Agregar",labelClearAllButton:"Borrar cargados",labelSummaryTemplate:"{0} de {1} cargados",labelSummaryProgressBarTemplate:"{0}/{1}",labelShowDetails:"Mostrar detalles",labelHideDetails:"Ocultar detalles",labelSummaryProgressButtonCancel:"Cancelar",labelSummaryProgressButtonContinue:"Cargar",labelSummaryProgressButtonDone:"Terminado",labelProgressBarFileNameContinue:"...",errorMessageFileSizeExceeded:"Se ha excedido el tamaño máximo de archivo.",errorMessageGetFileStatus:"¡Imposible obtener el estado de archivo actual! Probablemente se ha cortado la conexión.",errorMessageCancelUpload:"¡Imposible enviar comando al servidor para cancelar la carga! Probablemente se ha cortado la conexión.",errorMessageNoSuchFile:"No se ha encontrado el archivo que ha solicitado. Probablemente el archivo es demasiado grande.",errorMessageOther:"Error interno al cargar el archivo. Código de error: {0}.",errorMessageValidatingFileExtension:"Error en la validación de extensión del archivo.",errorMessageAJAXRequestFileSize:"Error de AJAX al intentar obtener el tamaño del archivo.",errorMessageMaxUploadedFiles:"Se ha superado el número máximo de archivos que pueden cargarse.",errorMessageMaxSimultaneousFiles:"El valor de maxSimultaneousFilesUploads es incorrecto. Debe ser superior a 0 o nulo.",errorMessageTryToRemoveNonExistingFile:"Está intentando eliminar un archivo no existente con el Id. {0}.",errorMessageTryToStartNonExistingFile:"Está intentando ejecutar un archivo no existente con el Id. {0}.",errorMessageDropMultipleFilesWhenSingleModel:"No se permite soltar más de 1 archivo en el modo único",titleUploadFileButtonInit:"Cargar archivo",titleAddFileButton:"Agregar",titleCancelUploadButton:"Cancelar",titleSummaryProgressButtonContinue:"Cargar",titleClearUploaded:"Borrar cargados",titleShowDetailsButton:"Mostrar detalles",titleHideDetailsButton:"Ocultar detalles",titleSummaryProgressButtonCancel:"Cancelar",titleSummaryProgressButtonDone:"Terminado",titleSingleUploadButtonContinue:"Cargar",titleClearAllButton:"Borrar cargados"}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Validator localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Validator){$.ig.Validator={locale:{defaultMessage:"Corrija este campo",selectMessage:"Seleccione un valor",rangeSelectMessage:"Seleccione un número de elementos entre {0} como máximo y {1} como mínimo",minSelectMessage:"Seleccione {0} elementos como mínimo",maxSelectMessage:"No seleccione más de {0} elementos",rangeLengthMessage:"Escriba un valor de entre {0} y {1} caracteres",minLengthMessage:"Escriba {0} caracteres como mínimo",maxLengthMessage:"No escriba más de {0} caracteres",requiredMessage:"Este campo es obligatorio",patternMessage:"La entrada no coincide con el patrón necesario.",maskMessage:"Rellene todas las posiciones obligatorias",dateFieldsMessage:"Rellene los campos de fecha",invalidDayMessage:"Día del mes no válido. Escriba el día correcto",dateMessage:"Escriba una fecha válida",numberMessage:"Escriba un número válido",rangeValueMessage:"Escriba un valor entre {0} y {1}",minValueMessage:"Escriba un valor mayor o igual a {0}",maxValueMessage:"Escriba un valor menor o igual a {0}",emailMessage:"Debe introducirse una dirección de correo electrónico válida.",creditCardMessage:"A valid payment card number should be entered",equalToMessage:"Los dos valores no coinciden",optionalString:"(opcional)"}}}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Video Player localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.VideoPlayer){$.ig.VideoPlayer={};$.extend($.ig.VideoPlayer,{locale:{liveStream:"Vídeo en directo",live:"Directo",paused:"Pausado",playing:"Reproduciendo",play:"Reproducir",volume:"Volumen",unsupportedVideoSource:"Los orígenes de vídeo actuales no contienen un formato compatible con su explorador.",missingVideoSource:"No hay orígenes de vídeo compatibles.",progressLabelLongFormat:"$currentTime$ / $duration$",progressLabelShortFormat:"$currentTime$",enterFullscreen:"Mostrar en pantalla completa",exitFullscreen:"Salir de pantalla completa",skipTo:"SALTAR A",unsupportedBrowser:"El explorador actual no admite vídeo HTML5. <br/>Intente actualizar a una de las siguientes versiones:",currentBrowser:"Explorador actual: {0}",ie9:"Microsoft Internet Explorer V 9+",chrome8:"Google Chrome V 8+",firefox36:"Mozilla Firefox V 3.6+",safari5:"Apple Safari V 5+",opera11:"Opera V 11+",ieDownload:"http://www.microsoft.com/windows/internet-explorer/default.aspx",operaDownload:"http://www.opera.com/download/",chromeDownload:"http://www.google.com/chrome",firefoxDownload:"http://www.mozilla.com/",safariDownload:"http://www.apple.com/safari/download/",buffering:"Almacenando en búfer...",adMessage:"Anuncio: El vídeo se reanudará en $duration$ segundos.",adMessageLong:"Anuncio: El vídeo se reanudará en $duration$.",adMessageNoDuration:"Anuncio: El vídeo se reanudará después de la publicidad.",adNewWindowTip:"Anuncio: Haga clic para abrir el contenido del anuncio en una ventana nueva.",nonDivException:"El Reproductor de vídeo Infragistics HTML5 solo puede instanciarse en una etiqueta DIV.",relatedVideos:"VÍDEOS RELACIONADOS",replayButton:"Volver a reproducir",replayTooltip:"Haga clic para volver a reproducir el último vídeo."}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Zoombar localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Zoombar){$.ig.Zoombar={};$.extend($.ig.Zoombar,{locale:{zoombarTargetNotSpecified:"igZoombar necesita un destino válido al que adjuntarse.",zoombarTypeNotSupported:"El tipo de widget al que la barra de zoom intenta adjuntarse no se admite.",zoombarProviderNotRecognized:"igZoombar could not initialize a provider from the class specified or the value passed is not a class.",optionChangeNotSupported:"No se admite cambiar la opción siguiente después de que igZoombar se haya creado:"}})}})(jQuery);
/*!@license
* Infragistics.Web.ClientUI common utilities localization resources 0.16.2-PreRelease.1
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.util){$.ig.util={};$.extend($.ig.util,{locale:{unsupportedBrowser:"El explorador actual no admite el elemento canvas de HTML5. <br/>Intente actualizar a una de las siguientes versiones:",currentBrowser:"Explorador actual: {0}",ie9:"Microsoft Internet Explorer V 9+",chrome8:"Google Chrome V 8+",firefox36:"Mozilla Firefox V 3.6+",safari5:"Apple Safari V 5+",opera11:"Opera V 11+",ieDownload:"http://www.microsoft.com/windows/internet-explorer/default.aspx",operaDownload:"http://www.opera.com/download/",chromeDownload:"http://www.google.com/chrome",firefoxDownload:"http://www.mozilla.com/",safariDownload:"http://www.apple.com/safari/download/"}})}})(jQuery);