var MSG = {
    title: "BlocklyDuino",
    appName: "BlocklyDuino",
    blocks: "Blocs",
    prog: "Program",
    catLogic: "💡 Lògica",
    catLoops: "↻ Bucles",
    catMath: "+ Matemàtiques",
    catText: "ℜ Text",
    catLists: "☰ Llstes",
    catColour: "🌈 Color",
    catVariables: "❓ Variables",
    catFunctions: "ƒ(x) Funcions",
    listVariable: "llista",
    textVariable: "text",
    screenshot: "Descarrega una captura de pantalla",
    xmlError: "No es pot carregar el vostre fitxer desat. Tal vegada ha estat creat amb una altra versió de S4E?",
    badXml: "Error d'anàlisi XML:\n%1\n\nSelecciona 'D\'acord' per abandonar els canvis o 'Cancel·la' per continuar editant el fitxer.",
    languageSpan: "tria idioma",
    interfaceColorSpan: "interface theme",
    codeEditorColorSpan: "code editor theme",
    themeSpan: "tria tema",
    renderSpan: "tria renderitzador",
    fullScreenButton_span: "full screen",
    undoButton_span: "Desfés",
    redoButton_span: "Refés",
    boardSpan: "tria placa Arduino",
    boardButtonSpan: "list boards",
    verifyButton_span: "Verifica codi",
    serialSpan: "tria port COM",
    serialButtonSpan: "list COM port",
    uploadButton_span: "Càrrega",
    serialConnectButton_span: "Monitor sèrie",
    saveCodeButton_span: "Exporta codi Arduino",
    newButton_span: "Projecte nou",
    saveXMLButton_span: "Desa fitxer BlocklyDuino",
    loadXMLfakeButton_span: "Carrega fitxer BlocklyDuino",
    loadXML_span: "Replace existing blocks?\n'Cancel' will merge.",
    loadXML_error_span: "Error parsing XML:\n",
    resetButton_span: "Restableix BlocklyDuino",
    helpButton_span: "ajuda",
    copyCodeButton_span: "Copia codi a  porta-retalls",
    accessibilitySpan: "habilita mode accessibilitat (Shift + Ctrl + K):",
    defaultCursorSpan: "Cursor per defecte",
    basicCursorSpan: "Cursor bàsic",
    lineCursorSpan: "Cursor línia",
    keyMappingSpan: "obre assignacions de tecles",
    themeClassicSpan: "Clàssic",
    themeModernSpan: "Modern",
    themeDeuteranopiaSpan: "Deuteranopia/Protanopia",
    themeTritanopiaSpan: "Tritanopia",
    themeZelosSpan: "Zelos",
    themeHighContrastSpan: "Alt contrast",
    themeDarkSpan: "Fosc",
    themeBwSpan: "Negre & Blanc",
    compilationInProgress: "Placa",
    keyMappingModalSpan: "Estableix assignacions de tecles",
    detailedCompilation_span: "Compilació detallada amb missatges",
    CLI_title_span: "Configura Arduino CLI",
    installBoard_title_span: "instal·la placa al CLI",
    searchlLib_title_span: "cerca una biblioteca",
    installLib_title_span: "instal·la biblioteca  al CLI",
    actionName0: "previ",
    actionName1: "següent",
    actionName2: "entra al bloc",
    actionName3: "surt del bloc",
    actionName4: "insereix",
    actionName5: "marca",
    actionName6: "desconnecta",
    actionName7: "Caixa d'eines",
    actionName8: "sortida",
    actionName9: "mou l'espai de treball amunt",
    actionName10: "mou l'espai de treball avall",
    actionName11: "mou l'espai de treball a esquerra",
    actionName12: "mou l'espai de treball a dreta",
    actionName13: "commuta el teclat de navegació",
    setup_sideButton_span: "configura",
    fontSizeSpan: "renderització",
    optionFontSizeBlocks: "Mida del tipus de lletra blocs",
    optionFontSizePage: "Mida del tipus de lletra pàgina",
    optionFontSpacingPage: "Espaiat de lletra pàgina",
    keyMappingExplanationSpan: "accessibility: <a href='https://github.com/BlocklyDuino/BlocklyDuino-v2' target='_blank'>online documentation</a>",
    //CLI_functions.js
    config_sideButton_span: "Control del compilador Arduino CLI",
    arduinoCLI_githubLinkButton_span: "documentació",
    coreUpdateButton_msg: "S'està actualitzant...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_msg: "S'està netejant...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_error_msg: "Error suprimint la carpeta .\\tmp",
    cleanCLIcacheButton_success_msg: "Netejat!",
    listBoardsButton_msg: "S'està cercant la placa...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installBoardsButton_msg: "S'està instal·lant el suport de la placa, espera...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    searchlLibButton_msg: "S'està cercant la biblioteca...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installLibButton_msg: "S'està instal·lant la biblioteca...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    coreUpdateButton_span: "actualitza nucli i biblioteques",
    cleanCLIcacheButton_span: "S'està netejant memòria cau",
    listBoardsButton_span: "detecció i llistat de plaques",
    installBoardsInput_span: "nom de la plata a suportar",
    installBoardsButton_span: "instal·la aquest tipus de placa",
    searchlLibInput_span: "nom de la bibliteca a cercar",
    searchlLibButton_span: "cerca aquesta biblioteca",
    installLibInput_span: "nom de la biblioteca a instal·lar",
    installLibButton_span: "instal·la aquesta biblioteca",
    //IDE_functions.js
    IDE_connect: 'Connecta al port ',
    IDE_select_port: 'Selecciona el port !',
    IDE_select_board: 'Selecciona la placa !',
    IDE_verif_progress: '\nVerificació: en progres...\n<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>',
    IDE_verif_ok: '\nVerificació: D\'acord',
    IDE_upload1: 'Placa ',
    IDE_upload2: ' al port ',
    IDE_upload3: '\nCàrrega: en progres...\n<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>',
    IDE_upload_ok: '\nCàrrega: D\'acord',
    serial_btn_start: "<span class='fa fa-play'></span> Start",
    serial_info_stop: 'stop<br>',
    serial_btn_stop: "<span class='fa fa-pause'></span> Stop",
    serial_info_start: 'communication starting<br>',
    serial_CSV: 'Export data to CSV',
    inputTextSerial: 'Text',
    btn_serialSend_span: 'Send',
    btn_serialConnect_span: 'Start',
    btn_serialPeekClear_span: 'Clean',
    btn_serialPeekCSV_span: 'Export',
    btn_serialChart_span: 'Graph',
    btn_serialChartPause_span: 'Start'
};