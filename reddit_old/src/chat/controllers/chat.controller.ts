import { ChatService } from './../services/chat.service';
import { ApplicationInsightsService } from './../../services/application-insights.service';
import { JsonController, Post, Body } from 'routing-controllers';
import { ChatMessage } from '../models/chat-message.model';
import { Service } from 'typedi';


import Server = SocketIO.Server;

// tslint:disable:no-string-literal
@JsonController('/chat')
@Service()
export class ChatControllerController {
    socket: Server;

    constructor(chatService: ChatService, appInsights: ApplicationInsightsService) {
      this.socket = chatService.socket;
    }

    @Post('/response')
    post(@Body() request: any): void {
        console.log('response end-point!!!');
        if (request && request.Conversation && request.Conversation.id
              && request.Type === 'message'
              && request.ChannelData
              && request.ChannelData.EchoData
              && request.ChannelData.EchoData.socketid) {
          console.log(request.Conversation.id);
          console.log(request.ChannelData.EchoData.socketid);
          // io.sockets.in(req.body.Conversation.id).emit('message', {isUser: false, rawJson: req.body });
        //   this.socket.to(request.ChannelData.EchoData.socketid).emit('message', new ChatMessage(false, request));
          this.socket.in(request.ChannelData.EchoData.socketid).emit('message', new ChatMessage(false, request));
        } else if (request && request.conversation && request.conversation.id
              && request.type === 'message'
              && request.channelData && request.channelData.echoData
              && request.channelData.echoData.socketid) {
          console.log(request.conversation.id);
          console.log(request.channelData.echoData.socketid);
          this.socket.to(request.channelData.echoData.socketid).emit('message', new ChatMessage(false, request));
        } else if (request && request.conversation && request.conversation.id
              && request.type === 'message'
              && request.channeldata && request.channeldata.echodata
              && request.channeldata.echodata.socketid) {
          console.log(request.conversation.id);
          console.log(request.channeldata.echodata.socketid);
          this.socket.to(request.channeldata.echodata.socketid).emit('message', new ChatMessage(false, request));
        }
        console.log(request);
        return request;
    }
}
