import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  ClientProxy,
  Transport
} from '@nestjs/microservices';
import { env } from 'process';

@Injectable()
export class ClientProxySmartRanking {
  getClientProxyInstance(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [env.RABBIT_URL],
        queue: 'admin-backend'
      }
    });
  }
}
