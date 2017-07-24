//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Chain} from './../../mst/auth/chain.model';

export class BotletSecretChain extends Chain {
    readonly '@': string = 'mst.auth.botlet_secret_chain';

    public credential_type?: string;
    public credentials?: any;
    constructor(credential_id: string, owner_id: string) {
        super(credential_id, owner_id);
    }

}

