import { createSocket, BindOptions, SocketOptions, Socket } from 'dgram';

import { DRONE_SOCKET, DRONE_STATUS_SOCKET } from './dgram.constants';

type Token = typeof DRONE_SOCKET | typeof DRONE_STATUS_SOCKET;

export const createDgramProviders = (
  bindOptions: BindOptions[] = [{ port: 3000 }, { port: 3001 }],
  socketOptions: SocketOptions = { type: 'udp4' },
  onMessage: () => void = () => {}
) => {
  const ProviderFactory = (token: Token, key: number) => ({
    provide: token,
    useFactory: () => {
      console.log('socketOptions');
      console.log(socketOptions);
      const socket: Socket = createSocket(socketOptions);
      try {
        console.log('bindOptions');
        console.log(bindOptions);
        return new Promise((resolve) =>
          socket.bind(bindOptions[key], () => resolve(socket))
        );
      } catch (error) {
        console.error('error:', error);
      }
    },
  });
  return [
    ProviderFactory(DRONE_SOCKET, 0),
    ProviderFactory(DRONE_STATUS_SOCKET, 1),
  ];
};
