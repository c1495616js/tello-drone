import { BindOptions } from 'dgram';

import {
  DRONE_SOCKET,
  DRONE_STATUS_SOCKET,
  DRONE_STREAM_SOCKET,
} from '../dgram/dgram.constants';

export type Token =
  | typeof DRONE_SOCKET
  | typeof DRONE_STATUS_SOCKET
  | typeof DRONE_STREAM_SOCKET;

export interface ExtendBindOptions extends BindOptions {
  token: Token;
}
