import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable() // 스프링의 @Bean, @Component와 유사
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {
    // 인스턴스 주입
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
