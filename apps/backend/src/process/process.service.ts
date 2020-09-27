import { Injectable } from '@nestjs/common';
import { Socket } from 'dgram';
import { DRONE_PORT, DRONE_HOST } from '../dgram/dgram.constants';
@Injectable()
export class ProcessService {
  onMessage(dgramSocket: Socket, callback: (msg: Buffer) => void) {
    dgramSocket.on('message', callback);
  }
  async send(dgramSocket: Socket, command: string) {
    console.log('send command:', command);

    dgramSocket.send(
      command,
      0,
      command.length,
      DRONE_PORT,
      DRONE_HOST,
      (err) => console.error('Command Error:', err)
    );
  }
}
