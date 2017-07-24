//
// IMPORTANT : DO NOT EDIT. THIS CLASS WAS AUTO-GENERATED
// tslint:disable:variable-name
//

import {Chain} from './../../../../mst/auth/chain.model';
import {AccessToken} from './../../../../mst/auth/oauth2/access_token.model';

export class AuthChain extends Chain {
    readonly '@': string = 'mst.auth.ext.oauth2.auth_chain';

    public credentials?: AccessToken;
    constructor(credential_id: string, owner_id: string) {
        super(credential_id, owner_id);
    }

}

