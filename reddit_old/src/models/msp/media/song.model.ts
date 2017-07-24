//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Media} from './../../msp/media.model';
import {Person} from './../../msp/person.model';
import {Entity} from './../../msp/entity.model';

export class Song extends Media {
    readonly '@': string = 'msp.media.song';

    public album_name?: string;
    public artists?: (Person|Entity)[];
    public track?: number;
    public duration?: number;

}

