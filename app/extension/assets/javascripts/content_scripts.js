window.onload = function() {
    let api = new Environment.ApiServer(config);

    let user_uuid;
    // chrome.storage.sync.get('user_uuid', function(items) {
    //     user_uuid = items.user_uuid;
    //     api.log_page_view(user_uuid, window.location, function (response) {
    //         console.log(response);
    //     });
    // });

    const timer = setInterval(() => {
        // const name = document.getElementById('NickContainer');
        let name = document.evaluate('//*[@id="NickContainer"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        let price = document.evaluate('//*[@id="PriceTotal"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if(name && name.textContent && price && price.textContent) {
            clearTimeout(timer);
            console.log(name.textContent);
            console.log(price.textContent);

            chrome.storage.sync.get('user_uuid', function(items) {
                user_uuid = items.user_uuid;
                api.log_page_view({uuid: user_uuid, path: window.location, name: name.textContent, price: price.textContent}, function (response) {
                    console.log(response);
                });
            });
        }

    }, 150);



    // let name = document.evaluate('//*[@id="NickContainer"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    // console.log(name);
    //
    // let price = document.evaluate('//*[@id="PriceTotal"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    // console.log(price);

    // chrome.runtime.sendMessage({
    //     method: 'GET',
    //     action: 'xhttp',
    //     url: 'http://localhost:3000/api/v1/competitors',
    //     data: ''
    // }, function(responseText) {
    //     console.log(responseText);
    //     /*Callback function to deal with the response*/
    // });

    // document.write('Hello world');
};