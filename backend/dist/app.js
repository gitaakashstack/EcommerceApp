"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const cartRoutes_1 = __importDefault(require("./routes/cartRoutes"));
const genericRoutes_1 = __importDefault(require("./routes/genericRoutes"));
const deliverySlotRoutes_1 = __importDefault(require("./routes/deliverySlotRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const product_schema_1 = require("./schemas/product.schema");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/auth', authRoutes_1.default);
app.use('/products', productRoutes_1.default);
app.use('/cart', cartRoutes_1.default);
app.use('/slot', deliverySlotRoutes_1.default);
app.use('/', genericRoutes_1.default);
mongoose_1.default
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => {
    app.listen(process.env.PORT, () => {
        console.log('server started at ' + process.env.PORT);
    });
    const x = product_schema_1.Product;
})
    .catch(err => console.log('Cannot connect to MongoDB Server\n', err.message));
