//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {List} from './../../msp/list.model';
import {Song} from './../../msp/media/song.model';
import {Person} from './../../msp/person.model';

export class SongList extends List {
    readonly '@': string = 'msp.media.song_list';

    public items?: Song[];
    public artists?: Person[];
    public created_at?: string;
    public categories?: string[];
    public rating?: number;
    public votes_up?: number;
    public votes_down?: number;
    public review_count?: number;
    public reviews?: string[][];

}

