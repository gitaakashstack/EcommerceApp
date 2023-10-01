"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.post('/register', authController_1.registerHandler);
router.post('/log-in', authController_1.loginHandler);
router.get('/userinfo', authMiddleware_1.decodeAuthToken, authController_1.getUserInfoHandler);
const x = () => {
    return () => { };
};
router.put('/sd', x());
exports.default = router;
