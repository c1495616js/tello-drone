import { Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DgramModule } from '../dgram/dgram.module';
import { DgramService } from '../dgram/dgram.service';

const PORT = 8889;
const HOST = '192.168.10.1';

@Module({
  imports: [DgramModule.forRoot({ address: HOST, port: PORT })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private readonly dgramService: DgramService) {}

  configure() {
    const dgramSocketServer = this.dgramService.createDgramSocket();
  }
}
