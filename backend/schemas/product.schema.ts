import mongoose, { Schema } from "mongoose"

export interface IProduct {
    _id: string,
    productId: string,
    sku: mongoose.Schema.Types.ObjectId,
    unitsInStock: number,
    quantityPerUnit: number,
    unitPrice: number,
    measuringUnitValue: string,
    conversionUnit?: {
        toUnit: string,
        multiplier: number
    }
    manufacturedDate?: Date
    expiryDate?: Date,
    discountId?: mongoose.Schema.Types.ObjectId | null
}

export interface IExtendedProduct extends Omit<IProduct, '_id'> {
    id: string,
    name: string,
    measuringBaseUnit: string
}

//* A Pack of 3 Kurkure, 2 Kurkure and 1 Kurkure will have different _id but same productId
const productSchema = new Schema<IProduct>({
    productId: mongoose.Types.ObjectId,
    quantityPerUnit: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    measuringUnitValue: String,
    conversionUnit: {
        toUnit: String,
        multiplier: Number
    },
    sku: { type: mongoose.Schema.Types.ObjectId, required: true },
    unitsInStock: { type: Number, required: true },
    manufacturedDate: Date,
    expiryDate: Date,
    discountId: mongoose.Schema.Types.ObjectId,

});

export const Product = mongoose.model('product', productSchema);
