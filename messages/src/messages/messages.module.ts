import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController], // MessagesController 의존으로 변경됨 - 컨트롤러를 만들 때 모듈에 등록해야 하기 때문
  providers: [MessagesService, MessagesRepository], // 주입시켜주기
})
export class MessagesModule {}
