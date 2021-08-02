import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidateModule } from './candidate/candidate.module';
import { DbModule } from './db/db.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:admin@localhost:27017/nest'),
    DbModule,
    CandidateModule,
    VoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
