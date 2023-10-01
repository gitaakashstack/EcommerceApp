import { Router } from "express";
import { getAllDeliverySlots } from "../controllers/deliverySlotController";

const router = Router();

router.get('/', getAllDeliverySlots);

export default router;