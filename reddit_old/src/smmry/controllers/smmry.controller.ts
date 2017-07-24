import { Request } from '../../models/mst/bot/request.model';
import { Response } from '../../models/mst/bot/response.model';
import { Body, JsonController, Post } from 'routing-controllers';
import { Map } from '../../models/mst/map.model';
import * as http from 'request-promise';
import * as Bluebird from 'bluebird';
import { ByUrlRequest } from '../models/by_url_request.model';
import { Response as smmryResponse } from '../models/response.model';

// tslint:disable:no-string-literal
@JsonController('/smmry')
export class RedditController {
    @Post()
    post(@Body() request: Request): Bluebird<any> {
        switch (request.method) {
            case ('by_url'):
                return this.summaryByUrl(request.data['request_url']);
            // case ('by_text'):
            //     return this.summaryByText();
        }
    }

    private summaryByUrl(smmryRequest: ByUrlRequest): Bluebird<any> {
        const apiUrl = this.constructSummaryUrl(smmryRequest);
        return http.post(apiUrl, {json: true}).promise().then((res) => {
            const map = new Map();

            const response = new smmryResponse();
            response.content = res['sm_api_content'];

            map['summarization'] = response;

            const botResponse = new Response();
            botResponse.result = map;
            return botResponse;
        });
    }

    private constructSummaryUrl(smmryRequest: ByUrlRequest): string {
        let returnUrl = 'http://api.smmry.com/&SM_API_KEY=' + smmryRequest.api_key;

        if (smmryRequest.url) {
            returnUrl += '&SM_URL=' + smmryRequest.url;
        }

        if (smmryRequest.length) {
            returnUrl += '&SM_LENGTH=' + smmryRequest.length;
        }

        if (smmryRequest.keyword_count) {
            returnUrl += '&SM_KEYWORD_COUNT=' + smmryRequest.keyword_count;
        }

        if (smmryRequest.quote_avoid) {
            returnUrl += '&SM_QUOTE_AVOID';
        }

        if (smmryRequest.with_break) {
            returnUrl += '&SM_WITH_BREAK';
        }

        console.log(returnUrl);

        return returnUrl;
    }
}
