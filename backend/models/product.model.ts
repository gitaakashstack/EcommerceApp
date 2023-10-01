import mongoose from "mongoose";
import { Subcategory } from "./subcategory.model";

export interface Product {
  id: number,
  title: string,
  category: string,
  subcategory: string,
  description: string,
  brand?: string,
  weight: number,
  price: number,
  inventoryId?: mongoose.Types.ObjectId,
  quantity: number,
  manufacturedDate?: Date
  useBy?: Date,
  discountId?: mongoose.Types.ObjectId
}

export const INVENTORY_DATA: Product[] = [{
  id: 1,
  title: 'Lays',
  category: 'snacks',
  subcategory: 'chips',
  weight: 50,
  quantity: 10,
  price: 10,
  description: 'Packet of chips more than half filled with air...trying to fool consumers',
},
{
  id: 2,
  title: 'Kurkure',
  category: 'snacks',
  subcategory: 'chips',
  weight: 50,
  quantity: 20,
  price: 10,
  description: 'Packet of chips',
},
{
  id: 3,
  title: 'Hot Chips',
  category: 'snacks',
  subcategory: 'chips',
  weight: 50,
  quantity: 50,
  price: 20,
  description: 'Packet of chips',
},
{
  id: 4,
  title: 'Bingo Mad Angles',
  category: 'snacks',
  subcategory: 'chips',
  weight: 50,
  quantity: 50,
  price: 20,
  description: 'Packet of chips',
},
{
  id: 5,
  title: 'Lays Max',
  category: 'snacks',
  subcategory: 'chips',
  weight: 50,
  quantity: 50,
  price: 20,
  description: 'Packet of chips',
}
];