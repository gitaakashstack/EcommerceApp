"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const unitConversionSchema = new mongoose_1.Schema({
    fromUnit: { type: String, required: true },
    toUnit: { type: String, required: true },
    multiplier: { type: Number, required: true }
});
