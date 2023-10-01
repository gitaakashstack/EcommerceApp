import { Category } from "../schemas/category.schema";

export class CategoryRepository {
    private readonly Category = Category;

    async findAll() {
        return await this.Category.find().exec()
    }
}