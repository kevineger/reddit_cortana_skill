//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {DataField} from './../mst/entity_type/data_field.model';

export class EntityType {
    readonly '@': string = 'mst.entity_type';

    public type_id?: string;
    public type_name?: string | {[locale: string] : string};
    public description?: string;
    public type_icon?: string;
    public fields?: DataField[];
    public parents?: string[];
    public version?: number;
    public owner_id?: string;
    public created_at?: string;
    public updated_at?: string;
    public is_sensitive?: boolean;
    public is_deprecated?: boolean;
    public categories?: {[id: string]: number};
    public permissions?: {[id: string]: string[]};

}

