import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  // TODO: Implement project-related business logic
  findAll() {
    return 'This action returns all projects';
  }

  findOne(id: number) {
    return `This action returns project #${id}`;
  }

  create(createProjectDto: any) {
    return 'This action creates a new project';
  }

  update(id: number, updateProjectDto: any) {
    return `This action updates project #${id}`;
  }

  remove(id: number) {
    return `This action removes project #${id}`;
  }
}