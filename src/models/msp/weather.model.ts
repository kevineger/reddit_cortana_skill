//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Public} from './../msp/public.model';
import {Location} from './../msp/location.model';

export class Weather extends Public {
    readonly '@': string = 'msp.weather';

    public location?: Location;
    public temperature?: number;
    public feels_like?: number;
    public condition?: string;
    public humidity?: number;
    public air_pressure?: number;
    public wind_direction?: number;
    public wind_speed?: number;
    public visibility?: number;
    public uv_index?: number;
    public precipitation?: number;

}

