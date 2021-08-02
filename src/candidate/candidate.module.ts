import { Module } from '@nestjs/common';
import { CandidateController } from './candidate.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [CandidateController],
})
export class CandidateModule {}
