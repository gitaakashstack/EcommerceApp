import { Document } from "mongoose";
import { IProductInfo, ProductInfo } from "../schemas/product-info.schema";
import { IProduct } from "../schemas/product.schema"

export class ProductInfoRepository {

    private readonly ProductInfo = ProductInfo;

    // constructor(private Product : Product){}

    async findAllProducts(category: string): Promise<(Omit<IProductInfo, '_id'> & { id: string })[]> {
        type modProductInfoType = Omit<IProductInfo, '_id'> & { id: string };

        const queryResponse: Document<modProductInfoType>[] = await this.ProductInfo.find(
            { category },
            { id: '$_id', _id: 0, category: 1, title: 1, measuringBaseUnit: 1 }
        )
        return (queryResponse).map(prodDoc => prodDoc.toObject())
    }
}


