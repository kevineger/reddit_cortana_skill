import 'reflect-metadata';
import { ChatService } from './chat/services/chat.service';
import { useContainer, useExpressServer } from 'routing-controllers';
import {Container} from 'typedi';
import { ApplicationInsightsService } from './services/application-insights.service';
import * as express from 'express';

import * as http from 'http';
import * as io from 'socket.io';

const appInsights = new ApplicationInsightsService(process.env.appInsightsKey || 'b80adc27-9c0b-46f7-9bbc-9aeb384206f1');
const app = express();
app.set('port', process.env.PORT || 3000);

const httpServer = http.createServer(app);

const chatService = new ChatService(io.listen(httpServer, {transports: ['websocket']}));

Container.set(ApplicationInsightsService, appInsights);
Container.set(ChatService, chatService);

useContainer(Container);

useExpressServer(app, {
  controllers: [
    __dirname + '/remember/controllers/*.js',
    __dirname + '/reddit/controllers/*.js',
    __dirname + '/smmry/controllers/*.js',
    __dirname + '/chat/controllers/*.js'
    ]
});

httpServer.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});