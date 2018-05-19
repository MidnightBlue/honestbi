// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// console.log(config);
let api = new Environment.ApiServer(config);
// console.log(api);

let conditions = [];

api.competitors(function (response) {
    let competitors = JSON.parse(response);
    for(let i=0; i<competitors.length; i++) {
        let competitor = competitors[i];
        conditions.push(new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: competitor.host, pathContains: competitor.product_path_patterns}
        }));
    }
    // console.log('wait' + conditions);
});
// console.log('no wait' + conditions);




chrome.runtime.onInstalled.addListener(function() {
    chrome.runtime.onMessage.addListener(function(request, sender, callback) {
        if ('xhttp' === request.action) {
            let xhttp = new XMLHttpRequest();
            let method = request.method ? request.method.toUpperCase() : 'GET';

            xhttp.onload = function() {
                callback(xhttp.responseText);
            };
            xhttp.onerror = function() {
                // Do whatever you want on error. Don't forget to invoke the
                // callback to clean up the communication port.
                callback();
            };
            xhttp.open(method, request.url, true);
            if ('POST' === method) {
                xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
            xhttp.send(request.data);
            return true; // prevents the callback from being called too early on return
        }
    });

    chrome.storage.sync.set({color: '#3aa757'}, function() {
        // console.log('The color is green.');
    });

    chrome.storage.sync.get('user_uuid', function(items) {
        let user_uuid = items.user_uuid;
        if (user_uuid) {
            useToken(user_uuid);
        } else {
            user_uuid = Utility.get_random_token();
            chrome.storage.sync.set({user_uuid: user_uuid}, function() {
                useToken(user_uuid);
            });
        }
        function useToken(user_uuid) {
            // TODO: Use user id for authentication or whatever you want.
        }
    });




    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: conditions,
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});


