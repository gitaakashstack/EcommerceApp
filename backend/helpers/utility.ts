import mongoose from "mongoose";

export function toObjectId(objectId: string) {
    return new mongoose.Types.ObjectId(objectId);
}