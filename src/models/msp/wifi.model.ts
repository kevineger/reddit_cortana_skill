//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Location} from './../msp/location.model';
import {Person} from './../msp/person.model';
import {Entity} from './../msp/entity.model';

export class Wifi extends Public {
    readonly '@': string = 'msp.wifi';

    public ssid?: string;
    public location?: Location;
    public owner?: Person|Entity;
    public encryption?: string;
    public password?: string;

}

