import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CandidateDocument = Candidate & Document;

@Schema({ timestamps: true })
export class Candidate {
	@Prop({ required: true })
	name: string;
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);
