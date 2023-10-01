import { responseMWType } from "../types/expressMiddleware";
import { DeliverySlot, TimeSlot } from "../models/delivery-slot.model";

export const getAllDeliverySlots: responseMWType = async (req, res, next) => {
    type stringTuple = [string, string, string];

    const dates: stringTuple = req.query.date as stringTuple;
    // console.log(dates)
    const deliverySlotList: DeliverySlot[] = [
        {
            emission: '112.16',
            deliveryCharge: '3.5',
            isSlotAvailable: true,
            date: dates[0],
            timeSlot: TimeSlot.six_eight

        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[0],
            timeSlot: TimeSlot.eight_ten
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: false,
            date: dates[0],
            timeSlot: TimeSlot.ten_twelve
        },
        {
            emission: '45.16',
            deliveryCharge: '0.0',
            isSlotAvailable: true,
            date: dates[0],
            timeSlot: TimeSlot.twelve_fourteen
        },
        {
            emission: '88.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[0],
            timeSlot: TimeSlot.fourteen_sixteen
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: false,
            date: dates[0],
            timeSlot: TimeSlot.sixteen_eighteen
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[0],
            timeSlot: TimeSlot.eighteen_twenty
        },
        {
            emission: '122.16',
            deliveryCharge: '3.5',
            isSlotAvailable: true,
            date: dates[1],
            timeSlot: TimeSlot.six_eight

        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[1],
            timeSlot: TimeSlot.eight_ten
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: false,
            date: dates[1],
            timeSlot: TimeSlot.ten_twelve
        },
        {
            emission: '45.16',
            deliveryCharge: '0.0',
            isSlotAvailable: true,
            date: dates[1],
            timeSlot: TimeSlot.twelve_fourteen
        },
        {
            emission: '88.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[1],
            timeSlot: TimeSlot.fourteen_sixteen
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: false,
            date: dates[1],
            timeSlot: TimeSlot.sixteen_eighteen
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[1],
            timeSlot: TimeSlot.eighteen_twenty
        },
        {
            emission: '102.16',
            deliveryCharge: '3.5',
            isSlotAvailable: true,
            date: dates[2],
            timeSlot: TimeSlot.six_eight

        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[2],
            timeSlot: TimeSlot.eight_ten
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: false,
            date: dates[2],
            timeSlot: TimeSlot.ten_twelve
        },
        {
            emission: '45.16',
            deliveryCharge: '0.0',
            isSlotAvailable: true,
            date: dates[2],
            timeSlot: TimeSlot.twelve_fourteen
        },
        {
            emission: '88.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[2],
            timeSlot: TimeSlot.fourteen_sixteen
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: false,
            date: dates[2],
            timeSlot: TimeSlot.sixteen_eighteen
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[2],
            timeSlot: TimeSlot.eighteen_twenty
        },
    ]

    const modifiedDeliverySlotList: any = {};
    for (let i = 0, j = 7, k = 14; i < 7 && j < 14 && k < 21; i++, j++, k++) {
        modifiedDeliverySlotList[deliverySlotList[i].timeSlot] = [
            deliverySlotList[i],
            deliverySlotList[j],
            deliverySlotList[k]
        ]
        // modifiedDeliverySlotList.push(
        //     [deliverySlotList[i], deliverySlotList[j], deliverySlotList[k]]
        // );
    }
    return res.status(200).json(modifiedDeliverySlotList);
}