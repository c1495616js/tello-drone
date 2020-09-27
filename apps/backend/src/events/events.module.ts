import { Module } from '@nestjs/common';

import { ProcessModule } from '../process/process.module';
import { EventsGateway } from './events.gateway';
import { DgramModule } from '../dgram/dgram.module';
import {
  DRONE_PORT,
  DRONE_SOCKET,
  DRONE_STATUS_PORT,
  DRONE_STATUS_SOCKET,
  DRONE_STREAM_PORT,
  DRONE_STREAM_SOCKET,
} from '../dgram/dgram.constants';

@Module({
  imports: [
    ProcessModule,
    DgramModule.forRoot([
      { port: DRONE_PORT, token: DRONE_SOCKET },
      { port: DRONE_STATUS_PORT, token: DRONE_STATUS_SOCKET },
      { port: DRONE_STREAM_PORT, token: DRONE_STREAM_SOCKET },
    ]),
  ],
  providers: [EventsGateway],
})
export class EventsModule {}
