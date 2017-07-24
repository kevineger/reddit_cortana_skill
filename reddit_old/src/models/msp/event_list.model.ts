//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {List} from './../msp/list.model';
import {Event} from './../msp/event.model';
import {Person} from './../msp/person.model';

export class EventList extends List {
    readonly '@': string = 'msp.event_list';

    public items?: Event[];
    public user?: Person[];

}

