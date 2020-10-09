// 针对于chrome 插件进行配置

var ScriptUrl = './dist/bundle.js';
var RunAt  = 'document_start';
var IsStatus = ['loading','complete'];
var currentTabs = [];

chrome.browserAction.onClicked.addListener((tabId, changeInfo, tab) => {
    addExtension(tabId);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    var status = changeInfo.status;
    if ( IsStatus.indexOf(status) > -1 ) {
        addExtension(tabId);
    }
}); 

function addExtension(tabId) {
    if (currentTabs.indexOf(tabId) === -1 ) {
        injectScript(tabId,{ 
            file: ScriptUrl,
            runAt: RunAt })
        .then( res => {
            currentTabs.push(tabId);
            console.log("ok");
        }).catch( err => {
            console.log("err");
        });
    }
}


function injectScript(tabId, injectDetails) {
    return new Promise((resolve, reject) => {
        chrome.tabs.executeScript(tabId, injectDetails, (data) => {
            if (chrome.runtime.lastError) {
                let error = chrome.runtime.lastError.message;
                console.log('injectScript error:', error);
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}


