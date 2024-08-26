import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
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
  async getMessages(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id); // 데이터베이스 조회 작업이 이루어지므로 async-await 적용
    if (!message) {
      throw new NotFoundException('message not found'); // 404 연결
    }
    return message;
  }
}
