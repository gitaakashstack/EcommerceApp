"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importStar(require("mongoose"));
//* A Pack of 3 Kurkure, 2 Kurkure and 1 Kurkure will have different _id but same productId
const productSchema = new mongoose_1.Schema({
    productId: mongoose_1.default.Types.ObjectId,
    quantityPerUnit: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    measuringUnitValue: String,
    conversionUnit: {
        toUnit: String,
        multiplier: Number
    },
    sku: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    unitsInStock: { type: Number, required: true },
    manufacturedDate: Date,
    expiryDate: Date,
    discountId: mongoose_1.default.Schema.Types.ObjectId,
});
exports.Product = mongoose_1.default.model('product', productSchema);
