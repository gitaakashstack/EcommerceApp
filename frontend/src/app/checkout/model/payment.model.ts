export interface PaymentCategory {
    name: PaymentCategories,
    suboption?: {
        name: PaymentMerchants
    }[]
}

export enum PaymentCategories {
    wallet = 'Wallet',
    upi = 'UPI',
    cards = 'Credit / Debit / ATM Cards',
    net_banking = 'NET Banking',
    emi = 'EMI'
}

export enum PaymentMerchants {
    gpay,
    phonepe,
    paytm
}