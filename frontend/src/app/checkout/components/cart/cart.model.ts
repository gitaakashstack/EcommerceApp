import { IExtendedProductVariant, IProductVariant } from "src/app/shared/models/eatables.model";

export interface Cart {
    id?: string,
    title: string,
    productId: string,
    quantity: number,
    weight?: number,
    price: number
}

export interface ICart extends IExtendedProductVariant { }
