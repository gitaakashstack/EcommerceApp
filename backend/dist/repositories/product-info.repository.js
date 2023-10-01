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
exports.ProductInfoRepository = void 0;
const product_info_schema_1 = require("../schemas/product-info.schema");
class ProductInfoRepository {
    constructor() {
        this.ProductInfo = product_info_schema_1.ProductInfo;
    }
    // constructor(private Product : Product){}
    findAllProducts(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryResponse = yield this.ProductInfo.find({ category }, { id: '$_id', _id: 0, category: 1, title: 1, measuringBaseUnit: 1 });
            return (queryResponse).map(prodDoc => prodDoc.toObject());
        });
    }
}
exports.ProductInfoRepository = ProductInfoRepository;
