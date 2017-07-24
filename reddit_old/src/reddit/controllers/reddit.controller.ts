import { AuthChain } from '../../models/mst/auth/oauth2/auth_chain.model';
import { Person } from '../../models/msp/person.model';
import { Request } from '../../models/mst/bot/request.model';
import { Meta } from '../../models/msp/meta.model';
import { Map } from '../../models/mst/map.model';
import { Post as RedditPost } from './../models/post.model';
// tslint:disable:no-string-literal

import { Response } from '../../models/mst/bot/response.model';
import { JsonController, Post, Body } from 'routing-controllers';

import * as snoowrap from 'snoowrap';

@JsonController('/reddit')
export class RedditController {
    @Post('/subreddit')
    remind(@Body() request: Request): Promise<any> {
        const reddit = this.constructClient(request);

        switch (request.method) {
            case ('get_hot'):
                return reddit.getHot()
                .map((res) => {
                    return this.buildPost(res);
                })
                .then((posts: RedditPost) => {
                    return this.buildResponse(posts);
                });
            case ('get_subreddit'):
                return reddit.getSubreddit(request.data['subreddit'].subreddit_id).getHot()
                .map((res) => {
                    return this.buildPost(res);
                })
                .then((posts: RedditPost) => {
                    return this.buildResponse(posts);
                });
            case ('upvote'):
                return reddit.getSubmission((request.data['post'] as RedditPost).meta.ids['post_id'])
                .fetch()
                .then((submission) => {
                    submission.upvote();
                    return new Response();
                });
        }
    }

    private constructClient(request: Request): any {
        let token: AuthChain;
        let reddit: any;

        if (request.data && request.data['auth']) {
            token = request.data['auth'];
            reddit = new snoowrap({
                userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
                accessToken: token.credentials.token
            });
        } else {
            reddit = new snoowrap({
                userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
                clientId: 'QBEAPWoeutN-Nw',
                clientSecret: 'fgNqhPpfBCoIRWCIvtMTyBo95mM',
                refreshToken: '71562304-ANkN7qQZ9oJ2Bh77vEwyQGe5Q9c'
            });
        }

        reddit.config({proxies: false});

        return reddit;
    }

    private buildPost(res: any): RedditPost {
        const redditPost = new RedditPost();
        redditPost.title = res.title;
        redditPost.votes_up = res.ups;
        redditPost.votes_down = res.downs;
        redditPost.meta = new Meta();
        redditPost.meta.url = res.url;
        redditPost.meta.icon = res.preview && res.preview.images && res.preview.images.length > 0
            ? res.preview.images[0].source.url : null;
        redditPost.meta.ids = {
            'reddit.com' : res.permalink,
            post_id: res.id
        };
        redditPost.review_count = res.num_comments;
        const author = new Person();
        author.alias = res.author.name;
        redditPost.author = author;
        redditPost.post_hint = res.post_hint ? res.post_hint : 'link';

        return redditPost;
    }

    private buildResponse(posts: RedditPost): Response {
            const map = new Map();

            map['listings'] = posts;

            const botResponse = new Response();
            botResponse.result = map;
            return botResponse;
    }
}
