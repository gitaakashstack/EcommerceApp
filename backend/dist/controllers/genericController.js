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
exports.getStoreCategories = void 0;
const category_repository_1 = require("../repositories/category.repository");
const category_service_1 = require("../services/category.service");
const catgService = new category_service_1.CategoryService(new category_repository_1.CategoryRepository());
const getStoreCategories = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(1);
        const productCategories = yield catgService.getAllCategories();
        //TODO fetch categories from database where all the categories and subcategories are stored in one collection
        return res.status(200).json(productCategories);
    });
};
exports.getStoreCategories = getStoreCategories;
