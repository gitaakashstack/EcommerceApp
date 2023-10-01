import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DeliverySlot, EmissionColorCodes, TimeSlotLiteralType } from './delivery-slot.model';
import { map, tap } from 'rxjs';
import { SlotManagementService } from './slot-management.service';

@Component({
  selector: 'app-slot-management',
  templateUrl: './slot-management.component.html',
  styleUrls: ['./slot-management.component.scss']
})
export class SlotManagementComponent implements OnInit {

  daySlots !: readonly [string, string, string]
  deliverySlotList!: Record<TimeSlotLiteralType, DeliverySlot[]>;
  emissionColorCodes = EmissionColorCodes;

  constructor(private deliverSlotService: SlotManagementService) { }

  ngOnInit(): void {

    const thirdDay = new Date(Date.now() + 2 * 24 * 3600 * 1000);
    this.daySlots = ['Today', 'Tommorrow', moment(thirdDay).format('DD MMM YYYY')];

    this.deliverSlotService.getAllDeliverySlots(['a', 'b', 'c'])
      .pipe(
        tap(obj => {
          for (let value of Object.values(obj)) {
            value.forEach((slot) => {
              slot.colorCode = +slot.emission < 100 ?
                EmissionColorCodes.green :
                slot.emission > 100 && slot.emission < 110 ?
                  EmissionColorCodes.orange :
                  EmissionColorCodes.red
            })

          }
        })
      )
      .subscribe((deliverySlotsData) => {
        console.log(deliverySlotsData);
        this.deliverySlotList = deliverySlotsData;
      })
  }


}
