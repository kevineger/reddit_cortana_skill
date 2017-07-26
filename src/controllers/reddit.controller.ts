import { AuthChain } from '../models/mst/auth/oauth2/auth_chain.model';
import { Person } from '../models/msp/person.model';
import { Request } from '../models/mst/bot/request.model';
import { Meta } from '../models/msp/meta.model';
import { Map } from '../models/mst/map.model';
import { Post as RedditPost } from '../models/reddit/post.model';
import { Response } from '../models/mst/bot/response.model';

import * as snoowrap from 'snoowrap';

export class RedditController {

    public getHot(requestData) {
        console.log("Controller Request:", requestData);
        const reddit = this.constructClient(requestData);
        return reddit.getHot()
            .map((res) => {
                return this.buildPost(res);
            })
            .then((posts: RedditPost) => {
                return this.buildResponse(posts)
            });
    }

    private constructClient(data: Map): any {
        let token: AuthChain;
        let reddit: any;

        if (data && data['auth']) {
            token = data['auth'];
            console.log("Credentials sent in request:", token.credentials);
            reddit = new snoowrap({
                userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
                accessToken: token.credentials.token
            });
        } else {
            console.log("Using username/pass to auth");
            reddit = new snoowrap({
                userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
                clientId: 'GGcwAo286Xyzsg',
                clientSecret: 'htHIkcNxO1chjh9x6m9JjSfZhVg',
                username: 'LowLanding',
                password: 'Lespaul94Banana94'
            });
        }

        reddit.config({ proxies: false });

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
            'reddit.com': res.permalink,
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
