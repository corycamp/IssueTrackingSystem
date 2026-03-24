import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Issue } from './issue.entity';
import { CreateIssueDto } from './issues.dto';
import { UpdateIssueDto } from './issues.dto';

@Injectable()
export class IssuesService {
  constructor(
    @InjectRepository(Issue)
    private readonly issueRepository: Repository<Issue>,
  ) {}

  findAll(): Promise<Issue[]> {
    return this.issueRepository.find();
  }

  async findOne(id: number): Promise<Issue> {
    const issue = await this.issueRepository.findOneBy({ id });
    if (!issue) {
      throw new NotFoundException(`Issue with id ${id} not found`);
    }
    return issue;
  }

  create(createIssueDto: CreateIssueDto): Promise<Issue> {
    const issue = this.issueRepository.create(createIssueDto);
    return this.issueRepository.save(issue);
  }

  async update(id: number, updateIssueDto: UpdateIssueDto): Promise<Issue> {
    const issue = await this.issueRepository.preload({ id, ...updateIssueDto });
    if (!issue) {
      throw new NotFoundException(`Issue with id ${id} not found`);
    }
    return this.issueRepository.save(issue);
  }

  async remove(id: number): Promise<void> {
    const result = await this.issueRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Issue with id ${id} not found`);
    }
  }
}