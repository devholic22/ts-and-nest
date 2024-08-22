import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {

    }

    @Post()
    createMessages(@Body() body: any) { // 유입되는 요청의 본문을 자동으로 추출하여 라우트 핸들러에 인수로 제공
        console.log(body);
    }

    @Get('/:id')
    getMessages(@Param('id') id: string) {
        console.log(id);
    }
}
