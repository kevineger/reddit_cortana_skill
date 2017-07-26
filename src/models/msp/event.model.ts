//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Location} from './../msp/location.model';
import {Person} from './../msp/person.model';
import {Entity} from './../msp/entity.model';

export class Event extends Public {
    readonly '@': string = 'msp.event';

    public name?: string | {[locale: string] : string};
    public description?: string | {[locale: string] : string};
    public location?: Location;
    public start_at?: string;
    public end_at?: string;
    public attendees?: (Person|Entity)[];
    public organizers?: (Person|Entity)[];

}

