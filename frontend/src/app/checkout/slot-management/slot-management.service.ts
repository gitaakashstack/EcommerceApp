import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeliverySlot, TimeSlotLiteralType } from './delivery-slot.model';

@Injectable({
  providedIn: 'root'
})
export class SlotManagementService {

  private readonly origin = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllDeliverySlots(datesForSlots: string[]) {

    return this.http.get<Record<TimeSlotLiteralType, DeliverySlot[]>>(this.origin + '/slot', {
      params: {
        date: datesForSlots,
      }
    })

  }
}
