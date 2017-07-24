//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Business} from './../msp/business.model';
import {ShowTime} from './../msp/show_time.model';

export class ShowTimes extends Public {
    readonly '@': string = 'msp.show_times';

    public venue?: Business;
    public shows?: ShowTime[];

}

