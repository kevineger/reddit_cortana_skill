//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Media} from './../../msp/media.model';
import {Person} from './../../msp/person.model';
import {Entity} from './../../msp/entity.model';

export class Audio extends Media {
    readonly '@': string = 'msp.media.audio';

    public creators?: (Person|Entity)[];
    public artists?: (Person|Entity)[];
    public duration?: number;
    public view_count?: number;

}

