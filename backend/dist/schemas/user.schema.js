"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.locations = exports.genders = void 0;
const mongoose_1 = require("mongoose");
var genders;
(function (genders) {
    genders["male"] = "Male";
    genders["female"] = "Female";
    genders["others"] = "Others";
})(genders || (exports.genders = genders = {}));
;
var locations;
(function (locations) {
    locations["mumbai"] = "Mumbai";
    locations["bengaluru"] = "Bengaluru";
    locations["hyderabad"] = "Hyderabad";
})(locations || (exports.locations = locations = {}));
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true, enum: genders }
});
exports.User = (0, mongoose_1.model)('User', userSchema);
