import { Router } from "express";
import { addProductsToCart, getProductsFromCart } from "../controllers/cartController";

const router=Router();

router.post('/',addProductsToCart);

router.get('/',getProductsFromCart);

export default router;