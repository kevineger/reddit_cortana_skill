import { Get, JsonController, QueryParam } from 'routing-controllers';

@JsonController('/remember')
export class RememberController {

    constructor() {
        //blah
    }

    @Get('/remind')
    remind(@QueryParam('query') query: string): string {
        return 'Does this work?';
    }
}
