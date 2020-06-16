
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message === 'showPageAction') {
        chrome.pageAction.show(sender.tab.id);
    }

    if (message === 'addEvents') {
        console.warn("addEvent in background");
 
    }
});

