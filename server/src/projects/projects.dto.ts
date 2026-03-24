import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  owner_id: number;
}

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
