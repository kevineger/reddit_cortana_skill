//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Location} from './../msp/location.model';
import {EmailAddress} from './../msp/email_address.model';
import {PhoneNumber} from './../msp/phone_number.model';
import {JobPosition} from './../msp/job_position.model';
import {Education} from './../msp/education.model';

export class Person extends Public {
    readonly '@': string = 'msp.person';

    public name?: string;
    public first_name?: string;
    public last_name?: string;
    public alias?: string;
    public title?: string;
    public locales?: string[];
    public time_zone?: string;
    public addresses?: Location[];
    public emails?: EmailAddress[];
    public phone_numbers?: PhoneNumber[];
    public birth_date?: string;
    public job_positions?: JobPosition[];
    public educations?: Education[];
    public gender?: string;

}

