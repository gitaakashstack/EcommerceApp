"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cartController_1 = require("../controllers/cartController");
const router = (0, express_1.Router)();
router.post('/', cartController_1.addProductsToCart);
router.get('/', cartController_1.getProductsFromCart);
exports.default = router;
