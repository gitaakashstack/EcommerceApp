export interface IProductVariant {
    id: string,
    name: string,
    measuringBaseUnit: string
    productId: string,
    sku: string,
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
    discountId?: string | null
}

// interface IProductInfo {
//     id: string,
//     title: string,
//     description?: string,
//     brand?: string,
//     category: string,
//     measuringBaseUnit: string,
// }

export interface IExtendedProductVariant extends IProductVariant {
    showAddBtn: boolean,
    quantityInCart: number
}

export interface IProductResponse {
    [producId: string]: IProductVariant[]
}

export interface IExtendedProductResponse {
    [producId: string]: IExtendedProductVariant[]
}

export interface ISelectedProduct {
    [producId: string]: IExtendedProductVariant
}