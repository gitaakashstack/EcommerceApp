import { ProductInfoRepository } from "../repositories/product-info.repository";
import { ProductRepository } from "../repositories/product.repository";
import { IExtensiveProductResponse, IProductResponse } from "../schemas/product-info.schema";

export class ProductService {

    constructor(private prodInfoRepository: ProductInfoRepository, private prodRepository: ProductRepository) { }

    async getAllProductsFromCategory(category: string): Promise<IExtensiveProductResponse> {

        const products = await this.prodInfoRepository.findAllProducts(category);
        const response: IExtensiveProductResponse = {};

        for (let prod of products) {
            const { id: productId, ...revisedProd } = prod;

            const variants = await this.prodRepository.getAllProductVariants(productId);

            const modifiedVariants = variants.map(variant => {
                let revisedName = revisedProd.title;
                if (variants.length > 1 && variant.quantityPerUnit > 1)
                    revisedName += ` - Pack of ${variant.quantityPerUnit}`

                return {
                    ...variant,
                    name: revisedName,
                    measuringBaseUnit: revisedProd.measuringBaseUnit
                } as IProductResponse;
            })
            response[productId] = modifiedVariants
        }

        return response;

    }
}