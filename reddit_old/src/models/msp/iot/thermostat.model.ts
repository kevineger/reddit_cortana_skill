//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Device} from './../../msp/iot/device.model';

export class Thermostat extends Device {
    readonly '@': string = 'msp.iot.thermostat';

    public current?: number;
    public target?: number;
    public target_low?: number;
    public target_high?: number;
    public mode?: string;
    public fan_state?: string;
    public fan_mode?: string;
    public scale?: string;
    public humidity?: number;
    public state?: string;

}

