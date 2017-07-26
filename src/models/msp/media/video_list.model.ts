//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {List} from './../../msp/list.model';
import {Video} from './../../msp/media/video.model';
import {Person} from './../../msp/person.model';

export class VideoList extends List {
    readonly '@': string = 'msp.media.video_list';

    public items?: Video[];
    public artists?: Person[];
    public created_at?: string;
    public categories?: string[];
    public rating?: number;
    public votes_up?: number;
    public votes_down?: number;
    public review_count?: number;
    public reviews?: string[][];

}

