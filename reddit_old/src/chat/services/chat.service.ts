import { ChatMessage } from './../models/chat-message.model';
import { Service } from 'typedi';

import Server = SocketIO.Server;

@Service()
export class ChatService {
    socket: Server;

    constructor(io: Server) {
      this.socket = io;
      this.initializeSocket();
    }

    private initializeSocket(): void {
      this.socket.on('connection', (socket) => {
        console.log('user connected');

        socket.on('disconnect', () => {
          console.log('user disconnected');
        });

        socket.on('join', (uniqueId) => {
          console.log(uniqueId);
          socket.join(uniqueId); // We are using room of socket io
        });

        socket.on('add-message', (message) => {
          console.log(message);
          this.socket.to(message.id).emit('message', message.chatMessage);
        });

        socket.on('default-messages', (uniqueId) => {
          console.log('default-messages');
          console.log(uniqueId);
          //deafult values
          this.socket.sockets.in(uniqueId).emit('message', new ChatMessage(true, 'text', 'User message 1: this is a default message'));
          this.socket.sockets.in(uniqueId).emit('message', new ChatMessage(false, 'text', 'Bot message 1: this is a default message'));
        });
      });
    }
}