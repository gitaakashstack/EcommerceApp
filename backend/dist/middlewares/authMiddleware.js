"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeAuthToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const decodeAuthToken = (req, res, next) => {
    var _a, _b;
    if (req.method === 'OPTIONS')
        return next();
    if (!req.get('Authorization'))
        return res.status(401).json({
            message: 'Authentication Headers not provided'
        });
    if (((_a = req.get('Authorization')) === null || _a === void 0 ? void 0 : _a.split(' ')[0]) !== 'Bearer')
        return res.status(400).json({
            message: 'Invalid Token'
        });
    const bearerToken = (_b = req.get('Authorization')) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    const decodedPayload = jsonwebtoken_1.default.verify(bearerToken, process.env.JWTSECRET);
    req.email = decodedPayload.email;
    return next();
};
exports.decodeAuthToken = decodeAuthToken;
