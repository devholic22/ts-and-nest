import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // 이것도 여기에서 직접 의존하고 있다. 실제 코드에서는 권장 X
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  // 기존 any에서 CreateMessageDto로 수정 반영
  createMessages(@Body() body: CreateMessageDto) {
    // 유입되는 요청의 본문을 자동으로 추출하여 라우트 핸들러에 인수로 제공
    this.messagesService.create(body.content);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    this.messagesService.findOne(id);
  }
}
