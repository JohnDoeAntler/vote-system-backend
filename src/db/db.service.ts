import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Candidate, CandidateDocument } from './schemas/candidate.schema';
import { Vote, VoteDocument } from './schemas/vote.schema';

@Injectable()
export class DbService {
	constructor(
    @InjectModel(Vote.name) private readonly voteModel: Model<VoteDocument>,
    @InjectModel(Candidate.name) private readonly candidateModel: Model<CandidateDocument>,
	) {}

	async total () {
		return await this.voteModel.find().lean();
	}

	async vote (name: string) {
		let candidate = await this.candidateModel.findOne({ name }).lean();

		if (!candidate) {
			candidate = await new this.candidateModel({ name }).save();
		}

		return await new this.voteModel({ candidate: candidate._id }).save();
	}

	async period (minute: number) {
		let period = new Date();
		period.setMinutes(period.getMinutes() - minute);

		const votes = await this.voteModel.find({ createdAt: {
			$gte: period,
		}}).lean();

		return votes;
	}

	async candidates() {
		return await this.candidateModel.find().lean();
	}
}
