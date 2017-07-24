//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';

export class Location extends Public {
    readonly '@': string = 'msp.location';

    public label?: string;
    public country_name?: string;
    public country_code?: string;
    public state_name?: string;
    public state_code?: string;
    public postal_code?: string;
    public county?: string;
    public locality?: string;
    public street_address?: string;
    public street_address_2?: string;
    public room?: string;
    public latitude?: number;
    public longitude?: number;
    public altitude?: number;
    public horizontal_accuracy?: number;
    public vertical_accuracy?: number;
    public timestamp?: string;
    public description?: string | {[locale: string] : string};

}

