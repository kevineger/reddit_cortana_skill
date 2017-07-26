//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Business} from './../msp/business.model';

export class ShowTime extends Public {
    readonly '@': string = 'msp.show_time';

    public venue?: Business;
    public start_at?: string;
    public sold_out?: boolean;
    public features?: string[];

}

