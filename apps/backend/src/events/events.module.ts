import { Module } from '@nestjs/common';

import { ProcessModule } from '../process/process.module';
import { EventsGateway } from './events.gateway';
import { DgramModule } from '../dgram/dgram.module';
import { DRONE_PORT, DRONE_STATUS_PORT } from '../dgram/dgram.constants';

@Module({
  imports: [
    ProcessModule,
    DgramModule.forRoot([{ port: DRONE_PORT }, { port: DRONE_STATUS_PORT }]),
  ],
  providers: [EventsGateway],
})
export class EventsModule {}
