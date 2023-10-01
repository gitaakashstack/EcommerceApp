export interface Cart{
    id:number,
    productId:number,
    quantity:number,
    weight?:number, 
    price:number
}

//TODO Later a Cart must be referenced to a single user