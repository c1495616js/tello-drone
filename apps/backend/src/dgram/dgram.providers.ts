import { createSocket, BindOptions, SocketOptions, Socket } from 'dgram';
import { rejects } from 'assert';

import { DGRAM_SOCKET } from './dgram.constants';

export const createDgramProviders = (
  bindOptions: BindOptions = { address: '127.0.0.1', port: 3000 },
  socketOptions: SocketOptions = { type: 'udp4' },
  onMessage: () => void = () => {}
) => [
  {
    provide: DGRAM_SOCKET,
    useFactory: () => {
      console.log('socketOptions');
      console.log(socketOptions);
      const socket: Socket = createSocket(socketOptions);
      try {
        console.log('bindOptions');
        console.log(bindOptions);
        return new Promise((resolve) =>
          socket.bind(bindOptions, () => resolve(socket))
        );
      } catch (error) {
        rejects(error);
      }
    },
  },
];
