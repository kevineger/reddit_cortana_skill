//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Entity} from './../msp/entity.model';
import {Event} from './../msp/event.model';
import {Reservation} from './../msp/reservation.model';

export class HotelReservation extends Reservation {
    readonly '@': string = 'msp.hotel_reservation';

    public services?: string[];
    constructor(venue: Entity|Event) {
        super(venue);
    }

}

