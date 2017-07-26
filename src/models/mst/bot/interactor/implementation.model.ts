//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../../../msp/public.model';
import {Person} from './../../../msp/person.model';
import {Entity} from './../../../msp/entity.model';

export class Implementation extends Public {
    readonly '@': string = 'mst.bot.interactor.implementation';

    public id?: string;
    public interactor_id?: string;
    public channel_id?: string;
    public botlet_id?: string;
    public author?: Person|Entity;
    public documentation_url?: string;
    public url: string;
    constructor(url: string) {
        super();
        this.url = url;
    }

}

