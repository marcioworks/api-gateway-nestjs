import { Module } from '@nestjs/common';

import { ProxyRMQModule } from 'src/clientProxy/proxyRmq.module';
import { CategoriasController } from './categorias.controller';

@Module({
  imports: [ProxyRMQModule],
  controllers: [CategoriasController]
})
export class CategoriasModule {}
