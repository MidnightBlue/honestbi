// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';



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
        console.log('The color is green.');
    });





    //
    // TO-DO: figure out how to add rules dynamically
    //
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: '24h.pchome.com.tw', pathContains: '/prod/'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'www.momoshop.com.tw', pathContains: '/goods/GoodsDetail.jsp'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
              pageUrl: {hostEquals: 'localhost', pathContains: '/'},
          }),
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});


