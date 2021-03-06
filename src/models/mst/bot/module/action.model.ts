//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../../../msp/public.model';
import {Input} from './../../../mst/bot/module/input.model';
import {Output} from './../../../mst/bot/module/output.model';

export class Action extends Public {
    readonly '@': string = 'mst.bot.module.action';

    public id?: string;
    public intent?: string;
    public inputs?: Input[];
    public outputs?: Output[];
    public label?: string | {[locale: string] : string};
    public description?: string | {[locale: string] : string};

}

