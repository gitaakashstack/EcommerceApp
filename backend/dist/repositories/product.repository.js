"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const product_schema_1 = require("../schemas/product.schema");
const utility_1 = require("../helpers/utility");
class ProductRepository {
    constructor() {
        this.Product = product_schema_1.Product;
    }
    // constructor(private Product : Product){}
    getAllProductVariants(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryResponse = yield this.Product.find({ productId: (0, utility_1.toObjectId)(productId) }, { id: '$_id', _id: 0, productId: 1, quantityPerUnit: 1, unitPrice: 1, sku: 1, unitsInStock: 1, manufacturedDate: 1, expiryDate: 1, measuringUnitValue: 1 });
            return queryResponse.map(prodDoc => prodDoc.toObject());
        });
    }
}
exports.ProductRepository = ProductRepository;
