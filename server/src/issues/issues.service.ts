import { Injectable } from '@nestjs/common';

@Injectable()
export class IssuesService {
  // TODO: Implement issue-related business logic
  findAll() {
    return 'This action returns all issues';
  }

  findOne(id: number) {
    return `This action returns issue #${id}`;
  }

  create(createIssueDto: any) {
    return 'This action creates a new issue';
  }

  update(id: number, updateIssueDto: any) {
    return `This action updates issue #${id}`;
  }

  remove(id: number) {
    return `This action removes issue #${id}`;
  }
}