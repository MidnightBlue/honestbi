window.onload = function() {
    console.log('hit');

    chrome.runtime.sendMessage({
        method: 'GET',
        action: 'xhttp',
        url: 'http://localhost:3000/api/v1/competitors',
        data: ''
    }, function(responseText) {
        console.log(responseText);
        /*Callback function to deal with the response*/
    });

    // document.write('Hello world');
};