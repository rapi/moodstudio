import { Module } from '@nestjs/common';
import { BehanceController } from './behance.controller';
import { BehanceService } from './behance.service';

@Module({
  controllers: [BehanceController],
  providers: [BehanceService]
})
export class BehanceModule {}
