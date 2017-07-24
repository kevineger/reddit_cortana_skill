//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Entity} from './../msp/entity.model';

export class Sku extends Public {
    readonly '@': string = 'msp.sku';

    public name?: string | {[locale: string] : string};
    public description?: string | {[locale: string] : string};
    public manufacturer?: Entity;
    public price?: string;
    public offers?: string[][];
    public discontinued?: boolean;
    public categories?: string[];
    public rating?: number;
    public votes_up?: number;
    public votes_down?: number;
    public review_count?: number;
    public reviews?: string[][];

}

