import { NestFactory } from '@nestjs/core';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { microservicesEndpoints } from 'microservices/microservices.json';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  microservicesEndpoints.forEach(
    (microservice)=>{
      app.use(microservice.endpointName, createProxyMiddleware(microservice.options));
    }
  );
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
