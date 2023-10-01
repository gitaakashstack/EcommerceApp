import mongoose, { Schema } from "mongoose";

export interface ICategory {
    name: CategoryName,
    parentCatg: mongoose.Types.ObjectId | null,
    displayName: string,
    description?: string
}

export enum CategoryName {
    fnd = 'Food & Drinks',
    pc = 'Personal Care',
    hc = 'Household Care',
    stn = 'Stationary Store',
};

const categorySchema = new Schema<ICategory>({
    name: { type: String, enum: CategoryName },
    parentCatg: mongoose.Schema.Types.ObjectId,
    displayName: String,
    description: String
})

export const Category = mongoose.model('category', categorySchema);


export const DUMMY_CATEGORY = [
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

]
