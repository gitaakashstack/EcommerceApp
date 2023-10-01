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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor(prodInfoRepository, prodRepository) {
        this.prodInfoRepository = prodInfoRepository;
        this.prodRepository = prodRepository;
    }
    getAllProductsFromCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.prodInfoRepository.findAllProducts(category);
            const response = {};
            for (let prod of products) {
                const { id: productId } = prod, revisedProd = __rest(prod, ["id"]);
                const variants = yield this.prodRepository.getAllProductVariants(productId);
                const modifiedVariants = variants.map(variant => {
                    let revisedName = revisedProd.title;
                    if (variants.length > 1 && variant.quantityPerUnit > 1)
                        revisedName += ` - Pack of ${variant.quantityPerUnit}`;
                    return Object.assign(Object.assign({}, variant), { name: revisedName, measuringBaseUnit: revisedProd.measuringBaseUnit });
                });
                response[productId] = modifiedVariants;
            }
            return response;
        });
    }
}
exports.ProductService = ProductService;
