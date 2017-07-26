//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Entity} from './../msp/entity.model';

export class Education extends Public {
    readonly '@': string = 'msp.education';

    public field_of_study?: string | {[locale: string] : string};
    public degree?: string | {[locale: string] : string};
    public description?: string | {[locale: string] : string};
    public school?: Entity;
    public start_at?: string;
    public end_at?: string;

}

