import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule], // 협력할 모듈 정의
  providers: [CpuService],
  exports: [CpuService],
})
export class CpuModule {}
