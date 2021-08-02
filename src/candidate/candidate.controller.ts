import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly dbService: DbService) {}

  @Get()
  findAll() {
    return this.dbService.candidates();
  }
}
