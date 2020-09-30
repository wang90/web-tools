// chrome.browserAction.onClicked.addListener(function (tab) {
//     chrome.tabs.executeScript(tab.ib, {
//         file: "./dist/bundle.js",
//         runAt: "document_start",
//     });
// });

chrome.runtime.onInstalled.addListener(function (tab) {
    console.log("加载事件");
    chrome.tabs.executeScript(tab.ib, {
        file: "./dist/bundle.js",
        runAt: "document_start",
    });
})
