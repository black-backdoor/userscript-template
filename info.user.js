const GMinfo = GM_info ?? GM?.info ?? (() => {}); // SET GMinfo to GM_info or GM.info (set to GM.info if GM_info is undefined)

const script  = {
    name: GMinfo?.script?.name || undefined,
    namespace: GMinfo?.script?.namespace || undefined,
    description: GMinfo?.script?.description || undefined,

    version: GMinfo?.script?.version || undefined,
    permissions: GMinfo?.script?.grant || undefined,

    run_at: GMinfo?.script?.runAt || GMinfo?.script?.options?.run_at || undefined,
    scriptWillUpdate: GMinfo?.scriptWillUpdate || GMinfo?.script?.options?.check_for_updates || undefined,

    isFirstPartyIsolation: GMinfo?.isFirstPartyIsolation || undefined,
    injectInto: GMinfo?.injectInto || undefined,
    sandboxMode: GMinfo?.sandboxMode || undefined,
    sandbox: GMinfo?.script?.options?.sandbox || undefined,

    // SCRIPT URLs
    downloadURL: GMinfo?.script?.downloadURL || undefined,
    updateURL: GMinfo?.script?.updateURL || undefined,
};

const browser = {
    browserName: GMinfo?.platform?.browserName,
    browserVersion: GMinfo?.platform?.browserVersion,
    os: GMinfo?.platform?.os || navigator?.userAgentData?.platform || navigator?.userAgent?.platform,

    language: navigator?.language || undefined,
    languages: navigator?.languages || undefined,

    userAgent: navigator?.userAgent || undefined,
    userAgentData: navigator?.userAgentData || undefined,

    isIncognito: GMinfo?.isIncognito || undefined,
    cookiesEnabled: navigator?.cookieEnabled || undefined,
    online: navigator?.onLine || undefined,
};

const scriptHandler = {
    scriptHandler: GMinfo?.scriptHandler || undefined,
    scriptHandlerVersion: GMinfo?.version || undefined,
};

const website = {
    location: window?.location?.href || undefined,
    pageTitle: document?.title || undefined,
    referrer: document?.referrer || undefined,
    windowSize: `${window?.innerWidth}x${window?.innerHeight}`,
    windowSizeHeight: window?.innerHeight || undefined,
    windowSizeWidth: window?.innerWidth || undefined,
    documentSize: `${document?.documentElement?.scrollWidth}x${document?.documentElement?.scrollHeight}`,
    documentSizeHeight: document?.documentElement?.scrollHeight || undefined,
    documentSizeWidth: document?.documentElement?.scrollWidth || undefined,
}
