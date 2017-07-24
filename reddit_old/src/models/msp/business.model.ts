//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Entity} from './../msp/entity.model';
import {TimeRange} from './../msp/time_range.model';

export class Business extends Entity {
    readonly '@': string = 'msp.business';

    public out_of_business?: boolean;
    public business_hours?: TimeRange[];
    public rating?: number;
    public votes_up?: number;
    public votes_down?: number;
    public review_count?: number;
    public reviews?: string[][];

}

