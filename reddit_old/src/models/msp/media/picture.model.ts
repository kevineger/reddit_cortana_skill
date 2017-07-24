//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Media} from './../../msp/media.model';
import {Location} from './../../msp/location.model';
import {Person} from './../../msp/person.model';

export class Picture extends Media {
    readonly '@': string = 'msp.media.picture';

    public location?: Location;
    public size_x?: number;
    public size_y?: number;
    public bit_per_pixel?: number;
    public creator?: Person;

}

