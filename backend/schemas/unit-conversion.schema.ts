import { Schema } from "mongoose"

export interface IUnitConversion {
    fromUnit: string,
    toUnit: string,
    multiplier: number
}

const unitConversionSchema = new Schema<IUnitConversion>({
    fromUnit: { type: String, required: true },
    toUnit: { type: String, required: true },
    multiplier: { type: Number, required: true }

})