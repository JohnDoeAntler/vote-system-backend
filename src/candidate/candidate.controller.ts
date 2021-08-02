import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly dbService: DbService) {}

  @Get()
  findAll() {
    return this.dbService.candidates();
  }
}
