//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Person} from './../msp/person.model';
import {Entity} from './../msp/entity.model';
import {License} from './../msp/license.model';
import {Picture} from './../msp/media/picture.model';

export class Post extends Public {
    readonly '@': string = 'msp.post';

    public title?: string;
    public text?: string;
    public published_at?: string;
    public maturity_rating?: string | {[locale: string] : string};
    public copyright_holder?: Person|Entity;
    public licenses?: License[];
    public rating?: number;
    public votes_up?: number;
    public votes_down?: number;
    public review_count?: number;
    public reviews?: string[][];
    public categories?: string[];
    public author?: Person;
    public pictures?: Picture[];
    public video_url?: string;

}

