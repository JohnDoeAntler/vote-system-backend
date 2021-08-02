import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Candidate } from './candidate.schema';

export type VoteDocument = Vote & Document;

@Schema({ timestamps: true })
export class Vote {
	@Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Candidate.name })
	candidate: Candidate;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
