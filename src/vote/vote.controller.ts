import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateVoteDto as VoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { DbService } from 'src/db/db.service';

@Controller('vote')
export class VoteController {
  constructor(private readonly dbService: DbService) {}

  @Post()
  vote(@Body() dto: VoteDto) {
    return this.dbService.vote(dto.name);
  }

  @Get()
  findAll() {
    return this.dbService.total();
  }

  @Get(':minute')
  findOne(@Param('minute') minute: number) {
    return this.dbService.period(minute);
  }
}
