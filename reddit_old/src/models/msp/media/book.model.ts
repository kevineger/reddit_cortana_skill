//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Media} from './../../msp/media.model';
import {Person} from './../../msp/person.model';
import {Entity} from './../../msp/entity.model';

export class Book extends Media {
    readonly '@': string = 'msp.media.book';

    public authors?: (Person|Entity)[];
    public pages?: number;

}

