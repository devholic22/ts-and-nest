import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService], // 내보낼 클래스 정의
})
export class PowerModule {}
