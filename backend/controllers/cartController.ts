import { v4 } from "uuid";
import { Cart } from "../models/cart.model";
import { responseMWType } from "../types/expressMiddleware";

let DUMMY_CART: Cart[] = [];

export const addProductsToCart: responseMWType = async (req, res, next) => {
    const cartData = req.body;
    cartData.id = v4();
    DUMMY_CART = cartData.slice();
    console.log(DUMMY_CART);
    return res.status(201).json({
        message: 'Cart saved'
    });
}

export const getProductsFromCart: responseMWType = async (req, res, next) => {
    return res.status(200).json({
        data: DUMMY_CART
    })
}