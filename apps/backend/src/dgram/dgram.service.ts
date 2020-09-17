import { Injectable, Inject } from '@nestjs/common';
import { Socket } from 'dgram';
import { DGRAM_SOCKET } from './dgram.constants';

@Injectable()
export class DgramService {
  public dgram: Socket;

  constructor(@Inject(DGRAM_SOCKET) private readonly dgramSocket: Socket) {}

  createDgramSocket() {
    console.log('create dgram socket');
    this.dgram = this.dgramSocket;
  }

  getDgramSocket() {
    return this.dgram;
  }

  root(): string {
    return 'Hello from DgramServie';
  }

  close() {
    console.log('dgram.service: close()');
    this.dgram.close();
  }
}
