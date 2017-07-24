//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {List} from './../../msp/list.model';
import {Movie} from './../../msp/media/movie.model';
import {Person} from './../../msp/person.model';

export class MovieList extends List {
    readonly '@': string = 'msp.media.movie_list';

    public items?: Movie[];
    public directors?: Person[];
    public actors?: Person[];
    public created_at?: string;
    public categories?: string[];
    public rating?: number;
    public votes_up?: number;
    public votes_down?: number;
    public review_count?: number;
    public reviews?: string[][];

}

