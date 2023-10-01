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
exports.getProductsFromCart = exports.addProductsToCart = void 0;
const uuid_1 = require("uuid");
let DUMMY_CART = [];
const addProductsToCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cartData = req.body;
    cartData.id = (0, uuid_1.v4)();
    DUMMY_CART = cartData.slice();
    console.log(DUMMY_CART);
    return res.status(201).json({
        message: 'Cart saved'
    });
});
exports.addProductsToCart = addProductsToCart;
const getProductsFromCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({
        data: DUMMY_CART
    });
});
exports.getProductsFromCart = getProductsFromCart;
