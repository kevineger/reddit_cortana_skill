//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//


export class Chain {
    readonly '@': string = 'mst.auth.chain';

    public id?: string;
    public domain?: string;
    public callers?: string[];
    public proxies?: string[];
    public consumer_id?: string;
    public created_at?: string;
    public expires_at?: string;
    public max_hops?: number;
    public signature?: string;
    public credential_id: string;
    public owner_id: string;
    constructor(credential_id: string, owner_id: string) {
        this.credential_id = credential_id;
        this.owner_id = owner_id;
    }

}

