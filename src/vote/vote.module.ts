import { Module } from '@nestjs/common';
import { VoteController } from './vote.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [VoteController],
})
export class VoteModule {}
