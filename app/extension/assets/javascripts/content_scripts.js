// window.onload = function() {
    let api = new Environment.ApiServer(config);

    let user_uuid;
    chrome.storage.sync.get('user_uuid', function(items) {
        user_uuid = items.user_uuid;
        api.log_page_view(user_uuid, window.location, function (response) {
            console.log(response);
        });
    });

    let name = document.evaluate('//*[@id="NickContainer"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    console.log(name);

    let price = document.evaluate('//*[@id="PriceTotal"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    console.log(price);

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
// };