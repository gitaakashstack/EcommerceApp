export interface DeliverySlot {
    emission: number,
    deliveryCharge: number,
    isSlotAvailable: boolean,
    date: string,
    timeSlot: TimeSlots,
    colorCode?: any

}

// export const TimeSlots = {
//     six_eight : "6:00 - 8:00",
//     eight_ten : "8:00 - 10:00",
//     ten_twelve : "10:00 - 12:00",
//     twelve_fourteen : "12:00 - 14:00",
//     fourteen_sixteen : "14:00 - 16:00",
//     sixteen_eighteen : "16:00 - 18:00",
//     eighteen_twenty : "18:00 - 20:00"
// }
export enum TimeSlots {
    six_eight = "6:00 - 8:00",
    eight_ten = "8:00 - 10:00",
    ten_twelve = "10:00 - 12:00",
    twelve_fourteen = "12:00 - 14:00",
    fourteen_sixteen = "14:00 - 16:00",
    sixteen_eighteen = "16:00 - 18:00",
    eighteen_twenty = "18:00 - 20:00"
}

export type TimeSlotLiteralType = `${TimeSlots.six_eight} | ${TimeSlots.eight_ten} | ${TimeSlots.ten_twelve} | ${TimeSlots.twelve_fourteen} | ${TimeSlots.fourteen_sixteen} | ${TimeSlots.sixteen_eighteen} | ${TimeSlots.eighteen_twenty}`

export const EmissionColorCodes = {
    green: {
        dark: '#199306',
        light: '#29DF0D',
    },
    orange: {
        dark: '#FFB200',
        light: '#FFD470',
    },
    red: {
        dark: '#E5311C',
        light: '#DC7063'
    }


}