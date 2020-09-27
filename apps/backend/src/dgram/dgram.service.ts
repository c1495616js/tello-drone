import { Injectable, Inject } from '@nestjs/common';
import { Socket } from 'dgram';
import { DRONE_SOCKET, DRONE_STATUS_SOCKET } from './dgram.constants';

@Injectable()
export class DgramService {
  public dgram: Socket;
  public dgramStatus: Socket;
  constructor(
    @Inject(DRONE_SOCKET) private readonly dgramSocket: Socket,
    @Inject(DRONE_STATUS_SOCKET) private readonly droneStatusSocket: Socket
  ) {}

  createDgramSocket() {
    console.log('create dgram socket');
    this.dgram = this.dgramSocket;
    this.dgramStatus = this.droneStatusSocket;
    return [this.dgram, this.dgramStatus];
  }
}
