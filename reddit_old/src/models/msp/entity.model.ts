//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Location} from './../msp/location.model';
import {EmailAddress} from './../msp/email_address.model';
import {PhoneNumber} from './../msp/phone_number.model';

export class Entity extends Public {
    readonly '@': string = 'msp.entity';

    public name?: string | {[locale: string] : string};
    public description?: string | {[locale: string] : string};
    public addresses?: Location[];
    public emails?: EmailAddress[];
    public phone_numbers?: PhoneNumber[];
    public categories?: string[];

}

