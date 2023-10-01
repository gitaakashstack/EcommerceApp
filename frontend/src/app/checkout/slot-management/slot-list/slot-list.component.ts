import { Component, OnInit, Input } from '@angular/core';
import { DeliverySlot, TimeSlots } from '../delivery-slot.model';
import { SlotManagementService } from '../slot-management.service';

@Component({
  selector: 'app-slot-list',
  templateUrl: './slot-list.component.html',
  styleUrls: ['./slot-list.component.scss']
})
export class SlotListComponent implements OnInit {

  @Input() deliverySlotCount: any;
  deliverySlotList!: DeliverySlot[][];

  constructor(private deliverSlotService: SlotManagementService) { }

  ngOnInit(): void {
    // this.deliverSlotService.getAllDeliverySlots(['a', 'b', 'c'])
    //   .subscribe((deliverySlotsData) => {
    //     this.deliverySlotList = deliverySlotsData;
    //   })
  }

}
