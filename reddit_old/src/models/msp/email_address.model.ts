//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';

export class EmailAddress extends Public {
    readonly '@': string = 'msp.email_address';

    public label?: string;
    public address: string;
    constructor(address: string) {
        super();
        this.address = address;
    }

}

