import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbService } from './db.service';
import { Candidate, CandidateSchema } from './schemas/candidate.schema';
import { Vote, VoteSchema } from './schemas/vote.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Vote.name,
        schema: VoteSchema,
      }, {
        name: Candidate.name,
        schema: CandidateSchema,
      }
    ]),
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
