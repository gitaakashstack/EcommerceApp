"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DUMMY_CATEGORY = exports.Category = exports.CategoryName = void 0;
const mongoose_1 = __importStar(require("mongoose"));
var CategoryName;
(function (CategoryName) {
    CategoryName["fnd"] = "Food & Drinks";
    CategoryName["pc"] = "Personal Care";
    CategoryName["hc"] = "Household Care";
    CategoryName["stn"] = "Stationary Store";
})(CategoryName || (exports.CategoryName = CategoryName = {}));
;
const categorySchema = new mongoose_1.Schema({
    name: { type: String, enum: CategoryName },
    parentCatg: mongoose_1.default.Schema.Types.ObjectId,
    displayName: String,
    description: String
});
exports.Category = mongoose_1.default.model('category', categorySchema);
exports.DUMMY_CATEGORY = [
    {
        name: CategoryName.fnd,
        subcategories: [
            {
                title: 'Munchies',
                route: 'munchies'
            },
            {
                title: 'Instant Foods',
                route: 'instant-food'
            },
            {
                title: 'Bakery & Biscuits',
                route: 'bakery-biscuit'
            },
            {
                title: 'Cereals & Breakfast',
                route: 'cereals'
            },
            {
                title: 'Tea & Coffee',
                route: 'tea-coffee'
            },
            {
                title: 'Cold Drinks & Juices',
                route: 'drinks'
            }
        ],
        description: 'A category for Food and Drinks'
    },
    {
        name: CategoryName.pc,
        subcategories: [
            {
                title: 'Creams, Lotions & Soaps',
                route: 'lotions'
            },
            {
                title: 'Deodrants & Perfumes',
                route: 'deodrants'
            },
            {
                title: 'Oral Care',
                route: 'deodrants'
            },
            {
                title: 'Men\'s Grooming',
                route: 'mens-grooming'
            },
            {
                title: 'Feminine Care',
                route: 'womens-grooming'
            }
        ],
        description: 'A category for Personal Care'
    },
    {
        name: CategoryName.hc,
        subcategories: [
            {
                title: 'Detergents & Cleaners',
                route: 'detergents'
            },
            {
                title: 'Toiletries',
                route: 'toiletry'
            },
            {
                title: 'Freshners & Disinfectants',
                route: 'freshners'
            },
            {
                title: 'Home Stationary',
                route: 'home-stationary'
            },
            {
                title: 'Cleaning Tools',
                route: 'cleaning-tools'
            },
        ],
        description: 'A category for Household care'
    },
    {
        name: CategoryName.stn,
        subcategories: [
            {
                title: 'Sexual Wellness',
                route: 'wellness'
            },
            {
                title: 'Healthcare Devices',
                route: 'devices'
            },
            {
                title: 'Pain Relief Ointments',
                route: 'ointments'
            },
            {
                title: 'Vitmains & Supplements',
                route: 'office'
            },
            {
                title: 'Digestive Care',
                route: 'digestive'
            }
        ],
        description: 'A category for Stationaries'
    }
];
