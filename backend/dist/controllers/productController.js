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
exports.getProducts = void 0;
const product_model_1 = require("../models/product.model");
const product_info_repository_1 = require("../repositories/product-info.repository");
const product_repository_1 = require("../repositories/product.repository");
const product_service_1 = require("../services/product.service");
const prodService = new product_service_1.ProductService(new product_info_repository_1.ProductInfoRepository, new product_repository_1.ProductRepository);
const getProducts = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        //TODO filter the data on the basis of query params
        const searchKeyword = req.query.search;
        const category = req.params.category;
        const products = yield prodService.getAllProductsFromCategory(category);
        if (searchKeyword) {
            const searchRegex = new RegExp(searchKeyword, 'i');
            const filteredProdData = product_model_1.INVENTORY_DATA.filter(prod => {
                return prod.title.match(searchRegex) ? true : false;
            });
            return res.status(200).json(filteredProdData);
        }
        if (!searchKeyword && !category) {
            return res.status(200).json([]);
        }
        return res.status(200).json(products);
    });
};
exports.getProducts = getProducts;
