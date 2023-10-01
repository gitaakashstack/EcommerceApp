"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discountDummyData = void 0;
exports.discountDummyData = [
    {
        code: 'firstuser'.toUpperCase(),
        description: 'Avail 50% dicount upto Rs200 on the first purchase of a product',
        discountPercent: 50,
        minmPurchaseAmt: 0,
        active: true
    },
    {
        code: 'paytmupi'.toUpperCase(),
        description: 'Avail 10% dicount upto Rs100 on payment with Paytm UPI. Only applicable for first time',
        discountPercent: 10,
        minmPurchaseAmt: 200,
        active: true
    },
    {
        code: 'phonepewallet'.toUpperCase(),
        description: 'Avail 20% dicount upto Rs100 on payment with PhonePe Wallet. Only applicable for first time',
        discountPercent: 20,
        minmPurchaseAmt: 200,
        expiryDate: new Date(2023, 8, 31),
        active: true
    },
    {
        code: 'tastyfood'.toUpperCase(),
        description: 'Avail 10% dicount upto Rs100.',
        discountPercent: 10,
        minmPurchaseAmt: 150,
        active: true
    }
];
