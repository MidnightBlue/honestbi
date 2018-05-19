'use strict';

let api = new Environment.ApiServer(config);

let competitors = [];
api.competitors(function (response) {
    competitors = JSON.parse(response);
});

let url_patterns = [];
for(let i=0; i<competitors.length; i++) {
    url_patterns.push(competitors[i].product_path_patterns)
}
console.log(url_patterns);








//利用 tabs.query api 查找畫面上的所有tab
function queryTabsAndShowPageActions(queryObject) {
    chrome.tabs.query(queryObject,
        function(tabs) {
            if (tabs && tabs.length > 0) {
                for (var i = 0; i < tabs.length; i++) {
                    //在加載完畢的tab上，使用chrome.pageAction.show 啟用按鈕
                    if (tabs[i].status === "complete") chrome.pageAction.show(tabs[i].id);
                }
            }
        }
    );
}

//第一次的初始化
chrome.runtime.onInstalled.addListener(function() {
    chrome.runtime.onMessage.addListener(function(request, sender, callback) {
        if ('check_tab' === request.action) {
            for (let i=0; i<url_patterns.length; i++) {
                queryTabsAndShowPageActions({
                    "active": true,
                    "currentWindow": true,
                    "url": url_patterns[i]
                });
            }
            return true; // prevents the callback from being called too early on return
        }
    });    // for (let i=0; i<url_patterns.length; i++) {
    //     queryTabsAndShowPageActions({
    //         "active": false,
    //         "currentWindow": true,
    //         "url": url_patterns[i]
    //     });
    // }
});

//每次tab有變動，檢查現在這個current tab是否在指定的 url pattern底下
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     for (let i=0; i<url_patterns.length; i++) {
//         queryTabsAndShowPageActions({
//             "active": true,
//             "currentWindow": true,
//             "url": url_patterns[i]
//         });
//     }
// });