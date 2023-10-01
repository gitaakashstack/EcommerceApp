"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deliverySlotController_1 = require("../controllers/deliverySlotController");
const router = (0, express_1.Router)();
router.get('/', deliverySlotController_1.getAllDeliverySlots);
exports.default = router;
