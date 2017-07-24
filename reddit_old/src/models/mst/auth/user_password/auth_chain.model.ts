//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Chain} from './../../../mst/auth/chain.model';

export class AuthChain extends Chain {
    readonly '@': string = 'mst.auth.user_password.auth_chain';

    public user_name?: string;
    public password?: string;
    constructor(credential_id: string, owner_id: string) {
        super(credential_id, owner_id);
    }

}

