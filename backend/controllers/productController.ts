import { INVENTORY_DATA } from "../models/product.model";
import { ProductInfoRepository } from "../repositories/product-info.repository";
import { ProductRepository } from "../repositories/product.repository";
import { ProductService } from "../services/product.service";
import { responseMWType } from "../types/expressMiddleware";

const prodService = new ProductService(new ProductInfoRepository, new ProductRepository);

export const getProducts: responseMWType = async function (req, res, next) {
    //TODO filter the data on the basis of query params

    const searchKeyword = req.query.search;
    const category = req.params.category;

    const products = await prodService.getAllProductsFromCategory(category);


    if (searchKeyword) {
        const searchRegex = new RegExp(<string>searchKeyword, 'i');
        const filteredProdData = INVENTORY_DATA.filter(prod => {
            return prod.title.match(searchRegex) ? true : false;
        })

        return res.status(200).json(filteredProdData);
    }

    if (!searchKeyword && !category) {
        return res.status(200).json([]);
    }

    return res.status(200).json(products);




}