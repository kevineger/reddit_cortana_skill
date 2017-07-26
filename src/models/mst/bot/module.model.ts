//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../../msp/public.model';
import {Action} from './../../mst/bot/module/action.model';
import {Person} from './../../msp/person.model';
import {Entity} from './../../msp/entity.model';

export class Module extends Public {
    readonly '@': string = 'mst.bot.module';

    public description?: string | {[locale: string] : string};
    public actions?: Action[];
    public author?: Person|Entity;
    public documentation_url?: string;
    public categories?: {[id: string]: number};
    public permissions?: {[id: string]: string[]};
    public is_deprecated?: boolean;
    public modified_by?: string;
    public modified_at?: string;
    public secret?: string;
    public id: string;
    constructor(id: string) {
        super();
        this.id = id;
    }

}

