import { AllExceptionFilters } from './commons/filters/http-exception.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as momentToTimezone from 'moment-timezone';
import { LoggingInterceptor } from './commons/interceptors/logging.interceptor';
import { TimeoutInterceptor } from './commons/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor(), new TimeoutInterceptor());
  app.useGlobalFilters(new AllExceptionFilters());

  Date.prototype.toJSON = function (): any {
    return momentToTimezone(this)
      .tz('America/Sao_Paulo')
      .format('YYYY-MM-DD HH:mm:ss.SSS');
  };
  await app.listen(3000);
}
bootstrap();
