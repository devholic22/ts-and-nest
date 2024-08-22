import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // 하나의 라우트 핸들러에 파이프를 적용할 수도 있음
  // 강의에서는 모든 요청에 대해 유입되는 모든 요청을 전역적으로 ValidationPipe로 검증
  // 특정 핸들러에 검증 규칙 (파이프)을 추가하지 않는다면 파이프는 그 핸들러에서 작동하지 않게 됨
  app.useGlobalPipes(
    new ValidationPipe()
  );
  await app.listen(3000);
}
bootstrap();
