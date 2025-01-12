import { Order } from '@menumate/core';
import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class OrderGateway {
  @WebSocketServer()
  server: Server;

  notifyOrderStatusUpdate(order: Order) {
    this.server.emit('orderStatusUpdated', order);
  }
}