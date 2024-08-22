import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  // 기존 any에서 CreateMessageDto로 수정 반영
  createMessages(@Body() body: CreateMessageDto) {
    // 유입되는 요청의 본문을 자동으로 추출하여 라우트 핸들러에 인수로 제공
    console.log(body);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log(id);
  }
}
