import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Socket as DgramSocket } from 'dgram';
import { Logger } from '@nestjs/common';
import { throttle } from 'lodash';

import { DgramService } from '../dgram/dgram.service';
import { ProcessService } from '../process/process.service';

function parseState(state: string) {
  return state
    .split(';')
    .map((x) => x.split(':'))
    .reduce((data, [key, value]) => {
      data[key] = value;
      return data;
    }, {});
}

@WebSocketGateway()
export class EventsGateway implements OnGatewayInit, OnGatewayConnection {
  constructor(
    private readonly dgramService: DgramService,
    private readonly processService: ProcessService
  ) {}
  private drone: DgramSocket;
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  afterInit(server: Server) {
    this.logger.log('Init');
    const [
      drone,
      droneStatus,
      droneStream,
    ] = this.dgramService.createDgramSocket();
    this.drone = drone;

    this.processService.onMessage(drone, (msg) =>
      console.log('drone:', msg.toString())
    );

    this.processService.onMessage(
      droneStatus,
      throttle((state) => {
        const formattedState = parseState(state.toString());
        this.server.emit('dronestate', formattedState);
      }, 100)
    );

    this.processService.onMessage(
      droneStream,
      throttle((stream) => {}, 100)
    );

    this.processService.send(drone, 'command');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    this.server.emit('status', 'CONNECTED');
  }

  @SubscribeMessage('command')
  handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ): void {
    this.processService.send(this.drone, data);
  }
}
