import { INVENTORY_DATA } from "../models/product.model";
import { responseMWType } from "../types/expressMiddleware";

export const getInventoryData: responseMWType = async function (req, res, next) {
    return res.status(200).json(INVENTORY_DATA);

}