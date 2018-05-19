let Utility = class {
    constructor() {

    }

    static get_random_token() {
        let random_pool = new Uint8Array(32);
        crypto.getRandomValues(random_pool);
        let hex = '';
        for (let i = 0; i < random_pool.length; ++i) {
            hex += random_pool[i].toString(16);
        }
        // E.g. db18458e2782b2b77e36769c569e263a53885a9944dd0a861e5064eac16f1a
        return hex;
    }

    static request(options, callback) {
        let xhr    = new XMLHttpRequest();
        let method = options.method ? options.method.toUpperCase() : 'GET';

        let async  = true;
        if ('boolean' === typeof options.async) {
            async  = options.async;
        }

        xhr.ontimeout = function () {
            console.error("The request for " + options.url + " timed out.");
        };

        xhr.onload = function() {
            callback(xhr.responseText);
        };
        // xhr.onerror = function() {
        //     // Do whatever you want on error. Don't forget to invoke the
        //     // callback to clean up the communication port.
        //     callback();
        // };
        xhr.open(method, options.url, async);
        if ('POST' === method) {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        xhr.timeout = 5000;
        xhr.send(options.data);

        return true;
    }
};


Utility.Uri = class {
    constructor() {
    }

    static parse(document, url) {
        let parser  = document.createElement('a');
        url = (typeof url !== 'undefined') ? url : document.location;
        parser.href = url;

        let obj      = new Utility.Uri();

        obj.protocol = parser.protocol;
        obj.hostname = parser.hostname;
        obj.port     = parser.port;
        obj.pathname = parser.pathname;
        obj.search   = parser.search;
        obj.hash     = parser.hash;
        obj.host     = parser.host;

        return obj;
    }
};

// module.exports = Utility;