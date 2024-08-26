import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable() // 스프링의 @Bean, @Component와 유사
export class MessagesRepository {
  async findOne(id: string) {
    // 비동기 적용 필요: 하드 드라이브 등에서 읽어들이기 때문
    const contents = await readFile('messages.json', 'utf8'); // messages.json 이용
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999); // 랜덤으로 id 결정

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
