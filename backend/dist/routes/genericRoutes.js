"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const genericController_1 = require("../controllers/genericController");
const router = (0, express_1.Router)();
router.get('/category', genericController_1.getStoreCategories);
exports.default = router;
