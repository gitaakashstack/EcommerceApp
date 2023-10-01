import { CategoryRepository } from "../repositories/category.repository";
import { CategoryService } from "../services/category.service";
import { responseMWType } from "../types/expressMiddleware";

const catgService = new CategoryService(new CategoryRepository());

export const getStoreCategories: responseMWType = async function (req, res, next) {
    console.log(1);
    const productCategories = await catgService.getAllCategories();
    //TODO fetch categories from database where all the categories and subcategories are stored in one collection
    return res.status(200).json(productCategories);
}