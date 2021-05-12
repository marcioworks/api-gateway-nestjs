import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoriasModule } from './categorias/categorias.module';
import { ClientProxySmartRanking } from './clientProxy/client-proxy';
import { ProxyRMQModule } from './clientProxy/proxyRmq.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    CategoriasModule,
    ProxyRMQModule
  ],
  controllers: [],
  providers: [ClientProxySmartRanking]
})
export class AppModule {}
