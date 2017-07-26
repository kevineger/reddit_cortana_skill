//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Entity} from './../msp/entity.model';
import {Event} from './../msp/event.model';
import {Person} from './../msp/person.model';

export class Reservation extends Public {
    readonly '@': string = 'msp.reservation';

    public start_at?: string;
    public end_at?: string;
    public details?: string[];
    public reserver?: Person|Entity;
    public number_of_seniors?: number;
    public number_of_adults?: number;
    public number_of_children?: number;
    public total_price?: string;
    public average_unit_price?: string;
    public venue: Entity|Event;
    constructor(venue: Entity|Event) {
        super();
        this.venue = venue;
    }

}

