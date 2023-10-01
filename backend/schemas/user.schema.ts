import { Schema, model } from "mongoose";

export enum genders { male = "Male", female = "Female", others = "Others" };
export enum locations { mumbai = 'Mumbai', bengaluru = 'Bengaluru', hyderabad = 'Hyderabad' }

export interface IUser {
    readonly name: string;
    email: string;
    mobile: string;
    password: string;
    readonly gender: genders,
    location?: locations,
    favProds?: string[]
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true, enum: genders }
});

export const User = model('User', userSchema);