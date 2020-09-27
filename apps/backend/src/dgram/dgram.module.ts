import { Module, DynamicModule } from '@nestjs/common';
import { SocketOptions, BindOptions } from 'dgram';

import { createDgramProviders } from './dgram.providers';
import { DgramService } from './dgram.service';

@Module({
  providers: [DgramService],
  exports: [DgramService],
})
export class DgramModule {
  static forRoot(
    bindOptions: BindOptions[] = [{ port: 3000 }, { port: 3001 }],
    socketOptions: SocketOptions = { type: 'udp4' },
    onMessage: () => void = () => {}
  ): DynamicModule {
    const providers = createDgramProviders(
      bindOptions,
      socketOptions,
      onMessage
    );
    return {
      module: DgramModule,
      providers: [...providers],
      exports: [...providers],
    };
  }
}
