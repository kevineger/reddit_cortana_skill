//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Movie} from './../msp/media/movie.model';
import {Business} from './../msp/business.model';

export class MovieTicket extends Public {
    readonly '@': string = 'msp.movie_ticket';

    public movie?: Movie;
    public venue?: Business;
    public start_at?: string;

}

