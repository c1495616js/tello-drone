import { createSocket, BindOptions, SocketOptions, Socket } from 'dgram';
import { ExtendBindOptions } from '../common/interface';

export const createDgramProviders = (
  bindOptions: ExtendBindOptions[],
  socketOptions: SocketOptions = { type: 'udp4' },
  onMessage: () => void = () => {}
) => {
  const ProviderFactory = (extendBindOption: ExtendBindOptions) => ({
    provide: extendBindOption.token,
    useFactory: () => {
      console.log('socketOptions');
      console.log(socketOptions);
      const socket: Socket = createSocket(socketOptions);
      try {
        console.log('bindOptions');
        console.log(bindOptions);
        return new Promise((resolve) =>
          socket.bind(extendBindOption, () => resolve(socket))
        );
      } catch (error) {
        console.error('error:', error);
      }
    },
  });
  return bindOptions.map((bindOption) => ProviderFactory(bindOption));
};
