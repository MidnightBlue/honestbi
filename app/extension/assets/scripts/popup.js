// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// let Utility = require('../../models/common/utility');

chrome.tabs.getSelected(null, function(tab) {
    // console.log(tab.url);
    let uri = Utility.Uri.parse(document, tab.url);
    // console.log(uri);
});


chrome.runtime.sendMessage({
    method: 'GET',
    action: 'xhttp',
    url: 'http://localhost:3000/api/v1/competitors',
    data: ''
}, function(responseText) {
    console.log(responseText);
    /*Callback function to deal with the response*/
});







let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};
