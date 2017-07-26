//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Person} from './../msp/person.model';

export class WebPage extends Public {
    readonly '@': string = 'msp.web_page';

    public title?: string;
    public text?: string;
    public published_at?: string;
    public maturity_rating?: string | {[locale: string] : string};
    public categories?: string[];
    public author?: Person;

}

