//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';

export class Email extends Public {
    readonly '@': string = 'msp.email';

    public subject?: string;
    public body?: string;
    public sender?: string;
    public recipients?: string[];
    public cc?: string[];
    public bcc?: string[];
    public reply_to?: string;
    public sent_at?: string;
    public received_at?: string;
    public headers?: string[][];

}

