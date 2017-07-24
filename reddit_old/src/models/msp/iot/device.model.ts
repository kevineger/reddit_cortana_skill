//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../../msp/public.model';
import {Entity} from './../../msp/entity.model';
import {Person} from './../../msp/person.model';
import {Location} from './../../msp/location.model';

export class Device extends Public {
    readonly '@': string = 'msp.iot.device';

    public label?: string;
    public description?: string | {[locale: string] : string};
    public name?: string;
    public hub_id?: string;
    public device_id?: string;
    public manufacturer?: Entity;
    public owner?: Person|Entity;
    public location?: Location;
    public timestamp?: string;

}

