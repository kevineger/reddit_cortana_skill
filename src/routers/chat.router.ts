import { Router, Request, Response, NextFunction } from 'express';
// import { Router, Response, NextFunction } from 'express';
// import { Request } from '../models/mst/bot/request.model';
import { RedditController } from '../controllers/reddit.controller';

export class ChatRouter {
    router: Router

    /**
     * Initialize the ChatRouter
     */
    constructor() {
        this.router = Router();
        this.init();
    }

    public directRequest(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        const ctrl = new RedditController;
        console.log("Directing request");
        switch (req.body.method) {
            case ('get_hot'):
                console.log("Handling Request: get_hot");
                ctrl.getHot(req.body.data)
                    .then(data => {
                        console.log("Data capture:", data, typeof data);
                        res.json(data);
                    });
            // TEMP
            // default:
            //     console.log("Getting default");
            //     var response = ctrl.getHot(null)
            //         .then(data => {
            //             console.log("Data capture:", data);
            //             res.json({
            //                 message: data
            //             });
            //         });
        }
    }

    public get(req: Request, res: Response) {
        res.json({
            message: 'Hello World! From chat.router.'
        });
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.get);
        this.router.post('/', this.directRequest);
    }

}

const chatRouter = new ChatRouter();
chatRouter.init();

export default chatRouter.router;