 chrome.proxy.settings.set({
        value: {
            mode: "system"
        },
        scope: "regular"
    }, () => {
        if (chrome.runtime.lastError) {
            console.error("Error clearing proxy:", chrome.runtime.lastError.message);
        } else {
            console.log("Proxy settings cleared.");
        }
    }); 
