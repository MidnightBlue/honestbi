let Honestbee = {};

Honestbee.ProductFactory = class {
    constructor(path) {
        this._collections = require(path);
        this._load();
    }

    _load() {
        this.collections = [];
        for(let i=0; i < this._collections.products.length; i++) {
            let obj     = this._collections.products[i];
            let product = new Honestbee.Product();
            this.collections.push(product.load_by_object(obj));
        }
    }
};

Honestbee.Product = class {
    constructor() {
    }

    load_by_object(obj) {
        this.id              = obj.id;
        this.title           = obj.title;
        this.image_url       = obj.imageUrl;
        this._unit_type      = obj.unitType;
        this._sold_by        = obj.soldBy;
        this.amount_per_unit = obj.amountPerUnit;
        this.size            = obj.size;
        this.currency        = obj.currency;
        this.price           = obj.price;
    }

    load_remote_object() {

    }


};

module.exports = Honestbee;