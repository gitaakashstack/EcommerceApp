"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDeliverySlots = void 0;
const delivery_slot_model_1 = require("../models/delivery-slot.model");
const getAllDeliverySlots = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const dates = req.query.date;
    // console.log(dates)
    const deliverySlotList = [
        {
            emission: '112.16',
            deliveryCharge: '3.5',
            isSlotAvailable: true,
            date: dates[0],
            timeSlot: delivery_slot_model_1.TimeSlot.six_eight
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[0],
            timeSlot: delivery_slot_model_1.TimeSlot.eight_ten
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: false,
            date: dates[0],
            timeSlot: delivery_slot_model_1.TimeSlot.ten_twelve
        },
        {
            emission: '45.16',
            deliveryCharge: '0.0',
            isSlotAvailable: true,
            date: dates[0],
            timeSlot: delivery_slot_model_1.TimeSlot.twelve_fourteen
        },
        {
            emission: '88.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[0],
            timeSlot: delivery_slot_model_1.TimeSlot.fourteen_sixteen
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: false,
            date: dates[0],
            timeSlot: delivery_slot_model_1.TimeSlot.sixteen_eighteen
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[0],
            timeSlot: delivery_slot_model_1.TimeSlot.eighteen_twenty
        },
        {
            emission: '122.16',
            deliveryCharge: '3.5',
            isSlotAvailable: true,
            date: dates[1],
            timeSlot: delivery_slot_model_1.TimeSlot.six_eight
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[1],
            timeSlot: delivery_slot_model_1.TimeSlot.eight_ten
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: false,
            date: dates[1],
            timeSlot: delivery_slot_model_1.TimeSlot.ten_twelve
        },
        {
            emission: '45.16',
            deliveryCharge: '0.0',
            isSlotAvailable: true,
            date: dates[1],
            timeSlot: delivery_slot_model_1.TimeSlot.twelve_fourteen
        },
        {
            emission: '88.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[1],
            timeSlot: delivery_slot_model_1.TimeSlot.fourteen_sixteen
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: false,
            date: dates[1],
            timeSlot: delivery_slot_model_1.TimeSlot.sixteen_eighteen
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[1],
            timeSlot: delivery_slot_model_1.TimeSlot.eighteen_twenty
        },
        {
            emission: '102.16',
            deliveryCharge: '3.5',
            isSlotAvailable: true,
            date: dates[2],
            timeSlot: delivery_slot_model_1.TimeSlot.six_eight
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[2],
            timeSlot: delivery_slot_model_1.TimeSlot.eight_ten
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: false,
            date: dates[2],
            timeSlot: delivery_slot_model_1.TimeSlot.ten_twelve
        },
        {
            emission: '45.16',
            deliveryCharge: '0.0',
            isSlotAvailable: true,
            date: dates[2],
            timeSlot: delivery_slot_model_1.TimeSlot.twelve_fourteen
        },
        {
            emission: '88.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[2],
            timeSlot: delivery_slot_model_1.TimeSlot.fourteen_sixteen
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: false,
            date: dates[2],
            timeSlot: delivery_slot_model_1.TimeSlot.sixteen_eighteen
        },
        {
            emission: '104.16',
            deliveryCharge: '2.5',
            isSlotAvailable: true,
            date: dates[2],
            timeSlot: delivery_slot_model_1.TimeSlot.eighteen_twenty
        },
    ];
    const modifiedDeliverySlotList = {};
    for (let i = 0, j = 7, k = 14; i < 7 && j < 14 && k < 21; i++, j++, k++) {
        modifiedDeliverySlotList[deliverySlotList[i].timeSlot] = [
            deliverySlotList[i],
            deliverySlotList[j],
            deliverySlotList[k]
        ];
        // modifiedDeliverySlotList.push(
        //     [deliverySlotList[i], deliverySlotList[j], deliverySlotList[k]]
        // );
    }
    return res.status(200).json(modifiedDeliverySlotList);
});
exports.getAllDeliverySlots = getAllDeliverySlots;
