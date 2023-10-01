import { CategoryRepository } from "../repositories/category.repository";

export class CategoryService {

    constructor(private catgRepository: CategoryRepository) { }

    async getAllCategories() {
        const categories = await this.catgRepository.findAll();

        const parentCategories = new Map();
        const childCategories = [];

        for (let catg of categories) {
            const catgObj = catg.toObject();

            catgObj.parentCatg === null
                ? parentCategories.set(catgObj._id.toString(), {
                    name: catgObj.name,
                    displayName: catgObj.displayName,
                    subcategory: []
                })
                : childCategories.push(catgObj);
        }

        for (let catg of childCategories) {

            const parentCatg = parentCategories.get(catg.parentCatg?.toString());
            parentCatg.subcategory.push({
                name: catg.name,
                displayName: catg.displayName,
            });

        }
        return Array.from(parentCategories.values())


    }


}