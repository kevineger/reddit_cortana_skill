//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Location} from './../msp/location.model';
import {Person} from './../msp/person.model';
import {Car} from './../msp/car.model';
import {Business} from './../msp/business.model';

export class TaxiRide extends Public {
    readonly '@': string = 'msp.taxi_ride';

    public name?: string;
    public from?: Location;
    public to?: Location;
    public start_at?: string;
    public booked_at?: string;
    public price?: string;
    public code?: string;
    public qr_code_url?: string;
    public driver?: Person;
    public car?: Car;
    public service?: Business;

}

