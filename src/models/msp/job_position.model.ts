//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Entity} from './../msp/entity.model';

export class JobPosition extends Public {
    readonly '@': string = 'msp.job_position';

    public title?: string | {[locale: string] : string};
    public description?: string | {[locale: string] : string};
    public company?: Entity;
    public start_at?: string;
    public end_at?: string;

}

