"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
class CategoryService {
    constructor(catgRepository) {
        this.catgRepository = catgRepository;
    }
    getAllCategories() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield this.catgRepository.findAll();
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
                const parentCatg = parentCategories.get((_a = catg.parentCatg) === null || _a === void 0 ? void 0 : _a.toString());
                parentCatg.subcategory.push({
                    name: catg.name,
                    displayName: catg.displayName,
                });
            }
            return Array.from(parentCategories.values());
        });
    }
}
exports.CategoryService = CategoryService;
