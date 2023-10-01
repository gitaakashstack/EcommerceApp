export interface DeliverySlot {
    emission: string,
    deliveryCharge: string,
    isSlotAvailable: boolean,
    date: string,
    timeSlot: TimeSlot

}

export enum TimeSlot {
    six_eight = "6:00 - 8:00",
    eight_ten = "8:00 - 10:00",
    ten_twelve = "10:00 - 12:00",
    twelve_fourteen = "12:00 - 14:00",
    fourteen_sixteen = "14:00 - 16:00",
    sixteen_eighteen = "16:00 - 18:00",
    eighteen_twenty = "18:00 - 20:00"

}
