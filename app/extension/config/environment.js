let Environment = class {
    constructor(config) {
        this.config = config;
    }
};

Environment.ApiServer = class {
    constructor(config) {
        this.protocol = config.api_server.protocol;
        this.host     = config.api_server.host;
        this.port     = config.api_server.port;
        this.prefix   = config.api_server.prefix;
    }

    url_for(path) {
        return this.protocol + "://" + this.host + ":" + this.port + this.prefix + path;
    }

    competitors(callback) {
        let options = {
            method: 'GET',
            url:    this.url_for('/competitors'),
            async:  false
        };
        return Utility.request(options, callback);
    }

    log_page_view(data, callback) {
        let params = [];
        for (let k in data){
            if (data.hasOwnProperty(k)) {
                params.push(k + '=' + data[k]);
            }
        }
        let options = {
            method: 'POST',
            url:    this.url_for('/page_views'),
            async:  true,
            data:   params.join('&')
        };
        return Utility.request(options, callback);
    }
};