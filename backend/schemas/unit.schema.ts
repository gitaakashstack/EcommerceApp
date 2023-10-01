import mongoose, { Schema } from "mongoose";

export interface IUnit {
    symbol: string,
}

const unitSchema = new Schema<IUnit>({
    symbol: { type: String, required: true }
});

export const Unit = mongoose.model('Unit', unitSchema);