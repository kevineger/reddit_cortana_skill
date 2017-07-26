import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import ChatRouter from './routers/chat.router';

// Creates and configures an ExpressJS web server.
class App {

  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    // Create chat connector for communicating with the Bot Framework Service
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });

    this.express.use('/', router);
    this.express.use('/api', ChatRouter);
  }
}

export default new App().express;