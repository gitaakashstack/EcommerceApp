import { Router } from "express";
import { getInventoryData } from "../controllers/inventoryController";
import { getProducts } from "../controllers/productController";

const router = Router();

router.get('/:category', getProducts);

export default router;