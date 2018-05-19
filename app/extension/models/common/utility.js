let Utility = {};


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