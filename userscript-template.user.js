// ==UserScript==
// @note               NAME
// @name               TEMPLATE
// @name:en            TEMPLATE ENGLISH
// @note
// @version            1.0.0
// @author             black-backdoor
// @authorURL          https://github.com/black-backdoor
// @note
// @note               DESCRIPTION
// @description        DESCRIPTION_GENERAL
// @description:en     DESCRIPTION_ENGLISH
// @note
// @namespace          TMEPLATE
// @icon               https://github.com/black-backdoor/userscript-template/raw/main/icon.svg
// @note
// @note               SCRIPT WEBSITES 
// @homepageURL        https://github.com/black-backdoor/userscript-template
// @supportURL         https://github.com/black-backdoor/userscript-template/issues
// @note
// @note               UPDATE AND DOWNLAOD LINKS
// @downloadURL        https://github.com/black-backdoor/userscript-template/raw/main/userscript-template.user.js
// @updateURL          https://github.com/black-backdoor/userscript-template/raw/main/userscript-template.user.js
// @note
// @note               REQUIREMENTS
// @note // @require            LINK TO JS FILE
// @note
// @note               MATCH / INCLUDE / EXCLUDE
// @match              *://*/*
// @note
// @note               COMPATIBILITY WITH OTHER SCRIPT MANAGERS
// @compatible         edge Violentmonkey, Tampermonkey
// @compatible         chrome Violentmonkeys, Tampermonkey
// @compatible         firefox Violentmonkey, Tampermonkey
// @note
// @note               GRANT PERMISSIONS TO THE SCRIPT
// @grant              GM_info
// @grant              GM.info
// @note               VALUE STORAGE
// @grant              GM_getValue
// @grant              GM.getValue
// @grant              GM_setValue
// @grant              GM.setValue
// @grant              GM_listValues
// @grant              GM.listValues
// @grant              GM_deleteValue
// @grant              GM.deleteValue
// @note
// @run-at             document-end
// ==/UserScript==


// ################################### DEBUG ####################################

// CUSTOM SCRIPT DEBUGGING, SHOULD NOT BE TURNED ON FOR DAILY USE.
// SET TO "TRUE" FOR SCRIPT DEBUGGING, MAY CAUSE THE SCRIPT TO RUN SLOWLY.
// THE SETTING VALUE TYPE MUST BE BOOLEAN, FALSE BY DEFAULT.

const DEBUG_MODE = true;  // SWITCH OF DEBUG MODE

// ################################### DEBUG ####################################


// ######################### INFO ##########################
const GMinfo = GM_info ?? GM?.info ?? (() => {}); // SET GMinfo to GM_info or GM.info (set to GM.info if GM_info is undefined)

// ######## SCRIPT INFO ########
const ScriptInfo  = {
    name: GMinfo?.script?.name || undefined,
    version: GMinfo?.script?.version || undefined,
    run_at: GMinfo?.script?.runAt || GMinfo?.script?.options?.run_at || undefined,
    scriptWillUpdate: GMinfo?.scriptWillUpdate || GMinfo?.script?.options?.check_for_updates || undefined,

    isFirstPartyIsolation: GMinfo?.isFirstPartyIsolation || undefined,
    injectInto: GMinfo?.injectInto || undefined,

    // SCRIPT URLs
    downloadURL: GMinfo?.script?.downloadURL || undefined,
    updateURL: GMinfo?.script?.updateURL || undefined,
    permissions: GMinfo?.script?.grant || undefined,
};

// ######## SCRIPT ENVIRONMENT ########
const ScriptEnvironment = {
    // ######## ScriptHandler ########
    scriptHandler: GMinfo?.scriptHandler || undefined,
    scriptHandlerVersion: GMinfo?.version || undefined,
    
    // SANDBOX (STILL IN ALPHA)
    sandboxMode: GMinfo?.sandboxMode || undefined,
    sandbox: GMinfo?.script?.options?.sandbox || undefined,
    
    // ######## BROWSER ########
    browserName: GMinfo?.platform?.browserName || navigator?.userAgent || undefined,
    browserVersion: GMinfo?.platform?.browserVersion || navigator?.userAgentData?.brands || navigator?.userAgent || undefined,
    os: GMinfo?.platform?.os || navigator?.userAgentData?.platform || navigator?.userAgent?.platform || undefined,

    language: navigator?.language || undefined,
    languages: navigator?.languages || undefined,

    userAgentData: navigator?.userAgentData || undefined,
    userAgent: navigator?.userAgent || undefined,

    isIncognito: GMinfo?.isIncognito || undefined,
}


// ######## CONST INFO VARIABLES ########
const scriptHandler = GMinfo?.scriptHandler.toLowerCase();  // GET ScriptHandler NAME



// ######################### INITIALIZE LOG FUNCTIONS ##########################
const spliter = "=".repeat(40);


// ######################### FUNCTIONS FOR ERRORS THAT APPEAR WHEN DEBUGGING IN IS CAUSED BY DEBUGGING ##########################
const DEBUG_ERROR = DEBUG_MODE ? console.error.bind(console, "%c[ERROR] %cAn error occurred in %cDEBUG FUNCTION:%c", 'color: red', 'color: inherit', 'color: blue', 'color: inherit') : () => {};


