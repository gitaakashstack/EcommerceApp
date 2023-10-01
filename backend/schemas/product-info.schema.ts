import mongoose, { Schema } from "mongoose";
import { IExtendedProduct } from "./product.schema";

export interface IProductInfo {
    _id: string,
    title: string,
    description?: string,
    brand?: string,
    category: string,
    measuringBaseUnit: string,
}

const productInfoSchema = new Schema<IProductInfo>({
    title: { type: String, required: true },
    description: String,
    brand: String,
    category: { type: String, required: true },
    measuringBaseUnit: { type: String, required: true }
})

export const ProductInfo = mongoose.model<IProductInfo>('product_info', productInfoSchema);

export type IProductResponse = Omit<IProductInfo, '_id'> & IExtendedProduct;
export interface IExtensiveProductResponse {
    [productId: string]: IProductResponse[]
}