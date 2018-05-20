window.onload = function() {

    let api = new Environment.ApiServer(config);

    let user_uuid;
    let difference;

    const timer = setInterval(() => {
        // const name = document.getElementById('NickContainer');
        let name = document.evaluate('//*[@id="NickContainer"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        let price = document.evaluate('//*[@id="PriceTotal"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if(name && name.textContent && price && price.textContent) {
            clearTimeout(timer);
            // console.log(name.textContent);
            // console.log(price.textContent);

            chrome.runtime.sendMessage({
                from:    'content',
                subject: 'showPageAction'
            });

            chrome.storage.sync.get('user_uuid', function(items) {
                user_uuid = items.user_uuid;
                api.log_page_view({uuid: user_uuid, path: window.location, name: name.textContent, price: price.textContent}, function (response) {
                    console.log(response);
                    difference = response.difference;
                });
            });

            chrome.runtime.onMessage.addListener(function (msg, sender, response) {
                // First, validate the message's structure
                if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
                    // Collect the necessary data
                    // (For your specific requirements `document.querySelectorAll(...)`
                    //  should be equivalent to jquery's `$(...)`)
                    let domInfo = {
                        name: '鱈魚香絲',
                        size: '600g',
                        image_url: 'https://assets.honestbee.com/products/images/480/cf_cf0009719_cf0009719-1.jpg',
                        honestbee_price: 106,
                        price: 399,
                    };

                    // Directly respond to the sender (popup),
                    // through the specified callback */
                    response(domInfo);
                }
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