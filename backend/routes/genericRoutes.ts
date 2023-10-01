import { Router } from "express";
import { getStoreCategories } from "../controllers/genericController";

const router = Router();

router.get('/category', getStoreCategories);

export default router;