// ######################### INITIALIZE DEBUG FUNCTIONS ##########################
const DEBUG = DEBUG_MODE ? console.log.bind(console, "[DEBUG]") : () => {};
const LOG = DEBUG_MODE ? console.log.bind(console, "[LOG]") : () => {};
const INFO = DEBUG_MODE ? console.info.bind(console, "%c[INFO]%c", 'color: purple', 'color: inherit') : () => {};
const WARN = DEBUG_MODE ? console.warn.bind(console, "%c[WARN]%c", 'color: red', 'color: inherit') : () => {};

// const ERROR = DEBUG_MODE ? console.error.bind(console, "ERROR:") : () => {};
// const COUNT = DEBUG_MODE ? console.count.bind(console) : () => {};


// ###################################### SCRIPT INITIALIZE #######################################
WARN("DEBUG_MODE:", DEBUG_MODE);


// ######################### PRINT INFO ##########################

// ######## PRINT FUNCTIONS ########
const SCRIPT_INFO = DEBUG_MODE ? (key, value) => {console.info(`%c[SCRIPT] %c${key}%c: %c${value}`, 'color: blue;', 'color: inherit;', 'color: blue;', 'color: green;'); } : () => {};
const SCRIPT_INFO_RAW = DEBUG_MODE ? (value) => {console.info(`%c[SCRIPT] %c${value}`, 'color: blue', 'color: inherit'); } : () => {};


try {
    SCRIPT_INFO_RAW(spliter + spliter);  // HEADER

    // ######## SCRIPT ########
    SCRIPT_INFO("name", ScriptInfo.name);
    SCRIPT_INFO("script version", ScriptInfo.version);
    SCRIPT_INFO("scriptWillUpdate", ScriptInfo.scriptWillUpdate);
    SCRIPT_INFO("run-at", ScriptInfo.run_at);
    SCRIPT_INFO_RAW(spliter);

    // ######## SCRIPTHANDLER ########
    SCRIPT_INFO("scriptHandler", ScriptEnvironment.scriptHandler);
    SCRIPT_INFO("scriptHandlerVersion", ScriptEnvironment.scriptHandlerVersion);
    SCRIPT_INFO_RAW(spliter);

    // ######## BROWSER ########
    SCRIPT_INFO("browserName", ScriptEnvironment.browserName);
    SCRIPT_INFO("browserVersion", ScriptEnvironment.browserVersion);
    SCRIPT_INFO("os", ScriptEnvironment.os);
    SCRIPT_INFO_RAW(spliter);
    
    // ######## URL INFO ########
    SCRIPT_INFO("website", location.href);
    
    SCRIPT_INFO("downloadURL", ScriptInfo.downloadURL); // SCRIPT URLs 
    SCRIPT_INFO("updateURL", ScriptInfo.updateURL);
    SCRIPT_INFO_RAW(spliter);

    // USER INFO
    // SCRIPT_INFO("language", ScriptInfo.language);
    // SCRIPT_INFO("languages", ScriptInfo.languages);

    SCRIPT_INFO("isFirstPartyIsolation", ScriptInfo.isFirstPartyIsolation);
    SCRIPT_INFO("injectInto", ScriptInfo.injectInto);
    
    SCRIPT_INFO("sandboxMode", ScriptInfo.sandboxMode);
    SCRIPT_INFO("sandbox", ScriptInfo.sandbox);
    
    SCRIPT_INFO_RAW(spliter);
    console.log("Screen Resolution: " + window.screen.width + "x" + window.screen.height);
    console.log("Viewport Size: " + window.innerWidth + "x" + window.innerHeight);  
    SCRIPT_INFO("permissions", ScriptInfo.permissions);
    SCRIPT_INFO("userAgent", ScriptEnvironment.userAgent);
    SCRIPT_INFO("userAgentData", ScriptEnvironment.userAgentData);
    SCRIPT_INFO("isIncognito", ScriptEnvironment.isIncognito);
    SCRIPT_INFO_RAW(spliter);

    SCRIPT_INFO_RAW(spliter + spliter);  // END

}
catch (error) {
    DEBUG_ERROR(error.message);
}


// ######################### VALUE INFO ##########################

// ######## PRINT FUNCTIONS ########
const VALUE_INFO = DEBUG_MODE ? (key, value) => {console.info(`%c[VALUE] %c${key}%c:%c${value}`, 'color: purple;', 'color: blue;', 'color: inherit;', 'color: green;'); } : () => {};
const VALUE_INFO_RAW = DEBUG_MODE ? (value) => {console.info(`%c[VALUE] %c${value}`, 'color: purple', 'color: inherit'); } : () => {};

try {    
    const allKeys = GM_listValues();  // GET A LIST OF ALL VALUES
    VALUE_INFO_RAW(spliter + spliter);  // HEADER

    for (const key of allKeys) { 
        var value = GM_getValue(key);  // reads the value of the key
        VALUE_INFO(key, value);  // PRINT VALUE
    }

    VALUE_INFO_RAW(spliter + spliter);  // END

}
catch (error) {
    DEBUG_ERROR(error.message);
}


// ######################### SCRIPT ##########################
