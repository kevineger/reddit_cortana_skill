//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Media} from './../../msp/media.model';
import {Person} from './../../msp/person.model';
import {ShowTimes} from './../../msp/show_times.model';
import {ShowTime} from './../../msp/show_time.model';
import {Video} from './../../msp/media/video.model';

export class Movie extends Media {
    readonly '@': string = 'msp.media.movie';

    public actors?: Person[];
    public directors?: Person[];
    public duration?: number;
    public show_times?: ShowTimes[]|ShowTime[];
    public trailer?: Video;

}

