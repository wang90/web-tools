var ScriptUrl = './dist/bundle.js';
var RunAt  = 'document_start';
var IsStatus = ['loading','complete'];

chrome.browserAction.onClicked.addListener((tabId, changeInfo, tab) => {
    injectScript(tabId , { 
        file: ScriptUrl,
        runAt: RunAt }).then(res => {
    }).catch(err => {
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    var status = changeInfo.status;
    if ( IsStatus.indexOf(status) > -1 ) {
        throttle(addExend(tabId));
    }
}); 

function addExend(tabId) {
    injectScript(tabId,{ 
        file: ScriptUrl,
        runAt: RunAt }).then( res => {
            console.log("ok");
    }).catch( err => {
        console.log("err");
    });
}


function throttle(fn) {
    var timer = null;
    return function() {
        var that = this;
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(that,arguments);
                timer = null;
            },500);
        }
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


