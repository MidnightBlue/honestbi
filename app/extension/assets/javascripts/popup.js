// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function setDOMInfo(info) {
    let name_elements = document.getElementsByClassName('_name');
    for (let i=0; i<name_elements.length; i++) {
        name_elements[i].textContent = info.name;
    }

    document.getElementById('size').textContent = info.size;
    document.getElementById('price').textContent        = 'NT $' + info.honestbee_price;
    let difference = info.price - info.honestbee_price;
    document.getElementById('difference').textContent   = '(節省' +  difference+ ' 元)';
    document.getElementById('image_url').src = info.image_url;
}

window.addEventListener('DOMContentLoaded', function () {
    // ...query for the active tab...
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        // ...and send a request for the DOM info...
        chrome.tabs.sendMessage(
            tabs[0].id,
            {from: 'popup', subject: 'DOMInfo'},
            // ...also specifying a callback to be called
            //    from the receiving end (content script)
            setDOMInfo);
    });
});
