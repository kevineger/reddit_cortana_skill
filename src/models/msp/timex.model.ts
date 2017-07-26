//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';

export class Timex extends Public {
    readonly '@': string = 'msp.timex';

    public year?: number;
    public month?: number;
    public day?: number;
    public hour?: number;
    public minute?: number;
    public second?: number;
    public frequency_value?: number;
    public frequency_unit?: string;
    public quantity?: number;
    public week?: number;
    public day_of_week?: number;
    public part_of_day?: string;
    public part_of_week?: string;
    public part_of_year?: string;
    public season?: string;
    public timezone?: string;
    public modifier?: string;
    public duration_components?: {[id: string]: number};
    public anchor_components?: {[id: string]: string};
    public type: string;
    constructor(type: string) {
        super();
        this.type = type;
    }

}

