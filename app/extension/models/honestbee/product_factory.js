let Honestbee = {};

Honestbee.ProductFactory = class {
    constructor(path) {
        this._collections = require(path);
        this._load();
    }

    _load() {
        this.collections = [];
        for(let i=0; i < this._collections.products.length; i++) {
            let obj = this._collections.products[i];
            this.collections.push(new Honestbee.Product(obj));
        }
    }
};

Honestbee.Product = class {
    constructor(obj) {
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
};

module.exports = Honestbee;