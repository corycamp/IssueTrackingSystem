import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
  // TODO: Implement comment-related business logic
  findAll() {
    return 'This action returns all comments';
  }

  findOne(id: number) {
    return `This action returns comment #${id}`;
  }

  create(createCommentDto: any) {
    return 'This action creates a new comment';
  }

  update(id: number, updateCommentDto: any) {
    return `This action updates comment #${id}`;
  }

  remove(id: number) {
    return `This action removes comment #${id}`;
  }
}