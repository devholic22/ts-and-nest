import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString() // 스프링의 validation과 유사
  content: string;
}
