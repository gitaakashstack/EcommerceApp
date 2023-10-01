import { ObjectId } from "mongodb";
import { IProduct, Product } from "../schemas/product.schema"
import mongoose, { Document } from "mongoose";
import { toObjectId } from "../helpers/utility";

export class ProductRepository {

    private readonly Product = Product;
    // constructor(private Product : Product){}

    async getAllProductVariants(productId: string): Promise<(Omit<IProduct, '_id'> & { id: string })[]> {

        type modProductType = Omit<IProduct, '_id'> & { id: string };

        const queryResponse: Document<modProductType>[] = await this.Product.find(
            { productId: toObjectId(productId) },
            { id: '$_id', _id: 0, productId: 1, quantityPerUnit: 1, unitPrice: 1, sku: 1, unitsInStock: 1, manufacturedDate: 1, expiryDate: 1, measuringUnitValue: 1 }
        )

        return queryResponse.map(prodDoc => prodDoc.toObject())

    }
}

