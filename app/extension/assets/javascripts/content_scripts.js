window.onload = function() {

    let api = new Environment.ApiServer(config);

    let user_uuid;
    // let difference;

    let product_info;
    function set_product_info(info) {
        product_info = {
            name: info.name,
            size: info.size,
            image_url: info.image_url,
            honestbee_price: info.honestbee_price,
            price: info.price,
        };
    }

    chrome.runtime.onMessage.addListener(function (msg, sender, response) {
        if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
            response(product_info);
        }
    });

    const timer = setInterval(() => {
        let difference;
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
                    let diff = JSON.parse(response).diff;
                    console.log(diff);
                    product_info = {
                        name: diff.name,
                        size: diff.size,
                        image_url: diff.image_url,
                        honestbee_price: diff.honestbee_price,
                        price: diff.price,
                    };
                });
            });


        }

    }, 150);

};