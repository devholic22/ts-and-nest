import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController] // MessagesController 의존으로 변경됨 - 컨트롤러를 만들 때 모듈에 등록해야 하기 때문
})
export class MessagesModule {}