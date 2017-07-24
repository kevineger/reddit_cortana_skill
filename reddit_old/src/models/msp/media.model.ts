//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Entity} from './../msp/entity.model';
import {Person} from './../msp/person.model';
import {License} from './../msp/license.model';
import {Link} from './../msp/link.model';
import {Sku} from './../msp/sku.model';
import {Format} from './../msp/media/format.model';

export class Media extends Public {
    readonly '@': string = 'msp.media';

    public title?: string | {[locale: string] : string};
    public synopsis?: string | {[locale: string] : string};
    public description?: string | {[locale: string] : string};
    public publisher?: Entity;
    public published_at?: string;
    public maturity_rating?: string | {[locale: string] : string};
    public copyright_holder?: Person|Entity;
    public licenses?: License[];
    public content?: Link[];
    public mime_type?: string;
    public sku?: Sku;
    public formats?: Format[];
    public geo_restricted?: string[];
    public rating?: number;
    public votes_up?: number;
    public votes_down?: number;
    public review_count?: number;
    public reviews?: string[][];
    public categories?: string[];

}

